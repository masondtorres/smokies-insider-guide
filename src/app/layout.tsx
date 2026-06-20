import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import "./homepage-hero-image.css";

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
    "Better routes, places to eat, deals, things to do, events and visitor resources for the Smokies without the guesswork.",
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
        <Analytics />
      </body>
    </html>
  );
}
