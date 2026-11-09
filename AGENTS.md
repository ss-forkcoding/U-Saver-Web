<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## U-Saver Web

App Store 마케팅 URL(`/`)과 지원 URL(`/support`), 다국어 정적 블로그(`/blog/ko`, `/blog/en`, `/blog/ja`)를 제공한다. 문구는 `src/content/site.ts`, 디자인 규칙은 `DESIGN.md`를 따른다. 런타임은 `bun`을 쓰고, 구조를 바꾸면 해당 `llm-index.txt`를 같은 변경에서 갱신한다.

### 블로그 글 추가

`src/content/blog/<slug>/` 폴더에 `ko.md`, `en.md`, `ja.md`를 모두 만든다. 하나라도 없거나 frontmatter(`title`, `description`, `date: YYYY-MM-DD`)가 잘못되면 빌드가 실패한다. 본문 제목은 `##`부터 쓴다. 사이트와 블로그는 `html lang` 때문에 루트 레이아웃을 따로 둔다.
