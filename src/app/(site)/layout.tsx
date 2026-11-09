import type { Metadata } from "next";
import Link from "next/link";
import { ogImage } from "@/content/seo";
import { site } from "@/content/site";
import { hand } from "../fonts";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | 컴퓨터 없이 USB로 아이폰 백업`, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: { type: "website", siteName: site.name, locale: "ko_KR", images: [ogImage] },
  twitter: { card: "summary_large_image", images: [ogImage.url] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className={hand.variable} data-scroll-behavior="smooth">
      <body>
        <header className="site-header wrap">
          <Link className="brand" href="/">
            {site.name}
          </Link>
          <nav aria-label="주요 메뉴">
            <Link className="nav-link" href="/blog/ko">
              블로그
            </Link>
            <Link className="nav-link" href="/support">
              지원
            </Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="site-footer rail">
          <p>{site.copyright}</p>
          <Link className="nav-link" href="/support">
            지원
          </Link>
        </footer>
      </body>
    </html>
  );
}
