"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Base = "gatlinburg" | "pigeon-forge" | "sevierville" | "townsend" | "not-sure";
type Group = "adults" | "young-kids" | "teens" | "low-walking";
type Focus = "park" | "attractions" | "rainy" | "easy";

type Choice<T extends string> = { value: T; label: string };

const bases: Choice<Base>[] = [
  { value: "gatlinburg", label: "Gatlinburg" },
  { value: "pigeon-forge", label: "Pigeon Forge" },
  { value: "sevierville", label: "Sevierville" },
  { value: "townsend", label: "Townsend" },
  { value: "not-sure", label: "Not sure" },
];

const groups: Choice<Group>[] = [
  { value: "adults", label: "Adults" },
  { value: "young-kids", label: "Young kids" },
  { value: "teens", label: "Teens & mixed ages" },
  { value: "low-walking", label: "Low-walking" },
];

const focuses: Choice<Focus>[] = [
  { value: "park", label: "National Park" },
  { value: "attractions", label: "Attractions" },
  { value: "rainy", label: "Rainy day" },
  { value: "easy", label: "Easy food & fun" },
];

type Result = {
  anchor: string;
  why: string;
  caution: string;
  steps: { label: string; href: string }[];
};

function decide(base: Base, group: Group, focus: Focus): Result {
  const walking = group === "low-walking" || group === "young-kids";

  if (focus === "rainy") {
    const town =
      base === "townsend"
        ? "Townsend has fewer indoor backups. Shift the day toward Gatlinburg crafts or Pigeon Forge shows rather than forcing a wet park loop."
        : base === "gatlinburg"
          ? "Stay in town. Use the trolley or one garage and keep the day walkable: Arts & Crafts loop, aquarium, or a show."
          : "Keep the day on the Parkway side. One indoor anchor plus food nearby beats a scenic drive in the clouds.";
    return {
      anchor: base === "townsend" ? "Gatlinburg or Pigeon Forge indoor backup" : "One indoor town anchor",
      why: town,
      caution: "Do not drive to Kuwohi or Cades Cove hoping the rain 'looks lighter up there.' Ridge weather is usually worse.",
      steps: [
        { label: "Rainy-day backups", href: "/rainy-day" },
        { label: "Check today's conditions", href: "/today" },
        { label: walking ? "Low-walking Gatlinburg" : "Eat near the plan", href: walking ? "/gatlinburg-without-walking-too-much" : "/eat" },
      ],
    };
  }

  if (base === "not-sure") {
    if (focus === "attractions") {
      return {
        anchor: "Pigeon Forge or Sevierville",
        why: "If the trip is shows, parks and Parkway entertainment, do not default to a Gatlinburg cabin just because the photos look mountain-close.",
        caution: "Choosing a base by the view from the listing is how families spend half the day in the car.",
        steps: [
          { label: "Gatlinburg vs Pigeon Forge", href: "/gatlinburg-vs-pigeon-forge" },
          { label: "Where to stay by trip type", href: "/where-to-stay" },
          { label: "Build a fuller plan", href: "/start-planning" },
        ],
      };
    }
    return {
      anchor: focus === "park" ? "Townsend or Gatlinburg" : "Match the base to the first two days, not the cabin photo",
      why:
        focus === "park"
          ? "Park-first trips work from Townsend (Cades Cove, quieter access) or Gatlinburg (Sugarlands, Newfound Gap). Pigeon Forge adds a cross-town tax every morning."
          : "Pick the town that matches the first two days. Moving between Townsend and the Parkway for every meal is the classic wasted-day pattern.",
      caution: "Do not book the first available cabin and then invent a route around it.",
      steps: [
        { label: "Compare the four bases", href: "/where-to-stay" },
        { label: "Gatlinburg vs Pigeon Forge", href: "/gatlinburg-vs-pigeon-forge" },
        { label: "Start planning", href: "/start-planning" },
      ],
    };
  }

  if (focus === "park") {
    if (base === "townsend") {
      return {
        anchor: walking ? "Cades Cove loop, driving pace" : "Cades Cove early",
        why: "Townsend is the quiet-side gateway. The cove is the day. Leave early, stay on that side, and eat nearby instead of 'just swinging by' Gatlinburg after.",
        caution: "A late start plus the 11-mile loop is how people lose an afternoon in brake lights.",
        steps: [
          { label: "Cades Cove first-time plan", href: "/cades-cove" },
          { label: "Check roads and closures", href: "/today" },
          { label: "Parking and timing", href: "/parking-timing-cheat-sheet" },
        ],
      };
    }
    if (base === "gatlinburg") {
      return {
        anchor: walking ? "Sugarlands plus one short, paved or overlook stop" : "One park corridor: Newfound Gap or Roaring Fork — not both plus town",
        why: "Gatlinburg is the closest park gateway. Use that. Do not add Cades Cove on the same day you also want downtown.",
        caution: "Parking tags do not reserve a space. Trailhead lots fill. Have a backup that stays on this side of the park.",
        steps: [
          { label: "Check today's park conditions", href: "/today" },
          { label: walking ? "Low-walking plan" : "Scenic stops worth grouping", href: walking ? "/gatlinburg-without-walking-too-much" : "/see" },
          { label: "Parking and trolley", href: "/smokies-parking-trolley-guide" },
        ],
      };
    }
    return {
      anchor: "One park area, not a park-and-Parkway sandwich",
      why:
        base === "pigeon-forge"
          ? "From Pigeon Forge, a park morning only works if you pick one corridor and skip downtown stacking. Cades Cove from here is a commitment, not a side trip."
          : "Sevierville sits between both worlds. Pick park or Parkway as the day's spine. Crossing twice is how the day evaporates.",
      caution: "GPS will happily send you a 'shortcut' that is a mountain road. Download the route before you lose signal.",
      steps: [
        { label: "Check today's conditions", href: "/today" },
        { label: "Cades Cove only if it is the whole day", href: "/cades-cove" },
        { label: "Parking and timing cheat sheet", href: "/parking-timing-cheat-sheet" },
      ],
    };
  }

  if (focus === "attractions") {
    return {
      anchor:
        base === "gatlinburg"
          ? "Park once in Gatlinburg and walk or trolley"
          : "Stay on the Pigeon Forge / Sevierville Parkway spine",
      why:
        group === "young-kids"
          ? "Kids do better with one timed attraction and a nearby meal. Do not add a national-park drive after a theme-park day."
          : "Attractions days die from parking resets. Choose one corridor and one timed ticket, then eat in the same band of the Parkway.",
      caution: "A 4 p.m. park 'quick look' after Dollywood is how you meet Newfound Gap traffic in the dark.",
      steps: [
        { label: base === "gatlinburg" ? "Things to do in Gatlinburg" : "Pigeon Forge with kids", href: base === "gatlinburg" ? "/things-to-do/gatlinburg" : "/pigeon-forge-with-kids" },
        { label: "Parking and trolley", href: "/smokies-parking-trolley-guide" },
        { label: "Keep a rainy indoor backup", href: "/rainy-day" },
      ],
    };
  }

  return {
    anchor:
      base === "townsend"
        ? "Stay on the quiet side: one scenic drive plus a nearby meal"
        : "Park once. Eat in the same town as the afternoon.",
    why:
      walking
        ? "Choose a flat or trolley-served stretch and keep the meal next to it. Hills, stairs and 'it is just a little further' wreck low-walking days."
        : "The Smokies punish extra car moves. One town for the afternoon is more restful than a better-reviewed restaurant two towns over.",
    caution: "Do not chase a dinner reservation across the county after a park day.",
    steps: [
      { label: "Eat near the plan", href: "/eat" },
      { label: walking ? "Gatlinburg without too much walking" : "Go / parking", href: walking ? "/gatlinburg-without-walking-too-much" : "/go" },
      { label: "Save the day in My Plan", href: "/my-plan" },
    ],
  };
}

