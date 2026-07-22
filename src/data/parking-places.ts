/**
 * Verified parking and transit anchors for the Smoky Insider parking cluster.
 * Every time-sensitive field includes source URL, dateChecked, and verification status.
 * Do not invent prices, hours, capacity, or walking distances not supported by sources.
 */

export type VerificationStatus =
  | "Officially confirmed"
  | "Research-based guidance"
  | "Not recently verified";

export type ParkingType =
  | "municipal"
  | "park-and-ride"
  | "private"
  | "attraction"
  | "national-park"
  | "transit-hub";

export type ParkingPlace = {
  id: string;
  name: string;
  town: "Gatlinburg" | "Pigeon Forge" | "National Park" | "Townsend";
  address: string;
  mapUrl: string;
  parkingType: ParkingType;
  bestFor: string;
  walkingNote: string;
  nearby: string;
  pricingStatus: string;
  accessibilityNote: string;
  trolleyAccess: string;
  officialSource: string;
  sourceLabel: string;
  dateChecked: string;
  verification: VerificationStatus;
  capacityNote?: string;
};

export const LAST_CLUSTER_CHECK = "2026-07-22";

export const gatlinburgPlaces: ParkingPlace[] = [
  {
    id: "gbg-welcome-pnr",
    name: "Gatlinburg Welcome Center Park-and-Ride (US-441 Spur)",
    town: "Gatlinburg",
    address: "1011 Banner Rd, Gatlinburg, TN 37738",
    mapUrl: "https://maps.google.com/?q=1011+Banner+Rd,+Gatlinburg,+TN+37738",
    parkingType: "park-and-ride",
    bestFor: "Avoiding downtown traffic; free lot + free trolley into town",
    walkingNote:
      "You board the trolley here rather than walk into downtown. Return depends on trolley schedule.",
    nearby: "US-441 Spur approach to Gatlinburg; trolley into downtown and Mass Transit Center",
    pricingStatus: "Free parking (City of Gatlinburg). Trolley rides are free per official Gatlinburg tourism site.",
    accessibilityNote:
      "Lot accepts passenger vehicles, buses and RVs (145 spaces listed by city). Confirm lift-equipped trolley access on the official trolley page before travel.",
    trolleyAccess: "Official park-and-ride stop for the free Gatlinburg Trolley",
    officialSource: "https://www.gatlinburgtn.gov/page/parking",
    sourceLabel: "City of Gatlinburg parking page",
    dateChecked: "2026-07-22",
    verification: "Officially confirmed",
    capacityNote: "145 spaces for passenger vehicles, buses and RVs",
  },
  {
    id: "gbg-cityhall-pnr",
    name: "Highway 321 Park-and-Ride at City Hall",
    town: "Gatlinburg",
    address: "1230 East Pkwy, Gatlinburg, TN 37738",
    mapUrl: "https://maps.google.com/?q=1230+East+Pkwy,+Gatlinburg,+TN+37738",
    parkingType: "park-and-ride",
    bestFor: "East approach via US-321; free lot with trolley connection",
    walkingNote:
      "Designed as park-and-ride, not a long walk into the core shopping strip. Use trolley for downtown legs.",
    nearby: "City Hall complex; east side of Gatlinburg",
    pricingStatus: "Free parking (City of Gatlinburg)",
    accessibilityNote: "95 spaces listed for passenger vehicles, buses and RVs. Confirm trolley boarding and lift access before travel.",
    trolleyAccess: "City lists this as a free park-and-ride lot",
    officialSource: "https://www.gatlinburgtn.gov/page/parking",
    sourceLabel: "City of Gatlinburg parking page",
    dateChecked: "2026-07-22",
    verification: "Officially confirmed",
    capacityNote: "95 spaces for passenger vehicles, buses and RVs",
  },
  {
    id: "gbg-mcmahan-garage",
    name: "McMahan / Parkway Parking Garage",
    town: "Gatlinburg",
    address: "520 Parkway, Gatlinburg, TN 37738",
    mapUrl: "https://maps.google.com/?q=520+Parkway,+Gatlinburg,+TN+37738",
    parkingType: "municipal",
    bestFor: "Downtown Parkway stays when you want the car close to the strip",
    walkingNote:
      "Garage is on the Parkway. Expect hills and crowds on the sidewalk once you leave the garage; exact walk distance depends on your stops.",
    nearby: "Central Parkway businesses and attractions",
    pricingStatus: "$15 per day (City of Gatlinburg). Overnight and long-term parking not allowed.",
    accessibilityNote: "366 passenger-vehicle spaces listed. Confirm elevator and accessible routes at the facility on arrival.",
    trolleyAccess: "Downtown trolley stops are near the Parkway corridor; verify current stop map",
    officialSource: "https://www.gatlinburgtn.gov/page/parking",
    sourceLabel: "City of Gatlinburg parking page",
    dateChecked: "2026-07-22",
    verification: "Officially confirmed",
    capacityNote: "366 spaces",
  },
  {
    id: "gbg-aquarium-garage",
    name: "Aquarium Parking Garage",
    town: "Gatlinburg",
    address: "161 Greystone Heights Road, Gatlinburg, TN 37738",
    mapUrl: "https://maps.google.com/?q=161+Greystone+Heights+Rd,+Gatlinburg,+TN+37738",
    parkingType: "municipal",
    bestFor: "Aquarium / Mass Transit Center side of downtown",
    walkingNote:
      "Useful when your day centers on the aquarium and nearby trolley hub. Hills and stairs are common in this part of town.",
    nearby: "Ripley's Aquarium of the Smokies; Mass Transit Center (trolley hub)",
    pricingStatus: "$15 per day (City of Gatlinburg). Overnight and long-term parking not allowed.",
    accessibilityNote: "364 passenger-vehicle spaces listed. Confirm elevator access and accessible paths to the aquarium and trolley hub.",
    trolleyAccess: "All Gatlinburg trolleys stop at the Mass Transit Center at the aquarium per official trolley page",
    officialSource: "https://www.gatlinburgtn.gov/page/parking",
    sourceLabel: "City of Gatlinburg parking page",
    dateChecked: "2026-07-22",
    verification: "Officially confirmed",
    capacityNote: "364 spaces",
  },
];

