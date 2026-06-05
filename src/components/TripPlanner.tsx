"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type PlannerAnswers = {
  group: string;
  length: string;
  energy: string;
  weather: string;
  interest: string;
  budget: string;
  town: string;
};

type Recommendation = {
  bestFirstPick: string;
  backupPick: string;
  rainyDayOption: string;
  familyOption: string;
  caution: string;
  why: string;
};

const questionGroups: {
  key: keyof PlannerAnswers;
  label: string;
  options: string[];
}[] = [
  {
    key: "group",
    label: "Who is going?",
    options: ["Adults", "Young kids", "Teens", "Seniors", "Mixed group"],
  },
  {
    key: "length",
    label: "Trip length",
    options: ["One day", "Weekend", "Three days", "Longer trip"],
  },
  {
    key: "energy",
    label: "Energy level",
    options: ["Easy pace", "Moderate day", "Packed day", "Low walking"],
  },
  {
    key: "weather",
    label: "Weather situation",
    options: ["Clear day", "Rain likely", "Heat or storms", "Not sure"],
  },
  {
    key: "interest",
    label: "Main interest",
    options: ["Scenery", "Kid activities", "Indoor attractions", "Dollywood", "Food and shopping", "Cades Cove"],
  },
  {
    key: "budget",
    label: "Budget comfort",
    options: ["Keep it low", "Mix free and paid", "Paid attractions OK"],
  },
  {
    key: "town",
    label: "Town preference",
    options: ["Not sure", "Gatlinburg", "Pigeon Forge", "Townsend", "Sevierville"],
  },
];

const defaultAnswers: PlannerAnswers = {
  group: "Mixed group",
  length: "Weekend",
  energy: "Moderate day",
  weather: "Not sure",
  interest: "Scenery",
  budget: "Mix free and paid",
  town: "Not sure",
};

function getRecommendation(answers: PlannerAnswers): Recommendation {
  const rainy = answers.weather === "Rain likely" || answers.interest === "Indoor attractions";
  const kids = answers.group === "Young kids" || answers.group === "Mixed group" || answers.interest === "Kid activities";
  const teens = answers.group === "Teens";
  const lowWalking = answers.energy === "Low walking" || answers.group === "Seniors";
  const lowBudget = answers.budget === "Keep it low";
  const paidOk = answers.budget === "Paid attractions OK";
  const pigeonForge = answers.town === "Pigeon Forge" || answers.interest === "Dollywood" || kids;
  const gatlinburg = answers.town === "Gatlinburg";
  const townsend = answers.town === "Townsend" || answers.interest === "Cades Cove";

  if (rainy) {
    return {
      bestFirstPick: "Pick one indoor anchor near your base. WonderWorks works best from Pigeon Forge. Ripley-style Gatlinburg categories work better if you can park once and stay walkable.",
      backupPick: "Use food and shopping as the reset instead of adding another cross-town drive.",
      rainyDayOption: "WonderWorks, indoor mini golf, arcades, aquarium-style attractions or a dinner-show category, depending on town and current hours.",
      familyOption: kids || teens ? "For kids or teens, choose one active indoor stop, then a nearby meal. Do not stack three paid stops in wet traffic." : "For adults, use a slower food-first day with one indoor stop and a short weather-window walk.",
      caution: "Rain makes short drives feel longer around Gatlinburg and Pigeon Forge. Verify hours before leaving lodging.",
      why: "Your answers point to a weather-protected day where route control matters more than a long list.",
    };
  }

  if (answers.interest === "Dollywood") {
    return {
      bestFirstPick: "Make Dollywood the main event, not one stop in a packed Pigeon Forge day.",
      backupPick: "If the park day shifts, use a Pigeon Forge indoor attraction or dinner-show category near the same corridor.",
      rainyDayOption: "Keep WonderWorks, indoor mini golf or an arcade category as the nearby backup.",
      familyOption: "Young kids usually need a simpler evening after Dollywood. Teens may still have energy for food or one nearby activity.",
      caution: "Verify current Dollywood hours, schedules, tickets and weather policies before building the day around it.",
      why: "A Dollywood-centered trip works best when the rest of the day stays close and simple.",
    };
  }

  if (townsend || answers.interest === "Cades Cove") {
    return {
      bestFirstPick: "Build the day around Cades Cove or a quiet-side scenic route from Townsend.",
      backupPick: "Use Foothills Parkway, Wears Valley or a quiet meal if the loop feels too slow for your group.",
      rainyDayOption: "If rain makes the loop unpleasant, shift to a lower-driving town meal and save the Cove for a better window.",
      familyOption: "For families, keep Cades Cove to one major outing and avoid promising kids a packed attraction day afterward.",
      caution: "Cades Cove is slow by design. Verify road status, vehicle-free schedules and current park guidance before you go.",
      why: "Your answers point to scenery and quiet-side planning, where patience matters more than quantity.",
    };
  }

  if (lowWalking) {
    return {
      bestFirstPick: "Choose a scenic-drive day: Foothills Parkway, overlooks, visitor-center-style stops and a meal with easy parking.",
      backupPick: "Use Gatlinburg only if you can park once and keep the route short. Otherwise, choose a less crowded base.",
      rainyDayOption: "Pick a seated indoor attraction, meal, show category or covered shopping plan close to lodging.",
      familyOption: "For mixed ages, pair one scenic stop with one easy food or shopping area. Do not force a trail-heavy day.",
      caution: "Low walking does not automatically mean accessible. Verify surfaces, bathrooms and parking for the exact stop.",
      why: "Your answers point to a lower-friction day where walking load and parking matter most.",
    };
  }

  if (answers.interest === "Food and shopping" || gatlinburg) {
    return {
      bestFirstPick: gatlinburg ? "Park once in Gatlinburg and build the day around a walkable downtown route." : "Choose the food or shopping area first, then add one nearby activity.",
      backupPick: "Sevierville can work for outlet and value-oriented stops if your route already points that way.",
      rainyDayOption: "Use covered shopping, a slower meal and one indoor category near the same corridor.",
      familyOption: "For families, anchor the day with food timing first. Hungry kids make every parking decision worse.",
      caution: "Do not cross town for one meal unless it is clearly worth the traffic and parking tradeoff.",
      why: "Your answers point to a town-based day where the meal and parking plan should drive the route.",
    };
  }

  if (kids || pigeonForge) {
    return {
      bestFirstPick: paidOk ? "Choose one Pigeon Forge anchor: Dollywood, WonderWorks, Parrot Mountain or another family attraction category that fits current hours and your group." : "Start with a free or lower-cost scenic stop, then add one paid Pigeon Forge activity only if it still fits.",
      backupPick: "Use Sevierville or a simple Parkway food stop if the group needs a lower-pressure reset.",
      rainyDayOption: "WonderWorks, arcades, indoor mini golf or aquarium-style categories work better than forcing wet outdoor plans.",
      familyOption: "Parrot Mountain can be a good family-style category when your group wants animals and slower pacing; verify current hours before going.",
      caution: "Pigeon Forge is easy to overstack. One anchor, one meal and one lighter add-on is usually enough.",
      why: "Your answers point to family-friendly planning where one strong anchor beats a long paid list.",
    };
  }

  if (lowBudget) {
    return {
      bestFirstPick: "Start with a scenic drive, overlook, visitor-center-style stop or town walk before buying tickets.",
      backupPick: "Use food and one low-cost activity near your base instead of chasing coupons across town.",
      rainyDayOption: "Covered shopping, a simple meal and one indoor category can keep the day useful without blowing the budget.",
      familyOption: "For kids, pick one paid activity at most and protect time for snacks, rest and a free scenic stop.",
      caution: "A discount is not a savings if it sends you across traffic for something your group did not need.",
      why: "Your answers point to budget control, so the planner should protect both money and driving time.",
    };
  }

  return {
    bestFirstPick: "Choose a scenic-drive or town-based anchor first: Gatlinburg for walkability, Pigeon Forge for family attractions, Townsend for Cades Cove and quiet scenery.",
    backupPick: "Use Anakeesta, Parrot Mountain, a food/shopping area or a shorter scenic route depending on your base and current conditions.",
    rainyDayOption: "Keep WonderWorks, indoor mini golf, arcades, aquarium-style categories or a food-first plan ready.",
    familyOption: teens ? "For teens, pair one active attraction with food and a clear evening plan." : "For families, one anchor plus nearby food usually beats a long attraction list.",
    caution: "Pick the base town before stacking stops. Traffic, parking and weather can change what looks easy on a map.",
    why: "Your answers are balanced, so the best recommendation is a flexible route with one main anchor.",
  };
}

