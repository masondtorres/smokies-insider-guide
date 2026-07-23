import type { Metadata } from "next";
import Link from "next/link";
import styles from "./about.module.css";

const gatlinburgPhoto =
  "https://commons.wikimedia.org/wiki/Special:Redirect/file/Gatlinburg_-_panoramio.jpg?width=1400";
const cadesCovePhoto =
  "https://commons.wikimedia.org/wiki/Special:Redirect/file/Cades_Cove.jpg?width=1400";

export const metadata: Metadata = {
  title: "About Smoky Insider",
  description:
    "Meet the editor behind Smoky Insider and see how local knowledge, official sources, field notes and clear verification labels shape every Smokies guide.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Smoky Insider",
    description:
      "An independent East Tennessee guide built to turn scattered Smokies information into practical trip decisions.",
    url: "https://www.smokyinsider.com/about",
    images: [
      {
        url: gatlinburgPhoto,
        width: 1400,
        height: 900,
        alt: "View across Gatlinburg, Tennessee",
      },
    ],
  },
};

const evidenceLabels = [
  {
    title: "Direct local knowledge",
    text: "Used for practical judgment shaped by living in East Tennessee and regularly navigating the Smokies gateway communities.",
  },
  {
    title: "Officially confirmed",
    text: "Used for changing facts checked against government, municipal, park or first-party sources.",
  },
  {
    title: "Research-based guidance",
    text: "Used when a recommendation is built from responsible sources rather than a recent personal observation.",
  },
  {
    title: "Recheck before travel",
    text: "Used when weather, roads, hours, prices, parking or availability can change after publication.",
  },
];

export default function AboutPage() {
  return (
    <main className={`destination-page ${styles.page}`}>
      <section className={`destination-hero ${styles.hero}`}>
        <div className={styles.heroCopy}>
          <p className="eyebrow">About Smoky Insider</p>
          <h1>Local judgment. Verified facts. No fake certainty.</h1>
          <p>
            Smoky Insider is an independent East Tennessee planning guide for
            Gatlinburg, Pigeon Forge, Sevierville, Townsend and Great Smoky
            Mountains National Park.
          </p>
          <p>
            The goal is simple: turn scattered information into a day that can
            actually work for a real family.
          </p>
        </div>
      </section>

      <section className={styles.photoStory} aria-label="Smokies photo overview">
        <figure className={styles.photoLarge}>
          {/* Wikimedia Commons image. Attribution is shown in the caption. */}
          <img
            alt="View across Gatlinburg, Tennessee"
            decoding="async"
            loading="eager"
            src={gatlinburgPhoto}
          />
          <figcaption>
            Gatlinburg, Tennessee. Photo by Evan Nichols, licensed CC BY 3.0 via{" "}
            <a href="https://commons.wikimedia.org/wiki/File:Gatlinburg_-_panoramio.jpg">
              Wikimedia Commons
            </a>.
          </figcaption>
        </figure>

        <div className={styles.photoNarrative}>
          <p className="eyebrow">Why this guide exists</p>
          <h2>The hard part is not finding choices. It is knowing what fits together.</h2>
          <p>
            A place can be worth visiting and still be the wrong stop for a crowded
            afternoon, a tired toddler, a limited-walking group or a day already
            damaged by traffic. Smoky Insider focuses on those trade-offs.
          </p>
          <p>
            It does not claim live parking, guaranteed wait times or perfect
            conditions. It tells readers what is known, what is judgment and what
            must be checked again.
          </p>
        </div>
      </section>

      <section className={`destination-section ${styles.founder}`}>
        <div>
          <p className="eyebrow">Founder and editor</p>
          <h2>Mason Torres</h2>
          <p>
            Mason Torres lives in East Tennessee and created Smoky Insider to make
            regional trip planning clearer, more practical and less dependent on
            promotional hype.
          </p>
          <p>
            He oversees editorial standards, source checks and corrections. Some
            guidance comes from direct local knowledge. Other guidance is
            research-based and checked against official or first-party sources.
            The site labels the difference.
          </p>
        </div>

        <aside className={styles.promise}>
          <strong>The editorial promise</strong>
          <p>
            Paid visibility does not buy a positive review, a ranking or an
            unsupported factual claim.
          </p>
          <Link href="/editorial-policy">Read the editorial policy</Link>
        </aside>
      </section>

      <section className={`destination-section ${styles.evidenceSection}`}>
        <div className="destination-heading">
          <p className="eyebrow">How information is labeled</p>
          <h2>Readers should know what kind of evidence they are seeing.</h2>
        </div>
        <div className={styles.evidenceGrid}>
          {evidenceLabels.map((label) => (
            <article key={label.title}>
              <span aria-hidden="true">✓</span>
              <h3>{label.title}</h3>
              <p>{label.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.landscapeStory}>
        <figure>
          <img
            alt="Historic landscape in Cades Cove"
            decoding="async"
            loading="lazy"
            src={cadesCovePhoto}
          />
          <figcaption>
            Cades Cove in Great Smoky Mountains National Park. Public-domain photo by
            Hatmatbbat10 via{" "}
            <a href="https://commons.wikimedia.org/wiki/File:Cades_Cove.jpg">
              Wikimedia Commons
            </a>.
          </figcaption>
        </figure>
        <div>
          <p className="eyebrow">What the site will not pretend</p>
          <h2>Useful guidance has limits.</h2>
          <ul>
            <li>Smoky Insider is not affiliated with the National Park Service or a tourism board.</li>
            <li>The site does not claim real-time traffic, parking occupancy or attraction wait times.</li>
            <li>Changing details are linked to official sources and marked for rechecking.</li>
            <li>Recommendations can change when access, quality, ownership or conditions change.</li>
          </ul>
        </div>
      </section>

      <section className={`destination-section next-step-panel ${styles.nextSteps}`}>
        <div className="destination-heading">
          <p className="eyebrow">Start with something useful</p>
          <h2>Use the strongest completed planning tools first.</h2>
          <p>
            The parking cluster is currently the deepest part of the site. It gives
            named choices, addresses, official sources, backup strategies and a
            printable summary.
          </p>
        </div>
        <div className="destination-actions">
          <Link className="button button-primary" href="/smokies-parking-trolley-guide">
            Open the parking guide
          </Link>
          <Link className="button button-secondary" href="/parking-timing-cheat-sheet">
            Print the timing cheat sheet
          </Link>
          <Link className="button button-secondary" href="/source-and-verification-policy">
            See the source policy
          </Link>
        </div>
      </section>
    </main>
  );
}
