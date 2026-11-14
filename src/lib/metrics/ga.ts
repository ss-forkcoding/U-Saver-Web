import { sendGAEvent } from "@next/third-parties/google";
import type { Lang, StorePlacement } from "@/content/site";

// GA4 이벤트 이름의 단일 출처. app_store_click 은 GA 관리 > 주요 이벤트로 지정돼 있다.
export type GaEvent =
  | Readonly<{ name: "app_store_click"; placement: StorePlacement; lang: Lang }>
  | Readonly<{ name: "app_store_qr_view"; placement: StorePlacement; lang: Lang }>;

export function sendGa(event: GaEvent): void {
  const { name, placement, lang } = event;
  sendGAEvent("event", name, { placement, page_lang: lang });
}
