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
    title: "Rainy day",
    bestFit: "Indoor categories such as WonderWorks, Ripley's-style indoor options, arcades, covered shopping and food-first resets.",
    weakFit: "Trying to rescue a full outdoor itinerary in bad weather.",
    mainIdea: "Pick one indoor anchor by town, then keep food and the backup nearby.",
    movement: "Rain makes short drives feel longer around busy corridors.",
    pairing: "Rainy-day guide, Pigeon Forge or Gatlinburg things to do.",
    caution: "Check current hours, prices and availability before relying on a specific attraction.",
    href: "/rainy-day",
  },
  {
    title: "Family with kids",
    bestFit: "Pigeon Forge Parkway anchors, Dollywood as a full-day plan, WonderWorks, The Island or Parrot Mountain when the route fits.",
    weakFit: "A packed park-and-attraction day with no food reset.",
    mainIdea: "Choose one kid anchor and one meal before adding smaller stops.",
    movement: "Pick one anchor and keep the meal nearby.",
    pairing: "Pigeon Forge restaurants, rainy-day guide or deals page.",
    caution: "Attraction hours, prices and availability can change.",
    href: "/pigeon-forge-with-kids",
  },
  {
    title: "Toddlers / stroller",
    bestFit: "Short blocks, food timing, indoor backup and stops that do not depend on long trail walking.",
    weakFit: "A plan that assumes every paved or family-friendly stop is stroller-simple.",
    mainIdea: "Build around nap windows, easy exits and one nearby reset.",
    movement: "Parking, surfaces and bathrooms matter more than a long list of attractions.",
    pairing: "Smokies with toddlers, rainy-day guide and parking/trolley guide.",
    caution: "Verify surfaces, access and bathrooms for the exact stop before relying on it.",
    href: "/smokies-with-toddlers",
  },
  {
    title: "Grandparents / low walking",
    bestFit: "Scenic drives, overlooks, visitor-center-style stops, seated attractions and easy meals.",
    weakFit: "Any stop described as easy without verified parking, surface and bathroom details.",
    mainIdea: "Plan parking, bathrooms, benches and short stops first.",
    movement: "Plan parking, bathrooms and short stops before picking the attraction.",
    pairing: "Accessible Smokies, scenic drives and parking/trolley guide.",
    caution: "Accessibility varies by exact stop. Check official sources before you go.",
    href: "/accessible-smokies",
  },
  {
    title: "Budget / free or cheap",
    bestFit: "Scenic drives, overlooks, town walks, visitor centers and one paid stop only if it earns the time.",
    weakFit: "Coupon-chasing across Gatlinburg, Pigeon Forge and Sevierville.",
    mainIdea: "Start with a free scenic or town anchor, then add one paid category only if it clearly fits.",
    movement: "Savings disappear if the discount sends the group across town.",
    pairing: "Deals, what to skip and scenic drives.",
    caution: "Parking, tags, food and add-ons can still affect a low-budget day.",
    href: "/deals",
  },
  {
    title: "First-time visitors",
    bestFit: "One town anchor, one scenic piece and one flexible backup from Gatlinburg or Pigeon Forge.",
    weakFit: "A four-town sampler that tries to include Gatlinburg, Pigeon Forge, Cades Cove and Dollywood in one day.",
    mainIdea: "Choose the base and day shape before buying tickets.",
    movement: "Do not cross town twice if traffic, parking or tired kids are already the problem.",
    pairing: "First-time Smokies, Gatlinburg vs Pigeon Forge and start-planning.",
    caution: "Use this page for planning direction, then verify current details.",
    href: "/first-time-smokies",
  },
  {
    title: "Scenic or national park day",
    bestFit: "Cades Cove, Roaring Fork Motor Nature Trail, Foothills Parkway, Sugarlands Visitor Center, Kuwohi/Newfound Gap or NC-side routes after status checks.",
    weakFit: "A fixed-schedule attraction day with no room for slow roads.",
    mainIdea: "Pick one scenic route and give it real time.",
    movement: "Download maps and verify official road, weather and closure status before park routes.",
    pairing: "Cades Cove, scenic drives and parking tag guidance.",
    caution: "Road, weather and park conditions can change.",
    href: "/scenic-drives",
  },
  {
    title: "Paid attraction anchor",
    bestFit: "Dollywood, Anakeesta, Ober Mountain, The Island, WonderWorks, Ripley's categories or dinner-show style evenings when treated as the main plan.",
    weakFit: "Stacking several paid anchors because they all sound good.",
    mainIdea: "Make the paid anchor the main event, not another add-on.",
    movement: "Paid anchors work best when everything else supports that one choice.",
    pairing: "Dollywood day plan, Pigeon Forge things to do or Gatlinburg things to do.",
    caution: "Check official sources for hours, prices and availability.",
    href: "/things-to-do/pigeon-forge",
  },
  {
    title: "Crowd-sensitive day",
    bestFit: "Townsend, Wears Valley, scenic routes, earlier starts and plans with fewer parking changes.",
    weakFit: "Peak-window downtown or Parkway plans with a scattered wish list.",
    mainIdea: "Reduce the number of stops before trying to solve crowds with timing.",
    movement: "Cades Cove and popular overlooks can still draw crowds, so give the route room.",
    pairing: "Townsend, Cades Cove and scenic drives.",
    caution: "Crowd and road conditions can change. Check official sources before park routes.",
    href: "/townsend",
  },
  {
    title: "NC-side day",
    bestFit: "Cherokee, Bryson City, Deep Creek, Cataloochee-style planning and same-side scenic or food stops.",
    weakFit: "A Dollywood-heavy or Pigeon Forge-heavy day that treats the NC side as a quick add-on.",
    mainIdea: "Give the NC side its own route logic instead of mixing it into a packed TN-side plan.",
    movement: "Cross-mountain roads, weather and current conditions matter before routing between sides.",
    pairing: "Where to stay, scenic drives and accessible Smokies.",
    caution: "Check official sources before relying on current road or park status.",
    href: "/where-to-stay",
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
  ["Townsend", "Cades Cove, slower scenic days and quiet-side park access.", "Weak fit for heavy nightlife or attraction-stacking."],
  ["Wears Valley", "Cabins, views, Foothills Parkway access and slower route logic.", "Weak fit if the group needs walkability or quick access to every attraction."],
  ["Cherokee", "NC-side park access, elk-style planning and a different Smokies route.", "Weak fit for a Pigeon Forge or Dollywood-centered day."],
  ["Bryson City", "Deep Creek-style outings, NC-side scenery and same-side food/rest plans.", "Weak fit as a quick add-on to a TN-heavy attraction day."],
  ["Deep Creek", "Waterfall, creek and NC-side outdoor planning after current-condition checks.", "Weak fit if the day is already packed on the Tennessee side."],
  ["Cataloochee", "Elk/scenic planning from the NC side with cautious status checks.", "Weak fit as a casual side trip from Pigeon Forge or Gatlinburg."],
];

