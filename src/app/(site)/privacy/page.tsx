import type { Metadata } from "next";
import { Mascot } from "@/components/Mascot";
import { PostDate } from "@/components/PostDate";
import { sitePreview } from "@/content/seo";
import { eyebrows, privacyPolicy, site, type PolicyRecord, type PolicySection } from "@/content/site";

export const metadata: Metadata = {
  title: privacyPolicy.title,
  description: privacyPolicy.description,
  alternates: { canonical: "/privacy" },
  ...sitePreview("/privacy", {
    title: `${site.name} ${privacyPolicy.title}`,
    description: privacyPolicy.description,
  }),
};

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

export default function PrivacyPage() {
  return (
    <>
      <section className="panel panel-short">
        <div className="panel-mascot">
          <Mascot />
        </div>
        <p className="eyebrow">{eyebrows.privacy}</p>
        <h1>{privacyPolicy.title}</h1>
        <p className="lead">{privacyPolicy.lead}</p>
        <div className="meta">
          <p>
            시행일 <PostDate date={privacyPolicy.effectiveOn} lang="ko" />
          </p>
        </div>
      </section>

      <div className="rail">
        {privacyPolicy.sections.map((section) => (
          <Section key={section.id} section={section} />
        ))}
      </div>
    </>
  );
}
