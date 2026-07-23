import Link from "next/link";
import { siteUrl } from "@/lib/seoSchema";

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
  { label: "First Trip", href: "/first-time-smokies" },
  { label: "Gatlinburg", href: "/gatlinburg" },
  { label: "Pigeon Forge", href: "/pigeon-forge" },
  { label: "Cades Cove", href: "/cades-cove" },
  { label: "Where to Stay", href: "/where-to-stay" },
  { label: "Parking", href: "/smokies-parking-trolley-guide" },
];

export function SiteHeader() {
  return null;
}

export function SiteFooter() {
  return null;
}

export function LastUpdated({ date = "June 2026" }: { date?: string }) {
  return <p className="guide-updated">Reviewed: {date}</p>;
}

export function SourceBox({
  text = "Road status, weather, prices, hours and closures can change. Verify time-sensitive details with the official source before you leave.",
  sources = [],
}: {
  text?: string;
  sources?: LinkItem[];
}) {
  return (
    <aside className="guide-source" aria-label="Source and verification note">
      <p className="section-label">Final fact check</p>
      <h2>Verify what can change.</h2>
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

export function DirectAnswer({ title = "Direct answer", children }: { title?: string; children: React.ReactNode }) {
  return (
    <section className="guide-answer" aria-labelledby="direct-answer-title">
      <p className="section-label">{title}</p>
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
      <b>Read next &rarr;</b>
    </Link>
  );
}

export function BestForSkipIf({ bestFor, skipIf }: { bestFor: string[]; skipIf: string[] }) {
  return (
    <section className="guide-fit" aria-label="Best for and skip if">
      <div>
        <p className="section-label">Good fit</p>
        <h2>Best for</h2>
        <ul>{bestFor.map((item) => <li key={item}>{item}</li>)}</ul>
      </div>
      <div>
        <p className="section-label">Be honest</p>
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

export function InternalLinkGrid({ links, title = "Read next" }: { links: LinkItem[]; title?: string }) {
  const id = `${title.replace(/\s+/g, "-").toLowerCase()}-links`;
  return (
    <section className="guide-next" aria-labelledby={id}>
      <p className="section-label">Keep the trip realistic</p>
      <h2 id={id}>{title}</h2>
      <div>
        {links.map((link) => (
          <Link href={link.href} key={link.href}>
            <strong>{link.title}</strong>
            {link.description ? <span>{link.description}</span> : null}
            <b aria-hidden="true">&rarr;</b>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function GuidePage({ page, path }: { page: GuidePageData; path: string }) {
  return (
    <main className="guide-rebuild">
      <GuideJsonLd data={page} path={path} />

      <header className="guide-rebuild-hero">
        <div>
          <p className="section-label">Smoky Insider field guide</p>
          <h1>{page.title}</h1>
          <p>{page.description}</p>
        </div>
      </header>

      <article className="guide-rebuild-article">
        <section className="guide-answer">
          <p className="section-label">The answer first</p>
          <h2>What matters most</h2>
          <p>{page.directAnswer}</p>
        </section>

        {page.bestFor?.length || page.skipIf?.length ? (
          <BestForSkipIf bestFor={page.bestFor ?? []} skipIf={page.skipIf ?? []} />
        ) : null}

        {page.sections.length ? (
          <div className="guide-rebuild-sections">
            {page.sections.map((section, index) => (
              <section key={section.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h2>{section.title}</h2>
                  <p>{section.body}</p>
                </div>
              </section>
            ))}
          </div>
        ) : null}

        {page.links.length ? <InternalLinkGrid links={page.links} title="Read next" /> : null}
        <SourceBox sources={page.sources ?? []} />
        <LastUpdated date={page.reviewedOn} />
      </article>
    </main>
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
    publisher: { "@type": "Organization", name: "Smoky Insider", url: siteUrl },
  };
  return <JsonLd data={schema} />;
}
