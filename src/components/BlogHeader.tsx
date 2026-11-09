import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { blogCopy, blogLangs, type BlogLang } from "@/content/site";

// 언어를 바꾸면 html lang 이 달라지므로 전체 페이지 이동을 쓴다.
export function BlogHeader({ lang, slug }: Readonly<{ lang: BlogLang; slug?: string }>) {
  const suffix = slug ? `/${slug}` : "";
  return (
    <header className="site-header wrap">
      <Link className="brand" href="/">
        <BrandLogo />
      </Link>
      <nav aria-label={blogCopy[lang].languageNav}>
        {blogLangs.map((item) => (
          <a
            key={item}
            className="nav-link"
            href={`/blog/${item}${suffix}`}
            hrefLang={item}
            lang={item}
            aria-current={item === lang ? "page" : undefined}
          >
            {blogCopy[item].label}
          </a>
        ))}
      </nav>
    </header>
  );
}
