import type { ReactNode } from "react";
import type { ConditionIconName } from "@/content/site";

const paths: Record<ConditionIconName, ReactNode> = {
  phone: (
    <>
      <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
      <path d="M10.5 5h3" />
    </>
  ),
  drive: (
    <>
      <path d="M9 9V3.5h6V9" />
      <rect x="7" y="9" width="10" height="12" rx="2.5" />
      <path d="M11 6h.01M13 6h.01" />
    </>
  ),
  bolt: <path d="M13 2.5 5.5 13.5H11l-1 8 7.5-11H12z" />,
  screen: (
    <>
      <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
      <circle cx="12" cy="12" r="2" />
      <path d="M12 7.5v1M12 15.5v1M7 12h0" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="10.5" width="14" height="10.5" rx="2.5" />
      <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3M12 14.5v2.5" />
    </>
  ),
};

// 조건 목록의 선 아이콘. 옆 이름이 뜻을 전달하므로 보조 기술에서 숨긴다.
export function ConditionIcon({ name }: Readonly<{ name: ConditionIconName }>) {
  return (
    <svg
      className="condition-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}
