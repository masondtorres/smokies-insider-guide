import Link from "next/link";
import type { Category } from "@/data/cards";
import { cardsFor, categoryInfo } from "@/data/cards";
import { GuideCard } from "./guide-card";

type DecisionRow = {
  situation: string;
  move: string;
  check: string;
};

type ResourceLink = {
  href: string;
  title: string;
  description: string;
  external?: boolean;
};

type PageHelp = {
  heading: string;
  note: string;
  planAction: string;
  decisionHeading: string;
  decisions: DecisionRow[];
  links: ResourceLink[];
  official: ResourceLink[];
};

const navigation: Array<[string, string, Category | "my-plan"]> = [
  ["Go", "/go", "go"],
  ["Do", "/do", "do"],
  ["See", "/see", "see"],
  ["Eat", "/eat", "eat"],
  ["Stay", "/stay", "stay"],
  ["Deals", "/deals", "deals"],
  ["My Plan", "/my-plan", "my-plan"],
];

const footerLinks = [
  ["About", "/about"],
  ["Contact", "/contact"],
  ["Advertise", "/advertise"],
  ["Affiliate Disclosure", "/affiliate-disclosure"],
  ["Privacy", "/privacy"],
  ["Terms", "/terms"],
  ["Editorial Policy", "/editorial-policy"],
  ["Source & Verification", "/source-and-verification-policy"],
];

const npsConditions: ResourceLink = {
  href: "https://www.nps.gov/grsm/planyourvisit/conditions.htm",
  title: "National park current conditions",
  description: "Check active road, trail, facility and weather-related changes.",
  external: true,
};

const npsParking: ResourceLink = {
  href: "https://www.nps.gov/grsm/planyourvisit/fees.htm",
  title: "National park parking tags",
  description: "Confirm current tag rules, prices, purchase options and display requirements.",
  external: true,
};

