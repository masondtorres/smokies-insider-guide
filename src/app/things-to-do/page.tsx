import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, LastUpdated, SiteFooter, SiteHeader, SourceBox } from "@/components/guide";
import { breadcrumbSchema, faqSchema, itemListSchema, webPageSchema } from "@/lib/seoSchema";

export const metadata: Metadata = {
  title: "Best Things to Do in the Smokies by Situation",
  description:
    "Choose Smokies things to do by family fit, rainy days, low walking, budget, scenic drives, park plans, paid anchors and town route.",
};

const situationPicks = [
  {
    title: "Family with kids",
    bestFit: "Pigeon Forge Parkway anchors, Dollywood as a full-day plan, WonderWorks, The Island or Parrot Mountain when the route fits.",
    weakFit: "A packed park-and-attraction day with no food reset.",
    movement: "Pick one anchor and keep the meal nearby.",
    pairing: "Pigeon Forge restaurants, rainy-day guide or deals page.",
    href: "/pigeon-forge-with-kids",
  },
  {
    title: "Rainy day",
    bestFit: "Indoor categories such as WonderWorks, Ripley's-style indoor options, arcades, covered shopping and food-first resets.",
    weakFit: "Trying to rescue a full outdoor itinerary in bad weather.",
    movement: "Choose the indoor anchor by town so rain does not turn into cross-town driving.",
    pairing: "Rainy-day guide, Pigeon Forge or Gatlinburg things to do.",
    href: "/rainy-day",
  },
  {
    title: "Low-walking day",
    bestFit: "Scenic drives, overlooks, visitor-center-style stops, seated attractions and easy meals.",
    weakFit: "Any stop described as easy without verified parking, surface and bathroom details.",
    movement: "Plan parking, bathrooms and short stops before picking the attraction.",
    pairing: "Accessible Smokies, scenic drives and parking/trolley guide.",
    href: "/accessible-smokies",
  },
  {
    title: "Budget day",
    bestFit: "Scenic drives, overlooks, town walks, visitor centers and one paid stop only if it earns the time.",
    weakFit: "Coupon-chasing across Gatlinburg, Pigeon Forge and Sevierville.",
    movement: "Savings disappear if the discount sends the group across town.",
    pairing: "Deals, what to skip and scenic drives.",
    href: "/deals",
  },
  {
    title: "Scenic or national park day",
    bestFit: "Cades Cove, Roaring Fork Motor Nature Trail, Foothills Parkway, Sugarlands Visitor Center, Kuwohi/Newfound Gap or NC-side routes after status checks.",
    weakFit: "A fixed-schedule attraction day with no room for slow roads.",
    movement: "Download maps and verify official road, weather and closure status before park routes.",
    pairing: "Cades Cove, scenic drives and parking tag guidance.",
    href: "/scenic-drives",
  },
  {
    title: "Paid attraction anchor",
    bestFit: "Dollywood, Anakeesta, Ober Mountain, The Island, WonderWorks, Ripley's categories or dinner-show style evenings when treated as the main plan.",
    weakFit: "Stacking several paid anchors because they all sound good.",
    movement: "Paid anchors work best when everything else supports that one choice.",
    pairing: "Dollywood day plan, Pigeon Forge things to do or Gatlinburg things to do.",
    href: "/things-to-do/pigeon-forge",
  },
];

const rainyDayOptions = [
  ["WonderWorks / indoor attraction category", "Best when the group needs a clear indoor anchor near Pigeon Forge.", "Check current hours, pricing and availability before relying on it."],
  ["Ripley's-style indoor category", "Best for a Gatlinburg-centered rainy day that stays walkable.", "Verify current attraction details and parking before you go."],
  ["Covered shopping and food reset", "Best when the group needs a cheaper, slower backup.", "Do not turn it into a scattered cross-town list."],
];

