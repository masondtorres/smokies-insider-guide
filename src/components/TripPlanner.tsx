"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type AnswerKey = "group" | "length" | "energy" | "weather" | "interest" | "budget" | "town";

type PlannerAnswers = Partial<Record<AnswerKey, string>>;

type Option = {
  label: string;
  detail: string;
};

type Question = {
  key: AnswerKey;
  label: string;
  helper: string;
  options: Option[];
};

type Plan = {
  title: string;
  fitReason: string;
  townRecommendation: string;
  bestFirstStop: string;
  morning: string;
  afternoon: string;
  evening: string;
  backup: string;
  rainySwap: string;
  localCaution: string;
  avoid: string;
  familyNote: string;
  budgetNote: string;
};

const questions: Question[] = [
  {
    key: "group",
    label: "Who is going?",
    helper: "Choose the group that needs the most planning protection.",
    options: [
      { label: "Adults", detail: "Food, scenery and fewer kid-driven stops." },
      { label: "Young kids", detail: "Shorter blocks, snacks, indoor backup." },
      { label: "Teens", detail: "Active stops, food and evening options." },
      { label: "Seniors", detail: "Less walking, easier parking, calmer pace." },
      { label: "Mixed group", detail: "A little bit of everything, but not too much." },
    ],
  },
  {
    key: "length",
    label: "How much time do you have?",
    helper: "This controls how much the day can realistically carry.",
    options: [
      { label: "One day", detail: "One anchor, one meal zone, one backup." },
      { label: "Weekend", detail: "A scenic day plus one town or attraction day." },
      { label: "Three days", detail: "Park/scenery, attractions, and flexible reset." },
      { label: "Longer trip", detail: "Room for Cades Cove, Dollywood and slower routes." },
    ],
  },
  {
    key: "energy",
    label: "What pace feels right?",
    helper: "Be honest. Smokies plans go wrong when the pace is fake.",
    options: [
      { label: "Easy pace", detail: "Fewer stops and more breathing room." },
      { label: "Medium energy", detail: "One anchor plus a practical add-on." },
      { label: "Packed day", detail: "More movement, but still one main route." },
      { label: "Low walking", detail: "Scenic drives, seats, short walks and easy exits." },
    ],
  },
  {
    key: "weather",
    label: "What is the weather doing?",
    helper: "Pick the situation you are planning around.",
    options: [
      { label: "Clear day", detail: "Scenery, town walking and outdoor anchors." },
      { label: "Rain likely", detail: "Indoor anchor with nearby food." },
      { label: "Heat or storms", detail: "Short outdoor windows and indoor backup." },
      { label: "Not sure", detail: "Keep both outdoor and indoor options ready." },
    ],
  },
  {
    key: "interest",
    label: "What does the group care about most?",
    helper: "This picks the main anchor for the day.",
    options: [
      { label: "Scenery", detail: "Drives, overlooks and calmer routes." },
      { label: "Kid activities", detail: "WonderWorks, Parrot Mountain, arcades, mini golf." },
      { label: "Indoor attractions", detail: "Rain-safe categories and food nearby." },
      { label: "Dollywood", detail: "Treat the park as the main event." },
      { label: "Food and shopping", detail: "Meal zone first, then one nearby activity." },
      { label: "Cades Cove", detail: "Slow scenic loop and quiet-side planning." },
    ],
  },
  {
    key: "budget",
    label: "How comfortable is the budget?",
    helper: "This decides whether paid stops should lead or support the day.",
    options: [
      { label: "Keep it low", detail: "Free scenery first, paid stops only if they fit." },
      { label: "Mix free and paid", detail: "One paid anchor plus free or cheap support." },
      { label: "Paid attractions OK", detail: "Tickets are fine, but avoid stacking too many." },
    ],
  },
  {
    key: "town",
    label: "Where are you based?",
    helper: "If you are not sure yet, the planner will choose the easiest fit.",
    options: [
      { label: "Not sure", detail: "Let the planner pick by trip shape." },
      { label: "Gatlinburg", detail: "Walkable downtown, park access, tighter parking." },
      { label: "Pigeon Forge", detail: "Family attractions, Dollywood and Parkway stops." },
      { label: "Townsend", detail: "Quiet side, Cades Cove and scenic drives." },
      { label: "Sevierville", detail: "Value base, outlets, food and gateway access." },
    ],
  },
];

