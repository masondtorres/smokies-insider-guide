import type { Metadata } from "next";
import { UtilityPage, type UtilityPageData } from "@/components/utility-page";

export const metadata: Metadata = {
  title: "Smokies Parking Planning Guide",
  description: "Plan park and town parking before a Smokies day, with practical timing, accessibility and backup advice.",
};

const page: UtilityPageData = {
  category: "Go",
  categoryHref: "/go",
  title: "Parking without losing the day",
  description: "Separate park parking from town parking, arrive with a backup and avoid treating a tag as a reserved space.",
  purpose: "Help you make parking part of the route before traffic or a full lot forces a new plan.",
  helps: [
    "You expect to stop inside Great Smoky Mountains National Park.",
    "Your group needs short walks, predictable transitions or accessible spaces.",
    "You are combining a park stop with Gatlinburg, Pigeon Forge or another town.",
  ],
  sections: [
    { title: "Know which parking system applies", body: "Inside the national park, vehicles parked longer than 15 minutes generally need a parking tag. A tag is not an entrance fee and does not reserve a space. Town lots, garages, private lots and transportation systems follow separate rules, so verify the option you plan to use." },
    { title: "Handle the park tag before the busy stop", body: "Do not make a popular trailhead or overlook the first place you try to solve the tag requirement. Confirm the current official purchase and display instructions before leaving, then keep the tag visible as directed." },
    { title: "Use an arrival window, not a promise", body: "Earlier arrival can improve flexibility, but no time guarantees a space. Keep one nearby alternative that uses the same side of the park or town so a full lot does not turn into a cross-county drive." },
    { title: "Keep roadside decisions conservative", body: "Use designated parking and obey posted restrictions. If a space is unavailable, continue to a legal alternative rather than creating a roadside stop that blocks traffic or damages the shoulder." },
    { title: "Recheck before the drive", body: "Look at park current conditions, weather and the official page for your destination. Local parking prices, hours, trolley service and special-event arrangements are intentionally left unknown here because they change." },
  ],
  family: "Unload only where it is legal and safe, keep snacks and weather layers reachable, and choose a backup with a similar walking load. A parking search is much harder when children already need food or a restroom.",
  accessibility: "Vehicles displaying a state-issued disability placard or license plate do not need a park parking tag. An exemption does not guarantee an accessible space; verify the destination's current accessibility details and keep a lower-walking alternative.",
  saveId: "go-park-entry",
  saveTitle: "Save a park-entry morning",
  links: [
    { href: "/parking-tag", label: "Parking tag guide", description: "Review the park requirement and final-check questions." },
    { href: "/smokies-parking-trolley-guide", label: "Parking and trolley guide", description: "Compare broader transportation planning without assuming current service." },
    { href: "/accessible-smokies", label: "Accessible Smokies", description: "Plan around walking load, surfaces and mobility needs." },
    { href: "/go", label: "More Go planning", description: "Choose a route shape that stays within reach." },
  ],
  sources: [
    { href: "https://www.nps.gov/grsm/planyourvisit/fees.htm", label: "NPS fees and parking tags" },
    { href: "https://www.nps.gov/grsm/planyourvisit/conditions.htm", label: "NPS current conditions" },
  ],
};

export default function ParkingPage() {
  return <UtilityPage page={page} />;
}
