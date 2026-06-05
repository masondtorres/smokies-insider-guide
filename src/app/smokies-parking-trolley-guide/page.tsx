import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/guide";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/seoSchema";

export const metadata: Metadata = {
  title: "Smokies Parking, Trolleys and Getting Around | Gatlinburg, Pigeon Forge and the Park",
  description:
    "Plan parking, trolleys, park-and-ride, town movement and national park checks for Gatlinburg, Pigeon Forge, Sevierville, Townsend and Great Smoky Mountains National Park.",
};

const quickAreas = [
  {
    title: "Gatlinburg",
    text: "Park once and walk when the group can handle it. Plan parking and walking together.",
    href: "/gatlinburg",
  },
  {
    title: "Pigeon Forge",
    text: "Plan around the Parkway and avoid bouncing across town.",
    href: "/pigeon-forge",
  },
  {
    title: "Sevierville",
    text: "Use it as a practical base and gateway for food, shopping and movement.",
    href: "/sevierville",
  },
  {
    title: "Townsend",
    text: "Use the quiet-side gateway for Cades Cove and slower park days.",
    href: "/townsend",
  },
  {
    title: "Great Smoky Mountains National Park",
    text: "Check conditions, closures and parking-tag requirements before the park day.",
  },
  {
    title: "Dollywood and Cades Cove",
    text: "Treat each as its own parking, timing and movement plan, not a quick add-on.",
  },
];

const shortAnswers = [
  "If you are spending the day in Gatlinburg, plan the parking and walking together.",
  "If you are spending the day in Pigeon Forge, choose your main zone before you start driving.",
  "If you are entering the national park, check official NPS conditions and parking-tag rules first.",
  "If your group has toddlers, grandparents or limited stamina, reduce the number of stops before trying to solve everything with a trolley.",
];

const movementAreas = [
  {
    title: "Sevierville",
    bestFor: "A useful gateway and base area with room for practical resets.",
    planAround: "Food, shopping and spreading out from the heavier corridors.",
    next: "Open Sevierville guide",
    href: "/sevierville",
  },
  {
    title: "Townsend",
    bestFor: "Quiet-side park access, Cades Cove and slower days.",
    planAround: "Fewer attraction-style stops than Pigeon Forge and a simpler route.",
    next: "Open Townsend guide",
    href: "/townsend",
  },
];

const mistakes = [
  "Trying to do Gatlinburg, Pigeon Forge and the park as one casual day.",
  "Parking far away without considering the return walk.",
  "Waiting until the family is tired to choose food.",
  "Treating Cades Cove as a quick side stop.",
  "Depending on cell service inside the park.",
  "Assuming trolley routes or fares without checking official pages.",
  "Trying to solve an overpacked plan with transportation instead of simplifying the plan.",
];

const movementPlans = [
  {
    title: "Gatlinburg lower-walking day",
    plan: "Choose one downtown zone, check current parking or trolley details and keep food and stops close together.",
    watchFor: "Return walking distance, crowds, hills and a scattered wish list.",
    href: "/gatlinburg-without-walking-too-much",
  },
  {
    title: "Pigeon Forge family day",
    plan: "Pick one main Parkway area or attraction, add food and keep one nearby backup.",
    watchFor: "Traffic, repeated crossings and stacking too many paid stops.",
    href: "/pigeon-forge-with-kids",
  },
  {
    title: "Townsend and Cades Cove day",
    plan: "Check official park conditions, use Townsend as the quiet-side base and give Cades Cove real time.",
    watchFor: "Slow roads, daylight, parking-tag needs and treating the loop like a side stop.",
    href: "/cades-cove-first-time-guide",
  },
  {
    title: "Dollywood-focused day",
    plan: "Treat Dollywood as its own arrival, parking and timing plan after checking official details.",
    watchFor: "Adding too much before or after the park.",
    href: "/dollywood-day-plan",
  },
];

const movementComparison = [
  ["Gatlinburg", "Park once and walk when the group can handle it.", "Trolley and parking details can change. Verify official details."],
  ["Pigeon Forge", "Pick one Parkway zone or anchor before driving.", "Do not bounce across the Parkway for small add-ons."],
  ["Sevierville", "Use as a practical base, food/shopping reset or gateway.", "Not the same as immediate park or downtown Gatlinburg access."],
  ["Townsend", "Use for Cades Cove, quieter park access and slower scenic days.", "Not built for heavy attraction stacking."],
  ["Park areas", "Check official NPS conditions, tags, roads and closures before the park day.", "Cell service and road/weather conditions can affect plans."],
];

