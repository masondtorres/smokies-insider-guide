import type { Metadata } from "next";
import { UtilityPage, type UtilityPageData } from "@/components/utility-page";

export const metadata: Metadata = {
  title: "Family-Friendly Smokies Food Planning Guide",
  description: "Plan a family meal in the Smokies around timing, parking, dietary needs, seating and a nearby backup.",
};

const page: UtilityPageData = {
  category: "Eat",
  categoryHref: "/eat",
  title: "Plan the family meal before everyone is hungry",
  description: "Choose the area, meal shape and backup first, then verify the restaurant details that matter to your group.",
  purpose: "Help families choose a workable meal without publishing unverified menus, wait times, prices or restaurant claims.",
  helps: [
    "Your group includes young children, older relatives or different food needs.",
    "A long wait or another parking search could derail the next part of the day.",
    "You need a simple backup near the area you are already visiting.",
  ],
  sections: [
    { title: "Pick the meal area before the restaurant", body: "Keep the meal near the main activity, lodging base or route home. Crossing town for a specific restaurant adds traffic, parking and transition time before anyone has eaten." },
    { title: "Choose the useful timing window", body: "Set a meal window that fits naps, medication, energy and the next commitment. An earlier or later target can provide flexibility, but this guide does not promise shorter waits or availability." },
    { title: "Verify the family details directly", body: "Check the current menu, hours, seating approach, restroom access, parking and any policies your group needs. Ask about high chairs, boosters or space for strollers rather than assuming they are available." },
    { title: "Handle dietary needs before arrival", body: "For a food allergy or medically necessary diet, contact the restaurant directly about ingredients and cross-contact procedures. A menu label or general description is not enough to guarantee a safe meal." },
    { title: "Keep one low-friction backup", body: "Save a second meal type in the same area, along with a simple packaged-food option when appropriate for your group. The backup should reduce driving and decisions, not become another destination." },
  ],
  family: "The best family-friendly choice is the one that fits your children's timing, food range and ability to wait. Bring the essentials needed between ordering and eating, and leave room to shorten the meal if the group is done.",
  accessibility: "Confirm an accessible route from parking or drop-off to the entrance, suitable seating, restroom access and any space needed for mobility equipment. Ask the specific restaurant because layouts and entrances differ.",
  saveId: "utility-family-friendly-food",
  saveTitle: "Family-Friendly Food Plan",
  links: [
    { href: "/restaurants", label: "Smokies restaurant guide", description: "Choose a dining area before narrowing the restaurant." },
    { href: "/restaurants/gatlinburg", label: "Gatlinburg food planning", description: "Keep the meal close to a Gatlinburg day." },
    { href: "/restaurants/pigeon-forge", label: "Pigeon Forge food planning", description: "Plan around the Pigeon Forge route and parking load." },
    { href: "/pigeon-forge-with-kids", label: "Pigeon Forge with kids", description: "Fit food into a broader family day." },
    { href: "/eat", label: "More Eat planning", description: "Save another meal-planning pattern." },
  ],
  sources: [
    { href: "https://www.fda.gov/food/nutrition-food-labeling-and-critical-foods/food-allergies", label: "FDA food allergy information" },
    { href: "https://www.ada.gov/topics/title-iii/", label: "ADA guidance for public businesses" },
  ],
};

export default function FamilyFriendlyFoodPage() {
  return <UtilityPage page={page} />;
}
