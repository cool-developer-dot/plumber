"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, Phone, X } from "lucide-react";
import DesktopNavLink from "@/components/DesktopNavLink";
import { NAV_LINKS, SITE } from "@/lib/site";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-2.5">
      {/* Precision Mark — geometric pipe-fitting monogram */}
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-electric-blue text-white shadow-sm transition-transform group-hover:scale-105">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M4 20L12 4L20 20" />
          <path d="M8 14L16 14" />
        </svg>
      </div>
      <div className="leading-tight">
        <span className="block text-[1.05rem] font-bold text-deep-charcoal">
          Precision
        </span>
        <span className="block text-[0.65rem] font-medium uppercase tracking-wider text-cool-gray">
          Plumbing Texas
        </span>
      </div>
    </Link>
  );
}

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[rgba(183,188,196,0.2)] bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[1320px] items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
        <Logo />

        <nav
          className="hidden items-center gap-5 lg:flex xl:gap-6"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <DesktopNavLink
              key={link.label}
              href={link.href}
              className="text-[0.88rem] font-medium"
            >
              {link.label}
            </DesktopNavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={`tel:${SITE.phoneTel}`}
            className="flex items-center gap-2 text-deep-charcoal transition-colors hover:text-electric-blue"
          >
            <Phone className="h-4 w-4" strokeWidth={2} aria-hidden />
            <span className="text-[0.9rem] font-bold">{SITE.phone}</span>
          </a>
          <motion.a
            href={`tel:${SITE.phoneTel}`}
            className="inline-flex items-center gap-2 rounded-xl bg-electric-blue px-5 py-2.5 text-[0.88rem] font-semibold text-white shadow-sm"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Book Your Service
            <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
          </motion.a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[rgba(21,23,27,0.08)] text-deep-charcoal lg:hidden"
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
            className="overflow-hidden border-t border-[rgba(183,188,196,0.2)] bg-white lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-5 py-4" aria-label="Mobile navigation">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-lg px-3 py-2.5 text-[0.95rem] font-medium text-deep-navy-tint hover:bg-[rgba(45,140,255,0.06)] hover:text-electric-blue"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`tel:${SITE.phoneTel}`}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-electric-blue px-4 py-3 text-[0.9rem] font-semibold text-white"
              >
                <Phone className="h-4 w-4" strokeWidth={2} aria-hidden />
                {SITE.phone}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
