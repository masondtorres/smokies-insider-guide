import type { Metadata } from "next";
import { UtilityPage, type UtilityPageData } from "@/components/utility-page";

export const metadata: Metadata = {
  title: "Smokies Cabin Stay Planning Guide",
  description: "Compare a Smokies cabin by location, road access, group fit, booking terms and the trips you actually plan to take.",
};

const page: UtilityPageData = {
  category: "Stay",
  categoryHref: "/stay",
  title: "Choose the cabin for the trip you will actually take",
  description: "Treat location, road access and group fit as part of the stay instead of comparing cabins by amenities alone.",
  purpose: "Help visitors screen cabin options without naming properties or making claims about rates, availability, amenities or booking quality.",
  helps: [
    "You are comparing mountain views with easier access to towns or the park.",
    "Your group needs clear answers about stairs, bedrooms, parking or road approach.",
    "You want to understand the full booking terms before paying.",
  ],
  sections: [
    { title: "Choose the trip base first", body: "List the two or three places you expect to visit most, then compare the real route from each cabin area. A beautiful stay can create a difficult trip when every outing requires a long drive through traffic." },
    { title: "Verify the road and parking fit", body: "Ask for current information about the approach road, grade, surface, turns, driveway and space for every vehicle in your group. Recheck weather and road conditions before arrival; mountain conditions can change quickly." },
    { title: "Match the layout to the group", body: "Confirm bedrooms, bathrooms, stairs, entry steps, railings and the route between parking and the main living area. Do not treat a general accessibility label or a photo as proof that the layout works for a specific person." },
    { title: "Compare the total booking terms", body: "Review the displayed total price, mandatory charges, deposit or hold terms, cancellation policy, check-in process and house rules before committing. Save the written confirmation and use a payment method with appropriate protections." },
    { title: "Confirm the listing and arrival plan", body: "Verify that the property and booking contact are legitimate before sending money. The FTC warns that scammers can copy real vacation-rental listings or create properties that do not exist." },
  ],
  family: "Check sleep spaces, interior and exterior stairs, deck safety, kitchen setup and the distance to the day's activities. Plan the first evening to be simple so arrival, unloading and bedtime are not followed by another drive.",
  accessibility: "Ask for measurements and specific descriptions when mobility matters: parking surface, slope, thresholds, doorway widths, bathroom layout and stairs between essential rooms. Verify directly with the responsible property contact before booking.",
  saveId: "utility-smokies-cabin-stay",
  saveTitle: "Smokies Cabin Stay Plan",
  links: [
    { href: "/where-to-stay", label: "Where to stay", description: "Compare the broader lodging areas first." },
    { href: "/where-to-stay-in-the-smokies-by-trip-type", label: "Stay by trip type", description: "Match the base to the kind of trip you are building." },
    { href: "/gatlinburg-vs-pigeon-forge", label: "Gatlinburg or Pigeon Forge", description: "Compare two common bases by trip fit." },
    { href: "/accessible-smokies", label: "Accessible Smokies", description: "Carry mobility planning into the rest of the trip." },
    { href: "/stay", label: "More Stay planning", description: "Save another lodging decision pattern." },
  ],
  sources: [
    { href: "https://consumer.ftc.gov/articles/avoid-scams-when-you-travel", label: "FTC travel scam guidance" },
    { href: "https://consumer.ftc.gov/consumer-alerts/2025/05/what-rule-unfair-or-deceptive-fees-means-you", label: "FTC lodging fee guidance" },
    { href: "https://www.nps.gov/grsm/planyourvisit/weather.htm", label: "NPS Smokies weather" },
    { href: "https://www.nps.gov/grsm/planyourvisit/conditions.htm", label: "NPS current conditions" },
  ],
};

export default function CabinsPage() {
  return <UtilityPage page={page} />;
}
