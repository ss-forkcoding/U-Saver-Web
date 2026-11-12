import { appleGuides, feedbackLimits, refundUrl, site } from "@/content/site";
import type { SiteCopy } from "./types";

const limit = feedbackLimits.messageMax.toLocaleString("en-US");
const externalStorageLink = { label: "Apple 외장 저장장치 연결 안내", href: appleGuides.externalStorage };
const backupLink = { label: "Apple 아이폰 백업 안내", href: appleGuides.backup };
const feedbackRetention = "접수일부터 1년 동안 보관하고 삭제합니다.";

// "전체 백업" 표현은 쓰지 않는다. 개인정보 문구는 앱의 실제 동작과 맞추고, 수집 항목이 바뀌면 세 언어와 시행일을 함께 고친다.
export const ko = {
  description: "컴퓨터 없이 일반 USB로 아이폰 사진·영상·연락처를 백업하는 앱입니다.",
  homeTitle: `${site.name} | 컴퓨터 없이 USB로 아이폰 백업`,
  nav: { blog: "블로그", support: "지원", privacy: "개인정보 처리방침", language: "언어 선택" },
  updatedLabel: "마지막 수정",
  operatingSystem: "iOS 26 이상",
  home: {
    heroEyebrow: "사진은 내 USB에",
    heroLines: ["아이폰 사진을", "컴퓨터 없이 USB에 저장하세요."],
    heroLead: "영상과 연락처도 저장할 수 있고, 원본은 아이폰에 그대로 남습니다.",
    price: "5000원도 안되는 돈으로 평생 사용",
    heroActions: [{ label: "내 아이폰에 맞는지 확인하기", href: "#conditions", primary: true }],
    storeAction: "App Store에서 받기",
    optionsEyebrow: "하나만 고르세요",
    optionsTitle: "모두 백업할까요, 사진만 백업할까요?",
    options: [
      { name: "모두 백업", detail: "사진, 영상, 연락처를 USB에 저장합니다." },
      { name: "사진만", detail: "사진과 Live Photo를 저장합니다." },
    ],
    stepsEyebrow: "이렇게 씁니다",
    stepsTitle: "USB를 꽂고 원을 꾹 누르면 시작됩니다",
    steps: [
      { title: "USB를 꽂고 화면을 누릅니다", detail: "처음 한 번은 아이폰의 파일 선택창에서 USB를 고릅니다.", screen: "/screens/usb-pick.webp" },
      { title: "남은 용량을 확인합니다", detail: "원 안에 USB의 남은 용량과 전체 용량이 표시됩니다. 앱이 쓰기와 읽기 속도도 측정합니다.", screen: "/screens/usb-capacity.webp" },
      { title: "원을 옆으로 밀어 방식을 고릅니다", detail: "모두 백업과 사진만 중 하나를 선택합니다.", screen: "/screens/mode-all.webp" },
      { title: "원을 꾹 눌러 시작합니다", detail: "USB가 빠지면 경고를 띄우고 10초 동안 기다립니다.", screen: "/screens/mode-photos.webp" },
      { title: "기록에서 결과를 확인합니다", detail: "완료 여부와 멈춘 지점이 앱에 남습니다. 멈춘 백업은 기록에서 이어서 진행합니다.", screen: "/screens/history.webp" },
    ],
    conditionsEyebrow: "잠깐만요",
    conditionsTitle: "구매 전에 다섯 가지를 확인하세요",
    conditionsNote: "아래 조건이 맞는지 먼저 확인하세요.",
    conditions: [
      { icon: "phone", label: "아이폰", value: "iOS 26 이상이 필요합니다. Lightning 단자 아이폰은 USB 어댑터가 필요합니다." },
      { icon: "drive", label: "USB 형식", value: "exFAT과 FAT32 형식의 USB를 쓸 수 있습니다." },
      { icon: "bolt", label: "전원", value: "USB 종류에 따라 아이폰에 외부 전원을 연결해야 할 수 있습니다." },
      { icon: "screen", label: "백업하는 동안", value: "백업하는 동안 앱을 켜 두세요." },
      { icon: "lock", label: "보안", value: "USB를 안전하게 보관하세요." },
    ],
    supportPrompt: ["궁금한 점은 ", "지원 페이지", "에서 확인하세요."],
    faqEyebrow: "먼저 확인해 보세요",
    faqTitle: "자주 묻는 질문",
    faqs: [
      { q: "U-Saver는 어떤 앱인가요?", a: "U-Saver는 컴퓨터 없이 일반 USB에 아이폰의 사진, 영상, 연락처를 저장하는 iOS 앱입니다. USB의 백업을 아이폰으로 되돌리는 기능은 아직 앱에 없습니다." },
      {
        q: "컴퓨터 없이 아이폰 사진을 USB에 백업할 수 있나요?",
        a: "네. USB를 아이폰에 꽂고 앱에서 원을 꾹 누르면 백업이 시작됩니다. Apple 안내에 따르면 아이폰은 외장 저장장치를 직접 연결해 파일을 옮길 수 있습니다.",
        sources: [externalStorageLink],
      },
      { q: "어떤 USB를 쓸 수 있나요?", a: "exFAT과 FAT32 형식의 USB를 쓸 수 있습니다. 4GB가 넘는 영상을 저장하려면 exFAT 형식을 고르세요. 두 형식 모두 Apple이 안내하는 아이폰 외장 저장장치 형식입니다." },
      { q: "U-Saver는 얼마인가요?", a: "U-Saver는 4,900원을 한 번 결제하는 앱입니다. App Store에서 받을 수 있습니다." },
      { q: "백업 중에 USB가 빠지면 어떻게 되나요?", a: "앱이 경고를 띄우고 10초 동안 기다립니다. 그 사이에 USB를 다시 꽂으면 됩니다. 멈춘 백업은 앱의 기록에서 이어서 진행합니다." },
      {
        q: "iCloud 백업과 무엇이 다른가요?",
        a: "Apple의 아이폰 백업은 iCloud나 컴퓨터에 저장합니다. U-Saver는 사진, 영상, 연락처를 USB에 저장합니다. 백업 방식은 모두 백업과 사진만 2개입니다.",
        sources: [backupLink],
      },
    ],
  },
  support: {
    title: "지원",
    heading: `${site.name} 지원`,
    description: `${site.name} 문의 이메일과 자주 묻는 질문입니다. USB가 보이지 않거나 백업이 멈췄을 때 해결 방법과 환불 방법을 안내합니다.`,
    lead: "USB가 보이지 않거나 백업이 멈췄다면 아래 답변을 먼저 확인하세요. 해결되지 않으면 이메일로 알려 주세요.",
    emailAction: "이메일 보내기",
    emailSubject: `${site.name} 문의`,
    eyebrow: "도와드릴게요",
    checklistEyebrow: "빠르게 답하려면",
    checklistTitle: "메일에 3개 항목을 함께 적어 주세요",
    checklist: ["아이폰 모델과 iOS 버전", "USB 제품명, 용량, 형식", "화면에 나온 문구와 발생 시점"],
    faqEyebrow: "먼저 확인해 보세요",
    faqTitle: "자주 묻는 질문",
    faqs: [
      {
        q: "USB가 보이지 않으면 어떻게 하나요?",
        a: "먼저 아이폰의 파일 앱에서 USB가 보이는지 확인하세요. 파일 앱에도 보이지 않으면 USB 형식이 exFAT 또는 FAT32인지 확인하고, 아이폰에 외부 전원을 연결한 뒤 다시 꽂아 보세요.",
        sources: [externalStorageLink],
      },
      { q: "USB를 다시 꽂았는데 이어지지 않으면 어떻게 하나요?", a: "앱은 USB가 빠지면 10초 동안 기다립니다. 화면을 누른 뒤 파일 선택창에서 같은 USB를 다시 고르세요. 그래도 멈춰 있으면 기록 목록에서 해당 백업을 열어 이어서 진행하세요." },
      { q: "4GB가 넘는 영상은 어떻게 저장하나요?", a: "FAT32 형식은 파일 1개당 4GB까지 저장합니다. 더 큰 영상은 exFAT 형식의 USB를 사용하세요. 저장하지 못한 항목은 기록에 예외로 표시됩니다." },
      { q: "화면을 잠그면 왜 멈추나요?", a: "화면이 잠기면 시스템이 작업을 끝낼 수 있습니다. 앱을 켠 상태로 두고, 멈췄다면 기록에서 이어서 진행하세요." },
      {
        q: "환불은 어떻게 하나요?",
        a: "App Store 구매 건은 Apple이 처리합니다. 아래 Apple 문제 신고 페이지에서 요청하세요.",
        sources: [{ label: "Apple 문제 신고 페이지 열기", href: refundUrl }],
      },
    ],
  },
  feedback: {
    eyebrow: "듣고 있습니다",
    title: "앱에 대한 의견을 남겨 주세요",
    note: "답변이 필요한 문의는 이메일 주소를 함께 적어 주세요.",
    shortcut: "의견 남기기",
    categoryLabel: "종류",
    categoryPlaceholder: "선택해 주세요",
    categories: { bug: "오류나 문제", idea: "개선 제안", question: "질문", other: "기타" },
    messageLabel: "내용",
    messageHelp: `${feedbackLimits.messageMin}자 이상 ${limit}자 이하로 적어 주세요.`,
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
      messageLong: `내용은 ${limit}자까지 적을 수 있습니다.`,
      email: "이메일 주소를 다시 확인해 주세요. 예: name@example.com",
    },
  },
  privacy: {
    eyebrow: "숨김없이 적었습니다",
    effectiveLabel: "시행일",
    title: "개인정보 처리방침",
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
        paragraphs: ["사이트는 방문 통계를 위해 Google Analytics를 씁니다. 광고용 쿠키는 쓰지 않습니다. 앱은 분석 도구를 쓰지 않습니다. 이와 별도로 사이트가 직접 세는 방문 수와 App Store 버튼 클릭 수는 개인을 구분하지 않는 합계로만 셉니다. 방문을 두 번 세지 않기 위한 표시는 브라우저 탭에만 저장됩니다. 의견과 이메일에 주민등록번호나 비밀번호, 건강 정보를 적지 말아 주세요."],
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
            name: "Google Analytics 방문 통계",
            rows: [
              { label: "받는 항목", value: "본 페이지, 유입 경로, 기기와 브라우저 정보, 대략적인 지역, 쿠키에 저장된 임의의 방문자 식별값" },
              { label: "쓰는 이유", value: "방문 규모와 많이 읽는 글을 파악해 사이트를 개선합니다." },
              { label: "보관 기간", value: "통계는 최대 14개월 보관합니다. 쿠키(_ga, _ga_*)는 최대 2년 유지되며 브라우저에서 언제든 지울 수 있습니다." },
            ],
          },
          {
            name: "반복 전송 방지",
            rows: [
              { label: "받는 항목", value: "의견 양식을 보내거나 방문·클릭 수가 집계될 때의 IP 주소" },
              { label: "쓰는 이유", value: "의견 양식은 10분에 5회, 방문·클릭 집계는 10분에 60회를 넘는 반복 전송을 막습니다." },
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
          {
            name: "Google LLC (미국) · Google Analytics",
            rows: [
              { label: "맡기는 일", value: "사이트 방문 통계" },
              { label: "이전 항목", value: "본 페이지, 유입 경로, 기기와 브라우저 정보, 대략적인 지역, 쿠키의 방문자 식별값" },
              { label: "이전 시점", value: "사이트 페이지를 열 때 인터넷으로 전송합니다." },
              { label: "거부 방법", value: "Google Analytics 차단 부가기능", href: "https://tools.google.com/dlpage/gaoptout" },
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
  },
} as const satisfies SiteCopy;
