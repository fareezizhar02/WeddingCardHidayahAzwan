"use client";

import { useEffect, useState } from "react";

/**
 * WatercolorBackground Component
 *
 * Reusable watercolor/marble texture background.
 * idPrefix — wajib pass kalau lebih dari satu instance dalam DOM
 * supaya SVG filter id tidak clash.
 *
 * PERFORMANCE:
 * - Mobile: pure CSS radial-gradient (zero SVG filter cost)
 * - Desktop: simplified SVG filter (numOctaves dikurang, filter dikurang)
 *
 * Usage:
 * <WatercolorBackground idPrefix="cover" />
 * <WatercolorBackground idPrefix="content" />
 */

type Props = {
  idPrefix?: string;
};

export default function WatercolorBackground({ idPrefix = "wc" }: Props) {
  const [isMobile, setIsMobile] = useState(true); // default true — SSR safe

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);

    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // ── MOBILE: Pure CSS — zero GPU filter cost ──────────────────────────────
  if (isMobile) {
    return (
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "#fdf6f0",
          background: `
            radial-gradient(ellipse 70% 45% at 85% 10%, rgba(230, 205, 190, 0.45) 0%, transparent 65%),
            radial-gradient(ellipse 60% 40% at 12% 88%, rgba(225, 200, 182, 0.40) 0%, transparent 65%),
            radial-gradient(ellipse 80% 55% at 50% 50%, rgba(255, 255, 255, 0.18) 0%, transparent 75%),
            radial-gradient(ellipse 50% 35% at 30% 25%, rgba(235, 215, 200, 0.30) 0%, transparent 60%),
            #fdf6f0
          `,
        }}
      />
    );
  }

  // ── DESKTOP: Simplified SVG filter — 1 filter, 3 ellipses (dari 3 filter, 5 ellipses) ──
  const filterId = `${idPrefix}-cloud`;

  return (
    <div className="absolute inset-0" style={{ backgroundColor: "#fdf6f0" }}>
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* 1 filter sahaja — numOctaves 2 (dari 5/4/3), stdDeviation 18 (dari 22/26/20) */}
          <filter id={filterId} x="-25%" y="-25%" width="150%" height="150%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.018 0.022"
              numOctaves="2"
              seed="8"
              result="turb"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="turb"
              scale="20"
              xChannelSelector="R"
              yChannelSelector="G"
            />
            <feGaussianBlur stdDeviation="18" />
          </filter>
        </defs>

        {/* 3 ellipses sahaja (dari 5) */}
        <ellipse
          cx="38%" cy="18%" rx="52%" ry="38%"
          fill="rgba(220, 200, 185, 0.28)"
          filter={`url(#${filterId})`}
        />
        <ellipse
          cx="72%" cy="68%" rx="45%" ry="32%"
          fill="rgba(215, 195, 178, 0.22)"
          filter={`url(#${filterId})`}
        />
        <ellipse
          cx="22%" cy="58%" rx="38%" ry="32%"
          fill="rgba(225, 208, 192, 0.20)"
          filter={`url(#${filterId})`}
        />
      </svg>

      {/* Soft blush overlay — sama macam sebelum */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 65% 40% at 88% 8%, rgba(240, 210, 195, 0.35) 0%, transparent 70%),
            radial-gradient(ellipse 55% 35% at 10% 92%, rgba(238, 208, 190, 0.30) 0%, transparent 70%),
            radial-gradient(ellipse 80% 60% at 50% 50%, rgba(255, 255, 255, 0.15) 0%, transparent 80%)
          `,
        }}
      />
    </div>
  );
}