"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CircleCheck, PhoneCall, Truck, type LucideIcon } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const STEPS = [
  {
    number: "01",
    title: "Request Service",
    description: "Submit a request online or call our team.",
    icon: PhoneCall,
  },
  {
    number: "02",
    title: "Expert Arrives Fast",
    description:
      "A licensed plumber arrives fully equipped and ready to help.",
    icon: Truck,
  },
  {
    number: "03",
    title: "Problem Solved",
    description:
      "We diagnose, repair, and ensure everything works perfectly.",
    icon: CircleCheck,
  },
] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

function SectionHeader() {
  return (
    <motion.header
      className="mx-auto max-w-2xl text-center"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: EASE }}
    >
      <p className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#0066FF]">
        Simple &amp; Hassle-Free Process
      </p>
      <h2
        id="how-it-works-heading"
        className="text-[1.85rem] font-bold leading-tight tracking-tight text-[#001B44] sm:text-[2.25rem] lg:text-[2.5rem]"
      >
        Get Professional Plumbing Help In 3 Easy Steps
      </h2>
      <p className="mt-4 text-[1rem] leading-relaxed text-[#4B5563] sm:text-[1.05rem]">
        Fast scheduling, expert technicians, and lasting repairs — all with zero
        hassle.
      </p>
    </motion.header>
  );
}

function ProcessStep({
  number,
  title,
  description,
  icon: Icon,
  index,
}: {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}) {
  return (
    <motion.article
      variants={stepVariants}
      className="group relative flex flex-col items-center text-center lg:flex-1"
      aria-label={`Step ${number}: ${title}`}
    >
      {/* Step number */}
      <span
        className="pointer-events-none select-none text-[3.5rem] font-bold leading-none tracking-tight text-[#E8F2FF] transition-colors duration-300 group-hover:text-[#D6E8FF] sm:text-[4rem]"
        aria-hidden
      >
        {number}
      </span>

      {/* Icon node */}
      <motion.div
        className="relative z-10 -mt-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#EAECEF] bg-white text-[#0066FF] shadow-[0_4px_20px_rgba(0,27,68,0.06)]"
        whileHover={{
          y: -4,
          boxShadow: "0 8px 28px rgba(0,102,255,0.12)",
          borderColor: "#D6E8FF",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 24 }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
        </motion.div>

        {/* Node ring accent */}
        <span className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-[#0066FF]/0 transition-all duration-300 group-hover:ring-[#0066FF]/10" />
      </motion.div>

      <h3 className="mt-6 text-[1.05rem] font-semibold text-[#001B44] transition-colors group-hover:text-[#0066FF]">
        {title}
      </h3>
      <p className="mt-2 max-w-[260px] text-[0.875rem] leading-relaxed text-[#6B7280]">
        {description}
      </p>

      {/* Mobile vertical connector (not on last step) */}
      {index < STEPS.length - 1 && (
        <div
          className="mt-8 flex h-12 w-px items-end overflow-hidden bg-[#E5E7EB] lg:hidden"
          aria-hidden
        >
          <motion.div
            className="w-full origin-top bg-[#0066FF]"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.2, ease: EASE }}
            style={{ height: "100%" }}
          />
        </div>
      )}
    </motion.article>
  );
}

function DesktopTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute left-[18%] right-[18%] top-[4.75rem] hidden h-px lg:block"
      aria-hidden
    >
      {/* Track */}
      <div className="absolute inset-0 bg-[#E5E7EB]" />
      {/* Animated progress */}
      <motion.div
        className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#0066FF] via-[#3399FF] to-[#0066FF]"
        initial={{ width: "0%" }}
        animate={{ width: isInView ? "100%" : "0%" }}
        transition={{ duration: 1.4, delay: 0.35, ease: EASE }}
      />
      {/* Step dots on line */}
      {STEPS.map((step, i) => (
        <motion.span
          key={step.number}
          className="absolute top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-[#0066FF] shadow-sm"
          style={{ left: `${i * 50}%` }}
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 0.35, delay: 0.5 + i * 0.25, ease: EASE }}
        />
      ))}
    </div>
  );
}

export default function HowItWorksSection() {
  return (
    <section
      className="bg-[#FAFBFC] py-20 sm:py-24 lg:py-28"
      aria-labelledby="how-it-works-heading"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-6 lg:px-8">
        <SectionHeader />

        <div className="relative mt-14 sm:mt-16 lg:mt-20">
          <DesktopTimeline />

          <motion.ol
            className="relative flex flex-col items-center gap-0 lg:flex-row lg:items-start lg:justify-between lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            aria-label="How our plumbing service works in three steps"
          >
            {STEPS.map((step, i) => (
              <li key={step.number} className="contents">
                <ProcessStep {...step} index={i} />
              </li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