const pageHelp: Record<Category, PageHelp> = {
  go: {
    heading: "Start with the area",
    note: "Traffic and parking decide more Smokies days than people expect. Pick the area first, then build the day around it.",
    planAction: "Add routes and parking to My Plan",
    decisionHeading: "Choose the movement plan before the attractions",
    decisions: [
      {
        situation: "Your main day is inside the national park",
        move: "Choose one park area, download the route and settle the parking-tag question before leaving reliable service.",
        check: "Current conditions, road access, daylight, parking rules and one legal backup.",
      },
      {
        situation: "Most of the day is in Gatlinburg",
        move: "Choose one parking zone or park-and-ride option, then walk or use the trolley instead of moving the car for every stop.",
        check: "Current trolley routes, operating hours, lot availability, hills and the return walk.",
      },
      {
        situation: "Most of the day is in Pigeon Forge",
        move: "Keep the main activity, meal and backup in one Parkway section or use the trolley when the route fits.",
        check: "Current routes, fares, stop locations, parking and repeated Parkway crossings.",
      },
    ],
    links: [
      { href: "/go/parking", title: "Parking guide", description: "Build the first parking choice and backup before leaving." },
      { href: "/smokies-parking-trolley-guide", title: "Parking and trolley guide", description: "Compare town and park transportation options." },
    ],
    official: [
      npsConditions,
      npsParking,
      {
        href: "https://www.gatlinburg.com/things-to-do/trolley/",
        title: "Official Gatlinburg trolley information",
        description: "Verify routes, hours and park-and-ride information.",
        external: true,
      },
      {
        href: "https://www.mypigeonforge.com/planning/getting-around/mass-transit-trolley/",
        title: "Official Pigeon Forge trolley information",
        description: "Verify routes, fares, stops and parking information.",
        external: true,
      },
    ],
  },
  do: {
    heading: "Pick one main thing",
    note: "One anchor activity is enough. Add food and a backup nearby instead of stacking the day too tight.",
    planAction: "Add an activity to My Plan",
    decisionHeading: "Build the day around one anchor",
    decisions: [
      {
        situation: "You are traveling with children",
        move: "Choose one main attraction, then place food, rest and a weather backup close to it.",
        check: "Height limits, age fit, stroller rules, parking, wait expectations and re-entry rules.",
      },
      {
        situation: "Rain is possible",
        move: "Keep one flexible indoor anchor in the same town rather than crossing the full visitor corridor.",
        check: "Hours, reservation rules, cancellation terms, parking and whether everyone can participate.",
      },
      {
        situation: "The park is the main activity",
        move: "Match the route or trail to the group’s real ability and leave enough daylight to turn around safely.",
        check: "Trail and road conditions, weather, water, footwear, parking and a backup trail or stop.",
      },
    ],
    links: [
      { href: "/rainy-day", title: "Rainy-day backup", description: "Keep one useful indoor plan ready before weather changes." },
      { href: "/free-and-cheap-smokies", title: "Free and cheap ideas", description: "Build a lower-cost day without filling every hour." },
    ],
    official: [npsConditions, npsParking],
  },
  see: {
    heading: "Match the view to the day",
    note: "Views depend on weather, road access and crowds. Keep scenic stops close to the route you are already using.",
    planAction: "Add a scenic stop to My Plan",
    decisionHeading: "Choose scenery that fits the route",
    decisions: [
      {
        situation: "Cades Cove is the priority",
        move: "Treat the loop as the main event and keep the rest of the day light.",
        check: "Road access, vehicle schedules, daylight, parking tags, weather and slow traffic.",
      },
      {
        situation: "You want a high-elevation view",
        move: "Keep the timing flexible because mountain visibility and road conditions can change quickly.",
        check: "Current road status, weather, temperature, parking and visibility before committing the day.",
      },
      {
        situation: "You want a waterfall or short trail",
        move: "Allow more time than the map suggests and choose a route that matches the slowest person in the group.",
        check: "Trail conditions, wet surfaces, stream levels, parking, footwear and daylight.",
      },
    ],
    links: [
      { href: "/cades-cove", title: "Cades Cove planner", description: "Use this when the loop is the main event." },
      { href: "/visitor-resources", title: "Official park resources", description: "Open the park links that can change the day." },
    ],
    official: [
      npsConditions,
      {
        href: "https://www.nps.gov/grsm/planyourvisit/maps.htm",
        title: "National park maps",
        description: "Review official maps for roads, scenic areas, waterfalls and facilities.",
        external: true,
      },
      npsParking,
    ],
  },
  eat: {
    heading: "Choose the meal area first",
    note: "Do not cross town hungry. Pick the area and timing first, then choose the restaurant.",
    planAction: "Add a meal area to My Plan",
    decisionHeading: "Protect the day from the hungry-hour scramble",
    decisions: [
      {
        situation: "You are already parked in Gatlinburg",
        move: "Choose a meal within the walking zone instead of moving the car and starting the parking problem again.",
        check: "The return walk, wait expectations, mobility needs, current menu and closing time.",
      },
      {
        situation: "You are spending the day in Pigeon Forge",
        move: "Pick the meal near the main attraction and consider an earlier or later meal window.",
        check: "Traffic direction, parking, group size, current hours and whether reservations are accepted.",
      },
      {
        situation: "Your group is large or has allergy needs",
        move: "Call the restaurant directly before building the day around it.",
        check: "Seating, allergy procedures, current menu, accessibility, parking and reservation policy.",
      },
    ],
    links: [
      { href: "/eat/family-friendly", title: "Family food plan", description: "Plan the meal area, timing and backup for the whole group." },
      { href: "/my-plan", title: "Save the meal area", description: "Keep the first choice and backup with the rest of the day." },
    ],
    official: [
      {
        href: "https://www.gatlinburg.com/food-and-drink/",
        title: "Official Gatlinburg dining directory",
        description: "Use the destination directory as a starting point, then verify directly with the restaurant.",
        external: true,
      },
      {
        href: "https://www.mypigeonforge.com/restaurants/",
        title: "Official Pigeon Forge restaurant directory",
        description: "Compare restaurants by area, then verify current details directly.",
        external: true,
      },
    ],
  },
  stay: {
    heading: "Choose the base area",
    note: "The best place to stay depends on what you will do most, not just the room or cabin price.",
    planAction: "Add a base area to My Plan",
    decisionHeading: "Choose the base before the property",
    decisions: [
      {
        situation: "Attractions and restaurants are the priority",
        move: "Favor the town that holds most of the itinerary so the group spends less time crossing the corridor.",
        check: "Drive time at busy hours, parking, walkability, room access and total price.",
      },
      {
        situation: "Park access and a slower trip are the priority",
        move: "Compare Townsend, Wears Valley or another quieter base against the exact park areas on the plan.",
        check: "Real drive times, grocery access, road conditions, late arrival and emergency access.",
      },
      {
        situation: "You are booking a cabin",
        move: "Treat the road and booking terms as part of the property, not fine print after the decision.",
        check: "Road grade, pavement, parking, stairs, weather access, total fees, cancellation and accessibility.",
      },
    ],
    links: [
      { href: "/stay/cabins", title: "Cabin stay planner", description: "Check access, roads, fees and booking terms before reserving." },
      { href: "/where-to-stay-in-the-smokies-by-trip-type", title: "Where to stay by trip type", description: "Match the base area to the trip you are actually taking." },
    ],
    official: [
      {
        href: "https://visitsevierville.com/Official-Guide-to-Sevierville.aspx",
        title: "Official Sevierville visitor guide",
        description: "Review the area before deciding whether Sevierville fits the trip base.",
        external: true,
      },
      npsConditions,
    ],
  },
  deals: {
    heading: "Save money without chasing junk",
    note: "Start with a budget. Verify every offer before you build the day around it.",
    planAction: "Add a budget limit to My Plan",
    decisionHeading: "Make the budget control the deal",
    decisions: [
      {
        situation: "You want a paid attraction day",
        move: "Set the total day limit first, then choose the one attraction worth protecting.",
        check: "Taxes, parking, food, add-ons, expiration dates, blackout dates and refund terms.",
      },
      {
        situation: "You found a coupon or package",
        move: "Verify it directly with the business before changing the route or buying around it.",
        check: "Eligible dates, required purchase, exclusions, reservation rules and final checkout price.",
      },
      {
        situation: "You need a lower-cost day",
        move: "Pair one optional paid anchor with a scenic drive, picnic, cabin block or free town walk.",
        check: "Parking tags, gas, food, weather, legal stopping areas and hidden add-ons.",
      },
    ],
    links: [
      { href: "/free-and-cheap-smokies", title: "Free and cheap guide", description: "Build a useful lower-cost day before checking offers." },
      { href: "/parking-timing-cheat-sheet", title: "Parking and timing cheat sheet", description: "Avoid wasting the budget on preventable driving and parking mistakes." },
    ],
    official: [npsParking, npsConditions],
  },
};

