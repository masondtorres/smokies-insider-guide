"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { SaveButton } from "@/components/save-button";
import {
  officialSourceCaution,
  researchPlannerPlans,
  researchPlannerQuestions,
  type ResearchPlannerAnswerKey,
  type ResearchPlannerAnswers,
  type ResearchPlannerPlan,
} from "@/lib/smokiesData";

const answerLabels: Record<ResearchPlannerAnswerKey, string> = {
  group: "Group",
  base: "Start",
  day: "Day",
  risk: "Risk",
  paceBudget: "Pace",
  tripLength: "Length",
  season: "Season",
  mobility: "Walking",
  crowd: "Crowds",
  rainNeed: "Rain",
};

const fallbackPlan = researchPlannerPlans[0];

function scorePlan(plan: ResearchPlannerPlan, answers: ResearchPlannerAnswers) {
  return researchPlannerQuestions.reduce((score, question) => {
    const answer = answers[question.key];
    if (!answer) return score;

    const matches = plan.match[question.key] ?? [];
    if (matches.includes(answer)) return score + 8;
    if (matches.includes("Not sure yet") && answer === "Not sure yet") return score + 4;
    return score;
  }, 0);
}

function choosePlan(answers: ResearchPlannerAnswers) {
  return researchPlannerPlans.reduce(
    (best, plan) => {
      const score = scorePlan(plan, answers);
      if (score > best.score) return { plan, score };
      return best;
    },
    { plan: fallbackPlan, score: -1 },
  ).plan;
}

function buildProfile(answers: ResearchPlannerAnswers, plan: ResearchPlannerPlan) {
  const pieces = [
    answers.group ?? "Group open",
    answers.base && answers.base !== "Not sure yet" ? `${answers.base} start` : plan.bestStartingBase,
    answers.day ?? "Day type open",
    answers.tripLength ?? "Length open",
    answers.season ?? "Season open",
    answers.risk ? `Watch: ${answers.risk}` : "Risk open",
  ];

  return pieces.join(" / ");
}

function explainFit(answers: ResearchPlannerAnswers, plan: ResearchPlannerPlan) {
  const chosen = researchPlannerQuestions
    .filter((question) => answers[question.key])
    .map((question) => `${answerLabels[question.key]}: ${answers[question.key]}`)
    .join(" / ");

  return `${plan.whyItFits} Your inputs: ${chosen || "starter defaults"}.`;
}

