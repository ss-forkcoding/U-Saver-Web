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
  updatedOn: "2026-11-09",
} as const;

export type FaqSource = Readonly<{ label: string; href: string }>;
export type FaqItem = Readonly<{ q: string; a: string; sources?: readonly FaqSource[] }>;

const appleGuides = {
  externalStorage: "https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios",
  backup: "https://support.apple.com/guide/iphone/back-up-iphone-iph3ecf67d29/ios",
} as const;

export const refundUrl = "https://reportaproblem.apple.com";

export const eyebrows = {
  hero: "사진은 내 USB에",
  options: "하나만 고르세요",
  steps: "이렇게 씁니다",
  conditions: "잠깐만요",
  support: "도와드릴게요",
  checklist: "빠르게 답하려면",
  faq: "먼저 확인해 보세요",
  privacy: "숨김없이 적었습니다",
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
} as const satisfies Record<BlogLang, Record<string, string | readonly FaqItem[]>>;

export const homeHeadings = {
  heroLines: ["아이폰 사진을", "컴퓨터 없이 USB에 저장하세요."],
  options: "모두 백업할까요, 사진만 백업할까요?",
  steps: "USB를 꽂고 원을 꾹 누르면 시작됩니다",
  conditions: "구매 전에 다섯 가지를 확인하세요",
  faq: "자주 묻는 질문",
} as const;

export const heroActions = [
  { label: "내 아이폰에 맞는지 확인하기", href: "#conditions", primary: true },
  { label: "사용법 5단계 보기", href: "#steps", primary: false },
] as const;

export const backupOptions = [
  { name: "모두 백업", detail: "사진, 영상, 연락처를 USB에 저장합니다." },
  { name: "사진만", detail: "사진과 Live Photo를 저장합니다." },
] as const;

export type Step = Readonly<{ title: string; detail: string; screen: string }>;

export const steps = [
  { title: "USB를 꽂고 화면을 누릅니다", detail: "처음 한 번은 아이폰의 파일 선택창에서 USB를 고릅니다.", screen: "/screens/usb-pick.webp" },
  { title: "남은 용량을 확인합니다", detail: "원 안에 USB의 남은 용량과 전체 용량이 표시됩니다. 앱이 쓰기와 읽기 속도도 측정합니다.", screen: "/screens/usb-capacity.webp" },
  { title: "원을 옆으로 밀어 방식을 고릅니다", detail: "모두 백업과 사진만 중 하나를 선택합니다.", screen: "/screens/mode-all.webp" },
  { title: "원을 꾹 눌러 시작합니다", detail: "USB가 빠지면 경고를 띄우고 10초 동안 기다립니다.", screen: "/screens/mode-photos.webp" },
  { title: "기록에서 결과를 확인합니다", detail: "완료 여부와 멈춘 지점이 앱에 남습니다. 멈춘 백업은 기록에서 이어서 진행합니다.", screen: "/screens/history.webp" },
] as const satisfies readonly Step[];

export const conditions = [
  { icon: "phone", label: "아이폰", value: "iOS 26 이상이 필요합니다. Lightning 단자 아이폰은 USB 어댑터가 필요합니다." },
  { icon: "drive", label: "USB 형식", value: "exFAT과 FAT32 형식의 USB를 쓸 수 있습니다." },
  { icon: "bolt", label: "전원", value: "USB 종류에 따라 아이폰에 외부 전원을 연결해야 할 수 있습니다." },
  { icon: "screen", label: "백업하는 동안", value: "백업하는 동안 앱을 켜 두세요." },
  { icon: "lock", label: "보안", value: "USB를 안전하게 보관하세요." },
] as const;

export const contactChecklist = ["아이폰 모델과 iOS 버전", "USB 제품명, 용량, 형식", "화면에 나온 문구와 발생 시점"] as const;

