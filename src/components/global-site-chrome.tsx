"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SiteIdentity } from "@/components/site-mark";

const primaryNav = [
  { label: "Start Here", href: "/start-here" },
  { label: "Go", href: "/go" },
  { label: "Do", href: "/do" },
  { label: "See", href: "/see" },
  { label: "Eat", href: "/eat" },
  { label: "Stay", href: "/stay" },
  { label: "Deals", href: "/deals" },
  { label: "Resources", href: "/visitor-resources" },
];

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Advertise", href: "/advertise" },
  { label: "Affiliate disclosure", href: "/affiliate-disclosure" },
  { label: "Editorial policy", href: "/editorial-policy" },
  { label: "Source policy", href: "/source-and-verification-policy" },
  { label: "Corrections", href: "/corrections" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

function isCurrent(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function GlobalSiteHeader() {
  const pathname = usePathname();

  return (
    <header className="standard-site-header">
      <div className="standard-site-header-visual">
        <div className="standard-site-header-inner">
          <Link className="standard-site-brand" href="/" aria-label="Smoky Insider home">
            <SiteIdentity />
            <span className="standard-site-tagline">
              Local judgment for trips that actually work
            </span>
          </Link>

          <div className="standard-site-header-actions">
            <Link className="standard-site-action standard-site-action-secondary" href="/start-planning">
              Start planning
            </Link>
            <Link className="standard-site-action standard-site-action-primary" href="/my-plan">
              My Plan
            </Link>
          </div>
        </div>
      </div>

      <nav className="standard-site-nav-shell" aria-label="Primary navigation">
        <div className="standard-site-nav">
          {primaryNav.map((link) => (
            <Link
              aria-current={isCurrent(pathname, link.href) ? "page" : undefined}
              href={link.href}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

export function GlobalSiteFooter() {
  return (
    <footer className="standard-site-footer">
      <div className="standard-site-footer-inner">
        <div className="standard-site-footer-brand">
          <SiteIdentity compact />
          <p>
            Independent Smoky Mountains trip planning for Gatlinburg, Pigeon Forge,
            Sevierville, Townsend and Great Smoky Mountains National Park.
          </p>
          <small>
            Not affiliated with the National Park Service or any tourism board.
          </small>
        </div>
        <nav className="standard-site-footer-links" aria-label="Policy and information links">
          {footerLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="standard-site-footer-bottom">
        <span>&copy; {new Date().getFullYear()} Smoky Insider</span>
        <span>
          Photography credits and source records are maintained in the project manifest.
        </span>
      </div>
    </footer>
  );
}
