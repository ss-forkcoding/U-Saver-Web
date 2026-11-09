import type { Metadata } from "next";
import { FaqList } from "@/components/FaqList";
import { FeedbackForm } from "@/components/FeedbackForm";
import { JsonLd } from "@/components/JsonLd";
import { Mascot } from "@/components/Mascot";
import { PostDate } from "@/components/PostDate";
import { faqJsonLd, sitePreview } from "@/content/seo";
import { contactChecklist, eyebrows, feedbackCopy, faqs, site } from "@/content/site";

const supportDescription = `${site.name} 문의 이메일과 자주 묻는 질문입니다. USB가 보이지 않거나 백업이 멈췄을 때 해결 방법과 환불 방법을 안내합니다.`;

const supportJsonLd = { "@context": "https://schema.org", ...faqJsonLd(faqs) };

export const metadata: Metadata = {
  title: "지원",
  description: supportDescription,
  alternates: { canonical: "/support" },
  ...sitePreview("/support", {
    title: `${site.name} 지원`,
    description: supportDescription,
  }),
};

export default function SupportPage() {
  return (
    <>
      <JsonLd data={supportJsonLd} />
      <section className="panel panel-short">
        <div className="panel-mascot">
          <Mascot />
        </div>
        <p className="eyebrow">{eyebrows.support}</p>
        <h1>{site.name} 지원</h1>
        <p className="lead">USB가 보이지 않거나 백업이 멈췄다면 아래 답변을 먼저 확인하세요. 해결되지 않으면 이메일로 알려 주세요.</p>
        <div className="action-row">
          <a
            className="pill pill-primary"
            href={`mailto:${site.supportEmail}?subject=${encodeURIComponent(`${site.name} 문의`)}`}
          >
            이메일 보내기
          </a>
          <a className="pill" href="#feedback">
            {feedbackCopy.shortcut}
          </a>
        </div>
        <div className="meta">
          <p>{site.supportEmail}</p>
        </div>
      </section>

      <div className="rail">
        <section className="rail-section" aria-labelledby="checklist-title">
          <p className="eyebrow">{eyebrows.checklist}</p>
          <h2 id="checklist-title">메일에 3개 항목을 함께 적어 주세요</h2>
          <ul className="checklist">
            {contactChecklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="rail-section" aria-labelledby="faq-title">
          <p className="eyebrow">{eyebrows.faq}</p>
          <h2 id="faq-title">자주 묻는 질문</h2>
          <FaqList items={faqs} />
          <p className="faq-updated">
            마지막 수정 <PostDate date={site.updatedOn} lang="ko" />
          </p>
        </section>

        <section id="feedback" className="rail-section" aria-labelledby="feedback-title">
          <p className="eyebrow">{feedbackCopy.eyebrow}</p>
          <h2 id="feedback-title">{feedbackCopy.title}</h2>
          <p className="section-note">{feedbackCopy.note}</p>
          <FeedbackForm />
        </section>
      </div>
    </>
  );
}
