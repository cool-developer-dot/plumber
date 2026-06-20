"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/site";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  ArrowRight,
  Star,
  ShieldCheck,
  Award,
  Menu,
  X,
} from "lucide-react";
import CountUp from "@/components/ui/CountUp";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: EASE },
  }),
};

function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group flex items-center gap-2.5 ${className}`}
      aria-label="Precision Plumbing Texas home"
    >
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        aria-hidden
        className="shrink-0 transition-transform duration-300 group-hover:scale-105"
      >
        <rect x="2" y="2" width="32" height="32" rx="8" fill="#2D8CFF" />
        <path
          d="M10 28L18 8L26 28"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13 21L23 21"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="18" cy="18" r="2" fill="white" fillOpacity="0.3" />
      </svg>
      <div className="leading-none">
        <span className="block text-[1.05rem] font-bold tracking-tight text-soft-white transition-colors group-hover:text-electric-blue-bright">
          Precision
        </span>
        <span className="mt-0.5 block text-[0.58rem] font-semibold tracking-[0.22em] text-electric-blue">
          PLUMBING TEXAS
        </span>
      </div>
    </Link>
  );
}

function PrimaryButton({
  children,
  className = "",
  href = "#",
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
}) {
  return (
    <motion.a
      href={href}
      className={`group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg bg-electric-blue px-5 py-3 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(45,140,255,0.35)] ${className}`}
      whileHover={{
        scale: 1.04,
        y: -2,
        boxShadow: "0 8px 28px rgba(45,140,255,0.45)",
      }}
      whileTap={{ scale: 0.97, y: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.a>
  );
}

function SecondaryButton({
  children,
  href = "#",
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <motion.a
      href={href}
      className={`inline-flex items-center justify-center gap-2.5 rounded-lg border border-soft-white/20 bg-white/10 px-6 py-3.5 text-[0.95rem] font-semibold text-soft-white backdrop-blur-sm ${className}`}
      whileHover={{
        scale: 1.03,
        y: -2,
        borderColor: "#4FA0FF",
        boxShadow: "0 6px 20px rgba(45,140,255,0.15)",
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
    >
      {children}
    </motion.a>
  );
}

function TrustMetric({
  icon,
  title,
  subtitle,
  delay = 0,
}: {
  icon: React.ReactNode;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      className="flex cursor-default items-start gap-3 rounded-xl px-3 py-2 -mx-3"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay, ease: EASE }}
    >
      <div className="mt-0.5 shrink-0">{icon}</div>
      <div>
        <p className="text-[0.95rem] font-bold text-soft-white">{title}</p>
        <p className="text-[0.78rem] text-metallic-silver">{subtitle}</p>
      </div>
    </motion.div>
  );
}

function HeroNavigation({
  mobileOpen,
  setMobileOpen,
}: {
  mobileOpen: boolean;
  setMobileOpen: (v: boolean) => void;
}) {
  return (
    <motion.header
      className="sticky top-0 z-40 border-b border-soft-white/[0.06] bg-deep-charcoal/95 backdrop-blur-md"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: EASE }}
    >
      <div className="mx-auto flex h-[72px] max-w-[1320px] items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
        <Logo />

        <nav
          className="hidden items-center gap-6 lg:flex xl:gap-7"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative inline-flex items-center gap-1 rounded-lg px-3 py-2 text-[0.9rem] font-medium text-soft-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex lg:gap-5">
          <div className="flex items-center gap-2 rounded-xl px-2 py-1.5">
            <Phone
              className="h-4 w-4 shrink-0 text-electric-blue"
              strokeWidth={2}
            />
            <div className="leading-tight">
              <a
                href={`tel:${SITE.phoneTel}`}
                className="block text-[0.95rem] font-bold text-soft-white transition-colors hover:text-electric-blue-bright"
              >
                {SITE.phone}
              </a>
              <span className="block text-[0.68rem] text-metallic-silver">
                24/7 Emergency Service
              </span>
            </div>
          </div>

          <PrimaryButton className="hidden px-5 py-2.5 md:inline-flex">
            Book Your Service
            <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
          </PrimaryButton>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`tel:${SITE.phoneTel}`}
            className="inline-flex items-center gap-2 rounded-xl bg-electric-blue px-3 py-2 text-white shadow-[0_4px_16px_rgba(45,140,255,0.35)]"
            aria-label={`Call ${SITE.phone}`}
          >
            <Phone className="h-4 w-4 shrink-0" strokeWidth={2.25} />
            <span className="text-[0.82rem] font-bold leading-none">
              {SITE.phone}
            </span>
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-soft-white/[0.12] text-soft-white"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-soft-white/[0.06] bg-deep-charcoal lg:hidden"
          >
            <nav
              className="flex flex-col gap-1 px-5 py-4"
              aria-label="Mobile navigation"
            >
              <a
                href={`tel:${SITE.phoneTel}`}
                className="mb-2 flex items-center justify-center gap-2.5 rounded-xl bg-electric-blue px-4 py-3.5 text-[0.95rem] font-bold text-white"
              >
                <Phone className="h-4 w-4" strokeWidth={2.25} />
                Call Now — {SITE.phone}
              </a>
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-lg px-3 py-2.5 text-[0.95rem] font-medium text-soft-white/80 transition-colors hover:bg-white/[0.06] hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <PrimaryButton
                href={`tel:${SITE.phoneTel}`}
                className="mt-3 w-full"
              >
                Call Now — {SITE.phone}
                <ArrowRight className="h-4 w-4" />
              </PrimaryButton>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default function Hero() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-deep-charcoal" aria-label="Hero">
      {/* Ambient gradient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-electric-blue/[0.04] blur-3xl" />
        <div className="absolute -right-24 top-1/3 h-[400px] w-[400px] rounded-full bg-electric-blue/[0.03] blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-[300px] w-[300px] rounded-full bg-rich-navy/50 blur-3xl" />
      </div>

      <HeroNavigation mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      {/* Hero body */}
      <div className="relative">
        <div
          className="relative mx-auto h-[280px] w-full sm:h-[360px] md:h-[420px] lg:pointer-events-none lg:absolute lg:inset-y-0 lg:right-0 lg:mx-0 lg:h-auto lg:w-[58%] xl:w-[56%]"
          aria-hidden
        >
          <Image
            src="/image.webp"
            alt="Precision Plumbing Texas technician with branded uniform and vehicle"
            fill
            priority
            fetchPriority="high"
            sizes="(max-width: 1024px) 100vw, 58vw"
            quality={80}
            className="object-cover object-[65%_center] sm:object-[60%_center] lg:object-[58%_center]"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, #15171B 0%, #15171B 8%, rgba(21,23,27,0.97) 16%, rgba(21,23,27,0.88) 26%, rgba(21,23,27,0.65) 38%, rgba(21,23,27,0.35) 50%, rgba(21,23,27,0.12) 62%, transparent 78%)",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-deep-charcoal to-transparent lg:hidden" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1320px] px-5 pb-6 pt-8 sm:px-6 sm:pt-10 lg:px-8 lg:pb-8 lg:pt-12">
          <div className="max-w-xl lg:max-w-[540px]">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mb-6 inline-flex cursor-default items-center gap-2 rounded-full border border-soft-white/[0.12] bg-white/[0.06] px-3.5 py-1.5 backdrop-blur-sm"
            >
              <span
                className="h-1.5 w-1.5 rounded-full bg-electric-blue"
                aria-hidden
              />
              <span className="text-[0.68rem] font-semibold tracking-[0.14em] text-metallic-silver">
                MCKINNEY · DENTON · ROCKWALL
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-[2.35rem] font-bold leading-[1.08] tracking-tight text-soft-white sm:text-[2.75rem] lg:text-[3.35rem]"
            >
              Premium Plumbing,
              <br />
              On Your Schedule.
              <br />
              <span className="inline-block text-electric-blue">
                Flat-Rate. Licensed. Guaranteed.
              </span>
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-5 max-w-md text-[1.02rem] leading-relaxed text-metallic-silver sm:text-[1.05rem]"
            >
              Flat-rate upfront pricing. Licensed, background-checked
              technicians. Live arrival tracking. From emergency repairs to
              premium installations — one call.
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <PrimaryButton className="px-6 py-3.5 text-[0.95rem]">
                Book Your Service
                <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
              </PrimaryButton>
              <SecondaryButton
                href={`tel:${SITE.phoneTel}`}
                className="px-6 py-3.5"
              >
                <Phone className="h-4 w-4" strokeWidth={2.25} />
                Call Now — Available 24/7
              </SecondaryButton>
            </motion.div>

            {/* Trust metrics */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-10 flex flex-col gap-6 pb-8 pt-2 sm:flex-row sm:items-start sm:gap-8 lg:mt-12 lg:gap-10 lg:pb-12"
            >
              <TrustMetric
                delay={0}
                icon={
                  <Star className="h-5 w-5 fill-electric-blue text-electric-blue" />
                }
                title={
                  <>
                    <CountUp to={4.9} decimals={1} duration={2} delay={0.2} />{" "}
                    Rating
                  </>
                }
                subtitle={
                  <>
                    From <CountUp to={5000} duration={2.2} delay={0.35} />+
                    customers
                  </>
                }
              />
              <TrustMetric
                delay={0.1}
                icon={
                  <ShieldCheck
                    className="h-5 w-5 text-electric-blue"
                    strokeWidth={2}
                  />
                }
                title={
                  <>
                    <CountUp to={5000} duration={2.2} delay={0.4} />+
                  </>
                }
                subtitle="Happy Customers"
              />
              <TrustMetric
                delay={0.2}
                icon={
                  <Award
                    className="h-5 w-5 text-electric-blue"
                    strokeWidth={2}
                  />
                }
                title={
                  <>
                    <CountUp to={20} duration={1.8} delay={0.5} />+ Years
                  </>
                }
                subtitle="Texas Experience"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
