import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const mainLinks = [
  ["Go", "/go"], ["Do", "/do"], ["See", "/see"], ["Eat", "/eat"],
  ["Stay", "/stay"], ["Deals", "/deals"], ["My Plan", "/my-plan"],
];

const footerLinks = [
  ["About", "/about"], ["Advertise", "/advertise"], ["Contact", "/contact"],
  ["Privacy", "/privacy"], ["Terms", "/terms"], ["Business Listings", "/business-listings"],
];

export const metadata: Metadata = {
  title: { default: "Smokies Insider", template: "%s | Smokies Insider" },
  description: "A practical, independent framework for planning a Smokies trip.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <div className="site-shell">
          <header className="site-header">
            <Link className="wordmark" href="/">Smokies Insider</Link>
            <nav className="primary-nav" aria-label="Primary navigation">
              {mainLinks.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
            </nav>
          </header>
          {children}
          <footer className="site-footer">
            <div><strong>Smokies Insider</strong><span>© 2026 Smokies Insider. Independent trip-planning field guide.</span></div>
            <nav className="footer-links" aria-label="Policy and information links">
              {footerLinks.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
            </nav>
          </footer>
        </div>
      </body>
    </html>
  );
}
