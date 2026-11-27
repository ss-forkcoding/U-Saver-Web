#!/usr/bin/env bun
/**
 * 블로그 썸네일을 codex CLI 이미지 생성으로 만든다.
 *
 * 사용법:
 *   bun scripts/blog-thumbnail.ts <slug>...        지정한 글만 만든다(있으면 덮어쓴다)
 *   bun scripts/blog-thumbnail.ts --missing        썸네일이 없는 글을 모두 만든다
 *   옵션: --note "<장면 보충 설명>" (slug 1개일 때만)
 *
 * 동작: ko.md 의 title·description 으로 장면을 정하고, 빈 임시 폴더에서
 *       `codex exec -s workspace-write` 로 이미지 1장을 받아
 *       public/blog/<slug>/thumbnail.webp (1200×675, q82) 로 저장한다.
 * 종료 코드: 0 전부 성공 · 1 하나라도 실패
 */
import { copyFileSync, existsSync, mkdirSync, mkdtempSync, readdirSync, readFileSync, rmSync, statSync } from "node:fs";
import { homedir, tmpdir } from "node:os";
import { join } from "node:path";
import matter from "gray-matter";

const root = join(import.meta.dir, "..");
const blogDir = join(root, "src/content/blog");
const outPath = (slug: string) => join(root, "public/blog", slug, "thumbnail.webp");

// DESIGN.md 의 Three Colors Rule 과 단정·정직·조용함에 맞춘 그림 톤.
const STYLE = [
  "블로그 글 머리에 쓰는 16:9 썸네일 1장.",
  "절제된 3D 렌더 또는 깨끗한 제품 사진 느낌. 흰 바탕에 짙은 남색 #191970 과 하늘색 #58A6FF 만 포인트로 쓴다.",
  "아이폰과 USB 메모리·어댑터 같은 실제 사물을 단순한 구도로 보여 준다. 사물은 실제 모양과 단자 모양이 맞아야 한다.",
  "글자·숫자·로고·애플 로고·상표·워터마크·화면 속 UI 글자를 넣지 않는다. 사람 얼굴을 넣지 않는다.",
  "보라 그라데이션, 네온, 과장된 빛, 스톡 사진 느낌을 피한다.",
].join(" ");

function newestImage(dir: string, since: number): string | undefined {
  if (!existsSync(dir)) return;
  let best: { p: string; t: number } | undefined;
  const walk = (d: string) => {
    for (const name of readdirSync(d)) {
      const p = join(d, name);
      const st = statSync(p);
      if (st.isDirectory()) walk(p);
      else if (/\.(png|jpe?g|webp)$/i.test(name) && st.mtimeMs >= since && (!best || st.mtimeMs > best.t)) best = { p, t: st.mtimeMs };
    }
  };
  walk(dir);
  return best?.p;
}

async function makeThumbnail(slug: string, note?: string): Promise<boolean> {
  const { data } = matter(readFileSync(join(blogDir, slug, "ko.md"), "utf8"));
  const t0 = Date.now();
  const work = mkdtempSync(join(tmpdir(), "usaver-thumb-"));
  try {
    const ask = [
      "이미지 생성 도구로 이미지 1장만 만든다.",
      "비율: 가로:세로 = 16:9.",
      `글 제목: ${data.title}`,
      `글 요약: ${data.description}`,
      note ? `장면: ${note}` : "장면: 글의 주제를 한눈에 보여 주는 사물 한두 개.",
      `스타일: ${STYLE}`,
      "만든 이미지 파일을 현재 폴더의 out.png 로 복사한다. 그 밖의 파일을 만들거나 다른 작업을 하지 않는다.",
    ].join("\n");
    const proc = Bun.spawn(["codex", "exec", "--skip-git-repo-check", "-s", "workspace-write", "--", ask], {
      cwd: work, stdin: "ignore", stdout: "pipe", stderr: "pipe",
    });
    const code = await proc.exited;
    const src = existsSync(join(work, "out.png")) ? join(work, "out.png") : newestImage(join(homedir(), ".codex/generated_images"), t0);
    if (!src) {
      console.error(`${slug}: 이미지를 받지 못함(codex 종료 코드 ${code}) ${(await new Response(proc.stderr).text()).slice(-300)}`);
      return false;
    }
    const out = outPath(slug);
    mkdirSync(join(out, ".."), { recursive: true });
    // 16:9 로 맞춘 뒤 1200×675 로 줄인다. 원본 비율이 달라도 가운데를 잘라 크기를 고정한다.
    const tmpPng = join(work, "fit.png");
    copyFileSync(src, tmpPng);
    const dims = Bun.spawnSync(["sips", "-g", "pixelWidth", "-g", "pixelHeight", tmpPng]).stdout.toString();
    const w = Number(/pixelWidth: (\d+)/.exec(dims)?.[1]);
    const h = Number(/pixelHeight: (\d+)/.exec(dims)?.[1]);
    const cropH = Math.min(h, Math.round((w * 9) / 16));
    const cropW = Math.min(w, Math.round((cropH * 16) / 9));
    const x = Math.round((w - cropW) / 2), y = Math.round((h - cropH) / 2);
    const ok = Bun.spawnSync(["cwebp", "-quiet", "-q", "82", "-crop", String(x), String(y), String(cropW), String(cropH), "-resize", "1200", "675", tmpPng, "-o", out]).exitCode === 0;
    if (!ok) { console.error(`${slug}: webp 변환 실패`); return false; }
    console.log(`${slug}: ${out.replace(root + "/", "")} (${((Date.now() - t0) / 1000).toFixed(0)}s)`);
    return true;
  } finally {
    rmSync(work, { recursive: true, force: true });
  }
}

const args = process.argv.slice(2);
const noteIndex = args.indexOf("--note");
const note = noteIndex >= 0 ? args[noteIndex + 1] : undefined;
const slugs = args.includes("--missing")
  ? readdirSync(blogDir, { withFileTypes: true }).filter((e) => e.isDirectory() && !existsSync(outPath(e.name))).map((e) => e.name)
  : args.filter((a, i) => !a.startsWith("--") && args[i - 1] !== "--note");
if (slugs.length === 0) { console.error('usage: bun scripts/blog-thumbnail.ts <slug>... | --missing [--note "장면"]'); process.exit(1); }

// codex 이미지 생성은 동시에 3개까지만 돌린다.
const results: boolean[] = [];
for (let i = 0; i < slugs.length; i += 3) {
  results.push(...(await Promise.all(slugs.slice(i, i + 3).map((s) => makeThumbnail(s, slugs.length === 1 ? note : undefined)))));
}
process.exit(results.every(Boolean) ? 0 : 1);
