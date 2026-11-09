import type { FaqItem } from "@/content/site";

// 질문을 제목, 답을 바로 다음 문단으로 그려 검색과 답변 엔진이 묶어 읽게 한다.
export function FaqList({ items }: Readonly<{ items: readonly FaqItem[] }>) {
  return (
    <div className="faq">
      {items.map((item) => (
        <div key={item.q} className="faq-item">
          <h3>{item.q}</h3>
          <p>{item.a}</p>
          {item.sources?.map((source) => (
            <p key={source.href} className="faq-source">
              <a href={source.href} rel="noreferrer">
                {source.label}
              </a>
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}
