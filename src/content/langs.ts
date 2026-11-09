export const langs = ["ko", "en", "ja"] as const;
export type Lang = (typeof langs)[number];

// 지원하지 않는 언어의 방문자에게 보여 줄 언어.
export const fallbackLang: Lang = "en";

export function isLang(value: string): value is Lang {
  return (langs as readonly string[]).includes(value);
}