const attractionOptions = [
  ["Cades Cove", "Slow scenic park day, Townsend base, wildlife/history interest and visitors who can give the loop real time.", "Skip as a quick add-on between Dollywood and dinner.", "Slow roads and pull-offs can stretch the day.", "Townsend, Wears Valley or a simple scenic day.", "Check official road, schedule and condition details before you go."],
  ["Roaring Fork Motor Nature Trail", "Gatlinburg-based scenic drive plans when conditions fit.", "Skip if narrow, slow road pacing is a bad fit for the group.", "Treat it as a route, not a quick downtown detour.", "Gatlinburg food, Sugarlands or a lighter park-side reset.", "Verify current road status before routing."],
  ["Sugarlands Visitor Center", "First-time park orientation, lower-pressure reset or scenic-day pairing.", "Skip if the group expects a full paid-attraction experience.", "Useful as a same-side reset near Gatlinburg/Sugarlands plans.", "Gatlinburg, Roaring Fork or scenic-drive plans.", "Check current hours/status with official sources."],
  ["Sugarlands Valley Nature Trail", "Low-walking nature option when access and conditions fit.", "Skip if exact accessibility needs are not verified.", "Plan parking, surfaces and bathrooms before relying on it.", "Accessible Smokies and Sugarlands-area plans.", "Verify current access and official accessibility details."],
  ["Dollywood", "Pigeon Forge attraction day and families who want a full paid anchor.", "Skip as a small add-on after multiple other tickets.", "Treat it as the main event with nearby food/rest.", "Pigeon Forge meals or one light Parkway add-on.", "Check official hours, prices and availability."],
  ["Anakeesta", "Gatlinburg paid attraction category when it fits energy, budget and weather.", "Skip if the group needs guaranteed low-cost or low-walking certainty.", "Best planned as one paid category near a Gatlinburg day.", "Gatlinburg food, walking route or indoor backup.", "Check official hours, prices and current attraction details."],
  ["The Island", "Pigeon Forge family/food/shopping anchor or lighter add-on.", "Skip if it becomes one more paid stop in an overloaded Parkway day.", "Keep it in the same corridor as food or lodging.", "WonderWorks, Pigeon Forge meals or rainy-day categories.", "Check current hours, prices and availability."],
  ["WonderWorks", "Rainy-day or family indoor anchor near Pigeon Forge.", "Skip if the group really wants quiet park scenery.", "Use it as the indoor anchor, not part of a county-wide list.", "The Island, Pigeon Forge food or indoor mini golf/arcade categories.", "Check current hours, prices and availability."],
  ["Parrot Mountain", "Kid/family category when weather, route and energy still cooperate.", "Skip if the day is already full or weather makes it a poor fit.", "Use only if it replaces another add-on.", "Pigeon Forge or Dollywood-area planning.", "Check official sources before relying on current details."],
  ["Ober Mountain", "Gatlinburg paid category or seasonal/weather-sensitive mountain attraction planning.", "Skip if current weather or access details are not verified.", "Plan as one category near Gatlinburg, not a random extra.", "Gatlinburg strip, food and parking plan.", "Check official hours, prices, weather and availability."],
  ["Ripley's", "Gatlinburg indoor category for rainy-day or downtown plans.", "Skip if it pulls the group into a parking plan they cannot handle.", "Works best near a park-once Gatlinburg day.", "Gatlinburg food, shopping and indoor categories.", "Check official hours, prices and attraction availability."],
  ["Townsend", "Quiet-side base, Cades Cove and crowd-sensitive scenic days.", "Skip if the group wants constant entertainment or nightlife.", "Use fewer stops and a slower route.", "Cades Cove, Foothills Parkway and Wears Valley.", "Check park/road conditions before scenic plans."],
  ["Deep Creek", "NC-side outdoor or waterfall-style outing after current-condition checks.", "Skip as a casual add-on to a packed TN-side day.", "Keep food and backup on the NC side.", "Bryson City, Cherokee or same-side scenic routes.", "Check official status before you go."],
  ["Cataloochee", "NC-side elk/scenic planning when the route has room.", "Skip if road/weather uncertainty would break the day.", "Give the NC side its own plan.", "Cherokee, Bryson City or NC-side food/rest.", "Check official status and road conditions."],
  ["Cherokee", "NC-side park access and same-side route planning.", "Skip if the day is centered on Dollywood or Pigeon Forge.", "Do not mix casually into a full TN-side attraction day.", "Bryson City, Deep Creek or Cataloochee-style routes.", "Check current road and park status before crossing sides."],
  ["Bryson City", "NC-side base, Deep Creek-style outings and calmer same-side routing.", "Skip if the group wants Pigeon Forge entertainment as the main event.", "Keep the day on the NC side unless conditions make a crossing sensible.", "Deep Creek, Cherokee and NC-side food/rest.", "Check official sources before relying on current conditions."],
];

