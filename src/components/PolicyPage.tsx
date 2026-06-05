import { DirectAnswer, JsonLd, LastUpdated, SiteFooter, SiteHeader, SourceBox } from "@/components/guide";

export function PolicyPage({
  title,
  description,
  points,
  path,
}: {
  title: string;
  description: string;
  points: string[];
  path: string;
}) {
  return (
    <main className="guide-page">
      <SiteHeader />
      <article className="guide-article policy-page">
        <header className="guide-hero">
          <p className="eyebrow">Trust policy</p>
          <h1>{title}</h1>
          <p>{description}</p>
          <LastUpdated />
        </header>
        <DirectAnswer>
          <p>{description}</p>
        </DirectAnswer>
        <section className="guide-content-section">
          <h2>Policy notes</h2>
          <ul>
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>
        <SourceBox />
      </article>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: title,
          description,
          dateModified: "2026-06-05",
          mainEntityOfPage: `https://smokiesinsiderguide.com${path}`,
        }}
      />
      <SiteFooter />
    </main>
  );
}
