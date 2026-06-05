"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type AnswerKey = "group" | "base" | "day" | "risk" | "paceBudget";
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

type NextLink = {
  href: string;
  label: string;
};

type Plan = {
  title: string;
  reason: string;
  recommendedBase: string;
  mainAnchor: string;
  secondaryStop: string;
  foodRest: string;
  movementWarning: string;
  backupPlan: string;
  skip: string;
  nextLinks: NextLink[];
};

const questions: Question[] = [
  {
    key: "group",
    label: "Who is going?",
    helper: "Pick the group that needs the most protection from a bad plan.",
    options: [
      { label: "Family with kids", detail: "Kid patience, snacks, bathrooms and one strong anchor matter most." },
      { label: "Toddlers or grandparents", detail: "Short walks, seated breaks, simple parking and easy exits." },
      { label: "Adults", detail: "Food, scenery and fewer kid-driven stops." },
      { label: "Teens", detail: "Active stops, food, views and one evening option." },
      { label: "Mixed group", detail: "A practical middle lane with one anchor and one backup." },
    ],
  },
  {
    key: "base",
    label: "Where are you staying or starting?",
    helper: "Not sure is fine. The planner will pick the base that causes the least friction.",
    options: [
      { label: "Not sure yet", detail: "Let the plan choose by day type and group." },
      { label: "Gatlinburg", detail: "Walkable strip, park access, tighter parking." },
      { label: "Pigeon Forge", detail: "Family attractions, Dollywood, Parkway stops." },
      { label: "Townsend", detail: "Quiet side, Cades Cove, scenic routes." },
      { label: "Sevierville", detail: "Value base, outlets, food and easier spread." },
      { label: "Wears Valley", detail: "Scenic middle ground between park roads and towns." },
    ],
  },
  {
    key: "day",
    label: "What kind of day do you want?",
    helper: "This chooses the main anchor. Everything else has to fit around it.",
    options: [
      { label: "Kid attraction day", detail: "WonderWorks, Parrot Mountain, The Island or a Parkway anchor." },
      { label: "Dollywood day", detail: "Treat Dollywood as the main event, not a side stop." },
      { label: "Cades Cove / park day", detail: "Slow scenic loop, Townsend, Wears Valley and park-side pacing." },
      { label: "Scenic low-stress day", detail: "Roaring Fork, overlooks, Wears Valley or quieter drives." },
      { label: "Food and shopping day", detail: "Pick a meal zone first, then add one nearby stop." },
      { label: "First-time overview", detail: "One town anchor, one scenic piece, one flexible backup." },
    ],
  },
  {
    key: "risk",
    label: "What could ruin the day?",
    helper: "The best Smokies plan has a backup before the problem shows up.",
    options: [
      { label: "Rain", detail: "Use indoor anchors and keep the driving simple." },
      { label: "Too much walking", detail: "Prioritize parking, seats, short stops and scenic routes." },
      { label: "Traffic or parking", detail: "Stay in one corridor and avoid unnecessary town-hopping." },
      { label: "Overspending", detail: "Lead with scenery, meals and one paid stop only if it earns the day." },
      { label: "Tired kids", detail: "Shorten the list, add food, and keep an easy exit." },
    ],
  },
  {
    key: "paceBudget",
    label: "What is your budget and pace?",
    helper: "This decides whether paid attractions lead the day or support it.",
    options: [
      { label: "Low cost / easy pace", detail: "Free scenery first, fewer stops, one simple meal zone." },
      { label: "Mixed budget / medium pace", detail: "One paid anchor plus a nearby food or scenic add-on." },
      { label: "Paid attractions OK / full day", detail: "Tickets are fine, but the route still needs discipline." },
      { label: "Low walking / flexible budget", detail: "Comfort and movement matter more than packing the schedule." },
    ],
  },
];

const answerLabels: Record<AnswerKey, string> = {
  group: "Group",
  base: "Start",
  day: "Day",
  risk: "Risk",
  paceBudget: "Pace",
};

