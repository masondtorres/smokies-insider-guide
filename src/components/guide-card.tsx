import type { GuideCard as Card } from "@/data/cards";
import { SaveButton } from "./save-button";

export function GuideCard({ card }: { card: Card }) {
  return <article className="guide-card">
    <p className="eyebrow">{card.category}</p><h2>{card.title}</h2><p>{card.description}</p>
    <div className="card-meta"><span className="tag">{card.area}</span><span className="tag">{card.duration}</span><span className="tag">crowds: {card.crowdRisk}</span></div>
    <p className="card-caution">{card.caution}</p><SaveButton id={card.id} />
  </article>;
}
