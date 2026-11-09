import type { Metadata } from "next";
import Link from "next/link";
import { ConditionIcon } from "@/components/ConditionIcon";
import { JsonLd } from "@/components/JsonLd";
import { TrackingMascot } from "@/components/TrackingMascot";
import { publisher, sitePreview } from "@/content/seo";
import { backupOptions, conditions, eyebrows, heroActions, homeHeadings, site, steps } from "@/content/site";

const homeTitle = `${site.name} | 컴퓨터 없이 USB로 아이폰 백업`;

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  ...sitePreview("/", { title: homeTitle, description: site.description }),
};

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
  inLanguage: "ko",
  description: site.description,
  publisher,
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={homeJsonLd} />
      <section className="panel">
        <p className="eyebrow">{eyebrows.hero}</p>
        <h1>
          {homeHeadings.heroLines[0]}
          <br />
          {homeHeadings.heroLines[1]}
        </h1>
        <p className="lead">{site.heroLead}</p>
        <div className="action-row">
          {heroActions.map((action) => (
            <a key={action.href} className={action.primary ? "pill pill-primary" : "pill"} href={action.href}>
              {action.label}
            </a>
          ))}
        </div>
        <div className="meta">
          <p className="meta-strong">{site.releaseStatus}</p>
          <p>{site.price}</p>
        </div>
        <div className="phone">
          <TrackingMascot />
        </div>
      </section>

      <div className="rail">
        <section className="rail-section" aria-labelledby="options-title">
          <p className="eyebrow">{eyebrows.options}</p>
          <h2 id="options-title">{homeHeadings.options}</h2>
          <dl className="options">
            {backupOptions.map((option) => (
              <div key={option.name}>
                <dt>{option.name}</dt>
                <dd>{option.detail}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="steps" className="rail-section" aria-labelledby="steps-title">
          <p className="eyebrow">{eyebrows.steps}</p>
          <h2 id="steps-title">{homeHeadings.steps}</h2>
          <ol className="steps">
            {steps.map((step) => (
              <li key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="conditions" className="rail-section" aria-labelledby="conditions-title">
          <p className="eyebrow">{eyebrows.conditions}</p>
          <h2 id="conditions-title">{homeHeadings.conditions}</h2>
          <p className="section-note">아래 조건이 맞는지 먼저 확인하세요.</p>
          <dl className="conditions">
            {conditions.map((item) => (
              <div key={item.label}>
                <ConditionIcon name={item.icon} />
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
          <p>
            궁금한 점은 <Link href="/support">지원 페이지</Link>에서 확인하세요.
          </p>
        </section>
      </div>
    </>
  );
}
