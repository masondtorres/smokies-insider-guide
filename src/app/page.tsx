import Link from "next/link";
import type { Metadata } from "next";
import { DecisionCard, InternalLinkGrid, LastUpdated, SiteFooter, SiteHeader, SourceBox } from "@/components/guide";
import { guideLinks, towns } from "@/lib/smokiesData";

export const metadata: Metadata = {
  title: "Smokies Insider Guide: Free Smoky Mountains Trip Planning",
  description:
    "Free, practical Smoky Mountains planning help for choosing the right town, building a better day, avoiding common mistakes and finding useful local guides.",
};

const tripOptions = [
  { title: "First time", href: "/first-time-smokies" },
  { title: "Family with kids", href: "/pigeon-forge-with-kids" },
  { title: "Rainy day", href: "/rainy-day" },
  { title: "Low-crowd trip", href: "/scenic-drives" },
  { title: "Cades Cove day", href: "/cades-cove" },
  { title: "Dollywood day", href: "/dollywood-day-plan" },
  { title: "Free or cheap", href: "/free-and-cheap-smokies" },
  { title: "Food-first trip", href: "/restaurants" },
  { title: "Low-walking day", href: "/accessible-smokies" },
];

const decisionCards = [
  {
    title: "Where should we stay?",
    description: "Choose Gatlinburg, Pigeon Forge, Sevierville, Townsend, Wears Valley or the NC side by trip shape.",
    href: "/where-to-stay",
    bestFor: "Visitors choosing a base before booking.",
    skipIf: "You only need live hotel rates.",
  },
  {
    title: "How many days do we need?",
    description: "Set a realistic trip length before trying to fit every town and park road.",
    href: "/how-many-days",
    bestFor: "First-timers and families.",
    skipIf: "Your dates and route are already fixed.",
  },
  {
    title: "What if it rains?",
    description: "Use one indoor anchor, nearby food and a short outdoor backup if showers pass.",
    href: "/rainy-day",
    bestFor: "Families and mixed groups.",
    skipIf: "You are hiking no matter what.",
  },
  {
    title: "How do we avoid crowds?",
    description: "Choose slower scenic routes, quieter bases and fewer cross-county moves.",
    href: "/scenic-drives",
    bestFor: "Crowd-avoiders.",
    skipIf: "You want peak downtown energy.",
  },
  {
    title: "What should we do with kids?",
    description: "Pick one anchor, protect meal timing and do not stack the whole Parkway.",
    href: "/things-to-do",
    bestFor: "Families with kids or teens.",
    skipIf: "You want an adults-only quiet route.",
  },
  {
    title: "What should we skip?",
    description: "Avoid time traps, bad routing, unknown parking and coupon-chasing.",
    href: "/what-to-skip",
    bestFor: "Short trips and overwhelmed planners.",
    skipIf: "You have a long flexible stay.",
  },
];

const tools = [
  { title: "Planner", href: "/plan-your-trip", description: "Get a manual rule-based starter plan." },
  { title: "First-time guide", href: "/first-time-smokies", description: "Start with a simple three-day shape." },
  { title: "Parking tag guide", href: "/parking-tag", description: "Verify the parking rules before you go." },
  { title: "Rainy-day guide", href: "/rainy-day", description: "Keep the day useful when weather shifts." },
  { title: "Cades Cove guide", href: "/cades-cove", description: "Give the loop the time it needs." },
];

export default function Home() {
  return (
    <main className="home-page guide-home">
      <SiteHeader />

      <section className="home-hero" aria-labelledby="home-title">
        <div>
          <p className="eyebrow">Free Smoky Mountains decision engine</p>
          <h1 id="home-title">Plan a Smokies trip you won&apos;t second-guess.</h1>
          <p>
            Free, practical Smoky Mountains planning help for choosing the right
            town, building a better day, avoiding common mistakes and finding
            useful local guides.
          </p>
          <LastUpdated />
          <div className="hero-actions">
            <Link className="button button-primary" href="/plan-your-trip">Plan my Smokies trip</Link>
            <Link className="button button-secondary" href="/where-to-stay">Where should I stay?</Link>
          </div>
        </div>
        <aside className="home-hero-note">
          <strong>Planning rule</strong>
          <p>Choose the town and day shape before you choose every stop.</p>
        </aside>
      </section>

      <section className="section-block guide-panel">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Trip selector</p>
            <h2>What kind of trip are you planning?</h2>
          </div>
        </div>
        <div className="trip-selector">
          {tripOptions.map((option) => (
            <Link href={option.href} key={option.title}>{option.title}</Link>
          ))}
        </div>
      </section>

      <section className="section-block guide-panel">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Start here</p>
            <h2>Start with the decision that matters most</h2>
          </div>
        </div>
        <div className="decision-grid">
          {decisionCards.map((card) => (
            <DecisionCard key={card.href} {...card} />
          ))}
        </div>
      </section>

      <section className="section-block guide-panel">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Town chooser</p>
            <h2>Choose the base that makes the day easier</h2>
          </div>
        </div>
        <div className="town-preview-grid">
          {towns.map((town) => (
            <article className="town-preview-card" key={town.name}>
              <h3>{town.name}</h3>
              <p><strong>Best for:</strong> {town.bestFor}</p>
              <p><strong>Skip if:</strong> {town.skipIf}</p>
              <Link href={town.href}>Open town guidance</Link>
            </article>
          ))}
        </div>
      </section>

      <InternalLinkGrid links={guideLinks} title="Current planning guides" />
      <InternalLinkGrid links={tools} title="Free planning tools" />

      <section className="section-block guide-panel">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Deals and savings</p>
            <h2>Use deals without building your whole trip around coupons</h2>
          </div>
        </div>
        <p className="guide-copy">
          Deals can help when they fit the route, group and timing. They become
          a problem when they send you across town for a small savings.
        </p>
        <Link className="button button-secondary" href="/deals">Check the deals guide</Link>
      </section>

      <section className="section-block guide-panel">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Trust</p>
            <h2>Planning pages include last-updated notes and source reminders</h2>
          </div>
        </div>
        <SourceBox />
      </section>

      <section className="business-cta compact-business-cta">
        <div>
          <p className="eyebrow">Local business?</p>
          <h2>Get on the future partner list.</h2>
          <p>
            Future sponsorship stays clearly labeled and secondary to useful visitor planning.
          </p>
        </div>
        <div className="business-actions">
          <Link className="button button-primary" href="/advertise">Local Business / Advertise</Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
