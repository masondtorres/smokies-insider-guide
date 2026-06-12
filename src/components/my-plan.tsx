"use client";

import Link from "next/link";
import { researchPlannerPlans } from "@/lib/smokiesData";
import { getPlanWarnings } from "@/lib/plan";
import { usePlanIds, writePlanIds } from "@/lib/use-plan";
import { SaveButton } from "@/components/save-button";

export function MyPlan() {
  const ids = usePlanIds();
  const items = ids
    .map((id) => researchPlannerPlans.find((plan) => plan.id === id))
    .filter((plan): plan is (typeof researchPlannerPlans)[number] => Boolean(plan));
  const warnings = getPlanWarnings(items);

  return (
    <>
      <div className="my-plan-summary">
        <p>{items.length} saved {items.length === 1 ? "plan" : "plans"}. Stored only in this browser.</p>
        {items.length > 0 ? <button type="button" onClick={() => writePlanIds([])}>Clear My Plan</button> : null}
      </div>

      {warnings.length > 0 ? (
        <aside className="my-plan-warnings">
          <h2>Plan checks</h2>
          <ul>{warnings.map((warning) => <li key={warning}>{warning}</li>)}</ul>
        </aside>
      ) : null}

      {items.length === 0 ? (
        <section className="my-plan-empty">
          <h2>Your plan is empty</h2>
          <p>Complete the trip planner, then save the result that best fits your group.</p>
          <Link href="/start-planning">Start planning</Link>
        </section>
      ) : (
        <div className="my-plan-grid">
          {items.map((plan) => (
            <article className="my-plan-card" key={plan.id}>
              <p className="eyebrow">Saved planner result</p>
              <h2>{plan.title}</h2>
              <p><strong>Start:</strong> {plan.bestStartingBase}</p>
              <p><strong>Main anchor:</strong> {plan.mainAnchor}</p>
              <p><strong>Watch:</strong> {plan.parkingMovementWarning}</p>
              <div className="my-plan-card-actions">
                <Link href={plan.bestNextLink.href}>Open best next guide</Link>
                <SaveButton id={plan.id} />
              </div>
            </article>
          ))}
        </div>
      )}

      <p className="my-plan-storage-note">
        Saved plans can disappear if browser storage is cleared. This is not a reservation system, itinerary guarantee or emergency tool.
      </p>
    </>
  );
}
