"use client";

import { memo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Award,
  BadgeCheck,
  CalendarCheck,
  Clock,
  Receipt,
  ShieldCheck,
  Star,
  UserCheck,
  type LucideIcon,
} from "lucide-react";
import CountUp from "@/components/ui/CountUp";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const TRUST_POINTS = [
  {
    title: "Licensed & Insured",
    description: "Fully certified professionals you can trust in your home. Every technician, every time.",
    icon: BadgeCheck,
  },
  {
    title: "24/7 Emergency Response",
    description: "Rapid dispatch when plumbing emergencies can't wait — including holidays.",
    icon: Clock,
  },
  {
    title: "Same-Day Service",
    description: "Most jobs scheduled and completed the very same day you call.",
    icon: CalendarCheck,
  },
  {
    title: "Upfront Flat-Rate Pricing",
    description: "Clear, itemized quotes before work begins — no hidden fees, no surprises.",
    icon: Receipt,
  },
  {
    title: "Background Checked Technicians",
    description: "Every team member is vetted, trained, uniformed, and ID-badged.",
    icon: UserCheck,
  },
  {
    title: "Workmanship Guaranteed",
    description: "We stand behind every repair. If it's not right, we come back free.",
    icon: ShieldCheck,
  },
] as const;

const STATS = [
  { value: 20, suffix: "+", label: "Years Experience", decimals: 0, delay: 0.1 },
  { value: 5000, suffix: "+", label: "Happy Customers", decimals: 0, delay: 0.2 },
  { value: 4.9, suffix: "★", label: "Average Rating", decimals: 1, delay: 0.3 },
  { value: 100, suffix: "%", label: "Satisfaction Guarantee", decimals: 0, delay: 0.4 },
] as const;

const listVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.15 },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, x: 16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: EASE },
  },
};

const TrustPoint = memo(function TrustPoint({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
}) {
  return (
    <motion.div
      variants={listItemVariants}
      className="group flex gap-4 rounded-xl border border-transparent px-3 py-3 -mx-3 transition-colors hover:border-electric-blue/10 hover:bg-white"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-electric-blue/10 text-electric-blue transition-colors group-hover:bg-electric-blue/20">
        <Icon className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.75} aria-hidden />
      </div>
      <div>
        <h3 className="text-[0.95rem] font-semibold text-deep-charcoal transition-colors group-hover:text-electric-blue">
          {title}
        </h3>
        <p className="mt-0.5 text-[0.85rem] leading-relaxed text-cool-gray">
          {description}
        </p>
      </div>
    </motion.div>
  );
});

const StatBlock = memo(function StatBlock({
  value,
  suffix,
  label,
  decimals,
  delay,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  decimals: number;
  delay: number;
  index: number;
}) {
  return (
    <motion.div
      className="group flex flex-col items-center px-4 py-2 text-center"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.08, ease: EASE }}
    >
      <p className="text-[1.75rem] font-bold leading-none text-deep-charcoal sm:text-[2rem]">
        <CountUp to={value} decimals={decimals} duration={2} delay={delay} />
        <span className="text-electric-blue">{suffix}</span>
      </p>
      <p className="mt-2 text-[0.8rem] font-medium text-cool-gray transition-colors group-hover:text-deep-charcoal">
        {label}
      </p>
    </motion.div>
  );
});

export default function WhyChooseUsSection() {
  return (
    <section
      className="bg-white py-20 sm:py-24 lg:py-28"
      aria-labelledby="why-choose-heading"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          <p className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-electric-blue">
            Trusted By Thousands Of Homeowners
          </p>
          <h2
            id="why-choose-heading"
            className="text-[1.85rem] font-bold leading-tight tracking-tight text-deep-charcoal sm:text-[2.25rem] lg:text-[2.5rem]"
          >
            Why Homeowners Choose Precision Plumbing
          </h2>
          <p className="mt-4 text-[1rem] leading-relaxed text-cool-gray sm:text-[1.05rem]">
            Two decades of proven expertise in McKinney, Denton, and Rockwall — transparent
            flat-rate pricing and a team that treats your home with the respect it deserves.
          </p>
        </motion.div>

        <div className="mt-14 grid items-center gap-12 lg:mt-20 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <motion.div
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[rgba(21,23,27,0.08)] bg-deep-charcoal shadow-[0_20px_50px_-12px_rgba(21,23,27,0.15)] sm:aspect-[5/6]">
              <Image
                src="/why-choose-us.webp"
                alt="Precision Plumbing technician performing under-sink pipe repair in a modern home"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={80}
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/20 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-4 left-4 sm:left-6">
              <div className="flex items-center gap-2.5 rounded-xl border border-[rgba(21,23,27,0.08)] bg-white px-4 py-3 shadow-[0_8px_30px_rgba(21,23,27,0.08)]">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-electric-blue/10 text-electric-blue">
                  <Award className="h-4 w-4" strokeWidth={2} aria-hidden />
                </div>
                <div className="leading-tight">
                  <p className="text-[0.9rem] font-bold text-deep-charcoal">20+ Years</p>
                  <p className="text-[0.72rem] text-cool-gray">Serving North Texas</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-2 top-6 sm:right-4 sm:top-8">
              <div className="flex items-center gap-1.5 rounded-full border border-[rgba(21,23,27,0.08)] bg-white px-3.5 py-2 shadow-[0_4px_20px_rgba(21,23,27,0.06)]">
                <Star className="h-3.5 w-3.5 fill-electric-blue text-electric-blue" aria-hidden />
                <span className="text-[0.8rem] font-semibold text-deep-charcoal">4.9 Rating</span>
              </div>
            </div>

            <div
              className="pointer-events-none absolute -left-6 top-1/4 h-24 w-24 rounded-full bg-electric-blue/[0.06] blur-2xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -right-4 bottom-1/3 h-20 w-20 rounded-full bg-electric-blue/[0.04] blur-2xl"
              aria-hidden
            />
          </motion.div>

          <motion.div
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <div className="grid gap-1 sm:gap-2">
              {TRUST_POINTS.map((point) => (
                <TrustPoint key={point.title} {...point} />
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 rounded-xl border border-[rgba(21,23,27,0.08)] bg-soft-white px-4 py-8 sm:mt-20 sm:px-6 sm:py-10 lg:mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, delay: 0.1, ease: EASE }}
        >
          <div className="grid grid-cols-2 gap-6 sm:gap-4 lg:grid-cols-4">
            {STATS.map((stat, i) => (
              <StatBlock key={stat.label} {...stat} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
