import React, { useState, useEffect, useRef } from "react";
import { useGameStore } from "../store/gameStore";
import { rulesets } from "../data/rulesets";
import { questions } from "../data/questions";
import { AsciiPortrait } from "../components/AsciiPortrait";
import { MetricBar } from "../components/MetricBar";
import { TypingText } from "../components/TypingText";
import { ReactionResult } from "../types";

const QUESTION_PAGE_SIZE = 5;

export function InspectionScreen() {
  const {
    currentCase,
    subjectsToday,
    currentSubjectIndex,
    activeRulesetId,
    currentDay,
    askQuestion,
    issueVerdict,
  } = useGameStore();

  const subject = subjectsToday[currentSubjectIndex];
  const ruleset = rulesets.find((r) => r.id === activeRulesetId)!;

  const [questionPage, setQuestionPage] = useState(0);
  const [analyzing, setAnalyzing] = useState(false);
  const [analyzeText, setAnalyzeText] = useState("");
  const [latestReaction, setLatestReaction] = useState<ReactionResult | null>(null);
  const transcriptRef = useRef<HTMLDivElement>(null);

  const minQuestions = currentDay === 1 ? 3 : currentDay === 2 ? 4 : 5;
  const askedCount = currentCase?.askedQuestionIds.length ?? 0;
  const canVerdict = askedCount >= minQuestions;

  // Available (unasked) questions for today's day
  const available = questions.filter(
    (q) => q.days.includes(currentDay) && !currentCase?.askedQuestionIds.includes(q.id)
  );

  const pageStart = questionPage * QUESTION_PAGE_SIZE;
  const pageEnd = pageStart + QUESTION_PAGE_SIZE;
  const pageQuestions = available.slice(pageStart, pageEnd);
  const totalPages = Math.ceil(available.length / QUESTION_PAGE_SIZE);

  // Auto-scroll transcript
  useEffect(() => {
    if (transcriptRef.current) {
      transcriptRef.current.scrollTop = transcriptRef.current.scrollHeight;
    }
  }, [currentCase?.transcript]);

  // Track latest reaction
  useEffect(() => {
    if (currentCase && currentCase.reactions.length > 0) {
      setLatestReaction(currentCase.reactions[currentCase.reactions.length - 1]);
    }
  }, [currentCase?.reactions.length]);

  const handleAskQuestion = (questionId: string) => {
    if (analyzing) return;
    setAnalyzing(true);
    setAnalyzeText("ANALYZING...");

    // Simulate analysis delay
    let dots = 0;
    const dotInterval = setInterval(() => {
      dots = (dots + 1) % 4;
      setAnalyzeText("ANALYZING" + ".".repeat(dots));
    }, 300);

    setTimeout(() => {
      clearInterval(dotInterval);
      askQuestion(questionId);
      setAnalyzing(false);
      setAnalyzeText("");
    }, 1400);
  };

  if (!subject || !currentCase) {
    return <div>Loading subject...</div>;
  }

  const humanScore = currentCase.evidenceForHuman.reduce((a, e) => a + e.weight, 0);
  const nonHumanScore = currentCase.evidenceForNonHuman.reduce((a, e) => a + e.weight, 0);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        overflow: "hidden",
      }}
    >
      {/* Top bar: subject counter */}
      <div
        style={{
          padding: "6px 18px",
          borderBottom: "1px solid var(--border-dim)",
          background: "var(--bg-panel)",
          display: "flex",
          justifyContent: "space-between",
          fontSize: "17px",
          color: "var(--text-dark)",
          flexShrink: 0,
        }}
      >
        <span>
          SUBJECT {currentSubjectIndex + 1} OF {subjectsToday.length} // CASE ID:{" "}
          <span style={{ color: "var(--green)" }}>{subject.id.toUpperCase()}</span>
        </span>
        <span>QUESTIONS ASKED: <span style={{ color: "var(--green)" }}>{askedCount}</span> / MIN {minQuestions}</span>
        <span style={{ color: analyzing ? "var(--amber)" : "var(--text-dark)" }}>
          {analyzing ? analyzeText : "AWAITING INPUT"}
        </span>
      </div>

      {/* Three-panel layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "320px 1fr 320px",
          flex: 1,
          overflow: "hidden",
          gap: 0,
        }}
      >
        {/* LEFT PANEL: Subject Dossier */}
        <div
          style={{
            borderRight: "1px solid var(--border-dim)",
            padding: "12px",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <div>
            <div className="panel-title">SUBJECT DOSSIER</div>
            <div style={{ color: "var(--green)", textShadow: "var(--glow)", fontSize: "23px", fontWeight: "bold" }}>
              {subject.displayName}
            </div>
            <div style={{ color: "var(--text-dark)", fontSize: "17px" }}>
              AGE: {subject.age} // {subject.occupation.toUpperCase()}
            </div>
          </div>

          <AsciiPortrait portraitType={subject.portraitType} />

          <div>
            <div className="panel-title">BIOGRAPHICAL NOTE</div>
            <p style={{ fontSize: "17px", lineHeight: "1.6", color: "var(--text-dark)" }}>
              {subject.biography}
            </p>
          </div>

          <div>
            <div className="panel-title">ACTIVE CRITERIA</div>
            {ruleset.rules.slice(0, 3).map((rule, i) => (
              <div
                key={i}
                style={{ fontSize: "15px", color: "var(--text-dark)", marginBottom: "4px", lineHeight: "1.4" }}
              >
                <span style={{ color: "var(--amber)" }}>›</span> {rule}
              </div>
            ))}
            {ruleset.rules.length > 3 && (
              <div style={{ fontSize: "15px", color: "var(--text-dark)" }}>
                ... +{ruleset.rules.length - 3} more
              </div>
            )}
          </div>
        </div>

        {/* CENTER PANEL: Dialogue */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <div
            ref={transcriptRef}
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "12px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {currentCase.transcript.length === 0 && (
              <div
                style={{
                  color: "var(--text-dark)",
                  fontSize: "18px",
                  fontStyle: "italic",
                  textAlign: "center",
                  marginTop: "40px",
                }}
              >
                [Subject is seated. The examination begins.]
                <br /><br />
                <span style={{ color: "var(--text-dark)" }}>Select a question below to begin.</span>
              </div>
            )}

            {(() => {
              const lastSubjectIdx = currentCase.transcript.reduce(
                (acc, e, i) => (e.speaker === "SUBJECT" ? i : acc),
                -1
              );
              return currentCase.transcript.map((entry, i) => (
                <div
                  key={i}
                  className="fade-in"
                  style={{ display: "flex", flexDirection: "column", gap: "2px" }}
                >
                  <div
                    style={{
                      fontSize: "15px",
                      letterSpacing: "0.15em",
                      color:
                        entry.speaker === "EXAMINER"
                          ? "var(--amber)"
                          : "var(--text-dark)",
                    }}
                  >
                    {entry.speaker === "EXAMINER" ? "▶ EXAMINER" : "◀ SUBJECT"}
                  </div>
                  <div
                    style={{
                      fontSize: "20px",
                      color:
                        entry.speaker === "EXAMINER"
                          ? "var(--amber)"
                          : "var(--text-dim)",
                      paddingLeft: "12px",
                      lineHeight: "1.6",
                      borderLeft: `2px solid ${entry.speaker === "EXAMINER" ? "var(--amber)" : "var(--border-dim)"}`,
                      textShadow:
                        entry.speaker === "EXAMINER"
                          ? "var(--glow-amber)"
                          : "none",
                    }}
                  >
                    {entry.speaker === "SUBJECT" && i === lastSubjectIdx ? (
                      <TypingText text={entry.text} speed={22} />
                    ) : (
                      entry.text
                    )}
                  </div>
                </div>
              ));
            })()}

            {analyzing && (
              <div
                className="fade-in"
                style={{
                  color: "var(--amber)",
                  textShadow: "var(--glow-amber)",
                  fontSize: "18px",
                  fontStyle: "italic",
                }}
              >
                <span className="cursor" /> {analyzeText}
              </div>
            )}
          </div>

          {/* Question selection */}
          <div
            style={{
              borderTop: "1px solid var(--border-dim)",
              padding: "15px 18px",
              background: "var(--bg-panel)",
              flexShrink: 0,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", alignItems: "center" }}>
              <div className="panel-title" style={{ margin: 0 }}>SELECT QUESTION</div>
              <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                <button
                  className="btn"
                  onClick={() => setQuestionPage((p) => Math.max(0, p - 1))}
                  disabled={questionPage === 0}
                  style={{ padding: "5px 15px", fontSize: "17px" }}
                >
                  <span>◄</span>
                </button>
                <span style={{ fontSize: "15px", color: "var(--text-dark)" }}>
                  {questionPage + 1}/{totalPages}
                </span>
                <button
                  className="btn"
                  onClick={() => setQuestionPage((p) => Math.min(totalPages - 1, p + 1))}
                  disabled={questionPage >= totalPages - 1}
                  style={{ padding: "5px 15px", fontSize: "17px" }}
                >
                  <span>►</span>
                </button>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "5px", marginBottom: "10px" }}>
              {pageQuestions.map((q) => (
                <button
                  key={q.id}
                  className="btn"
                  onClick={() => handleAskQuestion(q.id)}
                  disabled={analyzing}
                  style={{
                    textAlign: "left",
                    fontSize: "17px",
                    padding: "8px 15px",
                    letterSpacing: "0.03em",
                    textTransform: "none",
                  }}
                >
                  <span>
                    <span style={{ color: "var(--text-dark)", fontSize: "15px" }}>
                      [{q.category.toUpperCase()}]
                    </span>{" "}
                    {q.text}
                  </span>
                </button>
              ))}
              {pageQuestions.length === 0 && (
                <div style={{ color: "var(--text-dark)", fontSize: "17px", fontStyle: "italic" }}>
                  All questions have been asked.
                </div>
              )}
            </div>

            {/* Verdict buttons */}
            {canVerdict && (
              <div className="fade-in" style={{ display: "flex", gap: "10px", borderTop: "1px solid var(--border-dim)", paddingTop: "10px" }}>
                <button
                  className="btn"
                  onClick={() => issueVerdict("human")}
                  disabled={analyzing}
                  style={{ flex: 1, padding: "12px" }}
                >
                  <span>[ CLASSIFY: HUMAN ]</span>
                </button>
                <button
                  className="btn btn-red"
                  onClick={() => issueVerdict("nonhuman")}
                  disabled={analyzing}
                  style={{ flex: 1, padding: "12px" }}
                >
                  <span>[ CLASSIFY: NON-HUMAN ]</span>
                </button>
              </div>
            )}
            {!canVerdict && (
              <div style={{ color: "var(--text-dark)", fontSize: "15px", fontStyle: "italic" }}>
                Ask at least {minQuestions - askedCount} more question{minQuestions - askedCount !== 1 ? "s" : ""} before issuing verdict.
              </div>
            )}
          </div>
        </div>

        {/* RIGHT PANEL: Metrics & Evidence */}
        <div
          style={{
            borderLeft: "1px solid var(--border-dim)",
            padding: "12px",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {/* Metrics */}
          <div>
            <div className="panel-title">REACTION METRICS</div>
            {latestReaction ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <MetricBar label="LATENCY" value={latestReaction.responseLatency} />
                <MetricBar label="EMOT.VAR" value={latestReaction.emotionalVariance} />
                <MetricBar label="MEM.COH" value={latestReaction.memoryCoherence} />
                <MetricBar label="EMP.DEV" value={latestReaction.empathyDeviation} />
              </div>
            ) : (
              <div style={{ color: "var(--text-dark)", fontSize: "17px", fontStyle: "italic" }}>
                No data yet. Ask a question.
              </div>
            )}
          </div>

          {/* Aggregate scores */}
          {latestReaction && (
            <div className="fade-in">
              <div className="panel-title">CUMULATIVE ANALYSIS</div>
              <div style={{ display: "flex", gap: "8px" }}>
                <div
                  style={{
                    flex: 1,
                    border: "1px solid var(--green-dark)",
                    padding: "9px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "15px", color: "var(--text-dark)" }}>HUM.IND</div>
                  <div style={{ fontSize: "27px", color: "var(--green)", textShadow: "var(--glow)" }}>
                    {humanScore}
                  </div>
                </div>
                <div
                  style={{
                    flex: 1,
                    border: "1px solid var(--red-dim)",
                    padding: "9px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "15px", color: "var(--text-dark)" }}>SYN.IND</div>
                  <div style={{ fontSize: "27px", color: "var(--red)", textShadow: "var(--glow-red)" }}>
                    {nonHumanScore}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Evidence for human */}
          <div>
            <div className="panel-title" style={{ color: "var(--green-dim)" }}>
              SUPPORTS HUMANITY [{currentCase.evidenceForHuman.length}]
            </div>
            {currentCase.evidenceForHuman.length === 0 ? (
              <div style={{ color: "var(--text-dark)", fontSize: "15px", fontStyle: "italic" }}>
                No evidence yet.
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                {currentCase.evidenceForHuman.map((e) => (
                  <div
                    key={e.id}
                    className="fade-in"
                    style={{
                      fontSize: "15px",
                      color: "var(--green-dim)",
                      display: "flex",
                      gap: "4px",
                      alignItems: "flex-start",
                    }}
                  >
                    <span style={{ color: "var(--green)" }}>+{e.weight}</span>
                    <span>{e.text}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Evidence for non-human */}
          <div>
            <div className="panel-title" style={{ color: "var(--red-dim)" }}>
              SUPPORTS NON-HUMAN [{currentCase.evidenceForNonHuman.length}]
            </div>
            {currentCase.evidenceForNonHuman.length === 0 ? (
              <div style={{ color: "var(--text-dark)", fontSize: "15px", fontStyle: "italic" }}>
                No evidence yet.
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                {currentCase.evidenceForNonHuman.map((e) => (
                  <div
                    key={e.id}
                    className="fade-in"
                    style={{
                      fontSize: "15px",
                      color: "var(--red)",
                      display: "flex",
                      gap: "4px",
                      alignItems: "flex-start",
                    }}
                  >
                    <span style={{ color: "var(--red)" }}>!{e.weight}</span>
                    <span>{e.text}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Average metrics across all reactions */}
          {currentCase.reactions.length > 1 && (
            <div>
              <div className="panel-title">AVERAGE METRICS</div>
              {(() => {
                const avg = (key: keyof ReactionResult) =>
                  Math.round(
                    currentCase.reactions.reduce((a, r) => a + (r[key] as number), 0) /
                      currentCase.reactions.length
                  );
                return (
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                    <MetricBar label="AVG.LAT" value={avg("responseLatency")} />
                    <MetricBar label="AVG.EMO" value={avg("emotionalVariance")} />
                    <MetricBar label="AVG.MEM" value={avg("memoryCoherence")} />
                    <MetricBar label="AVG.EMP" value={avg("empathyDeviation")} />
                  </div>
                );
              })()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
