import type { Metadata } from "next";
import Link from "next/link";
import { PrintButton } from "@/components/print-button";
import "../visitor-home.css";
import "./itinerary.css";

export const metadata: Metadata = {
  title: "3 Days in Gatlinburg: Photos, Daily Routes & Real Places",
  description: "An actionable illustrated three-day Gatlinburg itinerary: downtown and attractions, the national park, and Roaring Fork and the Arts & Crafts Community. Get official links and maps for every stop.",
  alternates: { canonical: "/gatlinburg-3-day-itinerary" },
};

const map = (query: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

type Stop = { time: string; name: string; description: string; maps: string; official?: string; officialLabel?: string; optional?: boolean };
type Day = {
  number: number; title: string; tagline: string; image: string; alt: string; credit: string;
  creditUrl?: string; route: string; duration: string; highlights: string[]; stops: Stop[]; backup: string;
};
const days: Day[] = [
  {
    number: 1, title: "Downtown Gatlinburg", tagline: "Breakfast, aquarium, shops and a mountaintop afternoon",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/GatlinburgAerial.jpg?width=1200",
    alt: "Aerial photograph of downtown Gatlinburg, Tennessee, taken in 2023",
    credit: "Downtown Gatlinburg — Dswitz10734, CC BY-SA 4.0 (2023)", creditUrl: "https://commons.wikimedia.org/wiki/File:GatlinburgAerial.jpg",
    route: "https://www.google.com/maps/dir/?api=1&origin=Crockett%27s+Breakfast+Camp+Gatlinburg&destination=The+Peddler+Steakhouse+Gatlinburg&waypoints=Ripley%27s+Aquarium+of+the+Smokies+Gatlinburg%7CAnakeesta+Gatlinburg",
    duration: "Full day; mostly one downtown corridor",
    highlights: ["Park once or use the free trolley", "One paid attraction in the morning", "Leave time for mountain views"],
    stops: [
      { time: "8:30 AM", name: "Crockett's Breakfast Camp", description: "Start with a substantial breakfast. Check the restaurant's actual opening time, line and current menu before planning around it.", maps: "Crockett's Breakfast Camp Gatlinburg", official: "https://crockettsbreakfastcamp.com/", officialLabel: "Menu & hours" },
      { time: "10:00 AM", name: "Ripley's Aquarium of the Smokies", description: "An indoor downtown anchor with exhibits that work even when weather turns. Allow about two hours, adjusting for your group.", maps: "Ripley's Aquarium of the Smokies Gatlinburg", official: "https://www.ripleyaquariums.com/gatlinburg/", officialLabel: "Photos & tickets" },
      { time: "12:30 PM", name: "Lunch and Parkway browsing", description: "Choose food nearby instead of driving to another town. Explore the Parkway, shops and river-side areas at your own pace.", maps: "Gatlinburg Downtown Parkway", official: "https://www.gatlinburg.com/things-to-do/", officialLabel: "Downtown ideas" },
      { time: "2:00 PM", name: "Anakeesta", description: "Spend the afternoon on the mountaintop if weather and tickets cooperate. Check access, closures and how long you want to stay.", maps: "Anakeesta Gatlinburg", official: "https://anakeesta.com/", officialLabel: "Photos, entry & tickets" },
      { time: "Evening", name: "Dinner downtown", description: "Keep the final meal walkable or trolley-accessible, rather than restarting the parking cycle.", maps: "The Peddler Steakhouse Gatlinburg", official: "https://www.peddlergatlinburg.com/", officialLabel: "Sample dinner venue" },
    ],
    backup: "Rainy? Keep the aquarium as the main event, and replace weather-dependent Anakeesta time with indoor downtown stops. Verify each venue first.",
  },
  {
    number: 2, title: "The national park", tagline: "Visitor center, a waterfall and high-elevation views",
    image: "/images/photos/newfound-gap-autumn.webp",
    alt: "Autumn mountain scenery along Newfound Gap Road in Great Smoky Mountains National Park",
    credit: "Newfound Gap Road — National Park Service photo",
    route: "https://www.google.com/maps/dir/?api=1&origin=Sugarlands+Visitor+Center+Gatlinburg+TN&destination=Kuwohi+Visitor+Center+Great+Smoky+Mountains&waypoints=Newfound+Gap+Overlook",
    duration: "Half to full day; weather controls the high road",
    highlights: ["No park entrance fee", "Parking tag required for stops over 15 minutes", "Keep mountain plans flexible"],
    stops: [
      { time: "9:00 AM", name: "Sugarlands Visitor Center", description: "Pick up park information and confirm which roads and areas are accessible that day.", maps: "Sugarlands Visitor Center Gatlinburg", official: "https://www.nps.gov/grsm/planyourvisit/visitorcenters.htm", officialLabel: "Official visitor center" },
      { time: "9:45 AM", name: "Cataract Falls", description: "Optional 0.7-mile round-trip walk from the visitor center. Surfaces are not uniformly paved; judge by your group's abilities.", maps: "Cataract Falls Trail Sugarlands Visitor Center", official: "https://www.nps.gov/places/cataract-falls.htm", officialLabel: "Trail details", optional: true },
      { time: "11:30 AM", name: "Newfound Gap Road and overlooks", description: "Drive one park corridor, stopping only in legal pull-offs with safe visibility and available parking.", maps: "Newfound Gap Overlook Great Smoky Mountains", official: "https://www.nps.gov/grsm/planyourvisit/conditions.htm", officialLabel: "Road conditions" },
      { time: "1:30 PM", name: "Kuwohi", description: "Optional high-elevation viewpoint if the seasonal access road is open. The observation-tower walk is steep; a shorter stop is fine.", maps: "Kuwohi Visitor Center", official: "https://www.nps.gov/grsm/planyourvisit/seasonalroads.htm", officialLabel: "Seasonal road status", optional: true },
      { time: "Evening", name: "The Peddler Steakhouse", description: "A possible sit-down dinner after returning toward Gatlinburg; confirm reservations and current hours.", maps: "The Peddler Steakhouse Gatlinburg", official: "https://www.peddlergatlinburg.com/", officialLabel: "Reservations & menu" },
    ],
    backup: "Low clouds or road closure? Stay below the ridge: Sugarlands, an appropriate short trail, or return to town. Do not force Kuwohi in poor weather.",
  },
  {
    number: 3, title: "Historic Gatlinburg", tagline: "Forest road, old homesteads and working artisans",
    image: "/images/photos/noah-ogle-cabin.webp",
    alt: "Historic Noah Bud Ogle cabin in Great Smoky Mountains National Park",
    credit: "Noah Bud Ogle historic cabin — National Park Service photo",
    route: "https://www.google.com/maps/dir/?api=1&origin=Noah+Bud+Ogle+Cabin+Gatlinburg&destination=Great+Smoky+Arts+and+Crafts+Community+Gatlinburg&waypoints=Roaring+Fork+Motor+Nature+Trail",
    duration: "Relaxed day; two distinct nearby areas",
    highlights: ["Check the one-way road before leaving", "See a historic mountain homestead", "Browse real local art and crafts"],
    stops: [
      { time: "9:00 AM", name: "Noah 'Bud' Ogle historic site", description: "A surviving mountain farmstead near the entrance to the Roaring Fork drive. Choose the walk that fits your group.", maps: "Noah Bud Ogle Cabin Gatlinburg", official: "https://www.nps.gov/grsm/planyourvisit/roaringfork.htm", officialLabel: "NPS historic route" },
      { time: "10:00 AM", name: "Roaring Fork Motor Nature Trail", description: "A narrow 5.5-mile one-way drive through forest and historic sites. Seasonal closures, vehicle restrictions and limited parking apply.", maps: "Roaring Fork Motor Nature Trail Gatlinburg", official: "https://www.nps.gov/grsm/planyourvisit/seasonalroads.htm", officialLabel: "Check road access", optional: true },
      { time: "12:30 PM", name: "Lunch on the east side of town", description: "Keep lunch between the forest drive and your afternoon destination instead of doubling back downtown.", maps: "Glades Road Gatlinburg restaurants", official: "https://www.gatlinburg.com/food-and-drink/", officialLabel: "Find dining" },
      { time: "1:30 PM", name: "Great Smoky Arts & Crafts Community", description: "Browse the eight-mile arts-and-crafts loop: pottery, woodworking, paintings and studios. Pick a few stops rather than trying to see everything.", maps: "Great Smoky Arts and Crafts Community Gatlinburg", official: "https://www.gatlinburg.com/things-to-do/shopping/arts-and-crafts/", officialLabel: "Shops & galleries" },
      { time: "Evening", name: "Easy last night in Gatlinburg", description: "Dinner or dessert near where you are staying. Avoid scheduling another cross-town attraction just to fill the evening.", maps: "Downtown Gatlinburg Tennessee" },
    ],
    backup: "If Roaring Fork is closed, spend longer at the Arts & Crafts Community or pick another currently accessible lower-elevation park stop.",
  },
];

export default function GatlinburgThreeDayItinerary() {
  return (
    <main className="iti-page">
      <section className="iti-hero">
        <div className="iti-hero-copy">
          <p className="iti-overline">Smokies Insider · Picture itinerary</p>
          <h1>3 unforgettable days in Gatlinburg</h1>
          <p>A real trip you can actually follow: downtown fun, mountain scenery, historic places and local makers. Photos, a practical schedule, maps and links for every day.</p>
          <div className="iti-actions">
            <a href="#day-1" className="iti-button iti-primary">Explore all 3 days ↓</a>
            <PrintButton label="Print or save as PDF" />
          </div>
        </div>
        <img src="/images/photos/cades-cove-autumn.webp" alt="Autumn foliage and mountains in Great Smoky Mountains National Park" />
        <span className="iti-hero-credit">Smokies landscape · National Park Service</span>
      </section>
      <div className="iti-inner">
        <nav className="iti-day-nav" aria-label="Jump to an itinerary day">
          {days.map(day => <a key={day.number} href={`#day-${day.number}`}><small>Day {day.number}</small><strong>{day.title}</strong></a>)}
        </nav>
        <p className="iti-intro">Suggested times are flexible starting points, not live opening-hour confirmations. Choose your park day for the clearest forecast and check reservation requirements before locking the schedule.</p>
        {days.map(day => (
          <section className="iti-day" key={day.number} id={`day-${day.number}`} aria-labelledby={`iti-day-${day.number}`}>
            <div className="iti-photo">
              <img src={day.image} alt={day.alt} loading="lazy" />
              <a className="iti-photo-credit" href={day.creditUrl ?? "/photo-credits"}>{day.credit}</a>
            </div>
            <div className="iti-day-head">
              <div><p className="iti-overline">Day {day.number} · {day.duration}</p><h2 id={`iti-day-${day.number}`}>{day.title}</h2><p>{day.tagline}</p></div>
              <a className="iti-route" href={day.route} target="_blank" rel="noopener noreferrer">Open the day's route ↗</a>
            </div>
            <div className="iti-stops">
              {day.stops.map((stop, i) => (
                <article className="iti-stop" key={stop.name}>
                  <div className="iti-stop-time"><span>{stop.time}</span><small>{String(i+1).padStart(2,"0")}</small></div>
                  <div><h3>{stop.name}{stop.optional ? <small> · Optional</small> : null}</h3><p>{stop.description}</p>
                    <div className="iti-stop-links">
                      <a href={map(stop.maps)} target="_blank" rel="noopener noreferrer">Directions ↗</a>
                      {stop.official ? <a href={stop.official} target="_blank" rel="noopener noreferrer">{stop.officialLabel ?? "Official information"} ↗</a> : null}
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <aside className="iti-backup"><strong>Plan B</strong><p>{day.backup}</p></aside>
          </section>
        ))}
        <section className="iti-finish">
          <h2>Check these before heading out</h2>
          <div className="iti-finish-grid">
            <a href="https://www.nps.gov/grsm/planyourvisit/conditions.htm">Park roads & closures ↗</a>
            <a href="https://www.nps.gov/grsm/planyourvisit/fees.htm">Parking tags ($5 daily / $15 weekly) ↗</a>
            <a href="https://www.gatlinburg.com/things-to-do/trolley/">Free Gatlinburg trolley ↗</a>
            <Link href="/deals">Free activities & verified deals →</Link>
          </div>
          <p>This itinerary was prepared using official visitor sources and the site's licensed photo collection. It does not claim real-time venue availability or guaranteed travel times. If something changes, use the official links above.</p>
        </section>
      </div>
    </main>
  );
}
