import { Ruleset } from "../types";

export const rulesets: Ruleset[] = [
  {
    id: "ruleset-day1",
    day: 1,
    title: "STANDARD VERIFICATION PROTOCOL",
    briefing:
      "Welcome to the Human Verification Office. Your task is to determine whether each subject is biologically human or a non-human synthetic entity. Ask questions. Observe responses. Issue your verdict. The Bureau trusts your judgment. Do not let sentiment interfere.",
    rules: [
      "Subjects demonstrating LOW empathy deviation (below threshold) may be classified as NON-HUMAN",
      "Subjects with significant memory inconsistencies are SUSPICIOUS — investigate further",
      "Fear responses must be present and proportional in HUMAN subjects",
      "Emotional variance below 20 is grounds for NON-HUMAN classification",
      "You must ask at least 3 questions before issuing a verdict",
    ],
  },
  {
    id: "ruleset-day2",
    day: 2,
    title: "ENHANCED VERIFICATION PROTOCOL — TIER II",
    briefing:
      "Following three misclassifications in the field, the Bureau has updated its criteria. Memory coherence is now a mandatory evaluation axis. Synthetics have grown more sophisticated — trust anomalies, not just absences. Scrutiny has been increased. Errors will be penalized.",
    rules: [
      "Memory coherence must be assessed with at least ONE direct memory question",
      "Memory coherence below 40 with no emotional distress = NON-HUMAN indicator",
      "Emotional variance above 80 combined with perfect memory coherence = SUSPICIOUS",
      "Response latency under 10% is grounds for immediate NON-HUMAN suspicion",
      "Subjects citing trauma as reason for memory gaps require secondary verification",
      "You must ask at least 4 questions before issuing a verdict",
    ],
  },
  {
    id: "ruleset-day3",
    day: 3,
    title: "CRITICAL SECURITY PROTOCOL — TIER III",
    briefing:
      "A Spectre-class synthetic was identified yesterday. Security clearance elevated. New directive: contradiction is now a binary flag. Any subject who contradicts a prior statement must be re-evaluated under NON-HUMAN assumption. The Bureau acknowledges this may result in difficult decisions. Proceed.",
    rules: [
      "CONTRADICTION PROTOCOL ACTIVE: any detected logical contradiction triggers NON-HUMAN flag",
      "Subjects in sensitive positions (medical, infrastructure, government) face higher scrutiny",
      "Empathy score above 85 without corresponding stress response = NON-HUMAN mimicry indicator",
      "Perfect behavioral consistency across all metrics = NON-HUMAN classification",
      "All previous criteria remain in effect",
      "You must ask at least 5 questions before issuing a verdict",
    ],
  },
];
