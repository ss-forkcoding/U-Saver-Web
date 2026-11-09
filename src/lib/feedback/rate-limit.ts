import { consumeRateWindow, type RateWindow } from "./core";

const limit = 5;
const windowMs = 10 * 60 * 1000;
const maxTrackedKeys = 5000;

// 서버리스 인스턴스별 메모리다. 인스턴스를 넘는 전체 상한은 Apps Script 가 맡는다.
const windows = new Map<string, RateWindow>();

function makeRoom(now: number): void {
  if (windows.size < maxTrackedKeys) return;
  for (const [key, window] of windows) {
    if (window.resetAt <= now) windows.delete(key);
  }
  if (windows.size >= maxTrackedKeys) {
    const oldest = windows.keys().next().value;
    if (oldest !== undefined) windows.delete(oldest);
  }
}

export function allowFeedback(key: string, now: number): boolean {
  makeRoom(now);
  const { allowed, next } = consumeRateWindow(windows.get(key), now, limit, windowMs);
  windows.set(key, next);
  return allowed;
}
