import type { Metadata } from "next";
import { FeedbackForm } from "@/components/FeedbackForm";
import { Mascot } from "@/components/Mascot";
import { contactChecklist, eyebrows, feedbackCopy, faqs, refundUrl, site } from "@/content/site";

export const metadata: Metadata = {
  title: "지원",
  description: `${site.name} 문의 방법과 자주 묻는 질문입니다.`,
};

export default function SupportPage() {
  return (
    <>
      <section className="panel panel-short">
        <div className="panel-mascot">
          <Mascot sizes="112px" eager />
        </div>
        <p className="eyebrow">{eyebrows.support}</p>
        <h1>{site.name} 지원</h1>
        <p className="lead">문제가 생기면 이메일로 알려 주세요.</p>
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
          <h2 id="checklist-title">메일에 함께 적어 주세요</h2>
          <ul className="checklist">
            {contactChecklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="rail-section" aria-labelledby="faq-title">
          <p className="eyebrow">{eyebrows.faq}</p>
          <h2 id="faq-title">자주 묻는 질문</h2>
          <div className="faq">
            {faqs.map((faq, index) => (
              <details key={faq.q} open={index === 0}>
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
          <p>
            <a href={refundUrl} rel="noreferrer">
              Apple 문제 신고 페이지 열기
            </a>
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
