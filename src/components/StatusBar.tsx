import React from "react";
import { useGameStore } from "../store/gameStore";

export function StatusBar() {
  const { currentDay, score, warnings, phase } = useGameStore();

  if (phase === "menu") return null;

  return (
    <div className="status-bar">
      <div className="status-item">
        <span>HVO-TERMINAL</span>
        <span>v2.1</span>
      </div>
      <div className="status-item">
        <span>DAY <span className="status-value">{currentDay}</span>/3</span>
        <span>SCORE <span className="status-value">{score}</span></span>
        <span>WARNINGS <span className="status-value" style={{ color: warnings > 0 ? "var(--red)" : undefined }}>{warnings}</span></span>
      </div>
      <div className="status-item">
        <span style={{ color: "var(--text-dark)" }}>
          ■ SECURE CONNECTION
        </span>
      </div>
    </div>
  );
}
