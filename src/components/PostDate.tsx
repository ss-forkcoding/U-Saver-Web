import { blogCopy, type BlogLang } from "@/content/site";

export function PostDate({ date, lang }: Readonly<{ date: string; lang: BlogLang }>) {
  const label = new Intl.DateTimeFormat(blogCopy[lang].locale, { dateStyle: "long", timeZone: "UTC" }).format(new Date(date));
  return <time dateTime={date}>{label}</time>;
}
