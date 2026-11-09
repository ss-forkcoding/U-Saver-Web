"use client";

import { useEffect } from "react";
import { trackVisitOnce } from "@/lib/metrics/client";

export function VisitTracker() {
  useEffect(trackVisitOnce, []);
  return null;
}
