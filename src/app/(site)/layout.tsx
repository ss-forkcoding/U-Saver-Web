import type { Metadata } from "next";
import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { ogImage, siteAuthors } from "@/content/seo";
import { site } from "@/content/site";
import { hand } from "../fonts";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  authors: siteAuthors,
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
            <BrandLogo />
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
          <Link className="nav-link" href="/privacy">
            개인정보 처리방침
          </Link>
        </footer>
      </body>
    </html>
  );
}
