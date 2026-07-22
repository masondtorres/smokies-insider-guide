"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  gatlinburgPlaces,
  pigeonForgePlaces,
  type ParkingPlace,
} from "@/data/parking-places";

type Area = "gatlinburg" | "pigeon-forge" | "national-park" | "";
type Walking = "minimal" | "moderate" | "ok" | "";
type YesNo = "yes" | "no" | "";

type Recommendation = {
  strategy: string;
  first?: ParkingPlace;
  backup?: ParkingPlace;
  walkingWarning: string;
  transitNote: string;
  recheck: string[];
  officialLinks: { href: string; label: string }[];
};

function recommend(
  area: Area,
  walking: Walking,
  mobility: YesNo,
  allDay: YesNo,
  preferOnce: YesNo,
  enteringPark: YesNo,
): Recommendation {
  const limited = mobility === "yes" || walking === "minimal";

  if (area === "national-park" || enteringPark === "yes") {
    return {
      strategy:
        limited
          ? "Buy the parking tag before you lose cell service, choose one park area for the day, and treat the first open legal space near that area as success — do not hop lots looking for a perfect spot."
          : "Purchase a physical parking tag before entering busy areas, pick one park corridor for the day, and keep a second area as a weather or full-lot backup.",
      walkingWarning:
        limited
          ? "Park trailheads and overlooks often involve uneven ground after you leave the car. Match the stop to the least mobile person in the group."
          : "Walking after parking varies by trailhead; popular lots fill early on peak days.",
      transitNote:
        "Town trolleys do not replace a park parking tag. If you are also spending time in Gatlinburg or Pigeon Forge, plan town parking separately.",
      recheck: [
        "NPS fees page for current tag prices and purchase options",
        "NPS current conditions for road and lot status",
        "Whether your disability placard exemption applies (if relevant)",
      ],
      officialLinks: [
        { href: "https://www.nps.gov/grsm/planyourvisit/fees.htm", label: "NPS parking tags" },
        { href: "https://www.nps.gov/grsm/planyourvisit/conditions.htm", label: "NPS current conditions" },
      ],
    };
  }

  if (area === "gatlinburg") {
    const first = limited
      ? gatlinburgPlaces.find((p) => p.id === "gbg-welcome-pnr")
      : preferOnce === "yes" || allDay === "yes"
        ? gatlinburgPlaces.find((p) => p.id === "gbg-welcome-pnr")
        : gatlinburgPlaces.find((p) => p.id === "gbg-mcmahan-garage");
    const backup =
      first?.id === "gbg-welcome-pnr"
        ? gatlinburgPlaces.find((p) => p.id === "gbg-cityhall-pnr")
        : gatlinburgPlaces.find((p) => p.id === "gbg-aquarium-garage");

    return {
      strategy: limited
        ? "Park once at a free park-and-ride lot and use the free Gatlinburg Trolley. Avoid hunting for downtown garage spaces if anyone in the group has limited mobility."
        : preferOnce === "yes"
          ? "Park once (park-and-ride or one downtown garage) and move on foot or by trolley for the rest of the day."
          : "If you need the car close to a specific block, use a downtown municipal garage and accept the daily rate — then walk that zone rather than re-parking every hour.",
      first,
      backup,
      walkingWarning: limited
        ? "Downtown Gatlinburg has hills, crowds, and uneven sidewalks. Park-and-ride + trolley reduces walking between distant stops."
        : "Even short downtown blocks can feel long with strollers or heat. Plan rest points.",
      transitNote:
        "Gatlinburg Trolley rides are free per the official tourism site. All trolleys stop at the Mass Transit Center at Ripley's Aquarium.",
      recheck: [
        "City of Gatlinburg parking page for current garage rates and lot notes",
        "Gatlinburg trolley hours for your travel dates",
        "Whether live occupancy tools are accurate (city has noted technical issues before)",
      ],
      officialLinks: [
        { href: "https://www.gatlinburgtn.gov/page/parking", label: "City of Gatlinburg parking" },
        { href: "https://www.gatlinburg.com/things-to-do/trolley/", label: "Gatlinburg Trolley" },
      ],
    };
  }

  if (area === "pigeon-forge") {
    const first = pigeonForgePlaces.find((p) => p.id === "pf-patriot-transit");
    const backup = pigeonForgePlaces.find((p) => p.id === "pf-river-lot");

    return {
      strategy: limited
        ? "Park at the Mass Transit Trolley Station at Patriot Park, buy a day pass if you will ride multiple times, and use lift-equipped trolleys between stops."
        : "Park once near the trolley hub or a free municipal lot on Teaster Lane, then ride rather than crossing the Parkway repeatedly by car.",
      first,
      backup,
      walkingWarning: limited
        ? "Parkway distances are long. Prefer trolley between attractions instead of walking multiple corridor segments."
        : "Some lots connect via pedestrian bridges or longer sidewalks — check grade before committing.",
      transitNote:
        "Individual fares and day passes are set by Pigeon Forge Mass Transit; confirm current prices and hours on the official trolley page before you go.",
      recheck: [
        "MyPigeonForge trolley page for fares, hours, and free parking lots",
        "Whether your attraction offers its own lot or preferred garage",
        "Holiday closures (trolley does not run Thanksgiving, Christmas Eve, or Christmas Day)",
      ],
      officialLinks: [
        {
          href: "https://www.mypigeonforge.com/planning/getting-around/mass-transit-trolley/",
          label: "Pigeon Forge trolley",
        },
      ],
    };
  }

  return {
    strategy: "Choose an area first (Gatlinburg, Pigeon Forge, or the national park). Parking rules and lots are not interchangeable across those zones.",
    walkingWarning: "Walking burden depends entirely on which town and which lot you pick.",
    transitNote: "Each town runs its own trolley system with different fares and rules.",
    recheck: ["Return to this tool after you pick a primary destination"],
    officialLinks: [],
  };
}