export const homeFaqs = [
  { q: "U-Saver는 어떤 앱인가요?", a: "U-Saver는 컴퓨터 없이 일반 USB에 아이폰의 사진, 영상, 연락처를 저장하는 iOS 앱입니다. USB에 저장한 내용은 앱에서 사진 앱과 연락처로 복원합니다." },
  {
    q: "컴퓨터 없이 아이폰 사진을 USB에 백업할 수 있나요?",
    a: "네. USB를 아이폰에 꽂고 앱에서 원을 꾹 누르면 백업이 시작됩니다. Apple 안내에 따르면 아이폰은 외장 저장장치를 직접 연결해 파일을 옮길 수 있습니다.",
    sources: [{ label: "Apple 외장 저장장치 연결 안내", href: appleGuides.externalStorage }],
  },
  {
    q: "어떤 USB를 쓸 수 있나요?",
    a: "exFAT과 FAT32 형식의 USB를 쓸 수 있습니다. 4GB가 넘는 영상을 저장하려면 exFAT 형식을 고르세요. 두 형식 모두 Apple이 안내하는 아이폰 외장 저장장치 형식입니다.",
  },
  { q: "U-Saver는 얼마인가요?", a: "U-Saver는 4,900원을 한 번 결제하는 앱입니다. 지금은 App Store 출시를 준비하고 있습니다." },
  { q: "백업 중에 USB가 빠지면 어떻게 되나요?", a: "앱이 경고를 띄우고 10초 동안 기다립니다. 그 사이에 USB를 다시 꽂으면 됩니다. 멈춘 백업은 앱의 기록에서 이어서 진행합니다." },
  {
    q: "iCloud 백업과 무엇이 다른가요?",
    a: "Apple의 아이폰 백업은 iCloud나 컴퓨터에 저장합니다. U-Saver는 사진, 영상, 연락처를 USB에 저장합니다. 백업 방식은 모두 백업과 사진만 2개입니다.",
    sources: [{ label: "Apple 아이폰 백업 안내", href: appleGuides.backup }],
  },
] as const satisfies readonly FaqItem[];

export const faqs = [
  {
    q: "USB가 보이지 않으면 어떻게 하나요?",
    a: "먼저 아이폰의 파일 앱에서 USB가 보이는지 확인하세요. 파일 앱에도 보이지 않으면 USB 형식이 exFAT 또는 FAT32인지 확인하고, 아이폰에 외부 전원을 연결한 뒤 다시 꽂아 보세요.",
    sources: [{ label: "Apple 외장 저장장치 연결 안내", href: appleGuides.externalStorage }],
  },
  { q: "USB를 다시 꽂았는데 이어지지 않으면 어떻게 하나요?", a: "앱은 USB가 빠지면 10초 동안 기다립니다. 화면을 누른 뒤 파일 선택창에서 같은 USB를 다시 고르세요. 그래도 멈춰 있으면 기록 목록에서 해당 백업을 열어 이어서 진행하세요." },
  { q: "4GB가 넘는 영상은 어떻게 저장하나요?", a: "FAT32 형식은 파일 1개당 4GB까지 저장합니다. 더 큰 영상은 exFAT 형식의 USB를 사용하세요. 저장하지 못한 항목은 기록에 예외로 표시됩니다." },
  { q: "화면을 잠그면 왜 멈추나요?", a: "화면이 잠기면 시스템이 작업을 끝낼 수 있습니다. 앱을 켠 상태로 두고, 멈췄다면 기록에서 이어서 진행하세요." },
  {
    q: "환불은 어떻게 하나요?",
    a: "App Store 구매 건은 Apple이 처리합니다. 아래 Apple 문제 신고 페이지에서 요청하세요.",
    sources: [{ label: "Apple 문제 신고 페이지 열기", href: refundUrl }],
  },
] as const satisfies readonly FaqItem[];

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

const feedbackRetention = "접수일부터 1년 동안 보관하고 삭제합니다.";

