import QRCode from "qrcode";
import { QrViewTracker } from "@/components/QrViewTracker";
import { appStoreLink, type Lang } from "@/content/site";

// 데스크톱 방문자가 아이폰으로 옮겨 설치하는 경로. 표시 여부는 CSS 가 포인터·폭으로 정한다.
// 서버에서 SVG 를 만들어 링크와 QR 이 어긋나지 않게 하고, 클라이언트 번들에 qrcode 를 싣지 않는다.
export async function StoreQr({ href, caption, lang }: Readonly<{ href: string; caption: string; lang: Lang }>) {
  const svg = await QRCode.toString(appStoreLink(href, "home_qr", lang), {
    type: "svg",
    errorCorrectionLevel: "M",
    margin: 2,
    color: { dark: "#191970", light: "#ffffff" },
  });
  return (
    <figure className="store-qr">
      <span className="store-qr-code" role="img" aria-label={caption} dangerouslySetInnerHTML={{ __html: svg }} />
      <figcaption>{caption}</figcaption>
      <QrViewTracker lang={lang} />
    </figure>
  );
}
