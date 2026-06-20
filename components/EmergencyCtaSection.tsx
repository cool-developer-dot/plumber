"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Clock,
  Phone,
  ShieldCheck,
  Zap,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const TRUST_POINTS = [
  { label: "24/7 Availability", icon: Clock },
  { label: "Licensed & Insured", icon: ShieldCheck },
  { label: "Fast Response", icon: Zap },
  { label: "Satisfaction Guaranteed", icon: Check },
] as const;

function PrimaryButton({
  children,
  href,
  className = "",
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <motion.a
      href={href}
      className={`group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-signal-amber px-7 py-3.5 text-[0.95rem] font-semibold text-deep-charcoal shadow-[0_4px_20px_rgba(242,163,60,0.3)] ${className}`}
      whileHover={{
        scale: 1.03,
        y: -2,
        boxShadow: "0 8px 32px rgba(242,163,60,0.4)",
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </motion.a>
  );
}

function SecondaryButton({
  children,
  href,
  className = "",
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <motion.a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-xl border border-electric-blue/20 bg-white px-7 py-3.5 text-[0.95rem] font-semibold text-deep-charcoal shadow-sm ${className}`}
      whileHover={{
        scale: 1.03,
        y: -2,
        borderColor: "#2D8CFF",
        boxShadow: "0 6px 24px rgba(45,140,255,0.12)",
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
    >
      {children}
    </motion.a>
  );
}

export default function EmergencyCtaSection() {
  return (
    <section
      className="relative overflow-hidden bg-deep-charcoal py-20 sm:py-24 lg:py-28"
      aria-labelledby="emergency-cta-heading"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-6 lg:px-8">
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-electric-blue/20 bg-gradient-to-br from-rich-navy via-deep-navy-tint to-deep-charcoal px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          {/* Decorative elements */}
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-electric-blue/[0.08] blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-electric-blue/[0.05] blur-3xl"
            aria-hidden
          />

          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <motion.div
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-signal-amber/30 bg-signal-amber/[0.1] px-3.5 py-1.5 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.4 }}
            >
              <span className="relative flex h-2 w-2" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal-amber opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-signal-amber" />
              </span>
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-signal-amber">
                Emergency Service Available
              </span>
            </motion.div>

            <h2
              id="emergency-cta-heading"
              className="text-[2rem] font-bold leading-tight tracking-tight text-soft-white sm:text-[2.5rem] lg:text-[2.75rem]"
            >
              Need A Plumber Right Now?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[1rem] leading-relaxed text-metallic-silver sm:text-[1.05rem]">
              Our licensed emergency plumbers are available 24/7 and ready to
              help. Call now for immediate dispatch.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <PrimaryButton href="tel:8887240474">
                <Phone className="h-4 w-4" strokeWidth={2.25} />
                Call Now — Available 24/7
              </PrimaryButton>
              <SecondaryButton href="#">
                Get Free Estimate
                <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
              </SecondaryButton>
            </div>

            <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {TRUST_POINTS.map((point, i) => (
                <motion.li
                  key={point.label}
                  className="flex items-center gap-2 text-[0.8rem] font-medium text-metallic-silver"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.4, ease: EASE }}
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-electric-blue/[0.1] text-electric-blue">
                    <point.icon className="h-3 w-3" strokeWidth={2.5} aria-hidden />
                  </span>
                  {point.label}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
