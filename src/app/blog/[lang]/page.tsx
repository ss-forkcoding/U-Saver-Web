import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogHeader } from "@/components/BlogHeader";
import { PostDate } from "@/components/PostDate";
import { blogCopy, blogLangs, isBlogLang, site } from "@/content/site";
import { getPosts } from "@/lib/blog";

type Props = Readonly<{ params: Promise<{ lang: string }> }>;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isBlogLang(lang)) return {};
  return {
    title: `${blogCopy[lang].title} | ${site.name}`,
    description: blogCopy[lang].description,
    alternates: {
      canonical: `/blog/${lang}`,
      languages: Object.fromEntries(blogLangs.map((item) => [item, `/blog/${item}`])),
    },
  };
}

export default async function BlogListPage({ params }: Props) {
  const { lang } = await params;
  if (!isBlogLang(lang)) notFound();
  const copy = blogCopy[lang];
  const posts = getPosts(lang);

  return (
    <>
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
      </div>
    </>
  );
}