const townComparison = [
  ["Gatlinburg", "Walkable downtown, park access, Anakeesta, Ober Mountain, Ripley's-style categories and food nearby.", "Weak fit for visitors who hate tight streets, crowds or downtown walking."],
  ["Pigeon Forge", "Family attractions, Dollywood, The Island, WonderWorks, dinner shows and Parkway entertainment.", "Weak fit for quiet mountain-town pacing or walk-everywhere expectations."],
  ["Sevierville", "Value, outlets, gateway access, local business pacing and a calmer reset.", "Weak fit if you need immediate park or downtown Gatlinburg access."],
  ["Townsend / Wears Valley", "Cades Cove, Foothills Parkway, slower scenic days and crowd-sensitive plans.", "Weak fit for heavy nightlife or attraction-stacking."],
  ["Cherokee / Bryson City", "NC-side access, Deep Creek, Cataloochee-style planning and different Smokies routes.", "Weak fit for a Dollywood-heavy or Pigeon Forge-heavy day."],
];

const commonMistakes = [
  "Trying to do Gatlinburg, Pigeon Forge, Cades Cove and Dollywood in one day.",
  "Treating Cades Cove as a quick add-on instead of a slow scenic outing.",
  "Crossing town twice when parking, traffic or tired kids are already the problem.",
  "Building a low-walking day without checking parking, bathrooms and surfaces.",
  "Relying on current hours, road status, trolley details or closure status without checking official sources.",
];

const thingsToDoFaqs = [
  {
    question: "What are the best things to do in the Smokies?",
    answer:
      "The best things to do depend on the group and route. Families often fit Pigeon Forge anchors. Walkable downtown plans fit Gatlinburg. Scenic days fit Cades Cove, Roaring Fork, Foothills Parkway or other park routes after current-status checks.",
  },
  {
    question: "What should families do in the Smokies when it rains?",
    answer:
      "Start with one indoor anchor such as WonderWorks, a Ripley's-style indoor category, arcades, covered shopping or food nearby. This page gives planning guidance, not live hours, prices or availability.",
  },
  {
    question: "Are the Tennessee side and North Carolina side interchangeable?",
    answer:
      "No. Gatlinburg, Pigeon Forge, Sevierville, Townsend, Cherokee, Bryson City, Deep Creek and Cataloochee need different route logic. Do not casually mix NC-side trips into a packed TN-side attraction day.",
  },
  {
    question: "What should low-walking groups do first?",
    answer:
      "Low-walking groups should plan parking, bathrooms, surfaces and short stops first. Scenic drives, visitor centers, overlooks and seated categories can help, but exact access needs official or local verification.",
  },
];

const itemList = situationPicks.map((pick) => ({
  name: pick.title,
  url: pick.href,
  description: pick.bestFit,
}));