export function ParkingStrategyTool() {
  const [area, setArea] = useState<Area>("");
  const [walking, setWalking] = useState<Walking>("");
  const [mobility, setMobility] = useState<YesNo>("");
  const [allDay, setAllDay] = useState<YesNo>("");
  const [preferOnce, setPreferOnce] = useState<YesNo>("");
  const [enteringPark, setEnteringPark] = useState<YesNo>("");
  const [submitted, setSubmitted] = useState(false);

  const result = useMemo(() => {
    if (!submitted) return null;
    return recommend(area, walking, mobility, allDay, preferOnce, enteringPark);
  }, [submitted, area, walking, mobility, allDay, preferOnce, enteringPark]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  function handlePrint() {
    window.print();
  }

  return (
    <section className="parking-tool" id="parking-tool">
      <p className="eyebrow">Parking strategy tool</p>
      <h2>Get a named first choice and backup</h2>
      <p>
        This is a planning tool, not real-time lot availability. Rates and hours change — always
        recheck the official links in the result.
      </p>

      <form onSubmit={handleSubmit} className="parking-tool-form">
        <label>
          Which area are you visiting?
          <select value={area} onChange={(e) => setArea(e.target.value as Area)} required>
            <option value="">Select</option>
            <option value="gatlinburg">Gatlinburg</option>
            <option value="pigeon-forge">Pigeon Forge</option>
            <option value="national-park">National park (primary)</option>
          </select>
        </label>

        <label>
          How much walking can your group handle?
          <select value={walking} onChange={(e) => setWalking(e.target.value as Walking)} required>
            <option value="">Select</option>
            <option value="minimal">Minimal — keep walks short</option>
            <option value="moderate">Moderate — some hills OK</option>
            <option value="ok">We can walk more if needed</option>
          </select>
        </label>

        <label>
          Toddlers, seniors, or mobility concerns?
          <select value={mobility} onChange={(e) => setMobility(e.target.value as YesNo)} required>
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>

        <label>
          Staying in that area most of the day?
          <select value={allDay} onChange={(e) => setAllDay(e.target.value as YesNo)} required>
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No — splitting areas</option>
          </select>
        </label>

        <label>
          Prefer parking once vs moving the car?
          <select value={preferOnce} onChange={(e) => setPreferOnce(e.target.value as YesNo)} required>
            <option value="">Select</option>
            <option value="yes">Park once</option>
            <option value="no">OK to move the car</option>
          </select>
        </label>

        <label>
          Entering the national park today?
          <select
            value={enteringPark}
            onChange={(e) => setEnteringPark(e.target.value as YesNo)}
            required
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>

        <button type="submit" className="button button-primary">
          Show strategy
        </button>
      </form>

      {result ? (
        <div className="parking-tool-result" role="status">
          <h3>Recommended strategy</h3>
          <p>{result.strategy}</p>

          {result.first ? (
            <article>
              <h4>First choice: {result.first.name}</h4>
              <p>
                <strong>Address:</strong> {result.first.address}
              </p>
              <p>
                <strong>Pricing status:</strong> {result.first.pricingStatus}
              </p>
              <p>
                <strong>Walking:</strong> {result.first.walkingNote}
              </p>
              <p>
                <a href={result.first.mapUrl} target="_blank" rel="noopener noreferrer">
                  Open map
                </a>
                {" · "}
                <a href={result.first.officialSource} target="_blank" rel="noopener noreferrer">
                  Official source
                </a>
              </p>
              <p>
                <span className="verify-badge">{result.first.verification}</span> · Checked{" "}
                {result.first.dateChecked}
              </p>
            </article>
          ) : null}

          {result.backup ? (
            <article>
              <h4>Backup: {result.backup.name}</h4>
              <p>
                <strong>Address:</strong> {result.backup.address}
              </p>
              <p>
                <strong>Pricing status:</strong> {result.backup.pricingStatus}
              </p>
              <p>
                <a href={result.backup.mapUrl} target="_blank" rel="noopener noreferrer">
                  Open map
                </a>
              </p>
            </article>
          ) : null}

          <p>
            <strong>Walking warning:</strong> {result.walkingWarning}
          </p>
          <p>
            <strong>Trolley / transit:</strong> {result.transitNote}
          </p>

          <h4>Recheck before you leave</h4>
          <ul>
            {result.recheck.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="parking-tool-actions">
            {result.officialLinks.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            ))}
            <Link href="/my-plan">Open My Plan</Link>
            <button type="button" className="button button-secondary" onClick={handlePrint}>
              Print this strategy
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
