import React from "react";
import { useGameStore } from "../store/gameStore";
import { subjects } from "../data/subjects";

const verdictFlavour: Record<string, Record<string, string>> = {
  human: {
    human: "Classification confirmed. Subject released. The Bureau thanks you for your accuracy.",
    nonhuman: "Misclassification recorded. A human was incorrectly detained. The Bureau has noted this error.",
  },
  nonhuman: {
    nonhuman: "Non-human entity contained. Excellent work. Transfer to Processing Unit 7 initiated.",
    human: "ERROR. You classified a synthetic as human. It is now at large. This will be reviewed.",
  },
};

export function SubjectResultScreen() {
  const { currentCase, subjectsToday, currentSubjectIndex, nextSubject, score, warnings } = useGameStore();

  if (!currentCase) return null;

  const subject = subjectsToday[currentSubjectIndex];
  const verdict = currentCase.finalVerdict!;
  const isCorrect = verdict === subject.hiddenTruth;
  const flavorKey = verdict === "human" ? "human" : "nonhuman";
  const truthKey = subject.hiddenTruth === "human" ? "human" : "nonhuman";
  const flavor = verdictFlavour[flavorKey][truthKey];

  const isLastSubject = currentSubjectIndex >= subjectsToday.length - 1;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        padding: "32px",
        gap: "20px",
      }}
    >
      <div style={{ maxWidth: "600px", width: "100%" }}>
        {/* Verdict header */}
        <div
          style={{
            border: `2px solid ${isCorrect ? "var(--green)" : "var(--red)"}`,
            padding: "30px",
            textAlign: "center",
            marginBottom: "20px",
            background: isCorrect ? "rgba(0,255,65,0.03)" : "rgba(255,64,64,0.03)",
            boxShadow: isCorrect ? "var(--glow-strong)" : "var(--glow-red)",
          }}
        >
          <div style={{ fontSize: "17px", color: "var(--text-dark)", letterSpacing: "0.2em", marginBottom: "8px" }}>
            VERDICT ISSUED — SUBJECT {currentSubjectIndex + 1}
          </div>
          <div
            style={{
              fontSize: "36px",
              color: verdict === "human" ? "var(--green)" : "var(--red)",
              textShadow: verdict === "human" ? "var(--glow-strong)" : "var(--glow-red)",
              letterSpacing: "0.2em",
              fontWeight: "bold",
            }}
          >
            {verdict === "human" ? "CLASSIFIED: HUMAN" : "CLASSIFIED: NON-HUMAN"}
          </div>
          <div
            style={{
              marginTop: "12px",
              fontSize: "20px",
              color: isCorrect ? "var(--green)" : "var(--red)",
              textShadow: isCorrect ? "var(--glow)" : "var(--glow-red)",
            }}
          >
            {isCorrect ? "✓ CORRECT — " : "✗ INCORRECT — "}
            {isCorrect ? "+100 POINTS" : "-50 POINTS + WARNING"}
          </div>
        </div>

        {/* Truth reveal */}
        <div className="panel" style={{ marginBottom: "16px" }}>
          <div className="panel-title">CLASSIFIED INFORMATION — SUBJECT TRUTH</div>
          <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
            <div style={{ flex: 1 }}>
              <div style={{ color: "var(--green)", fontSize: "21px", fontWeight: "bold", marginBottom: "4px" }}>
                {subject.displayName}
              </div>
              <div style={{ color: "var(--text-dark)", fontSize: "17px", marginBottom: "8px" }}>
                TRUE CLASSIFICATION:{" "}
                <span
                  style={{
                    color: subject.hiddenTruth === "human" ? "var(--green)" : "var(--red)",
                    textShadow: subject.hiddenTruth === "human" ? "var(--glow)" : "var(--glow-red)",
                  }}
                >
                  {subject.hiddenTruth.toUpperCase()}
                </span>
              </div>
              <p style={{ fontSize: "17px", lineHeight: "1.6" }}>{flavor}</p>
            </div>
          </div>

          {!isCorrect && (
            <div
              style={{
                marginTop: "12px",
                padding: "12px",
                border: "1px solid var(--red-dim)",
                color: "var(--red)",
                fontSize: "17px",
                textShadow: "var(--glow-red)",
              }}
            >
              BUREAU WARNING #{warnings}: Review your assessment methodology. Repeated errors will result in reassignment.
            </div>
          )}
        </div>

        {/* Score */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "12px 24px",
            border: "1px solid var(--border-dim)",
            background: "var(--bg-panel)",
            marginBottom: "20px",
            fontSize: "18px",
          }}
        >
          <span style={{ color: "var(--text-dark)" }}>CURRENT SCORE:</span>
          <span style={{ color: "var(--green)", textShadow: "var(--glow)" }}>{score}</span>
          <span style={{ color: "var(--text-dark)" }}>WARNINGS:</span>
          <span
            style={{
              color: warnings > 0 ? "var(--red)" : "var(--green)",
              textShadow: warnings > 0 ? "var(--glow-red)" : "var(--glow)",
            }}
          >
            {warnings}
          </span>
        </div>

        {/* Next button */}
        <div style={{ textAlign: "center" }}>
          <button
            className={isLastSubject ? "btn btn-amber" : "btn"}
            onClick={nextSubject}
          >
            <span>{isLastSubject ? "[ END OF DAY ]" : "[ NEXT SUBJECT ]"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
