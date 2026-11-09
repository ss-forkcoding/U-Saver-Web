// 사이트 문구의 단일 출처. 앱 범위는 u-saver/ai-docs/decisions 와 맞춘다. "전체 백업" 표현은 쓰지 않는다.
export const site = {
  name: "U-Saver",
  url: "https://usaver.fork-coding.com",
  copyright: "© 2026 NextGenAI Co.",
  supportEmail: "khan@nextgenai.kr",
  description: "컴퓨터 없이 일반 USB로 아이폰 사진·영상·연락처를 백업하고 복원하는 앱입니다.",
  heroLead: "영상과 연락처도 저장할 수 있고, USB의 내용은 앱에서 사진 앱과 연락처로 복원합니다.",
  releaseStatus: "App Store 출시 준비 중",
  price: "₩4,900 한 번 결제",
} as const;

export const eyebrows = {
  hero: "사진은 내 USB에",
  options: "하나만 고르세요",
  steps: "이렇게 씁니다",
  conditions: "잠깐만요",
  support: "도와드릴게요",
  checklist: "빠르게 답하려면",
  faq: "먼저 확인해 보세요",
} as const;

export const blogLangs = ["ko", "en", "ja"] as const;
export type BlogLang = (typeof blogLangs)[number];

export function isBlogLang(value: string): value is BlogLang {
  return (blogLangs as readonly string[]).includes(value);
}

export const blogCopy = {
  ko: {
    label: "한국어",
    locale: "ko-KR",
    title: "블로그",
    eyebrow: "천천히 읽어 보세요",
    lead: "U-Saver를 쓰는 방법과 확인할 조건을 정리합니다.",
    description: "U-Saver 사용 방법과 구매 전 조건을 정리한 블로그입니다.",
    languageNav: "언어 선택",
    backToList: "글 목록으로 돌아가기",
    empty: "아직 올라온 글이 없습니다.",
  },
  en: {
    label: "English",
    locale: "en-US",
    title: "Blog",
    eyebrow: "Take your time",
    lead: "How to use U-Saver and what to check first.",
    description: "Guides to using U-Saver and the conditions to check before you buy.",
    languageNav: "Choose language",
    backToList: "Back to all posts",
    empty: "No posts yet.",
  },
  ja: {
    label: "日本語",
    locale: "ja-JP",
    title: "ブログ",
    eyebrow: "ゆっくりどうぞ",
    lead: "U-Saverの使い方と、確認しておきたい条件をまとめています。",
    description: "U-Saverの使い方と購入前に確認する条件をまとめたブログです。",
    languageNav: "言語を選択",
    backToList: "記事一覧に戻る",
    empty: "まだ記事はありません。",
  },
} as const satisfies Record<BlogLang, Record<string, string>>;

export const homeHeadings = {
  heroLines: ["아이폰 사진을", "컴퓨터 없이 USB에 저장하세요."],
  options: "모두 백업할까요, 사진만 백업할까요?",
  steps: "USB를 꽂고 원을 꾹 누르면 시작됩니다",
  conditions: "구매 전에 다섯 가지를 확인하세요",
} as const;

export const heroActions = [
  { label: "내 아이폰에 맞는지 확인하기", href: "#conditions", primary: true },
  { label: "사용법 4단계 보기", href: "#steps", primary: false },
] as const;

export const backupOptions = [
  { name: "모두 백업", detail: "사진, 영상, 연락처를 USB에 저장합니다." },
  { name: "사진만", detail: "사진과 Live Photo를 저장합니다." },
] as const;

export const steps = [
  { title: "USB를 꽂고 화면을 누릅니다", detail: "처음 한 번은 아이폰의 파일 선택창에서 USB를 고릅니다." },
  { title: "원을 옆으로 밀어 방식을 고릅니다", detail: "모두 백업과 사진만 중 하나를 선택합니다." },
  { title: "원을 꾹 눌러 시작합니다", detail: "USB가 빠지면 경고를 띄우고 10초 동안 기다립니다." },
  { title: "기록에서 결과를 확인합니다", detail: "완료 여부와 멈춘 지점이 앱에 남습니다. 멈춘 백업은 기록에서 이어서 진행합니다." },
] as const;

