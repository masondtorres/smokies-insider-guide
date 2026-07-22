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
      return a.card.area.localeCompare(b.card.area) || a.card.title.localeCompare(b.card.title);
    });
  const warnings = getPlanWarnings(plan, cards);

  const byArea = items.reduce<Record<string, typeof items>>((acc, entry) => {
    const key = entry.card.area || "Other";
    if (!acc[key]) acc[key] = [];
    acc[key].push(entry);
    return acc;
  }, {});

  function handleClear() {
    if (window.confirm("Clear every saved item, day assignment and note from My Plan?")) {
      clearPlan();
    }
  }

  function handlePrint() {
    window.print();
  }

  function handleExport() {
    const lines = [
      "Smoky Insider — My Plan",
      `Exported: ${new Date().toISOString()}`,
      "Stored only in this browser. Not a reservation or live conditions source.",
      "",
    ];

    for (const entry of items) {
      lines.push(
        [
          entry.card.title,
          `Area: ${entry.card.area}`,
          `Category: ${categoryInfo[entry.card.category].title}`,
          entry.saved.day ? `Day: ${entry.saved.day}` : "Day: unassigned",
          entry.saved.isAnchor ? "Anchor: yes" : "Anchor: no",
          entry.saved.note ? `Notes: ${entry.saved.note}` : "",
          entry.card.caution ? `Check first: ${entry.card.caution}` : "",
        ]
          .filter(Boolean)
          .join("\n"),
      );
      lines.push("---");
    }

    const blob = new Blob([lines.join("\n\n")], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `smoky-insider-my-plan-${new Date().toISOString().slice(0, 10)}.txt`;
    anchor.click();
    URL.revokeObjectURL(url);
  }

  return (
    <>
      <div className={styles.summary}>
        <p>
          {items.length} saved {items.length === 1 ? "item" : "items"}. Stored only in this browser.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {items.length > 0 ? (
            <>
              <button className={styles.clearButton} type="button" onClick={handlePrint}>
                Print plan
              </button>
              <button className={styles.clearButton} type="button" onClick={handleExport}>
                Download plan
              </button>
              <button className={styles.clearButton} type="button" onClick={handleClear}>
                Clear My Plan
              </button>
            </>
          ) : null}
        </div>
      </div>

      <aside className={styles.storageNote} style={{ marginBottom: "1.25rem" }}>
        <strong>Browser storage only.</strong> My Plan stays on this device. Clearing browser data,
        private mode, or switching phones can erase it. There is no cloud account sync yet.
        Email-to-save is not connected until the site owner configures delivery.
      </aside>

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
          <p>
            Start with one decision: where to base the trip, where to park on day one, or one main
            activity. Save cards as you browse. Plans stay in this browser only.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "1rem" }}>
            <Link href="/start-planning">Start planning</Link>
            <Link href="/go">Plan routes & parking</Link>
            <Link href="/smokies-parking-trolley-guide">Parking guide</Link>
          </div>
        </section>
      ) : (
        Object.entries(byArea).map(([area, areaItems]) => (
          <section key={area} style={{ marginBottom: "2rem" }}>
            <h2 style={{ fontSize: "1.15rem", marginBottom: "0.75rem" }}>{area}</h2>
            <div className={styles.list}>
              {areaItems.map(({ saved, card }) => (
                <article className={styles.card} key={card.id}>
                  <div className={styles.cardHeader}>
                    <div>
                      <p className={styles.area}>{card.area}</p>
                      <h3 style={{ margin: 0, fontSize: "1.1rem" }}>{card.title}</h3>
                      <p className={styles.meta}>
                        {categoryInfo[card.category].title} · {card.duration.replace("-", " ")} ·{" "}
                        {card.crowdRisk} crowd risk
                      </p>
                    </div>
                    {saved.isAnchor ? (
                      <span className={styles.anchorBadge}>Day {saved.day} anchor</span>
                    ) : null}
                  </div>

                  <p>{card.description}</p>
                  <p>
                    <strong>Check first:</strong> {card.caution}
                  </p>

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
                          <option value={day} key={day}>
                            Day {day}
                          </option>
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
          </section>
        ))
      )}

      <p className={styles.storageNote}>
        Saved plans can disappear if browser storage is cleared. My Plan is not a reservation system,
        itinerary guarantee, road-status source or emergency tool.
      </p>
    </>
  );
}
