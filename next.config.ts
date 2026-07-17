import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.tlc4dogs.com",
        pathname: "/uploads/2/8/2/4/28247963/**",
      },
    ],
  },
};

export default nextConfig;
