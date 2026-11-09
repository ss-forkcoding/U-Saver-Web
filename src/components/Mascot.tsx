import { LIMB_NAMES, limbPaths, REST_POSE } from "@/lib/mascot-pose";

const restLimbs = limbPaths(REST_POSE);

function Limbs() {
  return LIMB_NAMES.map((name) => <path key={name} className="mascot-limb" data-limb={name} d={restLimbs[name]} />);
}

function Plug() {
  return (
    <>
      <rect className="mascot-shade" x="245" y="62" width="60" height="165" rx="24" />
      <rect className="mascot-plug" x="279" y="47" width="180" height="180" rx="26" />
    </>
  );
}

function Body() {
  return <rect className="mascot-body" x="217" y="162" width="300" height="405" rx="68" />;
}

// 손을 흔드는 USB 캐릭터. 옆 문구가 내용을 전달하는 장식이므로 보조 기술에서 숨긴다.
export function Mascot() {
  return (
    <svg className="mascot" viewBox="0 0 734 730" aria-hidden="true" focusable="false">
      <g className="mascot-tilt">
        <g className="mascot-outline">
          <Limbs />
          <Plug />
          <Body />
        </g>
        <Limbs />
        <Plug />
        <g className="mascot-holes">
          <rect x="300" y="93" width="54" height="31" rx="6" />
          <rect x="384" y="93" width="54" height="31" rx="6" />
        </g>
        <Body />
        <g className="mascot-face">
          <path className="mascot-feature mascot-eye" d="M323 248V292" />
          <path className="mascot-feature mascot-eye" d="M411 248V292" />
          <path className="mascot-feature mascot-smile" d="M311 347Q367 413 423 347" />
        </g>
      </g>
    </svg>
  );
}
