import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { VisitTracker } from "@/components/VisitTracker";
import { siteAuthors } from "@/content/seo";
import { langs, isLang, site } from "@/content/site";
import { hand } from "../../fonts";
import "../../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  authors: siteAuthors,
};

export function generateStaticParams() {
  return langs.map((lang) => ({ lang }));
}

// 블로그의 루트 레이아웃. 언어별로 html lang 을 정확히 내보낸다.
export default async function BlogRootLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: Promise<{ lang: string }> }>) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  return (
    <html lang={lang} className={hand.variable}>
      <body>
        <main>{children}</main>
        <footer className="site-footer rail">
          <p>{site.copyright}</p>
        </footer>
        <VisitTracker />
      </body>
      <GoogleAnalytics gaId={site.gaMeasurementId} />
    </html>
  );
}
