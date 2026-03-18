import { useEffect, useRef } from "react";

const tracks = ["/music/andr1.mp3", "/music/andr2.mp3", "/music/andr3.mp3"];

export function useMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const track = tracks[Math.floor(Math.random() * tracks.length)];
    const audio = new Audio(track);
    audio.loop = true;
    audio.volume = 0.4;
    audioRef.current = audio;

    audio.play().catch(() => {
      // Autoplay blocked — play on first user interaction
      const resume = () => {
        audio.play();
        window.removeEventListener("pointerdown", resume);
      };
      window.addEventListener("pointerdown", resume);
    });

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);
}
