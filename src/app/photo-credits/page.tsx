import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photo Credits",
  description:
    "Photography sources, creators and licenses for images used by Smoky Insider.",
  alternates: { canonical: "/photo-credits" },
};

const credits = [
  {
    use: "Gatlinburg photography on the About page",
    creator: "Evan Nichols",
    license: "Creative Commons Attribution 3.0",
    source: "https://commons.wikimedia.org/wiki/File:Gatlinburg_-_panoramio.jpg",
  },
  {
    use: "Cades Cove photography on the About page",
    creator: "Hatmatbbat10",
    license: "Public domain",
    source: "https://commons.wikimedia.org/wiki/File:Cades_Cove.jpg",
  },
  {
    use: "Layered Smoky Mountains image used in social sharing and site visuals",
    creator: "National Park Service source record on Wikimedia Commons",
    license: "See the Wikimedia Commons file record for the current rights statement",
    source:
      "https://commons.wikimedia.org/wiki/File:Great_Smoky_Mountains_National_Park_GRSM8831.jpg",
  },
  {
    use: "Smoky Mountains image used in the site masthead and shared visual treatment",
    creator: "National Park Service source record on Wikimedia Commons",
    license: "See the Wikimedia Commons file record for the current rights statement",
    source:
      "https://commons.wikimedia.org/wiki/File:Great_Smoky_Mountains_National_Park_GRSM3447.jpg",
  },
];

export default function PhotoCreditsPage() {
  return (
    <main className="policy-page">
      <header className="page-hero">
        <p className="eyebrow">Transparency</p>
        <h1>Photo credits</h1>
        <p>
          Smoky Insider uses credited, licensed or public-domain photography. This
          page records the visible sources used in the current design.
        </p>
      </header>

      <section className="content-section">
        <h2>Current photography records</h2>
        <div className="destination-grid">
          {credits.map((credit) => (
            <article className="destination-card" key={credit.source}>
              <h3>{credit.use}</h3>
              <p>
                <strong>Creator:</strong> {credit.creator}
              </p>
              <p>
                <strong>License:</strong> {credit.license}
              </p>
              <p>
                <a href={credit.source}>Open the original source and license record</a>
              </p>
            </article>
          ))}
        </div>
      </section>

      <aside className="source-box">
        <h2>Corrections</h2>
        <p>
          Rights records can change or be clarified. Report an attribution or
          licensing issue through the corrections page and include the image URL.
        </p>
        <p>
          <a href="/corrections">Report a photo-credit correction</a>
        </p>
      </aside>
    </main>
  );
}
