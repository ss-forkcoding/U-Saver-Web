import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";
import { blogLangs, type BlogLang } from "@/content/site";

export type Post = Readonly<{
  slug: string;
  lang: BlogLang;
  title: string;
  description: string;
  date: string;
  body: string;
}>;

const postsRoot = join(process.cwd(), "src/content/blog");
const slugPattern = /^[a-z0-9]+(-[a-z0-9]+)*$/;

function requireText(data: Record<string, unknown>, key: string, file: string): string {
  const value = data[key];
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(`${file}: frontmatter "${key}" 값이 없습니다.`);
  }
  return value.trim();
}

function requireDate(data: Record<string, unknown>, file: string): string {
  const value = data.date;
  const date = value instanceof Date ? value : new Date(String(value));
  if (Number.isNaN(date.getTime())) {
    throw new Error(`${file}: frontmatter "date" 는 YYYY-MM-DD 형식이어야 합니다.`);
  }
  return date.toISOString().slice(0, 10);
}

function readPost(slug: string, lang: BlogLang): Post {
  const file = `${slug}/${lang}.md`;
  const { data, content } = matter(readFileSync(join(postsRoot, file), "utf8"));
  const body = content.trim();
  if (body === "") throw new Error(`${file}: 본문이 비어 있습니다.`);
  return {
    slug,
    lang,
    title: requireText(data, "title", file),
    description: requireText(data, "description", file),
    date: requireDate(data, file),
    body,
  };
}

function readSlug(slug: string): readonly Post[] {
  if (!slugPattern.test(slug)) throw new Error(`${slug}: 폴더 이름은 영문 소문자, 숫자, 하이픈만 씁니다.`);
  const files = new Set(readdirSync(join(postsRoot, slug)));
  const missing = blogLangs.filter((lang) => !files.has(`${lang}.md`));
  if (missing.length > 0) throw new Error(`${slug}: 번역 파일이 없습니다 (${missing.join(", ")}).`);
  return blogLangs.map((lang) => readPost(slug, lang));
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

export function getPosts(lang: BlogLang): readonly Post[] {
  return allPosts().filter((post) => post.lang === lang);
}

export function getPost(lang: BlogLang, slug: string): Post | undefined {
  return allPosts().find((post) => post.lang === lang && post.slug === slug);
}

export function getSlugs(): readonly string[] {
  return getPosts(blogLangs[0]).map((post) => post.slug);
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