function Pills<T extends string>({
  legend,
  value,
  options,
  onChange,
  name,
}: {
  legend: string;
  value: T;
  options: Choice<T>[];
  onChange: (value: T) => void;
  name: string;
}) {
  return (
    <fieldset className="si-choice-row">
      <legend>{legend}</legend>
      <div className="si-pills">
        {options.map((option) => {
          const selected = option.value === value;
          const id = `${name}-${option.value}`;
          return (
            <label key={option.value} className={`si-pill${selected ? " is-active" : ""}`} htmlFor={id}>
              <input
                id={id}
                type="radio"
                name={name}
                value={option.value}
                checked={selected}
                onChange={() => onChange(option.value)}
              />
              {option.label}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

export function DecisionEngine() {
  const [base, setBase] = useState<Base>("gatlinburg");
  const [group, setGroup] = useState<Group>("adults");
  const [focus, setFocus] = useState<Focus>("park");
  const result = useMemo(() => decide(base, group, focus), [base, group, focus]);

  return (
    <form className="si-engine" aria-labelledby="engine-title" onSubmit={(event) => event.preventDefault()}>
      <p className="si-section-kicker">Local decision engine</p>
      <h2 className="si-engine-title" id="engine-title">
        Where should today actually happen?
      </h2>
      <p className="si-engine-lead">
        Answer three questions. Get one geographic anchor, the reason it fits, and the next useful step — not another list of attractions.
      </p>

      <Pills legend="Where are you staying?" name="base" value={base} options={bases} onChange={setBase} />
      <Pills legend="Who is traveling?" name="group" value={group} options={groups} onChange={setGroup} />
      <Pills legend="What matters today?" name="focus" value={focus} options={focuses} onChange={setFocus} />

      <div className="si-result" role="status" aria-live="polite">
        <p className="si-result-meta">Today's anchor</p>
        <h3>{result.anchor}</h3>
        <p>{result.why}</p>
        <p>
          <strong>Watch for: </strong>
          {result.caution}
        </p>
        <ol>
          {result.steps.map((step) => (
            <li key={step.href}>
              <Link href={step.href}>{step.label}</Link>
            </li>
          ))}
        </ol>
      </div>
    </form>
  );
}