const commonMistakes = [
  "Trying to do Gatlinburg, Pigeon Forge, Cades Cove and Dollywood in one day.",
  "Treating Cades Cove as a quick add-on instead of a slow scenic outing.",
  "Crossing town twice when parking, traffic or tired kids are already the problem.",
  "Building a low-walking day without checking parking, bathrooms and surfaces.",
  "Skipping the rain backup until the day is already going sideways.",
  "Packing too many paid attractions into one day.",
  "Treating NC-side and TN-side plans as interchangeable.",
  "Relying on cell service or GPS in and around the park without a backup.",
  "Choosing attractions before choosing the group's real constraint.",
  "Relying on current hours, road status, trolley details or closure status without checking official sources.",
];

const thingsToDoFaqs = [
  {
    question: "What are the best things to do in the Smokies?",
    answer:
      "The best things to do depend on the group and route. Families often fit Pigeon Forge anchors. Walkable downtown plans fit Gatlinburg. Scenic days fit Cades Cove, Roaring Fork, Foothills Parkway or other park routes after current-status checks.",
  },
  {
    question: "What are the best things to do in the Smokies with kids?",
    answer:
      "Families usually do better with one strong anchor, nearby food and a backup. Pigeon Forge categories such as Dollywood, WonderWorks, The Island and Parrot Mountain can work when the route is tight and the day is not overloaded.",
  },
  {
    question: "What should families do in the Smokies when it rains?",
    answer:
      "Start with one indoor anchor such as WonderWorks, a Ripley's-style indoor category, arcades, covered shopping or food nearby. This page gives planning guidance, not live hours, prices or availability.",
  },
  {
    question: "What are the best low-walking things to do in the Smokies?",
    answer:
      "Low-walking groups should start with scenic drives, visitor centers, overlooks, seated categories and meals with realistic parking. Verify exact access, surfaces, bathrooms and current conditions before relying on a stop.",
  },
  {
    question: "Is Cades Cove worth it for a first-time visitor?",
    answer:
      "Cades Cove can be worth it when visitors give it real time and pair it with Townsend or a slower scenic day. It is a weak fit as a quick add-on between busy attraction plans.",
  },
  {
    question: "Are the Tennessee side and North Carolina side interchangeable?",
    answer:
      "No. Gatlinburg, Pigeon Forge, Sevierville, Townsend, Cherokee, Bryson City, Deep Creek and Cataloochee need different route logic. Do not casually mix NC-side trips into a packed TN-side attraction day.",
  },
  {
    question: "What should we skip if we only have one day?",
    answer:
      "Skip cross-town filler, stacked paid attractions, Cades Cove as a quick side stop and any plan that depends on unknown parking. Choose one area, one anchor, nearby food and one backup.",
  },
  {
    question: "How do we avoid wasting time in traffic?",
    answer:
      "Choose the base and anchor first, then keep food and backups near that route. Gatlinburg rewards a park-once plan, Pigeon Forge rewards corridor discipline and Townsend works better for slower park access.",
  },
  {
    question: "Do we need to check official sources before going?",
    answer:
      "Yes. This page gives planning guidance, not live status. Hours, prices, road status, closures, parking rules and availability can change. Check official sources before you go.",
  },
];

