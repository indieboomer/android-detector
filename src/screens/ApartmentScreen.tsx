import React, { useState } from "react";
import { useGameStore } from "../store/gameStore";
import { apartmentEvents } from "../data/apartmentEvents";
import { TypingText } from "../components/TypingText";

export function ApartmentScreen() {
  const { currentDay, continueFromApartment } = useGameStore();
  const event = apartmentEvents.find((e) => e.day === currentDay);
  const [messageIndex, setMessageIndex] = useState(0);
  const [currentDone, setCurrentDone] = useState(false);

  if (!event) return null;

  const isLastMessage = messageIndex >= event.messages.length - 1;
  const currentMessage = event.messages[messageIndex];

  const handleNext = () => {
    if (!currentDone) return;
    if (isLastMessage) {
      continueFromApartment();
    } else {
      setMessageIndex((i) => i + 1);
      setCurrentDone(false);
    }
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
        background: "var(--bg)",
        position: "relative",
      }}
    >
      {/* Atmospheric top bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          padding: "12px 30px",
          borderBottom: "1px solid #002200",
          background: "#030803",
          display: "flex",
          justifyContent: "space-between",
          fontSize: "15px",
          color: "#004400",
          letterSpacing: "0.15em",
        }}
      >
        <span>RESIDENTIAL UNIT 4C // SECTOR 9</span>
        <span>DAY {currentDay} — POST-SHIFT</span>
        <span>[ PERSONAL TERMINAL ]</span>
      </div>

      <div style={{ maxWidth: "600px", width: "100%", marginTop: "20px" }}>
        {/* Location header */}
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <div
            style={{
              color: "#004400",
              fontSize: "17px",
              letterSpacing: "0.2em",
              marginBottom: "4px",
            }}
          >
            ◈ ◈ ◈
          </div>
          <h2 style={{ color: "#006600", textShadow: "0 0 8px #004400", fontSize: "21px", letterSpacing: "0.15em" }}>
            {event.title}
          </h2>
          <div style={{ color: "#003300", fontSize: "15px", marginTop: "4px" }}>
            {messageIndex + 1} / {event.messages.length}
          </div>
        </div>

        {/* Message display */}
        <div
          style={{
            border: "1px solid #002200",
            background: "#020802",
            padding: "30px",
            marginBottom: "20px",
            minHeight: "160px",
            position: "relative",
          }}
        >
          <div
            style={{
              fontSize: "15px",
              color: "#005500",
              letterSpacing: "0.15em",
              marginBottom: "12px",
              borderBottom: "1px solid #002200",
              paddingBottom: "6px",
            }}
          >
            FROM: {currentMessage.sender}
          </div>
          <p
            style={{
              fontSize: "20px",
              lineHeight: "1.8",
              color: "#00aa44",
              textShadow: "0 0 6px #004400",
              fontStyle: "italic",
            }}
          >
            <TypingText
              key={`${currentDay}-${messageIndex}`}
              text={currentMessage.text}
              speed={20}
              onDone={() => setCurrentDone(true)}
            />
          </p>
        </div>

        {/* Navigation */}
        <div style={{ textAlign: "center" }}>
          <button
            onClick={handleNext}
            disabled={!currentDone}
            style={{
              padding: "15px 48px",
              border: "1px solid #004400",
              background: "transparent",
              color: "#006600",
              fontFamily: "var(--font)",
              fontSize: "20px",
              letterSpacing: "0.1em",
              cursor: currentDone ? "pointer" : "not-allowed",
              opacity: currentDone ? 1 : 0.4,
              textTransform: "uppercase",
              transition: "all 0.15s ease",
            }}
            onMouseEnter={(e) => {
              if (currentDone) {
                e.currentTarget.style.background = "#004400";
                e.currentTarget.style.color = "#020802";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#006600";
            }}
          >
            {isLastMessage ? "[ CONTINUE ]" : "[ NEXT MESSAGE ]"}
          </button>
        </div>

        {/* Atmospheric footer */}
        {currentDay < 3 && (
          <div
            style={{
              marginTop: "30px",
              textAlign: "center",
              color: "#003300",
              fontSize: "15px",
              letterSpacing: "0.1em",
            }}
          >
            Tomorrow: {currentDay + 1} more subjects to evaluate.
          </div>
        )}
      </div>
    </div>
  );
}