export function TripPlanner() {
  const [answers, setAnswers] = useState<ResearchPlannerAnswers>({});
  const [stepIndex, setStepIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const currentQuestion = researchPlannerQuestions[stepIndex];
  const selectedAnswer = answers[currentQuestion.key];
  const answeredQuestions = researchPlannerQuestions.filter((question) => answers[question.key]);
  const completedCount = answeredQuestions.length;
  const progressPercent = showResult ? 100 : (completedCount / researchPlannerQuestions.length) * 100;
  const plan = useMemo(() => choosePlan(answers), [answers]);
  const profile = useMemo(() => buildProfile(answers, plan), [answers, plan]);

  function chooseAnswer(key: ResearchPlannerAnswerKey, value: string) {
    setAnswers((current) => ({ ...current, [key]: value }));
  }

  function goNext() {
    if (stepIndex === researchPlannerQuestions.length - 1) {
      setShowResult(true);
      return;
    }

    setStepIndex((current) => current + 1);
  }

  function goBack() {
    if (showResult) {
      setShowResult(false);
      setStepIndex(researchPlannerQuestions.length - 1);
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
          <strong>{showResult ? "Final plan" : `Step ${stepIndex + 1} of ${researchPlannerQuestions.length}`}</strong>
          <span>{showResult ? "Your research-backed starter plan is ready" : "You are still building your plan"}</span>
        </div>
        <div className="wizard-progress" aria-label={`Planner progress ${Math.round(progressPercent)} percent`}>
          <span style={{ width: `${progressPercent}%` }} />
        </div>
      </div>

      {!showResult ? (
        <div className="wizard-shell">
          <article className="wizard-question-card">
            <div className="wizard-step-rail research-step-rail" aria-label="Planner steps">
              {researchPlannerQuestions.map((question, index) => (
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
              <button className="wizard-reset" onClick={restartPlan} type="button">Start Over</button>
              <button disabled={!selectedAnswer} onClick={goNext} type="button">
                {stepIndex === researchPlannerQuestions.length - 1 ? "Build my plan" : "Next"}
              </button>
            </div>
          </article>

          <aside className="trip-so-far-panel" aria-live="polite">
            <p className="eyebrow">Your plan so far</p>
            <h2>{profile}</h2>
            {answeredQuestions.length ? (
              <dl>
                {answeredQuestions.map((question) => (
                  <div key={question.key}>
                    <dt>{answerLabels[question.key]}</dt>
                    <dd>{answers[question.key]}</dd>
                  </div>
                ))}
              </dl>
            ) : (
              <p className="trip-summary-empty">Choose the first answer and this panel will start building your plan.</p>
            )}
            <div className="live-preview">
              <span>Current recommendation</span>
              <strong>{plan.title}</strong>
              <p>{plan.bestStartingBase}</p>
              <p>{plan.mainAnchor}</p>
            </div>
          </aside>
        </div>
      ) : (
        <FinalPlan plan={plan} profile={profile} answers={answers} restartPlan={restartPlan} goBack={goBack} />
      )}
    </section>
  );
}

function FinalPlan({
  plan,
  profile,
  answers,
  restartPlan,
  goBack,
}: {
  plan: ResearchPlannerPlan;
  profile: string;
  answers: ResearchPlannerAnswers;
  restartPlan: () => void;
  goBack: () => void;
}) {
  const relatedLinks = [
    plan.bestNextLink,
    ...plan.relatedGuideLinks.filter((link) => link.href !== plan.bestNextLink.href),
  ].slice(0, 4);

  return (
    <section className="final-plan-screen" aria-live="polite">
      <div className="final-plan-hero">
        <p className="eyebrow">Custom plan built</p>
        <h2>{plan.title}</h2>
        <p>{explainFit(answers, plan)}</p>
        <span>{profile}</span>
      </div>

      <div className="final-plan-sections">
        <section className="plan-section plan-section-primary" aria-labelledby="plan-start-here">
          <span>Start here</span>
          <h3 id="plan-start-here">{plan.bestStartingBase}</h3>
          <dl>
            <div>
              <dt>Best for</dt>
              <dd>{plan.bestFor}</dd>
            </div>
            <div>
              <dt>Weak fit / skip if</dt>
              <dd>{plan.weakFit}</dd>
            </div>
          </dl>
        </section>

        <section className="plan-section" aria-labelledby="plan-main-here">
          <span>Main plan</span>
          <h3 id="plan-main-here">{plan.mainAnchor}</h3>
          <ul className="plan-point-list">
            <li><strong>Secondary stop:</strong> {plan.secondaryStop}</li>
            <li><strong>Optional add-on:</strong> {plan.optionalAddOn}</li>
            <li><strong>Food / rest strategy:</strong> {plan.foodRestStrategy}</li>
          </ul>
        </section>

        <section className="plan-section" aria-labelledby="plan-backup-here">
          <span>Backup plan</span>
          <h3 id="plan-backup-here">{plan.rainBackup}</h3>
          <ul className="plan-point-list">
            <li><strong>Crowd strategy:</strong> {plan.crowdStrategy}</li>
            <li><strong>Mobility note:</strong> {plan.mobilityNote}</li>
            <li><strong>Budget note:</strong> {plan.budgetNote}</li>
          </ul>
        </section>

        <section className="plan-section plan-warning-band" aria-labelledby="plan-avoid-here">
          <span>Avoid this</span>
          <h3 id="plan-avoid-here">{plan.whatToSkip}</h3>
        </section>

        <section className="plan-section plan-warning-band" aria-labelledby="plan-movement-here">
          <span>Movement warning</span>
          <h3 id="plan-movement-here">{plan.parkingMovementWarning}</h3>
        </section>

        <section className="plan-section plan-why-section" aria-labelledby="plan-why-here">
          <span>Why this fits</span>
          <h3 id="plan-why-here">{plan.title}</h3>
          <p>{explainFit(answers, plan)}</p>
          <p className="planner-disclaimer">
            {plan.officialSourceCaution || officialSourceCaution}
          </p>
        </section>
      </div>

      <section className="best-next-panel final-next-section" aria-labelledby="best-next-title">
        <div>
          <p className="eyebrow">Next steps</p>
          <h3 id="best-next-title">{plan.bestNextLink.title}</h3>
          {plan.bestNextLink.description ? <p>{plan.bestNextLink.description}</p> : null}
        </div>
        <Link href={plan.bestNextLink.href}>Leave planner and open best next guide</Link>
      </section>

      <div className="final-plan-actions">
        <SaveButton id={plan.id} />
        <Link href="/my-plan">View My Plan</Link>
        <button onClick={goBack} type="button">Back to answers</button>
        <button onClick={restartPlan} type="button">Restart Plan</button>
      </div>

      <nav className="planner-exit-links" aria-label="Leave planner links">
        {relatedLinks.map((link) => (
          <Link href={link.href} key={link.href}>
            Leave planner and open {link.title}
          </Link>
        ))}
      </nav>
    </section>
  );
}