const parkingFaqs = [
  {
    question: "What is the best way to handle parking in Gatlinburg?",
    answer:
      "Plan parking and walking together. Gatlinburg usually works better when visitors park once and keep stops close, but current parking and trolley details should be checked with official sources.",
  },
  {
    question: "Should visitors rely on trolleys in Gatlinburg or Pigeon Forge?",
    answer:
      "Trolleys can help some plans, but they do not fix an overpacked route. Check official route, fare and service details before relying on transit.",
  },
  {
    question: "Do Smokies park days need official checks?",
    answer:
      "Yes. Park rules, parking tags, road conditions, closures and weather can change. Check official Great Smoky Mountains National Park sources before you go.",
  },
  {
    question: "What is the biggest getting-around mistake?",
    answer:
      "The biggest mistake is trying to solve too many stops with transportation. Simplify the day first: one base, one anchor, nearby food and a backup that fits the same route.",
  },
];

const relatedGuides = [
  { prompt: "Need the full planning router?", next: "Start Planning", href: "/start-planning" },
  { prompt: "Choosing activities?", next: "Things To Do Decision Hub", href: "/things-to-do" },
  { prompt: "Choosing where to stay?", next: "Where To Stay by Trip Type", href: "/where-to-stay-in-the-smokies-by-trip-type" },
  { prompt: "Need the Gatlinburg town guide?", next: "Gatlinburg Guide", href: "/gatlinburg" },
  { prompt: "Need the Pigeon Forge town guide?", next: "Pigeon Forge Guide", href: "/pigeon-forge" },
  { prompt: "Ready to check offers?", next: "Coupons & Deals", href: "/deals" },
];

