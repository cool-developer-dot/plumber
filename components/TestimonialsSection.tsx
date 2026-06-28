"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, PanInfo } from "framer-motion";
import { BadgeCheck, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/testimonials";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const MARQUEE_DURATION = `${TESTIMONIALS.length * 3}s`;
const AUTO_PLAY_MS = 3000;
const SWIPE_THRESHOLD = 50;

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex shrink-0 gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className="h-3.5 w-3.5 fill-[#FBBF24] text-[#FBBF24]"
          aria-hidden
        />
      ))}
    </div>
  );
}

function TestimonialCard({
  name,
  location,
  initials,
  color,
  text,
  className = "",
}: (typeof TESTIMONIALS)[number] & { className?: string }) {
  return (
    <article
      className={`group rounded-2xl border border-white/80 bg-white/75 p-5 shadow-[0_4px_24px_rgba(21,23,27,0.06)] backdrop-blur-md transition-all duration-300 sm:p-6 ${className}`}
      aria-label={`Review from ${name}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
            style={{ backgroundColor: color }}
            aria-hidden
          >
            {initials}
          </div>
          <div className="min-w-0">
            <p className="truncate text-[0.9rem] font-semibold text-deep-charcoal">
              {name}
            </p>
            <p className="text-[0.78rem] text-cool-gray">{location}</p>
          </div>
        </div>
        <StarRating />
      </div>

      <p className="mt-4 text-[0.875rem] leading-relaxed text-cool-gray">
        &ldquo;{text}&rdquo;
      </p>

      <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-electric-blue/10 bg-electric-blue/[0.06] px-2.5 py-1">
        <BadgeCheck className="h-3.5 w-3.5 text-electric-blue" strokeWidth={2} aria-hidden />
        <span className="text-[0.68rem] font-semibold text-electric-blue">
          Verified Customer
        </span>
      </div>
    </article>
  );
}

/* Mobile / tablet: swipe carousel with auto-play */
function MobileTestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState(0);
  const pauseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback((index: number, dir: number) => {
    setDirection(dir);
    setCurrent((index + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  const goNext = useCallback(() => {
    goTo(current + 1, 1);
  }, [current, goTo]);

  const goPrev = useCallback(() => {
    goTo(current - 1, -1);
  }, [current, goTo]);

  const pauseBriefly = useCallback(() => {
    setPaused(true);
    if (pauseTimer.current) clearTimeout(pauseTimer.current);
    pauseTimer.current = setTimeout(() => setPaused(false), 5000);
  }, []);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mql.matches) return;
    if (paused) return;
    const id = setInterval(goNext, AUTO_PLAY_MS);
    return () => clearInterval(id);
  }, [paused, goNext]);

  useEffect(() => {
    return () => {
      if (pauseTimer.current) clearTimeout(pauseTimer.current);
    };
  }, []);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    pauseBriefly();
    if (info.offset.x < -SWIPE_THRESHOLD) goNext();
    else if (info.offset.x > SWIPE_THRESHOLD) goPrev();
  };

  const slideVariants = {
    enter: (dir: number) => ({ x: dir >= 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir >= 0 ? -60 : 60, opacity: 0 }),
  };

  return (
    <div className="mt-10 lg:hidden">
      <div
        className="relative overflow-hidden"
        onTouchStart={pauseBriefly}
        aria-roledescription="carousel"
        aria-label="Customer testimonials"
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: EASE }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={handleDragEnd}
            className="cursor-grab active:cursor-grabbing"
          >
            <TestimonialCard
              {...TESTIMONIALS[current]}
              className="w-full hover:translate-y-0"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="mt-6 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => {
            pauseBriefly();
            goPrev();
          }}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[rgba(21,23,27,0.08)] bg-white text-deep-charcoal shadow-sm transition-colors hover:border-electric-blue/20 hover:bg-electric-blue/[0.04] hover:text-electric-blue"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={2} />
        </button>

        <div className="flex flex-wrap items-center justify-center gap-1.5">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.name}
              type="button"
              onClick={() => {
                pauseBriefly();
                goTo(i, i > current ? 1 : -1);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 bg-[#0066FF]"
                  : "w-2 bg-electric-blue/20 hover:bg-electric-blue/40"
              }`}
              aria-label={`Go to review ${i + 1} from ${t.name}`}
              aria-current={i === current ? "true" : undefined}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => {
            pauseBriefly();
            goNext();
          }}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[rgba(21,23,27,0.08)] bg-white text-deep-charcoal shadow-sm transition-colors hover:border-electric-blue/20 hover:bg-electric-blue/[0.04] hover:text-electric-blue"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5" strokeWidth={2} />
        </button>
      </div>

      <p className="mt-3 text-center text-[0.72rem] text-[#9CA3AF]">
        Swipe or tap arrows · Auto-advances every 3s
      </p>
    </div>
  );
}

/* Desktop: infinite marquee */
function DesktopTestimonialMarquee() {
  const [paused, setPaused] = useState(false);
  const items = [...TESTIMONIALS, ...TESTIMONIALS];

  const handlePause = () => setPaused(true);
  const handleResume = () => setPaused(false);

  return (
    <div
      className="relative mt-14 hidden sm:mt-16 lg:block"
      onMouseEnter={handlePause}
      onMouseLeave={handleResume}
      onTouchStart={handlePause}
      onTouchEnd={handleResume}
      onFocus={handlePause}
      onBlur={handleResume}
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent"
        aria-hidden
      />

      <div className="overflow-hidden">
        <div
          className={`testimonial-marquee flex w-max gap-5 will-change-transform ${paused ? "testimonial-marquee-paused" : ""}`}
          style={{ "--marquee-duration": MARQUEE_DURATION } as React.CSSProperties}
          aria-live="off"
        >
          {items.map((testimonial, i) => (
            <TestimonialCard
              key={`${testimonial.name}-${i}`}
              {...testimonial}
              className="w-[380px] shrink-0 hover:-translate-y-1 hover:border-[#D6E8FF] hover:shadow-[0_12px_40px_rgba(0,27,68,0.1)]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      className="overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-electric-blue">
            Trusted By Thousands
          </p>
          <h2
            id="testimonials-heading"
            className="text-[1.85rem] font-bold leading-tight tracking-tight text-deep-charcoal sm:text-[2.25rem] lg:text-[2.5rem]"
          >
            What Homeowners Are Saying
          </h2>
          <p className="mt-4 text-[1rem] leading-relaxed text-cool-gray sm:text-[1.05rem]">
            Real reviews from homeowners in McKinney, Denton, and Rockwall who trust
            us with their most important plumbing needs.
          </p>
        </div>

        <MobileTestimonialCarousel />
        <DesktopTestimonialMarquee />
      </div>
    </section>
  );
}
