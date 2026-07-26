import type { NextConfig } from "next";

const legacyRedirects = [
  // Home and company history
  ["/index.html", "/"],
  ["/home.html", "/"],
  ["/about.html", "/#about"],

  // Dog grooming services and pricing
  ["/dog-grooming.html", "/#services"],
  ["/dog-grooming1.html", "/#services"],
  ["/pet-grooming.html", "/#services"],
  ["/grooming.html", "/#services"],
  ["/grooming1.html", "/#services"],
  ["/grooming2.html", "/#services"],
  ["/grooming-and-pricing.html", "/#services"],
  ["/services.html", "/#services"],
  ["/services1.html", "/#services"],
  ["/services2.html", "/#services"],
  ["/other-services.html", "/#services"],
  ["/spa.html", "/#services"],
  ["/a_la_carte.html", "/#services"],

  // Current grooming team
  ["/the-team.html", "/#about"],
  ["/the-team1.html", "/#about"],
  ["/yu.html", "/#about"],
  ["/ling.html", "/#about"],
  ["/zandy.html", "/#about"],

  // Booking, policies, contact and promotions
  ["/online-booking.html", "/#book"],
  ["/online_booking.html", "/#book"],
  ["/late--no-show-policy.html", "/#policies"],
  ["/contact-us.html", "/#contact"],
  ["/client-referral-program.html", "/#rewards"],
  ["/everyday_specials.html", "/#rewards"],
  ["/specials.html", "/#rewards"],

  // Grooming work galleries
  ["/pics.html", "/#gallery"],
  ["/before-and-after.html", "/#gallery"],
] as const;

const showcaseRedirects = [
  ["/our-services", "/#services"],
  ["/our-team", "/#about"],
] as const;

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      ...showcaseRedirects.map(([source, destination]) => ({
        source,
        destination,
        permanent: false,
      })),
      ...legacyRedirects.map(([source, destination]) => ({
        source,
        destination,
        permanent: true,
      })),
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/photos/**",
      },
    ],
  },
};

export default nextConfig;
