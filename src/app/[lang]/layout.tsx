import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BrandLogo } from "@/components/BrandLogo";
import { LanguageNav } from "@/components/LanguageNav";
import { VisitTracker } from "@/components/VisitTracker";
import { siteCopy } from "@/content/copy";
import { blogPath, ogImage, sitePath, siteAuthors } from "@/content/seo";
import { isLang, langs, site } from "@/content/site";
import { hand } from "../fonts";
import "../globals.css";

type Props = Readonly<{ params: Promise<{ lang: string }> }>;

export function generateStaticParams() {
  return langs.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  return {
    metadataBase: new URL(site.url),
    authors: siteAuthors,
    title: { default: siteCopy[lang].homeTitle, template: `%s | ${site.name}` },
    description: siteCopy[lang].description,
    twitter: { card: "summary_large_image", images: [ogImage.url] },
    verification: { other: { "naver-site-verification": "0d401261669164e485d6087ec047c4842d6ec835" } },
  };
}

// 사이트의 루트 레이아웃. 언어별로 html lang 을 정확히 내보낸다.
export default async function RootLayout({ children, params }: Props & Readonly<{ children: React.ReactNode }>) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const { nav } = siteCopy[lang];

  return (
    <html lang={lang} className={hand.variable} data-scroll-behavior="smooth">
      <body>
        <header className="site-header wrap">
          <Link className="brand" href={sitePath(lang)}>
            <BrandLogo />
          </Link>
          <nav aria-label={site.name}>
            <Link className="nav-link" href={blogPath(lang)}>
              {nav.blog}
            </Link>
            <Link className="nav-link" href={sitePath(lang, "/support")}>
              {nav.support}
            </Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="site-footer rail">
          <p>{site.copyright}</p>
          <Link className="nav-link" href={sitePath(lang, "/support")}>
            {nav.support}
          </Link>
          <Link className="nav-link" href={sitePath(lang, "/privacy")}>
            {nav.privacy}
          </Link>
          <LanguageNav lang={lang} label={nav.language} />
        </footer>
        <VisitTracker />
      </body>
      <GoogleAnalytics gaId={site.gaMeasurementId} />
    </html>
  );
}