export const conditions = [
  { icon: "phone", label: "아이폰", value: "iOS 26 이상이 필요합니다. Lightning 단자 아이폰은 USB 어댑터가 필요합니다." },
  { icon: "drive", label: "USB 형식", value: "exFAT과 FAT32 형식의 USB를 쓸 수 있습니다." },
  { icon: "bolt", label: "전원", value: "USB 종류에 따라 아이폰에 외부 전원을 연결해야 할 수 있습니다." },
  { icon: "screen", label: "백업하는 동안", value: "백업하는 동안 앱을 켜 두세요." },
  { icon: "lock", label: "보안", value: "USB를 안전하게 보관하세요." },
] as const;

export const contactChecklist = ["아이폰 모델과 iOS 버전", "USB 제품명, 용량, 형식", "화면에 나온 문구와 발생 시점"] as const;

export const faqs = [
  { q: "USB가 보이지 않습니다.", a: "먼저 아이폰의 파일 앱에서 USB가 보이는지 확인하세요. 파일 앱에도 보이지 않으면 USB 형식이 exFAT 또는 FAT32인지 확인하고, 아이폰에 외부 전원을 연결한 뒤 다시 꽂아 보세요." },
  { q: "USB를 다시 꽂았는데 이어지지 않습니다.", a: "화면을 누른 뒤 파일 선택창에서 같은 USB를 다시 고르세요. 그래도 멈춰 있으면 기록 목록에서 해당 백업을 열어 이어서 진행하세요." },
  { q: "4GB가 넘는 영상이 저장되지 않습니다.", a: "FAT32 형식의 한계입니다. 해당 항목은 기록에 예외로 표시됩니다. exFAT 형식의 USB를 사용하세요." },
  { q: "화면을 잠그면 멈춥니다.", a: "화면이 잠기면 시스템이 작업을 끝낼 수 있습니다. 앱을 켠 상태로 두고, 멈췄다면 기록에서 이어서 진행하세요." },
  { q: "환불은 어떻게 하나요?", a: "App Store 구매 건은 Apple이 처리합니다. 아래 Apple 문제 신고 페이지에서 요청하세요." },
] as const;

export const refundUrl = "https://reportaproblem.apple.com";

export const feedbackCategories = [
  { value: "bug", label: "오류나 문제" },
  { value: "idea", label: "개선 제안" },
  { value: "question", label: "질문" },
  { value: "other", label: "기타" },
] as const;

export const feedbackLimits = { messageMin: 10, messageMax: 2000, emailMax: 254 } as const;

export const feedbackCopy = {
  eyebrow: "듣고 있습니다",
  title: "앱에 대한 의견을 남겨 주세요",
  note: "답변이 필요한 문의는 이메일 주소를 함께 적어 주세요.",
  shortcut: "의견 남기기",
  categoryLabel: "종류",
  categoryPlaceholder: "선택해 주세요",
  messageLabel: "내용",
  messageHelp: `${feedbackLimits.messageMin}자 이상 ${feedbackLimits.messageMax.toLocaleString("en-US")}자 이하로 적어 주세요.`,
  emailLabel: "이메일 (선택)",
  emailHelp: "적어 주신 이메일은 답변에만 씁니다.",
  submit: "의견 보내기",
  pending: "보내는 중입니다",
  success: "의견을 받았습니다. 고맙습니다.",
  invalidSummary: "입력한 내용을 다시 확인해 주세요.",
  rateLimited: "짧은 시간에 여러 번 보내셨습니다. 10분 뒤에 다시 보내 주세요.",
  unavailable: `지금은 의견을 받지 못했습니다. ${site.supportEmail} 로 이메일을 보내 주세요.`,
  errors: {
    category: "종류를 선택해 주세요.",
    messageShort: `내용을 ${feedbackLimits.messageMin}자 이상 적어 주세요.`,
    messageLong: `내용은 ${feedbackLimits.messageMax.toLocaleString("en-US")}자까지 적을 수 있습니다.`,
    email: "이메일 주소를 다시 확인해 주세요. 예: name@example.com",
  },
} as const;