const answerLabels: Record<AnswerKey, string> = {
  group: "Group",
  length: "Length",
  energy: "Pace",
  weather: "Weather",
  interest: "Interest",
  budget: "Budget",
  town: "Base",
};

function answerFor(answers: PlannerAnswers, key: AnswerKey, fallback: string) {
  return answers[key] ?? fallback;
}

function inferTown(answers: PlannerAnswers) {
  if (answers.town && answers.town !== "Not sure") return answers.town;
  if (answers.interest === "Dollywood" || answers.interest === "Kid activities" || answers.interest === "Indoor attractions") return "Pigeon Forge";
  if (answers.interest === "Cades Cove") return "Townsend";
  if (answers.interest === "Food and shopping") return "Gatlinburg or Sevierville";
  if (answers.energy === "Low walking") return "Townsend or Gatlinburg";
  return "Gatlinburg or Pigeon Forge";
}

function buildProfile(answers: PlannerAnswers) {
  const pieces = [
    answers.group ? `${answers.group} trip` : "Trip type open",
    answers.weather ?? "Weather open",
    answers.energy ?? "Pace open",
    answers.town && answers.town !== "Not sure" ? `${answers.town} base` : `${inferTown(answers)} base`,
  ];

  return pieces.join(" · ");
}

function buildPlan(answers: PlannerAnswers): Plan {
  const group = answerFor(answers, "group", "Mixed group");
  const length = answerFor(answers, "length", "Weekend");
  const energy = answerFor(answers, "energy", "Medium energy");
  const weather = answerFor(answers, "weather", "Not sure");
  const interest = answerFor(answers, "interest", "Scenery");
  const budget = answerFor(answers, "budget", "Mix free and paid");
  const town = inferTown(answers);

  const rainy = weather === "Rain likely" || interest === "Indoor attractions";
  const heat = weather === "Heat or storms";
  const kids = group === "Young kids" || group === "Mixed group" || interest === "Kid activities";
  const teens = group === "Teens";
  const seniors = group === "Seniors" || energy === "Low walking";
  const lowBudget = budget === "Keep it low";
  const paidOk = budget === "Paid attractions OK";
  const dollywood = interest === "Dollywood";
  const cadesCove = interest === "Cades Cove";
  const food = interest === "Food and shopping";
  const scenery = interest === "Scenery";

  let title = `${town} starter day`;
  let bestFirstStop = "Choose one main anchor before adding smaller stops.";
  let morning = "Start with the stop that matters most, then keep the next move close.";
  let afternoon = "Add one nearby activity or scenic reset instead of crossing the county.";
  let evening = "Keep dinner near the same town or route so the day does not unravel late.";
  let backup = "Use food, shopping or a shorter scenic stop if the main plan feels too heavy.";
  let rainySwap = "Keep WonderWorks, indoor mini golf, arcades, aquarium-style attractions or a food-first plan ready.";
  let localCaution = "Traffic, parking and weather can make short map distances feel longer.";
  let avoid = "Avoid stacking stops from different towns just because they look close online.";
  const familyNote = "For families, one anchor plus nearby food usually beats a long attraction list.";
  let budgetNote = "Use deals only after the route makes sense.";

  if (rainy) {
    title = `${town} rainy-day rescue plan`;
    bestFirstStop = town.includes("Gatlinburg")
      ? "Park once and choose one walkable indoor Gatlinburg anchor."
      : "Start with WonderWorks or another indoor Pigeon Forge anchor near food.";
    morning = "Choose one indoor attraction category first. Do not begin with a county-wide list.";
    afternoon = "Use lunch as the reset, then add an arcade, indoor mini golf or covered shopping only if the group still has energy.";
    evening = "Keep dinner close to the indoor anchor or lodging.";
    backup = "If crowds stack indoors, switch to a food-and-shopping route rather than chasing another attraction across town.";
    rainySwap = "WonderWorks, indoor mini golf, arcades, aquarium-style attractions and dinner-show categories are the safer rainy-day pool.";
    localCaution = "Rain makes Gatlinburg and Pigeon Forge traffic feel slower. Verify hours before leaving lodging.";
    avoid = "Avoid trying to save every outdoor plan in the same wet day.";
  } else if (dollywood) {
    title = "Dollywood-centered Pigeon Forge day";
    bestFirstStop = "Make Dollywood the main event and keep the rest of the day nearby.";
    morning = "Start with Dollywood or the ticketed anchor while the group is fresh.";
    afternoon = "Stay with the park plan or take a lodging reset before adding anything else.";
    evening = "Choose a simple Pigeon Forge meal or one nearby activity if everyone still has energy.";
    backup = "If the park plan shifts, use WonderWorks, indoor mini golf or a dinner-show category in Pigeon Forge.";
    rainySwap = "Keep a Pigeon Forge indoor attraction category ready, but verify current hours and policies.";
    localCaution = "Do not build a full Parkway attraction list around a Dollywood day.";
    avoid = "Avoid treating Dollywood as a half-day add-on unless your group already knows that pace works.";
  } else if (cadesCove) {
    title = "Townsend and Cades Cove slow-day plan";
    bestFirstStop = "Start with Cades Cove only if you can give the loop real time.";
    morning = "Go early for the loop or choose a quiet-side scenic start from Townsend.";
    afternoon = "Pair the loop with Townsend, Wears Valley or Foothills Parkway rather than a busy attraction list.";
    evening = "Use a quiet meal or cabin reset after the slow park route.";
    backup = "If the loop is too slow or weather turns, choose Foothills Parkway or a Townsend-area meal.";
    rainySwap = "Save Cades Cove for a better window if rain makes the loop unpleasant.";
    localCaution = "Cades Cove is slow by design. Verify road status and current park guidance before going.";
    avoid = "Avoid adding Cades Cove between Dollywood, Gatlinburg and a dinner show.";
  } else if (seniors) {
    title = `${town} low-walking Smokies plan`;
    bestFirstStop = "Start with a scenic drive, overlook or town route with a simple parking plan.";
    morning = "Choose Foothills Parkway, an overlook, a visitor-center-style stop or a short town walk.";
    afternoon = "Add a seated meal, easy shopping area or low-walking attraction category.";
    evening = "Stay near lodging or pick a dinner spot with the least parking friction.";
    backup = "Use a seated indoor attraction, covered shopping or slow meal if walking or weather gets harder.";
    rainySwap = "Choose indoor, seated or covered options close to your base.";
    localCaution = "Low walking does not automatically mean accessible. Verify surfaces, bathrooms and parking.";
    avoid = "Avoid vague easy-hike promises unless the exact stop has current access details.";
  } else if (food) {
    title = `${town} food-and-shopping route`;
    bestFirstStop = "Pick the meal or shopping area first, then add one nearby activity.";
    morning = "Start near the town or corridor where you want to eat.";
    afternoon = "Add shopping, a short walk or one attraction close to the meal zone.";
    evening = "Use dinner as the anchor instead of driving across town for one more stop.";
    backup = "Sevierville can work for outlets and value-oriented stops if your route already points that way.";
    rainySwap = "Covered shopping and a slower meal can carry the day when weather turns.";
    localCaution = "A good restaurant can become a bad plan if it sends you across traffic at the wrong time.";
    avoid = "Avoid chasing ratings across towns when your group is already hungry.";
  } else if (kids || teens) {
    title = `${town} family activity plan`;
    bestFirstStop = paidOk
      ? "Choose one strong family anchor: WonderWorks, Parrot Mountain, Dollywood or a Parkway activity that fits the day."
      : "Start with a free or lower-cost scenic stop, then add one paid family activity if it still fits.";
    morning = "Start with the anchor while the group has the most patience.";
    afternoon = "Use food, rest or one lighter add-on instead of stacking paid stops.";
    evening = teens ? "Teens may still want food and one active evening option." : "Young kids usually need a simpler evening and an easy exit.";
    backup = "Use Sevierville, a simple Parkway meal or a lower-pressure shopping stop if the group needs a reset.";
    rainySwap = "WonderWorks, arcades, indoor mini golf and aquarium-style categories work better than forcing wet outdoor plans.";
    localCaution = "Pigeon Forge is easy to overstack. One anchor, one meal and one lighter add-on is usually enough.";
    avoid = "Avoid promising every kid-friendly stop in one day.";
  } else if (scenery) {
    title = `${town} scenic Smokies day`;
    bestFirstStop = "Choose one scenic route first: Foothills Parkway, Cades Cove, Newfound Gap or a town-based overlook plan.";
    morning = "Start with scenery before the day gets crowded or hot.";
    afternoon = "Pair the drive with a meal, overlook or short walk instead of another long route.";
    evening = "Choose a town meal close to the way back.";
    backup = "If roads or weather do not cooperate, shift to Gatlinburg, Sevierville or Pigeon Forge food/shopping.";
    rainySwap = "Use indoor attractions or a food-first town route if visibility or storms make scenery weak.";
    localCaution = "Scenic does not mean quick. Verify road conditions and give the route time.";
    avoid = "Avoid trying to sample every scenic drive in one day.";
  }

  if (length === "One day") {
    localCaution += " With one day, cut the plan before the plan cuts you.";
    avoid = "Avoid crossing between every major town in one day.";
  }

  if (energy === "Packed day") {
    avoid += " A packed day still needs one main route, not random stops.";
  }

  if (heat) {
    rainySwap = "Use indoor midday breaks, shaded food stops and shorter outdoor windows if heat or storms build.";
    localCaution += " Heat and storms make midday outdoor plans less reliable.";
  }

  if (lowBudget) {
    budgetNote = "Lead with scenic drives, overlooks, town walks and meals. Add one paid stop only if it is worth the time and money.";
  } else if (paidOk) {
    budgetNote = "Paid attractions are fine here, but the planner still limits the day to one main ticketed anchor.";
  } else {
    budgetNote = "Mix one paid anchor with free scenery, food or a town walk.";
  }

  return {
    title,
    fitReason: `This fits a ${group.toLowerCase()} trip with ${energy.toLowerCase()}, ${weather.toLowerCase()} planning and a ${budget.toLowerCase()} budget posture.`,
    townRecommendation: town,
    bestFirstStop,
    morning,
    afternoon,
    evening,
    backup,
    rainySwap,
    localCaution,
    avoid,
    familyNote,
    budgetNote,
  };
}

