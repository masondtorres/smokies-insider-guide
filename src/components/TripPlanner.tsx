"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { cards, categoryInfo, type GuideCard } from "@/data/cards";
import { SaveButton } from "@/components/save-button";

type AnswerKey = "base" | "group" | "time" | "day" | "avoid";
type Answers = Partial<Record<AnswerKey, string>>;

const questions: Array<{ key: AnswerKey; label: string; options: string[] }> = [
  { key: "base", label: "Where are you staying?", options: ["Gatlinburg", "Pigeon Forge", "Sevierville", "Townsend", "Wears Valley", "Not sure"] },
  { key: "group", label: "Who is going?", options: ["Adults", "Couple", "Family with young kids", "Family with teens", "Grandparents", "Mixed group"] },
  { key: "time", label: "How much time?", options: ["Half day", "One day", "Two days", "Three days or more"] },
  { key: "day", label: "What kind of day?", options: ["Easy", "Scenic", "Kid-friendly", "Rainy-day", "Low-cost", "Attractions", "Food-focused", "Quiet side"] },
  { key: "avoid", label: "What do you want to avoid?", options: ["Heavy walking", "High crowds", "Expensive tickets", "Long drives", "Bad weather risk"] },
];

function scoreCard(card: GuideCard, answers: Answers) {
  let score = 0;
  const base = answers.base;
  const group = answers.group;
  const time = answers.time;
  const day = answers.day;
  const avoid = answers.avoid;

  if (base && base !== "Not sure") {
    if (card.area.includes(base)) score += 7;
    if (base === "Townsend" && card.area === "Townsend side") score += 7;
    if (card.area === "One town" || card.area === "Any area" || card.area === "Any base") score += 2;
  }

  if (time === "Half day" && card.duration !== "full-day") score += 4;
  if (time === "One day") score += card.duration === "full-day" ? 3 : 2;
  if (time === "Two days" || time === "Three days or more") score += 2;

  if (/Family/.test(group ?? "") && ["do-family-buffer", "eat-backup", "go-town-loop"].includes(card.id)) score += 6;
  if (group === "Grandparents" && !card.mobilityCaution) score += 4;
  if (group === "Couple" && ["see-overlook", "go-quiet-side", "stay-quiet"].includes(card.id)) score += 3;
  if (group === "Mixed group" && ["do-family-buffer", "go-town-loop", "eat-one-area"].includes(card.id)) score += 4;

  if (day === "Easy" && (!card.mobilityCaution || card.duration === "short")) score += 4;
  if (day === "Scenic" && card.category === "see") score += 7;
  if (day === "Kid-friendly" && ["do-family-buffer", "do-indoor-anchor", "eat-backup"].includes(card.id)) score += 7;
  if (day === "Rainy-day" && !card.outdoor) score += 7;
  if (day === "Low-cost" && !card.paid) score += 7;
  if (day === "Attractions" && card.category === "do") score += 7;
  if (day === "Food-focused" && card.category === "eat") score += 8;
  if (day === "Quiet side" && ["go-quiet-side", "stay-quiet", "do-low-cost"].includes(card.id)) score += 8;

  if (avoid === "Heavy walking" && !card.mobilityCaution) score += 5;
  if (avoid === "Heavy walking" && card.mobilityCaution) score -= 6;
  if (avoid === "High crowds" && card.crowdRisk === "low") score += 6;
  if (avoid === "High crowds" && card.crowdRisk === "high") score -= 5;
  if (avoid === "Expensive tickets" && !card.paid) score += 6;
  if (avoid === "Expensive tickets" && card.paid) score -= 4;
  if (avoid === "Long drives" && ["One town", base, `${base} side`].includes(card.area)) score += 6;
  if (avoid === "Bad weather risk" && !card.outdoor) score += 6;
  if (avoid === "Bad weather risk" && card.outdoor) score -= 3;

  return score;
}

function getRecommendations(answers: Answers) {
  const ranked = cards
    .map((card, index) => ({ card, index, score: scoreCard(card, answers) }))
    .sort((a, b) => b.score - a.score || a.index - b.index);
  const selected: GuideCard[] = [];

  for (const item of ranked) {
    if (selected.length === 5) break;
    if (selected.some((card) => card.category === item.card.category)) continue;
    selected.push(item.card);
  }

  for (const item of ranked) {
    if (selected.length === 5) break;
    if (!selected.includes(item.card)) selected.push(item.card);
  }

  return selected;
}

export function TripPlanner() {
  const [answers, setAnswers] = useState<Answers>({});
  const [showRecommendations, setShowRecommendations] = useState(false);
  const complete = questions.every((question) => answers[question.key]);
  const recommendations = useMemo(() => getRecommendations(answers), [answers]);

  function choose(key: AnswerKey, value: string) {
    setAnswers((current) => ({ ...current, [key]: value }));
    setShowRecommendations(false);
  }

  function reset() {
    setAnswers({});
    setShowRecommendations(false);
  }

  return (
    <section className="concierge-planner" aria-label="Interactive Smokies trip planner">
      <div className="planner-workbench">
        <section className="planner-question-panel">
          <div className="planner-panel-heading">
            <p className="eyebrow">Five quick questions</p>
            <h2>Shape a practical starting plan</h2>
            <p>Choose one answer in each group. Recommendations use only the planning cards already in this field guide.</p>
          </div>

          <div className="planner-question-grid">
            {questions.map((question) => (
              <fieldset className="planner-choice-group" key={question.key}>
                <legend>{question.label}</legend>
                <div>
                  {question.options.map((option) => (
                    <button
                      aria-pressed={answers[question.key] === option}
                      className={answers[question.key] === option ? "active" : ""}
                      key={option}
                      onClick={() => choose(question.key, option)}
                      type="button"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </fieldset>
            ))}
          </div>

          <div className="planner-form-actions">
            <button disabled={!complete} onClick={() => setShowRecommendations(true)} type="button">Show recommendations</button>
            <button onClick={reset} type="button">Start over</button>
          </div>
        </section>

        <aside className="planner-recommendations" aria-live="polite">
          <p className="eyebrow">Recommended cards</p>
          <h2>{showRecommendations ? "A starter mix for your answers" : "Ready when your answers are complete"}</h2>
          {!showRecommendations ? (
            <p>Answer all five questions, then build a recommendation mix you can save to My Plan.</p>
          ) : (
            <>
              <p>Save the cards that fit. Treat the mix as a flexible starting point, not a timed itinerary.</p>
              <div className="recommendation-grid">
                {recommendations.map((card) => (
                  <article key={card.id}>
                    <span>{categoryInfo[card.category].title} / {card.area}</span>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                    <SaveButton id={card.id} />
                  </article>
                ))}
              </div>
              <p className="planner-caution">Check current conditions, access, parking and operating details with the responsible source before finalizing the day.</p>
              <div className="planner-cta-row">
                <Link href="/my-plan">Open My Plan</Link>
                <button onClick={() => setShowRecommendations(false)} type="button">Change answers</button>
              </div>
            </>
          )}
        </aside>
      </div>
    </section>
  );
}
