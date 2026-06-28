"use client";

import { memo, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  CircleCheck,
  Clock,
  Droplets,
  Flame,
  HeartPulse,
  Home,
  Phone,
  PhoneCall,
  Receipt,
  ShieldCheck,
  Truck,
  Waves,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import ServiceSectionHeader from "@/components/services/ServiceSectionHeader";
import {
  EMERGENCY_HERO,
  EMERGENCY_IMAGES,
  EMERGENCY_PROCESS_STEPS,
  EMERGENCY_SECTIONS,
  EMERGENCY_SERVICE_AREAS,
  EMERGENCY_SITUATIONS,
  EMERGENCY_SOLUTIONS,
  EMERGENCY_WHY_CHOOSE,
  URGENCY_RISKS,
} from "@/lib/emergency-plumbing-content";
import { SITE } from "@/lib/site";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const SITUATION_ICONS: LucideIcon[] = [
  Zap,
  Droplets,
  AlertTriangle,
  Waves,
  ShieldCheck,
  Flame,
];

const WHY_CHOOSE_ICONS: LucideIcon[] = [
  BadgeCheck,
  CalendarCheck,
  Clock,
  Receipt,
  Wrench,
  ShieldCheck,
];

const URGENCY_ICONS: LucideIcon[] = [
  Droplets,
  AlertTriangle,
  Home,
  Receipt,
  HeartPulse,
];

const SOLUTION_ICONS: LucideIcon[] = [
  Zap,
  Droplets,
  Waves,
  ShieldCheck,
  Flame,
  AlertTriangle,
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

function BreadcrumbNav() {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-[rgba(21,23,27,0.08)] bg-white">
      <div className="mx-auto max-w-[1320px] px-5 py-3 sm:px-6 lg:px-8">
        <ol className="flex flex-wrap items-center gap-1.5 text-[0.82rem]">
          <li>
            <Link
              href="/"
              className="font-medium text-cool-gray transition-colors hover:text-electric-blue"
            >
              Home
            </Link>
          </li>
          <li className="text-cool-gray/50" aria-hidden>
            /
          </li>
          <li>
            <Link
              href="/#services-heading"
              className="font-medium text-cool-gray transition-colors hover:text-electric-blue"
            >
              Services
            </Link>
          </li>
          <li className="text-cool-gray/50" aria-hidden>
            /
          </li>
          <li>
            <span className="font-medium text-deep-charcoal" aria-current="page">
              Emergency Plumbing
            </span>
          </li>
        </ol>
      </div>
    </nav>
  );
}

function ServiceHero() {
  return (
    <section
      className="relative overflow-hidden bg-white pb-16 pt-10 sm:pb-20 sm:pt-12 lg:pb-24 lg:pt-14"
      aria-labelledby="emergency-plumbing-heading"
    >
      <div
        className="pointer-events-none absolute -right-32 top-0 h-[420px] w-[420px] rounded-full bg-electric-blue/[0.04] blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-electric-blue/15 bg-electric-blue/[0.06] px-3.5 py-1.5">
              <span className="relative flex h-2 w-2" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-electric-blue opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-electric-blue" />
              </span>
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-electric-blue">
                {EMERGENCY_HERO.eyebrow}
              </span>
            </div>

            <h1
              id="emergency-plumbing-heading"
              className="text-[2rem] font-bold leading-[1.1] tracking-tight text-deep-charcoal sm:text-[2.5rem] lg:text-[2.85rem]"
            >
              {EMERGENCY_HERO.headline}
            </h1>

            <p className="mt-5 max-w-xl text-[1rem] leading-relaxed text-cool-gray sm:text-[1.05rem]">
              {EMERGENCY_HERO.subheadline}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <motion.a
                href={`tel:${SITE.phoneTel}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-electric-blue px-6 py-3.5 text-[0.95rem] font-semibold text-white shadow-[0_4px_20px_rgba(45,140,255,0.35)] transition-colors hover:bg-electric-blue-bright"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
              >
                <Phone className="h-4 w-4" strokeWidth={2.25} aria-hidden />
                Call Now — Available 24/7
              </motion.a>
              <motion.a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[rgba(21,23,27,0.08)] bg-white px-6 py-3.5 text-[0.95rem] font-semibold text-deep-charcoal shadow-sm transition-colors hover:border-electric-blue/20 hover:text-electric-blue"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
              >
                Get Free Estimate
                <ArrowRight className="h-4 w-4" strokeWidth={2.25} aria-hidden />
              </motion.a>
            </div>

            <ul className="mt-8 flex flex-wrap gap-2.5" aria-label="Trust badges">
              {EMERGENCY_HERO.trustBadges.map((badge) => (
                <li
                  key={badge}
                  className="rounded-full border border-[rgba(21,23,27,0.08)] bg-soft-white px-3 py-1.5 text-[0.72rem] font-semibold text-deep-charcoal"
                >
                  {badge}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="relative mx-auto w-full max-w-xl lg:max-w-none"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: EASE }}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[rgba(21,23,27,0.08)] bg-soft-white shadow-[0_20px_50px_-12px_rgba(21,23,27,0.12)]">
              <Image
                src={EMERGENCY_IMAGES.hero.src}
                alt={EMERGENCY_IMAGES.hero.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={80}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/10 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-4 left-4 sm:left-6">
              <div className="flex items-center gap-2.5 rounded-xl border border-[rgba(21,23,27,0.08)] bg-white px-4 py-3 shadow-[0_8px_30px_rgba(21,23,27,0.08)]">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-electric-blue/10 text-electric-blue">
                  <Clock className="h-4 w-4" strokeWidth={2} aria-hidden />
                </div>
                <div className="leading-tight">
                  <p className="text-[0.9rem] font-bold text-deep-charcoal">
                    {EMERGENCY_HERO.responseBadge.title}
                  </p>
                  <p className="text-[0.72rem] text-cool-gray">
                    {EMERGENCY_HERO.responseBadge.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const SituationCard = memo(function SituationCard({
  title,
  description,
  image,
  imageAlt,
  href,
  icon: Icon,
}: {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
  icon: LucideIcon;
}) {
  return (
    <motion.article
      variants={itemVariants}
      className="group overflow-hidden rounded-xl border border-[rgba(21,23,27,0.08)] bg-white shadow-[0_2px_8px_rgba(21,23,27,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-electric-blue/20 hover:shadow-[0_12px_40px_rgba(21,23,27,0.1)]"
    >
      <Link href={href} className="flex h-full flex-col">
        <div className="relative h-44 w-full shrink-0 overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
            quality={75}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/50 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/30 bg-white/95 text-electric-blue shadow-lg backdrop-blur-sm">
            <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
          </div>
        </div>
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <h3 className="text-[1rem] font-semibold text-deep-charcoal transition-colors group-hover:text-electric-blue">
            {title}
          </h3>
          <p className="mt-2 flex-1 text-[0.875rem] leading-relaxed text-cool-gray">
            {description}
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-[0.8rem] font-semibold text-electric-blue">
            Learn more
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={2.25}
              aria-hidden
            />
          </span>
        </div>
      </Link>
    </motion.article>
  );
});

function EmergencySituationsSection() {
  const { eyebrow, title, description } = EMERGENCY_SECTIONS.situations;

  return (
    <section
      className="bg-soft-white py-20 sm:py-24 lg:py-28"
      aria-labelledby="emergency-situations-heading"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-6 lg:px-8">
        <ServiceSectionHeader
          eyebrow={eyebrow}
          title={title}
          description={description}
          headingId="emergency-situations-heading"
        />

        <motion.div
          className="mt-14 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {EMERGENCY_SITUATIONS.map((situation, index) => (
            <SituationCard
              key={situation.title}
              title={situation.title}
              description={situation.description}
              image={situation.image}
              imageAlt={situation.imageAlt}
              href={situation.href}
              icon={SITUATION_ICONS[index] ?? Zap}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const FeatureCard = memo(function FeatureCard({
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
      variants={itemVariants}
      className="group flex gap-4 rounded-xl border border-transparent p-4 transition-colors hover:border-electric-blue/10 hover:bg-soft-white"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-electric-blue/10 text-electric-blue transition-colors group-hover:bg-electric-blue/20">
        <Icon className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.75} aria-hidden />
      </div>
      <div>
        <h3 className="text-[0.95rem] font-semibold text-deep-charcoal transition-colors group-hover:text-electric-blue">
          {title}
        </h3>
        <p className="mt-1 text-[0.85rem] leading-relaxed text-cool-gray">
          {description}
        </p>
      </div>
    </motion.div>
  );
});

function WhyChooseSection() {
  const { eyebrow, title, description } = EMERGENCY_SECTIONS.whyChoose;

  return (
    <section
      className="bg-white py-20 sm:py-24 lg:py-28"
      aria-labelledby="why-emergency-heading"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-6 lg:px-8">
        <ServiceSectionHeader
          eyebrow={eyebrow}
          title={title}
          description={description}
          headingId="why-emergency-heading"
        />

        <div className="mt-14 grid items-start gap-10 lg:mt-16 lg:grid-cols-2 lg:gap-16">
          <motion.div
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[rgba(21,23,27,0.08)] shadow-[0_12px_40px_rgba(21,23,27,0.08)]">
              <Image
                src={EMERGENCY_IMAGES.team.src}
                alt={EMERGENCY_IMAGES.team.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
                quality={80}
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            className="grid gap-1 sm:gap-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {EMERGENCY_WHY_CHOOSE.map((item, index) => (
              <FeatureCard
                key={item.title}
                title={item.title}
                description={item.description}
                icon={WHY_CHOOSE_ICONS[index] ?? ShieldCheck}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const SolutionCard = memo(function SolutionCard({
  title,
  description,
  href,
  image,
  imageAlt,
  icon: Icon,
}: {
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
  icon: LucideIcon;
}) {
  return (
    <motion.div variants={itemVariants}>
      <Link
        href={href}
        className="group flex h-full flex-col overflow-hidden rounded-xl border border-[rgba(21,23,27,0.08)] bg-white shadow-[0_2px_8px_rgba(21,23,27,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-electric-blue/20 hover:shadow-[0_12px_40px_rgba(21,23,27,0.1)]"
      >
        <div className="relative h-40 w-full shrink-0 overflow-hidden sm:h-44">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
            quality={75}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/40 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/30 bg-white/95 text-electric-blue shadow-lg backdrop-blur-sm">
            <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
          </div>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <h3 className="text-[1rem] font-semibold text-deep-charcoal transition-colors group-hover:text-electric-blue">
            {title}
          </h3>
          <p className="mt-1.5 flex-1 text-[0.875rem] leading-relaxed text-cool-gray">
            {description}
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-[0.8rem] font-semibold text-electric-blue">
            View service details
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={2.25}
              aria-hidden
            />
          </span>
        </div>
      </Link>
    </motion.div>
  );
});

function EmergencySolutionsSection() {
  const { eyebrow, title, description } = EMERGENCY_SECTIONS.solutions;

  return (
    <section
      className="bg-soft-white py-20 sm:py-24 lg:py-28"
      aria-labelledby="emergency-solutions-heading"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-6 lg:px-8">
        <ServiceSectionHeader
          eyebrow={eyebrow}
          title={title}
          description={description}
          headingId="emergency-solutions-heading"
        />

        <motion.div
          className="mt-14 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {EMERGENCY_SOLUTIONS.map((solution, index) => (
            <SolutionCard
              key={solution.title}
              title={solution.title}
              description={solution.description}
              href={solution.href}
              image={solution.image}
              imageAlt={solution.imageAlt}
              icon={SOLUTION_ICONS[index] ?? Wrench}
            />
          ))}
        </motion.div>
      </div>
    </section>
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
    <motion.li
      variants={itemVariants}
      className="group relative flex flex-col items-center text-center lg:flex-1"
    >
      <span
        className="pointer-events-none select-none text-[3.5rem] font-bold leading-none tracking-tight text-[#E8F2FF] transition-colors duration-300 group-hover:text-[#D6E8FF] sm:text-[4rem]"
        aria-hidden
      >
        {number}
      </span>
      <div className="relative z-10 -mt-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-[rgba(21,23,27,0.08)] bg-white text-electric-blue shadow-[0_4px_20px_rgba(21,23,27,0.06)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-electric-blue/20 group-hover:shadow-[0_8px_28px_rgba(45,140,255,0.12)]">
        <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
      </div>
      <h3 className="mt-6 text-[1.05rem] font-semibold text-deep-charcoal transition-colors group-hover:text-electric-blue">
        {title}
      </h3>
      <p className="mt-2 max-w-[300px] text-[0.875rem] leading-relaxed text-cool-gray">
        {description}
      </p>
      {index < EMERGENCY_PROCESS_STEPS.length - 1 ? (
        <div
          className="mt-8 flex h-12 w-px items-end overflow-hidden bg-[#E5E7EB] lg:hidden"
          aria-hidden
        >
          <motion.div
            className="h-full w-full origin-top bg-electric-blue"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.2, ease: EASE }}
          />
        </div>
      ) : null}
    </motion.li>
  );
}

function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute left-[18%] right-[18%] top-[4.75rem] hidden h-px lg:block"
      aria-hidden
    >
      <div className="absolute inset-0 bg-[#E5E7EB]" />
      <motion.div
        className="absolute inset-y-0 left-0 bg-gradient-to-r from-electric-blue via-electric-blue-bright to-electric-blue"
        initial={{ width: "0%" }}
        animate={{ width: isInView ? "100%" : "0%" }}
        transition={{ duration: 1.4, delay: 0.35, ease: EASE }}
      />
    </div>
  );
}

function EmergencyProcessSection() {
  const { eyebrow, title, description } = EMERGENCY_SECTIONS.process;
  const stepIcons = [PhoneCall, Truck, CircleCheck];

  return (
    <section
      className="bg-white py-20 sm:py-24 lg:py-28"
      aria-labelledby="emergency-process-heading"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-6 lg:px-8">
        <ServiceSectionHeader
          eyebrow={eyebrow}
          title={title}
          description={description}
          headingId="emergency-process-heading"
        />

        <div className="relative mt-14 sm:mt-16 lg:mt-20">
          <ProcessTimeline />
          <motion.ol
            className="relative flex flex-col items-center lg:flex-row lg:items-start lg:justify-between lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            aria-label="How our emergency plumbing service works in three steps"
          >
            {EMERGENCY_PROCESS_STEPS.map((step, index) => (
              <ProcessStep
                key={step.number}
                {...step}
                icon={stepIcons[index] ?? CircleCheck}
                index={index}
              />
            ))}
          </motion.ol>
        </div>

        <motion.div
          className="relative mt-16 overflow-hidden rounded-2xl border border-[rgba(21,23,27,0.08)] shadow-[0_8px_32px_rgba(21,23,27,0.06)] sm:mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          <div className="relative aspect-[21/9] min-h-[200px] sm:aspect-[21/8]">
            <Image
              src={EMERGENCY_IMAGES.arrival.src}
              alt={EMERGENCY_IMAGES.arrival.alt}
              fill
              sizes="(max-width: 1320px) 100vw, 1320px"
              loading="lazy"
              quality={80}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-deep-charcoal/70 via-deep-charcoal/30 to-transparent" />
            <div className="absolute inset-0 flex items-center px-6 sm:px-10 lg:px-14">
              <p className="max-w-lg text-[0.95rem] leading-relaxed text-soft-white sm:text-[1.05rem]">
                Every emergency service vehicle arrives stocked with diagnostic
                tools, pipe repair materials, and drain equipment — so your
                licensed plumber can resolve most emergencies in a single visit
                across{" "}
                <Link href="/areas/mckinney-tx" className="font-semibold text-electric-blue-bright underline-offset-2 hover:underline">
                  McKinney
                </Link>
                ,{" "}
                <Link href="/areas/denton-tx" className="font-semibold text-electric-blue-bright underline-offset-2 hover:underline">
                  Denton
                </Link>
                , and{" "}
                <Link href="/areas/rockwall-tx" className="font-semibold text-electric-blue-bright underline-offset-2 hover:underline">
                  Rockwall
                </Link>
                .
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function UrgencySection() {
  const { eyebrow, title, description } = EMERGENCY_SECTIONS.urgency;

  return (
    <section
      className="bg-soft-white py-20 sm:py-24 lg:py-28"
      aria-labelledby="urgency-heading"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-6 lg:px-8">
        <ServiceSectionHeader
          eyebrow={eyebrow}
          title={title}
          description={description}
          headingId="urgency-heading"
        />

        <motion.div
          className="mt-14 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {URGENCY_RISKS.map((risk, index) => {
            const Icon = URGENCY_ICONS[index] ?? AlertTriangle;
            return (
              <motion.article
                key={risk.title}
                variants={itemVariants}
                className="group rounded-xl border border-[rgba(21,23,27,0.08)] bg-white p-6 shadow-[0_2px_8px_rgba(21,23,27,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-electric-blue/20 hover:shadow-[0_12px_40px_rgba(21,23,27,0.08)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-signal-amber/10 text-signal-amber">
                  <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                </div>
                <h3 className="mt-4 text-[1rem] font-semibold text-deep-charcoal">
                  {risk.title}
                </h3>
                <p className="mt-2 text-[0.875rem] leading-relaxed text-cool-gray">
                  {risk.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function ServiceAreasSection() {
  const { eyebrow, title, description } = EMERGENCY_SECTIONS.serviceAreas;

  return (
    <section
      className="bg-white py-20 sm:py-24 lg:py-28"
      aria-labelledby="emergency-service-areas-heading"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-6 lg:px-8">
        <ServiceSectionHeader
          eyebrow={eyebrow}
          title={title}
          description={description}
          headingId="emergency-service-areas-heading"
        />

        <motion.ul
          className="mt-14 grid grid-cols-1 gap-5 sm:mt-16 md:grid-cols-3 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {EMERGENCY_SERVICE_AREAS.map((area) => (
            <motion.li key={area.slug} variants={itemVariants}>
              <Link
                href={`/areas/${area.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-[rgba(21,23,27,0.08)] bg-white shadow-[0_2px_8px_rgba(21,23,27,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-electric-blue/20 hover:shadow-[0_12px_40px_rgba(21,23,27,0.1)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={area.image}
                    alt={area.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                    quality={75}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/40 via-transparent to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-[1.05rem] font-semibold text-deep-charcoal transition-colors group-hover:text-electric-blue">
                    {area.headline}
                  </h3>
                  <p className="mt-2 flex-1 text-[0.875rem] leading-relaxed text-cool-gray">
                    {area.description}
                  </p>
                  <p className="mt-4 text-[0.78rem] font-medium text-electric-blue">
                    {area.note}
                  </p>
                </div>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

function FinalCtaSection() {
  const { eyebrow, headline, description } = EMERGENCY_SECTIONS.finalCta;

  return (
    <section
      className="bg-soft-white py-20 sm:py-24 lg:py-28"
      aria-labelledby="final-cta-heading"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-6 lg:px-8">
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-electric-blue/15 bg-white shadow-[0_8px_40px_rgba(45,140,255,0.08)]"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[220px] lg:min-h-full">
              <Image
                src={EMERGENCY_IMAGES.cta.src}
                alt={EMERGENCY_IMAGES.cta.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
                quality={80}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 lg:bg-gradient-to-l lg:from-transparent lg:to-white" />
            </div>

            <div className="relative z-10 flex flex-col justify-center px-6 py-12 sm:px-10 sm:py-14 lg:px-12 lg:py-16">
              <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-electric-blue/15 bg-electric-blue/[0.06] px-3.5 py-1.5">
                <Zap className="h-3.5 w-3.5 text-electric-blue" strokeWidth={2} aria-hidden />
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-electric-blue">
                  {eyebrow}
                </span>
              </div>

              <h2
                id="final-cta-heading"
                className="text-[2rem] font-bold leading-tight tracking-tight text-deep-charcoal sm:text-[2.25rem]"
              >
                {headline}
              </h2>
              <p className="mt-4 max-w-lg text-[1rem] leading-relaxed text-cool-gray">
                {description}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <motion.a
                  href={`tel:${SITE.phoneTel}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-electric-blue px-7 py-3.5 text-[0.95rem] font-semibold text-white shadow-[0_4px_20px_rgba(45,140,255,0.35)]"
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 22 }}
                >
                  <Phone className="h-4 w-4" strokeWidth={2.25} aria-hidden />
                  Call Now — {SITE.phone}
                </motion.a>
                <motion.a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[rgba(21,23,27,0.08)] bg-white px-7 py-3.5 text-[0.95rem] font-semibold text-deep-charcoal shadow-sm"
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 22 }}
                >
                  Get Free Estimate
                  <ArrowRight className="h-4 w-4" strokeWidth={2.25} aria-hidden />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function EmergencyPlumbingPage() {
  return (
    <>
      <BreadcrumbNav />
      <ServiceHero />
      <EmergencySituationsSection />
      <WhyChooseSection />
      <EmergencySolutionsSection />
      <EmergencyProcessSection />
      <UrgencySection />
      <ServiceAreasSection />
      <FinalCtaSection />
    </>
  );
}
