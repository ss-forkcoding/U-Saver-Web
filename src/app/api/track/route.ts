import type { NextRequest } from "next/server";
import { isBotUserAgent, isSameHost, parseMetricEvent } from "@/lib/metrics/core";
import { allowMetric, incrementMetric } from "@/lib/metrics/server";

function status(code: number): Response {
  return new Response(null, { status: code });
}

function clientKey(request: NextRequest): string {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
}

export async function POST(request: NextRequest): Promise<Response> {
  if (!isSameHost(request.headers.get("origin"), request.headers.get("host"))) return status(403);

  const event = parseMetricEvent(await request.json().catch(() => null));
  if (!event) return status(400);

  // 봇은 오류가 아니므로 성공으로 끝내고 세지 않는다.
  if (isBotUserAgent(request.headers.get("user-agent"))) return status(204);
  if (!allowMetric(clientKey(request), Date.now())) return status(429);

  return status((await incrementMetric(event)) ? 204 : 502);
}
