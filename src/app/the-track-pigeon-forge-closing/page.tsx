import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Track in Pigeon Forge Is Closing November 1, 2026",
  description:
    "A practical family guide to The Track in Pigeon Forge closing, who should visit before November 1, 2026 and what to do nearby.",
};

const bestFor = [
  {
    title: "Families with a Track tradition",
    text: "Go before the closure if The Track has been part of past Pigeon Forge trips and your family wants one more visit.",
  },
  {
    title: "Mixed-age family groups",
    text: "The Track has been useful for groups that want several activity choices without building the whole day around one large attraction.",
  },
  {
    title: "Kids ready for a final lap",
    text: "A final-season visit makes the most sense when the children in your group already know what they want to do there.",
  },
];

const nearbyOptions = [
  {
    title: "The Island in Pigeon Forge",
    fit: "An easy add-on when the family wants food, browsing and more activity choices in one area.",
    planAround: "Crowds, parking and the temptation to turn a short stop into a long evening.",
    href: "https://islandinpigeonforge.com/",
  },
  {
    title: "WonderWorks",
    fit: "An indoor option for families that want a weather backup or a separate hands-on stop.",
    planAround: "Checking current tickets, hours and attraction details on the official site.",
    href: "https://www.wonderworksonline.com/pigeon-forge/",
  },
  {
    title: "Parrot Mountain",
    fit: "A slower-paced add-on for families that want a break from the Parkway attraction pattern.",
    planAround: "Weather, walking and checking current operating details before going.",
    href: "https://www.parrotmountainandgardens.com/",
  },
  {
    title: "Dollywood",
    fit: "A full-day anchor for families already planning to make the park the main event.",
    planAround: "Do not treat Dollywood as a quick add-on after a packed Parkway day.",
    href: "https://www.dollywood.com/",
  },
  {
    title: "Pigeon Forge Parkway attractions",
    fit: "A flexible choice when the family wants to compare go-karts, mini golf, arcades or other stops nearby.",
    planAround: "Check each venue's current rules and details. Pick one strong fit instead of stacking several paid stops.",
    href: "/pigeon-forge-with-kids",
  },
];

const trafficMoves = [
  "Choose The Track as the main stop for that part of the day, then add only one nearby option.",
  "Keep stops on the same stretch of town when possible instead of repeatedly crossing Pigeon Forge.",
  "Allow extra drive time during busy weekends and popular travel periods.",
  "Have a food plan before the group gets hungry and starts making decisions from traffic.",
  "Check official attraction details before leaving your lodging.",
];

const avoidList = [
  "Waiting until the final weeks if the visit matters to your family.",
  "Promising a specific ride or activity without checking current operations first.",
  "Stacking The Track, Dollywood and several Parkway attractions into one day.",
  "Buying tickets elsewhere just because traffic makes a stop look convenient.",
  "Treating a closure-season visit like a reason to rush the family.",
];

