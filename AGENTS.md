<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## U-Saver Web

App Store 마케팅 URL(`/`)과 지원 URL(`/support`), 개인정보 처리방침 URL(`/privacy`), 다국어 정적 블로그(`/blog/ko`, `/blog/en`, `/blog/ja`)를 제공한다. 문구는 `src/content/site.ts`, 디자인 규칙은 `DESIGN.md`를 따른다. 런타임은 `bun`을 쓰고, 구조를 바꾸면 해당 `llm-index.txt`를 같은 변경에서 갱신한다.

### 블로그 글 추가

`src/content/blog/<slug>/` 폴더에 `ko.md`, `en.md`, `ja.md`를 모두 만든다. 하나라도 없거나 frontmatter(`title`, `description`, `date: YYYY-MM-DD`)가 잘못되면 빌드가 실패한다. 본문 제목은 `##`부터 쓴다. 사이트와 블로그는 `html lang` 때문에 루트 레이아웃을 따로 둔다.

### 블로그 중복 방지

글을 쓰기 전에 `bun ai-docs/plans/blog-keywords/post-ledger.ts check --slug <slug>`를 실행한다. 집필 계획에 없는 글감은 `check "<키워드>"`로 검사한다. 종료 코드 1이면 쓰지 않고 기존 글을 고치며, 2이면 겹치는 글을 칸에게 보여 주고 결정을 받는다. 게시한 뒤에는 계획의 체크박스를 표시하고 `sync`로 게시 대장을 갱신한다. 이 폴더는 키워드 비공개를 위해 gitignore 대상이다.