export function TripPlanner() {
  const [answers, setAnswers] = useState<PlannerAnswers>(defaultAnswers);
  const recommendation = useMemo(() => getRecommendation(answers), [answers]);

  function updateAnswer(key: keyof PlannerAnswers, value: string) {
    setAnswers((current) => ({ ...current, [key]: value }));
  }

  return (
    <section className="concierge-planner" aria-label="Interactive Smokies trip planner">
      <div className="planner-workbench">
        <div className="planner-question-panel">
          <div className="planner-panel-heading">
            <p className="eyebrow">Quick planner</p>
            <h2>Answer a few trip questions.</h2>
            <p>Use the closest match. The goal is a useful first move, not a perfect schedule.</p>
          </div>
          <div className="planner-question-grid">
            {questionGroups.map((question) => (
              <fieldset className="planner-choice-group" key={question.key}>
                <legend>{question.label}</legend>
                <div>
                  {question.options.map((option) => (
                    <button
                      className={answers[question.key] === option ? "active" : ""}
                      key={option}
                      onClick={() => updateAnswer(question.key, option)}
                      type="button"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </fieldset>
            ))}
          </div>
        </div>

        <aside className="planner-recommendations" aria-live="polite">
          <p className="eyebrow">Your starter plan</p>
          <h2>{recommendation.bestFirstPick}</h2>
          <p>{recommendation.why}</p>
          <div className="recommendation-grid">
            <article>
              <span>Backup pick</span>
              <p>{recommendation.backupPick}</p>
            </article>
            <article>
              <span>Rainy-day option</span>
              <p>{recommendation.rainyDayOption}</p>
            </article>
            <article>
              <span>Good family option</span>
              <p>{recommendation.familyOption}</p>
            </article>
            <article className="planner-caution">
              <span>Local caution</span>
              <p>{recommendation.caution}</p>
            </article>
          </div>
          <div className="planner-cta-row">
            <Link href="/things-to-do">View things to do</Link>
            <Link href="/explore">Explore towns</Link>
            <Link href="/deals">Find deals</Link>
            <Link href="/smokies-parking-trolley-guide">Read parking/trolley guide</Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
