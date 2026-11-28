import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";
import type { Thumbnail } from "@/content/seo";
import { langs, type Lang } from "@/content/site";

export type Post = Readonly<{
  slug: string;
  lang: Lang;
  title: string;
  description: string;
  date: string;
  /** 내용을 고친 날. frontmatter `updated` 가 없으면 date 와 같다. */
  updated: string;
  thumbnail: Thumbnail;
  body: string;
}>;

const postsRoot = join(process.cwd(), "src/content/blog");
const slugPattern = /^[a-z0-9]+(-[a-z0-9]+)*$/;

// 썸네일은 scripts/blog-thumbnail.ts 가 public/blog/<slug>/thumbnail.webp 로 만든다. 없으면 빌드를 멈춘다.
function requireThumbnail(slug: string): Thumbnail {
  const url = `/blog/${slug}/thumbnail.webp`;
  if (!existsSync(join(process.cwd(), "public", url))) {
    throw new Error(`${slug}: 썸네일이 없습니다. bun scripts/blog-thumbnail.ts ${slug} 로 만드세요.`);
  }
  return { url, width: 1200, height: 675 };
}

function requireText(data: Record<string, unknown>, key: string, file: string): string {
  const value = data[key];
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(`${file}: frontmatter "${key}" 값이 없습니다.`);
  }
  return value.trim();
}

function requireDate(data: Record<string, unknown>, file: string, key: "date" | "updated" = "date"): string {
  const value = data[key];
  const date = value instanceof Date ? value : new Date(String(value));
  if (Number.isNaN(date.getTime())) {
    throw new Error(`${file}: frontmatter "${key}" 는 YYYY-MM-DD 형식이어야 합니다.`);
  }
  return date.toISOString().slice(0, 10);
}

// 고친 날은 선택이다. 게시일보다 앞서면 빌드를 멈춘다.
function readUpdated(data: Record<string, unknown>, file: string, date: string): string {
  if (data.updated === undefined) return date;
  const updated = requireDate(data, file, "updated");
  if (updated < date) throw new Error(`${file}: frontmatter "updated"(${updated}) 가 "date"(${date}) 보다 앞섭니다.`);
  return updated;
}

function readPost(slug: string, lang: Lang): Post {
  const file = `${slug}/${lang}.md`;
  const { data, content } = matter(readFileSync(join(postsRoot, file), "utf8"));
  const body = content.trim();
  if (body === "") throw new Error(`${file}: 본문이 비어 있습니다.`);
  const date = requireDate(data, file);
  return {
    slug,
    lang,
    title: requireText(data, "title", file),
    description: requireText(data, "description", file),
    date,
    updated: readUpdated(data, file, date),
    thumbnail: requireThumbnail(slug),
    body,
  };
}

function readSlug(slug: string): readonly Post[] {
  if (!slugPattern.test(slug)) throw new Error(`${slug}: 폴더 이름은 영문 소문자, 숫자, 하이픈만 씁니다.`);
  const files = new Set(readdirSync(join(postsRoot, slug)));
  const missing = langs.filter((lang) => !files.has(`${lang}.md`));
  if (missing.length > 0) throw new Error(`${slug}: 번역 파일이 없습니다 (${missing.join(", ")}).`);
  return langs.map((lang) => readPost(slug, lang));
}

function readAllPosts(): readonly Post[] {
  const slugs = readdirSync(postsRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
  return slugs.flatMap(readSlug).toSorted((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));
}

// 빌드 중 동기로 한 번만 읽는다. 잘못된 글은 빌드를 실패시킨다.
let cachedPosts: readonly Post[] | undefined;

function allPosts(): readonly Post[] {
  cachedPosts ??= readAllPosts();
  return cachedPosts;
}

export function getPosts(lang: Lang): readonly Post[] {
  return allPosts().filter((post) => post.lang === lang);
}

export function getPost(lang: Lang, slug: string): Post | undefined {
  return allPosts().find((post) => post.lang === lang && post.slug === slug);
}

export function getSlugs(): readonly string[] {
  return getPosts(langs[0]).map((post) => post.slug);
}

function plainText(markdown: string): string {
  return markdown
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*`]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

// 질문으로 끝나는 제목과 바로 다음 문단을 묶는다. 표나 목록으로 이어지는 제목은 답이 문단이 아니므로 뺀다.
export function extractFaqs(body: string): ReadonlyArray<Readonly<{ q: string; a: string }>> {
  const blocks = body.split(/\n\s*\n/).map((block) => block.trim());
  return blocks.flatMap((block, index) => {
    const heading = /^#{2,3}\s+(.+[?？])$/.exec(block);
    const answer = blocks[index + 1];
    if (!heading?.[1] || !answer || /^[#|\-]/.test(answer)) return [];
    return [{ q: plainText(heading[1]), a: plainText(answer) }];
  });
}
