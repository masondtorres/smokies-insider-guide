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
  ["Contact", "/contact"],
  ["Advertise", "/advertise"],
  ["Affiliate Disclosure", "/affiliate-disclosure"],
  ["Privacy", "/privacy"],
  ["Terms", "/terms"],
  ["Editorial Policy", "/editorial-policy"],
  ["Source & Verification", "/source-and-verification-policy"],
];

const pageHelp: Record<Category, { heading: string; note: string; planAction: string; links: Array<{ href: string; title: string; description: string }> }> = {
  go: {
    heading: "Start with the area",
    note: "Traffic and parking decide more Smokies days than people expect. Pick the area first, then build the day around it.",
    planAction: "Add routes and parking to My Plan",
    links: [{ href: "/go/parking", title: "Parking guide", description: "Know the parking rules before you leave." }],
  },
  do: {
    heading: "Pick one main thing",
    note: "One anchor activity is enough. Add food and a backup nearby instead of stacking the day too tight.",
    planAction: "Add an activity to My Plan",
    links: [
      { href: "/rainy-day", title: "Rainy-day backup", description: "A simple plan when weather changes." },
      { href: "/free-and-cheap-smokies", title: "Free and cheap ideas", description: "Lower-cost ways to keep the day useful." },
    ],
  },
  see: {
    heading: "Match the view to the day",
    note: "Views depend on weather, road access and crowds. Keep scenic stops close to the route you are already using.",
    planAction: "Add a scenic stop to My Plan",
    links: [{ href: "/cades-cove", title: "Cades Cove planner", description: "Use this when the loop is the main event." }],
  },
  eat: {
    heading: "Choose the meal area first",
    note: "Do not cross town hungry. Pick the area and timing first, then choose the restaurant.",
    planAction: "Add a meal area to My Plan",
    links: [{ href: "/eat/family-friendly", title: "Family food plan", description: "Good for groups, kids and backups." }],
  },
  stay: {
    heading: "Choose the base area",
    note: "The best place to stay depends on what you will do most, not just the room or cabin price.",
    planAction: "Add a base area to My Plan",
    links: [{ href: "/stay/cabins", title: "Cabin stay planner", description: "Check access, roads and booking terms." }],
  },
  deals: {
    heading: "Save money without chasing junk",
    note: "Start with a budget. Verify every offer before you build the day around it.",
    planAction: "Add a budget limit to My Plan",
    links: [{ href: "/free-and-cheap-smokies", title: "Free and cheap guide", description: "Build a useful lower-cost day before checking offers." }],
  },
};

export function CategoryPage({ category }: { category: Category }) {
  const info = categoryInfo[category];
  const categoryCards = cardsFor(category);
  const help = pageHelp[category];

  return (
    <div className={`category-foundation category-${category}`}>
      <header className="category-header">
        <Link className="category-wordmark" href="/">Smoky Insider</Link>
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
          <div className="category-width category-hero-inner simple">
            <div className="category-hero-copy">
              <p className="category-eyebrow">Smoky Insider</p>
              <h1>{info.title}</h1>
              <p>{info.intro}</p>
            </div>
          </div>
        </section>

        <section className="category-width category-content" aria-labelledby="category-starters">
          <div className="category-section-heading simple">
            <div>
              <p className="category-eyebrow">Choose one starting point</p>
              <h2 id="category-starters">{help.heading}</h2>
            </div>
            <p>{help.note}</p>
          </div>

          {categoryCards.length > 0 ? (
            <div className="category-card-grid simple">
              {categoryCards.map((card, index) => (
                <GuideCard card={card} index={index + 1} key={card.id} />
              ))}
            </div>
          ) : null}

          {help.links.length ? (
            <section className="category-utility-guides simple" aria-label="Helpful guides">
              <div>
                <p className="category-eyebrow">Helpful guide</p>
                <h2>Use this next</h2>
              </div>
              {help.links.map((link) => (
                <Link href={link.href} key={link.href}>
                  <strong>{link.title}</strong>
                  <span>{link.description}</span>
                  <b>Open guide <span aria-hidden="true">&gt;</span></b>
                </Link>
              ))}
            </section>
          ) : null}

          <aside className="category-trust-note simple">
            <strong>Before you go</strong>
            <p>Recheck hours, road conditions, parking, access and pricing before you leave. Smoky Mountains details change fast.</p>
            <Link href="/my-plan">{help.planAction} <span aria-hidden="true">&gt;</span></Link>
          </aside>
        </section>
      </main>

      <footer className="category-footer">
        <div>
          <strong>Smoky Insider</strong>
          <span>© 2026 Smoky Insider. Veteran-owned, independent Smoky Mountains trip planning.</span>
        </div>
        <nav className="category-footer-links" aria-label="Policy and information links">
          {footerLinks.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
        </nav>
      </footer>
    </div>
  );
}
