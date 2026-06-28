import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import MobileConversion from "@/components/MobileConversion";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { SERVICES } from "@/lib/services";
import { SERVICE_CITY_CARDS } from "@/lib/service-areas";
import { buildPageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

const PAGE_PATH = "/contact";

export const metadata: Metadata = buildPageMetadata({
  title: `Contact ${SITE.name} | Schedule Plumbing Service in McKinney, Denton & Rockwall TX`,
  description: `Contact ${SITE.name} for emergency plumbing, leak repair, drain cleaning, water heater service, and same-day appointments in McKinney, Denton, and Rockwall, Texas. Call ${SITE.phone} or email ${SITE.email}.`,
  path: PAGE_PATH,
  keywords: [
    "contact plumber McKinney TX",
    "contact plumber Denton TX",
    "contact plumber Rockwall TX",
    "schedule plumbing service",
    "emergency plumber phone number",
  ],
});

const BREADCRUMB_ITEMS = [
  { name: "Home", url: SITE.url },
  { name: "Contact", url: `${SITE.url}${PAGE_PATH}` },
] as const;

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd items={BREADCRUMB_ITEMS} />
      <SiteHeader />
      <main
        id="main-content"
        className="pb-[calc(6.5rem+env(safe-area-inset-bottom))] lg:pb-0"
      >
        <section className="border-b border-[rgba(21,23,27,0.08)] bg-soft-white py-3">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-1.5 text-[0.82rem]">
                <li>
                  <Link href="/" className="font-medium text-cool-gray hover:text-electric-blue">
                    Home
                  </Link>
                </li>
                <li className="text-cool-gray/50" aria-hidden>
                  /
                </li>
                <li>
                  <span className="font-medium text-deep-charcoal" aria-current="page">
                    Contact
                  </span>
                </li>
              </ol>
            </nav>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-electric-blue">
                  Contact Us
                </p>
                <h1 className="mt-3 text-[2rem] font-bold tracking-tight text-deep-charcoal sm:text-[2.5rem]">
                  Schedule Plumbing Service
                </h1>
                <p className="mt-5 max-w-xl text-[1rem] leading-relaxed text-cool-gray">
                  Reach our licensed dispatch team for emergency plumbing, same-day
                  repairs, and scheduled service across McKinney, Denton, and
                  Rockwall. We provide upfront pricing before work begins.
                </p>

                <ul className="mt-8 space-y-5">
                  <li>
                    <a
                      href={`tel:${SITE.phoneTel}`}
                      className="flex items-start gap-3 rounded-xl border border-[rgba(21,23,27,0.08)] p-4 transition-colors hover:border-electric-blue/20"
                    >
                      <Phone className="mt-0.5 h-5 w-5 text-electric-blue" strokeWidth={2} aria-hidden />
                      <span>
                        <span className="block text-[0.75rem] font-semibold uppercase tracking-wide text-cool-gray">
                          Phone — 24/7
                        </span>
                        <span className="mt-1 block text-[1.1rem] font-bold text-deep-charcoal">
                          {SITE.phone}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="flex items-start gap-3 rounded-xl border border-[rgba(21,23,27,0.08)] p-4 transition-colors hover:border-electric-blue/20"
                    >
                      <Mail className="mt-0.5 h-5 w-5 text-electric-blue" strokeWidth={2} aria-hidden />
                      <span>
                        <span className="block text-[0.75rem] font-semibold uppercase tracking-wide text-cool-gray">
                          Email
                        </span>
                        <span className="mt-1 block text-[1rem] font-semibold text-deep-charcoal">
                          {SITE.email}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="flex items-start gap-3 rounded-xl border border-[rgba(21,23,27,0.08)] p-4">
                    <MapPin className="mt-0.5 h-5 w-5 text-electric-blue" strokeWidth={2} aria-hidden />
                    <span>
                      <span className="block text-[0.75rem] font-semibold uppercase tracking-wide text-cool-gray">
                        Service Area
                      </span>
                      <span className="mt-1 block text-[1rem] font-medium text-deep-charcoal">
                        {SITE.address.city}, {SITE.address.state} — serving McKinney,
                        Denton & Rockwall
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start gap-3 rounded-xl border border-[rgba(21,23,27,0.08)] p-4">
                    <Clock className="mt-0.5 h-5 w-5 text-electric-blue" strokeWidth={2} aria-hidden />
                    <span>
                      <span className="block text-[0.75rem] font-semibold uppercase tracking-wide text-cool-gray">
                        Hours
                      </span>
                      <span className="mt-1 block text-[1rem] font-medium text-deep-charcoal">
                        Emergency service available 24 hours a day, 7 days a week
                      </span>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-[rgba(21,23,27,0.08)] bg-soft-white p-6 sm:p-8">
                <h2 className="text-[1.15rem] font-semibold text-deep-charcoal">
                  Our Plumbing Services
                </h2>
                <ul className="mt-5 space-y-3">
                  {SERVICES.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={service.href}
                        className="group flex items-center justify-between gap-3 text-[0.92rem] font-medium text-deep-charcoal transition-colors hover:text-electric-blue"
                      >
                        {service.title}
                        <ArrowRight
                          className="h-4 w-4 text-electric-blue transition-transform group-hover:translate-x-0.5"
                          strokeWidth={2}
                          aria-hidden
                        />
                      </Link>
                    </li>
                  ))}
                </ul>

                <h2 className="mt-10 text-[1.15rem] font-semibold text-deep-charcoal">
                  Service Areas
                </h2>
                <ul className="mt-5 space-y-3">
                  {SERVICE_CITY_CARDS.map((area) => (
                    <li key={area.slug}>
                      <Link
                        href={`/areas/${area.slug}`}
                        className="text-[0.92rem] font-medium text-electric-blue hover:underline"
                      >
                        Plumber in {area.name}, {area.stateAbbr}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <MobileConversion />
      <Footer />
    </>
  );
}
