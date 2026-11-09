import Link from "next/link";
import { UsbGlyph } from "@/components/UsbGlyph";
import { backupOptions, conditions, site, steps } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <section className="hero wrap">
        <div>
          <h1>컴퓨터 없이,<br />USB에 아이폰 사진을 백업합니다.</h1>
          <p className="lead">{site.heroLead}</p>
          <p className="status">{site.releaseStatus}</p>
          <p>{site.price}</p>
        </div>
        <UsbGlyph />
      </section>

      <section className="wrap section" aria-labelledby="options-title">
        <h2 id="options-title">백업 방식은 두 가지입니다</h2>
        <dl className="options">
          {backupOptions.map((option) => (
            <div key={option.name}>
              <dt>{option.name}</dt>
              <dd>{option.detail}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="wrap section" aria-labelledby="steps-title">
        <h2 id="steps-title">사용 순서</h2>
        <ol className="steps">
          {steps.map((step) => (
            <li key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="surface-white" aria-labelledby="conditions-title">
        <div className="wrap section">
          <h2 id="conditions-title">구매 전에 확인하세요</h2>
          <p className="section-note">무료 체험이 없습니다. 아래 조건이 맞는지 먼저 확인하세요.</p>
          <dl className="conditions">
            {conditions.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
          <p>
            궁금한 점은 <Link href="/support">지원 페이지</Link>에서 확인하세요.
          </p>
        </div>
      </section>
    </>
  );
}
