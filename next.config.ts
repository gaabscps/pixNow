import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  async rewrites() {
    return [
      {
        source: "/story/:path*",
        destination: "/storybook-static/:path*",
      },
    ];
  },
};

export default nextConfig;
