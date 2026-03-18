export type Subject = {
  id: string;
  displayName: string;
  age: number;
  occupation: string;
  portraitType: string;
  biography: string;
  hiddenTruth: "human" | "nonhuman";
  traits: string[];
  stressLevel: number;
  memoryIntegrity: number;
  empathyProfile: number;
  contradictionRisk: number;
  responseLatencyBase: number;
  specialFlags?: string[];
};

export type Question = {
  id: string;
  text: string;
  category: "empathy" | "memory" | "identity" | "fear" | "ethics" | "contradiction";
  targets: string[];
  stressImpact: number;
};

export type ReactionResult = {
  questionId: string;
  responseLatency: number;
  emotionalVariance: number;
  memoryCoherence: number;
  empathyDeviation: number;
  responseText: string;
};

export type EvidenceItem = {
  id: string;
  text: string;
  weight: number;
  type: "human" | "nonhuman";
};

export type CaseState = {
  subjectId: string;
  askedQuestionIds: string[];
  transcript: { speaker: "EXAMINER" | "SUBJECT"; text: string }[];
  reactions: ReactionResult[];
  evidenceForHuman: EvidenceItem[];
  evidenceForNonHuman: EvidenceItem[];
  finalVerdict?: "human" | "nonhuman";
};

export type Ruleset = {
  id: string;
  day: number;
  title: string;
  briefing: string;
  rules: string[];
};

export type ApartmentEvent = {
  id: string;
  day: number;
  title: string;
  messages: { sender: string; text: string }[];
};

export type GameState = {
  phase: "menu" | "briefing" | "inspection" | "subjectResult" | "endOfDay" | "apartment" | "gameOver";
  currentDay: number;
  currentSubjectIndex: number;
  activeRulesetId: string;
  score: number;
  warnings: number;
  subjectsToday: Subject[];
  cases: CaseState[];
  currentCase: CaseState | null;
};
