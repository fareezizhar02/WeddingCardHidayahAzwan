"use client";

import { motion } from "framer-motion";
import FlowerFrame from "./FlowerFrame";
import WatercolorBackground from "./Background";

/**
 * CoverPage — Hidayah & Azwan
 *
 * Layer susunan:
 * z-0  → CSS gradient background (no image)
 * z-10 → Gold border frame (hardcode)
 * z-20 → FlowerFrame (bunga goyang)
 * z-30 → Text content
 */
export default function CoverPage() {
  return (
    <div className="relative w-full h-full overflow-hidden">

      {/* ── Layer 0: Background dengan watercolor texture ── */}
      <WatercolorBackground idPrefix="cover"/>

      {/* ── Layer 1: Gold Border Frame ── */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Outer frame */}
        <div
          className="absolute"
          style={{
            top: "14px",
            left: "14px",
            right: "14px",
            bottom: "14px",
            border: "1px solid rgba(180, 145, 90, 0.55)",
          }}
        />
        {/* Inner frame */}
        <div
          className="absolute"
          style={{
            top: "20px",
            left: "20px",
            right: "20px",
            bottom: "20px",
            border: "0.5px solid rgba(180, 145, 90, 0.3)",
          }}
        />

        {/* Corner ornament — atas kiri */}
        <CornerOrnament position="top-left" />
        {/* Corner ornament — atas kanan */}
        <CornerOrnament position="top-right" />
        {/* Corner ornament — bawah kiri */}
        <CornerOrnament position="bottom-left" />
        {/* Corner ornament — bawah kanan */}
        <CornerOrnament position="bottom-right" />
      </div>

      {/* ── Layer 2: Flower Frame (goyang) ── */}
      <FlowerFrame />

      {/* ── Layer 3: Text Content ── */}
      <div className="relative z-30 h-full w-full flex items-center justify-center px-6">
        <div className="flex flex-col items-center text-center w-full max-w-[380px]">

          {/* Majlis Kesyukuran */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-montserrat uppercase tracking-[0.3em] text-amber-800 text-[13px] font-semibold"
            style={{ marginBottom: "clamp(12px, 3vw, 20px)" }}
          >
            MAJLIS KESYUKURAN
          </motion.p>

          {/* Divider line + heart */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex items-center gap-3 w-full justify-center"
            style={{ marginBottom: "clamp(20px, 5vw, 36px)" }}
          >
            <div className="h-px flex-1 max-w-[110px]" style={{ background: "rgba(160, 120, 80, 0.4)" }} />
            <span style={{ color: "rgba(160, 120, 80, 0.7)", fontSize: "16px" }}>♥</span>
            <div className="h-px flex-1 max-w-[110px]" style={{ background: "rgba(160, 120, 80, 0.4)" }} />
          </motion.div>

          {/* Nama: Hidayah */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1.2, ease: "easeInOut" }}
            className="font-greatvibes text-amber-900 leading-[0.9]"
            style={{ fontSize: "clamp(62px, 16vw, 88px)", marginBottom: "clamp(4px, 1.5vw, 10px)" }}
          >
            Hidayah
          </motion.h1>

          {/* & */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-montserrat font-medium tracking-widest text-amber-800"
            style={{
              fontSize: "clamp(20px, 5vw, 26px)",
              marginTop: "clamp(4px, 1.2vw, 8px)",
              marginBottom: "clamp(4px, 1.2vw, 8px)",
            }}
          >
            &
          </motion.p>

          {/* Nama: Azwan */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.0, duration: 1.2, ease: "easeInOut" }}
            className="font-greatvibes text-amber-900 leading-[0.9]"
            style={{ fontSize: "clamp(62px, 16vw, 88px)", marginBottom: "clamp(20px, 5vw, 32px)" }}
          >
            Azwan
          </motion.h1>

          {/* JUMAAT */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.8, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 w-full justify-center"
            style={{ marginBottom: "clamp(6px, 1.5vw, 10px)" }}
          >
            <div className="h-px w-20" style={{ background: "rgba(160, 120, 80, 0.4)" }} />
            <p className="font-montserrat uppercase tracking-[0.25em] text-[13px] font-medium"
              style={{ color: "rgba(139, 90, 60, 0.85)" }}>
              Jumaat
            </p>
            <div className="h-px w-20" style={{ background: "rgba(160, 120, 80, 0.4)" }} />
          </motion.div>

          {/* Tarikh */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.0, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-montserrat font-bold tracking-[0.15em] text-amber-900 uppercase"
            style={{
              fontSize: "clamp(18px, 5vw, 24px)",
              marginBottom: "clamp(16px, 4vw, 28px)",
            }}
          >
            28 Ogos 2026
          </motion.p>

          {/* Divider bawah tarikh */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.2, duration: 0.5 }}
            className="flex items-center gap-2 justify-center"
            style={{ marginBottom: "clamp(14px, 3.5vw, 22px)" }}
          >
            <div className="h-px w-24" style={{ background: "rgba(160, 120, 80, 0.3)" }} />
            <span style={{ fontSize: "13px", color: "rgba(160, 120, 80, 0.5)" }}>❧</span>
            <span style={{ fontSize: "16px", color: "rgba(160, 120, 80, 0.6)" }}>♥</span>
            <span style={{ fontSize: "13px", color: "rgba(160, 120, 80, 0.5)" }}>❧</span>
            <div className="h-px w-24" style={{ background: "rgba(160, 120, 80, 0.3)" }} />
          </motion.div>

          {/* Ayat Quran */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-1"
          >
            <p
              className="font-montserrat italic leading-relaxed"
              style={{ fontSize: "clamp(11px, 3vw, 13px)", color: "rgba(120, 80, 55, 0.8)" }}
            >
              "Dan Kami menciptakan kamu berpasang - pasangan"
            </p>
            <p
              className="font-montserrat"
              style={{ fontSize: "clamp(10px, 2.5vw, 12px)", color: "rgba(120, 80, 55, 0.6)" }}
            >
              (An Naba' : Ayat 8)
            </p>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

/* ── Corner Ornament Component ── */
type CornerPosition = "top-left" | "top-right" | "bottom-left" | "bottom-right";

function CornerOrnament({ position }: { position: CornerPosition }) {
  const size = 28;
  const offset = 10;

  const posStyle: React.CSSProperties = {
    position: "absolute",
    width: size,
    height: size,
    ...(position === "top-left"     && { top: offset,    left: offset    }),
    ...(position === "top-right"    && { top: offset,    right: offset   }),
    ...(position === "bottom-left"  && { bottom: offset, left: offset    }),
    ...(position === "bottom-right" && { bottom: offset, right: offset   }),
  };

  // Rotate sudut ikut position
  const rotate =
    position === "top-left"     ? 0   :
    position === "top-right"    ? 90  :
    position === "bottom-right" ? 180 :
    270;

  return (
    <div style={posStyle}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: `rotate(${rotate}deg)` }}
      >
        {/* L-shape gold corner */}
        <path
          d="M2 26 L2 2 L26 2"
          stroke="rgba(180, 145, 90, 0.75)"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Inner decorative dot */}
        <circle cx="5" cy="5" r="1.2" fill="rgba(180, 145, 90, 0.6)" />
      </svg>
    </div>
  );
}