export default function SmokiesParkingTrolleyGuidePage() {
  return (
    <main className="destination-page">
      <header className="destination-header">
        <Link className="wordmark" href="/">
          Smokies Insider Guide
        </Link>
        <Link className="back-link" href="/start-planning">
          Start Planning
        </Link>
      </header>

      <section className="destination-hero">
        <p className="eyebrow">Smokies transportation planning guide</p>
        <h1>Smokies Parking, Trolleys and Getting Around</h1>
        <p>
          Parking and driving can shape the whole Smokies trip. Gatlinburg
          works best when the walking plan makes sense. Pigeon Forge works
          better when you understand the Parkway. Park days need official
          condition checks before you go.
        </p>
        <aside className="flagship-warning-note">
          <strong>Needs official confirmation</strong>
          <p>
            Always confirm current parking rules, trolley routes, trolley
            fares, road conditions, closures and parking-tag requirements with
            official sources before relying on a plan.
          </p>
        </aside>
        <div className="destination-actions">
          <a className="button button-primary" href="#start-with-town">
            Start with your town <span aria-hidden="true">→</span>
          </a>
          <Link className="button button-secondary" href="/gatlinburg-without-walking-too-much">
            Plan less walking <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="destination-section quick-answer-panel" id="start-with-town">
        <div className="destination-heading">
          <p className="eyebrow">Direct answer</p>
          <h2>Best way to think about getting around the Smokies</h2>
        </div>
        <p className="seo-direct-copy">
          The best Smokies transportation plan starts by simplifying the day. Gatlinburg works best when parking and walking are planned together. Pigeon Forge works better by corridor. Park days need official checks for parking tags, roads, closures and conditions before you go.
        </p>
        <div className="destination-grid">
          {quickAreas.map((area) => {
            const content = (
              <>
                <h3>{area.title}</h3>
                <p>{area.text}</p>
                {area.href ? (
                  <p className="router-detail router-next">
                    <strong>Next</strong>
                    Open area guide
                  </p>
                ) : null}
              </>
            );
            return area.href ? (
              <Link className="destination-card router-card" href={area.href} key={area.title}>
                {content}
              </Link>
            ) : (
              <article className="destination-card" key={area.title}>
                {content}
              </article>
            );
          })}
        </div>
      </section>

      <section className="destination-section comparison-section" aria-labelledby="movement-table-title">
        <div className="destination-heading">
          <p className="eyebrow">Comparison table</p>
          <h2 id="movement-table-title">Parking and movement by gateway area</h2>
        </div>
        <div className="comparison-table-wrap">
          <table className="comparison-table">
            <thead>
              <tr>
                <th scope="col">Area</th>
                <th scope="col">Use this movement logic</th>
                <th scope="col">Caution</th>
              </tr>
            </thead>
            <tbody>
              {movementComparison.map(([area, logic, caution]) => (
                <tr key={area}>
                  <th scope="row">{area}</th>
                  <td data-label="Use this movement logic">{logic}</td>
                  <td data-label="Caution">{caution}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="destination-section comparison-section">
        <div className="destination-heading">
          <p className="eyebrow">Short answer</p>
          <h2>Start by simplifying the movement plan</h2>
        </div>
        <div className="destination-grid destination-grid-compact">
          <article className="destination-card">
            <h3>Planning guidance</h3>
            <ul className="area-list">
              {shortAnswers.map((answer) => (
                <li key={answer}>{answer}</li>
              ))}
            </ul>
          </article>
          <article className="destination-card">
            <p className="eyebrow">Best for</p>
            <p>First-time visitors, families, low-walking groups and cabin guests.</p>
            <p className="router-detail">
              <strong>Skip if</strong>
              You are looking for exact real-time parking availability. Use official sources for changing details.
            </p>
            <p className="router-detail">
              <strong>Status</strong>
              Planning guidance. Verify current details with official sources.
            </p>
          </article>
        </div>
      </section>

      <section className="destination-section guide-card-section">
        <div className="destination-heading">
          <p className="eyebrow">Gatlinburg movement</p>
          <h2>Gatlinburg parking and trolley planning</h2>
        </div>
        <div className="destination-grid destination-grid-compact">
          <article className="destination-card">
            <h3>Keep the downtown plan tight</h3>
            <p>
              Gatlinburg is easier when you avoid repeated backtracking.
              Parking location shapes the day, and a trolley is not a magic fix
              for scattered stops.
            </p>
          </article>
          <article className="destination-card">
            <h3>Check before relying on transit</h3>
            <p>
              Park-and-ride and trolley options can help some visitors. Check
              official Gatlinburg parking, route and service details first.
            </p>
          </article>
        </div>
        <div className="destination-actions">
          <Link className="button button-primary" href="/gatlinburg-without-walking-too-much">
            Plan less walking
          </Link>
          <Link className="button button-secondary" href="/gatlinburg">
            Gatlinburg Guide
          </Link>
        </div>
      </section>

      <section className="destination-section guide-card-section">
        <div className="destination-heading">
          <p className="eyebrow">Pigeon Forge movement</p>
          <h2>Pigeon Forge parking and trolley planning</h2>
        </div>
        <div className="destination-grid destination-grid-compact">
          <article className="destination-card">
            <h3>Plan the corridor first</h3>
            <p>
              Pigeon Forge is a corridor town. Pick one main attraction or area
              before driving, and do not bounce across the Parkway all day.
            </p>
          </article>
          <article className="destination-card">
            <h3>Verify transit and anchor details</h3>
            <p>
              Transit can help some visitors. Check current official route and
              fare details before relying on it, especially when Patriot Park,
              Dollywood or Parkway movement shapes the day.
            </p>
          </article>
        </div>
        <div className="destination-actions">
          <Link className="button button-primary" href="/pigeon-forge">
            Pigeon Forge Guide
          </Link>
          <Link className="button button-secondary" href="/pigeon-forge-with-kids">
            Pigeon Forge With Kids
          </Link>
          <Link className="button button-secondary" href="/dollywood-day-plan">
            Dollywood Day Plan
          </Link>
        </div>
      </section>

      <section className="destination-section comparison-section">
        <div className="destination-heading">
          <p className="eyebrow">Gateway movement</p>
          <h2>Sevierville and Townsend movement</h2>
        </div>
        <div className="destination-grid destination-grid-compact">
          {movementAreas.map((area) => (
            <Link className="destination-card router-card" href={area.href} key={area.href}>
              <h3>{area.title}</h3>
              <p className="router-detail">
                <strong>Best for</strong>
                {area.bestFor}
              </p>
              <p className="router-detail">
                <strong>Plan around</strong>
                {area.planAround}
              </p>
              <p className="router-detail router-next">
                <strong>Next</strong>
                {area.next}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="destination-section field-notes-section">
        <div className="destination-heading">
          <p className="eyebrow">Verified source check</p>
          <h2>National park parking-tag and road-condition planning</h2>
        </div>
        <aside className="flagship-warning-note">
          <strong>Check NPS before the park day</strong>
          <p>
            Parking-tag rules matter. Conditions and closures can change, cell
            service can be limited and weather can vary by elevation. Cades
            Cove and popular scenic areas can take longer than visitors expect.
          </p>
        </aside>
        <div className="destination-actions">
          <Link className="button button-primary" href="/cades-cove-first-time-guide">
            Cades Cove First-Time Guide
          </Link>
        </div>
      </section>

      <section className="destination-section warning-section">
        <div className="destination-heading">
          <p className="eyebrow">Planning guidance</p>
          <h2>Common getting-around mistakes</h2>
        </div>
        <article className="destination-card">
          <ul className="area-list">
            {mistakes.map((mistake) => (
              <li key={mistake}>{mistake}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="destination-section guide-card-section">
        <div className="destination-heading">
          <p className="eyebrow">Keep timing general</p>
          <h2>Simple movement plans</h2>
        </div>
        <div className="destination-grid">
          {movementPlans.map((plan) => (
            <Link className="destination-card router-card" href={plan.href} key={plan.href}>
              <h3>{plan.title}</h3>
              <p className="router-detail">
                <strong>Plan</strong>
                {plan.plan}
              </p>
              <p className="router-detail">
                <strong>Watch for</strong>
                {plan.watchFor}
              </p>
              <p className="router-detail router-next">
                <strong>Next</strong>
                Open related guide
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="destination-section field-notes-section">
        <div className="destination-heading">
          <p className="eyebrow">Source and verification note</p>
          <h2>Know what is verified and what needs checking</h2>
        </div>
        <div className="destination-grid">
          <article className="destination-card">
            <p className="eyebrow">Verified</p>
            <p>Official source links are provided for current transportation and park information.</p>
          </article>
          <article className="destination-card">
            <p className="eyebrow">Planning guidance</p>
            <p>Town and day-shape advice helps simplify the trip before checking current details.</p>
          </article>
          <article className="destination-card">
            <p className="eyebrow">Needs local confirmation</p>
            <p>Current parking, trolley, road, closure and park-tag details should be checked before the trip.</p>
          </article>
        </div>
      </section>

      <section className="destination-section next-step-panel">
        <div className="destination-heading">
          <p className="eyebrow">Related guides</p>
          <h2>Go to the guide your movement plan needs</h2>
        </div>
        <nav className="destination-link-grid router-link-grid" aria-label="Smokies transportation related guides">
          {relatedGuides.map((guide) => (
            <Link href={guide.href} key={guide.href}>
              <span>{guide.prompt}</span>
              <strong>{guide.next}</strong>
            </Link>
          ))}
        </nav>
      </section>

      <section className="destination-section seo-faq-panel" aria-labelledby="parking-faq-title">
        <p className="eyebrow">Parking and trolley FAQ</p>
        <h2 id="parking-faq-title">Questions visitors ask before moving around the Smokies</h2>
        <div className="seo-faq-list">
          {parkingFaqs.map((item) => (
            <article key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="business-cta planning-desk-cta" aria-labelledby="transport-business-title">
        <div>
          <p className="eyebrow">Local businesses</p>
          <h2 id="transport-business-title">Help visitors plan a useful stop</h2>
          <p>
            Have a useful stop near a trolley route, parking area, attraction
            corridor or park gateway? Smokies Insider Guide will eventually
            feature local options that help visitors plan better.
          </p>
        </div>
        <div className="business-actions">
          <Link className="button button-primary" href="/advertise">
            Advertise With Us
          </Link>
        </div>
      </section>

      <aside className="destination-section source-note" aria-labelledby="transport-source-note">
        <p className="eyebrow">Official source links</p>
        <h2 id="transport-source-note">Check changing details before relying on the plan</h2>
        <p>
          Verified facts come from official sources when possible. Planning
          advice is labeled as guidance. Current parking, trolley, road,
          closure and park-tag details should be checked before the trip.
        </p>
        <div className="source-links">
          <a href="https://www.nps.gov/grsm/index.htm">Great Smoky Mountains National Park</a>
          <a href="https://www.nps.gov/grsm/planyourvisit/conditions.htm">NPS current conditions</a>
          <a href="https://www.nps.gov/grsm/planyourvisit/fees.htm">NPS parking tags</a>
          <a href="https://www.gatlinburg.com/trolley">Official Gatlinburg trolley details</a>
          <a href="https://www.gatlinburg.com/plan/transportation/parking/">
            Official Gatlinburg parking information
          </a>
          <a href="https://www.cityofpigeonforgetn.gov/235/Transit">
            Official Pigeon Forge transit information
          </a>
          <a href="https://www.dollywood.com/">Official Dollywood site</a>
        </div>
      </aside>
      <JsonLd data={webPageSchema({
        path: "/smokies-parking-trolley-guide",
        title: "Smokies Parking, Trolleys and Getting Around | Gatlinburg, Pigeon Forge and the Park",
        description: metadata.description ?? "",
      })} />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Smokies Parking and Trolley Guide", url: "/smokies-parking-trolley-guide" },
      ])} />
      <JsonLd data={faqSchema(parkingFaqs)} />
    </main>
  );
}
