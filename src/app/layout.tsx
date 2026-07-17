import type { Metadata } from "next";
import localFont from "next/font/local";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
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
  title: {
    default: "TLC Grooming | Dog Grooming in Ottawa",
    template: "%s | TLC Grooming",
  },
  description:
    "Gentle dog grooming, walk-in nail trims, and pet care from an experienced Gloucester team serving Ottawa since 1986.",
  applicationName: "TLC Grooming",
  keywords: [
    "Ottawa pet grooming",
    "Gloucester dog grooming",
    "dog groomer Ottawa",
    "pet nail trim Ottawa",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "TLC Grooming and Sharpening Services",
    title: "TLC Grooming | Dog Grooming in Ottawa",
    description:
      "Gentle grooming and practical pet care from an experienced local team in Gloucester.",
  },
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
