import Link from "next/link";

const navItems = [
{ label: "Things to Do", href: "/things-to-do" },
{ label: "Places to Eat", href: "/restaurants" },
{ label: "Where to Stay", href: "/where-to-stay" },
{ label: "Deals", href: "/deals" },
{ label: "Visitor Resources", href: "/visitor-resources" },
];

const cards = [
{
title: "Explore the Smokies",
copy: "Pick the right town, road or park area.",
href: "/explore",
image: "/images/explore-smokies-tile.png",
},
{
title: "Things to Do",
copy: "Find attractions, shows, hikes and rainy-day ideas.",
href: "/things-to-do",
image: "/images/things-to-do-tile.png",
},
{
title: "Places to Eat",
copy: "Find restaurants, local eats and sweet stops.",
href: "/restaurants",
image: "/images/eat-stay-shop-tile.png",
},
{
title: "Where to Stay",
copy: "Cabins, hotels and places that fit your trip.",
href: "/where-to-stay",
image: "/images/eat-stay-shop-tile.png",
},
{
title: "Deals & Coupons",
copy: "Save with local deals and verified offers.",
href: "/deals",
image: "/images/coupons-deals-tile.png",
},
{
title: "Visitor Resources",
copy: "Parking, maps, trolleys, accessibility and more.",
href: "/visitor-resources",
image: "/images/visitor-resources-tile.png",
},
];

const footerLinks = [
{ label: "About Us", href: "/about" },
{ label: "Advertise", href: "/advertise" },
{ label: "Contact Us", href: "/contact" },
{ label: "Privacy Policy", href: "/privacy-policy" },
{ label: "Editorial Policy", href: "/editorial-policy" },
];

export const metadata = {
title: "Smokies Insider Guide | Smoky Mountains Trip Planning",
description:
"Plan a better Great Smoky Mountains trip with insider help for Gatlinburg, Pigeon Forge, Sevierville and Townsend, including things to do, places to eat, where to stay, deals, parking and visitor resources.",
};

function Logo() {
return ( <span className="homeV2Logo" aria-label="Smokies Insider Guide"> <span className="homeV2LogoMark" aria-hidden="true"> <svg viewBox="0 0 92 58" role="img"> <path d="M4 49h84M11 44l9-14 8 10 16-26 12 18 9-12 18 24" /> <path d="M15 51V39M24 51V35M33 51V41" /> <path d="M13 40h11l-5-7-6 7Zm8-5h10l-5-7-5 7Zm7 8h13l-7-9-6 9Z" /> </svg> </span> <span> <strong>Smokies</strong> <small>Insider Guide</small> </span> </span>
);
}

