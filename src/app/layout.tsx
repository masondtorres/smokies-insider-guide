import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import { GlobalSiteFooter, GlobalSiteHeader } from "@/components/global-site-chrome";
import { MobileBottomNav } from "@/components/mobile-bottom-nav";
import "./globals.css";
import "./brand-system.css";
import "./places.css";

const GA_MEASUREMENT_ID = "G-MPRKPD95C1";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const ui = Source_Sans_3({
  variable: "--font-ui",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.smokyinsider.com"),
  title: {
    default: "Smokies Insider | Gatlinburg, Pigeon Forge & Great Smoky Mountains Guide",
    template: "%s | Smokies Insider",
  },
  description:
    "Independent Smoky Mountains trip planning for Gatlinburg, Pigeon Forge, Sevierville, Townsend and Great Smoky Mountains National Park. Current conditions, traffic and parking help, verified local places, official links and practical trip plans.",
  applicationName: "Smokies Insider",
  category: "Travel and Tourism",
  keywords: [
    "Smoky Mountains travel planning",
    "Great Smoky Mountains trip planner",
    "Gatlinburg travel guide",
    "Pigeon Forge trip planning",
    "Sevierville Tennessee travel",
    "Townsend Tennessee",
    "Great Smoky Mountains National Park",
    "Smoky Mountains fall color",
    "Smoky Mountains traffic and parking",
    "Smoky Mountains restaurants and attractions",
  ],
  authors: [{ name: "Mason Torres" }, { name: "Smokies Insider" }],
  creator: "Mason Torres",
  publisher: "Smokies Insider",
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    siteName: "Smokies Insider",
    title: "Smokies Insider | Gatlinburg, Pigeon Forge & Great Smoky Mountains Guide",
    description:
      "Plan a Smokies trip around current conditions, traffic, real restaurants and attractions, lodging choices, fall color and official source links.",
    url: "https://www.smokyinsider.com",
    locale: "en_US",
    images: [{ url: "/images/photos/og-home.jpg", width: 1200, height: 630, alt: "Autumn in Cades Cove, Great Smoky Mountains National Park" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smokies Insider | Smoky Mountains Trip Guide",
    description:
      "Current conditions, traffic help, real places, official links and practical planning for Gatlinburg, Pigeon Forge, Sevierville, Townsend and the national park.",
    images: ["/images/photos/og-home.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [{ url: "/smokies-field-guide-icon.svg", type: "image/svg+xml", sizes: "any" }],
    shortcut: "/smokies-field-guide-icon.svg",
    apple: "/smokies-field-guide-icon.svg",
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
      className={`${display.variable} ${ui.variable} antialiased`}
    >
      <body>
        <GlobalSiteHeader />
        <div className="standard-site-content" id="main-content">
          {children}
        </div>
        <GlobalSiteFooter />
        <MobileBottomNav />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <Analytics />
      </body>
    </html>
  );
}
