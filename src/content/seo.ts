import type { Metadata } from "next";
import { blogLangs, site, type BlogLang } from "@/content/site";

// 검색 결과와 링크 미리보기에 쓰는 값의 단일 출처.
export const publisher = { "@type": "Organization", name: "NextGenAI Co.", url: site.url } as const;

export const ogImage = { url: "/og-image.png", width: 1200, height: 630, alt: site.name } as const;

const ogLocales: Readonly<Record<BlogLang, string>> = { ko: "ko_KR", en: "en_US", ja: "ja_JP" };

// 세 언어에 해당하지 않는 방문자에게는 영어 글을 보여 준다.
const fallbackLang: BlogLang = "en";

export function blogPath(lang: BlogLang, slug?: string): string {
  return slug ? `/blog/${lang}/${slug}` : `/blog/${lang}`;
}

export function blogLanguages(slug?: string, origin = ""): Record<string, string> {
  return {
    ...Object.fromEntries(blogLangs.map((lang) => [lang, `${origin}${blogPath(lang, slug)}`])),
    "x-default": `${origin}${blogPath(fallbackLang, slug)}`,
  };
}

type Preview = Readonly<{ title: string; description: string }>;

export function sitePreview(path: string, preview: Preview): Pick<Metadata, "openGraph" | "twitter"> {
  return {
    openGraph: {
      type: "website",
      url: path,
      siteName: site.name,
      locale: ogLocales.ko,
      ...preview,
      images: [ogImage],
    },
    twitter: { card: "summary_large_image", ...preview, images: [ogImage.url] },
  };
}

type BlogPreview = Preview & Readonly<{ lang: BlogLang; path: string; publishedTime?: string }>;

export function blogPreview({ lang, path, publishedTime, ...preview }: BlogPreview): Pick<Metadata, "openGraph" | "twitter"> {
  const shared = {
    url: path,
    siteName: site.name,
    locale: ogLocales[lang],
    alternateLocale: blogLangs.filter((item) => item !== lang).map((item) => ogLocales[item]),
    ...preview,
    images: [ogImage],
  };
  return {
    openGraph: publishedTime ? { ...shared, type: "article", publishedTime } : { ...shared, type: "website" },
    twitter: { card: "summary_large_image", ...preview, images: [ogImage.url] },
  };
}
