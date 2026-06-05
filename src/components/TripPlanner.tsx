"use client";

import Link from "next/link";
import { plannerOptions, plannerResultTemplates } from "@/lib/smokiesData";

export function TripPlanner() {
  return (
    <section className="planner-shell static-planner" aria-label="Manual Smokies trip planner">
      <div className="planner-questions">
        <section className="planner-question">
          <h2>Choose the closest starter plan</h2>
          <p>
            This is a manual decision page. Pick the result that best matches your
            base, group, day style or biggest risk.
          </p>
          <div>
            {plannerResultTemplates.map((template) => (
              <a href={`#${template.id}`} key={template.id}>{template.title}</a>
            ))}
          </div>
        </section>
        <section className="planner-question">
          <h2>Questions this planner uses</h2>
          <dl className="planner-option-list">
            <div><dt>Where are you staying or starting?</dt><dd>{plannerOptions.base.join(", ")}</dd></div>
            <div><dt>How much time do you have?</dt><dd>{plannerOptions.time.join(", ")}</dd></div>
            <div><dt>Who is going?</dt><dd>{plannerOptions.group.join(", ")}</dd></div>
            <div><dt>What kind of day do you want?</dt><dd>{plannerOptions.day.join(", ")}</dd></div>
            <div><dt>What could ruin the day?</dt><dd>{plannerOptions.risk.join(", ")}</dd></div>
          </dl>
        </section>
      </div>
      <div className="planner-result-stack">
        {plannerResultTemplates.map((template) => (
          <PlannerStaticResult key={template.id} {...template} />
        ))}
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
    <section className="planner-result" id={id}>
      <p className="eyebrow">Starter plan</p>
      <h2>{title}</h2>
      <dl className="result-facts">
        <div><dt>Recommended base</dt><dd>{base}</dd></div>
        <div><dt>First stop</dt><dd>{firstStop}</dd></div>
        <div><dt>Free or cheaper alternative</dt><dd>{freeAlternative}</dd></div>
        <div><dt>Paid option category</dt><dd>{paidOption}</dd></div>
        <div><dt>Food pairing</dt><dd>{foodPairing}</dd></div>
        <div><dt>Parking warning</dt><dd>{parkingWarning}</dd></div>
        <div><dt>Crowd warning</dt><dd>{crowdWarning}</dd></div>
        <div><dt>Rain backup</dt><dd>{rainBackup}</dd></div>
        <div><dt>What to skip</dt><dd>{skip}</dd></div>
      </dl>
      <ol className="itinerary-timeline">
        {mainPlan.map((item) => (
          <li key={item.label}>
            <span>{item.label}</span>
            <p>{item.text}</p>
          </li>
        ))}
      </ol>
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
