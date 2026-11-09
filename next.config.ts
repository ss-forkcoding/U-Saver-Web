import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  // 빌드에 없는 글 주소도 런타임에 원고를 읽어 404로 끝낼 수 있게 한다.
  outputFileTracingIncludes: { "/blog/**": ["./src/content/blog/**/*"] },
  async redirects() {
    return [{ source: "/blog", destination: "/blog/ko", permanent: false }];
  },
};

export default nextConfig;
