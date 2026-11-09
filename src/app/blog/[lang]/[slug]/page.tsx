import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { BlogHeader } from "@/components/BlogHeader";
import { PostDate } from "@/components/PostDate";
import { blogCopy, blogLangs, isBlogLang, site } from "@/content/site";
import { getPost, getSlugs } from "@/lib/blog";

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
      canonical: `/blog/${lang}/${slug}`,
      languages: Object.fromEntries(blogLangs.map((item) => [item, `/blog/${item}/${slug}`])),
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { lang, slug } = await params;
  const post = isBlogLang(lang) ? getPost(lang, slug) : undefined;
  if (!post) notFound();

  return (
    <>
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
