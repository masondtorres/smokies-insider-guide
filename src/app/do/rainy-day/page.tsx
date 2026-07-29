import type { Metadata } from "next";
import { UtilityPage, type UtilityPageData } from "@/components/utility-page";

export const metadata: Metadata = {
  title: "Rainy Day Smokies Plan",
  description: "Build a short, flexible rainy-day plan for the Smokies without crossing the county or relying on unverified business details.",
};

const page: UtilityPageData = {
  category: "Do",
  categoryHref: "/do",
  title: "A rainy-day plan that stays flexible",
  description: "Choose one indoor anchor, keep food nearby and leave room to change course if mountain weather shifts.",
  purpose: "Give families and mixed groups a simple wet-weather day shape without publishing unverified business hours or admission details.",
  helps: [
    "Rain is likely, but the forecast still has gaps or may change by elevation.",
    "Your group needs a low-stress backup near the area where you are staying.",
    "You want to avoid stacking several paid indoor stops just because the weather changed.",
  ],
  sections: [
    { title: "Pick one indoor anchor", body: "Choose one attraction, museum, visitor-oriented stop or other indoor category in the town you are already using. Verify its hours, admission, parking and accessibility directly; this guide does not claim those details." },
    { title: "Keep the route compact", body: "Pair the anchor with a nearby meal and one easy backup. Rainy traffic, wet loading and repeated parking searches make a scattered itinerary feel longer than the map suggests." },
    { title: "Use forecast gaps carefully", body: "Mountain weather can change quickly and conditions differ by elevation. A brief dry window may suit a paved town walk or sheltered pause, but it is not proof that a park road, trail or high-elevation stop is clear." },
    { title: "Treat streams and slick surfaces seriously", body: "Do not turn rain into an improvised water-recreation plan. Park waters can be hazardous, help may be far away and wet rocks, roots and pavement raise the fall risk." },
    { title: "Keep a clean exit", body: "Pack dry layers, protect medications and devices, and know what you will skip if energy drops. The useful rainy-day plan is the one your group can shorten without losing prepaid commitments across several locations." },
  ],
  family: "A single indoor anchor plus food and downtime usually works better than several timed stops. Bring a change of clothes for young children and protect the calmest part of the day for rest.",
  accessibility: "Confirm entrances, elevators, seating, restrooms and accessible parking directly with any business. Wet curb ramps, slopes and loading areas can add difficulty even when the indoor venue itself is accessible.",
  saveId: "utility-rainy-day-backup",
  saveTitle: "Rainy-Day Backup Plan",
  links: [
    { href: "/rainy-day", label: "Full rainy-day guide", description: "Compare broader wet-weather planning choices." },
    { href: "/rainy-day-smokies-with-kids", label: "Rainy day with kids", description: "Adjust the pace for younger travelers." },
    { href: "/restaurants", label: "Meal planning", description: "Keep the meal near the day's main area." },
    { href: "/do", label: "More Do planning", description: "Save another practical activity shape." },
  ],
  sources: [
    { href: "https://www.nps.gov/grsm/planyourvisit/weather.htm", label: "NPS Smokies weather" },
    { href: "https://www.nps.gov/grsm/planyourvisit/conditions.htm", label: "NPS current conditions" },
    { href: "https://www.nps.gov/grsm/planyourvisit/watersafety.htm", label: "NPS water safety" },
  ],
};

export default function RainyDayUtilityPage() {
  return <UtilityPage page={page} />;
}
