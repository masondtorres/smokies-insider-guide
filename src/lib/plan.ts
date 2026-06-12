import type { ResearchPlannerPlan } from "@/lib/smokiesData";

export const PLAN_STORAGE_KEY = "smokies-insider-plan-v1";

export function getPlanWarnings(items: ResearchPlannerPlan[]): string[] {
  const warnings: string[] = [];
  const bases = new Set(items.map((item) => item.bestStartingBase));
  const combinedText = items
    .map((item) => [item.title, item.mainAnchor, item.parkingMovementWarning, item.crowdStrategy, item.mobilityNote, item.budgetNote].join(" "))
    .join(" ")
    .toLowerCase();

  if (items.length >= 3) {
    warnings.push("Several full-day plan shapes are saved. Choose one main day structure before adding more stops.");
  }
  if (bases.size >= 3) {
    warnings.push("The saved plans use several starting areas. Smokies traffic can make cross-area days slower than the map suggests.");
  }
  if (/crowd|long line|busy|peak/.test(combinedText)) {
    warnings.push("At least one saved plan carries crowd or line risk. Protect the main anchor and keep a nearby backup.");
  }
  if (/walking|mobility|accessible|surface|stairs/.test(combinedText)) {
    warnings.push("At least one saved plan includes mobility considerations. Verify walking distance, surfaces, stairs and accessible parking.");
  }
  if (/road|parking|closure|official|weather|conditions/.test(combinedText)) {
    warnings.push("Check current road, parking, weather and closure details with the responsible official source before finalizing the trip.");
  }
  if (/budget|paid|cost|ticket/.test(combinedText)) {
    warnings.push("Confirm current costs directly and keep the day budget centered on the main anchor.");
  }

  return warnings;
}
