import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      {
        source: "/dog-grooming.html",
        destination: "/our-services",
        permanent: true,
      },
      {
        source: "/dog-and-cat-grooming.html",
        destination: "/our-services",
        permanent: true,
      },
      {
        source: "/about.html",
        destination: "/our-team",
        permanent: true,
      },
      {
        source: "/contact-us.html",
        destination: "/#contact",
        permanent: true,
      },
      {
        source: "/late--no-show-policy.html",
        destination: "/#policies",
        permanent: true,
      },
      {
        source: "/yu.html",
        destination: "/our-team",
        permanent: true,
      },
      {
        source: "/ling.html",
        destination: "/our-team",
        permanent: true,
      },
      {
        source: "/zandy.html",
        destination: "/our-team",
        permanent: true,
      },
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/home.html",
        destination: "/",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.tlc4dogs.com",
        pathname: "/uploads/2/8/2/4/28247963/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/photos/**",
      },
    ],
  },
};

export default nextConfig;
