import { blogCopy, type Lang } from "@/content/site";

export function PostDate({ date, lang }: Readonly<{ date: string; lang: Lang }>) {
  const label = new Intl.DateTimeFormat(blogCopy[lang].locale, { dateStyle: "long", timeZone: "UTC" }).format(new Date(date));
  return <time dateTime={date}>{label}</time>;
}
