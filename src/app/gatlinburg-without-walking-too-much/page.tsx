import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gatlinburg Without Walking Too Much | Easy Planning Guide",
  description:
    "Plan Gatlinburg with less walking using practical advice for parking, trolley checks, downtown zones, River Walk breaks, food timing, low-stamina groups and simple day plans.",
};

const quickPoints = [
  "Pick one main downtown zone",
  "Avoid crossing the strip repeatedly",
  "Choose one anchor attraction or meal",
  "Use nearby food and shops instead of bouncing around",
  "Consider trolley options only after checking current official route details",
  "Use the River Walk as a quieter reset where it fits",
  "Build in sitting time",
  "Skip crowded backtracking",
];

const zones = [
  {
    title: "Downtown Parkway core",
    bestFor: "One main stretch with shops, food and attractions close together.",
    watchFor: "Crowds, hills, crosswalks and repeating the same walk.",
    plan: "Choose one anchor and keep nearby stops close to it.",
  },
  {
    title: "River Walk area",
    bestFor: "A quieter walking break when it fits the day's route.",
    watchFor: "Current conditions and assuming the route fits every mobility need.",
    plan: "Use it as a reset, not as a promise of easy access for every group.",
  },
  {
    title: "Ober or mountain-side attraction planning",
    bestFor: "Visitors who want to make a mountain-side attraction the main plan.",
    watchFor: "Current hours, access, tickets, conditions and stacking too much around it.",
    plan: "Treat it as its own anchor after checking official details.",
  },
  {
    title: "Park entrance or Sugarlands direction",
    bestFor: "Pairing Gatlinburg with one focused park stop.",
    watchFor: "Road conditions, parking needs and turning deep park travel into a casual add-on.",
    plan: "Check NPS conditions first and keep the park plan focused.",
  },
];

const audiences = [
  {
    title: "Grandparents",
    bestFor: "A tighter route with food, sitting time and fewer stops.",
    watchFor: "Long waits, hills and deciding on food too late.",
  },
  {
    title: "Toddlers and tired kids",
    bestFor: "One easy block, snacks and a clear exit plan.",
    watchFor: "Backtracking, stroller judgment and a day that depends on perfect moods.",
    href: "/smokies-with-toddlers",
  },
  {
    title: "Visitors with limited stamina",
    bestFor: "A short plan with deliberate breaks and current transportation checks.",
    watchFor: "Assuming compact on the map means easy for the group.",
  },
  {
    title: "Mixed-age families",
    bestFor: "One flexible anchor that leaves room for different energy levels.",
    watchFor: "Making the whole group repeat walks for one person's wish list.",
  },
  {
    title: "Cabin guests outside downtown",
    bestFor: "Choosing the downtown zone before driving in.",
    watchFor: "Repeated trips between lodging and scattered stops.",
    href: "/where-to-stay-in-the-smokies-by-trip-type",
  },
  {
    title: "Rainy-day visitors",
    bestFor: "One indoor anchor, nearby food and a simple backup.",
    watchFor: "Wet walking, crowd pressure and chasing indoor stops.",
    href: "/rainy-day-smokies-with-kids",
  },
];

const skipList = [
  "Long back-and-forth downtown loops.",
  "Crossing town for every small stop.",
  "Trying to do Gatlinburg plus too much Pigeon Forge in one day.",
  "Assuming parking near the exact stop will be easy.",
  "Waiting until everyone is tired to choose food.",
  "Treating a park drive as an afterthought.",
  "Any plan that depends on perfect weather and perfect moods.",
];

const samplePlans = [
  {
    title: "Easy downtown half-day",
    plan: "Choose one downtown zone, one anchor, nearby food and a sitting break. Stop before the group needs a long walk back.",
    watchFor: "Parking location, hills, crowds, weather and backtracking.",
  },
  {
    title: "Gatlinburg plus simple park stop",
    plan: "Check NPS conditions, choose one focused park stop and keep the Gatlinburg portion close to one meal or attraction.",
    watchFor: "Parking tags, road changes and letting the park drive grow into a second full day.",
  },
  {
    title: "Rainy-day Gatlinburg plan",
    plan: "Choose one indoor anchor, nearby food and one short backup after checking current details.",
    watchFor: "Wet walking, full indoor stops and crossing downtown repeatedly.",
  },
];

