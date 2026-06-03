'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface AnimatedDividerProps {
  delay?: number;
}

/**
 * AnimatedDivider Component
 *
 * Elegant animated horizontal divider that expands from center
 * when scrolled into view. Tema: dusty rose & mauve.
 */
export default function AnimatedDivider({ delay = 0 }: AnimatedDividerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-50px"
  });

  return (
    <div ref={ref} className="flex items-center justify-center py-2">
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
        transition={{
          duration: 1,
          delay: delay,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative flex items-center justify-center w-full max-w-[360px] origin-center"
      >
        {/* Line kiri */}
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[rgba(180,140,120,0.5)] to-[rgba(180,140,120,0.5)]" />

        {/* Center ornament */}
        <span
          className="mx-3 text-[10px]"
          style={{ color: "rgba(160, 120, 100, 0.6)" }}
        >
          ✦
        </span>

        {/* Line kanan */}
        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[rgba(180,140,120,0.5)] to-[rgba(180,140,120,0.5)]" />
      </motion.div>
    </div>
  );
}