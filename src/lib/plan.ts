import type { GuideCard } from "@/data/cards";

export const PLAN_STORAGE_KEY = "smokies-insider-plan-v1";

export function getPlanWarnings(items: GuideCard[]): string[] {
  const warnings: string[] = [];
  const areas = new Set(items.map((item) => item.area).filter((area) => !/any|one town|one area/i.test(area)));
  const dayLoad = items.reduce((total, item) => {
    if (item.duration === "full-day") return total + 1;
    if (item.duration === "half-day") return total + 0.5;
    return total + 0.25;
  }, 0);

  if (items.length === 0) {
    warnings.push("No items are saved yet. Save a few planning cards or use Start Planning for recommendations.");
  }
  if (items.filter((item) => item.paid || item.category === "do").length >= 3) {
    warnings.push("You have several paid or attraction-focused items. Keep the day budget and ticket commitments manageable.");
  }
  if (items.length > 0 && !items.some((item) => item.category === "do" && !item.outdoor)) {
    warnings.push("No rainy-day backup is saved. Add one mostly indoor option before relying on the plan.");
  }
  if (items.length > 0 && !items.some((item) => item.category === "eat")) {
    warnings.push("No food stop is saved. Add a meal pattern near the area where you will already be.");
  }
  if (dayLoad > 1.5 || items.length > 5) {
    warnings.push("This is likely too many items for one day. Choose one main anchor and trim the rest to nearby backups.");
  }
  if (areas.size >= 3) {
    warnings.push("The saved items span several areas, creating a driving and traffic risk. Group the day around one side of the Smokies.");
  }

  return warnings;
}