function ResourceCard({ resource }: { resource: ResourceLink }) {
  const content = (
    <>
      <strong>{resource.title}</strong>
      <span>{resource.description}</span>
      <b>{resource.external ? "Open official source" : "Open guide"} <span aria-hidden="true">&gt;</span></b>
    </>
  );

  return resource.external ? (
    <a href={resource.href} key={resource.href}>{content}</a>
  ) : (
    <Link href={resource.href} key={resource.href}>{content}</Link>
  );
}

export function CategoryPage({ category }: { category: Category }) {
  const info = categoryInfo[category];
  const categoryCards = cardsFor(category);
  const help = pageHelp[category];

  return (
    <div className={`category-foundation category-${category}`}>
      <header className="category-header">
        <Link className="category-wordmark" href="/">Smoky Insider</Link>
        <nav className="category-nav" aria-label="Primary navigation">
          {navigation.map(([label, href, key]) => (
            <Link aria-current={key === category ? "page" : undefined} href={href} key={href}>
              {label}
            </Link>
          ))}
        </nav>
      </header>

      <main>
        <section className="category-hero">
          <div className="category-ridge category-ridge-back" aria-hidden="true" />
          <div className="category-ridge category-ridge-front" aria-hidden="true" />
          <div className="category-width category-hero-inner simple">
            <div className="category-hero-copy">
              <p className="category-eyebrow">Smoky Insider</p>
              <h1>{info.title}</h1>
              <p>{info.intro}</p>
            </div>
          </div>
        </section>

        <section className="category-width category-content" aria-labelledby="category-starters">
          <div className="category-section-heading simple">
            <div>
              <p className="category-eyebrow">Choose one starting point</p>
              <h2 id="category-starters">{help.heading}</h2>
            </div>
            <p>{help.note}</p>
          </div>

          {categoryCards.length > 0 ? (
            <div className="category-card-grid simple">
              {categoryCards.map((card, index) => (
                <GuideCard card={card} index={index + 1} key={card.id} />
              ))}
            </div>
          ) : null}

          <section className="category-decision-section" aria-labelledby={`${category}-decision-heading`}>
            <div className="category-decision-heading">
              <p className="category-eyebrow">Decision guide</p>
              <h2 id={`${category}-decision-heading`}>{help.decisionHeading}</h2>
              <p>Use the row closest to your trip. Keep the move simple, then verify the changing detail before leaving.</p>
            </div>
            <div className="category-decision-grid">
              {help.decisions.map((row) => (
                <article key={row.situation}>
                  <h3>{row.situation}</h3>
                  <p><strong>Best move:</strong> {row.move}</p>
                  <p><strong>Check first:</strong> {row.check}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="category-utility-guides simple" aria-label="Helpful guides">
            <div>
              <p className="category-eyebrow">Helpful guides</p>
              <h2>Use this next</h2>
            </div>
            {help.links.map((link) => <ResourceCard resource={link} key={link.href} />)}
          </section>

          <section className="category-official-sources" aria-labelledby={`${category}-official-heading`}>
            <div>
              <p className="category-eyebrow">Verify before you leave</p>
              <h2 id={`${category}-official-heading`}>Open the source that can change the plan</h2>
            </div>
            <div className="category-official-grid">
              {help.official.map((resource) => <ResourceCard resource={resource} key={resource.href} />)}
            </div>
          </section>

          <aside className="category-trust-note simple">
            <strong>Finish the plan</strong>
            <p>Save the anchor, first parking choice, meal area and backup together so the next decision is clear when the day changes.</p>
            <Link href="/my-plan">{help.planAction} <span aria-hidden="true">&gt;</span></Link>
          </aside>
        </section>
      </main>

      <footer className="category-footer">
        <div>
          <strong>Smoky Insider</strong>
          <span>© 2026 Smoky Insider. Veteran-owned, independent Smoky Mountains trip planning.</span>
        </div>
        <nav className="category-footer-links" aria-label="Policy and information links">
          {footerLinks.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
        </nav>
      </footer>
    </div>
  );
}
