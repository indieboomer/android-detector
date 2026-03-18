import React from "react";
import { useGameStore } from "../store/gameStore";
import { subjects } from "../data/subjects";

export function EndOfDaySummaryScreen() {
  const { cases, subjectsToday, currentDay, score, warnings, goToApartment } = useGameStore();

  const daySubjects = subjectsToday;

  const correctCount = cases.filter(
    (c) => {
      const subj = subjects.find((s) => s.id === c.subjectId);
      return subj && c.finalVerdict === subj.hiddenTruth;
    }
  ).length;

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
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <div style={{ color: "var(--text-dark)", fontSize: "17px", letterSpacing: "0.2em" }}>
            END OF SHIFT — DAY {currentDay}
          </div>
          <h2 style={{ fontSize: "30px", marginTop: "4px" }}>DAILY PERFORMANCE REVIEW</h2>
        </div>

        {/* Summary table */}
        <div className="panel" style={{ marginBottom: "16px" }}>
          <div className="panel-title">CASE OUTCOMES</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {/* Header row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 120px 100px 80px",
                fontSize: "15px",
                color: "var(--text-dark)",
                letterSpacing: "0.1em",
                borderBottom: "1px solid var(--border-dim)",
                paddingBottom: "4px",
                marginBottom: "4px",
              }}
            >
              <span>SUBJECT</span>
              <span>TRUE CLASS.</span>
              <span>YOUR VERDICT</span>
              <span>OUTCOME</span>
            </div>

            {cases.map((c, i) => {
              const subj = subjects.find((s) => s.id === c.subjectId);
              if (!subj) return null;
              const correct = c.finalVerdict === subj.hiddenTruth;
              return (
                <div
                  key={c.subjectId}
                  className="fade-in"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 120px 100px 80px",
                    fontSize: "17px",
                    alignItems: "center",
                    animationDelay: `${i * 0.1}s`,
                  }}
                >
                  <span style={{ color: "var(--text-dim)" }}>{subj.displayName}</span>
                  <span
                    style={{
                      color: subj.hiddenTruth === "human" ? "var(--green-dim)" : "var(--red-dim)",
                      fontSize: "15px",
                    }}
                  >
                    {subj.hiddenTruth.toUpperCase()}
                  </span>
                  <span
                    style={{
                      color: c.finalVerdict === "human" ? "var(--green-dim)" : "var(--red-dim)",
                      fontSize: "15px",
                    }}
                  >
                    {c.finalVerdict?.toUpperCase()}
                  </span>
                  <span
                    style={{
                      color: correct ? "var(--green)" : "var(--red)",
                      textShadow: correct ? "var(--glow)" : "var(--glow-red)",
                      fontWeight: "bold",
                      fontSize: "17px",
                    }}
                  >
                    {correct ? "✓ OK" : "✗ ERR"}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          {[
            { label: "CORRECT", value: `${correctCount}/${daySubjects.length}`, color: "var(--green)" },
            { label: "SCORE", value: score, color: "var(--green)" },
            { label: "WARNINGS", value: warnings, color: warnings > 0 ? "var(--red)" : "var(--green)" },
          ].map(({ label, value, color }) => (
            <div
              key={label}
              style={{
                border: "1px solid var(--border-dim)",
                padding: "18px",
                textAlign: "center",
                background: "var(--bg-panel)",
              }}
            >
              <div style={{ fontSize: "15px", color: "var(--text-dark)", marginBottom: "4px" }}>{label}</div>
              <div style={{ fontSize: "33px", color, textShadow: `0 0 8px ${color}` }}>{value}</div>
            </div>
          ))}
        </div>

        {/* Assessment */}
        <div className="panel" style={{ marginBottom: "20px" }}>
          <div className="panel-title">PERFORMANCE ASSESSMENT</div>
          <p style={{ fontSize: "18px", lineHeight: "1.7", color: "var(--text-dark)" }}>
            {correctCount === daySubjects.length
              ? "Perfect score. Your classification accuracy is exemplary. The Bureau notes your attention to detail."
              : correctCount >= daySubjects.length - 1
              ? "Near-perfect performance. Minor calibration recommended. The Bureau is satisfied."
              : correctCount >= Math.floor(daySubjects.length / 2)
              ? "Acceptable performance. Your classification matrix requires further calibration. Review the criteria."
              : "Unsatisfactory performance. Your accuracy falls below Bureau standards. Tomorrow will not be easier."}
          </p>
        </div>

        <div style={{ textAlign: "center" }}>
          <button className="btn btn-amber" onClick={goToApartment} style={{ padding: "15px 48px" }}>
            <span>[ RETURN TO QUARTERS ]</span>
          </button>
        </div>
      </div>
    </div>
  );
}
