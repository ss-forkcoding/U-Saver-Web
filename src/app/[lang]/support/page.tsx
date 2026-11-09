import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FaqList } from "@/components/FaqList";
import { FeedbackForm } from "@/components/FeedbackForm";
import { JsonLd } from "@/components/JsonLd";
import { Mascot } from "@/components/Mascot";
import { PostDate } from "@/components/PostDate";
import { siteCopy } from "@/content/copy";
import { faqJsonLd, siteAlternates, sitePreview } from "@/content/seo";
import { isLang, site } from "@/content/site";

type Props = Readonly<{ params: Promise<{ lang: string }> }>;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const { support } = siteCopy[lang];
  return {
    title: support.title,
    description: support.description,
    alternates: siteAlternates(lang, "/support"),
    ...sitePreview(lang, "/support", { title: support.heading, description: support.description }),
  };
}

export default async function SupportPage({ params }: Props) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const { support, feedback, updatedLabel } = siteCopy[lang];

  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", ...faqJsonLd(support.faqs) }} />
      <section className="panel panel-short">
        <div className="panel-mascot">
          <Mascot />
        </div>
        <p className="eyebrow">{support.eyebrow}</p>
        <h1>{support.heading}</h1>
        <p className="lead">{support.lead}</p>
        <div className="action-row">
          <a className="pill pill-primary" href={`mailto:${site.supportEmail}?subject=${encodeURIComponent(support.emailSubject)}`}>
            {support.emailAction}
          </a>
          <a className="pill" href="#feedback">
            {feedback.shortcut}
          </a>
        </div>
        <div className="meta">
          <p>{site.supportEmail}</p>
        </div>
      </section>

      <div className="rail">
        <section className="rail-section" aria-labelledby="checklist-title">
          <p className="eyebrow">{support.checklistEyebrow}</p>
          <h2 id="checklist-title">{support.checklistTitle}</h2>
          <ul className="checklist">
            {support.checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="rail-section" aria-labelledby="faq-title">
          <p className="eyebrow">{support.faqEyebrow}</p>
          <h2 id="faq-title">{support.faqTitle}</h2>
          <FaqList items={support.faqs} />
          <p className="faq-updated">
            {updatedLabel} <PostDate date={site.updatedOn} lang={lang} />
          </p>
        </section>

        <section id="feedback" className="rail-section" aria-labelledby="feedback-title">
          <p className="eyebrow">{feedback.eyebrow}</p>
          <h2 id="feedback-title">{feedback.title}</h2>
          <p className="section-note">{feedback.note}</p>
          <FeedbackForm copy={feedback} />
        </section>
      </div>
    </>
  );
}
