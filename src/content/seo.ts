import type { Metadata } from "next";
import { fallbackLang, langs, site, type FaqItem, type Lang } from "@/content/site";

// 검색 결과와 링크 미리보기에 쓰는 값의 단일 출처.
export const publisher = { "@type": "Organization", name: "NextGenAI Co.", url: site.url } as const;

export const siteAuthors = [{ name: publisher.name, url: publisher.url }];

export function faqJsonLd(items: readonly Pick<FaqItem, "q" | "a">[]) {
  return {
    "@type": "FAQPage",
    author: publisher,
    dateModified: site.updatedOn,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export const ogImage = { url: "/og-image.png", width: 1200, height: 630, alt: site.name } as const;

const ogLocales: Readonly<Record<Lang, string>> = { ko: "ko_KR", en: "en_US", ja: "ja_JP" };

export function blogPath(lang: Lang, slug?: string): string {
  return slug ? `/blog/${lang}/${slug}` : `/blog/${lang}`;
}

export function blogLanguages(slug?: string, origin = ""): Record<string, string> {
  return {
    ...Object.fromEntries(langs.map((lang) => [lang, `${origin}${blogPath(lang, slug)}`])),
    "x-default": `${origin}${blogPath(fallbackLang, slug)}`,
  };
}

export function sitePath(lang: Lang, path = ""): string {
  return `/${lang}${path}`;
}

// x-default 는 언어 없는 주소다. 이 주소는 브라우저 언어에 맞는 페이지로 보낸다.
export function siteLanguages(path = "", origin = ""): Record<string, string> {
  return {
    ...Object.fromEntries(langs.map((lang) => [lang, `${origin}${sitePath(lang, path)}`])),
    "x-default": `${origin}${path || "/"}`,
  };
}

export function siteAlternates(lang: Lang, path = ""): NonNullable<Metadata["alternates"]> {
  return { canonical: sitePath(lang, path), languages: siteLanguages(path) };
}

type Preview = Readonly<{ title: string; description: string }>;

export function sitePreview(lang: Lang, path: string, preview: Preview): Pick<Metadata, "openGraph" | "twitter"> {
  return {
    openGraph: {
      type: "website",
      url: sitePath(lang, path),
      siteName: site.name,
      locale: ogLocales[lang],
      alternateLocale: langs.filter((item) => item !== lang).map((item) => ogLocales[item]),
      ...preview,
      images: [ogImage],
    },
    twitter: { card: "summary_large_image", ...preview, images: [ogImage.url] },
  };
}

type BlogPreview = Preview & Readonly<{ lang: Lang; path: string; publishedTime?: string }>;

export function blogPreview({ lang, path, publishedTime, ...preview }: BlogPreview): Pick<Metadata, "openGraph" | "twitter"> {
  const shared = {
    url: path,
    siteName: site.name,
    locale: ogLocales[lang],
    alternateLocale: langs.filter((item) => item !== lang).map((item) => ogLocales[item]),
    ...preview,
    images: [ogImage],
  };
  return {
    openGraph: publishedTime ? { ...shared, type: "article", publishedTime } : { ...shared, type: "website" },
    twitter: { card: "summary_large_image", ...preview, images: [ogImage.url] },
  };
}
