import React from "react";
import { useGameStore } from "../store/gameStore";
import { subjects } from "../data/subjects";

export function GameOverScreen() {
  const { score, warnings, cases, restartGame } = useGameStore();

  const totalSubjects = cases.length;
  const correctCount = cases.filter((c) => {
    const subj = subjects.find((s) => s.id === c.subjectId);
    return subj && c.finalVerdict === subj.hiddenTruth;
  }).length;
  const accuracy = totalSubjects > 0 ? Math.round((correctCount / totalSubjects) * 100) : 0;

  const getRating = () => {
    if (accuracy === 100) return { label: "PERFECT RECORD", color: "var(--green)", text: "Your performance is without flaw. The Bureau will note your exceptional accuracy. You may sleep soundly." };
    if (accuracy >= 80) return { label: "COMMENDABLE", color: "var(--green)", text: "You performed well. The Bureau is satisfied. Most synthetics you identified were contained. A few slipped through. That is acceptable." };
    if (accuracy >= 60) return { label: "ADEQUATE", color: "var(--amber)", text: "Your classification accuracy was marginal. Several errors were recorded. The Bureau recommends refresher training before your next assignment." };
    if (accuracy >= 40) return { label: "UNSATISFACTORY", color: "var(--red)", text: "Your performance reflects poorly on the Office. Multiple synthetics may have been cleared. Multiple humans may have been detained unjustly. An inquiry is pending." };
    return { label: "FAILURE — REASSIGNMENT PENDING", color: "var(--red)", text: "You have failed the Bureau. You have failed the people. You are being reassigned. Effective immediately. Your credentials have been suspended pending review." };
  };

  const rating = getRating();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        padding: "32px 20px",
        gap: "20px",
        overflowY: "auto",
      }}
    >
      <div style={{ maxWidth: "640px", width: "100%" }}>
        {/* Terminal shutdown header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "24px",
          }}
        >
          <div style={{ color: "var(--text-dark)", fontSize: "17px", letterSpacing: "0.2em", marginBottom: "8px" }}>
            END OF EVALUATION PERIOD — ALL DAYS COMPLETE
          </div>
          <h1
            style={{
              fontSize: "clamp(27px, 4.5vw, 42px)",
              color: rating.color,
              textShadow: `0 0 16px ${rating.color}`,
              letterSpacing: "0.1em",
            }}
          >
            {rating.label}
          </h1>
        </div>

        {/* Score display */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          {[
            { label: "FINAL SCORE", value: score, color: "var(--green)" },
            { label: "CLASSIFIED", value: `${totalSubjects}/15`, color: "var(--green)" },
            { label: "ACCURACY", value: `${accuracy}%`, color: accuracy >= 70 ? "var(--green)" : accuracy >= 50 ? "var(--amber)" : "var(--red)" },
            { label: "WARNINGS", value: warnings, color: warnings === 0 ? "var(--green)" : warnings < 3 ? "var(--amber)" : "var(--red)" },
          ].map(({ label, value, color }) => (
            <div
              key={label}
              style={{
                border: `1px solid ${color}22`,
                padding: "12px 8px",
                textAlign: "center",
                background: "var(--bg-panel)",
              }}
            >
              <div style={{ fontSize: "14px", color: "var(--text-dark)", marginBottom: "4px", letterSpacing: "0.1em" }}>
                {label}
              </div>
              <div style={{ fontSize: "30px", color, textShadow: `0 0 8px ${color}` }}>{value}</div>
            </div>
          ))}
        </div>

        {/* Case history */}
        <div className="panel" style={{ marginBottom: "16px" }}>
          <div className="panel-title">FULL CASE HISTORY</div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 80px 80px 60px",
              gap: "2px",
              fontSize: "15px",
            }}
          >
            <div style={{ color: "var(--text-dark)", borderBottom: "1px solid var(--border-dim)", paddingBottom: "4px" }}>SUBJECT</div>
            <div style={{ color: "var(--text-dark)", borderBottom: "1px solid var(--border-dim)", paddingBottom: "4px" }}>TRUTH</div>
            <div style={{ color: "var(--text-dark)", borderBottom: "1px solid var(--border-dim)", paddingBottom: "4px" }}>VERDICT</div>
            <div style={{ color: "var(--text-dark)", borderBottom: "1px solid var(--border-dim)", paddingBottom: "4px" }}>RESULT</div>

            {cases.map((c, i) => {
              const subj = subjects.find((s) => s.id === c.subjectId);
              if (!subj) return null;
              const correct = c.finalVerdict === subj.hiddenTruth;
              return (
                <React.Fragment key={c.subjectId}>
                  <div style={{ color: "var(--text-dim)", padding: "3px 0", fontSize: "15px" }}>
                    {subj.displayName}
                  </div>
                  <div
                    style={{
                      color: subj.hiddenTruth === "human" ? "var(--green-dim)" : "var(--red-dim)",
                      fontSize: "14px",
                      padding: "3px 0",
                    }}
                  >
                    {subj.hiddenTruth.toUpperCase()}
                  </div>
                  <div
                    style={{
                      color: c.finalVerdict === "human" ? "var(--green-dim)" : "var(--red-dim)",
                      fontSize: "14px",
                      padding: "3px 0",
                    }}
                  >
                    {c.finalVerdict?.toUpperCase()}
                  </div>
                  <div
                    style={{
                      color: correct ? "var(--green)" : "var(--red)",
                      fontWeight: "bold",
                      fontSize: "15px",
                      padding: "3px 0",
                    }}
                  >
                    {correct ? "✓" : "✗"}
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Rating flavor text */}
        <div className="panel" style={{ marginBottom: "20px" }}>
          <div className="panel-title">BUREAU EVALUATION</div>
          <p style={{ fontSize: "18px", lineHeight: "1.8", color: "var(--text-dim)", fontStyle: "italic" }}>
            "{rating.text}"
          </p>
          <div
            style={{
              marginTop: "12px",
              fontSize: "15px",
              color: "var(--text-dark)",
              letterSpacing: "0.1em",
            }}
          >
            — DIRECTOR VALE, BUREAU OF SYNTHETIC IDENTIFICATION
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <button className="btn" onClick={restartGame} style={{ padding: "15px 48px" }}>
            <span>[ RESTART — NEW SESSION ]</span>
          </button>
        </div>
      </div>
    </div>
  );
}
