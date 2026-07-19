import type { NextConfig } from "next";

const legacyRedirects = [
  // Home and company history
  ["/index.html", "/"],
  ["/home.html", "/"],
  ["/about.html", "/#about"],

  // Dog grooming services and pricing
  ["/dog-grooming.html", "/our-services"],
  ["/dog-grooming1.html", "/our-services"],
  ["/pet-grooming.html", "/our-services"],
  ["/grooming.html", "/our-services"],
  ["/grooming1.html", "/our-services"],
  ["/grooming2.html", "/our-services"],
  ["/grooming-and-pricing.html", "/our-services"],
  ["/services.html", "/our-services"],
  ["/services1.html", "/our-services"],
  ["/services2.html", "/our-services"],
  ["/other-services.html", "/our-services"],
  ["/spa.html", "/our-services"],
  ["/a_la_carte.html", "/our-services"],

  // Current grooming team
  ["/the-team.html", "/our-team"],
  ["/the-team1.html", "/our-team"],
  ["/yu.html", "/our-team"],
  ["/ling.html", "/our-team"],
  ["/zandy.html", "/our-team"],

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

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return legacyRedirects.map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
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