export const pigeonForgePlaces: ParkingPlace[] = [
  {
    id: "pf-patriot-transit",
    name: "Mass Transit Trolley Station at Patriot Park",
    town: "Pigeon Forge",
    address: "236 Old Mill Ave, Pigeon Forge, TN",
    mapUrl: "https://maps.google.com/?q=236+Old+Mill+Ave,+Pigeon+Forge,+TN",
    parkingType: "transit-hub",
    bestFor: "Park once and use the Fun Time Trolley across Pigeon Forge",
    walkingNote:
      "Hub for all routes. Walking burden depends on which attractions you ride to, not on walking the full Parkway.",
    nearby: "Old Mill District; Patriot Park; trolley route starts/ends here",
    pricingStatus:
      "Free parking listed by official MyPigeonForge trolley page. Trolley fares apply (see official page for current individual and day-pass prices).",
    accessibilityNote:
      "Trolleys are lift-equipped for wheelchairs/mobility aids at designated stops (official page). Paratransit van available by advance request.",
    trolleyAccess: "All routes start and end at this station",
    officialSource: "https://www.mypigeonforge.com/planning/getting-around/mass-transit-trolley/",
    sourceLabel: "MyPigeonForge trolley page",
    dateChecked: "2026-07-22",
    verification: "Officially confirmed",
  },
  {
    id: "pf-river-lot",
    name: "River Lot (Teaster Lane)",
    town: "Pigeon Forge",
    address: "2936 Teaster Lane, Pigeon Forge, TN",
    mapUrl: "https://maps.google.com/?q=2936+Teaster+Lane,+Pigeon+Forge,+TN",
    parkingType: "municipal",
    bestFor: "Teaster Lane corridor with adjacent trolley stop",
    walkingNote: "Adjacent trolley stop listed by official trolley page; useful when you prefer not to circle the Parkway for a space.",
    nearby: "Teaster Lane; trolley stop adjacent",
    pricingStatus: "Free parking listed by official MyPigeonForge trolley page",
    accessibilityNote: "Confirm surface conditions and curb access on arrival. Use adjacent trolley stop for longer distances.",
    trolleyAccess: "Adjacent trolley stop (official page)",
    officialSource: "https://www.mypigeonforge.com/planning/getting-around/mass-transit-trolley/",
    sourceLabel: "MyPigeonForge trolley page",
    dateChecked: "2026-07-22",
    verification: "Officially confirmed",
  },
  {
    id: "pf-mountain-lot",
    name: "Mountain Lot (Teaster Lane)",
    town: "Pigeon Forge",
    address: "2989 Teaster Lane, Pigeon Forge, TN",
    mapUrl: "https://maps.google.com/?q=2989+Teaster+Lane,+Pigeon+Forge,+TN",
    parkingType: "municipal",
    bestFor: "South Teaster Lane / LeConte Center side",
    walkingNote:
      "Official page notes closest stop at south end of LeConte Center via pedestrian bridge. Not a flat downtown sidewalk walk.",
    nearby: "LeConte Center area; pedestrian bridge connection noted by official source",
    pricingStatus: "Free parking listed by official MyPigeonForge trolley page",
    accessibilityNote: "Pedestrian bridge may add distance and grade. Prefer trolley if mobility is limited.",
    trolleyAccess: "Adjacent trolley stop; LeConte Center connection noted",
    officialSource: "https://www.mypigeonforge.com/planning/getting-around/mass-transit-trolley/",
    sourceLabel: "MyPigeonForge trolley page",
    dateChecked: "2026-07-22",
    verification: "Officially confirmed",
  },
];

