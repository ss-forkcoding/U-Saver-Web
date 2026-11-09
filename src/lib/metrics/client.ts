import type { MetricEvent } from "./core";

const visitKey = "usaver-visit-counted";

export function trackEvent(event: MetricEvent): void {
  const body = JSON.stringify({ event });
  const queued = navigator.sendBeacon?.("/api/track", new Blob([body], { type: "application/json" }));
  if (queued) return;
  void fetch("/api/track", { method: "POST", headers: { "content-type": "application/json" }, body, keepalive: true }).catch(() => undefined);
}

// 탭 세션당 한 번만 센다. 저장소를 쓸 수 없으면 새로고침마다 부풀지 않도록 세지 않는다.
export function trackVisitOnce(): void {
  try {
    if (sessionStorage.getItem(visitKey)) return;
    sessionStorage.setItem(visitKey, "1");
  } catch {
    return;
  }
  trackEvent("visit");
}
