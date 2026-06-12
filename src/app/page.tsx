import Image from "next/image";
import Link from "next/link";

const primary = [
  { title: "Go", text: "Places, towns, scenic routes and park approaches.", href: "/go", image: "/images/explore-smokies-tile.png", position: "center 38%" },
  { title: "Do", text: "Activities, family time and flexible day shapes.", href: "/do", image: "/images/things-to-do-tile.png", position: "center 32%" },
  { title: "See", text: "Views, water, wildlife planning and mountain pauses.", href: "/see", image: "/images/visitor-resources-tile.png", position: "center 32%" },
  { title: "Eat", text: "Meal timing, area choices and useful backups.", href: "/eat", image: "/images/eat-stay-shop-tile.png", position: "center 30%" },
];
const secondary = [
  { title: "Stay", text: "Compare a base that fits the trip.", href: "/stay", mark: "ST" },
  { title: "Deals", text: "Plan value without unverified offers.", href: "/deals", mark: "$" },
  { title: "My Plan", text: "Save ideas and check your trip shape.", href: "/my-plan", mark: "MP" },
];

export default function Home() {
  return <main>
    <section className="mock-hero">
      <div className="ridge ridge-back" aria-hidden="true" /><div className="ridge ridge-mid" aria-hidden="true" /><div className="ridge ridge-front" aria-hidden="true" />
      <div className="page-width mock-hero-content"><p className="eyebrow">Independent Smokies field guide</p><h1>Build your Smokies trip one stop at a time.</h1><p>Explore options, save what fits and build a trip that works.</p><div className="button-row"><Link className="button button-primary" href="/go">Start Planning</Link><Link className="button hero-secondary" href="/my-plan">View My Plan</Link></div></div>
    </section>

    <section className="page-width home-cards" aria-label="Planning categories">
      <div className="primary-home-grid">{primary.map((card) => <article className="home-primary-card" key={card.href}><div className="home-card-image"><Image src={card.image} alt="" fill sizes="(max-width: 560px) 100vw, (max-width: 820px) 50vw, 25vw" style={{ objectPosition: card.position }} /></div><div className="home-card-copy"><h2>{card.title}</h2><p>{card.text}</p><Link className="button button-small" href={card.href}>Explore {card.title}</Link></div></article>)}</div>
      <div className="lower-home-row">{secondary.map((card) => <Link className="home-lower-card" key={card.href} href={card.href}><span className="lower-mark" aria-hidden="true">{card.mark}</span><span><strong>{card.title}</strong><small>{card.text}</small></span><b aria-hidden="true">›</b></Link>)}</div>
    </section>
    <aside className="page-width trust-note"><strong>Plan with a final check.</strong> Smokies Insider is an independent planning site, not an official park or tourism authority. Conditions, access, parking and business details can change.</aside>
  </main>;
}
