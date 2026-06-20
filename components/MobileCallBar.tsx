"use client";

import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export default function MobileCallBar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 lg:hidden">
      {/* Floating call button — sits above sticky bar */}
      <a
        href={`tel:${SITE.phoneTel}`}
        aria-label={`Call ${SITE.phone}`}
        className="pointer-events-auto absolute bottom-[calc(4.75rem+env(safe-area-inset-bottom))] right-4 flex h-14 w-14 items-center justify-center rounded-full bg-electric-blue text-white shadow-[0_8px_32px_rgba(45,140,255,0.45)] ring-4 ring-white/10"
      >
        <span
          className="absolute inset-0 rounded-full bg-electric-blue opacity-45"
          aria-hidden
        />
        <Phone className="relative h-6 w-6" strokeWidth={2.25} aria-hidden />
      </a>

      {/* Sticky bottom call bar */}
      <div className="pointer-events-auto border-t border-electric-blue/20 bg-deep-charcoal/95 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur-md">
        <a
          href={`tel:${SITE.phoneTel}`}
          className="flex w-full items-center justify-center gap-3 rounded-xl bg-electric-blue px-5 py-3.5 text-white shadow-[0_4px_24px_rgba(45,140,255,0.4)]"
        >
          <Phone className="h-5 w-5 shrink-0" strokeWidth={2.25} aria-hidden />
          <span className="flex flex-col items-start leading-tight">
            <span className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-white/90">
              Call Now
            </span>
            <span className="text-[1.05rem] font-bold tracking-tight">
              {SITE.phone}
            </span>
          </span>
        </a>
      </div>
    </div>
  );
}