export const npsTagFacts = {
  requiredWhen: "Required for all vehicles parking longer than 15 minutes anywhere inside Great Smoky Mountains National Park boundaries.",
  prices: {
    daily: "$5",
    weekly: "$15",
    annual: "$40",
  },
  doesNotGuarantee: "A tag does not guarantee a parking space and does not authorize parking outside designated areas.",
  display:
    "Physical tags only. Digital representations are not accepted. Daily/weekly tags go face-up on the front lower passenger-side dashboard; annual tags on the front lower passenger-side windshield. License plate on the tag must match the vehicle.",
  notAccepted: "America the Beautiful entrance passes (Senior, Access, Military, etc.) are not accepted in place of a parking tag.",
  disabilityExemption: "Vehicles displaying a disability license plate or placard are exempt from the parking tag requirement (NPS FAQ).",
  purchaseOnline: {
    dailyWeekly: "https://www.recreation.gov/activitypass/AP2510",
    annual: "https://smokieslife.org/product/annual-parking-tag/",
  },
  samplePurchaseLocations: [
    {
      name: "Gatlinburg Welcome Center",
      address: "1011 Banner Road, Gatlinburg, TN 37738",
    },
    {
      name: "Sugarlands Visitor Center",
      address: "1420 Fighting Creek Gap Road, Gatlinburg, TN 37738",
    },
    {
      name: "REI Pigeon Forge",
      address: "2655 Teaster Ln Suite 310, Pigeon Forge, TN 37863",
    },
    {
      name: "Cades Cove Visitor Center",
      address: "686 Cades Cove Loop Road, Townsend, TN 37882",
    },
  ],
  officialSource: "https://www.nps.gov/grsm/planyourvisit/fees.htm",
  dateChecked: "2026-07-22",
  verification: "Officially confirmed" as VerificationStatus,
  npsUpdated: "NPS page last updated July 7, 2026 (as of our check).",
};

export const allParkingPlaces: ParkingPlace[] = [
  ...gatlinburgPlaces,
  ...pigeonForgePlaces,
];

export function getPlaceById(id: string) {
  return allParkingPlaces.find((p) => p.id === id);
}
