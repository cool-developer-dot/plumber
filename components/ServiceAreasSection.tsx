"use client";

import { memo, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, TrendingUp } from "lucide-react";
import { SERVICE_CITY_CARDS } from "@/lib/service-areas";
import { SITE } from "@/lib/site";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

const MapPreview = memo(function MapPreview({
  name,
  stateAbbr,
  embedUrl,
}: {
  name: string;
  stateAbbr: string;
  embedUrl: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative aspect-[4/3] w-full overflow-hidden bg-electric-blue/10"
    >
      {shouldLoad ? (
        <iframe
          src={embedUrl}
          title={`Google Map of ${name}, ${stateAbbr}`}
          className="pointer-events-none absolute inset-0 h-full w-full border-0 transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-electric-blue/[0.04] to-electric-blue/[0.08]">
          <MapPin
            className="h-6 w-6 text-electric-blue/40"
            strokeWidth={1.5}
            aria-hidden
          />
          <span className="text-[0.72rem] font-medium text-cool-gray">
            Loading map…
          </span>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-deep-charcoal/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
});

const AreaCard = memo(function AreaCard({
  slug,
  name,
  stateAbbr,
  embedUrl,
  tagline,
  growthNote,
}: (typeof SERVICE_CITY_CARDS)[number]) {
  return (
    <motion.li variants={cardVariants}>
      <Link
        href={`/areas/${slug}`}
        className="group block overflow-hidden rounded-2xl border border-[rgba(21,23,27,0.08)] bg-white shadow-[0_4px_24px_rgba(21,23,27,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-electric-blue/20 hover:shadow-[0_12px_40px_rgba(45,140,255,0.12)]"
        aria-label={`View plumbing services in ${name}, ${stateAbbr}`}
      >
        <MapPreview name={name} stateAbbr={stateAbbr} embedUrl={embedUrl} />
        <div className="px-5 py-5 text-left sm:px-6 sm:py-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-[1.1rem] font-bold text-deep-charcoal transition-colors duration-300 group-hover:text-electric-blue sm:text-[1.15rem]">
                {name}, {stateAbbr}
              </h3>
              <p className="mt-1.5 text-[0.85rem] leading-relaxed text-cool-gray">
                {tagline}
              </p>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-electric-blue/15 bg-electric-blue/[0.06] px-2.5 py-1 text-[0.68rem] font-semibold text-electric-blue">
              <MapPin className="h-3 w-3" strokeWidth={2} aria-hidden />
              Local Service Coverage
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(21,23,27,0.08)] bg-soft-white px-2.5 py-1 text-[0.68rem] font-medium text-cool-gray">
              <TrendingUp
                className="h-3 w-3 text-electric-blue"
                strokeWidth={2}
                aria-hidden
              />
              {growthNote}
            </span>
          </div>
        </div>
      </Link>
    </motion.li>
  );
});

export default function ServiceAreasSection() {
  return (
    <section
      id="service-areas"
      className="relative overflow-hidden bg-gradient-to-b from-soft-white via-white to-soft-white/80 py-20 sm:py-24 lg:py-28"
      aria-labelledby="service-areas-heading"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-electric-blue/[0.04] blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-deep-charcoal/[0.03] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-6 lg:px-8">
        <motion.header
          className="max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-electric-blue">
            Service Areas
          </p>
          <h2
            id="service-areas-heading"
            className="text-[1.85rem] font-bold leading-tight tracking-tight text-deep-charcoal sm:text-[2.25rem] lg:text-[2.5rem]"
          >
            McKinney, Denton &amp; Rockwall
          </h2>
          <motion.div
            className="mt-4 h-1 w-12 rounded-full bg-electric-blue"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15, ease: EASE }}
            style={{ transformOrigin: "left" }}
            aria-hidden
          />
          <p className="mt-5 text-[1rem] leading-relaxed text-cool-gray sm:text-[1.05rem]">
            Serving rapidly growing communities across North Texas. Licensed
            technicians providing premium plumbing in McKinney, Denton, and
            Rockwall — with same-day availability and flat-rate pricing.
          </p>
        </motion.header>

        <motion.ul
          className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:gap-6 lg:grid-cols-3"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          aria-label="Service area locations"
        >
          {SERVICE_CITY_CARDS.map((city) => (
            <AreaCard key={city.slug} {...city} />
          ))}
        </motion.ul>

        <motion.div
          className="mt-14 flex flex-col items-center text-center sm:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, delay: 0.1, ease: EASE }}
        >
          <p className="text-[0.9rem] text-cool-gray">
            Need a plumber in McKinney, Denton, or Rockwall? We&apos;re ready
            when you are.
          </p>
          <a
            href={`tel:${SITE.phoneTel}`}
            className="group mt-5 inline-flex items-center justify-center gap-2.5 rounded-xl bg-electric-blue px-8 py-3.5 text-[0.95rem] font-bold uppercase tracking-wide text-white shadow-[0_4px_24px_rgba(45,140,255,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(45,140,255,0.45)] active:scale-[0.98]"
          >
            <Phone className="h-4 w-4" strokeWidth={2} aria-hidden />
            Call {SITE.phone}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
