"use client";

import { SITE } from "@/lib/site";

/**
 * Premium mobile conversion system combining a floating call button
 * (bottom-left, circular, pulse-animated) and a sticky bottom CTA bar.
 * Mobile-only via CSS media queries — hidden on lg+ screens.
 */
export default function MobileConversion() {
  const phoneTel = SITE.phoneTel;
  const phoneDisplay = SITE.phone;

  return (
    <>
      {/* ==============================
          A. Floating Call Button
             — bottom-left, circular, pulse ring
          ============================== */}
      <div className="floating-call-button" aria-hidden="true">
        <a
          href={`tel:${phoneTel}`}
          className="floating-call-link"
          aria-label={`Call ${phoneDisplay}`}
        >
          {/* Pulse ring */}
          <span className="floating-call-ring" aria-hidden="true" />

          {/* Phone icon */}
          <svg
            viewBox="0 0 24 24"
            className="floating-call-icon"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </a>
      </div>

      {/* ==============================
          B. Sticky Mobile CTA Bar
             — bottom-fixed, premium, high-conversion
          ============================== */}
      <div className="sticky-mobile-cta" aria-hidden="true">
        <a href={`tel:${phoneTel}`} className="sticky-mobile-cta-link">
          <span className="sticky-mobile-cta-label">Call Now</span>
          <span className="sticky-mobile-cta-number">{phoneDisplay}</span>
        </a>
      </div>
    </>
  );
}
