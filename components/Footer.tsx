"use client";

import { memo } from "react";
import Link from "next/link";
import { ArrowRight, Clock, Mail, Phone } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";
import { SERVICE_CITY_CARDS } from "@/lib/service-areas";

function SocialIcon({ name }: { name: string }) {
  const className = "h-4 w-4";
  switch (name) {
    case "Facebook":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
    case "Instagram":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case "Twitter":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    default:
      return null;
  }
}

const QUICK_LINKS = NAV_LINKS;

const SERVICE_LINKS = SERVICES.map((service) => ({
  label: service.title,
  href: service.href,
}));

const SOCIAL_LINKS = Object.entries(SITE.social)
  .filter((entry): entry is [string, string] => Boolean(entry[1]))
  .map(([key, href]) => ({
    label: key.charAt(0).toUpperCase() + key.slice(1),
    href,
  }));

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Sitemap", href: "/sitemap.xml" },
] as const;

const TRUST_BADGES = [
  "Licensed & Insured",
  "Flat-Rate Pricing",
  "Satisfaction Guaranteed",
] as const;

function Logo() {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-3"
      aria-label="Precision Plumbing Texas home"
    >
      <svg
        width="40"
        height="40"
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
        <span className="block text-[1.1rem] font-bold tracking-tight text-soft-white transition-colors group-hover:text-electric-blue-bright">
          Precision
        </span>
        <span className="mt-1 block text-[0.6rem] font-semibold tracking-[0.24em] text-electric-blue">
          PLUMBING TEXAS
        </span>
      </div>
    </Link>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const isInternal = href.startsWith("/") && !href.startsWith("//");

  const className =
    "text-[0.875rem] leading-relaxed text-metallic-silver transition-colors duration-200 hover:text-soft-white";

  if (isInternal) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="mb-5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-electric-blue">
        {title}
      </h3>
      {children}
    </div>
  );
}

