import type { GuideCard as Card } from "@/data/cards";
import { SaveButton } from "./save-button";

export function GuideCard({ card, index }: { card: Card; index: number }) {
  const duration = card.duration.replace("-", " ");

  return (
    <article className="category-guide-card">
      <header className="category-card-header">
        <span className="category-card-number" aria-hidden="true">{String(index).padStart(2, "0")}</span>
        <p className="category-card-area">{card.area}</p>
      </header>
      <div className="category-card-copy">
        <h3>{card.title}</h3>
        <p>{card.description}</p>
      </div>
      <dl className="category-card-meta">
        <div><dt>Time</dt><dd>{duration}</dd></div>
        <div><dt>Crowds</dt><dd data-risk={card.crowdRisk}>{card.crowdRisk}</dd></div>
        <div><dt>Setting</dt><dd>{card.outdoor ? "outdoors" : "mostly indoors"}</dd></div>
      </dl>
      <aside className="category-card-caution">
        <strong>Check first</strong>
        <p>{card.caution}</p>
      </aside>
      <div className="category-card-action"><SaveButton id={card.id} /></div>
    </article>
  );
}
