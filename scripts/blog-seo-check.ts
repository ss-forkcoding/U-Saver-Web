// 블로그 글의 검색·답변 노출 기준을 검사한다. 기준의 근거는 .claude/skills/blog-writing/SKILL.md 3-1절.
// 사용: bun scripts/blog-seo-check.ts [slug...]   (slug 없으면 전체) — 위반이 있으면 exit 1
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";

const root = join(import.meta.dir, "..", "src/content/blog");
const suffix = " | U-Saver";
// 검색 결과는 픽셀 폭으로 자른다. 한글·가나·한자·전각 문자는 2, 나머지는 1로 센 "폭"으로 잰다.
// 제목은 사이트 접미사 포함 60폭(영문 약 60자, 한글 약 25자), 설명은 70~160폭.
const limits = { title: 60, desc: [70, 160] } as const;
const wide = /[\u{1100}-\u{11ff}\u{3000}-\u{9fff}\u{ac00}-\u{d7af}\u{ff00}-\u{ffef}]/u;
const lead = [40, 320] as const;
const minFacts = 3;
// 단위가 붙은 숫자만 사실로 센다(연도·목록 번호 제외).
const fact = /\d[\d,.]*\s*(%|GB|TB|MB|Gbps|Mbps|W|mAh|원|KRW|ウォン|円|장|枚|개|個|초|秒|분|分|시간|時間|일|日|photos?|files?|seconds?|minutes?|hours?|days?)/gi;

const len = (s: string) => [...s].length;
const width = (s: string) => [...s].reduce((n, ch) => n + (wide.test(ch) ? 2 : 1), 0);
const slugs = process.argv.slice(2).length > 0 ? process.argv.slice(2) : readdirSync(root, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name);
let bad = 0;
for (const slug of slugs) {
  for (const lang of ["ko", "en", "ja"] as const) {
    const { data, content } = matter(readFileSync(join(root, slug, `${lang}.md`), "utf8"));
    const issues: string[] = [];
    const t = width(String(data.title) + suffix);
    const d = width(String(data.description));
    if (t > limits.title) issues.push(`title 폭 ${t}>${limits.title}`);
    if (d < limits.desc[0] || d > limits.desc[1]) issues.push(`description 폭 ${d} (${limits.desc[0]}-${limits.desc[1]})`);
    const first = content.trim().split(/\n\s*\n/).find((p) => !p.startsWith("#") && !p.startsWith("!") && !p.startsWith("|")) ?? "";
    const firstLen = len(first.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/[*`]/g, ""));
    if (firstLen < lead[0] || firstLen > lead[1]) issues.push(`lead ${firstLen} (${lead[0]}-${lead[1]})`);
    const facts = (content.match(fact) ?? []).length;
    if (facts < minFacts) issues.push(`facts ${facts}<${minFacts}`);
    if (data.updated !== undefined) {
      const u = new Date(String(data.updated instanceof Date ? data.updated.toISOString() : data.updated));
      const p = new Date(String(data.date instanceof Date ? data.date.toISOString() : data.date));
      if (Number.isNaN(u.getTime()) || u < p) issues.push("updated 가 date 보다 앞서거나 형식이 틀림");
    }
    if (issues.length > 0) {
      bad++;
      console.log(`✘ ${slug}/${lang}.md  ${issues.join(" · ")}`);
    }
  }
}
console.log(bad === 0 ? `✔ ${slugs.length}편 통과` : `${bad}개 파일 위반`);
process.exit(bad === 0 ? 0 : 1);
