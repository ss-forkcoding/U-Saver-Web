// 마스코트 자세 계산. pose 는 -1(왼쪽 자세)부터 1(오른쪽 자세)까지다.
type Point = readonly [number, number];
type Limb = readonly [start: Point, control: Point, end: Point];

export const LIMB_NAMES = ["armLeft", "armRight", "legLeft", "legRight"] as const;
export type LimbName = (typeof LIMB_NAMES)[number];

export const REST_POSE = 1;

const MIRROR_X = 734;
const POSE_REACH_PX = 320;
const SMOOTHING_MS = 110;
const SETTLE_DISTANCE = 0.002;

const armRaised: Limb = [[498, 361], [587, 315], [603, 233]];
const armLowered: Limb = [[498, 361], [634, 360], [569, 460]];
const legInner: Limb = [[404, 545], [412, 620], [378, 671]];
const legOuter: Limb = [[454, 545], [472, 600], [518, 645]];

function blend(from: Limb, to: Limb, amount: number): Limb {
  const point = (index: 0 | 1 | 2): Point => [
    from[index][0] + (to[index][0] - from[index][0]) * amount,
    from[index][1] + (to[index][1] - from[index][1]) * amount,
  ];
  return [point(0), point(1), point(2)];
}

function mirror(limb: Limb): Limb {
  const flip = ([x, y]: Point): Point => [MIRROR_X - x, y];
  return [flip(limb[0]), flip(limb[1]), flip(limb[2])];
}

function toPath([start, control, end]: Limb): string {
  const format = ([x, y]: Point) => `${x.toFixed(1)} ${y.toFixed(1)}`;
  return `M${format(start)}Q${format(control)} ${format(end)}`;
}

function rightSide(lowered: Limb, raised: Limb, pose: number): Limb {
  return blend(lowered, raised, (pose + 1) / 2);
}

export function limbPaths(pose: number): Record<LimbName, string> {
  return {
    armLeft: toPath(mirror(rightSide(armLowered, armRaised, -pose))),
    armRight: toPath(rightSide(armLowered, armRaised, pose)),
    legLeft: toPath(mirror(rightSide(legOuter, legInner, -pose))),
    legRight: toPath(rightSide(legOuter, legInner, pose)),
  };
}

export function poseFromPointer(pointerX: number, centerX: number): number {
  return Math.min(1, Math.max(-1, (pointerX - centerX) / POSE_REACH_PX));
}

export function stepPose(current: number, target: number, elapsedMs: number): number {
  const next = target + (current - target) * Math.exp(-elapsedMs / SMOOTHING_MS);
  return Math.abs(next - target) < SETTLE_DISTANCE ? target : next;
}
