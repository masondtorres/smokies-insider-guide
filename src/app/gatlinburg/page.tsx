import type { Metadata } from "next";
import { GuidePage, type GuidePageData } from "@/components/guide";

export const metadata: Metadata = {
  title: "Gatlinburg Trip Planning Guide",
  description:
    "A practical Gatlinburg guide for choosing it as a base, handling downtown parking, limiting walking and pairing the town with the national park.",
  alternates: { canonical: "/gatlinburg" },
  openGraph: {
    title: "Gatlinburg Trip Planning Guide | Smoky Insider",
    description:
      "Use Gatlinburg for walkability and park access without letting parking, crowds or an overloaded day ruin the trip.",
    url: "/gatlinburg",
  },
};

const page: GuidePageData = {
  title: "Gatlinburg without wasting the day",
  description:
    "Gatlinburg is the strongest Tennessee-side base for walkable downtown time and quick access to the national park. It is also the easiest town to make miserable by arriving without a parking decision or expecting every stop to fit into one afternoon.",
  directAnswer:
    "Choose Gatlinburg when downtown walkability and national park access matter more than quiet roads or easy parking. Park once, keep the day inside one zone and do not combine a full downtown day with a full Pigeon Forge or Cades Cove day.",
  bestFor: [
    "First-time visitors who want a recognizable Smokies base",
    "Couples and families who prefer to park once and walk",
    "Trips centered on the Gatlinburg side of the national park",
    "A day built around downtown, one meal area and one major attraction",
  ],
  skipIf: [
    "Your group cannot comfortably handle hills, crowds or extended walking",
    "Most of your paid attractions are in Pigeon Forge",
    "You want the quietest or easiest-driving base",
    "Your plan depends on finding cheap parking beside every stop",
  ],
  sections: [
    {
      title: "Make the parking decision before entering downtown",
      body: "Do not begin the day by circling the Parkway while everyone argues about where to stop. Use a city garage when keeping the car close matters. Use a park-and-ride and the trolley when avoiding downtown traffic matters more. The correct choice depends on your group, not on whichever lot appears first.",
    },
    {
      title: "Treat downtown as one zone",
      body: "Once parked, keep the main part of the day within a reasonable walking area. Gatlinburg becomes exhausting when visitors repeatedly return to the car, cross town for one attraction, then fight traffic back for dinner.",
    },
    {
      title: "Plan for the least mobile person",
      body: "Gatlinburg is walkable, but it is not flat, empty or effortless. Hills, stairs, crowded sidewalks and the distance back to the vehicle matter. Build the route around the slowest walker, the stroller or the person who needs regular seating.",
    },
    {
      title: "Use the national park as a separate anchor",
      body: "A focused park stop can pair well with Gatlinburg. A full park day should remain a park day. Check road conditions, parking-tag rules and weather before leaving town, then resist the urge to force a complete downtown attraction list into the same schedule.",
    },
    {
      title: "Do not bolt on a full Pigeon Forge day",
      body: "Gatlinburg and Pigeon Forge are close on a map. The drive, parking and transition between them can still consume the best hours. Choose one town as the main day and use the other only for one deliberate stop when the route supports it.",
    },
    {
      title: "Keep a rain plan in the same area",
      body: "Rain moves visitors indoors and can increase waits. Choose one indoor anchor and one nearby meal option before the weather changes. Driving around the county looking for an empty attraction is not a backup plan.",
    },
  ],
  links: [
    {
      title: "Smokies parking and trolley guide",
      description: "Choose a named lot, trolley option and backup before arrival.",
      href: "/smokies-parking-trolley-guide",
    },
    {
      title: "Gatlinburg or Pigeon Forge",
      description: "Compare the two main Tennessee-side bases directly.",
      href: "/gatlinburg-vs-pigeon-forge",
    },
    {
      title: "First trip to the Smokies",
      description: "Build the region and daily order before buying more tickets.",
      href: "/first-time-smokies",
    },
    {
      title: "Rainy-day planning",
      description: "Keep the backup close to the area already in your plan.",
      href: "/rainy-day",
    },
    {
      title: "Build a trip",
      description: "Use your group, pace and priorities to shape the day.",
      href: "/start-planning",
    },
  ],
  sources: [
    {
      title: "Great Smoky Mountains National Park current conditions",
      href: "https://www.nps.gov/grsm/planyourvisit/conditions.htm",
    },
    {
      title: "National park parking tags",
      href: "https://www.nps.gov/grsm/planyourvisit/fees.htm",
    },
    {
      title: "City of Gatlinburg parking information",
      href: "https://www.gatlinburgtn.gov/page/parking",
    },
  ],
  reviewedOn: "July 2026",
  reviewedOnIso: "2026-07-22",
};

export default function GatlinburgPage() {
  return <GuidePage page={page} path="/gatlinburg" />;
}
