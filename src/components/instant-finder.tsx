"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { mapsUrl, places } from "@/data/places";

type Area = "all" | "Gatlinburg" | "Pigeon Forge" | "Sevierville" | "Townsend";
type Intent = "free" | "rain" | "family";

type Spotlight = {
  id: string;
  name: string;
  town: Exclude<Area, "all">;
  goals: Intent[];
  description: string;
  cost: string;
  website: string;
  query: string;
  guide: string;
  caution?: string;
};

const spotlights: Spotlight[] = [
  {
    id: "sugarlands",
    name: "Sugarlands Visitor Center",
    town: "Gatlinburg",
    goals: ["free", "rain", "family"],
    description: "National park exhibits, maps and ranger information, two miles south of Gatlinburg. A good first park stop.",
    cost: "No park admission fee; parking tag rules apply",
    website: "https://www.nps.gov/grsm/planyourvisit/visitorcenters.htm",
    query: "Sugarlands Visitor Center Gatlinburg Tennessee",
    guide: "/today",
    caution: "Indoor exhibits do not make mountain roads safe in severe weather.",
  },
  {
    id: "newfound-gap",
    name: "Newfound Gap scenic drive",
    town: "Gatlinburg",
    goals: ["free", "family"],
    description: "Mountain views on the US-441 park corridor. Check road status and visibility before heading up.",
    cost: "No park admission fee; parking tag rules apply",
    website: "https://www.nps.gov/grsm/planyourvisit/conditions.htm",
    query: "Newfound Gap Overlook Great Smoky Mountains National Park",
    guide: "/today",
    caution: "High-elevation weather can change rapidly.",
  },
  {
    id: "island",
    name: "The Island in Pigeon Forge",
    town: "Pigeon Forge",
    goals: ["free", "family"],
    description: "Browse, people-watch and see the show fountains without buying an attraction ticket. Rides, dining and shops cost extra.",
    cost: "Free admission and parking; optional purchases",
    website: "https://islandinpigeonforge.com/",
    query: "The Island in Pigeon Forge Tennessee",
    guide: "/pigeon-forge",
  },
  {
    id: "dolly-statue",
    name: "Dolly Parton statue and historic downtown",
    town: "Sevierville",
    goals: ["free", "family"],
    description: "See the Dolly Parton statue by the historic county courthouse and explore the downtown landmarks on foot.",
    cost: "Outdoor sightseeing; parking and purchases vary",
    website: "https://visitsevierville.com/What-to-Do-in-Downtown-Sevierville.aspx",
    query: "Dolly Parton Statue 125 Court Avenue Sevierville Tennessee",
    guide: "/sevierville",
  },
  {
    id: "cades",
    name: "Cades Cove Loop Road",
    town: "Townsend",
    goals: ["free", "family"],
    description: "A slow scenic loop with historic sites and wildlife-viewing opportunities. Treat the loop as the main outing.",
    cost: "No park admission fee; parking tag rules apply",
    website: "https://www.nps.gov/grsm/planyourvisit/conditions.htm",
    query: "Cades Cove Loop Road Townsend Tennessee",
    guide: "/cades-cove",
    caution: "Road access and vehicle-free dates can change the plan.",
  },
  {
    id: "townsend-wye",
    name: "Townsend Wye",
    town: "Townsend",
    goals: ["free", "family"],
    description: "A riverside stop near the Townsend entrance. Use legal parking and stay out of dangerous water.",
    cost: "No park admission fee; parking tag rules apply",
    website: "https://www.nps.gov/grsm/planyourvisit/conditions.htm",
    query: "Townsend Wye Great Smoky Mountains National Park",
    guide: "/townsend",
    caution: "Never enter fast or high water; check conditions first.",
  },
];

const venueIds: Record<Intent, string[]> = {
  free: [],
  rain: ["ripleys-aquarium-gatlinburg", "wonderworks-pigeon-forge", "titanic-museum-pigeon-forge"],
  family: ["dollywood", "ripleys-aquarium-gatlinburg", "wonderworks-pigeon-forge", "anakeesta"],
};

