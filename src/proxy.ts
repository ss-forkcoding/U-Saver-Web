import { NextResponse, type NextRequest } from "next/server";
import { preferredLang } from "@/lib/locale";

// 언어가 없는 주소만 브라우저 언어로 보낸다. /en 처럼 언어를 고른 주소는 그대로 둔다.
export function proxy(request: NextRequest) {
  const lang = preferredLang(request.headers.get("accept-language"));
  const url = request.nextUrl.clone();
  const { pathname } = url;
  url.pathname = pathname === "/blog" ? `/blog/${lang}` : pathname === "/" ? `/${lang}` : `/${lang}${pathname}`;
  const response = NextResponse.redirect(url, 307);
  response.headers.set("Vary", "Accept-Language");
  return response;
}

export const config = {
  matcher: ["/", "/support", "/privacy", "/blog"],
};
