import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { ActionBar } from "@/components/ActionBar";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { BusinessJsonLd } from "@/components/JsonLd";
import { site } from "@/data/site";
import "./globals.css";

const display = localFont({
  src: "../fonts/young-serif-latin-400-normal.woff2",
  variable: "--font-display-face",
  weight: "400",
  display: "swap",
});
const text = localFont({
  src: "../fonts/hanken-grotesk-latin-wght-normal.woff2",
  variable: "--font-text",
  weight: "100 900",
  display: "swap",
});
const figures = localFont({
  src: [
    { path: "../fonts/courier-prime-latin-400-normal.woff2", weight: "400" },
    { path: "../fonts/courier-prime-latin-700-normal.woff2", weight: "700" },
  ],
  variable: "--font-figures",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ecf6d2",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Dog walking and pet sitting in Brackley | Sam's Pet Services",
    template: "%s | Sam's Pet Services, Brackley",
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Sam's Pet Services: dog walks, pet visits and overnight sits in Brackley",
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_GB",
    type: "website",
    images: [{ url: "/images/og.jpg", width: 1200, height: 630, alt: "Sam's Pet Services, Brackley" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${display.variable} ${text.variable} ${figures.variable}`}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:bg-[var(--lemon)] focus:p-3">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <ActionBar />
        <BusinessJsonLd />
      </body>
    </html>
  );
}