const areas: { value: Area; label: string }[] = [
  { value: "all", label: "Anywhere" },
  { value: "Gatlinburg", label: "Gatlinburg" },
  { value: "Pigeon Forge", label: "Pigeon Forge" },
  { value: "Sevierville", label: "Sevierville" },
  { value: "Townsend", label: "Townsend" },
];

const interests: { value: Intent; label: string }[] = [
  { value: "free", label: "Free & low-cost" },
  { value: "rain", label: "Rainy-day escape" },
  { value: "family", label: "Family favorites" },
];

const officialConditions = "https://www.nps.gov/grsm/planyourvisit/conditions.htm";
const parkingTags = "https://www.nps.gov/grsm/planyourvisit/fees.htm";

export function InstantFinder() {
  const [area, setArea] = useState<Area>("all");
  const [intent, setIntent] = useState<Intent>("free");

  const recommendations = useMemo(() => {
    const built = [
      ...spotlights.filter((spotlight) => spotlight.goals.includes(intent)),
      ...places
        .filter((place) => venueIds[intent].includes(place.slug))
        .map((place): Spotlight => ({
          id: place.slug,
          name: place.name,
          town: place.town as Spotlight["town"],
          goals: [intent],
          description: place.familyFit,
          cost: "Paid attraction; check current admission",
          website: place.website,
          query: place.mapsQuery,
          guide: `/places/${place.slug}`,
          caution: place.note,
        })),
    ];
    const inArea = area === "all" ? built : built.filter((item) => item.town === area);
    const nearby = area === "all" ? [] : built.filter((item) => item.town !== area);
    // Nearby options are clearly labeled by town; never imply they are in the chosen town.
    return [...inArea, ...nearby].slice(0, 3);
  }, [area, intent]);

  const hasNearby = area !== "all" && recommendations.some((item) => item.town !== area);

  return (
    <section className="find-now" id="find-now" aria-labelledby="find-title">
      <div className="find-now-header">
        <div>
          <p className="find-kicker">Make a decision, not another search</p>
          <h2 id="find-title">Find your next stop.</h2>
          <p>Pick an area and what sounds good. Get named places with directions and the source that controls the details.</p>
        </div>
        <Link href="/today" className="find-conditions">Check roads & weather <span aria-hidden="true">↗</span></Link>
      </div>
      <div className="find-controls">
        <fieldset>
          <legend>Where are you going?</legend>
          <div className="find-options">
            {areas.map((option) => (
              <button key={option.value} type="button" aria-pressed={area === option.value}
                className={area === option.value ? "selected" : ""}
                onClick={() => setArea(option.value)}>{option.label}</button>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend>What do you feel like doing?</legend>
          <div className="find-options">
            {interests.map((option) => (
              <button key={option.value} type="button" aria-pressed={intent === option.value}
                className={intent === option.value ? "selected" : ""}
                onClick={() => setIntent(option.value)}>{option.label}</button>
            ))}
          </div>
        </fieldset>
      </div>
      <div className="find-result-head" aria-live="polite">
        <strong>{intent === "rain" ? "Indoor options and backups" : intent === "free" ? "Worthwhile stops without stacking tickets" : "Popular family attractions"}</strong>
        <span>{hasNearby ? "Some suggestions are in nearby towns; check travel before leaving." : "Choose a stop, then check the official source."}</span>
      </div>
      <div className="find-results">
        {recommendations.map((item) => (
          <article className="find-place" key={item.id}>
            <div className="find-place-top">
              <span>{item.town}</span>
              <span>{item.cost}</span>
            </div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            {item.caution && intent === "rain" ? <p className="find-caution">{item.caution}</p> : null}
            <div className="find-place-links">
              <a className="find-map-link" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.query)}`} target="_blank" rel="noopener noreferrer">Directions ↗</a>
              <a href={item.website} target="_blank" rel="noopener noreferrer">Official details ↗</a>
              <Link href={item.guide}>Explore</Link>
            </div>
          </article>
        ))}
      </div>
      <div className="find-bottom">
        <p>These are researched starting points, <strong>not live availability or open-now claims.</strong> For park stops, check <a href={officialConditions} target="_blank" rel="noopener noreferrer">current conditions</a> and <a href={parkingTags} target="_blank" rel="noopener noreferrer">parking tags</a>.</p>
        <Link href="/my-plan">Open My Plan →</Link>
      </div>
    </section>
  );
}
