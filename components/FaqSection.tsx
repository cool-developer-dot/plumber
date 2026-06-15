"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Clock,
  Flame,
  MapPin,
  MessageCircle,
  Phone,
  Receipt,
  ShieldCheck,
  Zap,
  type LucideIcon,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const FAQ_ITEMS = [
  {
    question: "How quickly can you arrive?",
    answer:
      "For emergency calls, our average response time is under 60 minutes. Same-day appointments are available for non-emergency services, and we always provide an estimated arrival window when you book.",
    icon: Clock,
  },
  {
    question: "Do you offer 24/7 emergency plumbing?",
    answer:
      "Yes. Our emergency plumbing team is available 24 hours a day, 7 days a week — including holidays. Call us anytime and a licensed technician will be dispatched to your location.",
    icon: Zap,
  },
  {
    question: "Are your plumbers licensed and insured?",
    answer:
      "Every technician on our team is fully licensed, bonded, and insured. We conduct background checks and ongoing training to ensure the highest standard of professional service.",
    icon: ShieldCheck,
  },
  {
    question: "What areas do you serve?",
    answer:
      "We proudly serve Dallas, Houston, Austin, Fort Worth, Plano, Arlington, and surrounding communities throughout the greater Texas metro areas.",
    icon: MapPin,
  },
  {
    question: "Do you provide upfront pricing?",
    answer:
      "Absolutely. We provide clear, written estimates before any work begins. You'll know exactly what to expect — no hidden fees, no surprise charges on your final bill.",
    icon: Receipt,
  },
  {
    question: "Do you install water heaters?",
    answer:
      "Yes. We install, repair, and maintain all major water heater brands — tank and tankless. Our team will help you choose the right unit for your home and handle the full installation.",
    icon: Flame,
  },
] as const;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

function ToggleIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <motion.span
      className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
      animate={{ backgroundColor: isOpen ? "#0066FF" : "#F4F8FF" }}
      transition={{ duration: 0.3, ease: EASE }}
      aria-hidden
    >
      <motion.span
        className="absolute h-[2px] w-3.5 rounded-full"
        animate={{ backgroundColor: isOpen ? "#FFFFFF" : "#0066FF" }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className="absolute h-3.5 w-[2px] rounded-full"
        animate={{
          scaleY: isOpen ? 0 : 1,
          backgroundColor: isOpen ? "#FFFFFF" : "#0066FF",
        }}
        transition={{ duration: 0.25, ease: EASE }}
      />
    </motion.span>
  );
}

function FaqCard({
  question,
  answer,
  icon: Icon,
  isOpen,
  onToggle,
  index,
}: {
  question: string;
  answer: string;
  icon: LucideIcon;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: EASE }}
      layout
    >
      <motion.article
        layout
        className={`group relative overflow-hidden rounded-2xl border transition-shadow duration-300 ${
          isOpen
            ? "border-[#D6E8FF] bg-white shadow-[0_8px_32px_rgba(0,102,255,0.1)]"
            : "border-[#EAECEF] bg-white/80 shadow-[0_2px_8px_rgba(0,27,68,0.03)] hover:border-[#D6E8FF] hover:shadow-[0_4px_20px_rgba(0,27,68,0.06)]"
        }`}
      >
        {/* Active left accent */}
        <motion.div
          className="absolute inset-y-0 left-0 w-1 rounded-l-2xl bg-[#0066FF]"
          initial={false}
          animate={{ scaleY: isOpen ? 1 : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3, ease: EASE }}
          style={{ originY: 0.5 }}
          aria-hidden
        />

        {/* Subtle open glow */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#F0F7FF]/80 via-transparent to-transparent"
              aria-hidden
            />
          )}
        </AnimatePresence>

        <h3 className="relative z-10">
          <button
            type="button"
            onClick={onToggle}
            aria-expanded={isOpen}
            className="flex w-full items-start gap-4 p-5 text-left sm:gap-5 sm:p-6"
          >
            {/* Number + icon cluster */}
            <div className="flex shrink-0 flex-col items-center gap-2">
              <span
                className={`text-[0.65rem] font-bold tracking-widest transition-colors duration-300 ${
                  isOpen ? "text-[#0066FF]" : "text-[#C5D5E8]"
                }`}
                aria-hidden
              >
                {number}
              </span>
              <motion.div
                className="flex h-10 w-10 items-center justify-center rounded-xl border"
                animate={{
                  borderColor: isOpen ? "#D6E8FF" : "#EAECEF",
                  backgroundColor: isOpen ? "#E8F2FF" : "#FAFBFC",
                }}
                transition={{ duration: 0.3 }}
              >
                <Icon
                  className={`h-4 w-4 transition-colors duration-300 ${
                    isOpen ? "text-[#0066FF]" : "text-[#6B7280]"
                  }`}
                  strokeWidth={1.75}
                  aria-hidden
                />
              </motion.div>
            </div>

            <div className="min-w-0 flex-1 pt-0.5">
              <span
                className={`block text-[0.95rem] font-semibold leading-snug transition-colors duration-300 sm:text-[1rem] ${
                  isOpen ? "text-[#0066FF]" : "text-[#001B44] group-hover:text-[#0066FF]"
                }`}
              >
                {question}
              </span>
            </div>

            <div className="pt-0.5">
              <ToggleIcon isOpen={isOpen} />
            </div>
          </button>
        </h3>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="answer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.38, ease: EASE }}
              className="relative z-10 overflow-hidden"
            >
              <div className="border-t border-[#F0F4F8] px-5 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pl-[5.5rem]">
                <p className="text-[0.875rem] leading-[1.7] text-[#4B5563]">
                  {answer}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.article>
    </motion.div>
  );
}

