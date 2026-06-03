"use client";

import { useEffect, useRef } from "react";

/**
 * usePageVisibilityAudio
 *
 * Pause audio bila user switch app / minimize Safari.
 * Resume semula bila user balik ke page — tapi HANYA kalau
 * audio memang tengah playing sebelum dia keluar.
 *
 * Usage:
 *   usePageVisibilityAudio(audioRef, isPlaying, setIsPlaying);
 */
export function usePageVisibilityAudio(
  audioRef: React.RefObject<HTMLAudioElement>,
  isPlaying: boolean,
  setIsPlaying: (v: boolean) => void
) {
  // Track sama ada audio was playing sebelum page hidden
  const wasPlayingRef = useRef(false);

  useEffect(() => {
    const handleVisibilityChange = () => {
      const audio = audioRef.current;
      if (!audio) return;

      if (document.hidden) {
        // Page hidden (switch app, minimize, lock screen)
        wasPlayingRef.current = isPlaying;
        if (isPlaying) {
          audio.pause();
          setIsPlaying(false);
        }
      } else {
        // Page visible semula
        if (wasPlayingRef.current) {
          audio.play().catch(() => {
            // Autoplay blocked — biarkan je, user boleh tap manual
          });
          setIsPlaying(true);
          wasPlayingRef.current = false;
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [audioRef, isPlaying, setIsPlaying]);
}