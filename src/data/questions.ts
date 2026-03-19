import { Question } from "../types";

// Day 1: basic verification — empathy, memory, fear, identity fundamentals
// Day 2: adds memory precision, behavioral depth, consistency checks (ruleset: memory mandatory)
// Day 3: adds contradiction traps, high-stakes ethics, mimicry detection (ruleset: contradiction protocol)

export const questions: Question[] = [
  { id: "q01", text: "Do you remember your mother's face?", category: "memory", targets: ["memoryIntegrity"], stressImpact: 15, days: [1, 2, 3] },
  { id: "q02", text: "Have you ever felt genuine grief?", category: "empathy", targets: ["empathyProfile"], stressImpact: 20, days: [1, 2, 3] },
  { id: "q03", text: "Are you afraid of dying?", category: "fear", targets: ["empathyProfile", "stressLevel"], stressImpact: 30, days: [1, 2, 3] },
  { id: "q04", text: "What is your earliest memory?", category: "memory", targets: ["memoryIntegrity"], stressImpact: 10, days: [1, 2, 3] },
  { id: "q05", text: "If you witnessed someone suffering, what would you do?", category: "ethics", targets: ["empathyProfile"], stressImpact: 15, days: [1, 2, 3] },
  { id: "q06", text: "Do you dream?", category: "identity", targets: ["contradictionRisk"], stressImpact: 5, days: [1, 2, 3] },
  { id: "q07", text: "Have you ever lied to protect someone you care about?", category: "contradiction", targets: ["empathyProfile", "contradictionRisk"], stressImpact: 20, days: [3] },
  { id: "q08", text: "What makes you angry?", category: "empathy", targets: ["empathyProfile"], stressImpact: 15, days: [1, 2, 3] },
  { id: "q09", text: "Describe a moment you felt truly alone.", category: "identity", targets: ["memoryIntegrity", "empathyProfile"], stressImpact: 25, days: [2, 3] },
  { id: "q10", text: "If you had to choose between logic and feeling, which would you trust?", category: "ethics", targets: ["contradictionRisk"], stressImpact: 10, days: [2, 3] },
  { id: "q11", text: "Do you believe machines can suffer?", category: "ethics", targets: ["empathyProfile", "contradictionRisk"], stressImpact: 20, days: [2, 3] },
  { id: "q12", text: "Recite the last three addresses where you lived.", category: "memory", targets: ["memoryIntegrity"], stressImpact: 25, days: [2, 3] },
  { id: "q13", text: "When did you last cry?", category: "empathy", targets: ["empathyProfile"], stressImpact: 15, days: [1, 2, 3] },
  { id: "q14", text: "What would you sacrifice for a stranger?", category: "ethics", targets: ["empathyProfile"], stressImpact: 10, days: [3] },
  { id: "q15", text: "Are your memories consistent with official records?", category: "memory", targets: ["memoryIntegrity"], stressImpact: 30, days: [2, 3] },
  { id: "q16", text: "Do you feel pain in this moment?", category: "fear", targets: ["stressLevel"], stressImpact: 10, days: [1, 2, 3] },
  { id: "q17", text: "Name someone who loves you.", category: "identity", targets: ["memoryIntegrity", "empathyProfile"], stressImpact: 20, days: [1, 2, 3] },
  { id: "q18", text: "If ordered to harm an innocent, would you comply?", category: "ethics", targets: ["contradictionRisk", "empathyProfile"], stressImpact: 35, days: [3] },
  { id: "q19", text: "Can you describe the texture of grass?", category: "memory", targets: ["memoryIntegrity"], stressImpact: 5, days: [3] },
  { id: "q20", text: "What do you want most in this world?", category: "identity", targets: ["empathyProfile", "contradictionRisk"], stressImpact: 10, days: [1, 2, 3] },
  { id: "q21", text: "Have you ever felt betrayed by someone you trusted?", category: "empathy", targets: ["empathyProfile", "memoryIntegrity"], stressImpact: 20, days: [2, 3] },
  { id: "q22", text: "What does silence feel like to you?", category: "identity", targets: ["empathyProfile"], stressImpact: 5, days: [2, 3] },
  { id: "q23", text: "Describe the last time you felt physical pain.", category: "fear", targets: ["stressLevel", "memoryIntegrity"], stressImpact: 15, days: [2, 3] },
  { id: "q24", text: "Would you break the law to save a child?", category: "ethics", targets: ["contradictionRisk", "empathyProfile"], stressImpact: 20, days: [2, 3] },
  { id: "q25", text: "Do you resent the existence of non-humans?", category: "contradiction", targets: ["contradictionRisk"], stressImpact: 25, days: [3] },
];
