"use client";

import { cards } from "@/data/cards";
import { usePlan } from "@/lib/use-plan";
import styles from "@/components/my-plan.module.css";

const MAX_SHARED_ITEMS = 15;

export function AskGrokPlan() {
  const plan = usePlan();

  const safeItems = plan.items
    .map((item) => {
      if (item.kind === "parking") {
        return [
          item.placeName ?? "Saved parking place",
          item.town ? `town: ${item.town}` : "",
          item.day ? `day ${item.day}` : "day unassigned",
        ]
          .filter(Boolean)
          .join(" — ");
      }

      const card = cards.find((candidate) => candidate.id === item.id);
      if (!card) return null;
      return [
        card.title,
        card.area ? `area: ${card.area}` : "",
        item.day ? `day ${item.day}` : "day unassigned",
        item.isAnchor ? "main anchor" : "",
      ]
        .filter(Boolean)
        .join(" — ");
    })
    .filter((item): item is string => Boolean(item));

  if (safeItems.length === 0) return null;

  function handleAskGrok() {
    const sharedItems = safeItems.slice(0, MAX_SHARED_ITEMS);
    const omitted = safeItems.length - sharedItems.length;
    const prompt = [
      "I built a trip plan on Smokies Insider and want a second opinion on whether the days are geographically sensible and resilient to common Smokies problems.",
      "",
      "Privacy-safe plan summary (my private notes, confirmation numbers and free-text fields are NOT included):",
      ...sharedItems.map((item) => `- ${item}`),
      omitted > 0 ? `- ${omitted} additional saved item(s) omitted from this handoff.` : "",
      "",
      "Use current official sources for time-sensitive facts. For Great Smoky Mountains National Park conditions, closures, roads and rules, prefer NPS. For weather, prefer NWS. For attraction hours, tickets and policies, prefer the attraction's official site. Do not invent closures, hours, prices, parking availability, wait times, road status or ticket rules. Distinguish confirmed current facts from planning suggestions. Keep the answer concise: identify the biggest itinerary conflict, one simplification, one backup move, what I must recheck before leaving, and direct official-source links.",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(`https://grok.com/?q=${encodeURIComponent(prompt)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <aside className={styles.storageNote} style={{ marginTop: "1.25rem" }}>
      <strong>Want a second opinion?</strong> Ask Grok opens in a new tab with a limited summary of
      your saved public places, areas and day assignments. Your notes, confirmation numbers and other
      free text are not included. Verify changing conditions with the official source.
      <div style={{ marginTop: "0.75rem" }}>
        <button className={styles.clearButton} type="button" onClick={handleAskGrok}>
          Ask Grok about this plan
        </button>
      </div>
    </aside>
  );
}
