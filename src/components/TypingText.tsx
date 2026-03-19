import React, { useState, useEffect, useRef } from "react";

interface Props {
  text: string;
  speed?: number; // ms per character
  onDone?: () => void;
  style?: React.CSSProperties;
  className?: string;
}

export function TypingText({ text, speed = 18, onDone, style, className }: Props) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const indexRef = useRef(0);
  const textRef = useRef(text);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/sounds/digital_typing.mp3");
    audio.loop = true;
    audio.volume = 0.35;
    audioRef.current = audio;
    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    indexRef.current = 0;
    textRef.current = text;
    setDisplayed("");
    setDone(false);

    const interval = setInterval(() => {
      if (indexRef.current < textRef.current.length) {
        setDisplayed(textRef.current.slice(0, indexRef.current + 1));
        indexRef.current++;
        // Start looping sound on first character
        if (indexRef.current === 1 && audioRef.current) {
          audioRef.current.currentTime = 0;
          audioRef.current.play().catch(() => {});
        }
      } else {
        clearInterval(interval);
        setDone(true);
        onDone?.();
        // Stop sound when typing finishes
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        }
      }
    }, speed);

    return () => {
      clearInterval(interval);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, [text]);

  return (
    <span style={style} className={className}>
      {displayed}
      {!done && <span className="cursor" />}
    </span>
  );
}
