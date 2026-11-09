"use client";

import { useEffect, useRef } from "react";
import { Mascot } from "@/components/Mascot";
import { limbPaths, poseFromPointer, REST_POSE, stepPose } from "@/lib/mascot-pose";
import type { LimbName } from "@/lib/mascot-pose";

function renderPose(root: HTMLElement, pose: number): void {
  root.style.setProperty("--pose", pose.toFixed(3));
  const paths = limbPaths(pose);
  root.querySelectorAll<SVGPathElement>("[data-limb]").forEach((limb) => {
    limb.setAttribute("d", paths[limb.dataset.limb as LimbName]);
  });
}

// 마우스가 있는 환경에서만 커서 쪽으로 자세를 바꾼다. 터치와 모션 감소 환경은 기본 자세를 유지한다.
export function TrackingMascot() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!root || !canHover || reduceMotion) return;

    let current = REST_POSE;
    let target = REST_POSE;
    let frame = 0;
    let lastTime = 0;

    const tick = (time: number) => {
      current = stepPose(current, target, lastTime ? time - lastTime : 16);
      lastTime = time;
      renderPose(root, current);
      if (current === target) {
        frame = 0;
        lastTime = 0;
        return;
      }
      frame = requestAnimationFrame(tick);
    };

    const onPointerMove = (event: PointerEvent) => {
      const box = root.getBoundingClientRect();
      if (box.bottom < 0 || box.top > window.innerHeight) return;
      target = poseFromPointer(event.clientX, box.left + box.width / 2);
      if (!frame) frame = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      cancelAnimationFrame(frame);
      renderPose(root, REST_POSE);
    };
  }, []);

  return (
    <div ref={rootRef}>
      <Mascot />
    </div>
  );
}
