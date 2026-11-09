import { fallbackLang, isLang, type Lang } from "@/content/langs";

function parseEntry(entry: string): Readonly<{ tag: string; quality: number }> {
  const [tag = "", ...params] = entry.trim().split(";");
  const q = params.map((param) => param.trim()).find((param) => param.startsWith("q="));
  return { tag: tag.trim(), quality: q ? Number(q.slice(2)) : 1 };
}

// 브라우저의 기본 언어(가중치가 가장 높은 첫 항목) 하나만 본다. 지원하지 않으면 다음 순위로 내려가지 않고 영어로 보낸다.
export function preferredLang(acceptLanguage: string | null): Lang {
  const entries = (acceptLanguage ?? "").split(",").map(parseEntry).filter((entry) => entry.tag !== "" && entry.quality > 0);
  const primary = entries.reduce<(typeof entries)[number] | undefined>(
    (best, entry) => (!best || entry.quality > best.quality ? entry : best),
    undefined,
  );
  const base = primary?.tag.split("-")[0]?.toLowerCase() ?? "";
  return isLang(base) ? base : fallbackLang;
}
