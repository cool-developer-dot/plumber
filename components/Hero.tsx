"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import {
  ChevronDown,
  Phone,
  ArrowRight,
  Star,
  ShieldCheck,
  Award,
  Menu,
  X,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const NAV_LINKS = [
  "Home",
  "Services",
  "Locations",
  "About",
  "Reviews",
  "Contact",
] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: EASE },
  }),
};

function CountUp({
  to,
  decimals = 0,
  duration = 2,
  delay = 0,
  className = "",
}: {
  to: number;
  decimals?: number;
  duration?: number;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const motionValue = useMotionValue(0);
  const formatted = useTransform(motionValue, (latest) => {
    if (decimals > 0) return latest.toFixed(decimals);
    return Math.round(latest).toLocaleString("en-US");
  });
  const [display, setDisplay] = useState(
    decimals > 0 ? (0).toFixed(decimals) : "0",
  );

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(motionValue, to, {
      duration,
      delay,
      ease: EASE,
    });
    return () => controls.stop();
  }, [isInView, to, duration, delay, motionValue]);

  useEffect(() => {
    const unsubscribe = formatted.on("change", (value) => setDisplay(value));
    return unsubscribe;
  }, [formatted]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {display}
    </span>
  );
}

function NavLink({ label }: { label: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href="#"
      className="group relative inline-flex items-center gap-1 rounded-lg px-3 py-2 text-[0.9rem] font-medium text-[#1e3a5f]"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -3, scale: 1.06 }}
      whileTap={{ scale: 0.97, y: 0 }}
      transition={{ type: "spring", stiffness: 420, damping: 22 }}
    >
      {/* Pill glow background */}
      <motion.span
        className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#E8F2FF] via-[#F0F7FF] to-[#E0EDFF]"
        initial={false}
        animate={{
          opacity: hovered ? 1 : 0,
          scale: hovered ? 1 : 0.88,
        }}
        transition={{ duration: 0.28, ease: EASE }}
        style={{ boxShadow: hovered ? "0 4px 16px rgba(0,102,255,0.15)" : "none" }}
      />

      {/* Bottom accent line */}
      <motion.span
        className="absolute -bottom-0.5 left-2 right-2 h-[2.5px] rounded-full bg-gradient-to-r from-[#0066FF] via-[#3399FF] to-[#0066FF]"
        initial={false}
        animate={{
          scaleX: hovered ? 1 : 0,
          opacity: hovered ? 1 : 0,
        }}
        transition={{ duration: 0.32, ease: EASE }}
        style={{ originX: 0.5 }}
      />

      {/* Shimmer sweep */}
      <motion.span
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-lg"
        initial={false}
      >
        <motion.span
          className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/60 to-transparent"
          initial={{ x: "-100%" }}
          animate={{ x: hovered ? "250%" : "-100%" }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
        />
      </motion.span>

      <motion.span
        className="relative z-10"
        animate={{ color: hovered ? "#0066FF" : "#1e3a5f" }}
        transition={{ duration: 0.2 }}
      >
        {label}
      </motion.span>

      {label === "Services" && (
        <motion.span
          className="relative z-10 inline-flex"
          animate={{ rotate: hovered ? 180 : 0, color: hovered ? "#0066FF" : "#6B7280" }}
          transition={{ duration: 0.35, ease: EASE }}
        >
          <ChevronDown className="h-3.5 w-3.5" strokeWidth={2.25} />
        </motion.span>
      )}
    </motion.a>
  );
}

