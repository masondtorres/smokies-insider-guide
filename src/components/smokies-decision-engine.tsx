"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import styles from "./smokies-decision-engine.module.css";

type Tab = "base" | "today" | "rain";

type BaseResult = {
  place: string;
  reason: string;
  href: string;
  action: string;
};

function getBaseResult(party: string, focus: string): BaseResult {
  if (focus === "walkable") {
    return {
      place: "Start with Gatlinburg",
      reason: "You are prioritizing a compact base with dining, attractions and park access close together. Compare it against Pigeon Forge before booking.",
      href: "/gatlinburg-vs-pigeon-forge",
      action: "Compare Gatlinburg and Pigeon Forge",
    };
  }

  if (focus === "attractions" || party === "kids") {
    return {
      place: "Start with Pigeon Forge",
      reason: "Your trip is attraction-heavy or family-focused. Use Pigeon Forge as the first comparison point, then check whether Gatlinburg or Sevierville fits the rest of the itinerary better.",
      href: "/pigeon-forge-with-kids",
      action: "See the family planning guide",
    };
  }

  if (focus === "park" || party === "outdoors") {
    return {
      place: "Compare Townsend and Gatlinburg first",
      reason: "Your priority is park time rather than stacking attractions. Compare the quieter Townsend side with Gatlinburg based on the entrances, routes and stops you actually plan to use.",
      href: "/start-here",
      action: "Build the park-first plan",
    };
  }

  return {
    place: "Compare Sevierville and Pigeon Forge first",
    reason: "You are prioritizing more space and a flexible base. Start by comparing lodging location against the attractions and park routes already on your list.",
    href: "/stay",
    action: "Choose a base area",
  };
}

const todayAdvice: Record<string, { title: string; text: string; href: string; action: string }> = {
  park: {
    title: "Check the park before you commit to the route",
    text: "Road status, weather, parking requirements and closures can change the plan. Check official current conditions before leaving reliable service, then keep one nearby backup.",
    href: "/visitor-resources",
    action: "Open official park resources",
  },
  cades: {
    title: "Treat Cades Cove as the anchor, not a side stop",
    text: "Build the rest of the day around the loop instead of squeezing it between unrelated stops. Recheck current road status, vehicle schedules and parking requirements before you go.",
    href: "/smokies-parking-trolley-guide",
    action: "Open the parking and timing guide",
  },
  gatlinburg: {
    title: "Choose the parking plan before entering downtown",
    text: "Decide the first parking choice, the backup and the return walk before adding more stops. If the plan depends on trolley service, verify the current official route information first.",
    href: "/smokies-parking-trolley-guide",
    action: "Plan parking and movement",
  },
  pigeonforge: {
    title: "Keep the day in one Parkway zone when you can",
    text: "Pick one main attraction or area and cluster food and backup stops nearby. Cutting unnecessary backtracking usually protects more of the day than adding another stop.",
    href: "/go",
    action: "Plan routes and parking",
  },
};

const rainAdvice: Record<string, { title: string; text: string; href: string; action: string }> = {
  kids: {
    title: "Switch to a contained family backup",
    text: "Use one indoor or covered anchor and keep food nearby. Avoid turning a rainy day into repeated drives across the gateway towns.",
    href: "/rainy-day-smokies-with-kids",
    action: "Open the rainy-day family guide",
  },
  adults: {
    title: "Shrink the map, not the day",
    text: "Choose one town or one covered activity area and stay there long enough to enjoy it. Keep a second option nearby instead of chasing weather across the region.",
    href: "/do",
    action: "Browse indoor and covered options",
  },
  lowwalking: {
    title: "Protect energy before adding stops",
    text: "Choose a backup with limited walking, easy parking or a short transfer, then pair it with food in the same area.",
    href: "/gatlinburg-without-walking-too-much",
    action: "Open the low-walking guide",
  },
};

