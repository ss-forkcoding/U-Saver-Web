import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Mascot } from "@/components/Mascot";
import { PostDate } from "@/components/PostDate";
import { siteCopy } from "@/content/copy";
import { siteAlternates, sitePreview } from "@/content/seo";
import { isLang, site, type PolicyRecord, type PolicySection } from "@/content/site";

type Props = Readonly<{ params: Promise<{ lang: string }> }>;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const { privacy } = siteCopy[lang];
  return {
    title: privacy.title,
    description: privacy.description,
    alternates: siteAlternates(lang, "/privacy"),
    ...sitePreview(lang, "/privacy", { title: `${site.name} ${privacy.title}`, description: privacy.description }),
  };
}

function Record({ record }: Readonly<{ record: PolicyRecord }>) {
  return (
    <div className="faq-item">
      <h3>{record.name}</h3>
      <dl className="policy-facts">
        {record.rows.map((row) => (
          <div key={row.label}>
            <dt>{row.label}</dt>
            <dd>{row.href ? <a href={row.href}>{row.value}</a> : row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function Section({ section }: Readonly<{ section: PolicySection }>) {
  return (
    <section className="rail-section policy" aria-labelledby={`${section.id}-title`}>
      <h2 id={`${section.id}-title`}>{section.title}</h2>
      {section.notice && <p className="policy-notice">{section.notice}</p>}
      {section.paragraphs?.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      {section.records && <Records records={section.records} />}
      {section.items && (
        <ul className="policy-list">
          {section.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

function Records({ records }: Readonly<{ records: readonly PolicyRecord[] }>) {
  return (
    <div className="faq">
      {records.map((record) => (
        <Record key={record.name} record={record} />
      ))}
    </div>
  );
}

export default async function PrivacyPage({ params }: Props) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const { privacy } = siteCopy[lang];

  return (
    <>
      <section className="panel panel-short">
        <div className="panel-mascot">
          <Mascot />
        </div>
        <p className="eyebrow">{privacy.eyebrow}</p>
        <h1>{privacy.title}</h1>
        <p className="lead">{privacy.lead}</p>
        <div className="meta">
          <p>
            {privacy.effectiveLabel} <PostDate date={site.privacyEffectiveOn} lang={lang} />
          </p>
        </div>
      </section>

      <div className="rail">
        {privacy.sections.map((section) => (
          <Section key={section.id} section={section} />
        ))}
      </div>
    </>
  );
}
