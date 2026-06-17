"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, MapPin, Phone } from "lucide-react";
import type { Landmark, ServiceArea } from "@/lib/service-areas";
import SiteHeader from "@/components/SiteHeader";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

function ClickableMap({
  area,
}: {
  area: ServiceArea;
}) {
  return (
    <a
      href={area.mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-xl border border-[#EAECEF] shadow-[0_4px_20px_rgba(0,27,68,0.08)] transition-all duration-300 hover:border-[#D6E8FF] hover:shadow-[0_8px_32px_rgba(0,102,255,0.12)]"
      aria-label={`Open ${area.name}, ${area.stateAbbr} in Google Maps`}
    >
      <div className="relative aspect-[4/3] w-full bg-[#E8F2FF]">
        <iframe
          src={area.embedUrl}
          title={`Google Map of ${area.name}, ${area.stateAbbr}`}
          className="pointer-events-none absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <div className="absolute inset-0 bg-[#001B44]/0 transition-colors duration-300 group-hover:bg-[#001B44]/10" />
        <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-lg bg-white px-2.5 py-1.5 text-[0.72rem] font-semibold text-[#001B44] shadow-md">
          <MapPin className="h-3.5 w-3.5 text-[#0066FF]" strokeWidth={2} aria-hidden />
          Maps
        </div>
        <div className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-center gap-2 bg-[#001B44]/90 py-3 text-[0.8rem] font-semibold text-white transition-transform duration-300 group-hover:translate-y-0">
          <ExternalLink className="h-4 w-4" strokeWidth={2} aria-hidden />
          Open in Google Maps
        </div>
      </div>
    </a>
  );
}

function LandmarkList({
  title,
  items,
}: {
  title: string;
  items: Landmark[];
}) {
  return (
    <div className="mt-8">
      <h3 className="text-[1.05rem] font-bold text-[#001B44]">{title}</h3>
      <ul className="mt-4 space-y-4">
        {items.map((item) => (
          <li key={item.name}>
            <a
              href={item.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block transition-colors hover:text-[#0066FF]"
            >
              <p className="text-[0.92rem] font-semibold text-[#0066FF] group-hover:underline">
                {item.name}
              </p>
              <p className="mt-0.5 text-[0.82rem] leading-relaxed text-[#6B7280]">
                {item.detail}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function AreaDetailPage({ area }: { area: ServiceArea }) {
  const heroTitle = `${area.name.toUpperCase()} - ${area.state.toUpperCase()} NEIGHBORHOODS`;

  return (
    <>
      <SiteHeader />

      {/* Hero banner */}
      <section className="relative h-[220px] overflow-hidden sm:h-[260px] lg:h-[300px]">
        <Image
          src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1600&q=80"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#001B44]/75" />
        <div className="absolute inset-0 flex items-center justify-center px-5">
          <motion.h1
            className="max-w-4xl text-center text-[1.35rem] font-bold uppercase leading-tight tracking-wide text-white sm:text-[1.75rem] lg:text-[2.1rem]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: EASE }}
          >
            {heroTitle}
          </motion.h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="border-b border-[#EAECEF] bg-[#FAFBFC]">
        <div className="mx-auto max-w-[1320px] px-5 py-3 sm:px-6 lg:px-8">
          <Link
            href="/#service-areas-heading"
            className="inline-flex items-center gap-1.5 text-[0.82rem] font-medium text-[#0066FF] transition-colors hover:text-[#0052CC]"
          >
            <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
            Back to all service areas
          </Link>
        </div>
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-[1320px] px-5 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_380px] lg:gap-12 xl:grid-cols-[1fr_420px]">
          {/* Left column */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: EASE }}
          >
            <h2 className="text-[2rem] font-bold text-[#001B44] sm:text-[2.25rem]">
              {area.name}
            </h2>
            <p className="mt-2 text-[0.85rem] font-bold uppercase tracking-wide text-[#001B44]">
              ZIP Code: {area.zipCode}
            </p>

            <p className="mt-6 text-[0.95rem] leading-relaxed text-[#4B5563]">
              {area.intro}
            </p>

            <div className="mt-8">
              <h3 className="text-[1.15rem] font-bold text-[#001B44]">
                Population
              </h3>
              <p className="mt-3 text-[0.92rem] leading-relaxed text-[#4B5563]">
                {area.name} has a population of approximately{" "}
                <strong className="text-[#001B44]">{area.population}</strong>{" "}
                people, with a median age of{" "}
                <strong className="text-[#001B44]">{area.medianAge}</strong>{" "}
                years. About{" "}
                <strong className="text-[#001B44]">{area.whiteCollar}</strong>{" "}
                of the workforce is in white-collar jobs, and the average
                household income is{" "}
                <strong className="text-[#001B44]">{area.medianIncome}</strong>.
              </p>
            </div>

            <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-xl border border-[#EAECEF] shadow-[0_8px_30px_rgba(0,27,68,0.08)]">
              <Image
                src="/image.png"
                alt={`FlowRight plumber serving ${area.name}, ${area.stateAbbr}`}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-[58%_center]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001B44]/20 via-transparent to-transparent" />
            </div>

            <div className="mt-10">
              <h3 className="text-[1.15rem] font-bold text-[#001B44]">
                Plumbing Solutions for {area.name}
              </h3>
              <p className="mt-4 text-[0.92rem] leading-relaxed text-[#4B5563]">
                {area.serviceBlurb}{" "}
                Whether you need{" "}
                <Link
                  href="/services/drain-cleaning"
                  className="font-medium text-[#0066FF] hover:underline"
                >
                  drain cleaning
                </Link>
                ,{" "}
                <Link
                  href="/services/sewer-line"
                  className="font-medium text-[#0066FF] hover:underline"
                >
                  sewer repair
                </Link>
                , or emergency pipe repair, FlowRight is your trusted local
                plumber in {area.name}.
              </p>
              <a
                href="tel:8887240474"
                className="mt-5 inline-flex items-center gap-2 text-[0.95rem] font-bold text-[#001B44] transition-colors hover:text-[#0066FF]"
              >
                <Phone className="h-4 w-4" strokeWidth={2} aria-hidden />
                Call (888) 724-0474 for service in {area.name}
              </a>
            </div>

            {/* Mobile map — shown below content on small screens */}
            <div className="mt-10 lg:hidden">
              <ClickableMap area={area} />
            </div>
          </motion.article>

          {/* Right column — sticky sidebar */}
          <motion.aside
            className="lg:sticky lg:top-[88px] lg:self-start"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: EASE }}
          >
            <div className="hidden lg:block">
              <ClickableMap area={area} />
            </div>

            <LandmarkList
              title={`Schools Near ${area.name}`}
              items={area.schools}
            />
            <LandmarkList
              title={`Restaurants Near ${area.name}`}
              items={area.restaurants}
            />

            <motion.a
              href="tel:8887240474"
              className="mt-10 flex w-full items-center justify-center gap-2 rounded-xl bg-[#001B44] px-6 py-3.5 text-[0.9rem] font-bold uppercase tracking-wide text-white shadow-[0_4px_20px_rgba(0,27,68,0.2)]"
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="h-4 w-4" strokeWidth={2} aria-hidden />
              Call Now
            </motion.a>
          </motion.aside>
        </div>
      </div>
    </>
  );
}
