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
  { label: "Go", href: "/go" },
  { label: "Do", href: "/do" },
  { label: "See", href: "/see" },
  { label: "Eat", href: "/eat" },
  { label: "Stay", href: "/stay" },
  { label: "Deals", href: "/deals" },
  { label: "My Plan", href: "/my-plan" },
];

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Advertise", href: "/advertise" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
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
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer guide-site-footer">
      <div className="footer-brand-panel">
        <SiteIdentity compact />
        <span>Practical Smoky Mountains trip planning for routes, things to do, views, food, stays and deals.</span>
      </div>
      <nav className="category-footer-links" aria-label="Policy and information links">
        {footerLinks.map((link) => (
          <Link href={link.href} key={link.href}>{link.label}</Link>
        ))}
      </nav>
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

export function GuidePage({ page, path }: { page: GuidePageData; path: string }) {
  return (
    <div className="guide-page">
      <GuideJsonLd data={page} path={path} />
      <SiteHeader />
      <main>
        <section className="page-hero">
          <p className="eyebrow">Smoky Insider guide</p>
          <h1>{page.title}</h1>
          <p>{page.description}</p>
        </section>

        <section className="content-section guide-summary">
          <p className="eyebrow">Start here</p>
          <h2>Quick answer</h2>
          <p>{page.directAnswer}</p>
        </section>

        {page.bestFor?.length || page.skipIf?.length ? (
          <BestForSkipIf bestFor={page.bestFor ?? []} skipIf={page.skipIf ?? []} />
        ) : null}

        {page.sections.length ? (
          <section className="content-section guide-sections">
            {page.sections.map((section) => (
              <article className="info-card" key={section.title}>
                <h2>{section.title}</h2>
                <p>{section.body}</p>
              </article>
            ))}
          </section>
        ) : null}

        {page.links.length ? (
          <section className="content-section guide-next-links">
            <p className="eyebrow">Next step</p>
            <h2>Keep planning</h2>
            <div className="link-grid">
              {page.links.map((link) => (
                <Link href={link.href} key={link.href}>
                  <strong>{link.title}</strong>
                  {link.description ? <span>{link.description}</span> : null}
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        <SourceBox sources={page.sources ?? []} />
        <LastUpdated date={page.reviewedOn} />
      </main>
      <SiteFooter />
    </div>
  );
}

export function GuideJsonLd({ data, path }: { data: GuidePageData; path: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": data.schemaType ?? "Article",
    name: data.title,
    headline: data.title,
    description: data.description,
    url: `${siteUrl}${path}`,
    dateModified: data.reviewedOnIso ?? "2026-06-01",
    publisher: {
      "@type": "Organization",
      name: "Smoky Insider",
      url: siteUrl,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