export default function TrackClosingGuidePage() {
  return (
    <main className="destination-page article-guide-page">
      <header className="destination-header">
        <Link className="wordmark" href="/">
          Smokies Insider Guide
        </Link>
        <Link className="back-link" href="/pigeon-forge">
          Pigeon Forge Guide
        </Link>
      </header>

      <section className="destination-hero article-guide-hero">
        <div className="page-identity page-identity-strong">
          <p className="eyebrow">Pigeon Forge visitor update</p>
          <p className="page-breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>The Track closing guide</span>
          </p>
        </div>
        <h1>The Track in Pigeon Forge Is Closing November 1, 2026</h1>
        <p>
          The Pigeon Forge location is in its final season. Here is who should
          make time for one more visit, why the closure matters to families and
          how to build a practical day nearby.
        </p>
        <div className="destination-actions">
          <a className="button button-primary" href="#plan-the-visit">
            Plan the visit
          </a>
          <Link className="button button-secondary" href="/pigeon-forge-with-kids">
            Pigeon Forge with kids
          </Link>
        </div>
      </section>

      <section className="destination-section quick-answer-panel" id="plan-the-visit">
        <div className="destination-heading">
          <p className="eyebrow">Quick answer</p>
          <h2>The Track is open for a final season, then closes November 1, 2026</h2>
        </div>
        <div className="destination-grid destination-grid-compact">
          <article className="destination-card">
            <h3>Who should go before it closes</h3>
            <p>
              Prioritize a visit if The Track is part of your family&apos;s Pigeon
              Forge tradition, if your kids specifically want to go or if a
              flexible family-fun stop fits the trip better than another
              full-day attraction.
            </p>
          </article>
          <article className="destination-card">
            <h3>Who can skip it</h3>
            <p>
              Skip the final-season stop if it would overload the day, pull the
              family across town in heavy traffic or replace an activity your
              group cares about more.
            </p>
          </article>
        </div>
      </section>

      <section className="destination-section article-copy-section">
        <div className="destination-heading">
          <p className="eyebrow">Why the closure matters</p>
          <h2>A familiar kind of Pigeon Forge family stop is going away</h2>
        </div>
        <div className="article-copy">
          <p>
            The Track opened its Pigeon Forge location in 1984 and became a
            recognizable Parkway stop for family trips. Its appeal was not only
            one ride. Families could arrive with different ages and interests,
            choose how long to stay and build the stop around the group.
          </p>
          <p>
            That flexibility matters in Pigeon Forge. Large attractions can
            take most of a day, while smaller ticketed stops can add up quickly.
            The Track gave many families a middle option: a place that could be
            the main evening plan or a shorter stop between other parts of the
            trip.
          </p>
          <p>
            The closure will matter most to repeat visitors. Parents who went
            there as children may be deciding whether to bring their own kids
            back before the final day. If that is your family, make the visit
            deliberate, but keep the rest of the day light.
          </p>
        </div>
      </section>

      <section className="destination-section guide-card-section">
        <div className="destination-heading">
          <p className="eyebrow">Good fit check</p>
          <h2>What kind of families should plan a final visit?</h2>
        </div>
        <div className="destination-grid">
          {bestFor.map((item) => (
            <article className="destination-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="destination-section field-notes-section">
        <div className="destination-heading">
          <p className="eyebrow">Traffic and crowd plan</p>
          <h2>Keep the final-season visit simple</h2>
        </div>
        <div className="destination-grid destination-grid-compact">
          <article className="destination-card">
            <h3>Practical moves</h3>
            <ul className="area-list">
              {trafficMoves.map((move) => (
                <li key={move}>{move}</li>
              ))}
            </ul>
          </article>
          <article className="destination-card">
            <h3>Local planning rule</h3>
            <p>
              Parkway traffic can turn a short list into a long day. Choose the
              visit, one nearby add-on and a food plan. Leave room to change
              course if traffic or family energy does not cooperate.
            </p>
          </article>
        </div>
      </section>

      <section className="destination-section comparison-section">
        <div className="destination-heading">
          <p className="eyebrow">Nearby family options</p>
          <h2>Five alternatives or add-ons near Pigeon Forge</h2>
          <p className="router-section-intro">
            These are different kinds of family stops, not direct replacements.
            Choose the one that fits the day your group actually has.
          </p>
        </div>
        <div className="destination-grid">
          {nearbyOptions.map((option) => {
            const content = (
              <>
                <h3>{option.title}</h3>
                <p className="router-detail">
                  <strong>Good fit</strong>
                  {option.fit}
                </p>
                <p className="router-detail">
                  <strong>Plan around</strong>
                  {option.planAround}
                </p>
                <p className="router-detail router-next">
                  <strong>Next</strong>
                  Check the guide or official site
                </p>
              </>
            );

            return option.href.startsWith("/") ? (
              <Link className="destination-card router-card" href={option.href} key={option.title}>
                {content}
              </Link>
            ) : (
              <a className="destination-card router-card" href={option.href} key={option.title}>
                {content}
              </a>
            );
          })}
        </div>
      </section>

      <section className="destination-section warning-section">
        <div className="destination-heading">
          <p className="eyebrow">Protect the day</p>
          <h2>What to avoid during the final season</h2>
        </div>
        <div className="destination-grid destination-grid-compact">
          <article className="destination-card">
            <h3>Avoid</h3>
            <ul className="area-list">
              {avoidList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="destination-card">
            <h3>Better move</h3>
            <p>
              Decide whether the final visit matters before the trip. If it
              does, give it a clear place in the plan and avoid filling every
              hour around it.
            </p>
          </article>
        </div>
      </section>

      <section className="destination-section next-step-panel article-planning-cta">
        <div className="destination-heading">
          <p className="eyebrow">Build the rest of the trip</p>
          <h2>Planning a Smokies trip? Start with the Smokies planning guide.</h2>
        </div>
        <div className="destination-actions">
          <Link className="button button-primary" href="/start-planning">
            Start planning
          </Link>
        </div>
      </section>

      <section className="business-cta planning-desk-cta" aria-labelledby="track-business-title">
        <div>
          <p className="eyebrow">For local businesses</p>
          <h2 id="track-business-title">
            Own a Smokies business? Get in front of families while they are
            choosing what to do.
          </h2>
        </div>
        <div className="business-actions">
          <Link className="button button-primary" href="/advertise">
            Advertise with us
          </Link>
        </div>
      </section>

      <aside className="destination-section source-note" aria-labelledby="track-source-note">
        <p className="eyebrow">Official source note</p>
        <h2 id="track-source-note">Check current details before the visit</h2>
        <p>
          The Track&apos;s official final-lap announcement says the Pigeon Forge
          location closes November 1, 2026. Attraction operations and details
          can change before then, so check the official source before finalizing
          the day.
        </p>
        <div className="source-links">
          <a href="https://funatthetrack.com/pages/pigeon-forge-final-lap">
            The Track official final-lap announcement
          </a>
          <Link href="/pigeon-forge">Pigeon Forge Guide</Link>
          <Link href="/pigeon-forge-with-kids">Pigeon Forge With Kids</Link>
        </div>
      </aside>
    </main>
  );
}
