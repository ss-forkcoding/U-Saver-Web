"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Step } from "@/content/site";

// 스크롤 위치에 맞는 단계의 앱 화면을 가운데 목업에 보여 준다. 설명은 목록에 그대로 있어 화면은 장식으로 숨긴다.
export function StepsShowcase({ steps }: Readonly<{ steps: readonly Step[] }>) {
  const listRef = useRef<HTMLOListElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    // 모바일은 설명이 목업 아래에서 올라오므로 설명이 보이기 시작할 때 화면을 바꾼다.
    const lineFromTop = window.matchMedia("(max-width: 860px)").matches ? 80 : 60;
    const items = Array.from(list.children);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(items.indexOf(entry.target));
        }
      },
      { rootMargin: `-${lineFromTop}% 0px -${100 - lineFromTop}% 0px` },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="showcase">
      <div className="showcase-stage" aria-hidden="true">
        <div className="device">
          {steps.map((step, index) => (
            <div key={step.title} className="device-screen" data-active={index === active || undefined}>
              <Image src={step.screen} alt="" fill sizes="(max-width: 860px) 190px, 280px" />
            </div>
          ))}
        </div>
      </div>

      <ol ref={listRef} className="showcase-steps">
        {steps.map((step, index) => (
          <li key={step.title} aria-current={index === active ? "step" : undefined}>
            <div>
              <h3>{step.title}</h3>
              <p>{step.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
