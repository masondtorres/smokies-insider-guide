"use client";

import Link from "next/link";
import { cards, categoryInfo, type Category } from "@/data/cards";
import { getPlanWarnings } from "@/lib/plan";
import { usePlanIds, writePlanIds } from "@/lib/use-plan";
import { SaveButton } from "@/components/save-button";

export function MyPlan() {
  const ids = usePlanIds();
  const items = ids
    .map((id) => cards.find((card) => card.id === id))
    .filter((card): card is (typeof cards)[number] => Boolean(card));
  const warnings = getPlanWarnings(items);
  const groups = (["go", "do", "see", "eat", "stay", "deals"] as Category[])
    .map((category) => ({ category, items: items.filter((item) => item.category === category) }))
    .filter((group) => group.items.length > 0);

  return (
    <>
      <div className="my-plan-summary">
        <p>{items.length} saved {items.length === 1 ? "item" : "items"}. Stored only in this browser.</p>
        {items.length > 0 ? <button type="button" onClick={() => writePlanIds([])}>Clear My Plan</button> : null}
      </div>

      {warnings.length > 0 ? <aside className="my-plan-warnings">
          <h2>Plan checks</h2>
          <ul>{warnings.map((warning) => <li key={warning}>{warning}</li>)}</ul>
      </aside> : null}

      {items.length === 0 ? (
        <section className="my-plan-empty">
          <h2>Your plan is empty</h2>
          <p>Browse the field-guide cards or answer five quick questions to get a useful starting mix.</p>
          <Link href="/start-planning">Start planning</Link>
        </section>
      ) : (
        <div className="my-plan-groups">
          {groups.map((group) => (
            <section className="my-plan-group" key={group.category}>
              <div className="my-plan-group-heading">
                <p className="eyebrow">Saved category</p>
                <h2>{categoryInfo[group.category].title}</h2>
              </div>
              <div className="my-plan-grid">
                {group.items.map((card) => (
                  <article className="my-plan-card" key={card.id}>
                    <p className="my-plan-card-area">{card.area}</p>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                    <p className="my-plan-card-check"><strong>Check first:</strong> {card.caution}</p>
                    <div className="my-plan-card-actions">
                      <Link href={`/${card.category}`}>Open {categoryInfo[card.category].title}</Link>
                      <SaveButton id={card.id} removeOnly />
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}

      <p className="my-plan-storage-note">
        Saved plans can disappear if browser storage is cleared. This is not a reservation system, itinerary guarantee or emergency tool.
      </p>
    </>
  );
}
