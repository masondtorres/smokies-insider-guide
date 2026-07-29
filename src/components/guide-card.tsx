import type { GuideCard as Card } from "@/data/cards";
import { SaveButton } from "./save-button";

function durationLabel(duration: Card["duration"]) {
  if (duration === "short") return "Short stop";
  if (duration === "half-day") return "Half day";
  return "Full day";
}

export function GuideCard({ card, index }: { card: Card; index: number }) {
  return (
    <article className="category-guide-card">
      <header className="category-card-header">
        <span className="category-card-number" aria-hidden="true">{index}</span>
        <p className="category-card-area">{card.area}</p>
      </header>
      <div className="category-card-copy">
        <h3>{card.title}</h3>
        <p>{card.description}</p>
      </div>
      <div className="category-card-meta compact">
        <span>{durationLabel(card.duration)}</span>
        <span>{card.crowdRisk} crowd risk</span>
      </div>
      <aside className="category-card-caution">
        <strong>Check first:</strong>
        <p>{card.caution}</p>
      </aside>
      <div className="category-card-action"><SaveButton id={card.id} /></div>
    </article>
  );
}
