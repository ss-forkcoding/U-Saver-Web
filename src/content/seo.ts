import type { Metadata } from "next";
import { blogCopy, fallbackLang, langs, site, type FaqItem, type Lang } from "@/content/site";

// 검색 결과와 링크 미리보기에 쓰는 값의 단일 출처.
export const publisher = { "@type": "Organization", name: "NextGenAI Co.", url: site.url } as const;

export const siteAuthors = [{ name: publisher.name, url: publisher.url }];

// 블로그 글의 작성자. 개발자 포크코딩(fork-coding.com)이 쓰고 검수한다.
export const authorUrl = "https://www.fork-coding.com";

export function blogAuthor(lang: Lang) {
  const name = blogCopy[lang].authorName;
  return { "@type": "Person", name, alternateName: name === "포크코딩" ? "Fork Coding" : "포크코딩", url: authorUrl } as const;
}

export function blogAuthors(lang: Lang): NonNullable<Metadata["authors"]> {
  return [{ name: blogCopy[lang].authorName, url: authorUrl }];
}

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

// x-default 는 기본 언어(영어) 주소다. 언어 없는 주소(/)는 307 로 언어 페이지에 보내므로 x-default 로 쓰면
// Google 이 /en 대신 / 를 표준 URL 로 골라 /en 이 색인에서 빠진다(2026-11-28 URL 검사).
export function siteLanguages(path = "", origin = ""): Record<string, string> {
  return {
    ...Object.fromEntries(langs.map((lang) => [lang, `${origin}${sitePath(lang, path)}`])),
    "x-default": `${origin}${sitePath(fallbackLang, path)}`,
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

// 글 썸네일은 1200×675 webp 다. 목록 페이지처럼 썸네일이 없으면 사이트 공통 이미지를 쓴다.
export type Thumbnail = Readonly<{ url: string; width: number; height: number }>;

type BlogPreview = Preview & Readonly<{ lang: Lang; path: string; publishedTime?: string; modifiedTime?: string; image?: Thumbnail }>;

export function blogPreview({ lang, path, publishedTime, modifiedTime, image, ...preview }: BlogPreview): Pick<Metadata, "openGraph" | "twitter"> {
  const images = image ? [{ ...image, alt: preview.title }] : [ogImage];
  const shared = {
    url: path,
    siteName: site.name,
    locale: ogLocales[lang],
    alternateLocale: langs.filter((item) => item !== lang).map((item) => ogLocales[item]),
    ...preview,
    images,
  };
  return {
    openGraph: publishedTime ? { ...shared, type: "article", publishedTime, modifiedTime: modifiedTime ?? publishedTime } : { ...shared, type: "website" },
    twitter: { card: "summary_large_image", ...preview, images: [images[0].url] },
  };
}
