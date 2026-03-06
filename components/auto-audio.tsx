"use client";

import { useEffect, useRef } from "react";

interface AudioProps {
  src: string;
}

export default function AutoAudio({ src }: AudioProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const handleUserInteraction = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(() => {});
      }

      document.removeEventListener("click", handleUserInteraction);
    };

    document.addEventListener("click", handleUserInteraction);

    return () => {
      document.removeEventListener("click", handleUserInteraction);
    };
  }, []);

  return <audio ref={audioRef} src={src} loop hidden />;
}
