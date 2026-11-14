// 언어와 무관한 사이트 값의 단일 출처. 언어별 문구는 src/content/copy 에 둔다.
export const site = {
  name: "U-Saver",
  url: "https://usaver.fork-coding.com",
  copyright: "© 2026 NextGenAI Co.",
  supportEmail: "khan@nextgenai.kr",
  updatedOn: "2026-11-09",
  privacyEffectiveOn: "2026-11-09",
  gaMeasurementId: "G-FPGBR792PD",
} as const;

// 값이 있으면 홈 히어로 CTA가 클릭 집계되는 App Store 버튼으로 바뀐다. 국가 없는 주소라 Apple이 방문자 스토어로 보낸다.
export const appStoreUrl: string | null = "https://apps.apple.com/app/id6832455182";

// App Store Connect > 앱 분석 > 캠페인 링크 생성기의 공급자 토큰(pt). 값이 있어야 ct 가 앱 분석에 집계된다.
export const appStoreProviderToken: string | null = "127037476";

// 버튼 위치. GA 이벤트 파라미터와 App Store 캠페인 이름(ct)의 단일 출처다.
export const storePlacements = ["home_hero", "home_qr"] as const;
export type StorePlacement = (typeof storePlacements)[number];

// pt 가 없으면 원래 주소를 그대로 쓴다. ct 는 40자 이하라 "web_" + 위치 + 언어로 짓는다.
export function appStoreLink(base: string, placement: StorePlacement, lang: Lang): string {
  if (!appStoreProviderToken) return base;
  const url = new URL(base);
  url.searchParams.set("pt", appStoreProviderToken);
  url.searchParams.set("ct", `web_${placement}_${lang}`);
  url.searchParams.set("mt", "8");
  return url.toString();
}

export type FaqSource = Readonly<{ label: string; href: string }>;
export type FaqItem = Readonly<{ q: string; a: string; sources?: readonly FaqSource[] }>;

export const appleGuides = {
  externalStorage: "https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios",
  backup: "https://support.apple.com/guide/iphone/back-up-iphone-iph3ecf67d29/ios",
} as const;

export const refundUrl = "https://reportaproblem.apple.com";

export { fallbackLang, isLang, langs, type Lang } from "./langs";
import type { Lang } from "./langs";

export const blogCopy = {
  ko: {
    label: "한국어",
    locale: "ko-KR",
    title: "블로그",
    eyebrow: "천천히 읽어 보세요",
    lead: "U-Saver로 아이폰 사진과 영상을 USB에 옮기는 방법과 구매 전에 확인할 조건을 정리합니다.",
    description: "U-Saver 사용 방법과 구매 전 조건을 정리한 블로그입니다.",
    languageNav: "언어 선택",
    backToList: "글 목록으로 돌아가기",
    empty: "아직 올라온 글이 없습니다.",
    guideTitle: "이 블로그 안내",
    guide: [
      { q: "어떤 글부터 읽으면 좋을까요?", a: "구매를 고민한다면 구매 전 조건을 정리한 글부터 읽어 보세요. 아이폰 버전, USB 형식, 전원처럼 먼저 확인할 항목을 볼 수 있습니다. 컴퓨터 없이 옮기는 순서가 궁금하다면 사진, 영상, 연락처 백업 글을 이어서 읽으면 됩니다." },
      {
        q: "글의 내용은 무엇을 근거로 쓰나요?",
        a: "아이폰의 저장 기능과 백업 방식은 Apple 공식 안내를 기준으로 씁니다. U-Saver 기능은 앱의 현재 동작을 기준으로 씁니다. 원문은 아래 Apple 안내에서 직접 확인할 수 있습니다.",
        sources: [
          { label: "Apple 외장 저장장치 연결 안내", href: appleGuides.externalStorage },
          { label: "Apple 아이폰 백업 안내", href: appleGuides.backup },
        ],
      },
    ],
  },
  en: {
    label: "English",
    locale: "en-US",
    title: "Blog",
    eyebrow: "Take your time",
    lead: "How to move iPhone photos and videos to USB with U-Saver, and what to check before you buy.",
    description: "Guides to using U-Saver and the conditions to check before you buy.",
    languageNav: "Choose language",
    backToList: "Back to all posts",
    empty: "No posts yet.",
    guideTitle: "About this blog",
    guide: [
      { q: "Which post should I read first?", a: "If you are thinking about buying the app, start with the post on conditions to check. It covers your iOS version, USB format, and power. To see how to move data without a computer, continue with the photo, video, and contact backup guides." },
      {
        q: "What are these posts based on?",
        a: "Descriptions of iPhone storage and backup follow Apple's official guides. Descriptions of U-Saver follow how the app works today. You can read the original guides at the Apple links below.",
        sources: [
          { label: "Apple guide to external storage", href: appleGuides.externalStorage },
          { label: "Apple guide to iPhone backup", href: appleGuides.backup },
        ],
      },
    ],
  },
  ja: {
    label: "日本語",
    locale: "ja-JP",
    title: "ブログ",
    eyebrow: "ゆっくりどうぞ",
    lead: "U-SaverでiPhoneの写真やビデオをUSBメモリへ移す方法と、購入前に確認しておきたい条件をまとめています。",
    description: "U-Saverの使い方と購入前に確認する条件をまとめたブログです。",
    languageNav: "言語を選択",
    backToList: "記事一覧に戻る",
    empty: "まだ記事はありません。",
    guideTitle: "このブログについて",
    guide: [
      { q: "どの記事から読めばいいですか?", a: "購入を検討しているなら、購入前の条件をまとめた記事から読んでください。iOSのバージョン、USBメモリの形式、電源など、先に確認したい項目がわかります。パソコンなしで移す手順を知りたい場合は、写真、ビデオ、連絡先のバックアップ記事に進んでください。" },
      {
        q: "記事の内容は何に基づいていますか?",
        a: "iPhoneの保存機能とバックアップの説明は、Appleの公式ガイドに基づいています。U-Saverの機能の説明は、現在のアプリの動作に基づいています。原文は下のAppleのリンクから確認できます。",
        sources: [
          { label: "Appleの外部ストレージ接続ガイド", href: appleGuides.externalStorage },
          { label: "AppleのiPhoneバックアップガイド", href: appleGuides.backup },
        ],
      },
    ],
  },
} as const satisfies Record<Lang, Record<string, string | readonly FaqItem[]>>;

export type Step = Readonly<{ title: string; detail: string; screen: string }>;
export type ConditionIconName = "phone" | "drive" | "bolt" | "screen" | "lock";

export const feedbackCategoryValues = ["bug", "idea", "question", "other"] as const;
export type FeedbackCategory = (typeof feedbackCategoryValues)[number];
export type FeedbackErrorCode = "category" | "messageShort" | "messageLong" | "email";

export const feedbackLimits = { messageMin: 10, messageMax: 2000, emailMax: 254 } as const;

export type PolicyRow = Readonly<{ label: string; value: string; href?: string }>;
export type PolicyRecord = Readonly<{ name: string; rows: readonly PolicyRow[] }>;
export type PolicySection = Readonly<{
  id: string;
  title: string;
  notice?: string;
  paragraphs?: readonly string[];
  records?: readonly PolicyRecord[];
  items?: readonly string[];
}>;
