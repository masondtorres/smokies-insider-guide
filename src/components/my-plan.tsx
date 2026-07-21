"use client";

import Link from "next/link";
import { cards, categoryInfo } from "@/data/cards";
import { getPlanWarnings } from "@/lib/plan";
import {
  assignPlanDay,
  clearPlan,
  setPlanAnchor,
  setPlanNote,
  usePlan,
} from "@/lib/use-plan";
import { SaveButton } from "@/components/save-button";
import styles from "@/components/my-plan.module.css";

export function MyPlan() {
  const plan = usePlan();
  const items = plan.items
    .flatMap((saved) => {
      const card = cards.find((candidate) => candidate.id === saved.id);
      return card ? [{ saved, card }] : [];
    })
    .sort((a, b) => {
      const dayDifference = (a.saved.day ?? 99) - (b.saved.day ?? 99);
      if (dayDifference !== 0) return dayDifference;
      return a.card.title.localeCompare(b.card.title);
    });
  const warnings = getPlanWarnings(plan, cards);

  function handleClear() {
    if (window.confirm("Clear every saved item, day assignment and note from My Plan?")) {
      clearPlan();
    }
  }

  return (
    <>
      <div className={styles.summary}>
        <p>
          {items.length} saved {items.length === 1 ? "item" : "items"}. Stored only in this browser.
        </p>
        {items.length > 0 ? (
          <button className={styles.clearButton} type="button" onClick={handleClear}>
            Clear My Plan
          </button>
        ) : null}
      </div>

      {warnings.length > 0 ? (
        <aside className={styles.warnings} aria-labelledby="plan-checks-title">
          <h2 id="plan-checks-title">Plan checks</h2>
          <ul>
            {warnings.map((warning) => (
              <li key={`${warning.type}-${warning.day ?? "all"}`}>{warning.message}</li>
            ))}
          </ul>
        </aside>
      ) : null}

      {items.length === 0 ? (
        <section className={`${styles.empty} my-plan-empty-state`}>
          <div className="my-plan-empty-visual" aria-hidden="true" />
          <h2>Your plan is empty</h2>
          <p>Browse the field-guide cards or answer five quick questions to get a useful starting mix.</p>
          <Link href="/start-planning">Start planning</Link>
        </section>
      ) : (
        <div className={styles.list}>
          {items.map(({ saved, card }) => (
            <article className={styles.card} key={card.id}>
              <div className={styles.cardHeader}>
                <div>
                  <p className={styles.area}>{card.area}</p>
                  <h2>{card.title}</h2>
                  <p className={styles.meta}>
                    {categoryInfo[card.category].title} · {card.duration.replace("-", " ")} · {card.crowdRisk} crowd risk
                  </p>
                </div>
                {saved.isAnchor ? <span className={styles.anchorBadge}>Day {saved.day} anchor</span> : null}
              </div>

              <p>{card.description}</p>
              <p><strong>Check first:</strong> {card.caution}</p>

              <div className={styles.controls}>
                <label className={styles.field}>
                  Day
                  <select
                    aria-label={`Assign ${card.title} to a day`}
                    value={saved.day ?? ""}
                    onChange={(event) => {
                      const value = event.target.value;
                      assignPlanDay(card.id, value ? Number(value) : undefined);
                    }}
                  >
                    <option value="">Unassigned</option>
                    {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                      <option value={day} key={day}>Day {day}</option>
                    ))}
                  </select>
                </label>

                <label className={styles.anchorField}>
                  <input
                    type="checkbox"
                    checked={Boolean(saved.isAnchor)}
                    disabled={!saved.day}
                    onChange={(event) => setPlanAnchor(card.id, event.target.checked)}
                  />
                  Make this the main anchor for Day {saved.day ?? "—"}
                </label>

                <label className={styles.field}>
                  Notes
                  <textarea
                    className={styles.note}
                    defaultValue={saved.note ?? ""}
                    maxLength={500}
                    placeholder="Parking backup, meal timing, confirmation number or family note"
                    onBlur={(event) => setPlanNote(card.id, event.target.value)}
                  />
                </label>
              </div>

              <div className={styles.actions}>
                <Link href={card.href ?? `/${card.category}`}>
                  {card.href ? "Open guide" : `Open ${categoryInfo[card.category].title}`}
                </Link>
                <SaveButton id={card.id} removeOnly />
              </div>
            </article>
          ))}
        </div>
      )}

      <p className={styles.storageNote}>
        Saved plans can disappear if browser storage is cleared. My Plan is not a reservation system, itinerary guarantee, road-status source or emergency tool.
      </p>
    </>
  );
}
