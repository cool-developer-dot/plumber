"use client";

import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

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

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Locations", href: "/locations" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

const SERVICE_LINKS = [
  { label: "Emergency Plumbing", href: "/services/emergency-plumbing" },
  { label: "Leak Repair", href: "/services/leak-repair" },
  { label: "Drain Cleaning", href: "/services/drain-cleaning" },
  { label: "Water Heater Services", href: "/services/water-heater" },
  { label: "Pipe Repair", href: "/services/pipe-repair" },
  { label: "Sewer Line Services", href: "/services/sewer-line" },
] as const;

const SOCIAL_LINKS = [
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Twitter", href: "#" },
] as const;

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Sitemap", href: "/sitemap" },
] as const;

const columnVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: EASE },
  }),
};

function FlowRightLogo() {
  return (
    <a
      href="/"
      className="group inline-flex items-center gap-2.5"
      aria-label="FlowRight Plumbing home"
    >
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        aria-hidden
        className="shrink-0 transition-transform duration-300 group-hover:scale-105"
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
      </svg>
      <div className="leading-none">
        <span className="block text-[1.05rem] font-bold tracking-tight text-[#001B44] transition-colors group-hover:text-[#0066FF]">
          FlowRight
        </span>
        <span className="mt-0.5 block text-[0.58rem] font-semibold tracking-[0.22em] text-[#0066FF]">
          PLUMBING
        </span>
      </div>
    </a>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <motion.a
      href={href}
      className="group inline-flex items-center text-[0.875rem] text-[#6B7280] transition-colors hover:text-[#0066FF]"
      whileHover={{ x: 3 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
    >
      <span className="relative">
        {children}
        <span className="absolute -bottom-px left-0 h-px w-0 bg-[#0066FF] transition-all duration-300 group-hover:w-full" />
      </span>
    </motion.a>
  );
}

function FooterColumn({
  title,
  children,
  index,
  className = "",
}: {
  title?: string;
  children: React.ReactNode;
  index: number;
  className?: string;
}) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={columnVariants}
      className={className}
    >
      {title && (
        <h3 className="mb-5 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#001B44]">
          {title}
        </h3>
      )}
      {children}
    </motion.div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-white" role="contentinfo">
      {/* Top gradient divider */}
      <div
        className="h-px w-full bg-gradient-to-r from-transparent via-[#D6E8FF] to-transparent"
        aria-hidden
      />

      <div className="mx-auto max-w-[1320px] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10 xl:gap-12">
          {/* Column 1 — Brand */}
          <FooterColumn index={0} className="lg:col-span-4">
            <FlowRightLogo />
            <p className="mt-5 max-w-xs text-[0.875rem] leading-relaxed text-[#6B7280]">
              Texas&apos;s trusted plumbing experts — delivering fast, reliable,
              and transparent service to homeowners since 2004.
            </p>
            <p className="mt-3 text-[0.8rem] font-medium text-[#001B44]">
              Licensed · Insured · Satisfaction Guaranteed
            </p>

            <div className="mt-6 flex items-center gap-2">
              {SOCIAL_LINKS.map(({ label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#EAECEF] bg-[#FAFBFC] text-[#6B7280] transition-colors hover:border-[#D6E8FF] hover:bg-[#F0F7FF] hover:text-[#0066FF]"
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 22 }}
                >
                  <SocialIcon name={label} />
                </motion.a>
              ))}
            </div>
          </FooterColumn>

          {/* Column 2 — Quick Links */}
          <FooterColumn title="Quick Links" index={1} className="lg:col-span-2">
            <ul className="flex flex-col gap-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </FooterColumn>

          {/* Column 3 — Services */}
          <FooterColumn title="Services" index={2} className="lg:col-span-3">
            <ul className="flex flex-col gap-3">
              {SERVICE_LINKS.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </FooterColumn>

          {/* Column 4 — Contact */}
          <FooterColumn title="Contact" index={3} className="lg:col-span-3">
            <ul className="flex flex-col gap-4">
              <li>
                <motion.a
                  href="tel:8887240474"
                  className="group flex items-start gap-3"
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 28 }}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F4F8FF] text-[#0066FF] transition-colors group-hover:bg-[#0066FF] group-hover:text-white">
                    <Phone className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                  </span>
                  <span>
                    <span className="block text-[0.72rem] font-medium uppercase tracking-wider text-[#9CA3AF]">
                      Phone
                    </span>
                    <span className="mt-0.5 block text-[0.9rem] font-semibold text-[#001B44] group-hover:text-[#0066FF]">
                      (888) 724-0474
                    </span>
                  </span>
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="mailto:info@flowrightplumbing.com"
                  className="group flex items-start gap-3"
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 28 }}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F4F8FF] text-[#0066FF] transition-colors group-hover:bg-[#0066FF] group-hover:text-white">
                    <Mail className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                  </span>
                  <span>
                    <span className="block text-[0.72rem] font-medium uppercase tracking-wider text-[#9CA3AF]">
                      Email
                    </span>
                    <span className="mt-0.5 block text-[0.875rem] font-medium text-[#001B44] group-hover:text-[#0066FF]">
                      info@flowrightplumbing.com
                    </span>
                  </span>
                </motion.a>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F4F8FF] text-[#0066FF]">
                  <MapPin className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                </span>
                <span>
                  <span className="block text-[0.72rem] font-medium uppercase tracking-wider text-[#9CA3AF]">
                    Office
                  </span>
                  <span className="mt-0.5 block text-[0.875rem] leading-relaxed text-[#4B5563]">
                    1200 Commerce Street
                    <br />
                    Dallas, TX 75201
                  </span>
                </span>
              </li>
            </ul>

            <motion.div
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#D6E8FF] bg-[#F0F7FF] px-3.5 py-1.5"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
            >
              <span className="relative flex h-2 w-2" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0066FF] opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#0066FF]" />
              </span>
              <Clock className="h-3.5 w-3.5 text-[#0066FF]" strokeWidth={2} aria-hidden />
              <span className="text-[0.72rem] font-semibold text-[#0066FF]">
                24/7 Emergency Available
              </span>
            </motion.div>
          </FooterColumn>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#EAECEF] bg-[#FAFBFC]">
        <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-4 px-5 py-6 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-center text-[0.8rem] text-[#9CA3AF] sm:text-left">
            &copy; {year} FlowRight Plumbing. All rights reserved.
          </p>
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
    </footer>
  );
}
