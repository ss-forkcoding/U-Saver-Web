import { feedbackCategories, feedbackCopy, feedbackLimits } from "@/content/site";

export type FeedbackCategory = (typeof feedbackCategories)[number]["value"];
export type FeedbackField = "category" | "message" | "email";
export type FeedbackValues = Readonly<Record<FeedbackField, string>>;
export type FeedbackErrors = Readonly<Partial<Record<FeedbackField, string>>>;
export type FeedbackCommand = Readonly<{ category: FeedbackCategory; message: string; email: string }>;

export type FeedbackState = Readonly<
  | { status: "idle" | "success"; attempt: number }
  | { status: "invalid"; attempt: number; values: FeedbackValues; errors: FeedbackErrors }
  | { status: "rate_limited" | "unavailable"; attempt: number; values: FeedbackValues }
>;

type ParseResult = Readonly<{ ok: true; value: FeedbackCommand } | { ok: false; errors: FeedbackErrors }>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// 줄바꿈과 탭을 뺀 제어 문자는 저장하지 않는다.
const controlCharacters = /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g;

function isCategory(value: string): value is FeedbackCategory {
  return feedbackCategories.some((category) => category.value === value);
}

export function parseFeedback(values: FeedbackValues): ParseResult {
  const message = values.message.replace(controlCharacters, "").trim();
  const email = values.email.trim();
  const errors: Partial<Record<FeedbackField, string>> = {};

  if (!isCategory(values.category)) errors.category = feedbackCopy.errors.category;
  if (message.length < feedbackLimits.messageMin) errors.message = feedbackCopy.errors.messageShort;
  if (message.length > feedbackLimits.messageMax) errors.message = feedbackCopy.errors.messageLong;
  if (email !== "" && (email.length > feedbackLimits.emailMax || !emailPattern.test(email))) {
    errors.email = feedbackCopy.errors.email;
  }

  if (!isCategory(values.category) || Object.keys(errors).length > 0) return { ok: false, errors };
  return { ok: true, value: { category: values.category, message, email } };
}

export type RateWindow = Readonly<{ count: number; resetAt: number }>;

export function consumeRateWindow(
  current: RateWindow | undefined,
  now: number,
  limit: number,
  windowMs: number,
): Readonly<{ allowed: boolean; next: RateWindow }> {
  if (!current || current.resetAt <= now) return { allowed: true, next: { count: 1, resetAt: now + windowMs } };
  if (current.count >= limit) return { allowed: false, next: current };
  return { allowed: true, next: { count: current.count + 1, resetAt: current.resetAt } };
}
