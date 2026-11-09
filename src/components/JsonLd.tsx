// "<" 를 이스케이프해 글 내용이 script 태그를 닫지 못하게 한다.
export function JsonLd({ data }: Readonly<{ data: Readonly<Record<string, unknown>> }>) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