function answerFor(answers: PlannerAnswers, key: AnswerKey, fallback: string) {
  return answers[key] ?? fallback;
}

function inferBase(answers: PlannerAnswers) {
  const chosen = answers.base;
  if (chosen && chosen !== "Not sure yet") return chosen;

  if (answers.day === "Dollywood day" || answers.day === "Kid attraction day") return "Pigeon Forge";
  if (answers.day === "Cades Cove / park day") return "Townsend";
  if (answers.day === "Food and shopping day" && answers.risk === "Overspending") return "Sevierville";
  if (answers.day === "Scenic low-stress day") return "Wears Valley or Townsend";
  if (answers.group === "Toddlers or grandparents") return "Townsend or Sevierville";
  return "Gatlinburg or Pigeon Forge";
}

function buildProfile(answers: PlannerAnswers) {
  const pieces = [
    answers.group ?? "Group open",
    answers.base && answers.base !== "Not sure yet" ? `${answers.base} start` : `${inferBase(answers)} start`,
    answers.day ?? "Day type open",
    answers.risk ? `Watch: ${answers.risk}` : "Risk open",
    answers.paceBudget ?? "Pace open",
  ];

  return pieces.join(" · ");
}

function buildPlan(answers: PlannerAnswers): Plan {
  const group = answerFor(answers, "group", "Mixed group");
  const day = answerFor(answers, "day", "First-time overview");
  const risk = answerFor(answers, "risk", "Traffic or parking");
  const paceBudget = answerFor(answers, "paceBudget", "Mixed budget / medium pace");
  const base = inferBase(answers);

  const kids = group === "Family with kids" || group === "Mixed group" || risk === "Tired kids";
  const lowWalking = group === "Toddlers or grandparents" || risk === "Too much walking" || paceBudget === "Low walking / flexible budget";
  const rain = risk === "Rain";
  const lowCost = risk === "Overspending" || paceBudget === "Low cost / easy pace";
  const fullDay = paceBudget === "Paid attractions OK / full day";

  let title = `${base} first-move Smokies plan`;
  let mainAnchor = "Choose one anchor before adding anything else.";
  let secondaryStop = "Add one nearby stop only if the group still has energy.";
  let foodRest = "Eat near the same town or corridor as the anchor. Do not chase a meal across the county.";
  let movementWarning = "Short map distances can still mean slow parking, traffic and walking.";
  let backupPlan = "Switch to food, shopping or a shorter scenic stop if the main plan gets too heavy.";
  let skip = "Skip any stop that forces you to cross Gatlinburg, Pigeon Forge and Townsend in the same day.";
  let reason = `This fits ${group.toLowerCase()} with ${paceBudget.toLowerCase()} while protecting against ${risk.toLowerCase()}.`;
  let nextLinks: NextLink[] = [
    { href: "/things-to-do", label: "Leave planner and view Things To Do" },
    { href: "/where-to-stay", label: "Leave planner and compare towns" },
    { href: "/smokies-parking-trolley-guide", label: "Leave planner and open Parking Guide" },
  ];

  if (day === "Kid attraction day") {
    title = `${base} kid-anchor day`;
    mainAnchor = fullDay ? "Pick one paid anchor: WonderWorks, Parrot Mountain, Dollywood or The Island area." : "Start with one kid-friendly anchor such as WonderWorks, Parrot Mountain or The Island area.";
    secondaryStop = "Use a simple Parkway add-on or Sevierville reset only after the main anchor works.";
    foodRest = "Plan food before the kids are done. Pigeon Forge Parkway is easier when the meal is near the anchor.";
    movementWarning = "Pigeon Forge can tempt you into too many stops. Every extra parking change costs patience.";
    backupPlan = rain ? "Keep WonderWorks, arcades, indoor mini golf and covered shopping ready." : "If the group fades, use The Island area, a meal or a short Sevierville stop instead of another ticket.";
    skip = "Skip stacking every kid attraction in one day.";
  }

  if (day === "Dollywood day") {
    title = "Dollywood-centered Pigeon Forge plan";
    mainAnchor = "Make Dollywood the main event and build the rest of the day around it.";
    secondaryStop = fullDay ? "If energy survives, add one nearby Pigeon Forge meal or light Parkway stop." : "Use a lodging reset or simple meal instead of a second big attraction.";
    foodRest = "Keep food and rest close to Dollywood or your Pigeon Forge base.";
    movementWarning = "Do not add Gatlinburg, Cades Cove or a long scenic drive around a Dollywood day.";
    backupPlan = "If the park plan changes, shift to WonderWorks, indoor mini golf or a Pigeon Forge food/shopping route after checking current details.";
    skip = "Skip treating Dollywood as a quick add-on.";
    nextLinks = [
      { href: "/dollywood-day-plan", label: "Leave planner and open Dollywood plan" },
      { href: "/things-to-do", label: "Leave planner and view Things To Do" },
      { href: "/smokies-parking-trolley-guide", label: "Leave planner and open Parking Guide" },
    ];
  }

  if (day === "Cades Cove / park day") {
    title = "Townsend and Cades Cove slow-day plan";
    mainAnchor = "Start with Cades Cove only if you can give the loop real time.";
    secondaryStop = "Pair it with Townsend, Wears Valley or Foothills Parkway instead of a busy attraction stack.";
    foodRest = "Use Townsend or Wears Valley for a calmer meal/reset before or after the park route.";
    movementWarning = "Cades Cove is slow by design. Check official road status before relying on the route.";
    backupPlan = "If weather, road status or patience changes, switch to Foothills Parkway, Wears Valley or a quiet-side meal.";
    skip = "Skip adding Cades Cove between Dollywood, Gatlinburg strip and a dinner show.";
    nextLinks = [
      { href: "/cades-cove", label: "Leave planner and open Cades Cove guide" },
      { href: "/scenic-drives", label: "Leave planner and view scenic drives" },
      { href: "/smokies-parking-trolley-guide", label: "Leave planner and open Parking Guide" },
    ];
  }

  if (day === "Scenic low-stress day") {
    title = `${base} scenic reset day`;
    mainAnchor = lowWalking ? "Choose a low-walking scenic route such as Foothills Parkway, Wears Valley or a short overlook plan." : "Choose one scenic route: Roaring Fork, Wears Valley, Foothills Parkway or a park-side drive.";
    secondaryStop = "Add one short walk, overlook, town meal or visitor-center-style stop. Keep it close.";
    foodRest = "Eat near the return route, not across town just because a list said so.";
    movementWarning = "Scenic does not always mean quick or easy. Roads, weather and surfaces can change the day.";
    backupPlan = rain ? "If visibility or storms weaken the route, switch to a Gatlinburg or Pigeon Forge indoor/food plan." : "If the route feels long, cut the second drive and use a town meal.";
    skip = "Skip trying to sample every scenic drive in one day.";
    nextLinks = [
      { href: "/scenic-drives", label: "Leave planner and view scenic drives" },
      { href: "/where-to-stay", label: "Leave planner and compare towns" },
      { href: "/smokies-parking-trolley-guide", label: "Leave planner and open Parking Guide" },
    ];
  }

  if (day === "Food and shopping day") {
    title = `${base} food-and-shopping route`;
    mainAnchor = "Pick the meal or shopping area first: Gatlinburg strip, Pigeon Forge Parkway, The Island area or Sevierville outlets.";
    secondaryStop = "Add one nearby attraction, short walk or scenic reset after the meal zone is set.";
    foodRest = "Use the meal as the anchor. Hungry groups do not make better decisions after a cross-town drive.";
    movementWarning = "A great restaurant can become a bad plan if it forces parking twice in the wrong corridor.";
    backupPlan = rain ? "Covered shopping, a slower meal and indoor attraction categories can carry the day." : "If the group gets tired, stay in the same town and cut the extra stop.";
    skip = "Skip chasing ratings across three towns.";
  }

  if (day === "First-time overview") {
    title = `${base} first-time Smokies sampler`;
    mainAnchor = "Pick one primary town: Gatlinburg strip, Pigeon Forge Parkway or Townsend/Cades Cove side.";
    secondaryStop = kids ? "Add The Island, WonderWorks, Parrot Mountain or a short scenic piece only if it fits the base." : "Add one scenic piece such as Roaring Fork, Wears Valley or a short overlook route.";
    foodRest = "Eat where the day already is. First trips fall apart when lunch becomes a new destination.";
    movementWarning = "First-time visitors often underestimate parking, walking and the time between towns.";
    backupPlan = rain ? "Use indoor Pigeon Forge options, Gatlinburg strip food/shopping or The Island area after checking current details." : "Keep an indoor or food-first route ready if weather or traffic changes.";
    skip = "Skip the four-town sampler. It looks efficient online and feels messy in person.";
  }

  if (lowCost) {
    reason = `This keeps the day useful without letting paid stops run the whole plan. It still gives ${group.toLowerCase()} one clear anchor and a backup.`;
    backupPlan = rain
      ? "For a low-cost rainy backup, use food, covered shopping and one indoor paid stop only if it is worth it."
      : "For a low-cost backup, choose a scenic drive, town walk, overlook or simple meal close to the route.";
    skip = `${skip} Also skip impulse paid stops that do not match the route.`;
  }

  if (lowWalking) {
    reason = `This protects the day from walking, parking and fatigue problems while still giving the group a real Smokies plan.`;
    movementWarning = "Low-walking does not automatically mean accessible. Check surfaces, parking, bathrooms and official access details.";
    secondaryStop = `${secondaryStop} Favor seated, short or drive-up options over another long walk.`;
  }

  if (rain) {
    title = `${base} rainy-day Smokies plan`;
    backupPlan = "Use WonderWorks, indoor mini golf, arcades, covered shopping, The Island area or a food-first route after checking current details.";
    movementWarning = `${movementWarning} Rain makes traffic and parking feel slower.`;
    skip = "Skip forcing outdoor scenic plans when visibility, storms or wet walking make them weak.";
  }

  return {
    title,
    reason,
    recommendedBase: base,
    mainAnchor,
    secondaryStop,
    foodRest,
    movementWarning,
    backupPlan,
    skip,
    nextLinks,
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
            <p className="eyebrow">Your plan so far</p>
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
              <span>Live plan preview</span>
              <strong>{plan.title}</strong>
              <p>{plan.mainAnchor}</p>
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
        <p>{plan.reason}</p>
        <span>{profile}</span>
      </div>

      <div className="final-plan-grid">
        <article className="final-plan-primary">
          <span>Recommended town/base</span>
          <p>{plan.recommendedBase}</p>
        </article>
        <article className="final-plan-primary">
          <span>Main anchor</span>
          <p>{plan.mainAnchor}</p>
        </article>
        <article>
          <span>Secondary stop</span>
          <p>{plan.secondaryStop}</p>
        </article>
        <article>
          <span>Food/rest strategy</span>
          <p>{plan.foodRest}</p>
        </article>
        <article className="final-plan-warning">
          <span>Parking/movement warning</span>
          <p>{plan.movementWarning}</p>
        </article>
        <article>
          <span>Backup plan</span>
          <p>{plan.backupPlan}</p>
        </article>
        <article className="final-plan-warning">
          <span>What to skip</span>
          <p>{plan.skip}</p>
        </article>
      </div>

      <p className="planner-disclaimer">
        This is planning guidance. Check official sources before relying on hours, prices, road status or availability.
      </p>

      <div className="final-plan-actions">
        <button onClick={goBack} type="button">Back to answers</button>
        <button onClick={restartPlan} type="button">Restart Plan</button>
      </div>

      <nav className="planner-exit-links" aria-label="Leave planner links">
        {plan.nextLinks.map((link) => (
          <Link href={link.href} key={link.href}>{link.label}</Link>
        ))}
      </nav>
    </section>
  );
}
