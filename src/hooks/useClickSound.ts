import { useEffect, useRef } from "react";

export function useClickSound() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/sounds/click.mp3");
    audio.preload = "auto";
    audioRef.current = audio;

    const handleClick = (e: PointerEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("button")) {
        const sfx = audioRef.current;
        if (sfx) {
          sfx.currentTime = 0;
          sfx.play().catch(() => {});
        }
      }
    };

    window.addEventListener("pointerdown", handleClick);
    return () => window.removeEventListener("pointerdown", handleClick);
  }, []);
}
