import type { GuideCard } from "@/data/cards";

export const PLAN_STORAGE_KEY = "smokies-insider-plan-v1";

export function getPlanWarnings(items: GuideCard[]): string[] {
  const warnings: string[] = [];
  const areas = new Set(items.map((item) => item.area).filter((area) => !area.startsWith("Any") && area !== "One town"));
  const outdoor = items.filter((item) => item.outdoor).length;
  const highCrowd = items.filter((item) => item.crowdRisk === "high").length;
  const paid = items.filter((item) => item.paid).length;

  if (items.length >= 6 || items.filter((item) => item.duration === "full-day").length >= 2) warnings.push("This plan may be overloaded. Leave travel, meal and recovery time between major stops.");
  if (areas.size >= 3) warnings.push("This plan spans several areas. Smokies traffic can make cross-area days slower than the map suggests.");
  if (items.length >= 3 && outdoor / items.length >= 0.7) warnings.push("This plan is outdoor-heavy. Add a weather backup and check conditions before leaving.");
  if (highCrowd >= 2) warnings.push("Several saved ideas carry high crowd risk. Consider an early start, one anchor area and a backup.");
  if (items.some((item) => item.parkingCheck || item.sourceCheck)) warnings.push("One or more stops need a parking or official-source check before the plan is final.");
  if (items.length >= 3 && paid / items.length >= 0.7) warnings.push("This plan is paid-heavy. Confirm current costs directly and consider adding a lower-cost block.");
  if (items.some((item) => item.mobilityCaution)) warnings.push("This plan includes mobility cautions. Verify walking distance, surfaces, stairs and accessible parking.");
  return warnings;
}
