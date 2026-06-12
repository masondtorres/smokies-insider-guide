import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, LastUpdated, SiteFooter, SiteHeader, SourceBox } from "@/components/guide";
import { TripPlanner } from "@/components/TripPlanner";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/seoSchema";

export const metadata: Metadata = {
  title: "Smoky Mountains Trip Planner | Start Planning",
  description:
    "Answer five simple questions to get existing Smokies planning-card recommendations and save them to My Plan.",
};

const plannerInputs = ["Starting town or base", "Who is going", "Time available", "Kind of day", "What to avoid"];

const plannerFaqs = [
  {
    question: "What does the Smokies trip planner do?",
    answer:
      "The planner uses five practical answers to rank the existing field-guide cards, then lets you save the useful recommendations to My Plan.",
  },
  {
    question: "Can this planner give live hours, prices or road status?",
    answer:
      "No. This page gives planning guidance, not live status. Hours, prices, road status, closures and availability can change. Check official sources before you go.",
  },
  {
    question: "Does the planner work for Cades Cove, Dollywood and rainy days?",
    answer:
      "The planner can suggest scenic, attraction, rainy-day, lower-cost, food, family and quieter-side planning patterns without claiming live business details.",
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
              Answer five practical questions, review a starter mix of existing planning cards,
              and save the useful ones to My Plan.
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
            This five-question planner helps visitors find useful Smoky Mountains planning cards by weighing the starting base, group, available time, preferred day style and the main thing to avoid. Recommended cards can be saved directly to My Plan.
          </p>
          <aside className="flagship-warning-note">
            <strong>This is planning guidance, not live status</strong>
            <p>Hours, prices, road status, closures and availability can change. Check official sources before relying on current details.</p>
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
