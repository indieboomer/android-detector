# Android Detector — Project README

## Overview

Android Detector is a single-player narrative inspection game set in a retro-futuristic dystopian world. The player works as an examiner in a state-controlled "Human Verification Office," evaluating whether incoming subjects meet the current official criteria of "humanity."

The core gameplay loop revolves around:

* questioning subjects,
* analyzing measured reactions,
* interpreting ambiguous evidence,
* making final classification decisions.

The definition of "humanity" is not fixed — it is imposed by authorities and evolves over time. As the game progresses, rules change, pressure increases, and consequences become more severe.

After each workday, the player returns to their apartment, where narrative events unfold through messages and personal interactions.

This project is designed for **AI-assisted iterative development**:

* Claude Code generates and updates code,
* the developer plays builds and provides feedback,
* the game evolves through tight iteration loops.

---

## Goals (Prototype Phase)

Build a playable vertical slice with:

* Desktop-first UI (web-based)
* 3 workdays
* 5 subjects per day
* 1 apartment phase per day
* Retro terminal-style interface
* No backend
* No LLM integration (yet)
* Deterministic systems and rule-based logic

Focus on:

* making the core loop engaging,
* clean modular architecture,
* fast iteration.

---

## Technology Stack

* React
* TypeScript
* Vite
* Lightweight CSS (or Tailwind if needed)
* Local state (Zustand or React state)
* JSON/TS data files for content

No backend required.

The project should be easily wrappable later as:

* Windows app (Tauri)
* Mobile app (Capacitor)

---

## Core Gameplay Loop

For each subject:

1. Subject enters inspection screen
2. Player sees:

   * subject profile
   * current humanity criteria
   * available questions
   * reaction metrics
3. Player selects questions
4. Subject responds
5. System shows reaction measurements
6. Evidence accumulates
7. Player decides:

   * HUMAN
   * NON-HUMAN

After all subjects:

* end-of-day summary
* transition to apartment phase

---

## Design Philosophy

* The player does not discover truth — they interpret signals
* The system is imperfect and ambiguous
* Rules change over time
* Moral tension increases
* Bureaucracy is part of gameplay

This is not:

* a trivia game
* a simple lie detector
* a parody

This is:

* a systemic narrative experience
* a game about judgment under uncertainty

---

## Humanity Criteria System

Each day defines a set of rules that determine "humanity."

Examples:

* demonstrates empathy
* maintains coherent memory
* reacts emotionally to suffering
* shows fear of death
* exhibits non-optimized contradictions

Rules change between days.

Rules should be stored as structured data.

---

## Subject Model

Subjects are data-driven entities with hidden traits.

Example structure:

```ts
type Subject = {
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
```

Subjects should include ambiguity:

* damaged humans
* convincing synthetics
* hybrids
* frightened innocents
* unstable personalities

---

## Question System

The system presents 3–5 questions at a time.

Each question:

* targets specific traits
* produces measurable reactions
* contributes to evidence

Example:

```ts
type Question = {
  id: string;
  text: string;
  category: string;
  targets: string[];
  stressImpact: number;
};
```

Categories:

* empathy
* memory
* identity
* fear
* ethics
* contradiction

---

## Reaction System

Each question produces measurable outputs:

* Response Latency
* Emotional Variance
* Memory Coherence
* Empathy Deviation

Important:
These are indicators, not truth.

They must:

* be noisy,
* be interpretable,
* sometimes mislead the player.

---

## Evidence System

As the player asks questions, evidence accumulates.

Two columns:

* Supports Humanity
* Supports Non-Human

Each answer contributes evidence.

The system should not expose hidden truth directly.

---

## Decision System

Player issues final verdict:

* CLASSIFY AS HUMAN
* CLASSIFY AS NON-HUMAN

Outcome:

* stored in case state
* used for end-of-day summary

Immediate correctness feedback is optional.

---

## Day Progression

Each day:

* introduces new rules
* increases ambiguity
* escalates consequences

Example:

* Day 1 → simple classification
* Day 2 → stricter criteria
* Day 3 → severe state actions

---

## Apartment Phase

After each day:

* player returns home
* sees messages, events, personal narrative

Minimal prototype:

* 1–2 events per day
* simple UI
* "continue" option

---

## UI Layout

Inspection screen:

Left panel:

* subject info
* portrait
* dossier
* rules

Center panel:

* dialogue transcript

Right panel:

* reaction metrics
* evidence lists

Bottom:

* question choices
* verdict buttons

Style:

* retro terminal
* dark background
* green/amber text
* pixel or monospace font

---

## Main Screens

* MainMenu
* BriefingScreen
* InspectionScreen
* SubjectResultScreen
* EndOfDaySummaryScreen
* ApartmentScreen
* GameOverScreen

---

## Game State

Example:

```ts
type GameState = {
  currentDay: number;
  currentSubjectIndex: number;
  activeRulesetId: string;
  score: number;
  warnings: number;
  subjectsToday: Subject[];
};
```

Case state:

```ts
type CaseState = {
  subjectId: string;
  askedQuestionIds: string[];
  transcript: any[];
  reactions: any[];
  evidenceForHuman: any[];
  evidenceForNonHuman: any[];
  finalVerdict?: "human" | "nonhuman";
};
```

---

## Content System

Use local JSON or TS files:

* rulesets
* subjects
* questions
* apartment events
* day briefings

Keep editable and simple.

---

## Prototype Content Requirements

* 3 days
* 5 subjects per day
* ~20 questions
* 3 rule sets
* 3 apartment events

Include:

* clear cases
* ambiguous cases
* morally difficult cases

---

## Development Phases

Phase 1:

* project setup
* main menu
* basic UI

Phase 2:

* single inspection scene
* one subject
* question system

Phase 3:

* evidence system
* multiple subjects
* day loop

Phase 4:

* multi-day progression
* apartment phase

Phase 5:

* polish
* save/load
* UI improvements

---

## Constraints

* keep scope small
* avoid overengineering
* no LLM initially
* prioritize playability
* keep systems deterministic

---

## Optional Enhancements

* stamp animation
* typing sound
* CRT effect
* local save

---

## Final Notes

This project is designed for iterative AI-assisted development.

The priority is:

* fast iteration,
* playable builds,
* evolving design through testing.

The game should feel:

* tense,
* ambiguous,
* bureaucratic,
* morally uncomfortable.

---

## Instruction for Claude Code

Start by:

1. creating project structure,
2. implementing basic UI layout,
3. building one playable inspection case,
4. using placeholder data,
5. ensuring modular and extendable architecture.

Do not overcomplicate.

Make it playable as early as possible.

