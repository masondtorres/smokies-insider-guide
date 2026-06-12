import type { Metadata } from "next";
import { UtilityPage, type UtilityPageData } from "@/components/utility-page";

export const metadata: Metadata = {
  title: "Cades Cove Practical Planning Guide",
  description: "Plan Cades Cove as a real outing with timing, traffic, family, accessibility and current-conditions checks.",
};

const page: UtilityPageData = {
  category: "See",
  categoryHref: "/see",
  title: "Cades Cove is the plan, not the add-on",
  description: "Give the loop its own time block, expect traffic to set the pace and check the Wednesday vehicle schedule before driving in.",
  purpose: "Help first-time and mixed-age groups decide whether Cades Cove fits the day before they commit to the approach drive.",
  helps: [
    "You are deciding whether Cades Cove fits a half-day or longer block.",
    "Your group wants scenery and historic context with limited mandatory walking.",
    "You need to understand the seasonal Wednesday vehicle-free schedule.",
  ],
  sections: [
    { title: "Protect enough time", body: "The paved loop is 11 miles and one-way. The National Park Service advises allowing at least two to four hours for the drive, with more time if you stop or hike. Build the approach and return drive around that block." },
    { title: "Check Wednesday before you leave", body: "For 2026, Cades Cove Loop Road is planned to be closed to motor vehicles all day Wednesdays from May 6 through September 30 for pedestrians and cyclists. Weather, emergency or operational changes can still affect access, so verify the current notice." },
    { title: "Let traffic choose the pace", body: "Wildlife, pull-offs and busy parking areas can slow the loop. Do not schedule a tight reservation immediately after the drive, and do not assume a short map distance means a quick visit." },
    { title: "Plan stops before entering", body: "Choose which historic area or short stop matters most, then treat the rest as optional. Parking is limited at popular points, and a park parking tag does not reserve a space." },
    { title: "Bring the day's basics", body: "Carry water, food, weather layers and the information you need offline. Cell service is limited in the area. Check current road conditions and the park alert page before committing to the approach." },
  ],
  family: "The driving format can work for mixed ages, but a slow loop is still a long contained stretch. Bring food, water and quiet activities, and choose in advance whether your group will make one meaningful stop or several short ones.",
  accessibility: "Much of the landscape and many historic exteriors can be viewed from a vehicle. Accessible parking and restrooms are available at listed park facilities, but the NPS says the historic buildings along the loop are not ADA accessible. Verify current facility details before departure.",
  saveId: "see-overlook",
  saveTitle: "Save a flexible scenic window",
  links: [
    { href: "/cades-cove", label: "Cades Cove guide", description: "Read the broader route and decision guide." },
    { href: "/cades-cove-first-time-guide", label: "First-time Cades Cove", description: "Use a fuller first-visit planning sequence." },
    { href: "/go/parking", label: "Parking planning", description: "Handle the park tag and backup-space problem first." },
    { href: "/townsend", label: "Townsend guide", description: "Keep the quieter-side route together." },
    { href: "/see", label: "More See planning", description: "Compare another scenic stop shape." },
  ],
  sources: [
    { href: "https://www.nps.gov/grsm/planyourvisit/cadescove.htm", label: "NPS Cades Cove" },
    { href: "https://www.nps.gov/grsm/planyourvisit/cades-cove-vehicle-free-days.htm", label: "NPS 2026 vehicle-free days" },
    { href: "https://www.nps.gov/grsm/planyourvisit/accessibility.htm", label: "NPS accessibility" },
    { href: "https://www.nps.gov/grsm/planyourvisit/conditions.htm", label: "NPS current conditions" },
  ],
};

export default function CadesCoveUtilityPage() {
  return <UtilityPage page={page} />;
}
