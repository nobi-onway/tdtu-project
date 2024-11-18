import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gongcha.com.vn',
      },
    ],
  },
};

export default nextConfig;