const relatedGuides = [
  { prompt: "Need the main town guide?", next: "Gatlinburg Guide", href: "/gatlinburg" },
  { prompt: "Comparing busy bases?", next: "Gatlinburg vs Pigeon Forge", href: "/gatlinburg-vs-pigeon-forge" },
  { prompt: "Traveling with toddlers?", next: "Smokies With Toddlers", href: "/smokies-with-toddlers" },
  { prompt: "Need a rainy-day backup?", next: "Rainy Day Smokies With Kids", href: "/rainy-day-smokies-with-kids" },
  { prompt: "Choosing where to stay?", next: "Where To Stay by Trip Type", href: "/where-to-stay-in-the-smokies-by-trip-type" },
  { prompt: "Need activity ideas?", next: "Things To Do", href: "/things-to-do" },
  { prompt: "Ready to check offers?", next: "Coupons & Deals", href: "/deals" },
];

export default function GatlinburgWithoutWalkingTooMuchPage() {
  return (
    <main className="destination-page">
      <header className="destination-header">
        <Link className="wordmark" href="/">
          Smoky Insider
        </Link>
        <Link className="back-link" href="/gatlinburg">
          Gatlinburg Guide
        </Link>
      </header>

      <section className="destination-hero">
        <p className="eyebrow">Lower-walking Gatlinburg guide</p>
        <h1>Gatlinburg Without Walking Too Much</h1>
        <p>
          Gatlinburg is easier when you can park once and walk, but not every
          group wants that kind of day. This guide helps you keep the plan
          tighter, choose fewer stops, avoid needless backtracking and build in
          breaks before the day turns into a sidewalk marathon.
        </p>
        <aside className="flagship-warning-note">
          <strong>Check changing transportation details</strong>
          <p>
            Always check official sources before finalizing parking, trolley
            routes, attraction hours, ticket prices and road conditions.
          </p>
        </aside>
        <div className="destination-actions">
          <a className="button button-primary" href="#lower-walking-plan">
            Plan a lower-walking Gatlinburg day <span aria-hidden="true">→</span>
          </a>
          <Link className="button button-secondary" href="/gatlinburg-vs-pigeon-forge">
            Compare towns <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="destination-section quick-answer-panel" id="lower-walking-plan">
        <div className="destination-heading">
          <p className="eyebrow">Quick answer</p>
          <h2>Best way to do Gatlinburg with less walking</h2>
        </div>
        <div className="destination-grid destination-grid-compact">
          <article className="destination-card">
            <h3>Keep the route tight</h3>
            <ul className="area-list">
              {quickPoints.slice(0, 4).map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
          <article className="destination-card">
            <h3>Protect the group&apos;s energy</h3>
            <ul className="area-list">
              {quickPoints.slice(4).map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="destination-section field-notes-section">
        <div className="destination-heading">
          <p className="eyebrow">The main rule</p>
          <h2>Do not treat Gatlinburg like a mall</h2>
        </div>
        <aside className="flagship-warning-note">
          <strong>Plan by zones, not scattered stops</strong>
          <p>
            Downtown looks compact on a map, but crowds, hills, crosswalks,
            parking location, weather and tired kids can make short distances
            feel longer.
          </p>
        </aside>
      </section>

      <section className="destination-section comparison-section">
        <div className="destination-heading">
          <p className="eyebrow">Keep stops together</p>
          <h2>Best Gatlinburg planning zones</h2>
        </div>
        <div className="destination-grid">
          {zones.map((zone) => (
            <article className="destination-card" key={zone.title}>
              <h3>{zone.title}</h3>
              <p className="router-detail">
                <strong>Best for</strong>
                {zone.bestFor}
              </p>
              <p className="router-detail">
                <strong>Watch for</strong>
                {zone.watchFor}
              </p>
              <p className="router-detail">
                <strong>Plan</strong>
                {zone.plan}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="destination-section guide-card-section">
        <div className="destination-heading">
          <p className="eyebrow">Match the plan to the group</p>
          <h2>Who this plan works for</h2>
        </div>
        <div className="destination-grid">
          {audiences.map((audience) => {
            const content = (
              <>
                <h3>{audience.title}</h3>
                <p className="router-detail">
                  <strong>Best for</strong>
                  {audience.bestFor}
                </p>
                <p className="router-detail">
                  <strong>Watch for</strong>
                  {audience.watchFor}
                </p>
                {audience.href ? (
                  <p className="router-detail router-next">
                    <strong>Next</strong>
                    Open related guide
                  </p>
                ) : null}
              </>
            );
            return audience.href ? (
              <Link className="destination-card router-card" href={audience.href} key={audience.title}>
                {content}
              </Link>
            ) : (
              <article className="destination-card" key={audience.title}>
                {content}
              </article>
            );
          })}
        </div>
      </section>

      <section className="destination-section warning-section">
        <div className="destination-heading">
          <p className="eyebrow">Protect the day</p>
          <h2>What to skip or save for later</h2>
        </div>
        <div className="destination-grid destination-grid-compact">
          <article className="destination-card">
            <h3>Skip or save</h3>
            <ul className="area-list">
              {skipList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="destination-card">
            <h3>Better move</h3>
            <p>
              Choose one Gatlinburg zone, one anchor and nearby food. Keep the
              next stop close and stop before the group is worn out.
            </p>
          </article>
        </div>
      </section>

      <section className="destination-section guide-card-section">
        <div className="destination-heading">
          <p className="eyebrow">Keep timing general</p>
          <h2>Lower-walking Gatlinburg day plans</h2>
        </div>
        <div className="destination-grid">
          {samplePlans.map((plan) => (
            <article className="destination-card" key={plan.title}>
              <h3>{plan.title}</h3>
              <p className="router-detail">
                <strong>Plan</strong>
                {plan.plan}
              </p>
              <p className="router-detail">
                <strong>Watch for</strong>
                {plan.watchFor}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="destination-section field-notes-section">
        <div className="destination-heading">
          <p className="eyebrow">Transportation check</p>
          <h2>Trolley and parking planning note</h2>
        </div>
        <aside className="flagship-warning-note">
          <strong>Check official details before relying on the plan</strong>
          <p>
            Gatlinburg trolley and parking details can change. Trolley options
            can help some groups, but they are not a magic fix when the plan is
            scattered. Parking location affects the whole day.
          </p>
        </aside>
        <div className="source-links">
          <a href="https://www.gatlinburg.com/trolley">Official Gatlinburg trolley details</a>
          <a href="https://www.gatlinburg.com/plan/transportation/parking/">
            Official Gatlinburg parking information
          </a>
        </div>
      </section>

      <section className="destination-section field-notes-section">
        <div className="destination-heading">
          <p className="eyebrow">Protect the break</p>
          <h2>Food and rest strategy</h2>
        </div>
        <div className="destination-grid destination-grid-compact">
          <article className="destination-card">
            <h3>Choose food near the main zone</h3>
            <p>
              Do not wait until kids or grandparents are done before choosing
              food. Keep the next stop close.
            </p>
          </article>
          <article className="destination-card">
            <h3>Use a break before it is urgent</h3>
            <p>
              A snack, drink or sit-down break can save the day before the
              group needs a long walk back.
            </p>
          </article>
        </div>
      </section>

      <section className="destination-section next-step-panel">
        <div className="destination-heading">
          <p className="eyebrow">Related guides</p>
          <h2>Go to the guide your Gatlinburg day needs</h2>
        </div>
        <nav className="destination-link-grid router-link-grid" aria-label="Lower-walking Gatlinburg related guides">
          {relatedGuides.map((guide) => (
            <Link href={guide.href} key={guide.href}>
              <span>{guide.prompt}</span>
              <strong>{guide.next}</strong>
            </Link>
          ))}
        </nav>
      </section>

      <section className="business-cta planning-desk-cta" aria-labelledby="gatlinburg-walking-business-title">
        <div>
          <p className="eyebrow">Local businesses</p>
          <h2 id="gatlinburg-walking-business-title">Help visitors plan a tighter Gatlinburg day</h2>
          <p>
            Have an easy-access Gatlinburg stop, family-friendly meal, useful
            offer or attraction that helps visitors plan a lower-walking day?
            Smoky Insider will eventually feature local options that
            help visitors choose better.
          </p>
        </div>
        <div className="business-actions">
          <Link className="button button-primary" href="/advertise">
            Advertise With Us
          </Link>
        </div>
      </section>

      <aside className="destination-section source-note" aria-labelledby="gatlinburg-walking-source-note">
        <p className="eyebrow">Official source note</p>
        <h2 id="gatlinburg-walking-source-note">Check official details before final decisions</h2>
        <p>
          Parking, trolley routes, attraction operations, roads and park
          conditions can change. Check official sources before relying on the
          day plan.
        </p>
        <div className="source-links">
          <a href="https://www.gatlinburg.com/">Official Gatlinburg tourism site</a>
          <a href="https://www.gatlinburg.com/trolley">Official Gatlinburg trolley details</a>
          <a href="https://www.gatlinburg.com/plan/transportation/parking/">
            Official Gatlinburg parking information
          </a>
          <a href="https://www.nps.gov/grsm/index.htm">Great Smoky Mountains National Park</a>
          <a href="https://www.nps.gov/grsm/planyourvisit/conditions.htm">Current conditions</a>
        </div>
      </aside>
    </main>
  );
}
