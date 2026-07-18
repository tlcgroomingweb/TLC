import type { Metadata } from "next";
import localFont from "next/font/local";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/geist-latin.woff2",
  variable: "--font-geist-sans",
  display: "swap",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/geist-mono-latin.woff2",
  variable: "--font-geist-mono",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "TLC Grooming | Dog Grooming in Ottawa",
    template: "%s | TLC Grooming",
  },
  description:
    "Gentle dog grooming, walk-in nail trims, and thoughtful pet care from an experienced Gloucester team.",
  applicationName: "TLC Grooming",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "/",
    siteName: site.name,
    title: "TLC Grooming | Dog Grooming in Ottawa",
    description:
      "Gentle grooming and practical pet care from an experienced local team in Gloucester.",
    images: [
      {
        url: "/brand/tlc-logo.png",
        width: 1160,
        height: 490,
        alt: "TLC Grooming logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TLC Grooming | Dog Grooming in Ottawa",
    description:
      "Gentle grooming and practical pet care from an experienced local team in Gloucester.",
    images: ["/brand/tlc-logo.png"],
  },
  ...(process.env.GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
