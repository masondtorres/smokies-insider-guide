import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, LastUpdated, SiteFooter, SiteHeader, SourceBox } from "@/components/guide";
import { TripPlanner } from "@/components/TripPlanner";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/seoSchema";

export const metadata: Metadata = {
  title: "Smoky Mountains Trip Planner | Start Planning",
  description:
    "Use a client-side Smokies itinerary planner for Gatlinburg, Pigeon Forge, Cades Cove, rainy days, families, walking limits, crowds and budget.",
};

const plannerInputs = [
  "Who is going",
  "Starting town or base",
  "Day type",
  "Risk or pain point",
  "Pace and budget",
  "Trip length",
  "Season or timing",
  "Walking limit",
  "Crowd tolerance",
  "Rainy-day need",
];

const plannerFaqs = [
  {
    question: "What does the Smokies trip planner do?",
    answer:
      "The planner turns practical answers about your group, base town, weather, walking limits, crowds and budget into a suggested Smokies day shape with an anchor, backup, movement warning and next links.",
  },
  {
    question: "Can this planner give live hours, prices or road status?",
    answer:
      "No. This page gives planning guidance, not live status. Hours, prices, road status and availability can change. Check official sources before you go.",
  },
  {
    question: "Does the planner work for Cades Cove, Dollywood and rainy days?",
    answer:
      "Yes, the planner can point visitors toward Cades Cove-style park days, Dollywood or Pigeon Forge attraction days, rainy-day indoor anchors, low-walking plans and Gatlinburg or Townsend-style routes.",
  },
];

export default function StartPlanningPage() {
  return (
    <main className="guide-page start-planning-page">
      <SiteHeader />
      <article className="guide-article start-planning-article">
        <header className="planner-hero">
          <div>
            <p className="eyebrow">Smokies concierge planner</p>
            <h1>Start planning with the day you actually need.</h1>
            <p>
              Answer a few practical questions and get a starter route: a first pick,
              a backup, a rainy-day move, a family option and one planning caution.
            </p>
            <LastUpdated />
          </div>
          <aside>
            <strong>Good first rule</strong>
            <p>Pick the town and day shape before you start buying tickets or stacking stops.</p>
          </aside>
        </header>

        <TripPlanner />

        <section className="seo-answer-panel planner-seo-panel" aria-labelledby="planner-direct-answer">
          <p className="eyebrow">Direct answer</p>
          <h2 id="planner-direct-answer">What does this Smokies trip planner do?</h2>
          <p>
            This planner helps visitors build a Smoky Mountains day plan by weighing group type, starting base, trip length, season, walking limits, crowd tolerance, rainy-day needs and budget. It suggests a practical base, anchor, backup, movement warning and next guide links.
          </p>
          <aside className="flagship-warning-note">
            <strong>This is planning guidance, not live status</strong>
            <p>Hours, prices, road status and availability can change. Check official sources before relying on current details.</p>
          </aside>
        </section>

        <section className="seo-input-panel" aria-labelledby="planner-inputs-title">
          <p className="eyebrow">What affects the plan</p>
          <h2 id="planner-inputs-title">The planner changes recommendations based on these inputs</h2>
          <ul className="seo-chip-list">
            {plannerInputs.map((input) => (
              <li key={input}>{input}</li>
            ))}
          </ul>
        </section>

        <section className="planner-trust-strip" aria-label="Planner limits">
          <div>
            <strong>No fake partnerships</strong>
            <p>Recommendations are planning categories and known Smokies visitor options, not paid rankings.</p>
          </div>
          <div>
            <strong>Verify before you go</strong>
            <p>Hours, roads, parking, prices and closures can change. Check current sources before final plans.</p>
          </div>
        </section>

        <section className="seo-faq-panel" aria-labelledby="planner-faq-title">
          <p className="eyebrow">Planner FAQ</p>
          <h2 id="planner-faq-title">Common questions before using the planner</h2>
          <div className="seo-faq-list">
            {plannerFaqs.map((item) => (
              <article key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
          <nav className="seo-link-row" aria-label="Planner related guides">
            <Link href="/things-to-do">Compare things to do</Link>
            <Link href="/smokies-parking-trolley-guide">Read parking and trolley guidance</Link>
            <Link href="/rainy-day">Plan a rainy day</Link>
            <Link href="/cades-cove">Plan Cades Cove</Link>
          </nav>
        </section>

        <SourceBox />
      </article>
      <JsonLd data={webPageSchema({
        path: "/start-planning",
        title: "Smoky Mountains Trip Planner | Start Planning",
        description: metadata.description ?? "",
      })} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Start Planning", url: "/start-planning" }])} />
      <JsonLd data={faqSchema(plannerFaqs)} />
      <SiteFooter />
    </main>
  );
}
