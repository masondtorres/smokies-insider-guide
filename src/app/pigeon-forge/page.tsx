import type { Metadata } from "next";
import { GuidePage, type GuidePageData } from "@/components/guide";

export const metadata: Metadata = {
  title: "Pigeon Forge Trip Planning Guide",
  description:
    "A practical Pigeon Forge guide for Parkway traffic, Dollywood days, family attractions, shows and realistic daily pacing.",
  alternates: { canonical: "/pigeon-forge" },
  openGraph: {
    title: "Pigeon Forge Trip Planning Guide | Smoky Insider",
    description:
      "Plan Pigeon Forge around one major anchor, Parkway traffic and the energy level of the whole group.",
    url: "/pigeon-forge",
  },
};

const page: GuidePageData = {
  title: "Pigeon Forge without overpacking the day",
  description:
    "Pigeon Forge is the strongest base for Dollywood, family attractions, shows and a wide range of indoor options. The mistake is treating the Parkway like one compact strip where every attraction can be added without a traffic or energy cost.",
  directAnswer:
    "Choose Pigeon Forge when paid attractions, Dollywood or evening shows are the center of the trip. Build the day around one timed anchor, keep nearby stops together and protect meal and rest breaks before adding anything else.",
  bestFor: [
    "Families and mixed-age groups that want many attraction choices",
    "Dollywood-centered trips",
    "Visitors who want shows, shopping and rainy-day options nearby",
    "Groups that prefer driving between activity zones instead of walking downtown",
  ],
  skipIf: [
    "Your trip is mainly about national park trails and scenery",
    "You want a quiet base with minimal commercial traffic",
    "You expect to walk the full Parkway between attractions",
    "You plan to stack Dollywood, a major show and several paid attractions into one day",
  ],
  sections: [
    {
      title: "Choose one major anchor",
      body: "Start with Dollywood, a major attraction or an evening show. Put its arrival time, parking, meal needs and exit time on the day first. Everything else is optional until that anchor fits comfortably.",
    },
    {
      title: "Do not treat the Parkway as walkable downtown",
      body: "Pigeon Forge attractions can look close on a map while remaining impractical to reach on foot. Wide roads, long blocks and traffic patterns make the car or trolley part of the plan. Group stops by area instead of moving north and south repeatedly.",
    },
    {
      title: "Give Dollywood the day it requires",
      body: "A Dollywood day does not need a large attraction list afterward. Arrival, parking, walking, meals and the park itself already create a full schedule for most families. Add dinner only when the group still has energy.",
    },
    {
      title: "Protect meals and breaks",
      body: "Pigeon Forge offers enough choices to make overplanning easy. Children and mixed-age groups usually handle one big attraction better when meals and rest are protected. A tired group does not recover because another prepaid ticket is waiting.",
    },
    {
      title: "Use a show as the evening anchor",
      body: "Build backward from the showtime. Decide whether the group will eat before or after, confirm the parking plan and leave more transition time than the map suggests. Avoid placing a distant park outing immediately before a fixed evening reservation.",
    },
    {
      title: "Keep the rainy-day backup close",
      body: "Rain pushes more visitors toward indoor attractions and shopping. Choose a backup near the part of the Parkway already in your plan. Crossing town in traffic to chase a shorter wait usually wastes more time than it saves.",
    },
  ],
  links: [
    {
      title: "Gatlinburg or Pigeon Forge",
      description: "Compare the two main Tennessee-side bases before booking.",
      href: "/gatlinburg-vs-pigeon-forge",
    },
    {
      title: "Smokies parking and trolley guide",
      description: "Use the Patriot Park hub and other named transportation options.",
      href: "/smokies-parking-trolley-guide",
    },
    {
      title: "Where to stay",
      description: "Choose a base by the main day, not by the best cabin photograph.",
      href: "/where-to-stay",
    },
    {
      title: "Rainy-day planning",
      description: "Build a nearby indoor backup without driving across the county.",
      href: "/rainy-day",
    },
    {
      title: "Build a trip",
      description: "Turn your group, pace and priorities into a starter plan.",
      href: "/start-planning",
    },
  ],
  sources: [
    {
      title: "Pigeon Forge mass transit and trolley information",
      href: "https://www.mypigeonforge.com/planning/getting-around/mass-transit-trolley/",
    },
    {
      title: "Great Smoky Mountains National Park current conditions",
      href: "https://www.nps.gov/grsm/planyourvisit/conditions.htm",
    },
    {
      title: "National park parking tags",
      href: "https://www.nps.gov/grsm/planyourvisit/fees.htm",
    },
  ],
  reviewedOn: "July 2026",
  reviewedOnIso: "2026-07-22",
};

export default function PigeonForgePage() {
  return <GuidePage page={page} path="/pigeon-forge" />;
}
