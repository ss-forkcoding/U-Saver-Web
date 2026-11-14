import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ConditionIcon } from "@/components/ConditionIcon";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { PostDate } from "@/components/PostDate";
import { StepsShowcase } from "@/components/StepsShowcase";
import { StoreButton } from "@/components/StoreButton";
import { StoreQr } from "@/components/StoreQr";
import { TrackingMascot } from "@/components/TrackingMascot";
import { siteCopy } from "@/content/copy";
import { faqJsonLd, publisher, siteAlternates, sitePath, sitePreview } from "@/content/seo";
import { appStoreUrl, isLang, site, type Lang } from "@/content/site";

type Props = Readonly<{ params: Promise<{ lang: string }> }>;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const { homeTitle, description } = siteCopy[lang];
  return {
    alternates: siteAlternates(lang),
    ...sitePreview(lang, "", { title: homeTitle, description }),
  };
}

function homeJsonLd(lang: Lang) {
  const copy = siteCopy[lang];
  const url = `${site.url}${sitePath(lang)}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebSite", name: site.name, url, inLanguage: lang, description: copy.description, publisher },
      {
        "@type": "MobileApplication",
        name: site.name,
        url,
        description: copy.description,
        operatingSystem: copy.operatingSystem,
        applicationCategory: "UtilitiesApplication",
        author: publisher,
        offers: { "@type": "Offer", price: "4900", priceCurrency: "KRW" },
      },
      faqJsonLd(copy.home.faqs),
    ],
  };
}

export default async function HomePage({ params }: Props) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const { home, updatedLabel } = siteCopy[lang];

  return (
    <>
      <JsonLd data={homeJsonLd(lang)} />
      <section className="panel panel-usb">
        <p className="eyebrow">{home.heroEyebrow}</p>
        <h1>
          {home.heroLines[0]}
          <br />
          {home.heroLines[1]}
        </h1>
        <p className="lead">{home.heroLead}</p>
        <div className="action-row">
          {appStoreUrl ? (
            <>
              <StoreButton href={appStoreUrl} label={home.storeAction} lang={lang} placement="home_hero" />
              <StoreQr href={appStoreUrl} caption={home.storeQrCaption} lang={lang} placement="home_qr" />
            </>
          ) : (
            home.heroActions.map((action) => (
              <a key={action.href} className={action.primary ? "pill pill-primary" : "pill"} href={action.href}>
                {action.label}
              </a>
            ))
          )}
        </div>
        <div className="meta">
          <p>{home.price}</p>
        </div>
        <div className="phone">
          <TrackingMascot />
        </div>
      </section>

      <div className="rail">
        <section className="rail-section" aria-labelledby="options-title">
          <p className="eyebrow">{home.optionsEyebrow}</p>
          <h2 id="options-title">{home.optionsTitle}</h2>
          <dl className="options">
            {home.options.map((option) => (
              <div key={option.name}>
                <dt>{option.name}</dt>
                <dd>{option.detail}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="steps" className="rail-section" aria-labelledby="steps-title">
          <p className="eyebrow">{home.stepsEyebrow}</p>
          <h2 id="steps-title">{home.stepsTitle}</h2>
          <StepsShowcase steps={home.steps} />
        </section>

        <section id="conditions" className="rail-section" aria-labelledby="conditions-title">
          <p className="eyebrow">{home.conditionsEyebrow}</p>
          <h2 id="conditions-title">{home.conditionsTitle}</h2>
          <p className="section-note">{home.conditionsNote}</p>
          <dl className="conditions">
            {home.conditions.map((item) => (
              <div key={item.label}>
                <ConditionIcon name={item.icon} />
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
          <p>
            {home.supportPrompt[0]}
            <Link href={sitePath(lang, "/support")}>{home.supportPrompt[1]}</Link>
            {home.supportPrompt[2]}
          </p>
        </section>

        <section id="faq" className="rail-section" aria-labelledby="home-faq-title">
          <p className="eyebrow">{home.faqEyebrow}</p>
          <h2 id="home-faq-title">{home.faqTitle}</h2>
          <FaqList items={home.faqs} />
          <p className="faq-updated">
            {updatedLabel} <PostDate date={site.updatedOn} lang={lang} />
          </p>
        </section>
      </div>
    </>
  );
}
