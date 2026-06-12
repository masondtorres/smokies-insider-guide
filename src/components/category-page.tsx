import type { Category } from "@/data/cards";
import { cardsFor, categoryInfo } from "@/data/cards";
import { GuideCard } from "./guide-card";

export function CategoryPage({ category }: { category: Category }) {
  const info = categoryInfo[category];
  return <main className="page-width">
    <section className="page-hero"><p className="eyebrow">Smokies field guide</p><h1>{info.title}</h1><p>{info.intro}</p></section>
    <section className="section"><div className="section-heading"><h2>Safe planning starters</h2><p>These cards are planning patterns, not verified business listings or guarantees.</p></div><div className="card-grid">{cardsFor(category).map((card) => <GuideCard key={card.id} card={card} />)}</div></section>
  </main>;
}