export function TripPlanner() {
  const [answers, setAnswers] = useState<PlannerAnswers>({});
  const [stepIndex, setStepIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const currentQuestion = questions[stepIndex];
  const selectedAnswer = answers[currentQuestion.key];
  const completedCount = questions.filter((question) => answers[question.key]).length;
  const progressPercent = showResult ? 100 : (completedCount / questions.length) * 100;
  const plan = useMemo(() => buildPlan(answers), [answers]);
  const profile = useMemo(() => buildProfile(answers), [answers]);

  function chooseAnswer(key: AnswerKey, value: string) {
    setAnswers((current) => ({ ...current, [key]: value }));
  }

  function goNext() {
    if (stepIndex === questions.length - 1) {
      setShowResult(true);
      return;
    }

    setStepIndex((current) => current + 1);
  }

  function goBack() {
    if (showResult) {
      setShowResult(false);
      setStepIndex(questions.length - 1);
      return;
    }

    setStepIndex((current) => Math.max(0, current - 1));
  }

  function restartPlan() {
    setAnswers({});
    setStepIndex(0);
    setShowResult(false);
  }

  return (
    <section className="concierge-planner wizard-planner" aria-label="Interactive Smokies trip planner">
      <div className="wizard-status-bar">
        <div>
          <p className="eyebrow">Planning mode</p>
          <strong>{showResult ? "Final plan" : `Step ${stepIndex + 1} of ${questions.length}`}</strong>
          <span>{showResult ? "Your custom starter plan is ready" : "You are still building your plan"}</span>
        </div>
        <div className="wizard-progress" aria-label={`Planner progress ${Math.round(progressPercent)} percent`}>
          <span style={{ width: `${progressPercent}%` }} />
        </div>
      </div>

      {!showResult ? (
        <div className="wizard-shell">
          <article className="wizard-question-card">
            <div className="wizard-step-rail" aria-label="Planner steps">
              {questions.map((question, index) => (
                <button
                  className={[
                    index === stepIndex ? "current" : "",
                    answers[question.key] ? "answered" : "",
                  ].filter(Boolean).join(" ")}
                  key={question.key}
                  onClick={() => setStepIndex(index)}
                  type="button"
                >
                  <span>{index + 1}</span>
                  <b>{answerLabels[question.key]}</b>
                </button>
              ))}
            </div>

            <div className="wizard-question-heading">
              <p className="eyebrow">Question {stepIndex + 1}</p>
              <h2>{currentQuestion.label}</h2>
              <p>{currentQuestion.helper}</p>
            </div>

            <div className="wizard-option-grid">
              {currentQuestion.options.map((option) => (
                <button
                  className={selectedAnswer === option.label ? "selected" : ""}
                  key={option.label}
                  onClick={() => chooseAnswer(currentQuestion.key, option.label)}
                  type="button"
                >
                  <strong>{option.label}</strong>
                  <span>{option.detail}</span>
                </button>
              ))}
            </div>

            <div className="wizard-controls">
              <button disabled={stepIndex === 0} onClick={goBack} type="button">Back</button>
              <button disabled={!selectedAnswer} onClick={goNext} type="button">
                {stepIndex === questions.length - 1 ? "Build my plan" : "Next"}
              </button>
            </div>
          </article>

          <aside className="trip-so-far-panel" aria-live="polite">
            <p className="eyebrow">Your trip so far</p>
            <h2>{profile}</h2>
            <dl>
              {questions.map((question) => (
                <div key={question.key}>
                  <dt>{answerLabels[question.key]}</dt>
                  <dd>{answers[question.key] ?? "Not chosen yet"}</dd>
                </div>
              ))}
            </dl>
            <div className="live-preview">
              <span>Live recommendation preview</span>
              <strong>{plan.title}</strong>
              <p>{plan.bestFirstStop}</p>
            </div>
          </aside>
        </div>
      ) : (
        <FinalPlan plan={plan} profile={profile} restartPlan={restartPlan} goBack={goBack} />
      )}
    </section>
  );
}

function FinalPlan({
  plan,
  profile,
  restartPlan,
  goBack,
}: {
  plan: Plan;
  profile: string;
  restartPlan: () => void;
  goBack: () => void;
}) {
  return (
    <section className="final-plan-screen" aria-live="polite">
      <div className="final-plan-hero">
        <p className="eyebrow">Custom plan built</p>
        <h2>{plan.title}</h2>
        <p>{plan.fitReason}</p>
        <span>{profile}</span>
      </div>

      <div className="final-plan-grid">
        <article className="final-plan-primary">
          <span>Best first stop</span>
          <p>{plan.bestFirstStop}</p>
        </article>
        <article>
          <span>Town recommendation</span>
          <p>{plan.townRecommendation}</p>
        </article>
        <article>
          <span>Morning plan</span>
          <p>{plan.morning}</p>
        </article>
        <article>
          <span>Afternoon plan</span>
          <p>{plan.afternoon}</p>
        </article>
        <article>
          <span>Evening plan</span>
          <p>{plan.evening}</p>
        </article>
        <article>
          <span>Backup option</span>
          <p>{plan.backup}</p>
        </article>
        <article>
          <span>Rainy-day swap</span>
          <p>{plan.rainySwap}</p>
        </article>
        <article>
          <span>Family note</span>
          <p>{plan.familyNote}</p>
        </article>
        <article className="final-plan-warning">
          <span>Local caution</span>
          <p>{plan.localCaution}</p>
        </article>
        <article className="final-plan-warning">
          <span>What to avoid</span>
          <p>{plan.avoid}</p>
        </article>
        <article className="final-plan-warning">
          <span>Budget warning</span>
          <p>{plan.budgetNote}</p>
        </article>
      </div>

      <div className="final-plan-actions">
        <button onClick={goBack} type="button">Back to answers</button>
        <button onClick={restartPlan} type="button">Restart plan</button>
      </div>

      <nav className="planner-exit-links" aria-label="Leave planner links">
        <Link href="/things-to-do">Leave planner and view Things To Do</Link>
        <Link href="/smokies-parking-trolley-guide">Leave planner and open Parking Guide</Link>
        <Link href="/where-to-stay">Leave planner and compare towns</Link>
        <Link href="/deals">Leave planner and find deals</Link>
      </nav>
    </section>
  );
}
