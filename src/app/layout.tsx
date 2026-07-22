import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist_Mono, Montserrat } from "next/font/google";
import { GlobalSiteFooter, GlobalSiteHeader } from "@/components/global-site-chrome";
import { MobileBottomNav } from "@/components/mobile-bottom-nav";
import "./globals.css";
import "./homepage-hero-image.css";
import "./sitewide-theme.css";
import "./visual-layer-v1.css";
import "./visual-layer-v2.css";
import "./smokies-radiant-v1.css";
import "./authority-v1.css";
import "./audit-fixes.css";
import "./standardized-pages.css";

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
  title: {
    default: "Smoky Insider | Plan a Smoky Mountains Trip That Works",
    template: "%s | Smoky Insider",
  },
  description:
    "Independent Smoky Mountains trip planning for Gatlinburg, Pigeon Forge, Sevierville, Townsend and Great Smoky Mountains National Park. Practical help for routes, parking, attractions, food, stays and rainy-day backups.",
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
  authors: [{ name: "Smoky Insider" }],
  creator: "Smoky Insider",
  publisher: "Smoky Insider",
  openGraph: {
    type: "website",
    siteName: "Smoky Insider",
    title: "Smoky Insider | Smoky Mountains Trip Planner",
    description:
      "Independent Smokies planning for routes, attractions, restaurants, stays, deals and before-you-go details.",
    url: "https://www.smokyinsider.com",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smoky Insider",
    description: "Plan your Smokies trip without the guesswork.",
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
        <GlobalSiteHeader />
        <div className="standard-site-content">{children}</div>
        <GlobalSiteFooter />
        <MobileBottomNav />
        <Analytics />
      </body>
    </html>
  );
}
