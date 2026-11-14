import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { BlogHeader } from "@/components/BlogHeader";
import { JsonLd } from "@/components/JsonLd";
import { PostDate } from "@/components/PostDate";
import { StoreButton } from "@/components/StoreButton";
import { StoreQr } from "@/components/StoreQr";
import { siteCopy } from "@/content/copy";
import { blogLanguages, blogPath, blogPreview, faqJsonLd, ogImage, publisher } from "@/content/seo";
import { appStoreUrl, blogCopy, isLang, site, type Lang } from "@/content/site";
import { extractFaqs, getPost, getSlugs, type Post } from "@/lib/blog";

type Props = Readonly<{ params: Promise<{ lang: string; slug: string }> }>;

export function generateStaticParams() {
  return getSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const post = isLang(lang) ? getPost(lang, slug) : undefined;
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
  const faqs = extractFaqs(post.body);
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
      ...(faqs.length > 0 ? [faqJsonLd(faqs)] : []),
    ],
  };
}

const beforeYouBuySlug = "before-you-buy";

// 검색으로 글에 들어온 사람이 홈을 거치지 않고 스토어로 가는 경로. 스토어 주소가 없으면 그리지 않는다.
function PostStore({ lang, slug }: Readonly<{ lang: Lang; slug: string }>) {
  if (!appStoreUrl) return null;
  const copy = blogCopy[lang];
  const { storeAction, storeQrCaption } = siteCopy[lang].home;
  return (
    <aside className="post-store" aria-labelledby="post-store-title">
      <h2 id="post-store-title">{copy.storeTitle}</h2>
      <p>{copy.storeLead}</p>
      <div className="action-row">
        <StoreButton href={appStoreUrl} label={storeAction} lang={lang} placement="blog_post_end" />
        <StoreQr href={appStoreUrl} caption={storeQrCaption} lang={lang} placement="blog_post_qr" />
      </div>
      {slug !== beforeYouBuySlug && (
        <p className="post-store-check">
          <a href={blogPath(lang, beforeYouBuySlug)}>{copy.storeCheck}</a>
        </p>
      )}
    </aside>
  );
}

export default async function BlogPostPage({ params }: Props) {
  const { lang, slug } = await params;
  const post = isLang(lang) ? getPost(lang, slug) : undefined;
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
            <PostStore lang={post.lang} slug={post.slug} />
            <p className="post-back">
              <a href={`/blog/${post.lang}`}>{blogCopy[post.lang].backToList}</a>
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
