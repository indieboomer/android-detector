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

  useEffect(() => {
    indexRef.current = 0;
    textRef.current = text;
    setDisplayed("");
    setDone(false);

    const interval = setInterval(() => {
      if (indexRef.current < textRef.current.length) {
        setDisplayed(textRef.current.slice(0, indexRef.current + 1));
        indexRef.current++;
      } else {
        clearInterval(interval);
        setDone(true);
        onDone?.();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <span style={style} className={className}>
      {displayed}
      {!done && <span className="cursor" />}
    </span>
  );
}
