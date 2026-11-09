import { createRateLimiter } from "@/lib/feedback/rate-limit";
import type { MetricEvent } from "./core";

const timeoutMs = 5_000;

const webhookEnv = {
  visit: "ZENITH_VISIT_WEBHOOK_URL",
  store_click: "ZENITH_STORE_CLICK_WEBHOOK_URL",
} as const satisfies Record<MetricEvent, string>;

export const allowMetric = createRateLimiter({ limit: 60, windowMs: 10 * 60 * 1000, maxTrackedKeys: 5000 });

// 웹훅 주소에 토큰이 들어 있다. 주소를 로그에 남기지 않는다.
export async function incrementMetric(event: MetricEvent): Promise<boolean> {
  const url = process.env[webhookEnv[event]];
  if (!url) {
    console.error(`metric: ${webhookEnv[event]} is missing`);
    return false;
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ op: "increment", value: 1 }),
      signal: AbortSignal.timeout(timeoutMs),
      cache: "no-store",
    });
    if (!response.ok) console.error(`metric: ${event} webhook responded ${response.status}`);
    return response.ok;
  } catch (error) {
    console.error(`metric: ${event} webhook failed ${error instanceof Error ? error.name : "UNKNOWN"}`);
    return false;
  }
}
