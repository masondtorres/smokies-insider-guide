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
        <Link className="si-button si-button-primary" href="/">Home</Link>
        <Link className="si-button si-button-secondary" href="/start-planning">Start planning</Link>
        <Link className="si-button si-button-secondary" href="/today">Today's conditions</Link>
      </div>
    </main>
  );
}
