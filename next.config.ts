import type { NextConfig } from "next";
import { site } from "./src/content/site";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  // 빌드에 없는 글 주소도 런타임에 원고를 읽어 404로 끝낼 수 있게 한다.
  outputFileTracingIncludes: { "/blog/**": ["./src/content/blog/**/*"] },
  async redirects() {
    return [
      // 같은 글이 두 주소로 색인되지 않게 Vercel 기본 주소를 공식 주소로 보낸다.
      {
        source: "/:path*",
        has: [{ type: "host", value: "u-saver-web.vercel.app" }],
        destination: `${site.url}/:path*`,
        permanent: true,
      },
      { source: "/blog", destination: "/blog/ko", permanent: false },
    ];
  },
};

export default nextConfig;
