// 사이트 문구의 단일 출처. 앱 범위는 u-saver/ai-docs/decisions 와 맞춘다. "전체 백업" 표현은 쓰지 않는다.
export const site = {
  name: "U-Saver",
  copyright: "© 2026 NextGenAI Co.",
  supportEmail: "khan@nextgenai.kr",
  description: "컴퓨터 없이 일반 USB로 아이폰 사진·영상·연락처를 백업하고 복원하는 앱입니다.",
  heroLead: "사진, 영상, 연락처를 일반 USB에 저장하고 앱에서 다시 복원합니다.",
  releaseStatus: "App Store 출시 준비 중",
  price: "₩4,900 한 번 결제. 무료 체험과 앱 내 결제는 없습니다.",
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

export const heroActions = [
  { label: "구매 전 조건 보기", href: "#conditions", primary: true },
  { label: "사용 순서 보기", href: "#steps", primary: false },
] as const;

export const backupOptions = [
  { name: "모두 백업", detail: "사진, 영상, 연락처를 USB에 저장합니다." },
  { name: "사진만", detail: "사진과 Live Photo를 저장합니다. 영상은 저장하지 않습니다." },
] as const;

export const steps = [
  { title: "USB를 꽂고 화면을 누릅니다", detail: "처음 한 번은 아이폰의 파일 선택창에서 USB를 고릅니다." },
  { title: "원을 옆으로 밀어 방식을 고릅니다", detail: "모두 백업과 사진만 중 하나를 선택합니다." },
  { title: "원을 꾹 눌러 시작합니다", detail: "USB가 빠지면 경고를 띄우고 10초 동안 기다립니다." },
  { title: "기록에서 결과를 확인합니다", detail: "완료 여부와 중단 지점이 앱에 남습니다. 중단된 백업은 이어서 진행하고, USB의 내용은 사진 앱과 연락처로 복원합니다." },
] as const;

export const conditions = [
  { icon: "phone", label: "아이폰", value: "iOS 26 이상이 필요합니다. Lightning 단자 아이폰은 USB 어댑터가 필요합니다." },
  { icon: "drive", label: "USB 형식", value: "exFAT과 FAT32를 사용합니다. NTFS는 지원하지 않습니다. FAT32는 4GB가 넘는 파일을 저장하지 못합니다." },
  { icon: "bolt", label: "전원", value: "USB 종류에 따라 아이폰에 외부 전원을 연결해야 할 수 있습니다." },
  { icon: "screen", label: "사용 중", value: "백업하는 동안 앱을 켜 두세요. 화면이 잠긴 상태의 백업은 보장하지 않습니다." },
  { icon: "lock", label: "보안", value: "USB에 저장한 내용은 암호화되지 않습니다. USB를 안전하게 보관하세요." },
  { icon: "ban", label: "백업 제외", value: "메시지, 앱 데이터, 아이폰 설정은 저장하지 않습니다." },
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
