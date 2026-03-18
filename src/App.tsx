import React from "react";
import "./styles/terminal.css";
import { useGameStore } from "./store/gameStore";
import { useMusic } from "./hooks/useMusic";
import { useClickSound } from "./hooks/useClickSound";
import { StatusBar } from "./components/StatusBar";
import { MainMenuScreen } from "./screens/MainMenuScreen";
import { BriefingScreen } from "./screens/BriefingScreen";
import { InspectionScreen } from "./screens/InspectionScreen";
import { SubjectResultScreen } from "./screens/SubjectResultScreen";
import { EndOfDaySummaryScreen } from "./screens/EndOfDaySummaryScreen";
import { ApartmentScreen } from "./screens/ApartmentScreen";
import { GameOverScreen } from "./screens/GameOverScreen";

function App() {
  const phase = useGameStore((s) => s.phase);
  useMusic();
  useClickSound();

  const renderScreen = () => {
    switch (phase) {
      case "menu":
        return <MainMenuScreen />;
      case "briefing":
        return <BriefingScreen />;
      case "inspection":
        return <InspectionScreen />;
      case "subjectResult":
        return <SubjectResultScreen />;
      case "endOfDay":
        return <EndOfDaySummaryScreen />;
      case "apartment":
        return <ApartmentScreen />;
      case "gameOver":
        return <GameOverScreen />;
      default:
        return <MainMenuScreen />;
    }
  };

  return (
    <>
      <StatusBar />
      <div style={{ flex: 1, overflow: "hidden", display: "flex", flexDirection: "column" }}>
        {renderScreen()}
      </div>
    </>
  );
}

export default App;