function FlowRightLogo({ className = "" }: { className?: string }) {
  return (
    <motion.a
      href="#"
      className={`group flex items-center gap-2.5 ${className}`}
      aria-label="FlowRight Plumbing home"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      <motion.svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        aria-hidden
        className="shrink-0"
        whileHover={{ rotate: [0, -6, 6, 0] }}
        transition={{ duration: 0.5 }}
      >
        <path
          d="M18 4C12.5 11 8 16.2 8 21.5a10 10 0 1020 0C28 16.2 23.5 11 18 4z"
          fill="#0066FF"
        />
        <path
          d="M18 12c-2.8 3.2-4.5 5.5-4.5 7.8a4.5 4.5 0 109 0c0-2.3-1.7-4.6-4.5-7.8z"
          fill="white"
          opacity="0.35"
        />
        <path
          d="M20.5 14.5a5 5 0 10-5 8.66"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M17 17.5l2 2 3.5-3.5"
          stroke="white"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
      <div className="leading-none">
        <span className="block text-[1.05rem] font-bold tracking-tight text-[#001B44] transition-colors group-hover:text-[#0066FF]">
          FlowRight
        </span>
        <span className="mt-0.5 block text-[0.58rem] font-semibold tracking-[0.22em] text-[#0066FF]">
          PLUMBING
        </span>
      </div>
    </motion.a>
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
      className={`group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg bg-[#001B44] px-5 py-3 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(0,27,68,0.25)] ${className}`}
      whileHover={{
        scale: 1.04,
        y: -2,
        boxShadow: "0 8px 28px rgba(0,27,68,0.35)",
        backgroundColor: "#002a5c",
      }}
      whileTap={{ scale: 0.97, y: 0 }}
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
      className={`inline-flex items-center justify-center gap-2.5 rounded-lg border border-[#E5E7EB] bg-white px-6 py-3.5 text-[0.95rem] font-semibold text-[#001B44] shadow-sm ${className}`}
      whileHover={{
        scale: 1.03,
        y: -2,
        borderColor: "#0066FF",
        boxShadow: "0 6px 20px rgba(0,102,255,0.12)",
        backgroundColor: "#F8FBFF",
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
      className="group flex cursor-default items-start gap-3 rounded-xl px-3 py-2 -mx-3"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay, ease: EASE }}
      whileHover={{
        y: -4,
        backgroundColor: "rgba(0,102,255,0.06)",
        boxShadow: "0 8px 24px rgba(0,102,255,0.08)",
      }}
    >
      <motion.div
        className="mt-0.5 shrink-0"
        whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
        transition={{ duration: 0.45 }}
      >
        {icon}
      </motion.div>
      <div>
        <p className="text-[0.95rem] font-bold text-[#001B44] transition-colors group-hover:text-[#0066FF]">
          {title}
        </p>
        <p className="text-[0.78rem] text-[#9CA3AF]">{subtitle}</p>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-white" aria-label="Hero">
      {/* ─── Navigation ─── */}
      <motion.header
        className="relative z-30 border-b border-transparent"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <div className="mx-auto flex h-[72px] max-w-[1320px] items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
          <FlowRightLogo />

          <nav
            className="hidden items-center gap-6 lg:flex xl:gap-7"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <NavLink key={link} label={link} />
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex lg:gap-5">
            <motion.div
              className="flex items-center gap-2 rounded-xl px-2 py-1.5"
              whileHover={{
                backgroundColor: "rgba(0,102,255,0.06)",
                scale: 1.02,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
            >
              <motion.div
                whileHover={{ rotate: [0, -12, 12, 0] }}
                transition={{ duration: 0.4 }}
              >
                <Phone className="h-4 w-4 shrink-0 text-[#001B44]" strokeWidth={2} />
              </motion.div>
              <div className="leading-tight">
                <a
                  href="tel:8887240474"
                  className="block text-[0.95rem] font-bold text-[#001B44] transition-colors hover:text-[#0066FF]"
                >
                  (888) 724-0474
                </a>
                <span className="block text-[0.68rem] text-[#9CA3AF]">
                  24/7 Emergency Service
                </span>
              </div>
            </motion.div>

            <PrimaryButton className="hidden px-5 py-2.5 md:inline-flex">
              Get Free Estimate
              <motion.span
                className="inline-flex"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
              >
                <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
              </motion.span>
            </PrimaryButton>
          </div>

          <motion.button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#E5E7EB] text-[#001B44] lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            whileHover={{
              scale: 1.05,
              borderColor: "#0066FF",
              backgroundColor: "#F0F7FF",
            }}
            whileTap={{ scale: 0.95 }}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </motion.button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden border-t border-[#E5E7EB] bg-white lg:hidden"
            >
              <nav className="flex flex-col gap-1 px-5 py-4" aria-label="Mobile navigation">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link}
                    href="#"
                    className="rounded-lg px-3 py-2.5 text-[0.95rem] font-medium text-[#1e3a5f]"
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ backgroundColor: "#F0F7FF", x: 4, color: "#001B44" }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link}
                  </motion.a>
                ))}
                <motion.a
                  href="tel:8887240474"
                  className="mt-2 flex items-center gap-2 rounded-lg px-3 py-2.5 font-bold text-[#001B44]"
                  whileHover={{ backgroundColor: "#F0F7FF", x: 4 }}
                >
                  <Phone className="h-4 w-4" />
                  (888) 724-0474
                </motion.a>
                <PrimaryButton className="mt-3 w-full">
                  Get Free Estimate
                  <ArrowRight className="h-4 w-4" />
                </PrimaryButton>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* ─── Hero body ─── */}
      <div className="relative">
        <div
          className="relative mx-auto h-[280px] w-full sm:h-[360px] md:h-[420px] lg:pointer-events-none lg:absolute lg:inset-y-0 lg:right-0 lg:mx-0 lg:h-auto lg:w-[58%] xl:w-[56%]"
          aria-hidden
        >
          <Image
            src="/image.png"
            alt="FlowRight plumber showing a tablet to a homeowner with branded service van and modern home in background"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="object-cover object-[65%_center] sm:object-[60%_center] lg:object-[58%_center]"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, #ffffff 0%, #ffffff 8%, rgba(255,255,255,0.97) 16%, rgba(255,255,255,0.88) 26%, rgba(255,255,255,0.65) 38%, rgba(255,255,255,0.35) 50%, rgba(255,255,255,0.12) 62%, transparent 78%)",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent lg:hidden" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1320px] px-5 pb-6 pt-8 sm:px-6 sm:pt-10 lg:px-8 lg:pb-8 lg:pt-12">
          <div className="max-w-xl lg:max-w-[540px]">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              whileHover={{
                scale: 1.03,
                borderColor: "#0066FF",
                boxShadow: "0 4px 16px rgba(0,102,255,0.1)",
              }}
              className="mb-6 inline-flex cursor-default items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-3.5 py-1.5 transition-shadow"
            >
              <motion.span
                className="h-1.5 w-1.5 rounded-full bg-[#0066FF]"
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden
              />
              <span className="text-[0.68rem] font-semibold tracking-[0.14em] text-[#374151]">
                24/7 EMERGENCY PLUMBING
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-[2.35rem] font-bold leading-[1.08] tracking-tight text-[#001B44] sm:text-[2.75rem] lg:text-[3.35rem]"
            >
              24/7 Emergency
              <br />
              Plumbing Services
              <br />
              <motion.span
                className="inline-block text-[#0066FF]"
                whileHover={{ scale: 1.02, x: 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                Fast. Reliable. Local.
              </motion.span>
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-5 max-w-md text-[1.02rem] leading-relaxed text-[#4B5563] sm:text-[1.05rem]"
            >
              Licensed professionals delivering same-day plumbing solutions with
              quality you can trust.
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <PrimaryButton className="px-6 py-3.5 text-[0.95rem]">
                Get Free Estimate
                <motion.span
                  className="inline-flex"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                >
                  <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
                </motion.span>
              </PrimaryButton>
              <SecondaryButton href="tel:8887240474" className="px-6 py-3.5">
                <Phone className="h-4 w-4" strokeWidth={2.25} />
                Call Now
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
                icon={<Star className="h-5 w-5 fill-[#001B44] text-[#001B44] group-hover:fill-[#0066FF] group-hover:text-[#0066FF] transition-colors" />}
                title={
                  <>
                    <CountUp to={4.9} decimals={1} duration={2} delay={0.2} /> Rating
                  </>
                }
                subtitle={
                  <>
                    From <CountUp to={5000} duration={2.2} delay={0.35} />+ customers
                  </>
                }
              />
              <TrustMetric
                delay={0.1}
                icon={<ShieldCheck className="h-5 w-5 text-[#001B44] group-hover:text-[#0066FF] transition-colors" strokeWidth={2} />}
                title={
                  <>
                    <CountUp to={5000} duration={2.2} delay={0.4} />+
                  </>
                }
                subtitle="Happy Customers"
              />
              <TrustMetric
                delay={0.2}
                icon={<Award className="h-5 w-5 text-[#001B44] group-hover:text-[#0066FF] transition-colors" strokeWidth={2} />}
                title={
                  <>
                    <CountUp to={20} duration={1.8} delay={0.5} />+ Years
                  </>
                }
                subtitle="Experience"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
