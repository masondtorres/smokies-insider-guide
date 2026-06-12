"use client";

import Link from "next/link";
import { cards, type GuideCard as Card } from "@/data/cards";
import { getPlanWarnings } from "@/lib/plan";
import { usePlanIds, writePlanIds } from "@/lib/use-plan";
import { GuideCard } from "./guide-card";

export function MyPlan() {
  const ids = usePlanIds();
  const items = ids.map((id) => cards.find((card) => card.id === id)).filter((card): card is Card => Boolean(card));
  const warnings = getPlanWarnings(items);

  return <>
    <div className="plan-summary"><p>{items.length} saved {items.length === 1 ? "card" : "cards"}. Stored only in this browser.</p>{items.length > 0 && <button className="button button-small button-danger" type="button" onClick={() => writePlanIds([])}>Clear plan</button>}</div>
    {warnings.length > 0 && <aside className="warning-panel"><h2>Plan checks</h2><ul className="warning-list">{warnings.map((warning) => <li key={warning}>{warning}</li>)}</ul></aside>}
    {items.length === 0 ? <div className="empty-state"><h2>Your plan is empty</h2><p>Browse a category and save the planning cards that fit your trip.</p><div className="button-row"><Link className="button button-primary" href="/go">Start with Go</Link><Link className="button" href="/do">Browse things to do</Link></div></div> : <div className="card-grid">{items.map((card) => <GuideCard key={card.id} card={card} />)}</div>}
    <p className="storage-note">Saved cards can disappear if browser storage is cleared. This is not a reservation system, itinerary guarantee or emergency tool.</p>
  </>;
}
