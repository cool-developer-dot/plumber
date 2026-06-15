"use client";

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
    description: "Fully certified professionals you can trust in your home.",
    icon: BadgeCheck,
  },
  {
    title: "24/7 Emergency Response",
    description: "Rapid dispatch when plumbing emergencies can't wait.",
    icon: Clock,
  },
  {
    title: "Same-Day Service",
    description: "Most jobs scheduled and completed the very same day.",
    icon: CalendarCheck,
  },
  {
    title: "Upfront Transparent Pricing",
    description: "Clear quotes before work begins — no hidden fees.",
    icon: Receipt,
  },
  {
    title: "Background Checked Technicians",
    description: "Every team member is vetted, trained, and uniformed.",
    icon: UserCheck,
  },
  {
    title: "Satisfaction Guaranteed",
    description: "We stand behind every repair with our quality promise.",
    icon: ShieldCheck,
  },
] as const;

const STATS = [
  {
    value: 20,
    suffix: "+",
    label: "Years Experience",
    decimals: 0,
    delay: 0.1,
  },
  {
    value: 5000,
    suffix: "+",
    label: "Happy Customers",
    decimals: 0,
    delay: 0.2,
  },
  {
    value: 4.9,
    suffix: "★",
    label: "Average Rating",
    decimals: 1,
    delay: 0.3,
  },
  {
    value: 100,
    suffix: "%",
    label: "Satisfaction Guarantee",
    decimals: 0,
    delay: 0.4,
  },
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

function TrustPoint({
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
      className="group flex gap-4 rounded-xl border border-transparent px-3 py-3 -mx-3 transition-colors hover:border-[#E8F2FF] hover:bg-[#FAFBFC]"
      whileHover={{ x: 4 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
    >
      <motion.div
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F4F8FF] text-[#0066FF]"
        whileHover={{ scale: 1.08, backgroundColor: "#E8F2FF" }}
        transition={{ type: "spring", stiffness: 400, damping: 22 }}
      >
        <Icon className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.75} aria-hidden />
      </motion.div>
      <div>
        <h3 className="text-[0.95rem] font-semibold text-[#001B44] transition-colors group-hover:text-[#0066FF]">
          {title}
        </h3>
        <p className="mt-0.5 text-[0.85rem] leading-relaxed text-[#6B7280]">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

function StatBlock({
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
      whileHover={{ y: -3 }}
    >
      <p className="text-[1.75rem] font-bold leading-none text-[#001B44] sm:text-[2rem]">
        <CountUp to={value} decimals={decimals} duration={2} delay={delay} />
        <span className="text-[#0066FF]">{suffix}</span>
      </p>
      <p className="mt-2 text-[0.8rem] font-medium text-[#6B7280] transition-colors group-hover:text-[#4B5563]">
        {label}
      </p>
    </motion.div>
  );
}

export default function WhyChooseUsSection() {
  return (
    <section
      className="bg-white py-20 sm:py-24 lg:py-28"
      aria-labelledby="why-choose-heading"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          <p className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#0066FF]">
            Trusted By Thousands Of Homeowners
          </p>
          <h2
            id="why-choose-heading"
            className="text-[1.85rem] font-bold leading-tight tracking-tight text-[#001B44] sm:text-[2.25rem] lg:text-[2.5rem]"
          >
            Why Homeowners Choose Our Plumbing Experts
          </h2>
          <p className="mt-4 text-[1rem] leading-relaxed text-[#4B5563] sm:text-[1.05rem]">
            Two decades of proven expertise, transparent service, and a team that
            treats your home with the care it deserves.
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="mt-14 grid items-center gap-12 lg:mt-20 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Left — image with floating accents */}
          <motion.div
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[#EAECEF] shadow-[0_20px_50px_-12px_rgba(0,27,68,0.1)] sm:aspect-[5/6]">
              <Image
                src="/image.png"
                alt="FlowRight licensed plumbing technician consulting with a homeowner"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-[58%_center]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001B44]/10 via-transparent to-transparent" />
            </div>

            {/* Floating accent — experience badge */}
            <motion.div
              className="absolute -bottom-4 left-4 sm:left-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
            >
              <motion.div
                className="flex items-center gap-2.5 rounded-xl border border-[#EAECEF] bg-white px-4 py-3 shadow-[0_8px_30px_rgba(0,27,68,0.08)]"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#F4F8FF] text-[#0066FF]">
                  <Award className="h-4 w-4" strokeWidth={2} aria-hidden />
                </div>
                <div className="leading-tight">
                  <p className="text-[0.9rem] font-bold text-[#001B44]">20+ Years</p>
                  <p className="text-[0.72rem] text-[#9CA3AF]">Serving Texas</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating accent — rating pill */}
            <motion.div
              className="absolute -right-2 top-6 sm:right-4 sm:top-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.45, ease: EASE }}
            >
              <motion.div
                className="flex items-center gap-1.5 rounded-full border border-[#EAECEF] bg-white px-3.5 py-2 shadow-[0_4px_20px_rgba(0,27,68,0.06)]"
                animate={{ y: [0, 5, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <Star className="h-3.5 w-3.5 fill-[#0066FF] text-[#0066FF]" aria-hidden />
                <span className="text-[0.8rem] font-semibold text-[#001B44]">4.9 Rating</span>
              </motion.div>
            </motion.div>

            {/* Soft decorative blurs */}
            <div
              className="pointer-events-none absolute -left-6 top-1/4 h-24 w-24 rounded-full bg-[#0066FF]/[0.06] blur-2xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -right-4 bottom-1/3 h-20 w-20 rounded-full bg-[#0066FF]/[0.04] blur-2xl"
              aria-hidden
            />
          </motion.div>

          {/* Right — trust points */}
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

        {/* Credibility strip */}
        <motion.div
          className="mt-16 rounded-xl border border-[#EAECEF] bg-[#FAFBFC] px-4 py-8 sm:mt-20 sm:px-6 sm:py-10 lg:mt-24"
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
