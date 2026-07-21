import type { GuideCard } from "@/data/cards";

export const PLAN_STORAGE_KEY = "smokies-insider-plan-v1";
export const PLAN_VERSION = 2 as const;

export type SavedPlanItem = {
  id: string;
  day?: number;
  isAnchor?: boolean;
  note?: string;
  addedAt?: string;
};

export type MyPlanState = {
  version: typeof PLAN_VERSION;
  items: SavedPlanItem[];
  updatedAt: string;
};

export type PlanWarningType =
  | "time-overload"
  | "two-anchors"
  | "geographic-conflict"
  | "outdoor-rain-risk"
  | "parking-tag-reminder"
  | "early-start-reminder"
  | "reservation-reminder"
  | "missing-food-stop"
  | "unassigned-items";

export type PlanWarning = {
  type: PlanWarningType;
  message: string;
  day?: number;
  cardIds?: string[];
};

export function createEmptyPlan(updatedAt = ""): MyPlanState {
  return { version: PLAN_VERSION, items: [], updatedAt };
}

export function normalizePlan(value: unknown): MyPlanState {
  const now = new Date().toISOString();

  if (Array.isArray(value)) {
    const ids = value.filter((item): item is string => typeof item === "string");
    return {
      version: PLAN_VERSION,
      items: [...new Set(ids)].map((id) => ({ id, addedAt: now })),
      updatedAt: now,
    };
  }

  if (!value || typeof value !== "object") return createEmptyPlan(now);

  const candidate = value as { items?: unknown; updatedAt?: unknown };
  if (!Array.isArray(candidate.items)) return createEmptyPlan(now);

  const seen = new Set<string>();
  const items = candidate.items.flatMap((item): SavedPlanItem[] => {
    if (!item || typeof item !== "object") return [];

    const raw = item as Record<string, unknown>;
    const id = typeof raw.id === "string" ? raw.id : typeof raw.cardId === "string" ? raw.cardId : "";
    if (!id || seen.has(id)) return [];
    seen.add(id);

    const day = typeof raw.day === "number" && raw.day >= 1 && raw.day <= 7 ? Math.trunc(raw.day) : undefined;
    const note = typeof raw.note === "string" ? raw.note.slice(0, 500) : undefined;
    const addedAt = typeof raw.addedAt === "string" ? raw.addedAt : now;

    return [{
      id,
      day,
      isAnchor: day ? raw.isAnchor === true : false,
      note,
      addedAt,
    }];
  });

  return {
    version: PLAN_VERSION,
    items,
    updatedAt: typeof candidate.updatedAt === "string" ? candidate.updatedAt : now,
  };
}

function estimatedHours(card: GuideCard): number {
  if (card.duration === "full-day") return 8;
  if (card.duration === "half-day") return 4;
  return 1.5;
}

function isSpecificArea(area: string): boolean {
  return !/any|one town|one area/i.test(area);
}

function mayNeedParkTag(card: GuideCard): boolean {
  return card.parkingCheck && /national park|cades cove/i.test(card.area);
}

export function getPlanWarnings(plan: MyPlanState, cards: GuideCard[]): PlanWarning[] {
  const warnings: PlanWarning[] = [];
  const cardById = new Map(cards.map((card) => [card.id, card]));
  const resolved = plan.items.flatMap((item) => {
    const card = cardById.get(item.id);
    return card ? [{ item, card }] : [];
  });

  if (resolved.length === 0) return warnings;

  const byDay = new Map<number, typeof resolved>();
  for (const entry of resolved) {
    if (!entry.item.day) continue;
    const entries = byDay.get(entry.item.day) ?? [];
    entries.push(entry);
    byDay.set(entry.item.day, entries);
  }

  for (const [day, entries] of byDay) {
    const totalHours = entries.reduce((total, entry) => total + estimatedHours(entry.card), 0);
    if (totalHours > 10) {
      warnings.push({
        type: "time-overload",
        day,
        cardIds: entries.map((entry) => entry.card.id),
        message: `Day ${day} carries about ${totalHours} hours before traffic, meals and rest. Trim it or move one item.`,
      });
    }

    const anchors = entries.filter((entry) => entry.item.isAnchor);
    if (anchors.length > 1) {
      warnings.push({
        type: "two-anchors",
        day,
        cardIds: anchors.map((entry) => entry.card.id),
        message: `Day ${day} has more than one anchor. Keep one main commitment and make the rest flexible.`,
      });
    }

    const areas = new Set(entries.map((entry) => entry.card.area).filter(isSpecificArea));
    if (areas.size >= 3) {
      warnings.push({
        type: "geographic-conflict",
        day,
        cardIds: entries.map((entry) => entry.card.id),
        message: `Day ${day} crosses ${areas.size} areas. Traffic and backtracking could consume the day.`,
      });
    }

    const outdoorEntries = entries.filter((entry) => entry.card.outdoor);
    if (outdoorEntries.length >= 3 && outdoorEntries.length === entries.length) {
      warnings.push({
        type: "outdoor-rain-risk",
        day,
        cardIds: outdoorEntries.map((entry) => entry.card.id),
        message: `Day ${day} is entirely outdoors. Save one indoor or weather-flexible backup.`,
      });
    }
  }

  const parkTagItems = resolved.filter((entry) => mayNeedParkTag(entry.card));
  if (parkTagItems.length > 0) {
    warnings.push({
      type: "parking-tag-reminder",
      cardIds: parkTagItems.map((entry) => entry.card.id),
      message: "Your plan includes park parking stops. Verify current Great Smoky Mountains parking-tag rules before leaving.",
    });
  }

  const earlyItems = resolved.filter((entry) => entry.card.crowdRisk === "high" && entry.card.parkingCheck);
  if (earlyItems.length > 0) {
    warnings.push({
      type: "early-start-reminder",
      cardIds: earlyItems.map((entry) => entry.card.id),
      message: `${earlyItems.length} saved item${earlyItems.length === 1 ? "" : "s"} combine high crowd risk with parking pressure. Start early and keep a backup.`,
    });
  }

  const reservationItems = resolved.filter((entry) => entry.card.paid && (entry.card.duration === "full-day" || entry.card.category === "stay"));
  if (reservationItems.length > 0) {
    warnings.push({
      type: "reservation-reminder",
      cardIds: reservationItems.map((entry) => entry.card.id),
      message: "Confirm tickets, reservations, cancellation terms and current prices for the larger paid commitments in this plan.",
    });
  }

  if (!resolved.some((entry) => entry.card.category === "eat")) {
    warnings.push({
      type: "missing-food-stop",
      message: "No food plan is saved. Add a meal pattern near the area where you will already be.",
    });
  }

  const unassigned = resolved.filter((entry) => !entry.item.day);
  if (unassigned.length >= 4) {
    warnings.push({
      type: "unassigned-items",
      cardIds: unassigned.map((entry) => entry.card.id),
      message: `${unassigned.length} saved items are not assigned to a day. Sort them before treating this as a working trip plan.`,
    });
  }

  return warnings;
}
