"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, Phone, X } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services-heading" },
  { label: "Locations", href: "/#service-areas-heading" },
  { label: "About", href: "/#why-choose-heading" },
  { label: "Reviews", href: "/#testimonials-heading" },
  { label: "Contact", href: "/contact" },
] as const;

function FlowRightLogo() {
  return (
    <Link href="/" className="group flex items-center gap-2.5">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#001B44] text-white shadow-sm transition-transform group-hover:scale-105">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
          <path d="M12 2C9.5 2 7.5 3.5 6.5 5.5c-1 2-1 4.5 0 6.5L12 22l5.5-10c1-2 1-4.5 0-6.5C16.5 3.5 14.5 2 12 2zm0 6a2 2 0 110 4 2 2 0 010-4z" />
        </svg>
      </div>
      <div className="leading-tight">
        <span className="block text-[1.05rem] font-bold text-[#001B44]">
          FlowRight
        </span>
        <span className="block text-[0.65rem] font-medium uppercase tracking-wider text-[#9CA3AF]">
          Plumbing
        </span>
      </div>
    </Link>
  );
}

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#EAECEF] bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[1320px] items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
        <FlowRightLogo />

        <nav
          className="hidden items-center gap-5 lg:flex xl:gap-6"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[0.88rem] font-medium text-[#1e3a5f] transition-colors hover:text-[#0066FF]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="tel:8887240474"
            className="flex items-center gap-2 text-[#001B44] transition-colors hover:text-[#0066FF]"
          >
            <Phone className="h-4 w-4" strokeWidth={2} aria-hidden />
            <span className="text-[0.9rem] font-bold">(888) 724-0474</span>
          </a>
          <motion.a
            href="tel:8887240474"
            className="inline-flex items-center gap-2 rounded-xl bg-[#001B44] px-5 py-2.5 text-[0.88rem] font-semibold text-white shadow-sm"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Free Estimate
            <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
          </motion.a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#E5E7EB] text-[#001B44] lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="overflow-hidden border-t border-[#EAECEF] bg-white lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-5 py-4" aria-label="Mobile navigation">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-lg px-3 py-2.5 text-[0.95rem] font-medium text-[#1e3a5f] hover:bg-[#F0F7FF] hover:text-[#0066FF]"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:8887240474"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#001B44] px-4 py-3 text-[0.9rem] font-semibold text-white"
              >
                <Phone className="h-4 w-4" strokeWidth={2} aria-hidden />
                (888) 724-0474
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
