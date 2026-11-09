import type { FeedbackCommand } from "./core";

const timeoutMs = 10_000;

function isSaved(body: unknown): boolean {
  return typeof body === "object" && body !== null && "ok" in body && body.ok === true;
}

function errorCode(body: unknown): string {
  return typeof body === "object" && body !== null && "code" in body ? String(body.code) : "UNKNOWN";
}

// 실패 원인은 서버 로그에만 남긴다. 입력 내용과 비밀값은 기록하지 않는다.
export async function saveFeedbackToSheet(command: FeedbackCommand): Promise<boolean> {
  const url = process.env.FEEDBACK_WEBHOOK_URL;
  const secret = process.env.FEEDBACK_WEBHOOK_SECRET;
  if (!url || !secret) {
    console.error("feedback: webhook env is missing");
    return false;
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ contractVersion: 1, secret, ...command }),
      signal: AbortSignal.timeout(timeoutMs),
      cache: "no-store",
    });
    if (!response.ok) {
      console.error(`feedback: webhook responded ${response.status}`);
      return false;
    }
    const body: unknown = await response.json();
    if (!isSaved(body)) console.error(`feedback: webhook rejected ${errorCode(body)}`);
    return isSaved(body);
  } catch (error) {
    console.error(`feedback: webhook failed ${error instanceof Error ? error.name : "UNKNOWN"}`);
    return false;
  }
}
