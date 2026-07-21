import type { Metadata } from "next";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";
import { Geist_Mono, Montserrat } from "next/font/google";
import { MobileBottomNav } from "@/components/mobile-bottom-nav";
import "./globals.css";
import "./homepage-hero-image.css";
import "./sitewide-theme.css";
import "./visual-layer-v1.css";
import "./visual-layer-v2.css";
import "./smokies-radiant-v1.css";
import "./authority-v1.css";

const montserrat = Montserrat({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.smokyinsider.com"),
  title: "Smoky Insider",
  description:
    "Veteran-owned, family-friendly Smoky Mountains travel planning for Gatlinburg, Pigeon Forge, Sevierville, Townsend and Great Smoky Mountains National Park.",
  applicationName: "Smoky Insider",
  category: "Travel and Tourism",
  keywords: [
    "Smoky Mountains travel planning",
    "Great Smoky Mountains trip planner",
    "Gatlinburg travel guide",
    "Pigeon Forge trip planning",
    "Sevierville Tennessee travel",
    "family vacation planning",
    "travel and tourism",
  ],
  authors: [{ name: "Mason Torres" }],
  creator: "Mason Torres",
  publisher: "Smoky Insider",
  openGraph: {
    type: "website",
    siteName: "Smoky Insider",
    title: "Smoky Insider | Smoky Mountains Trip Planner",
    description:
      "Veteran-owned Smokies planning for routes, attractions, restaurants, stays, deals and before-you-go details.",
    url: "https://www.smokyinsider.com",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  other: {
    rating: "General",
    audience: "All",
    classification: "Travel and Tourism",
    coverage: "United States",
    distribution: "Global",
    "page-topic": "Family-friendly Smoky Mountains travel planning",
    "site-category": "Travel, Tourism, Vacation Planning, Family Travel",
  },
  icons: {
    icon: "/smokies-field-guide-icon.svg",
    shortcut: "/smokies-field-guide-icon.svg",
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
      className={`${montserrat.variable} ${geistMono.variable} antialiased`}
    >
      <body>
        {children}
        <aside className="site-editor-credit" aria-label="Smoky Insider editor">
          <span>Veteran-owned by Mason Torres, Founder and Editor.</span>
          <Link href="/about">About Mason</Link>
          <Link href="/corrections">Report a correction</Link>
        </aside>
        <aside className="visual-photo-credit" aria-label="Photography credit">
          Smokies photographs: National Park Service. Food photograph: Toa Heftiba, CC0. Ticket photograph: Mattia Luigi Nappi, CC BY-SA 3.0. Full source records are in the project manifest.
        </aside>
        <MobileBottomNav />
        <Analytics />
      </body>
    </html>
  );
}
