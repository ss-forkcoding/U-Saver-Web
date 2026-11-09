import type { MetadataRoute } from "next";
import { blogLanguages, blogPath, siteLanguages, sitePath } from "@/content/seo";
import { langs, site } from "@/content/site";
import { getPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogEntries = langs.flatMap((lang) => {
    const posts = getPosts(lang);
    return [
      {
        url: `${site.url}${blogPath(lang)}`,
        // 글은 최신순으로 정렬되어 있다.
        lastModified: posts[0]?.date,
        alternates: { languages: blogLanguages(undefined, site.url) },
      },
      ...posts.map((post) => ({
        url: `${site.url}${blogPath(lang, post.slug)}`,
        lastModified: post.date,
        alternates: { languages: blogLanguages(post.slug, site.url) },
      })),
    ];
  });

  // 개인정보 처리방침 같은 법적 고지는 검색 유입 대상이 아니라서 넣지 않는다.
  const siteEntries = ["", "/support"].flatMap((path) =>
    langs.map((lang) => ({
      url: `${site.url}${sitePath(lang, path)}`,
      alternates: { languages: siteLanguages(path, site.url) },
    })),
  );

  return [...siteEntries, ...blogEntries];
}
