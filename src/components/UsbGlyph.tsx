// 앱 홈 화면의 테두리 USB 아이콘과 중앙 점. 장식이므로 보조 기술에서 숨긴다.
export function UsbGlyph() {
  return (
    <svg className="usb-glyph" viewBox="0 0 160 320" aria-hidden="true" focusable="false">
      <g fill="none" stroke="currentColor" strokeWidth="6" strokeLinejoin="round">
        <rect x="48" y="12" width="64" height="72" rx="4" />
        <rect x="24" y="84" width="112" height="224" rx="20" />
        <rect x="62" y="32" width="12" height="16" />
        <rect x="86" y="32" width="12" height="16" />
      </g>
      <circle cx="80" cy="196" r="14" fill="currentColor" />
    </svg>
  );
}
