import { create } from "zustand";
import { GameState, CaseState, ReactionResult, EvidenceItem, Subject } from "../types";
import { subjects } from "../data/subjects";
import { questions } from "../data/questions";
import { rulesets } from "../data/rulesets";
import { subjectResponses } from "../data/responses";

// Seeded pseudo-random: simple LCG
function seededRand(seed: number): () => number {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return (s >>> 0) / 0xffffffff;
  };
}

function clamp(val: number, min = 0, max = 100): number {
  return Math.max(min, Math.min(max, val));
}

function gaussNoise(rand: () => number): number {
  // Box-Muller for gaussian-ish noise, clamped to ±30
  const u = rand();
  const v = rand();
  const n = Math.sqrt(-2 * Math.log(u + 0.0001)) * Math.cos(2 * Math.PI * v);
  return clamp(n * 15, -30, 30);
}

function generateReaction(subject: Subject, questionId: string, callCount: number): ReactionResult {
  const question = questions.find((q) => q.id === questionId)!;
  const seed = questionId.charCodeAt(0) + subject.id.charCodeAt(0) + callCount * 37;
  const rand = seededRand(seed);

  const isHuman = subject.hiddenTruth === "human";
  const stress = subject.stressLevel / 100;
  const memory = subject.memoryIntegrity / 100;
  const empathy = subject.empathyProfile / 100;
  const contradiction = subject.contradictionRisk / 100;

  let latency: number;
  let emotionalVariance: number;
  let memoryCoherence: number;
  let empathyDeviation: number;

  if (isHuman) {
    // Humans: more variable, stress-affected
    latency = clamp(subject.responseLatencyBase / 50 + gaussNoise(rand) + stress * 20);
    emotionalVariance = clamp(empathy * 70 + stress * 30 + gaussNoise(rand));
    memoryCoherence = clamp(memory * 80 + gaussNoise(rand) - stress * 10);
    empathyDeviation = clamp(empathy * 60 + gaussNoise(rand) + stress * 15);
  } else {
    // Synthetics: precise, low noise, suspiciously consistent
    latency = clamp(subject.responseLatencyBase / 50 + (rand() - 0.5) * 5);
    emotionalVariance = clamp(empathy * 40 + (rand() - 0.5) * 10);
    memoryCoherence = clamp(memory * 90 + (rand() - 0.5) * 8);
    empathyDeviation = clamp(empathy * 30 + (rand() - 0.5) * 12);
  }

  // Category-specific modifiers
  if (question.category === "memory") {
    memoryCoherence = clamp(memoryCoherence + (isHuman ? gaussNoise(rand) : (rand() - 0.5) * 5));
  }
  if (question.category === "empathy" || question.category === "fear") {
    emotionalVariance = clamp(emotionalVariance + (isHuman ? gaussNoise(rand) + 10 : (rand() - 0.5) * 8));
    empathyDeviation = clamp(empathyDeviation + (isHuman ? gaussNoise(rand) : (rand() - 0.5) * 6));
  }
  if (question.category === "contradiction") {
    if (isHuman) {
      empathyDeviation = clamp(empathyDeviation + contradiction * 20 + gaussNoise(rand));
    }
  }

  // Pick response text — keyed by questionId so each answer fits the specific question
  const responseText =
    subjectResponses[subject.id]?.[questionId] ??
    `I... I'm not sure how to answer that.`;

  return {
    questionId,
    responseLatency: Math.round(latency),
    emotionalVariance: Math.round(emotionalVariance),
    memoryCoherence: Math.round(memoryCoherence),
    empathyDeviation: Math.round(empathyDeviation),
    responseText,
  };
}

function generateEvidence(reaction: ReactionResult, subject: Subject, questionId: string): EvidenceItem[] {
  const question = questions.find((q) => q.id === questionId)!;
  const evidence: EvidenceItem[] = [];
  const isHuman = subject.hiddenTruth === "human";

  // Memory category checks
  if (question.category === "memory") {
    if (reaction.memoryCoherence < 35) {
      evidence.push({
        id: `${questionId}-mem-low`,
        text: "Memory inconsistency detected",
        weight: 2,
        type: "nonhuman",
      });
    } else if (reaction.memoryCoherence > 85) {
      evidence.push({
        id: `${questionId}-mem-high`,
        text: isHuman ? "Clear memory recall under stress" : "Suspiciously precise recall",
        weight: isHuman ? 1 : 2,
        type: isHuman ? "human" : "nonhuman",
      });
    }
  }

  // Empathy checks
  if (question.category === "empathy" || question.category === "fear") {
    if (reaction.empathyDeviation > 70) {
      evidence.push({
        id: `${questionId}-emp-high`,
        text: "Elevated emotional response",
        weight: 1,
        type: "human",
      });
    } else if (reaction.empathyDeviation < 20) {
      evidence.push({
        id: `${questionId}-emp-low`,
        text: "Flat empathy response",
        weight: 2,
        type: "nonhuman",
      });
    }
  }

  // Emotional variance checks
  if (reaction.emotionalVariance > 75) {
    evidence.push({
      id: `${questionId}-var-high`,
      text: "High emotional variance — natural affect",
      weight: 1,
      type: "human",
    });
  } else if (reaction.emotionalVariance < 20) {
    evidence.push({
      id: `${questionId}-var-low`,
      text: "Unusually stable emotional baseline",
      weight: 2,
      type: "nonhuman",
    });
  }

  // Latency checks
  if (reaction.responseLatency < 10) {
    evidence.push({
      id: `${questionId}-lat-low`,
      text: "Response latency below human threshold",
      weight: 3,
      type: "nonhuman",
    });
  } else if (reaction.responseLatency > 60) {
    evidence.push({
      id: `${questionId}-lat-high`,
      text: "Extended processing time — stress response",
      weight: 1,
      type: "human",
    });
  }

  // Ethics/contradiction
  if (question.category === "ethics" || question.category === "contradiction") {
    if (reaction.empathyDeviation > 60 && reaction.emotionalVariance > 50) {
      evidence.push({
        id: `${questionId}-ethics-conflict`,
        text: "Ethical conflict response — human moral distress",
        weight: 1,
        type: "human",
      });
    }
  }

  return evidence;
}

