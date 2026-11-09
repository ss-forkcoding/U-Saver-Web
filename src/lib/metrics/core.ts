// 브라우저와 /api/track 이 공유하는 지표 이벤트 계약의 단일 출처.
export const metricEvents = ["visit", "store_click"] as const;
export type MetricEvent = (typeof metricEvents)[number];

export function parseMetricEvent(raw: unknown): MetricEvent | null {
  if (typeof raw !== "object" || raw === null || !("event" in raw)) return null;
  return metricEvents.find((event) => event === raw.event) ?? null;
}

const botPattern = /bot|crawl|spider|slurp|yeti|daum|headless|lighthouse|preview|facebookexternalhit/i;

// User-Agent 가 없으면 사람의 브라우저로 보지 않는다.
export function isBotUserAgent(userAgent: string | null): boolean {
  return !userAgent || botPattern.test(userAgent);
}

export function isSameHost(origin: string | null, host: string | null): boolean {
  if (!origin || !host) return false;
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}
