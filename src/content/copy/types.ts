import type {
  ConditionIconName,
  FaqItem,
  FeedbackCategory,
  FeedbackErrorCode,
  PolicySection,
  Step,
} from "@/content/site";

type LabeledLink = Readonly<{ label: string; href: string; primary: boolean }>;

export type FeedbackCopy = Readonly<{
  eyebrow: string;
  title: string;
  note: string;
  shortcut: string;
  categoryLabel: string;
  categoryPlaceholder: string;
  categories: Readonly<Record<FeedbackCategory, string>>;
  messageLabel: string;
  messageHelp: string;
  emailLabel: string;
  emailHelp: string;
  submit: string;
  pending: string;
  success: string;
  invalidSummary: string;
  rateLimited: string;
  unavailable: string;
  errors: Readonly<Record<FeedbackErrorCode, string>>;
}>;

// 세 언어 파일이 같은 모양을 갖도록 강제한다. 항목을 추가하면 번역이 빠진 파일에서 타입 오류가 난다.
export type SiteCopy = Readonly<{
  description: string;
  homeTitle: string;
  nav: Readonly<{ blog: string; support: string; privacy: string; language: string }>;
  updatedLabel: string;
  operatingSystem: string;
  home: Readonly<{
    heroEyebrow: string;
    heroLines: readonly [string, string];
    heroLead: string;
    price: string;
    heroActions: readonly LabeledLink[];
    storeAction: string;
    storeQrCaption: string;
    optionsEyebrow: string;
    optionsTitle: string;
    options: readonly Readonly<{ name: string; detail: string }>[];
    stepsEyebrow: string;
    stepsTitle: string;
    steps: readonly Step[];
    conditionsEyebrow: string;
    conditionsTitle: string;
    conditionsNote: string;
    conditions: readonly Readonly<{ icon: ConditionIconName; label: string; value: string }>[];
    supportPrompt: readonly [string, string, string];
    faqEyebrow: string;
    faqTitle: string;
    faqs: readonly FaqItem[];
  }>;
  support: Readonly<{
    title: string;
    heading: string;
    description: string;
    lead: string;
    emailAction: string;
    emailSubject: string;
    eyebrow: string;
    checklistEyebrow: string;
    checklistTitle: string;
    checklist: readonly string[];
    faqEyebrow: string;
    faqTitle: string;
    faqs: readonly FaqItem[];
  }>;
  feedback: FeedbackCopy;
  privacy: Readonly<{
    eyebrow: string;
    title: string;
    lead: string;
    description: string;
    effectiveLabel: string;
    sections: readonly PolicySection[];
  }>;
}>;
