"use client";

import { usePathname } from "next/navigation";
import { blogCopy, langs, type Lang } from "@/content/site";

// 언어를 바꾸면 html lang 이 달라지므로 전체 페이지 이동을 쓴다. 같은 페이지의 다른 언어로 간다.
export function LanguageNav({ lang, label }: Readonly<{ lang: Lang; label: string }>) {
  const rest = usePathname().split("/").slice(2).join("/");
  return (
    <nav className="language-nav" aria-label={label}>
      {langs.map((item) => (
        <a
          key={item}
          className="nav-link"
          href={`/${item}${rest ? `/${rest}` : ""}`}
          hrefLang={item}
          lang={item}
          aria-current={item === lang ? "page" : undefined}
        >
          {blogCopy[item].label}
        </a>
      ))}
    </nav>
  );
}
