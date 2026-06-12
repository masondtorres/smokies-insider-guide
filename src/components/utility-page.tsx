import Link from "next/link";
import { SaveButton } from "@/components/save-button";

type UtilitySection = {
  title: string;
  body: string;
};

type UtilityLink = {
  href: string;
  label: string;
  description: string;
};

type OfficialSource = {
  href: string;
  label: string;
};

export type UtilityPageData = {
  category: "Go" | "Do" | "See";
  categoryHref: "/go" | "/do" | "/see";
  title: string;
  description: string;
  purpose: string;
  helps: string[];
  sections: UtilitySection[];
  family: string;
  accessibility: string;
  saveId: string;
  saveTitle: string;
  links: UtilityLink[];
  sources: OfficialSource[];
};

const navigation = [
  ["Go", "/go"],
  ["Do", "/do"],
  ["See", "/see"],
  ["Eat", "/eat"],
  ["Stay", "/stay"],
  ["Deals", "/deals"],
  ["My Plan", "/my-plan"],
];

export function UtilityPage({ page }: { page: UtilityPageData }) {
  return (
    <div className="utility-foundation">
      <header className="utility-header">
        <Link className="utility-wordmark" href="/">Smokies Insider</Link>
        <nav className="utility-nav" aria-label="Primary navigation">
          {navigation.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
        </nav>
      </header>

      <main>
        <section className="utility-hero">
          <div className="utility-ridge utility-ridge-back" aria-hidden="true" />
          <div className="utility-ridge utility-ridge-front" aria-hidden="true" />
          <div className="utility-width utility-hero-inner">
            <div>
              <p className="utility-eyebrow">Smokies field guide / {page.category}</p>
              <h1>{page.title}</h1>
              <p>{page.description}</p>
            </div>
            <aside className="utility-purpose">
              <strong>Page purpose</strong>
              <p>{page.purpose}</p>
            </aside>
          </div>
        </section>

        <div className="utility-width utility-layout">
          <article className="utility-main">
            <section className="utility-helps" aria-labelledby="utility-helps-title">
              <p className="utility-eyebrow">Who this helps</p>
              <h2 id="utility-helps-title">Use this page when...</h2>
              <ul>{page.helps.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>

            <div className="utility-section-list">
              {page.sections.map((section, index) => (
                <section className="utility-section" key={section.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h2>{section.title}</h2>
                    <p>{section.body}</p>
                  </div>
                </section>
              ))}
            </div>

            <section className="utility-fit-grid" aria-label="Family and accessibility notes">
              <div>
                <p className="utility-eyebrow">Family fit</p>
                <h2>For mixed-age groups</h2>
                <p>{page.family}</p>
              </div>
              <div>
                <p className="utility-eyebrow">Accessibility</p>
                <h2>Plan the physical load</h2>
                <p>{page.accessibility}</p>
              </div>
            </section>

            <section className="utility-links" aria-labelledby="utility-links-title">
              <p className="utility-eyebrow">Nearby in the guide</p>
              <h2 id="utility-links-title">Keep planning</h2>
              <div>
                {page.links.map((link) => (
                  <Link href={link.href} key={link.href}>
                    <strong>{link.label}</strong>
                    <span>{link.description}</span>
                  </Link>
                ))}
              </div>
            </section>

            <aside className="utility-sources">
              <strong>Verify before leaving</strong>
              <p>Conditions, access and park operations can change. Recheck the official sources closest to your visit.</p>
              <div>
                {page.sources.map((source) => (
                  <a href={source.href} key={source.href} rel="noreferrer" target="_blank">{source.label}</a>
                ))}
              </div>
            </aside>
          </article>

          <aside className="utility-plan-card">
            <p className="utility-eyebrow">My Plan</p>
            <h2>{page.saveTitle}</h2>
            <p>Save the matching planning pattern, then review it with the rest of your trip.</p>
            <SaveButton id={page.saveId} />
            <Link href="/my-plan">Open My Plan <span aria-hidden="true">&gt;</span></Link>
            <Link href={page.categoryHref}>Back to {page.category}</Link>
          </aside>
        </div>
      </main>

      <footer className="utility-footer">
        <div>
          <strong>Smokies Insider</strong>
          <span>Independent trip-planning field guide.</span>
        </div>
        <nav aria-label="Utility links">
          <Link href="/source-and-verification-policy">Source policy</Link>
          <Link href="/corrections">Corrections</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </footer>
    </div>
  );
}
