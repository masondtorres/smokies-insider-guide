import Link from "next/link";
import { siteUrl } from "@/lib/seoSchema";
import { SiteIdentity } from "@/components/site-mark";

export type LinkItem = {
  title: string;
  href: string;
  description?: string;
};

export type TimelineItem = {
  label: string;
  text: string;
};

export type SectionItem = {
  title: string;
  body: string;
};

export type GuidePageData = {
  title: string;
  description: string;
  directAnswer: string;
  sections: SectionItem[];
  links: LinkItem[];
  bestFor?: string[];
  skipIf?: string[];
  schemaType?: "Article" | "WebPage" | "ItemList";
  reviewedOn?: string;
  reviewedOnIso?: string;
  sources?: LinkItem[];
};

export const primaryNav = [
  { label: "Things To Do", href: "/things-to-do" },
  { label: "Places To Eat", href: "/restaurants" },
  { label: "Where To Stay", href: "/where-to-stay" },
  { label: "Scenic Drives", href: "/scenic-drives" },
  { label: "Deals", href: "/deals" },
  { label: "Guides", href: "/visitor-resources" },
  { label: "Directory", href: "/business-listings" },
];

const footerGroups = [
  {
    title: "Explore",
    links: [
      { label: "Things To Do", href: "/things-to-do" },
      { label: "Places To Eat", href: "/restaurants" },
      { label: "Where To Stay", href: "/where-to-stay" },
      { label: "Scenic Drives", href: "/scenic-drives" },
      { label: "Deals", href: "/deals" },
    ],
  },
  {
    title: "Plan",
    links: [
      { label: "Start Planning", href: "/start-planning" },
      { label: "Visitor Resources", href: "/visitor-resources" },
      { label: "Parking & Trolley Guide", href: "/smokies-parking-trolley-guide" },
      { label: "How Many Days?", href: "/how-many-days" },
      { label: "My Plan", href: "/my-plan" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Business Listings", href: "/business-listings" },
      { label: "Claim a Business", href: "/business-listings/claim" },
      { label: "Advertise", href: "/advertise" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Editorial Policy", href: "/editorial-policy" },
      { label: "Sponsored Content Policy", href: "/sponsored-content-policy" },
      { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
      { label: "Corrections", href: "/corrections" },
      { label: "Disclaimer", href: "/disclaimer" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Source & Verification", href: "/source-and-verification-policy" },
    ],
  },
];

export function SiteHeader() {
  return (
    <header className="site-header guide-site-header">
      <div className="brand-lockup">
        <Link className="brand-mark" href="/" aria-label="Smoky Insider home">
          <SiteIdentity />
        </Link>
      </div>
      <nav className="primary-nav" aria-label="Primary navigation">
        {primaryNav.map((link) => (
          <Link href={link.href} key={link.href}>
            {link.label}
          </Link>
        ))}
        <Link className="nav-cta" href="/start-planning">
          Plan My Smokies Trip
        </Link>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer guide-site-footer">
      <div className="footer-brand-panel">
        <SiteIdentity compact />
        <span>Decision-first planning help for choosing the right town, route, restaurant, deal and day shape.</span>
      </div>
      <div className="footer-link-groups">
        {footerGroups.map((group) => (
          <nav aria-label={group.title} key={group.title}>
            <h2>{group.title}</h2>
            {group.links.map((link) => (
              <Link href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        ))}
      </div>
    </footer>
  );
}

export function LastUpdated({ date = "June 2026" }: { date?: string }) {
  return <p className="last-updated">Last updated: {date}</p>;
}

export function SourceBox({
  text = "Source note: Park rules, road status, hours, prices and closures can change. Verify time-sensitive details with the official source before you go.",
  sources = [],
}: {
  text?: string;
  sources?: LinkItem[];
}) {
  return (
    <aside className="source-box" aria-label="Source and verification note">
      <strong>Source and verification</strong>
      <p>{text}</p>
      {sources.length ? (
        <ul>
          {sources.map((source) => (
            <li key={source.href}>
              <a href={source.href}>{source.title}</a>
            </li>
          ))}
        </ul>
      ) : null}
    </aside>
  );
}

export function DirectAnswer({
  title = "Direct answer",
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="direct-answer" aria-labelledby="direct-answer-title">
      <p className="eyebrow">{title}</p>
      <div id="direct-answer-title">{children}</div>
    </section>
  );
}

export function DecisionCard({
  title,
  description,
  href,
  bestFor,
  skipIf,
  meta,
}: {
  title: string;
  description: string;
  href: string;
  bestFor?: string;
  skipIf?: string;
  meta?: string;
}) {
  return (
    <Link className="decision-card" href={href}>
      {meta ? <span className="decision-meta">{meta}</span> : null}
      <h3>{title}</h3>
      <p>{description}</p>
      {bestFor ? <p><strong>Best for:</strong> {bestFor}</p> : null}
      {skipIf ? <p><strong>Skip if:</strong> {skipIf}</p> : null}
      <b>Read next</b>
    </Link>
  );
}

export function BestForSkipIf({
  bestFor,
  skipIf,
}: {
  bestFor: string[];
  skipIf: string[];
}) {
  return (
    <section className="best-skip-grid" aria-label="Best for and skip if">
      <div>
        <h2>Best for</h2>
        <ul>{bestFor.map((item) => <li key={item}>{item}</li>)}</ul>
      </div>
      <div>
        <h2>Skip if</h2>
        <ul>{skipIf.map((item) => <li key={item}>{item}</li>)}</ul>
      </div>
    </section>
  );
}

export function LocalNote({
  variant = "local",
  title,
  children,
}: {
  variant?: "local" | "watch" | "betterMove" | "verify" | "warning";
  title: string;
  children: React.ReactNode;
}) {
  return (
    <aside className={`local-note local-note-${variant}`}>
      <strong>{title}</strong>
      <div>{children}</div>
    </aside>
  );
}

export function ItineraryTimeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="itinerary-timeline">
      {items.map((item) => (
        <li key={item.label}>
          <span>{item.label}</span>
          <p>{item.text}</p>
        </li>
      ))}
    </ol>
  );
}

export function PlannerQuestion({
  title,
  options,
  value,
  onChange,
}: {
  title: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <fieldset className="planner-question">
      <legend>{title}</legend>
      <div>
        {options.map((option) => (
          <button
            className={value === option ? "active" : ""}
            key={option}
            onClick={() => onChange(option)}
            type="button"
          >
            {option}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

export function PlannerResult({
  title,
  base,
  firstStop,
  mainPlan,
  freeAlternative,
  paidOption,
  foodPairing,
  parkingWarning,
  crowdWarning,
  rainBackup,
  skip,
  links,
}: {
  title: string;
  base: string;
  firstStop: string;
  mainPlan: TimelineItem[];
  freeAlternative: string;
  paidOption: string;
  foodPairing: string;
  parkingWarning: string;
  crowdWarning: string;
  rainBackup: string;
  skip: string;
  links: LinkItem[];
}) {
  return (
    <section className="planner-result" aria-live="polite">
      <p className="eyebrow">Starter plan</p>
      <h2>{title}</h2>
      <dl className="result-facts">
        <div><dt>Recommended base</dt><dd>{base}</dd></div>
        <div><dt>First stop</dt><dd>{firstStop}</dd></div>
        <div><dt>Free or cheaper alternative</dt><dd>{freeAlternative}</dd></div>
        <div><dt>Paid option category</dt><dd>{paidOption}</dd></div>
        <div><dt>Food pairing</dt><dd>{foodPairing}</dd></div>
        <div><dt>Parking warning</dt><dd>{parkingWarning}</dd></div>
        <div><dt>Crowd warning</dt><dd>{crowdWarning}</dd></div>
        <div><dt>Rain backup</dt><dd>{rainBackup}</dd></div>
        <div><dt>What to skip</dt><dd>{skip}</dd></div>
      </dl>
      <ItineraryTimeline items={mainPlan} />
      <div className="planner-actions">
        <button type="button" onClick={() => window.print()}>Print this plan</button>
      </div>
      <InternalLinkGrid links={links} title="Read next" />
    </section>
  );
}

export function InternalLinkGrid({
  links,
  title = "Read next",
}: {
  links: LinkItem[];
  title?: string;
}) {
  return (
    <section className="internal-link-grid" aria-labelledby={`${title.replace(/\s+/g, "-").toLowerCase()}-links`}>
      <h2 id={`${title.replace(/\s+/g, "-").toLowerCase()}-links`}>{title}</h2>
      <div>
        {links.map((link) => (
          <Link href={link.href} key={link.href}>
            <strong>{link.title}</strong>
            {link.description ? <span>{link.description}</span> : null}
          </Link>
        ))}
      </div>
    </section>
  );
}

export function SponsoredLabel({ text = "Sponsored / Local Partner" }: { text?: string }) {
  return <span className="sponsored-label">{text}</span>;
}

export function BusinessCard({
  name,
  category,
  area,
  bestFor = "Unknown until verified.",
  status = "Unknown",
  href,
}: {
  name: string;
  category: string;
  area: string;
  bestFor?: string;
  status?: string;
  href: string;
}) {
  return (
    <Link className="business-card" href={href}>
      <SponsoredLabel text={status} />
      <h3>{name}</h3>
      <p>{category} in {area}</p>
      <p><strong>Best for:</strong> {bestFor}</p>
    </Link>
  );
}

export function DealCard({
  offer,
  expiration,
  terms,
  status,
  bestFor,
}: {
  offer: string;
  expiration: string;
  terms: string;
  status: string;
  bestFor: string;
}) {
  return (
    <article className="deal-card">
      <SponsoredLabel text={status} />
      <h3>{offer}</h3>
      <p><strong>Best for:</strong> {bestFor}</p>
      <p><strong>Expiration:</strong> {expiration}</p>
      <p><strong>Terms:</strong> {terms}</p>
    </article>
  );
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function guideSchema(page: GuidePageData, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": page.schemaType ?? "Article",
    headline: page.title,
    description: page.description,
    dateModified: page.reviewedOnIso,
    inLanguage: "en-US",
    mainEntityOfPage: `${siteUrl}${path}`,
  };
}

export function GuidePage({ page, path }: { page: GuidePageData; path: string }) {
  const primarySections = page.sections.slice(0, 3);
  const routeSections = page.sections.slice(3, -2);
  const closingSections = page.sections.slice(-2);

  return (
    <main className="guide-page">
      <SiteHeader />
      <article className="guide-article">
        <header className="guide-hero">
          <p className="eyebrow">Smokies field guide</p>
          <h1>{page.title}</h1>
          <p>{page.description}</p>
          {page.reviewedOn ? <LastUpdated date={page.reviewedOn} /> : null}
        </header>
        <DirectAnswer>
          <p>{page.directAnswer}</p>
        </DirectAnswer>
        {page.bestFor && page.skipIf ? (
          <BestForSkipIf bestFor={page.bestFor} skipIf={page.skipIf} />
        ) : null}
        <section className="guide-route-board" aria-label="Planning route board">
          <div className="route-board-title">
            <p className="eyebrow">Route board</p>
            <h2>Start here, then protect the day.</h2>
          </div>
          <div className="route-priority-strip">
            {primarySections.map((section, index) => (
              <section className="route-priority-panel" key={section.title}>
                <span>0{index + 1}</span>
                <h3>{section.title}</h3>
                <p>{section.body}</p>
              </section>
            ))}
          </div>
          {routeSections.length ? (
            <div className="route-row-list">
              {routeSections.map((section) => (
                <section className="route-row" key={section.title}>
                  <h3>{section.title}</h3>
                  <p>{section.body}</p>
                </section>
              ))}
            </div>
          ) : null}
        </section>
        {closingSections.length ? (
          <section className="warning-note" aria-label="Planning cautions">
            <p className="eyebrow">Watch for</p>
            {closingSections.map((section) => (
              <div key={section.title}>
                <strong>{section.title}</strong>
                <p>{section.body}</p>
              </div>
            ))}
          </section>
        ) : null}
        <InternalLinkGrid links={page.links} />
        <SourceBox sources={page.sources} />
      </article>
      <JsonLd data={guideSchema(page, path)} />
      <SiteFooter />
    </main>
  );
}
