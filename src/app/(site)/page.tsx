import type { Metadata } from "next";
import Link from "next/link";
import { ConditionIcon } from "@/components/ConditionIcon";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { PostDate } from "@/components/PostDate";
import { StepsShowcase } from "@/components/StepsShowcase";
import { TrackingMascot } from "@/components/TrackingMascot";
import { faqJsonLd, publisher, sitePreview } from "@/content/seo";
import { backupOptions, conditions, eyebrows, heroActions, homeFaqs, homeHeadings, site, steps } from "@/content/site";

const homeTitle = `${site.name} | 컴퓨터 없이 USB로 아이폰 백업`;

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  ...sitePreview("/", { title: homeTitle, description: site.description }),
};

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: site.name,
      url: site.url,
      inLanguage: "ko",
      description: site.description,
      publisher,
    },
    {
      "@type": "MobileApplication",
      name: site.name,
      url: site.url,
      description: site.description,
      operatingSystem: "iOS 26 이상",
      applicationCategory: "UtilitiesApplication",
      author: publisher,
      offers: { "@type": "Offer", price: "4900", priceCurrency: "KRW" },
    },
    faqJsonLd(homeFaqs),
  ],
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={homeJsonLd} />
      <section className="panel panel-usb">
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
          <StepsShowcase steps={steps} />
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

        <section id="faq" className="rail-section" aria-labelledby="home-faq-title">
          <p className="eyebrow">{eyebrows.faq}</p>
          <h2 id="home-faq-title">{homeHeadings.faq}</h2>
          <FaqList items={homeFaqs} />
          <p className="faq-updated">
            마지막 수정 <PostDate date={site.updatedOn} lang="ko" />
          </p>
        </section>
      </div>
    </>
  );
}
