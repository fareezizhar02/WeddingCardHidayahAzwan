"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/**
 * FlowerFrame Component
 *
 * Dua bunga frame yang dipisahkan supaya boleh animate (goyang) secara bebas.
 * - flower-top-right.png → penjuru atas kanan
 * - flower-bottom-left.png → penjuru bawah kiri
 *
 * Letak dalam public/images/
 */
export default function FlowerFrame() {
  // Animasi goyang — sway gentle infinite loop
  const swayTopRight = {
    animate: {
      rotate: [-1.5, 1.5, -1.5],
      y: [0, -4, 0],
    },
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const swayBottomLeft = {
    animate: {
      rotate: [1.5, -1.5, 1.5],
      y: [0, 4, 0],
    },
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <>
      {/* Bunga atas kanan */}
      <motion.div
        animate={swayTopRight.animate}
        transition={swayTopRight.transition}
        className="pointer-events-none absolute top-0 right-0 z-20"
        style={{
          width: "clamp(260px, 72vw, 420px)",
          transformOrigin: "top right",
        }}
      >
        <Image
          src="/images/flower-top-right.png"
          alt=""
          width={280}
          height={280}
          className="w-full h-auto"
          priority
          quality={100}
        />
      </motion.div>

      {/* Bunga bawah kiri */}
      <motion.div
        animate={swayBottomLeft.animate}
        transition={swayBottomLeft.transition}
        className="pointer-events-none absolute bottom-0 left-0 z-20"
        style={{
          width: "clamp(260px, 72vw, 420px)",
          transformOrigin: "bottom left",
        }}
      >
        <Image
          src="/images/flower-bottom-left.png"
          alt=""
          width={280}
          height={280}
          className="w-full h-auto"
          priority
          quality={100}
        />
      </motion.div>
    </>
  );
}