import Image from "next/image";
import { site } from "@/content/site";

// 머리글 전용 로고. 첫 화면 맨 위에 보이므로 먼저 불러온다.
export function BrandLogo() {
  return <Image className="brand-logo" src="/brand/u-saver-lockup-light.svg" alt={site.name} width={550} height={126} priority />;
}
