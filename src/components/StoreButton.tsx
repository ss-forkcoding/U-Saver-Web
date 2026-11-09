"use client";

import { trackEvent } from "@/lib/metrics/client";

export function StoreButton({ href, label }: Readonly<{ href: string; label: string }>) {
  return (
    <a className="pill pill-primary" href={href} onClick={() => trackEvent("store_click")}>
      {label}
    </a>
  );
}
