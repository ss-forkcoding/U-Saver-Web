import type { Metadata } from "next";
import { contactChecklist, faqs, refundUrl, site } from "@/content/site";

export const metadata: Metadata = {
  title: "지원",
  description: `${site.name} 문의 방법과 자주 묻는 질문입니다.`,
};

export default function SupportPage() {
  return (
    <>
      <section className="wrap page-head">
        <h1>{site.name} 지원</h1>
        <p className="lead">문제가 생기면 이메일로 알려 주세요.</p>
        <a className="button" href={`mailto:${site.supportEmail}?subject=${encodeURIComponent(`${site.name} 문의`)}`}>
          이메일 보내기
        </a>
        <p className="email-text">{site.supportEmail}</p>
        <h2 className="checklist-title">메일에 함께 적어 주세요</h2>
        <ul className="checklist">
          {contactChecklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="surface-white" aria-labelledby="faq-title">
        <div className="wrap section">
          <h2 id="faq-title">자주 묻는 질문</h2>
          <dl className="faq">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <dt>{faq.q}</dt>
                <dd>{faq.a}</dd>
              </div>
            ))}
          </dl>
          <p>
            <a href={refundUrl} rel="noreferrer">
              Apple 문제 신고 페이지 열기
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
