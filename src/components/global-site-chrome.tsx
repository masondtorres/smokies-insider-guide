"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const primaryNav = [
  { label: "First Trip", href: "/first-time-smokies" },
  { label: "Gatlinburg", href: "/gatlinburg" },
  { label: "Pigeon Forge", href: "/pigeon-forge" },
  { label: "Cades Cove", href: "/cades-cove" },
  { label: "Where to Stay", href: "/where-to-stay" },
  { label: "Parking", href: "/smokies-parking-trolley-guide" },
];

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Source policy", href: "/source-and-verification-policy" },
  { label: "Corrections", href: "/corrections" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

function isCurrent(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function GlobalSiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-shell-header">
      <div className="site-shell-header-inner">
        <Link className="site-shell-wordmark" href="/" aria-label="Smoky Insider home">
          Smoky <span>Insider</span>
        </Link>

        <nav className="site-shell-nav" aria-label="Primary navigation">
          {primaryNav.map((link) => (
            <Link
              aria-current={isCurrent(pathname, link.href) ? "page" : undefined}
              href={link.href}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link className="site-shell-cta" href="/start-planning">
          Build a Trip
        </Link>
      </div>
    </header>
  );
}

export function GlobalSiteFooter() {
  return (
    <footer className="site-shell-footer">
      <div className="site-shell-footer-inner">
        <div>
          <Link className="site-shell-footer-wordmark" href="/">
            Smoky <span>Insider</span>
          </Link>
          <p>
            Independent Smoky Mountains trip planning built in East Tennessee.
            Not affiliated with the National Park Service or a tourism board.
          </p>
        </div>
        <nav aria-label="Policy and information links">
          {footerLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="site-shell-footer-bottom">
        <span>&copy; {new Date().getFullYear()} Smoky Insider</span>
        <span>Local judgment for trips that work in real life.</span>
      </div>
    </footer>
  );
}
