import Link from "next/link";

export default function NotFound() {
  return (
    <main className="si-width" style={{ padding: "64px 0 80px" }}>
      <p className="si-kicker">Page not found</p>
      <h1>That route is not on this map.</h1>
      <p>
        The page may have moved, or the link is stale. Use one of these working starts instead of backing into a dead end.
      </p>
      <div className="si-actions">
        <Link className="si-button si-button-primary" href="/start-planning">
          Start Planning
        </Link>
        <Link className="si-button si-button-secondary" href="/today">
          Today&apos;s Conditions
        </Link>
        <Link className="si-button si-button-secondary" href="/where-to-stay">
          Where to Stay
        </Link>
        <Link className="si-button si-button-secondary" href="/parking-traffic">
          Parking &amp; Traffic
        </Link>
      </div>
    </main>
  );
}
