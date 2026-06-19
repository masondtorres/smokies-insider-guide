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
  ["Claim a Business", "/business-listings/claim"],
];

const utilityLinks: Partial<Record<Category, Array<{ href: string; title: string; description: string }>>> = {
  go: [
    { href: "/go/parking", title: "Parking without losing the day", description: "Separate park parking from town parking and keep a legal backup." },
  ],
  do: [
    { href: "/rainy-day", title: "A flexible rainy-day plan", description: "Choose one indoor anchor and keep the route compact." },
    { href: "/free-and-cheap-smokies", title: "A lower-cost Smokies plan", description: "Count the whole day and choose one optional paid anchor." },
  ],
  see: [
    { href: "/cades-cove", title: "Cades Cove practical planner", description: "Protect the time block and check the vehicle schedule." },
  ],
  eat: [
    { href: "/eat/family-friendly", title: "Family-friendly food planning", description: "Choose the meal shape, timing and backup before hunger takes over." },
  ],
  stay: [
    { href: "/stay/cabins", title: "Cabin stay practical planner", description: "Compare access, total trip fit and booking details before committing." },
  ],
};

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
          {utilityLinks[category]?.length ? (
            <section className="category-utility-guides" aria-labelledby="category-utility-title">
              <div>
                <p className="category-eyebrow">Practical field guide</p>
                <h2 id="category-utility-title">Solve the first planning problem</h2>
              </div>
              {utilityLinks[category]?.map((link) => (
                <Link href={link.href} key={link.href}>
                  <strong>{link.title}</strong>
                  <span>{link.description}</span>
                  <b>Open guide <span aria-hidden="true">&gt;</span></b>
                </Link>
              ))}
            </section>
          ) : null}

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
