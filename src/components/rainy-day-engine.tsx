"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  planRainyDay,
  type RainLevel,
  type RainWant,
  type RainWhere,
  type RainWho,
} from "@/lib/rainy-day";

const whoOptions: { value: RainWho; label: string }[] = [
  { value: "young-kids", label: "Young kids" },
  { value: "teens", label: "Teens / mixed ages" },
  { value: "adults", label: "Adults" },
  { value: "low-walking", label: "Low-walking / seniors" },
];

const whereOptions: { value: RainWhere; label: string }[] = [
  { value: "gatlinburg", label: "Gatlinburg" },
  { value: "pigeon-forge", label: "Pigeon Forge" },
  { value: "sevierville", label: "Sevierville" },
  { value: "townsend", label: "Townsend" },
  { value: "not-sure", label: "Not sure" },
];

const rainOptions: { value: RainLevel; label: string }[] = [
  { value: "light", label: "Light / on and off" },
  { value: "heavy", label: "Heavy rain" },
  { value: "stormy", label: "Stormy / outdoor plans are dead" },
];

const wantOptions: { value: RainWant; label: string }[] = [
  { value: "attractions", label: "Attractions" },
  { value: "food", label: "Food + easy entertainment" },
  { value: "shopping", label: "Shopping" },
  { value: "indoors", label: "Mostly indoors" },
  { value: "low-drive", label: "Lowest driving possible" },
];

function Fieldset<T extends string>({
  legend,
  value,
  options,
  onChange,
}: {
  legend: string;
  value: T;
  options: { value: T; label: string }[];
  onChange: (value: T) => void;
}) {
  return (
    <fieldset className="rain-field">
      <legend>{legend}</legend>
      <div className="rain-options">
        {options.map((option) => (
          <label key={option.value} className={option.value === value ? "is-on" : ""}>
            <input
              type="radio"
              name={legend}
              value={option.value}
              checked={option.value === value}
              onChange={() => onChange(option.value)}
            />
            {option.label}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export function RainyDayEngine() {
  const [who, setWho] = useState<RainWho>("young-kids");
  const [where, setWhere] = useState<RainWhere>("gatlinburg");
  const [rain, setRain] = useState<RainLevel>("heavy");
  const [want, setWant] = useState<RainWant>("indoors");
  const plan = useMemo(() => planRainyDay({ who, where, rain, want }), [who, where, rain, want]);

  return (
    <section className="rain-tool" aria-labelledby="rain-tool-title">
      <div className="rain-tool-copy">
        <p className="home-kicker">Rainy-day decision</p>
        <h2 id="rain-tool-title">Salvage the day without crossing the county.</h2>
        <p>
          Answer four questions. The point is one geographic anchor, a few practical stops and a
          backup if the rain gets worse.
        </p>
      </div>
      <form className="rain-form" onSubmit={(event) => event.preventDefault()}>
        <Fieldset legend="Who is traveling?" value={who} options={whoOptions} onChange={setWho} />
        <Fieldset legend="Where are you based?" value={where} options={whereOptions} onChange={setWhere} />
        <Fieldset legend="Rain level / situation" value={rain} options={rainOptions} onChange={setRain} />
        <Fieldset legend="What kind of day do you want?" value={want} options={wantOptions} onChange={setWant} />
      </form>
      <div className="rain-result" aria-live="polite">
        <p className="rain-label">Recommended geographic anchor</p>
        <h3>{plan.anchor}</h3>
        <p>{plan.why}</p>
        <p className="rain-label">Practical stops</p>
        <ol>
          {plan.stops.map((stop) => (
            <li key={stop.name}>
              {stop.href ? <Link href={stop.href}>{stop.name}</Link> : <strong>{stop.name}</strong>}
              <span>{stop.why}</span>
            </li>
          ))}
        </ol>
        <p className="rain-label">Driving / geographic warning</p>
        <p>{plan.warning}</p>
        <p className="rain-label">If conditions worsen</p>
        <p>{plan.backup}</p>
        <p className="rain-links">
          <Link href="/today">Check official conditions</Link>
          <Link href="/parking-traffic">Parking and traffic</Link>
        </p>
      </div>
    </section>
  );
}
