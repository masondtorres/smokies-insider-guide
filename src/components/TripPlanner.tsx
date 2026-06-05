"use client";

import Link from "next/link";
import { plannerOptions, plannerResultTemplates } from "@/lib/smokiesData";

export function TripPlanner() {
  return (
    <section className="planner-tool" aria-label="Manual Smokies trip planner">
      <div className="planner-step-rail" aria-label="Planner steps">
        <span>Step 1: Choose your base</span>
        <span>Step 2: Choose your group</span>
        <span>Step 3: Choose your day</span>
        <span>Step 4: Avoid the mistake</span>
      </div>
      <div className="planner-shell static-planner">
        <aside className="planner-menu">
          <p className="eyebrow">Planner menu</p>
          <h2>Pick the closest route.</h2>
          <nav aria-label="Starter plans">
            {plannerResultTemplates.map((template) => (
              <a href={`#${template.id}`} key={template.id}>{template.title}</a>
            ))}
          </nav>
          <dl className="planner-option-list">
            <div><dt>Base choices</dt><dd>{plannerOptions.base.join(", ")}</dd></div>
            <div><dt>Group choices</dt><dd>{plannerOptions.group.join(", ")}</dd></div>
            <div><dt>Day choices</dt><dd>{plannerOptions.day.join(", ")}</dd></div>
            <div><dt>Risk choices</dt><dd>{plannerOptions.risk.join(", ")}</dd></div>
          </dl>
        </aside>
        <div className="planner-result-stack">
          {plannerResultTemplates.map((template) => (
            <PlannerStaticResult key={template.id} {...template} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PlannerStaticResult({
  id,
  title,
  base,
  firstStop,
  mainPlan,
  freeAlternative,
  paidOption,
  foodPairing,
  parkingWarning,
  crowdWarning,
  rainBackup,
  skip,
  links,
}: (typeof plannerResultTemplates)[number]) {
  return (
    <section className="planner-result itinerary-card" id={id}>
      <p className="eyebrow">Route card</p>
      <h2>{title}</h2>
      <dl className="result-facts">
        <div><dt>Best for</dt><dd>{base}</dd></div>
        <div><dt>Start here</dt><dd>{firstStop}</dd></div>
        <div><dt>Lunch zone</dt><dd>{foodPairing}</dd></div>
        <div><dt>Rain backup</dt><dd>{rainBackup}</dd></div>
        <div><dt>Avoid this</dt><dd>{skip}</dd></div>
        <div><dt>Watch for</dt><dd>{parkingWarning} {crowdWarning}</dd></div>
      </dl>
      <ol className="itinerary-timeline">
        {mainPlan.map((item) => (
          <li key={item.label}>
            <span>{item.label}</span>
            <p>{item.text}</p>
          </li>
        ))}
      </ol>
      <div className="route-extra">
        <div><strong>Free or cheaper move</strong><p>{freeAlternative}</p></div>
        <div><strong>Paid category, if it fits</strong><p>{paidOption}</p></div>
      </div>
      <span className="sponsored-label">Future sponsor slot</span>
      <p className="sponsor-note">
        This slot is reserved for a clearly labeled local partner after traffic and verification exist.
      </p>
      <div className="planner-actions">
        <button type="button" onClick={() => window.print()}>Print this plan</button>
        <button disabled type="button">Email my plan, coming soon</button>
      </div>
      <section className="internal-link-grid planner-links">
        <h2>Read next</h2>
        <div>
          {links.map((link) => (
            <Link href={link.href} key={link.href}>
              <strong>{link.title}</strong>
              {link.description ? <span>{link.description}</span> : null}
            </Link>
          ))}
        </div>
      </section>
    </section>
  );
}
