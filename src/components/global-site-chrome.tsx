"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { SiteIdentity } from "@/components/site-mark";

const primaryNav = [
  { label: "Today", href: "/today" },
  { label: "Plan", href: "/start-planning" },
  { label: "Go", href: "/go" },
  { label: "Do", href: "/do" },
  { label: "See", href: "/see" },
  { label: "Eat", href: "/eat" },
  { label: "Stay", href: "/stay" },
  { label: "My Plan", href: "/my-plan" },
];

const footerLinkGroups = [
  {
    title: "Plan",
    links: [
      { label: "Start planning", href: "/start-planning" },
      { label: "Today's conditions", href: "/today" },
      { label: "My Plan", href: "/my-plan" },
      { label: "Parking & timing", href: "/parking-timing-cheat-sheet" },
      { label: "Rainy-day backup", href: "/rainy-day" },
    ],
  },
  {
    title: "Places",
    links: [
      { label: "Go", href: "/go" },
      { label: "Do", href: "/do" },
      { label: "See", href: "/see" },
      { label: "Eat", href: "/eat" },
      { label: "Stay", href: "/stay" },
    ],
  },
  {
    title: "Trust",
    links: [
      { label: "About", href: "/about" },
      { label: "Editorial policy", href: "/editorial-policy" },
      { label: "Source policy", href: "/source-and-verification-policy" },
      { label: "Report a correction", href: "/corrections" },
      { label: "Photo credits", href: "/photo-credits" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
  {
    title: "Business",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Advertise", href: "/advertise" },
      { label: "Deals", href: "/deals" },
      { label: "Affiliate disclosure", href: "/affiliate-disclosure" },
      { label: "Sponsored content", href: "/sponsored-content-policy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

function isCurrent(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function GlobalSiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const drawerId = useId();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="standard-site-header">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="standard-site-header-visual">
        <div className="standard-site-header-inner">
          <Link className="standard-site-brand" href="/" aria-label="Smokies Insider home">
            <SiteIdentity />
            <span className="standard-site-tagline">Local judgment for trips that actually work</span>
          </Link>

          <div className="standard-site-header-actions">
            <Link className="standard-site-action standard-site-action-secondary" href="/today">
              Today
            </Link>
            <Link className="standard-site-action standard-site-action-primary" href="/my-plan">
              My Plan
            </Link>
            <button
              type="button"
              className="menu-toggle"
              aria-expanded={open}
              aria-controls={drawerId}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? "Close" : "Menu"}
            </button>
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

      {open ? (
        <button
          type="button"
          className="mobile-drawer-backdrop"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        />
      ) : null}

      <div
        className={`mobile-drawer${open ? " is-open" : ""}`}
        id={drawerId}
        hidden={!open}
      >
        <nav aria-label="Mobile menu">
          {primaryNav.map((link) => (
            <Link
              aria-current={isCurrent(pathname, link.href) ? "page" : undefined}
              href={link.href}
              key={`mobile-${link.href}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
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
            Not affiliated with the National Park Service, Dollywood or any tourism board.
            Time-sensitive facts link to the official source.
          </small>
        </div>
        <nav className="standard-site-footer-links" aria-label="Site sections">
          {footerLinkGroups.map((group) => (
            <div className="standard-site-footer-group" key={group.title}>
              <p className="standard-site-footer-heading">{group.title}</p>
              {group.links.map((link) => (
                <Link href={link.href} key={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </nav>
      </div>
      <div className="standard-site-footer-bottom">
        <span>&copy; {new Date().getFullYear()} Smokies Insider</span>
        <span>
          Photography: NPS public-domain images, NARA, and{" "}
          <Link href="/photo-credits">credited Wikimedia work</Link>. Kuwohi east view: Acroterion,{" "}
          <a href="https://creativecommons.org/licenses/by-sa/4.0/" rel="license">CC BY-SA 4.0</a>.
        </span>
      </div>
    </footer>
  );
}