export default function HomeV2Page() {
return ( <main className="homeV2"> <header className="homeV2Header"> <Link className="homeV2Brand" href="/" aria-label="Smokies Insider Guide home"> <Logo /> </Link>

```
    <nav className="homeV2Nav" aria-label="Primary navigation">
      {navItems.map((item) => (
        <Link key={item.href} href={item.href}>
          {item.label}
        </Link>
      ))}
    </nav>

    <Link className="homeV2PlanButton" href="/start-planning">
      Start Planning
    </Link>
  </header>

  <section className="homeV2Hero" aria-labelledby="home-v2-heading">
    <img
      className="homeV2HeroImage"
      src="/images/explore-smokies-tile.png"
      alt="Misty Smoky Mountain ridges at sunrise"
    />
    <div className="homeV2HeroShade" />
    <div className="homeV2HeroContent">
      <h1 id="home-v2-heading">See the Smokies like an insider.</h1>
      <p>
        Pick your town, your group and the kind of day you want. We&apos;ll point you
        toward better routes, food, deals, parking notes and backup plans.
      </p>
      <div className="homeV2HeroActions">
        <Link className="homeV2PrimaryCta" href="/start-planning">
          Start Planning Your Trip
          <span aria-hidden="true">{">"}</span>
        </Link>
        <Link className="homeV2SecondaryCta" href="/things-to-do">
          Things to Do
          <span aria-hidden="true">{">"}</span>
        </Link>
      </div>
    </div>
  </section>

  <section className="homeV2Start" aria-labelledby="home-v2-start-heading">
    <div className="homeV2SectionTitle">
      <span />
      <h2 id="home-v2-start-heading">Start with what you need</h2>
      <span />
    </div>

    <div className="homeV2CardGrid">
      {cards.map((card) => (
        <Link className="homeV2Card" href={card.href} key={card.href}>
          <span className="homeV2CardImageWrap">
            <img src={card.image} alt="" />
          </span>
          <span className="homeV2CardBody">
            <strong>{card.title}</strong>
            <span>{card.copy}</span>
            <b aria-hidden="true">{">"}</b>
          </span>
        </Link>
      ))}
    </div>
  </section>

  <footer className="homeV2Footer">
    <div className="homeV2FooterInner">
      <Link className="homeV2FooterLogo" href="/" aria-label="Smokies Insider Guide home">
        <Logo />
      </Link>
      <p>The insider&apos;s guide to better Smoky Mountain trips.</p>
      <nav aria-label="Footer navigation">
        {footerLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  </footer>

  <style>{`
    .homeV2 {
      min-height: 100vh;
      color: #173528;
      background: #f4eddc;
      font-family: Arial, Helvetica, sans-serif;
    }

    .homeV2 a {
      color: inherit;
      text-decoration: none;
    }

    .homeV2Header {
      position: sticky;
      top: 0;
      z-index: 10;
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
      gap: 28px;
      min-height: 88px;
      padding: 14px clamp(18px, 4vw, 56px);
      background: rgba(248, 242, 226, .96);
      border-bottom: 1px solid rgba(23, 53, 40, .1);
      box-shadow: 0 12px 24px rgba(34, 45, 35, .06);
      backdrop-filter: blur(12px);
    }

    .homeV2Brand,
    .homeV2FooterLogo {
      display: inline-flex;
      align-items: center;
    }

    .homeV2Logo {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      color: #173528;
    }

    .homeV2LogoMark {
      display: inline-grid;
      place-items: center;
      width: 72px;
      height: 46px;
    }

    .homeV2LogoMark svg {
      width: 72px;
      height: 46px;
      fill: none;
      stroke: currentColor;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-width: 3.5;
    }

    .homeV2Logo strong,
    .homeV2Logo small {
      display: block;
      line-height: 1;
    }

    .homeV2Logo strong {
      font-family: Georgia, "Times New Roman", serif;
      font-size: clamp(25px, 2.6vw, 39px);
      font-weight: 800;
      letter-spacing: .01em;
      text-transform: uppercase;
    }

    .homeV2Logo small {
      margin-top: 6px;
      color: #b85f1a;
      font-size: clamp(10px, 1vw, 14px);
      font-weight: 800;
      letter-spacing: .22em;
      text-transform: uppercase;
    }

    .homeV2Nav {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: clamp(18px, 2.6vw, 44px);
      font-size: 16px;
      font-weight: 700;
      white-space: nowrap;
    }

    .homeV2Nav a:hover,
    .homeV2Footer a:hover {
      color: #b85f1a;
    }

    .homeV2PlanButton,
    .homeV2PrimaryCta,
    .homeV2SecondaryCta {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 14px;
      min-height: 54px;
      border-radius: 7px;
      font-size: 16px;
      font-weight: 800;
      line-height: 1.1;
    }

    .homeV2PlanButton,
    .homeV2PrimaryCta {
      color: #fffaf0;
      background: #173528;
      box-shadow: 0 10px 22px rgba(23, 53, 40, .18);
    }

    .homeV2PlanButton {
      padding: 0 24px;
    }

    .homeV2Hero {
      position: relative;
      min-height: clamp(560px, 67vw, 720px);
      overflow: hidden;
      isolation: isolate;
    }

    .homeV2HeroImage,
    .homeV2HeroShade {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
    }

    .homeV2HeroImage {
      object-fit: cover;
      transform: scale(1.015);
    }

    .homeV2HeroShade {
      z-index: 1;
      background:
        linear-gradient(90deg, rgba(244, 237, 220, .94) 0%, rgba(244, 237, 220, .78) 35%, rgba(244, 237, 220, .18) 70%, rgba(23, 53, 40, .2) 100%),
        linear-gradient(180deg, rgba(244, 237, 220, .08) 0%, rgba(244, 237, 220, .18) 72%, rgba(244, 237, 220, .92) 100%);
    }

    .homeV2HeroContent {
      position: relative;
      z-index: 2;
      width: min(760px, calc(100% - 40px));
      padding: clamp(78px, 10vw, 132px) 0 86px clamp(20px, 7vw, 110px);
    }

    .homeV2Hero h1 {
      margin: 0;
      max-width: 700px;
      color: #173528;
      font-family: Georgia, "Times New Roman", serif;
      font-size: clamp(54px, 7.4vw, 104px);
      font-weight: 800;
      line-height: .96;
      letter-spacing: 0;
    }

    .homeV2Hero p {
      max-width: 610px;
      margin: 24px 0 30px;
      color: #14241e;
      font-size: clamp(18px, 2vw, 24px);
      font-weight: 500;
      line-height: 1.48;
    }

    .homeV2HeroActions {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
    }

    .homeV2PrimaryCta,
    .homeV2SecondaryCta {
      min-width: 192px;
      padding: 0 26px;
    }

    .homeV2SecondaryCta {
      color: #173528;
      background: rgba(255, 252, 244, .86);
      border: 2px solid rgba(23, 53, 40, .72);
    }

    .homeV2Start {
      padding: 28px clamp(18px, 3.4vw, 54px) 34px;
      background: #f4eddc;
    }

    .homeV2SectionTitle {
      display: grid;
      grid-template-columns: minmax(24px, 1fr) auto minmax(24px, 1fr);
      align-items: center;
      gap: 20px;
      width: min(780px, 100%);
      margin: 0 auto 20px;
      text-align: center;
    }

    .homeV2SectionTitle span {
      height: 1px;
      background: rgba(23, 53, 40, .42);
    }

    .homeV2SectionTitle h2 {
      margin: 0;
      color: #173528;
      font-family: Georgia, "Times New Roman", serif;
      font-size: clamp(22px, 2.6vw, 30px);
      font-weight: 800;
      letter-spacing: .02em;
      text-transform: uppercase;
    }

    .homeV2CardGrid {
      display: grid;
      grid-template-columns: repeat(6, minmax(150px, 1fr));
      gap: 16px;
    }

    .homeV2Card {
      display: grid;
      min-height: 284px;
      overflow: hidden;
      background: #fffaf0;
      border: 1px solid rgba(23, 53, 40, .12);
      border-radius: 8px;
      box-shadow: 0 8px 18px rgba(34, 45, 35, .13);
    }

    .homeV2Card:hover img {
      transform: scale(1.05);
    }

    .homeV2CardImageWrap {
      display: block;
      height: 132px;
      overflow: hidden;
      background: #d7c7a4;
    }

    .homeV2CardImageWrap img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform .24s ease;
    }

    .homeV2CardBody {
      position: relative;
      display: grid;
      align-content: start;
      gap: 10px;
      min-height: 150px;
      padding: 16px 18px 40px;
    }

    .homeV2CardBody strong {
      color: #122c22;
      font-size: clamp(18px, 1.45vw, 22px);
      line-height: 1.08;
    }

    .homeV2CardBody span {
      color: #1c271f;
      font-size: 15px;
      line-height: 1.45;
    }

    .homeV2CardBody b {
      position: absolute;
      right: 18px;
      bottom: 12px;
      font-size: 26px;
      font-weight: 400;
      line-height: 1;
    }

    .homeV2Footer {
      color: #fffaf0;
      background: #102d22;
    }

    .homeV2FooterInner {
      display: grid;
      grid-template-columns: auto minmax(180px, 1fr) auto;
      align-items: center;
      gap: 34px;
      min-height: 96px;
      padding: 20px clamp(18px, 4vw, 64px);
    }

    .homeV2Footer .homeV2Logo {
      color: #fffaf0;
    }

    .homeV2Footer .homeV2LogoMark {
      width: 56px;
      height: 38px;
    }

    .homeV2Footer .homeV2LogoMark svg {
      width: 56px;
      height: 38px;
    }

    .homeV2Footer .homeV2Logo strong {
      font-size: 25px;
    }

    .homeV2Footer .homeV2Logo small {
      font-size: 9px;
      color: #e08a33;
    }

    .homeV2Footer p {
      margin: 0;
      color: rgba(255, 250, 240, .84);
      font-size: 15px;
    }

    .homeV2Footer nav {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      gap: 18px 26px;
      font-size: 14px;
    }

    @media (max-width: 1180px) {
      .homeV2Header {
        grid-template-columns: 1fr auto;
      }

      .homeV2Nav {
        grid-column: 1 / -1;
        grid-row: 2;
        justify-content: flex-start;
        overflow-x: auto;
        padding-bottom: 4px;
      }

      .homeV2CardGrid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
    }

    @media (max-width: 760px) {
      .homeV2Header {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        gap: 14px;
        min-height: 0;
      }

      .homeV2Brand {
        width: 100%;
      }

      .homeV2LogoMark {
        width: 56px;
        height: 38px;
      }

      .homeV2LogoMark svg {
        width: 56px;
        height: 38px;
      }

      .homeV2Nav {
        order: 3;
        width: 100%;
        justify-content: flex-start;
        gap: 20px;
        font-size: 14px;
      }

      .homeV2PlanButton {
        min-height: 46px;
        padding: 0 18px;
        font-size: 14px;
      }

      .homeV2Hero {
        min-height: 570px;
      }

      .homeV2HeroShade {
        background:
          linear-gradient(180deg, rgba(244, 237, 220, .94) 0%, rgba(244, 237, 220, .72) 45%, rgba(244, 237, 220, .18) 78%, rgba(244, 237, 220, .9) 100%);
      }

      .homeV2HeroContent {
        width: 100%;
        padding: 64px 20px 72px;
      }

      .homeV2HeroActions {
        display: grid;
        grid-template-columns: 1fr;
      }

      .homeV2CardGrid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .homeV2Card {
        min-height: 260px;
      }

      .homeV2CardImageWrap {
        height: 116px;
      }

      .homeV2CardBody {
        padding: 14px 14px 38px;
      }

      .homeV2CardBody strong {
        font-size: 17px;
      }

      .homeV2CardBody span {
        font-size: 14px;
      }

      .homeV2FooterInner {
        grid-template-columns: 1fr;
        justify-items: start;
        gap: 16px;
      }

      .homeV2Footer nav {
        justify-content: flex-start;
      }
    }

    @media (max-width: 460px) {
      .homeV2CardGrid {
        grid-template-columns: 1fr;
      }

      .homeV2Card {
        min-height: 236px;
      }

      .homeV2CardImageWrap {
        height: 132px;
      }
    }
  `}</style>
</main>
```

);
}
