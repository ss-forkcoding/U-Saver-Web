import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { BlogHeader } from "@/components/BlogHeader";
import { JsonLd } from "@/components/JsonLd";
import { PostDate } from "@/components/PostDate";
import { blogLanguages, blogPath, blogPreview, ogImage, publisher } from "@/content/seo";
import { blogCopy, isBlogLang, site } from "@/content/site";
import { getPost, getSlugs, type Post } from "@/lib/blog";

type Props = Readonly<{ params: Promise<{ lang: string; slug: string }> }>;

export function generateStaticParams() {
  return getSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const post = isBlogLang(lang) ? getPost(lang, slug) : undefined;
  if (!post) return {};
  return {
    title: `${post.title} | ${site.name}`,
    description: post.description,
    alternates: {
      canonical: blogPath(post.lang, post.slug),
      languages: blogLanguages(post.slug),
    },
    ...blogPreview({
      lang: post.lang,
      path: blogPath(post.lang, post.slug),
      title: post.title,
      description: post.description,
      publishedTime: post.date,
    }),
  };
}

function postJsonLd(post: Post) {
  const url = `${site.url}${blogPath(post.lang, post.slug)}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        inLanguage: post.lang,
        url,
        mainEntityOfPage: url,
        image: `${site.url}${ogImage.url}`,
        author: publisher,
        publisher,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: site.name, item: site.url },
          { "@type": "ListItem", position: 2, name: blogCopy[post.lang].title, item: `${site.url}${blogPath(post.lang)}` },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
    ],
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { lang, slug } = await params;
  const post = isBlogLang(lang) ? getPost(lang, slug) : undefined;
  if (!post) notFound();

  return (
    <>
      <JsonLd data={postJsonLd(post)} />
      <BlogHeader lang={post.lang} slug={post.slug} />
      <article>
        <header className="panel panel-short">
          <h1>{post.title}</h1>
          <p className="lead">{post.description}</p>
          <div className="meta">
            <PostDate date={post.date} lang={post.lang} />
          </div>
        </header>

        <div className="rail">
          <div className="rail-section">
            <div className="prose">
              <Markdown remarkPlugins={[remarkGfm]}>{post.body}</Markdown>
            </div>
            <p className="post-back">
              <a href={`/blog/${post.lang}`}>{blogCopy[post.lang].backToList}</a>
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
