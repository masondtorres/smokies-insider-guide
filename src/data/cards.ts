export type Category = "go" | "do" | "see" | "eat" | "stay" | "deals";

export type GuideCard = {
  id: string;
  category: Category;
  href?: string;
  utility?: boolean;
  title: string;
  description: string;
  area: string;
  duration: "short" | "half-day" | "full-day";
  outdoor: boolean;
  crowdRisk: "low" | "medium" | "high";
  parkingCheck: boolean;
  sourceCheck: boolean;
  paid: boolean;
  mobilityCaution: boolean;
  caution: string;
};

export const categoryInfo: Record<Category, { title: string; intro: string }> = {
  go: { title: "Go", intro: "Start with an area or route, then keep the rest of the day within reach." },
  do: { title: "Do", intro: "Choose a practical activity shape without relying on unverified business details." },
  see: { title: "See", intro: "Build scenic time around weather, road conditions, crowds and walking needs." },
  eat: { title: "Eat", intro: "Use meal-planning patterns by area. Specific businesses are intentionally not listed yet." },
  stay: { title: "Stay", intro: "Compare base areas and trip fit without invented lodging listings, rates or availability." },
  deals: { title: "Deals", intro: "Plan around value, not unverified coupons. No offers are published in this framework." },
};

export const cards: GuideCard[] = [
  { id: "go-quiet-side", category: "go", title: "Plan a quieter-side day", description: "Keep a slower day centered on one side of the Smokies with room for an easy meal and an early finish.", area: "Townsend side", duration: "full-day", outdoor: true, crowdRisk: "low", parkingCheck: true, sourceCheck: true, paid: false, mobilityCaution: false, caution: "Road and park conditions can change. Check official sources before leaving." },
  { id: "go-town-loop", category: "go", title: "Choose one town loop", description: "Pick one town as the day anchor instead of crossing the full visitor corridor repeatedly.", area: "One town", duration: "half-day", outdoor: false, crowdRisk: "medium", parkingCheck: true, sourceCheck: false, paid: false, mobilityCaution: false, caution: "Confirm parking and local transportation options for your date." },
  { id: "go-park-entry", category: "go", title: "Build a park-entry morning", description: "Leave margin for traffic, a conditions check and a flexible turnaround point.", area: "National park", duration: "half-day", outdoor: true, crowdRisk: "high", parkingCheck: true, sourceCheck: true, paid: false, mobilityCaution: true, caution: "Check closures, parking requirements and accessibility details with official park sources." },
  { id: "do-indoor-anchor", category: "do", title: "Add one indoor anchor", description: "Reserve a flexible block for an indoor activity, then keep the rest of the day light.", area: "Pigeon Forge", duration: "half-day", outdoor: false, crowdRisk: "medium", parkingCheck: true, sourceCheck: false, paid: true, mobilityCaution: false, caution: "Verify current admission, hours and accessibility directly before visiting." },
  { id: "do-family-buffer", category: "do", title: "Build a family buffer", description: "Plan one main activity with food, rest and weather alternatives close by.", area: "Sevierville", duration: "half-day", outdoor: false, crowdRisk: "medium", parkingCheck: false, sourceCheck: false, paid: true, mobilityCaution: false, caution: "This is a planning pattern, not a business recommendation." },
  { id: "do-low-cost", category: "do", title: "Shape a lower-cost day", description: "Combine a free scenic block, a packed break and one optional paid activity.", area: "Wears Valley", duration: "full-day", outdoor: true, crowdRisk: "low", parkingCheck: true, sourceCheck: true, paid: false, mobilityCaution: false, caution: "Confirm where stopping or parking is permitted." },
  { id: "see-overlook", category: "see", title: "Choose an overlook window", description: "Set aside a flexible scenic window rather than depending on one exact view or time.", area: "National park", duration: "short", outdoor: true, crowdRisk: "high", parkingCheck: true, sourceCheck: true, paid: false, mobilityCaution: true, caution: "Visibility, roads and pull-off access vary. Check conditions first." },
  { id: "see-water", category: "see", title: "Plan a water-feature stop", description: "Allow for wet surfaces, changing weather and more walking than a map may suggest.", area: "National park", duration: "half-day", outdoor: true, crowdRisk: "high", parkingCheck: true, sourceCheck: true, paid: false, mobilityCaution: true, caution: "Trail and access conditions require an official source check." },
  { id: "see-town-view", category: "see", title: "Find a town-view pause", description: "Add a short visual break near the area you are already visiting instead of another cross-town drive.", area: "Gatlinburg", duration: "short", outdoor: true, crowdRisk: "medium", parkingCheck: true, sourceCheck: false, paid: false, mobilityCaution: false, caution: "Crowds and parking may make a short stop take longer than expected." },
  { id: "eat-one-area", category: "eat", title: "Keep meals in one area", description: "Choose the meal zone before the restaurant so the route stays workable.", area: "One town", duration: "short", outdoor: false, crowdRisk: "medium", parkingCheck: true, sourceCheck: false, paid: true, mobilityCaution: false, caution: "Check current menus, hours and accessibility directly with any business." },
  { id: "eat-off-peak", category: "eat", title: "Try an off-peak meal window", description: "Use an earlier or later meal block to leave more flexibility around traffic and waits.", area: "Pigeon Forge", duration: "short", outdoor: false, crowdRisk: "high", parkingCheck: false, sourceCheck: false, paid: true, mobilityCaution: false, caution: "No wait time or availability is implied." },
  { id: "eat-backup", category: "eat", title: "Save a meal backup pattern", description: "Keep a simple alternate meal type in the same area in case the first choice is too busy.", area: "Gatlinburg", duration: "short", outdoor: false, crowdRisk: "high", parkingCheck: true, sourceCheck: false, paid: true, mobilityCaution: false, caution: "Specific restaurants will only be added after verification." },
  { id: "stay-central", category: "stay", title: "Compare a central base", description: "Favor shorter access to town activities when those make up most of the trip.", area: "Pigeon Forge", duration: "full-day", outdoor: false, crowdRisk: "medium", parkingCheck: true, sourceCheck: false, paid: true, mobilityCaution: false, caution: "No property, rate, availability or booking claim is included." },
  { id: "stay-quiet", category: "stay", title: "Compare a quieter base", description: "Consider a slower base when park access and downtime matter more than nightlife.", area: "Townsend side", duration: "full-day", outdoor: false, crowdRisk: "low", parkingCheck: false, sourceCheck: false, paid: true, mobilityCaution: false, caution: "Check the real drive times for the places on your plan." },
  { id: "stay-access", category: "stay", title: "Plan for mobility needs", description: "Make parking, stairs, slopes and room access part of the lodging decision.", area: "Any base", duration: "full-day", outdoor: false, crowdRisk: "low", parkingCheck: true, sourceCheck: true, paid: true, mobilityCaution: true, caution: "Verify accessibility features directly with the property before booking." },
  { id: "deals-budget", category: "deals", title: "Set a day budget first", description: "Decide the spending limit before adding attractions, meals or shopping.", area: "Any area", duration: "full-day", outdoor: false, crowdRisk: "low", parkingCheck: false, sourceCheck: false, paid: false, mobilityCaution: false, caution: "No prices, discounts or savings are claimed." },
  { id: "deals-verify", category: "deals", title: "Verify every offer", description: "Treat a discount as unconfirmed until the business provides current terms and dates.", area: "Any area", duration: "short", outdoor: false, crowdRisk: "low", parkingCheck: false, sourceCheck: true, paid: false, mobilityCaution: false, caution: "No live coupons or promotions are published here." },
  { id: "deals-free-block", category: "deals", title: "Pair paid and free blocks", description: "Balance one paid anchor with scenic, rest or picnic time where permitted.", area: "National park", duration: "full-day", outdoor: true, crowdRisk: "medium", parkingCheck: true, sourceCheck: true, paid: true, mobilityCaution: false, caution: "Check parking, access and current rules before finalizing the day." },
  { id: "utility-smokies-parking-plan", category: "go", href: "/go/parking", utility: true, title: "Smokies Parking Plan", description: "Check the parking system, current conditions and one legal backup before starting the drive.", area: "National park", duration: "short", outdoor: false, crowdRisk: "high", parkingCheck: true, sourceCheck: true, paid: false, mobilityCaution: true, caution: "Recheck official parking requirements, conditions and destination access before leaving." },
  { id: "utility-rainy-day-backup", category: "do", href: "/rainy-day", utility: true, title: "Rainy-Day Backup Plan", description: "Keep one flexible indoor anchor, a nearby meal and an easy exit in the same area.", area: "One town", duration: "half-day", outdoor: false, crowdRisk: "medium", parkingCheck: true, sourceCheck: true, paid: false, mobilityCaution: true, caution: "Verify current weather and all venue hours, admission, parking and accessibility details directly." },
  { id: "utility-cades-cove-drive", category: "see", href: "/cades-cove", utility: true, title: "Cades Cove Drive Plan", description: "Protect a flexible time block for the loop and check access, conditions and the vehicle schedule before departure.", area: "Cades Cove", duration: "half-day", outdoor: true, crowdRisk: "high", parkingCheck: true, sourceCheck: true, paid: false, mobilityCaution: true, caution: "Recheck official road conditions, vehicle-free dates, parking requirements and accessibility details." },
  { id: "utility-free-cheap-smokies", category: "do", href: "/free-and-cheap-smokies", utility: true, title: "Free and Cheap Smokies Plan", description: "Build a lower-cost day around one area, packed basics and at most one optional paid anchor.", area: "One area", duration: "full-day", outdoor: true, crowdRisk: "medium", parkingCheck: true, sourceCheck: true, paid: false, mobilityCaution: false, caution: "Recheck park conditions, parking requirements and any current cost before finalizing the day." },
  { id: "utility-family-friendly-food", category: "eat", href: "/eat/family-friendly", utility: true, title: "Family-Friendly Food Plan", description: "Choose a meal area, useful timing window and simple backup that fit the whole group.", area: "One town", duration: "short", outdoor: false, crowdRisk: "high", parkingCheck: true, sourceCheck: true, paid: true, mobilityCaution: true, caution: "Confirm current menus, hours, allergy procedures, seating, parking and accessibility directly." },
  { id: "utility-smokies-cabin-stay", category: "stay", href: "/stay/cabins", utility: true, title: "Smokies Cabin Stay Plan", description: "Compare cabin access, trip location, total booking terms and group needs before reserving.", area: "Any base", duration: "full-day", outdoor: false, crowdRisk: "low", parkingCheck: true, sourceCheck: true, paid: true, mobilityCaution: true, caution: "Verify the property, total price, cancellation terms, road access and accessibility directly before booking." },
];

export function cardsFor(category: Category) {
  return cards.filter((card) => card.category === category && !card.utility);
}