function ContactPanel() {
  return (
    <div className="overflow-hidden rounded-2xl border border-soft-white/[0.08] bg-gradient-to-br from-rich-navy/80 via-deep-navy-tint/60 to-deep-charcoal shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
      <div className="border-b border-soft-white/[0.06] px-6 py-5 sm:px-7">
        <div className="flex items-center justify-between gap-4">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-electric-blue">
            Get In Touch
          </p>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-electric-blue/25 bg-electric-blue/[0.08] px-2.5 py-1">
            <span className="relative flex h-1.5 w-1.5" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-electric-blue opacity-50" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-electric-blue" />
            </span>
            <span className="text-[0.65rem] font-semibold uppercase tracking-wide text-electric-blue-bright">
              24/7 Available
            </span>
          </span>
        </div>
      </div>

      <div className="space-y-5 px-6 py-6 sm:px-7 sm:py-7">
        <a
          href={`tel:${SITE.phoneTel}`}
          className="group block rounded-xl border border-electric-blue/20 bg-electric-blue/[0.08] px-5 py-4 transition-all duration-200 hover:border-electric-blue/40 hover:bg-electric-blue/[0.12]"
        >
          <span className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-metallic-silver">
            <Phone className="h-3.5 w-3.5 text-electric-blue" strokeWidth={2} aria-hidden />
            Call Now
          </span>
          <span className="mt-2 block whitespace-nowrap text-[1.35rem] font-bold tracking-tight text-soft-white tabular-nums transition-colors group-hover:text-electric-blue-bright sm:text-[1.5rem]">
            {SITE.phone}
          </span>
        </a>

        <a
          href={`mailto:${SITE.email}`}
          className="group flex items-center gap-3 rounded-xl px-1 py-1 transition-colors hover:text-electric-blue-bright"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-soft-white/[0.08] bg-white/[0.04] text-electric-blue transition-colors group-hover:border-electric-blue/25 group-hover:bg-electric-blue/[0.1]">
            <Mail className="h-4 w-4" strokeWidth={1.75} aria-hidden />
          </span>
          <span className="min-w-0">
            <span className="block text-[0.68rem] font-medium uppercase tracking-wider text-cool-gray">
              Email
            </span>
            <span className="mt-0.5 block truncate text-[0.9rem] font-medium text-soft-white transition-colors group-hover:text-electric-blue-bright">
              {SITE.email}
            </span>
          </span>
        </a>

        <div className="flex items-center gap-3 px-1">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-soft-white/[0.08] bg-white/[0.04] text-electric-blue">
            <Clock className="h-4 w-4" strokeWidth={1.75} aria-hidden />
          </span>
          <span>
            <span className="block text-[0.68rem] font-medium uppercase tracking-wider text-cool-gray">
              Hours
            </span>
            <span className="mt-0.5 block text-[0.9rem] font-medium text-soft-white">
              Emergency service, 24 hours a day
            </span>
          </span>
        </div>

        <a
          href={`tel:${SITE.phoneTel}`}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-electric-blue px-5 py-3.5 text-[0.9rem] font-semibold text-white shadow-[0_4px_20px_rgba(45,140,255,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-electric-blue-bright hover:shadow-[0_8px_28px_rgba(45,140,255,0.45)] active:translate-y-0"
        >
          Request Service
          <ArrowRight className="h-4 w-4" strokeWidth={2.25} aria-hidden />
        </a>
      </div>
    </div>
  );
}

export default memo(function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-deep-charcoal">
      <div
        className="h-px w-full bg-gradient-to-r from-transparent via-electric-blue/25 to-transparent"
        aria-hidden
      />

      <div className="mx-auto max-w-[1320px] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {/* Brand + Contact */}
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start lg:gap-16 xl:gap-20">
          <div className="max-w-lg">
            <Logo />
            <p className="mt-6 text-[0.95rem] leading-[1.75] text-metallic-silver">
              North Texas&apos;s trusted plumbing partner since {SITE.foundingYear}.
              Licensed technicians, upfront flat-rate pricing, and live arrival
              tracking on every visit.
            </p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {TRUST_BADGES.map((badge) => (
                <li
                  key={badge}
                  className="rounded-full border border-soft-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-[0.72rem] font-medium text-metallic-silver"
                >
                  {badge}
                </li>
              ))}
            </ul>

            {SOCIAL_LINKS.length > 0 ? (
              <div className="mt-8 flex items-center gap-2.5">
                {SOCIAL_LINKS.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-soft-white/[0.08] bg-white/[0.03] text-metallic-silver transition-all duration-200 hover:-translate-y-0.5 hover:border-electric-blue/25 hover:bg-electric-blue/[0.1] hover:text-electric-blue-bright"
                  >
                    <SocialIcon name={label} />
                  </a>
                ))}
              </div>
            ) : null}
          </div>

          <ContactPanel />
        </div>

        {/* Navigation columns */}
        <div className="mt-16 grid gap-10 border-t border-soft-white/[0.06] pt-14 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-12 lg:pt-16">
          <FooterColumn title="Quick Links">
            <ul className="flex flex-col gap-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Service Areas">
            <ul className="flex flex-col gap-3">
              {SERVICE_CITY_CARDS.map((area) => (
                <li key={area.slug}>
                  <FooterLink href={`/areas/${area.slug}`}>
                    {area.name}, {area.stateAbbr}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Services">
            <ul className="flex flex-col gap-3 sm:col-span-2 lg:col-span-1">
              {SERVICE_LINKS.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </FooterColumn>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-soft-white/[0.06] bg-[#101216]">
        <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-4 px-5 py-6 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-center text-[0.8rem] text-cool-gray sm:text-left">
            &copy; {year} {SITE.name}. All rights reserved.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-8">
            <a
              href={`tel:${SITE.phoneTel}`}
              className="hidden whitespace-nowrap text-[0.85rem] font-semibold text-metallic-silver transition-colors hover:text-electric-blue-bright sm:inline-flex sm:items-center sm:gap-2"
            >
              <Phone className="h-3.5 w-3.5 text-electric-blue" strokeWidth={2} aria-hidden />
              {SITE.phone}
            </a>

            <nav aria-label="Legal navigation">
              <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                {LEGAL_LINKS.map((link) => (
                  <li key={link.label}>
                    <FooterLink href={link.href}>{link.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
});
