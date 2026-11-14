"use client";

import Image from "next/image";
import { trackEvent } from "@/lib/metrics/client";
import { sendGa } from "@/lib/metrics/ga";
import { appStoreLink, type Lang, type StorePlacement } from "@/content/site";

// Apple 공식 "Download on the App Store" 배지(toolbox.marketingtools.apple.com)를 수정 없이 쓴다.
// Apple 가이드: 화면 높이 40px 이상, 색·비율·문구 변경 금지.
const badgeWidth: Record<Lang, number> = { ko: 129.70071, en: 119.66407, ja: 108.85157 };
const badgeHeight = 52;

type Props = Readonly<{ href: string; label: string; lang: Lang; placement: StorePlacement }>;

export function StoreButton({ href, label, lang, placement }: Props) {
  const onClick = () => {
    trackEvent("store_click");
    sendGa({ name: "app_store_click", placement, lang });
  };
  return (
    <a className="store-badge" href={appStoreLink(href, placement, lang)} onClick={onClick}>
      <Image
        src={`/badges/app-store-${lang}.svg`}
        alt={label}
        width={Math.round((badgeWidth[lang] * badgeHeight) / 40)}
        height={badgeHeight}
        priority
      />
    </a>
  );
}