export function SmokiesDecisionEngine() {
  const [tab, setTab] = useState<Tab>("base");
  const [party, setParty] = useState("kids");
  const [focus, setFocus] = useState("attractions");
  const [today, setToday] = useState("park");
  const [rain, setRain] = useState("kids");

  const base = useMemo(() => getBaseResult(party, focus), [party, focus]);
  const todayResult = todayAdvice[today];
  const rainResult = rainAdvice[rain];

  function tabButton(id: Tab, label: string) {
    return (
      <button
        type="button"
        className={tab === id ? styles.activeTab : styles.tab}
        role="tab"
        aria-selected={tab === id}
        aria-controls={`decision-panel-${id}`}
        id={`decision-tab-${id}`}
        onClick={() => setTab(id)}
      >
        {label}
      </button>
    );
  }

  return (
    <section className={styles.section} aria-labelledby="decision-engine-heading">
      <div className={styles.header}>
        <p className={styles.kicker}>Smoky Insider decision engine</p>
        <h2 id="decision-engine-heading">Make the decision blocking your trip right now.</h2>
        <p>Choose the problem. Get a starting point, then open the deeper guide only when you need it.</p>
      </div>

      <div className={styles.tabs} role="tablist" aria-label="Trip decision tools">
        {tabButton("base", "Where should we stay?")}
        {tabButton("today", "What can change today?")}
        {tabButton("rain", "What if it rains?")}
      </div>

      <div
        id="decision-panel-base"
        role="tabpanel"
        aria-labelledby="decision-tab-base"
        hidden={tab !== "base"}
        className={styles.panel}
      >
        <div className={styles.controls}>
          <label>
            Who is traveling?
            <select value={party} onChange={(event) => setParty(event.target.value)}>
              <option value="kids">Family with children</option>
              <option value="mixed">Multi-generation group</option>
              <option value="couple">Couple or adults</option>
              <option value="outdoors">Hikers and outdoor-focused travelers</option>
            </select>
          </label>
          <label>
            What matters most?
            <select value={focus} onChange={(event) => setFocus(event.target.value)}>
              <option value="attractions">Attractions and entertainment</option>
              <option value="park">National park time</option>
              <option value="walkable">Walkable dining and activity</option>
              <option value="space">Cabin space and flexible driving</option>
            </select>
          </label>
        </div>
        <ResultCard title={base.place} text={base.reason} href={base.href} action={base.action} />
      </div>

      <div
        id="decision-panel-today"
        role="tabpanel"
        aria-labelledby="decision-tab-today"
        hidden={tab !== "today"}
        className={styles.panel}
      >
        <div className={styles.controls}>
          <label>
            What kind of day are you planning?
            <select value={today} onChange={(event) => setToday(event.target.value)}>
              <option value="park">National park road or trail day</option>
              <option value="cades">Cades Cove day</option>
              <option value="gatlinburg">Downtown Gatlinburg day</option>
              <option value="pigeonforge">Pigeon Forge Parkway day</option>
            </select>
          </label>
        </div>
        <ResultCard {...todayResult} />
      </div>

      <div
        id="decision-panel-rain"
        role="tabpanel"
        aria-labelledby="decision-tab-rain"
        hidden={tab !== "rain"}
        className={styles.panel}
      >
        <div className={styles.controls}>
          <label>
            Who needs the backup plan?
            <select value={rain} onChange={(event) => setRain(event.target.value)}>
              <option value="kids">Family with children</option>
              <option value="adults">Adults or couples</option>
              <option value="lowwalking">Older adults or low-walking trip</option>
            </select>
          </label>
        </div>
        <ResultCard {...rainResult} />
      </div>

      <p className={styles.verificationNote}>
        Changing park, road, weather, parking and trolley details should be verified with official sources before travel.
      </p>
    </section>
  );
}

function ResultCard({ title, text, href, action }: { title: string; text: string; href: string; action: string }) {
  return (
    <div className={styles.result} aria-live="polite">
      <h3>{title}</h3>
      <p>{text}</p>
      <Link href={href}>{action}</Link>
    </div>
  );
}
