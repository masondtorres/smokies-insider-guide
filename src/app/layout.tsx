import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Fraunces, Montserrat } from "next/font/google";
import { GlobalSiteFooter, GlobalSiteHeader } from "@/components/global-site-chrome";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const socialImage =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Great_Smoky_Mountains_National_Park_GRSM8831.jpg/1280px-Great_Smoky_Mountains_National_Park_GRSM8831.jpg";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.smokyinsider.com"),
  title: {
    default: "Smoky Insider | Honest Smoky Mountains Trip Planning",
    template: "%s | Smoky Insider",
  },
  description:
    "Honest local help for planning Gatlinburg, Pigeon Forge, Cades Cove and Great Smoky Mountains National Park without wasting time, money or an entire day in traffic.",
  applicationName: "Smoky Insider",
  category: "Travel and Tourism",
  authors: [{ name: "Smoky Insider" }],
  creator: "Smoky Insider",
  publisher: "Smoky Insider",
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    siteName: "Smoky Insider",
    title: "Smoky Insider | Honest Smoky Mountains Trip Planning",
    description:
      "Local judgment for planning a Smokies trip that works in real life.",
    url: "https://www.smokyinsider.com",
    locale: "en_US",
    images: [
      {
        url: socialImage,
        width: 1280,
        height: 853,
        alt: "Layered ridges in Great Smoky Mountains National Park",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smoky Insider",
    description: "Plan a Smokies trip that works in real life.",
    images: [socialImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: [{ url: "/smokies-field-guide-icon.svg", type: "image/svg+xml", sizes: "any" }],
    shortcut: "/smokies-field-guide-icon.svg",
    apple: "/smokies-field-guide-icon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${fraunces.variable}`}>
      <body>
        <GlobalSiteHeader />
        <div className="site-shell-content">{children}</div>
        <GlobalSiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
