import type { MetadataRoute } from "next";
import { blogLanguages, blogPath } from "@/content/seo";
import { blogLangs, site } from "@/content/site";
import { getPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogEntries = blogLangs.flatMap((lang) => {
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

  return [{ url: site.url }, { url: `${site.url}/support` }, ...blogEntries];
}
