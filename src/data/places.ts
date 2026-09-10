export type PlaceKind = "restaurant" | "attraction" | "lodging" | "shop" | "park";
export type PlaceTown =
  | "Gatlinburg"
  | "Pigeon Forge"
  | "Sevierville"
  | "Townsend"
  | "Great Smoky Mountains National Park";

export type Place = {
  slug: string;
  name: string;
  kind: PlaceKind;
  town: PlaceTown;
  website: string;
  mapsQuery: string;
  indoor: boolean | null;
  familyFit: string;
  note: string;
  nearby: string;
  lastVerified: string;
  sourceLabel: string;
};

export const places: Place[] = [
  { slug: "pancake-pantry-gatlinburg", name: "The Pancake Pantry", kind: "restaurant", town: "Gatlinburg", website: "https://www.thepancakepantry.com/", mapsQuery: "The Pancake Pantry Gatlinburg TN", indoor: true, familyFit: "Breakfast landmark on the Parkway walking zone.", note: "Verify current hours and wait directly with the restaurant. Breakfast lines are common in peak season.", nearby: "Walkable Gatlinburg Parkway and downtown trolley stops.", lastVerified: "2026-09-10", sourceLabel: "Official restaurant website" },
  { slug: "crocketts-breakfast-camp", name: "Crockett's Breakfast Camp", kind: "restaurant", town: "Gatlinburg", website: "https://crockettsbreakfastcamp.com/", mapsQuery: "Crockett's Breakfast Camp Gatlinburg TN", indoor: true, familyFit: "Large breakfast room near downtown Gatlinburg.", note: "Confirm hours, wait-list tools and parking notes on the official site before you go.", nearby: "Downtown Gatlinburg walking core.", lastVerified: "2026-09-10", sourceLabel: "Official restaurant website" },
  { slug: "peddler-steakhouse", name: "The Peddler Steakhouse", kind: "restaurant", town: "Gatlinburg", website: "https://www.peddlergatlinburg.com/", mapsQuery: "The Peddler Steakhouse Gatlinburg TN", indoor: true, familyFit: "Sit-down dinner beside the Little Pigeon River.", note: "Check reservations and current menu on the official site. Do not treat this as a fast meal.", nearby: "River Road / downtown Gatlinburg.", lastVerified: "2026-09-10", sourceLabel: "Official restaurant website" },
  { slug: "park-grill-gatlinburg", name: "The Park Grill", kind: "restaurant", town: "Gatlinburg", website: "https://parkgrillgatlinburg.com/", mapsQuery: "The Park Grill Gatlinburg TN", indoor: true, familyFit: "Downtown dinner option close to the park gateway.", note: "Verify hours and reservations on the official site.", nearby: "Gatlinburg welcome area and Parkway.", lastVerified: "2026-09-10", sourceLabel: "Official restaurant website" },
  { slug: "smoky-mountain-brewery-gatlinburg", name: "Smoky Mountain Brewery", kind: "restaurant", town: "Gatlinburg", website: "https://www.smoky-mtn-brewery.com/", mapsQuery: "Smoky Mountain Brewery Gatlinburg TN", indoor: true, familyFit: "Brewpub meals on the Parkway.", note: "Hours and tap list change. Confirm on the official site.", nearby: "Gatlinburg Parkway walking zone.", lastVerified: "2026-09-10", sourceLabel: "Official restaurant website" },
  { slug: "bennetts-bbq-gatlinburg", name: "Bennett's Pit Bar-B-Que", kind: "restaurant", town: "Gatlinburg", website: "https://www.bennetts-bbq.com/", mapsQuery: "Bennett's Pit Bar-B-Que Gatlinburg TN", indoor: true, familyFit: "BBQ with a Gatlinburg location and a Pigeon Forge location.", note: "Confirm which location you are using. Hours and menus live on the official site.", nearby: "Gatlinburg Parkway.", lastVerified: "2026-09-10", sourceLabel: "Official restaurant website" },
  { slug: "local-goat-pigeon-forge", name: "Local Goat", kind: "restaurant", town: "Pigeon Forge", website: "https://www.localgoatpf.com/", mapsQuery: "Local Goat Pigeon Forge TN", indoor: true, familyFit: "Parkway dinner near the Pigeon Forge attraction strip.", note: "Confirm hours and reservations on the official site.", nearby: "Pigeon Forge Parkway corridor.", lastVerified: "2026-09-10", sourceLabel: "Official restaurant website" },
  { slug: "alamo-steakhouse-pigeon-forge", name: "Alamo Steakhouse", kind: "restaurant", town: "Pigeon Forge", website: "https://alamosteakhouse.com/", mapsQuery: "Alamo Steakhouse Pigeon Forge TN", indoor: true, familyFit: "Sit-down steakhouse on the Parkway.", note: "Reservations and hours should be checked on the official site.", nearby: "Pigeon Forge Parkway.", lastVerified: "2026-09-10", sourceLabel: "Official restaurant website" },
  { slug: "calhouns-pigeon-forge", name: "Calhoun's", kind: "restaurant", town: "Pigeon Forge", website: "https://www.calhouns.com/", mapsQuery: "Calhoun's Pigeon Forge TN", indoor: true, familyFit: "Regional rib-and-steak restaurant with a Pigeon Forge location.", note: "Use the official site to pick the Pigeon Forge location and verify hours.", nearby: "Pigeon Forge Parkway.", lastVerified: "2026-09-10", sourceLabel: "Official restaurant website" },
  { slug: "anakeesta", name: "Anakeesta", kind: "attraction", town: "Gatlinburg", website: "https://anakeesta.com/", mapsQuery: "Anakeesta Gatlinburg TN", indoor: false, familyFit: "Hilltop park with views, treetop walks and family attractions.", note: "Tickets, weather holds and operating hours change. Buy and verify only on the official site.", nearby: "Downtown Gatlinburg.", lastVerified: "2026-09-10", sourceLabel: "Official attraction website" },
  { slug: "ripleys-aquarium-gatlinburg", name: "Ripley's Aquarium of the Smokies", kind: "attraction", town: "Gatlinburg", website: "https://www.ripleyaquariums.com/gatlinburg/", mapsQuery: "Ripley's Aquarium of the Smokies Gatlinburg TN", indoor: true, familyFit: "Indoor rainy-day anchor in downtown Gatlinburg.", note: "Tickets and hours come from the official Ripley site only.", nearby: "Gatlinburg Parkway and Aquarium area parking.", lastVerified: "2026-09-10", sourceLabel: "Official attraction website" },
  { slug: "ober-gatlinburg", name: "Ober Gatlinburg", kind: "attraction", town: "Gatlinburg", website: "https://obergatlinburg.com/", mapsQuery: "Ober Gatlinburg TN", indoor: null, familyFit: "Mountain amusement park with tram access from downtown.", note: "Tram, amusement and ski operations change by season and weather. Use the official site.", nearby: "Downtown tram station and ski mountain.", lastVerified: "2026-09-10", sourceLabel: "Official attraction website" },
  { slug: "dollywood", name: "Dollywood", kind: "attraction", town: "Pigeon Forge", website: "https://www.dollywood.com/", mapsQuery: "Dollywood Pigeon Forge TN", indoor: null, familyFit: "Full-day theme park. Plan food and parking around this one anchor.", note: "Calendar, tickets and parking rules live on Dollywood.com. Not affiliated.", nearby: "Dollywood / Dolly Parton Parkway area.", lastVerified: "2026-09-10", sourceLabel: "Official attraction website" },
  { slug: "island-pigeon-forge", name: "The Island in Pigeon Forge", kind: "attraction", town: "Pigeon Forge", website: "https://www.islandinpigeonforge.com/", mapsQuery: "The Island in Pigeon Forge TN", indoor: null, familyFit: "Walkable entertainment complex with rides, shops and restaurants.", note: "Individual tenant hours vary. Start with the official Island site.", nearby: "Pigeon Forge Parkway.", lastVerified: "2026-09-10", sourceLabel: "Official attraction website" },
  { slug: "titanic-museum-pigeon-forge", name: "Titanic Museum Attraction", kind: "attraction", town: "Pigeon Forge", website: "https://titanicpigeonforge.com/", mapsQuery: "Titanic Museum Pigeon Forge TN", indoor: true, familyFit: "Indoor ticketed museum. Good rainy-day option if the group wants a longer visit.", note: "Tickets and hours only from the official site.", nearby: "Pigeon Forge Parkway.", lastVerified: "2026-09-10", sourceLabel: "Official attraction website" },
  { slug: "wonderworks-pigeon-forge", name: "WonderWorks", kind: "attraction", town: "Pigeon Forge", website: "https://www.wonderworksonline.com/pigeon-forge/", mapsQuery: "WonderWorks Pigeon Forge TN", indoor: true, familyFit: "Indoor science-attraction option on the Parkway.", note: "Tickets and hours from the official site.", nearby: "Pigeon Forge Parkway.", lastVerified: "2026-09-10", sourceLabel: "Official attraction website" },
  { slug: "great-smoky-mountains-national-park", name: "Great Smoky Mountains National Park", kind: "park", town: "Great Smoky Mountains National Park", website: "https://www.nps.gov/grsm/", mapsQuery: "Great Smoky Mountains National Park Sugarlands Visitor Center", indoor: false, familyFit: "The park is free to enter. Parking tags, road status and trail conditions still decide the day.", note: "Use NPS pages for conditions, maps, parking tags and closures. This site is not affiliated with NPS.", nearby: "Gatlinburg, Townsend, Cherokee and surrounding bases.", lastVerified: "2026-09-10", sourceLabel: "National Park Service" },
  { slug: "leconte-lodge", name: "LeConte Lodge", kind: "lodging", town: "Great Smoky Mountains National Park", website: "https://lecontelodge.com/", mapsQuery: "LeConte Lodge Great Smoky Mountains National Park", indoor: true, familyFit: "Hike-in lodge on Mount Le Conte. Not a drive-up hotel.", note: "Reservations, season dates and hike requirements come from the official lodge site.", nearby: "Mount Le Conte trailheads.", lastVerified: "2026-09-10", sourceLabel: "Official lodge website" },
  { slug: "dancing-bear-lodge", name: "Dancing Bear Lodge", kind: "lodging", town: "Townsend", website: "https://dancingbearlodge.com/", mapsQuery: "Dancing Bear Lodge Townsend TN", indoor: true, familyFit: "Townsend lodging near the quiet side and Cades Cove approach.", note: "Rooms, cabins, dining and availability must be confirmed on the official site.", nearby: "Townsend / Cades Cove corridor.", lastVerified: "2026-09-10", sourceLabel: "Official lodge website" }
];

export function mapsUrl(place: Place) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.mapsQuery)}`;
}
export function placesByKind(kind: PlaceKind) {
  return places.filter((place) => place.kind === kind);
}
export function placesByTown(town: PlaceTown) {
  return places.filter((place) => place.town === town);
}
export function placeBySlug(slug: string) {
  return places.find((place) => place.slug === slug);
}
