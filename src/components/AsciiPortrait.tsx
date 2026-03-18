import React from "react";

const portraits: Record<string, string> = {
  "female-a": `
  .---.
 /     \\
| o   o |
|   ^   |
|  ___  |
 \\_____/
 /|   |\\
/ |   | \\`,

  "male-a": `
  .---.
 /     \\
| -   - |
|   .   |
|  ---  |
 \\_____/
/=|   |=\\`,

  "female-b": `
  ~.~.~
 /     \\
| ^   ^ |
|  ~~~  |
| (___) |
 \\_____/
  |   |`,

  "male-b": `
  .~~~.
 /     \\
| =   = |
|   _   |
| (___) |
 \\_____/
  |   |`,

  "female-c": `
 ,-----,
( o   o )
|  ~~~  |
|  ___  |
 \\     /
  '---'
  |   |`,

  "female-d": `
  _____
 /     \\
( -   - )
 \\  ^  /
  \\___/
  |   |
  |   |`,

  "male-c": `
 /~~~~~\\
| #   # |
|  ~~~  |
|       |
 \\=====/
  |   |`,

  "male-d": `
  .===.
 /     \\
| x   x |
|  ---  |
| [___] |
 \\_____/
 //   \\\\`,

  "female-e": `
  _____
 (     )
 | . . |
 |  w  |
 | ___ |
  \\___/
  /   \\`,

  "male-e": `
  .---.
 (  ^  )
 | o o |
 | ~~~ |
 | ___ |
  \\___/
 /|   |\\`,

  "male-f": `
  =====
 /     \\
| 0   0 |
|  ---  |
| [___] |
 \\=====/
  | ^ |`,

  "female-f": `
 ,~~~~~,
| *   * |
|  ~~~  |
|  ___  |
 \\_____/
  (   )
  |   |`,

  "male-g": `
  .....
 / o o \\
|  ~~~  |
| [___] |
|       |
 \\_____/
   | |`,

  "female-g": `
  =====
 /     \\
| #   # |
|  ---  |
|  ___  |
 \\=====/
  |   |`,

  "female-h": `
 ~*~*~*~
/ *   * \\
| ~ ~ ~ |
|  ___  |
 \\_____/
  *   *
  |   |`,
};

interface Props {
  portraitType: string;
  style?: React.CSSProperties;
}

export function AsciiPortrait({ portraitType, style }: Props) {
  const art = portraits[portraitType] ?? portraits["male-a"];
  return (
    <pre
      style={{
        color: "var(--green-dim)",
        fontSize: "18px",
        lineHeight: "1.3",
        textShadow: "0 0 4px var(--green-dim)",
        userSelect: "none",
        ...style,
      }}
    >
      {art}
    </pre>
  );
}