const itemList = [
  ...situationPicks.map((pick) => ({
    name: pick.title,
    url: pick.href,
    description: pick.bestFit,
  })),
  ...attractionOptions.map(([name, bestFor]) => ({
    name,
    description: bestFor,
  })),
];

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
                <p className="router-detail"><strong>Main idea</strong>{pick.mainIdea}</p>
                <p className="router-detail"><strong>Parking or movement note</strong>{pick.movement}</p>
                <p className="router-detail router-next"><strong>Nearby pairing</strong>{pick.pairing}</p>
                <p className="router-detail"><strong>Source/status caution</strong>{pick.caution}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="destination-section comparison-section attraction-table-section" aria-labelledby="attraction-category-table">
          <div className="destination-heading">
            <p className="eyebrow">Attraction and category decision table</p>
            <h2 id="attraction-category-table">Compare Smokies options by fit, not hype</h2>
          </div>
          <div className="comparison-table-wrap">
            <table className="comparison-table seo-wide-table">
              <thead>
                <tr>
                  <th scope="col">Option</th>
                  <th scope="col">Best for</th>
                  <th scope="col">Skip if</th>
                  <th scope="col">Movement/parking note</th>
                  <th scope="col">Pair with</th>
                  <th scope="col">Status caution</th>
                </tr>
              </thead>
              <tbody>
                {attractionOptions.map(([option, bestFor, skipIf, movement, pairWith, caution]) => (
                  <tr key={option}>
                    <th scope="row">{option}</th>
                    <td data-label="Best for">{bestFor}</td>
                    <td data-label="Skip if">{skipIf}</td>
                    <td data-label="Movement/parking note">{movement}</td>
                    <td data-label="Pair with">{pairWith}</td>
                    <td data-label="Status caution">{caution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
