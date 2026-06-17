"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import { SERVICE_CITY_CARDS } from "@/lib/service-areas";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
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

function MapPreview({
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
      className="relative aspect-[4/3] w-full overflow-hidden bg-[#E8F2FF]"
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
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#F4F8FF] to-[#E8F2FF]">
          <MapPin
            className="h-6 w-6 text-[#0066FF]/40"
            strokeWidth={1.5}
            aria-hidden
          />
          <span className="text-[0.72rem] font-medium text-[#9CA3AF]">
            Loading map…
          </span>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#001B44]/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-white/95 px-3 py-1 text-[0.68rem] font-semibold text-[#0066FF] opacity-0 shadow-sm backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
        View area details →
      </div>
    </div>
  );
}

function AreaCard({
  slug,
  name,
  stateAbbr,
  embedUrl,
}: (typeof SERVICE_CITY_CARDS)[number]) {
  return (
    <motion.li variants={cardVariants}>
      <motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 400, damping: 26 }}>
        <Link
          href={`/areas/${slug}`}
          className="group block overflow-hidden rounded-2xl border border-[#EAECEF] bg-white shadow-[0_4px_24px_rgba(0,27,68,0.06)] transition-colors duration-300 hover:border-[#D6E8FF] hover:shadow-[0_12px_40px_rgba(0,102,255,0.12)]"
          aria-label={`View plumbing services in ${name}, ${stateAbbr}`}
        >
          <MapPreview name={name} stateAbbr={stateAbbr} embedUrl={embedUrl} />
          <div className="px-4 py-4 text-center sm:px-5 sm:py-5">
            <h3 className="text-[1rem] font-bold text-[#001B44] transition-colors duration-300 group-hover:text-[#0066FF] sm:text-[1.05rem]">
              {name}
            </h3>
            <p className="mt-0.5 text-[0.78rem] font-medium text-[#9CA3AF]">
              {stateAbbr}
            </p>
          </div>
        </Link>
      </motion.div>
    </motion.li>
  );
}

export default function ServiceAreasSection() {
  return (
    <section
      id="service-areas"
      className="relative overflow-hidden bg-gradient-to-b from-[#FAFBFC] via-white to-[#F4F8FF] py-20 sm:py-24 lg:py-28"
      aria-labelledby="service-areas-heading"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-[#0066FF]/[0.04] blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-[#001B44]/[0.03] blur-3xl" />
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.25]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="areas-wave"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 30 Q15 20 30 30 T60 30"
                fill="none"
                stroke="#0066FF"
                strokeWidth="0.5"
                opacity="0.15"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#areas-wave)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-6 lg:px-8">
        <motion.header
          className="max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#0066FF]">
            Areas We Proudly Serve
          </p>
          <h2
            id="service-areas-heading"
            className="text-[1.85rem] font-bold leading-tight tracking-tight text-[#001B44] sm:text-[2.25rem] lg:text-[2.5rem]"
          >
            Areas We Serve
          </h2>
          <motion.div
            className="mt-4 h-1 w-12 rounded-full bg-[#0066FF]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15, ease: EASE }}
            style={{ transformOrigin: "left" }}
            aria-hidden
          />
          <p className="mt-5 text-[1rem] leading-relaxed text-[#4B5563] sm:text-[1.05rem]">
            As your trusted local plumber, we service these communities across
            Texas, Florida, and California. Click any area to learn more.
          </p>
        </motion.header>

        <motion.ul
          className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
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
          <p className="text-[0.9rem] text-[#6B7280]">
            Don&apos;t see your neighborhood? We&apos;re growing fast.
          </p>
          <motion.a
            href="tel:8887240474"
            className="group mt-5 inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#001B44] px-8 py-3.5 text-[0.95rem] font-bold uppercase tracking-wide text-white shadow-[0_4px_24px_rgba(0,27,68,0.25)]"
            whileHover={{
              y: -3,
              scale: 1.02,
              boxShadow: "0 8px 32px rgba(0,27,68,0.35)",
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
          >
            <Phone className="h-4 w-4" strokeWidth={2} aria-hidden />
            Call Now
          </motion.a>
          <motion.a
            href="/contact"
            className="mt-4 text-[0.85rem] font-medium text-[#0066FF] transition-colors hover:text-[#0052CC]"
            whileHover={{ x: 2 }}
          >
            Or contact our team →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