function getSubjectsForDay(day: number): Subject[] {
  const start = (day - 1) * 5;
  return subjects.slice(start, start + 5);
}

function getMinQuestionsForDay(day: number): number {
  if (day === 1) return 3;
  if (day === 2) return 4;
  return 5;
}

interface GameStore extends GameState {
  startGame: () => void;
  startNextDay: () => void;
  startInspection: (subjectIndex: number) => void;
  askQuestion: (questionId: string) => void;
  issueVerdict: (verdict: "human" | "nonhuman") => void;
  nextSubject: () => void;
  goToApartment: () => void;
  continueFromApartment: () => void;
  restartGame: () => void;
}

const initialState: GameState = {
  phase: "menu",
  currentDay: 1,
  currentSubjectIndex: 0,
  activeRulesetId: "ruleset-day1",
  score: 0,
  warnings: 0,
  subjectsToday: [],
  cases: [],
  currentCase: null,
};

export const useGameStore = create<GameStore>((set, get) => ({
  ...initialState,

  startGame: () => {
    const day = 1;
    set({
      phase: "briefing",
      currentDay: day,
      currentSubjectIndex: 0,
      activeRulesetId: rulesets.find((r) => r.day === day)!.id,
      score: 0,
      warnings: 0,
      subjectsToday: getSubjectsForDay(day),
      cases: [],
      currentCase: null,
    });
  },

  startNextDay: () => {
    const nextDay = get().currentDay + 1;
    if (nextDay > 3) {
      set({ phase: "gameOver" });
      return;
    }
    set({
      phase: "briefing",
      currentDay: nextDay,
      currentSubjectIndex: 0,
      activeRulesetId: rulesets.find((r) => r.day === nextDay)!.id,
      subjectsToday: getSubjectsForDay(nextDay),
      cases: [],
      currentCase: null,
    });
  },

  startInspection: (subjectIndex: number) => {
    const { subjectsToday } = get();
    const subject = subjectsToday[subjectIndex];
    if (!subject) return;
    const newCase: CaseState = {
      subjectId: subject.id,
      askedQuestionIds: [],
      transcript: [],
      reactions: [],
      evidenceForHuman: [],
      evidenceForNonHuman: [],
    };
    set({
      phase: "inspection",
      currentSubjectIndex: subjectIndex,
      currentCase: newCase,
    });
  },

  askQuestion: (questionId: string) => {
    const { currentCase, subjectsToday, currentSubjectIndex } = get();
    if (!currentCase) return;
    const subject = subjectsToday[currentSubjectIndex];
    if (!subject) return;

    const question = questions.find((q) => q.id === questionId);
    if (!question) return;
    if (currentCase.askedQuestionIds.includes(questionId)) return;

    const callCount = currentCase.askedQuestionIds.length;
    const reaction = generateReaction(subject, questionId, callCount);
    const newEvidence = generateEvidence(reaction, subject, questionId);

    const humanEvidence = newEvidence.filter((e) => e.type === "human");
    const nonHumanEvidence = newEvidence.filter((e) => e.type === "nonhuman");

    const updatedCase: CaseState = {
      ...currentCase,
      askedQuestionIds: [...currentCase.askedQuestionIds, questionId],
      transcript: [
        ...currentCase.transcript,
        { speaker: "EXAMINER", text: question.text },
        { speaker: "SUBJECT", text: reaction.responseText },
      ],
      reactions: [...currentCase.reactions, reaction],
      evidenceForHuman: [...currentCase.evidenceForHuman, ...humanEvidence],
      evidenceForNonHuman: [...currentCase.evidenceForNonHuman, ...nonHumanEvidence],
    };

    set({ currentCase: updatedCase });
  },

  issueVerdict: (verdict: "human" | "nonhuman") => {
    const { currentCase, subjectsToday, currentSubjectIndex, score, warnings, cases } = get();
    if (!currentCase) return;
    const subject = subjectsToday[currentSubjectIndex];

    const isCorrect = verdict === subject.hiddenTruth;
    const scoreChange = isCorrect ? 100 : -50;
    const newWarnings = isCorrect ? warnings : warnings + 1;

    const finalCase: CaseState = {
      ...currentCase,
      finalVerdict: verdict,
    };

    set({
      phase: "subjectResult",
      score: score + scoreChange,
      warnings: newWarnings,
      currentCase: finalCase,
      cases: [...cases, finalCase],
    });
  },

  nextSubject: () => {
    const { currentSubjectIndex, subjectsToday, currentDay } = get();
    const nextIndex = currentSubjectIndex + 1;

    if (nextIndex >= subjectsToday.length) {
      // End of day
      set({ phase: "endOfDay" });
    } else {
      // Check if more subjects remain — but first show end of day if all done
      set({
        phase: "inspection",
        currentSubjectIndex: nextIndex,
        currentCase: null,
      });
      // Actually start the next inspection
      const { startInspection } = get();
      startInspection(nextIndex);
    }
  },

  goToApartment: () => {
    set({ phase: "apartment" });
  },

  continueFromApartment: () => {
    const { currentDay } = get();
    if (currentDay >= 3) {
      set({ phase: "gameOver" });
    } else {
      get().startNextDay();
    }
  },

  restartGame: () => {
    set({ ...initialState });
  },
}));
