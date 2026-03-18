import React, { useState } from "react";
import { useGameStore } from "../store/gameStore";
import { rulesets } from "../data/rulesets";
import { TypingText } from "../components/TypingText";

export function BriefingScreen() {
  const { currentDay, activeRulesetId, startInspection } = useGameStore();
  const ruleset = rulesets.find((r) => r.id === activeRulesetId)!;
  const [briefingDone, setBriefingDone] = useState(false);

  const handleProceed = () => {
    startInspection(0);
  };

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
      <div style={{ maxWidth: "700px", width: "100%" }}>
        {/* Header */}
        <div
          style={{
            border: "1px solid var(--border-dim)",
            background: "var(--bg-panel)",
            padding: "18px 30px",
            marginBottom: "16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <div style={{ color: "var(--text-dark)", fontSize: "15px", letterSpacing: "0.2em" }}>
              MORNING BRIEFING // DAY {currentDay} OF 3
            </div>
            <div
              style={{
                color: "var(--green)",
                textShadow: "var(--glow)",
                fontSize: "24px",
                fontWeight: "bold",
                letterSpacing: "0.1em",
                marginTop: "4px",
              }}
            >
              {ruleset.title}
            </div>
          </div>
          <div
            style={{
              fontSize: "48px",
              color: "var(--green-dark)",
              textShadow: "var(--glow)",
              userSelect: "none",
            }}
          >
            DAY {currentDay}
          </div>
        </div>

        {/* Briefing text */}
        <div
          className="panel"
          style={{ marginBottom: "16px", minHeight: "80px" }}
        >
          <div className="panel-title">DIRECTOR BRIEFING</div>
          <p style={{ fontSize: "20px", lineHeight: "1.8" }}>
            <TypingText
              text={ruleset.briefing}
              speed={12}
              onDone={() => setBriefingDone(true)}
            />
          </p>
        </div>

        {/* Rules */}
        {briefingDone && (
          <div className="panel fade-in" style={{ marginBottom: "24px" }}>
            <div className="panel-title">HUMANITY CRITERIA — ACTIVE PROTOCOL</div>
            {ruleset.rules.map((rule, i) => (
              <div
                key={i}
                className="fade-in"
                style={{
                  display: "flex",
                  gap: "8px",
                  marginBottom: "8px",
                  fontSize: "18px",
                  color: "var(--text-dim)",
                  alignItems: "flex-start",
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                <span style={{ color: "var(--amber)", textShadow: "var(--glow-amber)", flexShrink: 0 }}>
                  [{String(i + 1).padStart(2, "0")}]
                </span>
                <span>{rule}</span>
              </div>
            ))}
          </div>
        )}

        {briefingDone && (
          <div className="fade-in" style={{ textAlign: "center" }}>
            <div
              style={{
                color: "var(--text-dark)",
                fontSize: "17px",
                marginBottom: "12px",
                letterSpacing: "0.1em",
              }}
            >
              5 SUBJECTS SCHEDULED FOR TODAY'S EXAMINATION
            </div>
            <button className="btn" onClick={handleProceed} style={{ padding: "15px 48px" }}>
              <span>[ ACKNOWLEDGE &amp; PROCEED ]</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
