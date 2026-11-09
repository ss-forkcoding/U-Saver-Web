import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogHeader } from "@/components/BlogHeader";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { PostDate } from "@/components/PostDate";
import { blogLanguages, blogPath, blogPreview, faqJsonLd, publisher } from "@/content/seo";
import { blogCopy, isBlogLang, site } from "@/content/site";
import { getPosts } from "@/lib/blog";

type Props = Readonly<{ params: Promise<{ lang: string }> }>;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isBlogLang(lang)) return {};
  return {
    title: `${blogCopy[lang].title} | ${site.name}`,
    description: blogCopy[lang].description,
    alternates: {
      canonical: blogPath(lang),
      languages: blogLanguages(),
    },
    ...blogPreview({ lang, path: blogPath(lang), title: blogCopy[lang].title, description: blogCopy[lang].description }),
  };
}

export default async function BlogListPage({ params }: Props) {
  const { lang } = await params;
  if (!isBlogLang(lang)) notFound();
  const copy = blogCopy[lang];
  const posts = getPosts(lang);

  const url = `${site.url}${blogPath(lang)}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        name: `${copy.title} | ${site.name}`,
        description: copy.description,
        inLanguage: lang,
        url,
        author: publisher,
        publisher,
        blogPost: posts.map((post) => ({
          "@type": "BlogPosting",
          headline: post.title,
          datePublished: post.date,
          url: `${site.url}${blogPath(lang, post.slug)}`,
        })),
      },
      faqJsonLd(copy.guide),
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <BlogHeader lang={lang} />
      <section className="panel panel-short">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h1>{copy.title}</h1>
        <p className="lead">{copy.lead}</p>
      </section>

      <div className="rail">
        <section className="rail-section" aria-label={copy.title}>
          {posts.length === 0 ? (
            <p>{copy.empty}</p>
          ) : (
            <ul className="post-list">
              {posts.map((post) => (
                <li key={post.slug}>
                  <a href={`/blog/${lang}/${post.slug}`}>
                    <PostDate date={post.date} lang={lang} />
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="rail-section" aria-labelledby="blog-guide-title">
          <h2 id="blog-guide-title">{copy.guideTitle}</h2>
          <FaqList items={copy.guide} />
        </section>
      </div>
    </>
  );
}