export default function ThingsToDoPage() {
  return (
    <main className="guide-page things-decision-page">
      <SiteHeader />
      <article className="guide-article">
        <header className="guide-hero">
          <p className="eyebrow">Smokies decision hub</p>
          <h1>Best Things to Do in the Smokies by Situation</h1>
          <p>
            Do not start with a giant attraction list. Start with who is going, where you are starting, how much walking the group can handle and what could ruin the day.
          </p>
          <LastUpdated />
        </header>

        <section className="direct-answer" aria-labelledby="things-direct-answer">
          <p className="eyebrow">Direct answer</p>
          <div id="things-direct-answer">
            <p>
              The best things to do in the Smokies depend on your group and route. Families often need Pigeon Forge anchors. Gatlinburg works best when you park once and walk. Scenic days fit Cades Cove, Roaring Fork, Foothills Parkway or NC-side routes only after current-status checks.
            </p>
          </div>
        </section>

        <section className="destination-section guide-card-section" aria-labelledby="best-by-situation">
          <div className="destination-heading">
            <p className="eyebrow">Best by situation</p>
            <h2 id="best-by-situation">Choose the thing to do by the day you are actually building</h2>
          </div>
          <div className="destination-grid">
            {situationPicks.map((pick) => (
              <Link className="destination-card router-card" href={pick.href} key={pick.title}>
                <h3>{pick.title}</h3>
                <p className="router-detail"><strong>Best fit</strong>{pick.bestFit}</p>
                <p className="router-detail"><strong>Weak fit / skip if</strong>{pick.weakFit}</p>
                <p className="router-detail"><strong>Parking or movement note</strong>{pick.movement}</p>
                <p className="router-detail router-next"><strong>Nearby pairing</strong>{pick.pairing}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="destination-section comparison-section" aria-labelledby="town-side-comparison">
          <div className="destination-heading">
            <p className="eyebrow">Town and side comparison</p>
            <h2 id="town-side-comparison">Tennessee side vs North Carolina side, by planning logic</h2>
          </div>
          <div className="comparison-table-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th scope="col">Area</th>
                  <th scope="col">Best fit</th>
                  <th scope="col">Weak fit / caution</th>
                </tr>
              </thead>
              <tbody>
                {townComparison.map(([area, bestFit, caution]) => (
                  <tr key={area}>
                    <th scope="row">{area}</th>
                    <td data-label="Best fit">{bestFit}</td>
                    <td data-label="Weak fit / caution">{caution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="destination-section quick-answer-panel" aria-labelledby="rainy-day-options">
          <div className="destination-heading">
            <p className="eyebrow">Rainy day options</p>
            <h2 id="rainy-day-options">Best rainy-day moves are picked by town, not panic</h2>
          </div>
          <div className="destination-grid">
            {rainyDayOptions.map(([title, bestFit, caution]) => (
              <article className="destination-card" key={title}>
                <h3>{title}</h3>
                <p className="router-detail"><strong>Best fit</strong>{bestFit}</p>
                <p className="router-detail"><strong>Source/status caution</strong>{caution}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="destination-section warning-section" aria-labelledby="things-mistakes">
          <div className="destination-heading">
            <p className="eyebrow">Common mistakes</p>
            <h2 id="things-mistakes">What to avoid when choosing Smokies things to do</h2>
          </div>
          <article className="destination-card">
            <ul className="area-list">
              {commonMistakes.map((mistake) => (
                <li key={mistake}>{mistake}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="seo-faq-panel" aria-labelledby="things-faq-title">
          <p className="eyebrow">Things to do FAQ</p>
          <h2 id="things-faq-title">Questions visitors ask before choosing attractions</h2>
          <div className="seo-faq-list">
            {thingsToDoFaqs.map((item) => (
              <article key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="destination-section next-step-panel">
          <div className="destination-heading">
            <p className="eyebrow">Next steps</p>
            <h2>Turn the category into a usable day</h2>
          </div>
          <nav className="destination-link-grid router-link-grid" aria-label="Things to do related guides">
            <Link href="/start-planning"><span>Need a custom route?</span><strong>Build My Smokies Day Plan</strong></Link>
            <Link href="/smokies-parking-trolley-guide"><span>Worried about movement?</span><strong>Read Parking and Trolley Guide</strong></Link>
            <Link href="/rainy-day"><span>Weather may shift?</span><strong>Open Rainy Day Guide</strong></Link>
            <Link href="/what-to-skip"><span>Protect the day?</span><strong>Read What to Skip</strong></Link>
          </nav>
        </section>

        <SourceBox text="Source note: This page uses the site research documents and Smokies data layer for planning guidance. Hours, prices, road status and availability can change. Check official sources before you go." />
      </article>
      <JsonLd data={webPageSchema({
        path: "/things-to-do",
        title: "Best Things to Do in the Smokies by Situation",
        description: metadata.description ?? "",
      })} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Things To Do", url: "/things-to-do" }])} />
      <JsonLd data={faqSchema(thingsToDoFaqs)} />
      <JsonLd data={itemListSchema({
        path: "/things-to-do",
        name: "Best Things to Do in the Smokies by Situation",
        description: metadata.description ?? "",
        items: itemList,
      })} />
      <SiteFooter />
    </main>
  );
}
