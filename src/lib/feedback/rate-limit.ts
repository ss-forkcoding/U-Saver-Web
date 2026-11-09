import { consumeRateWindow, type RateWindow } from "./core";

type RateLimit = Readonly<{ limit: number; windowMs: number; maxTrackedKeys: number }>;

// 서버리스 인스턴스별 메모리다. 의견의 인스턴스를 넘는 전체 상한은 Apps Script 가 맡는다.
export function createRateLimiter({ limit, windowMs, maxTrackedKeys }: RateLimit) {
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

  return (key: string, now: number): boolean => {
    makeRoom(now);
    const { allowed, next } = consumeRateWindow(windows.get(key), now, limit, windowMs);
    windows.set(key, next);
    return allowed;
  };
}

export const allowFeedback = createRateLimiter({ limit: 5, windowMs: 10 * 60 * 1000, maxTrackedKeys: 5000 });
