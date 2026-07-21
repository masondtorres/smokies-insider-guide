import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist_Mono, Montserrat } from "next/font/google";
import { MobileBottomNav } from "@/components/mobile-bottom-nav";
import "./globals.css";
import "./homepage-hero-image.css";
import "./sitewide-theme.css";
import "./visual-layer-v1.css";
import "./visual-layer-v2.css";

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
    "Family-friendly Smoky Mountains travel planning for Gatlinburg, Pigeon Forge, Sevierville, Townsend and Great Smoky Mountains National Park.",
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
  openGraph: {
    type: "website",
    siteName: "Smoky Insider",
    title: "Smoky Insider | Smoky Mountains Trip Planner",
    description:
      "Family-friendly Smoky Mountains travel planning for routes, attractions, restaurants, stays, deals and before-you-go details.",
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
        <aside className="visual-photo-credit" aria-label="Photography credit">
          Smokies photography: National Park Service. NPS-credited images shown here are used under the public-domain guidance on their source pages.
        </aside>
        <MobileBottomNav />
        <Analytics />
      </body>
    </html>
  );
}