// 앱의 실제 동작과 맞춘다. 네트워크 코드·SDK·수집 항목이 바뀌면 이 문구와 시행일을 함께 고친다.
export const privacyPolicy = {
  title: "개인정보 처리방침",
  effectiveOn: "2026-11-09",
  lead: `${site.name} 앱은 사진, 영상, 연락처를 아이폰과 USB 밖으로 보내지 않습니다. 저희가 받는 정보는 의견 양식과 이메일로 보내 주신 내용, 사이트 접속 기록입니다.`,
  description: `${site.name} 앱과 사이트가 다루는 정보, 보관 기간, 삭제 요청 방법을 안내합니다.`,
  sections: [
    {
      id: "app",
      title: "앱이 다루는 정보",
      paragraphs: ["앱에는 회원가입이 없고 광고나 분석 도구도 없습니다. 아래 정보는 아이폰과 USB에만 있으며 저희에게 전달되지 않습니다."],
      records: [
        {
          name: "사진과 영상",
          rows: [
            { label: "쓰는 이유", value: "고르신 방식에 따라 USB에 복사합니다." },
            { label: "저장 위치", value: "고르신 USB" },
          ],
        },
        {
          name: "연락처",
          rows: [
            { label: "쓰는 이유", value: "연락처 사본을 vCard 파일로 만들어 USB에 저장합니다. 연락처 사진도 포함합니다." },
            { label: "저장 위치", value: "고르신 USB" },
          ],
        },
        {
          name: "공유한 파일",
          rows: [
            { label: "쓰는 이유", value: "공유 시트에서 고르신 파일을 USB로 옮깁니다." },
            { label: "저장 위치", value: "USB의 U-Saver Files 폴더" },
          ],
        },
        {
          name: "백업 기록과 앱 설정",
          rows: [
            { label: "내용", value: "백업 시각, USB 이름, 백업 방식, 결과, 저장한 항목 수와 용량, USB 연결 정보, 테마, 언어" },
            { label: "저장 위치", value: "아이폰의 앱 저장 공간" },
          ],
        },
      ],
    },
    {
      id: "usb",
      title: "USB에 저장된 파일",
      notice: "USB에 저장된 파일은 암호화되지 않습니다. USB를 손에 넣은 사람은 사진, 영상, 연락처를 열어 볼 수 있습니다.",
      paragraphs: ["USB를 안전한 곳에 보관해 주세요. USB의 기기별 폴더 이름은 무작위 문자로 만들며 아이폰 이름을 넣지 않습니다."],
    },
    {
      id: "collected",
      title: "저희가 받는 정보",
      paragraphs: ["사이트에는 분석 도구와 광고 쿠키가 없습니다. 의견과 이메일에 주민등록번호나 비밀번호, 건강 정보를 적지 말아 주세요."],
      records: [
        {
          name: "의견 양식",
          rows: [
            { label: "받는 항목", value: "의견 종류, 내용, 접수 시각, 이메일 주소(선택)" },
            { label: "쓰는 이유", value: "문의 답변과 앱 개선" },
            { label: "보관 기간", value: feedbackRetention },
          ],
        },
        {
          name: "이메일 문의",
          rows: [
            { label: "받는 항목", value: "보낸 사람의 이메일 주소, 메일 내용" },
            { label: "쓰는 이유", value: "문의 답변" },
            { label: "보관 기간", value: feedbackRetention },
          ],
        },
        {
          name: "사이트 접속 기록",
          rows: [
            { label: "받는 항목", value: "IP 주소, 브라우저 정보, 접속 시각. 접속할 때 자동으로 만들어집니다." },
            { label: "쓰는 이유", value: "사이트 제공과 오류 확인" },
            { label: "보관 기간", value: "사이트 운영 업체(Vercel)의 기록 보관 기간을 따릅니다." },
          ],
        },
        {
          name: "반복 전송 방지",
          rows: [
            { label: "받는 항목", value: "의견 양식을 보낸 IP 주소" },
            { label: "쓰는 이유", value: "10분에 5회를 넘는 반복 전송을 막습니다." },
            { label: "보관 기간", value: "서버 메모리에 잠시 둡니다. 의견 시트에는 저장하지 않습니다." },
          ],
        },
      ],
    },
    {
      id: "purchase",
      title: "구매 정보와 제3자 제공",
      paragraphs: [
        "앱 구매와 환불은 Apple이 처리합니다. 저희는 결제 수단과 Apple 계정 정보를 받지 않습니다.",
        "저희는 이용자의 정보를 팔지 않습니다. 법령이 요구하는 경우를 빼면 다른 회사에 제공하지 않습니다.",
      ],
    },
    {
      id: "vendors",
      title: "처리를 맡기는 곳과 국외 이전",
      paragraphs: ["아래 업체는 미국 회사이며 정보가 국외에서 처리될 수 있습니다. 의견 양식을 쓰지 않으면 의견 내용은 이전되지 않습니다."],
      records: [
        {
          name: "Vercel Inc. (미국)",
          rows: [
            { label: "맡기는 일", value: "사이트 운영과 의견 양식 전달" },
            { label: "이전 항목", value: "사이트 접속 기록, 의견 양식 입력 내용" },
            { label: "이전 시점", value: "사이트에 접속하거나 의견을 보낼 때 인터넷으로 전송합니다." },
            { label: "업체 방침", value: "Vercel 개인정보 처리방침", href: "https://vercel.com/legal/privacy-policy" },
          ],
        },
        {
          name: "Google LLC (미국)",
          rows: [
            { label: "맡기는 일", value: "의견 저장(Google 스프레드시트)" },
            { label: "이전 항목", value: "의견 종류, 내용, 접수 시각, 이메일 주소(선택)" },
            { label: "이전 시점", value: "의견을 보낼 때 인터넷으로 전송합니다." },
            { label: "업체 방침", value: "Google 개인정보처리방침", href: "https://policies.google.com/privacy" },
          ],
        },
      ],
    },
    {
      id: "rights",
      title: "권리 행사와 삭제",
      items: [
        "아이폰 설정의 개인정보 보호 메뉴에서 사진과 연락처 접근 권한을 언제든 끌 수 있습니다.",
        "앱을 삭제하면 아이폰에 있던 백업 기록과 앱 설정이 지워집니다. USB의 파일은 남으므로 직접 지워 주세요.",
        `의견과 문의 내용의 열람, 정정, 삭제, 처리 정지는 ${site.supportEmail} 로 요청해 주세요. 요청을 받은 날부터 10일 안에 답합니다.`,
        "보관 기간이 끝나면 시트의 해당 줄과 메일을 복구할 수 없게 삭제합니다.",
        "만 14세 미만이라면 보호자가 대신 문의해 주세요.",
      ],
    },
    {
      id: "security",
      title: "안전 조치",
      items: ["사이트와 의견 전송은 암호화된 연결(HTTPS)을 씁니다.", "의견 시트에는 비밀 값으로 확인된 요청만 저장합니다."],
    },
    {
      id: "contact",
      title: "문의와 신고",
      records: [
        {
          name: "개인정보 보호 담당",
          rows: [
            { label: "담당", value: `NextGenAI Co. ${site.name} 지원 담당` },
            { label: "이메일", value: site.supportEmail, href: `mailto:${site.supportEmail}` },
          ],
        },
      ],
    },
    {
      id: "remedy",
      title: "피해 구제 기관",
      paragraphs: ["개인정보 침해로 도움이 필요하면 아래 기관에 상담할 수 있습니다."],
      items: ["개인정보침해 신고센터: 국번 없이 118", "개인정보 분쟁조정위원회: 1833-6972", "대검찰청: 국번 없이 1301", "경찰청: 국번 없이 182"],
    },
    {
      id: "changes",
      title: "방침 변경",
      paragraphs: ["내용을 바꾸면 이 페이지에 알리고 위의 시행일을 고칩니다."],
    },
  ],
} as const satisfies Readonly<{
  title: string;
  effectiveOn: string;
  lead: string;
  description: string;
  sections: readonly PolicySection[];
}>;
