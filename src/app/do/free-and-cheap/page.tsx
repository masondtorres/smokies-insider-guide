import type { Metadata } from "next";
import { UtilityPage, type UtilityPageData } from "@/components/utility-page";

export const metadata: Metadata = {
  title: "Free and Cheap Smokies Planning Guide",
  description: "Build a practical lower-cost Smokies day around one area, simple food and one optional paid anchor.",
};

const page: UtilityPageData = {
  category: "Do",
  categoryHref: "/do",
  title: "A lower-cost day that still feels complete",
  description: "Start with one area and one useful free or low-cost block, then decide whether a paid stop truly improves the day.",
  purpose: "Help visitors control the whole-day cost without relying on coupons, invented prices or a list of unverified businesses.",
  helps: [
    "You want a useful day without stacking several ticketed attractions.",
    "Your group can bring food, water or simple supplies for part of the day.",
    "You need a plan that can shrink when traffic, weather or energy changes.",
  ],
  sections: [
    { title: "Choose one area first", body: "Keep the park stop, town walk, meal and optional activity on the same side of the trip. A free stop can become expensive in time and fuel when it requires crossing several busy areas." },
    { title: "Count the whole day", body: "Include transportation, parking, food, supplies and optional add-ons when comparing plans. Great Smoky Mountains National Park does not charge an entrance fee, but vehicles parked longer than 15 minutes generally need a parking tag." },
    { title: "Use one free or simple anchor", body: "A scenic drive, approved picnic area, visitor-oriented stop or short walk can shape the day when current access and conditions fit. Check official schedules because some park roads, facilities and picnic areas operate seasonally." },
    { title: "Make the paid stop optional", body: "Choose at most one paid activity before leaving, then verify its full current cost and terms directly. Do not depend on a coupon, discount or advertised saving unless the responsible business confirms it for your visit." },
    { title: "Protect the food and parking plan", body: "Pack only what your group can manage safely, use designated parking and keep food secured. In park picnic areas, clean the table, grill and ground after eating and never feed wildlife." },
  ],
  family: "Give children one clear main event, food before the difficult part of the day and a small no-cost backup. A shorter successful outing is usually better than adding stops simply to fill time.",
  accessibility: "Free does not mean low-effort. Confirm walking distance, surfaces, restrooms and accessible parking for the exact stop, then keep a drive-based or seated alternative in the same area.",
  saveId: "utility-free-cheap-smokies",
  saveTitle: "Free and Cheap Smokies Plan",
  links: [
    { href: "/free-and-cheap-smokies", label: "Full budget guide", description: "Compare more lower-cost day shapes across the Smokies." },
    { href: "/go/parking", label: "Parking planning", description: "Handle park tags, legal spaces and backup parking first." },
    { href: "/see/cades-cove", label: "Cades Cove planner", description: "Decide whether the loop fits the day's time and traffic budget." },
    { href: "/do/rainy-day", label: "Rainy-day backup", description: "Keep a compact weather alternative ready." },
    { href: "/do", label: "More Do planning", description: "Compare another practical activity pattern." },
  ],
  sources: [
    { href: "https://www.nps.gov/grsm/planyourvisit/whynoentrancefee.htm", label: "NPS entrance and parking overview" },
    { href: "https://www.nps.gov/grsm/planyourvisit/fees.htm", label: "NPS parking tags" },
    { href: "https://www.nps.gov/grsm/planyourvisit/picnic.htm", label: "NPS picnicking" },
    { href: "https://www.nps.gov/grsm/planyourvisit/conditions.htm", label: "NPS current conditions" },
  ],
};

export default function FreeAndCheapPage() {
  return <UtilityPage page={page} />;
}
