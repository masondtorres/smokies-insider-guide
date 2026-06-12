import Link from "next/link";
import type { Category } from "@/data/cards";
import { cardsFor, categoryInfo } from "@/data/cards";
import { GuideCard } from "./guide-card";

const navigation: Array<[string, string, Category | "my-plan"]> = [
  ["Go", "/go", "go"],
  ["Do", "/do", "do"],
  ["See", "/see", "see"],
  ["Eat", "/eat", "eat"],
  ["Stay", "/stay", "stay"],
  ["Deals", "/deals", "deals"],
  ["My Plan", "/my-plan", "my-plan"],
];

const footerLinks = [
  ["About", "/about"],
  ["Advertise", "/advertise"],
  ["Contact", "/contact"],
  ["Privacy", "/privacy"],
  ["Terms", "/terms"],
  ["Business Listings", "/business-listings"],
];

export function CategoryPage({ category }: { category: Category }) {
  const info = categoryInfo[category];
  const categoryCards = cardsFor(category);

  return (
    <div className="category-foundation">
      <header className="category-header">
        <Link className="category-wordmark" href="/">Smokies Insider</Link>
        <nav className="category-nav" aria-label="Primary navigation">
          {navigation.map(([label, href, key]) => (
            <Link aria-current={key === category ? "page" : undefined} href={href} key={href}>
              {label}
            </Link>
          ))}
        </nav>
      </header>

      <main>
        <section className="category-hero">
          <div className="category-ridge category-ridge-back" aria-hidden="true" />
          <div className="category-ridge category-ridge-front" aria-hidden="true" />
          <div className="category-width category-hero-inner">
            <div className="category-hero-copy">
              <p className="category-eyebrow">Smokies field guide / {info.title}</p>
              <h1>{info.title}</h1>
              <p>{info.intro}</p>
            </div>
            <aside className="category-route-note" aria-label="How to use this page">
              <strong>Build a workable day</strong>
              <span>Choose a pattern. Check the caution. Save what fits.</span>
              <Link href="/my-plan">Open My Plan <span aria-hidden="true">&gt;</span></Link>
            </aside>
          </div>
        </section>

        <section className="category-width category-content" aria-labelledby="category-starters">
          <div className="category-section-heading">
            <div>
              <p className="category-eyebrow">Start with the shape of the day</p>
              <h2 id="category-starters">Planning starters</h2>
            </div>
            <p>{categoryCards.length} practical options. Save any that fit, then review the mix in My Plan.</p>
          </div>

          {categoryCards.length > 0 ? (
            <div className="category-card-grid">
              {categoryCards.map((card, index) => (
                <GuideCard card={card} index={index + 1} key={card.id} />
              ))}
            </div>
          ) : (
            <div className="category-empty">
              <h2>No planning starters yet</h2>
              <p>This section will stay empty until a useful, source-safe planning pattern is ready.</p>
              <Link href="/">Return home</Link>
            </div>
          )}

          <aside className="category-trust-note">
            <strong>Before you go</strong>
            <p>These are planning patterns, not verified business listings or guarantees. Recheck conditions, parking, access and operating details with the relevant official source.</p>
          </aside>
        </section>
      </main>

      <footer className="category-footer">
        <div>
          <strong>Smokies Insider</strong>
          <span>© 2026 Smokies Insider. Independent trip-planning field guide.</span>
        </div>
        <nav className="category-footer-links" aria-label="Policy and information links">
          {footerLinks.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
        </nav>
      </footer>
    </div>
  );
}
