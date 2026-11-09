import Image from "next/image";
import mascot from "@/assets/mascot.png";

// 손을 흔드는 USB 캐릭터. 옆 문구가 내용을 전달하는 장식이므로 대체 텍스트를 비운다.
export function Mascot({ sizes, eager = false }: Readonly<{ sizes: string; eager?: boolean }>) {
  return <Image className="mascot" src={mascot} alt="" sizes={sizes} loading={eager ? "eager" : "lazy"} />;
}
