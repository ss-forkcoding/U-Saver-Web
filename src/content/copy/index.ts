import type { Lang } from "@/content/langs";
import { en } from "./en";
import { ja } from "./ja";
import { ko } from "./ko";
import type { SiteCopy } from "./types";

export const siteCopy: Readonly<Record<Lang, SiteCopy>> = { ko, en, ja };
