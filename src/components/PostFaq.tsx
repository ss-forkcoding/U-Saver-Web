import { FaqList } from "@/components/FaqList";
import { blogCopy, type Lang } from "@/content/site";

// 모든 블로그 글 끝, 스토어 안내 앞에 붙는 U-Saver 공통 질문. 문구는 blogCopy 한 곳에서 관리한다.
// 같은 답이 글마다 반복되므로 FAQPage 구조화 데이터에는 넣지 않는다(글 본문의 FAQ만 넣는다).
export function PostFaq({ lang }: Readonly<{ lang: Lang }>) {
  const { faqTitle, faqs } = blogCopy[lang];
  return (
    <section className="post-faq" aria-labelledby="post-faq-title">
      <h2 id="post-faq-title">{faqTitle}</h2>
      <FaqList items={faqs} />
    </section>
  );
}
