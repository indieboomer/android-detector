import React, { useState, useEffect } from "react";
import { useGameStore } from "../store/gameStore";

const ASCII_TITLE = `
 █████╗ ███╗   ██╗██████╗ ██████╗  ██████╗ ██╗██████╗
██╔══██╗████╗  ██║██╔══██╗██╔══██╗██╔═══██╗██║██╔══██╗
███████║██╔██╗ ██║██║  ██║██████╔╝██║   ██║██║██║  ██║
██╔══██║██║╚██╗██║██║  ██║██╔══██╗██║   ██║██║██║  ██║
██║  ██║██║ ╚████║██████╔╝██║  ██║╚██████╔╝██║██████╔╝
╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚═╝╚═════╝

██████╗ ███████╗████████╗███████╗ ██████╗████████╗ ██████╗ ██████╗
██╔══██╗██╔════╝╚══██╔══╝██╔════╝██╔════╝╚══██╔══╝██╔═══██╗██╔══██╗
██║  ██║█████╗     ██║   █████╗  ██║        ██║   ██║   ██║██████╔╝
██║  ██║██╔══╝     ██║   ██╔══╝  ██║        ██║   ██║   ██║██╔══██╗
██████╔╝███████╗   ██║   ███████╗╚██████╗   ██║   ╚██████╔╝██║  ██║
╚═════╝ ╚══════╝   ╚═╝   ╚══════╝ ╚═════╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝`;

export function MainMenuScreen() {
  const startGame = useGameStore((s) => s.startGame);
  const [showMenu, setShowMenu] = useState(false);
  const [bootLines, setBootLines] = useState<string[]>([]);

  const boot = [
    "INITIALIZING HVO-TERMINAL v2.1...",
    "LOADING CLASSIFICATION PROTOCOLS...",
    "CONNECTING TO BUREAU DATABASE...",
    "BIOMETRIC SCANNER ONLINE.",
    "PSYCHOLOGICAL ASSESSMENT MODULE: READY.",
    "MEMORY ANALYSIS ENGINE: LOADED.",
    "WARNING: ALL SESSIONS ARE RECORDED.",
    "READY.",
  ];

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < boot.length) {
        setBootLines((prev) => [...prev, boot[i]]);
        i++;
      } else {
        clearInterval(timer);
        setTimeout(() => setShowMenu(true), 400);
      }
    }, 250);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        padding: "30px",
        gap: "24px",
        overflowY: "auto",
      }}
    >
      {/* ASCII Title */}
      <pre
        style={{
          color: "var(--green)",
          textShadow: "var(--glow-strong)",
          fontSize: "clamp(8px, 1.5vw, 17px)",
          lineHeight: "1.2",
          textAlign: "center",
          letterSpacing: "0.05em",
          userSelect: "none",
        }}
      >
        {ASCII_TITLE}
      </pre>

      {/* Subtitle */}
      <div
        style={{
          textAlign: "center",
          borderTop: "1px solid var(--border-dim)",
          borderBottom: "1px solid var(--border-dim)",
          padding: "12px 60px",
        }}
      >
        <div
          style={{
            color: "var(--amber)",
            textShadow: "var(--glow-amber)",
            fontSize: "18px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
          }}
        >
          HUMAN VERIFICATION OFFICE — TERMINAL v2.1
        </div>
        <div style={{ color: "var(--text-dark)", fontSize: "17px", marginTop: "4px" }}>
          BUREAU OF SYNTHETIC IDENTIFICATION // CLEARANCE LEVEL: EXAMINER
        </div>
      </div>

      {/* Boot sequence */}
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          border: "1px solid var(--border-dim)",
          background: "var(--bg-panel)",
          padding: "12px 16px",
          minHeight: "140px",
        }}
      >
        <div className="panel-title">SYSTEM BOOT LOG</div>
        {bootLines.map((line, i) => (
          <div
            key={i}
            className="fade-in"
            style={{
              color: i === bootLines.length - 1 ? "var(--green)" : "var(--text-dark)",
              fontSize: "18px",
              marginBottom: "2px",
            }}
          >
            &gt; {line}
          </div>
        ))}
        {!showMenu && <span className="cursor" />}
      </div>

      {/* Menu */}
      {showMenu && (
        <div
          className="fade-in"
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              color: "var(--text-dark)",
              fontSize: "17px",
              maxWidth: "500px",
              lineHeight: "1.8",
              textAlign: "center",
            }}
          >
            Three days. Fifteen subjects. The city's survival depends on accurate classification.<br />
            Your record will determine your future at the Bureau.<br />
            <span style={{ color: "var(--red)", textShadow: "var(--glow-red)" }}>
              Errors will not be tolerated.
            </span>
          </div>

          <button className="btn" onClick={startGame} style={{ padding: "18px 60px", fontSize: "21px" }}>
            <span>[ INITIALIZE SESSION ]</span>
          </button>

          <div style={{ color: "var(--text-dark)", fontSize: "15px", letterSpacing: "0.15em" }}>
            PRESS BUTTON TO BEGIN YOUR SHIFT
          </div>
        </div>
      )}
    </div>
  );
}