function SidebarPanel() {
  return (
    <motion.aside
      className="lg:sticky lg:top-28 lg:self-start"
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      <p className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#0066FF]">
        Frequently Asked Questions
      </p>
      <h2
        id="faq-heading"
        className="text-[1.85rem] font-bold leading-[1.15] tracking-tight text-[#001B44] sm:text-[2.25rem] lg:text-[2.4rem]"
      >
        Answers To Common Plumbing Questions
      </h2>
      <p className="mt-4 text-[0.95rem] leading-relaxed text-[#6B7280]">
        Everything you need to know before booking — clear answers from our
        team, no jargon.
      </p>

      {/* Mini stat pills */}
      <div className="mt-8 flex flex-wrap gap-2">
        {["24/7 Support", "Licensed Pros", "Upfront Pricing"].map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-[#E8F2FF] bg-[#F4F8FF] px-3 py-1 text-[0.72rem] font-semibold text-[#0066FF]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Contact card */}
      <motion.div
        className="mt-10 overflow-hidden rounded-2xl border border-[#EAECEF] bg-white p-5 shadow-[0_4px_20px_rgba(0,27,68,0.05)]"
        whileHover={{ y: -2, boxShadow: "0 8px 28px rgba(0,27,68,0.08)" }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
      >
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F4F8FF] text-[#0066FF]">
            <MessageCircle className="h-5 w-5" strokeWidth={1.75} aria-hidden />
          </div>
          <div>
            <p className="text-[0.9rem] font-semibold text-[#001B44]">
              Still have questions?
            </p>
            <p className="mt-0.5 text-[0.8rem] text-[#9CA3AF]">
              Our team is happy to help — 24/7.
            </p>
          </div>
        </div>
        <motion.a
          href="tel:8887240474"
          className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-[#001B44] px-4 py-2.5 text-[0.85rem] font-semibold text-white"
          whileHover={{ scale: 1.02, backgroundColor: "#002a5c" }}
          whileTap={{ scale: 0.98 }}
        >
          <Phone className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
          (888) 724-0474
        </motion.a>
      </motion.div>
    </motion.aside>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
      aria-labelledby="faq-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Background texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #E8F2FF 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-[#0066FF]/[0.04] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-[#0066FF]/[0.03] blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-16 xl:gap-20">
          <SidebarPanel />

          <div className="flex flex-col gap-3 sm:gap-3.5">
            {FAQ_ITEMS.map((item, i) => (
              <FaqCard
                key={item.question}
                question={item.question}
                answer={item.answer}
                icon={item.icon}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
