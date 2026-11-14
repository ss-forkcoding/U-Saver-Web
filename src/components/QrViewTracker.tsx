"use client";

import { useEffect, useRef } from "react";
import { sendGa } from "@/lib/metrics/ga";
import type { Lang } from "@/content/site";

// 부모 .store-qr 이 화면에 절반 이상 보이면 페이지당 1회 app_store_qr_view 를 보낸다.
// CSS 로 숨겨진(모바일) 경우 교차가 일어나지 않아 보내지 않는다.
export function QrViewTracker({ lang }: Readonly<{ lang: Lang }>) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const target = ref.current?.closest(".store-qr");
    if (!target || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        sendGa({ name: "app_store_qr_view", placement: "home_qr", lang });
        observer.disconnect();
      },
      { threshold: 0.5 },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, [lang]);
  return <span ref={ref} hidden />;
}
