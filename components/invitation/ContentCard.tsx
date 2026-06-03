'use client'

import { motion } from 'framer-motion'
import MukadimahContent from './MukadimahContent'
import DetailsContent from './DetailsContent'
import AturCaraContent from './AturCaraContent'
import MenghitungHariContent from './MenghitungHariContent'
import DoaContent from './DoaContent'
import RSVPContent from './RSVPContent'
import ResponseContent from './ResponseContent'
import AnimatedSection from './AnimatedSection'
import AnimatedDivider from './AnimatedDivider'
import type { SectionRefs } from './useAutoScrollEngine'
import WatercolorBackground from './Background'

type Props = {
  sectionRefs: SectionRefs;
  onUserScrollDoa?: () => void;
};

/**
 * ContentCard Component
 *
 * Main content card with scroll-triggered animations.
 * Each section animates into view as user scrolls down.
 */
export default function ContentCard({ sectionRefs, onUserScrollDoa }: Props) {
  const cardVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      animate="animate"
      className="
        relative
        w-full
        max-w-2xl
        mx-auto
        min-h-fit
        rounded-2xl
        shadow-[0_8px_30px_rgba(180,130,110,0.15)]
        border border-[rgba(200,160,140,0.3)]
        overflow-hidden
      "
    >
      {/* Watercolor Background */}
      <WatercolorBackground idPrefix="content" />

      {/* White wash overlay — supaya teks lebih readable */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-white/40" />

      {/* Content with scroll-triggered animations */}
      <div className="relative z-20 mx-auto flex w-full max-w-[560px] flex-col items-center px-6 py-12 text-center sm:py-16">
        <div className="w-full space-y-8 sm:space-y-10">
          {/* ✅ Stable anchor for top of ContentCard */}
          <section
            ref={sectionRefs.contentTop as any}
            aria-hidden="true"
            className="h-px w-full"
          />

          {/* Mukadimah */}
          <section ref={sectionRefs.mukadimah as any} className="scroll-mt-24">
            <AnimatedSection type="fade-up">
              <MukadimahContent />
            </AnimatedSection>
          </section>

          <AnimatedDivider />

          {/* Details */}
          <section ref={sectionRefs.details as any} className="scroll-mt-24">
            <AnimatedSection type="scale" delay={0.5}>
              <DetailsContent />
            </AnimatedSection>
          </section>

          <AnimatedDivider delay={0.1} />

          {/* Atur Cara */}
          <section ref={sectionRefs.aturcara as any} className="scroll-mt-24">
            <AnimatedSection type="fade-up" delay={0.5}>
              <AturCaraContent />
            </AnimatedSection>
          </section>

          <AnimatedDivider delay={0.1} />

          {/* Menghitung Hari */}
          <section
            ref={sectionRefs.menghitungHari as any}
            className="scroll-mt-24"
          >
            <AnimatedSection type="scale" delay={0.5}>
              <MenghitungHariContent />
            </AnimatedSection>
          </section>

          <AnimatedDivider delay={0.1} />

          {/* Doa */}
          <section ref={sectionRefs.doa as any} className="scroll-mt-24">
            <AnimatedSection type="fade-up" delay={0.5}>
              <DoaContent onUserScrollDoa={onUserScrollDoa} />
            </AnimatedSection>
          </section>

          <AnimatedDivider delay={0.1} />

          {/* RSVP */}
          <section ref={sectionRefs.rsvp as any} className="scroll-mt-24">
            {/* ✅ CTA anchor (fallback): engine will scroll here with block:center */}
            <div
              ref={sectionRefs.rsvpCTA as any}
              aria-hidden="true"
              className="h-px w-full"
            />

            <AnimatedSection type="scale" delay={0.5}>
              <RSVPContent ctaRef={sectionRefs.rsvpCTA as any} />
            </AnimatedSection>
          </section>

          <AnimatedDivider delay={0.1} />

          {/* Responses */}
          <section ref={sectionRefs.responses as any} className="scroll-mt-24">
            <ResponseContent />
          </section>
        </div>
      </div>

      {/* Decorative corner accents */}
      <div className="pointer-events-none absolute top-0 left-0 z-20 h-20 w-20 border-t-2 border-l-2 border-[rgba(180,145,90,0.35)] rounded-tl-2xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 z-20 h-20 w-20 border-b-2 border-r-2 border-[rgba(180,145,90,0.35)] rounded-br-2xl" />
    </motion.div>
  );
}
