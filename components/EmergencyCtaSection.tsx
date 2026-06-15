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
      className={`group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#001B44] px-7 py-3.5 text-[0.95rem] font-semibold text-white shadow-[0_4px_20px_rgba(0,27,68,0.3)] ${className}`}
      whileHover={{
        scale: 1.03,
        y: -2,
        boxShadow: "0 8px 32px rgba(0,27,68,0.4)",
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
    >
      <motion.span
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.55, ease: "easeInOut" }}
      />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
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
      className={`inline-flex items-center justify-center gap-2 rounded-xl border border-[#E5E7EB] bg-white px-7 py-3.5 text-[0.95rem] font-semibold text-[#001B44] shadow-sm ${className}`}
      whileHover={{
        scale: 1.03,
        y: -2,
        borderColor: "#0066FF",
        boxShadow: "0 6px 24px rgba(0,102,255,0.12)",
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
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
      aria-labelledby="emergency-cta-heading"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-6 lg:px-8">
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-[#D6E8FF] bg-gradient-to-br from-[#F0F7FF] via-white to-[#E8F2FF] px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          {/* Decorative elements */}
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#0066FF]/[0.07] blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-[#0066FF]/[0.05] blur-3xl"
            aria-hidden
          />

          <motion.div
            className="pointer-events-none absolute right-8 top-8 hidden h-16 w-16 items-center justify-center rounded-2xl border border-[#D6E8FF] bg-white/80 shadow-lg backdrop-blur-sm sm:flex"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden
          >
            <Phone className="h-7 w-7 text-[#0066FF]" strokeWidth={1.75} />
          </motion.div>

          <motion.div
            className="pointer-events-none absolute bottom-10 right-16 hidden h-12 w-12 rounded-full border border-[#E8F2FF] bg-[#0066FF]/10 sm:block"
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden
          />

          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <motion.div
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D6E8FF] bg-white/80 px-3.5 py-1.5 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.4 }}
            >
              <span className="relative flex h-2 w-2" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0066FF] opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#0066FF]" />
              </span>
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#0066FF]">
                Emergency Service Available
              </span>
            </motion.div>

            <h2
              id="emergency-cta-heading"
              className="text-[2rem] font-bold leading-tight tracking-tight text-[#001B44] sm:text-[2.5rem] lg:text-[2.75rem]"
            >
              Need A Plumber Right Now?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[1rem] leading-relaxed text-[#4B5563] sm:text-[1.05rem]">
              Our licensed emergency plumbers are available 24/7 and ready to
              help.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <PrimaryButton href="tel:8887240474">
                <Phone className="h-4 w-4" strokeWidth={2.25} />
                Call Now
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
                  className="flex items-center gap-2 text-[0.8rem] font-medium text-[#4B5563]"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.4, ease: EASE }}
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E8F2FF] text-[#0066FF]">
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
