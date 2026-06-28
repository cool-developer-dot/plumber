import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import { SERVICES } from "@/lib/services";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: `The page you requested could not be found. Browse plumbing services in McKinney, Denton, and Rockwall from ${SITE.name}.`,
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main
        id="main-content"
        className="mx-auto max-w-[1320px] px-5 py-20 sm:px-6 sm:py-24 lg:px-8"
      >
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-electric-blue">
          404
        </p>
        <h1 className="mt-3 text-[2rem] font-bold tracking-tight text-deep-charcoal sm:text-[2.5rem]">
          Page not found
        </h1>
        <p className="mt-4 max-w-xl text-[1rem] leading-relaxed text-cool-gray">
          The page you are looking for may have moved or no longer exists. Explore
          our plumbing services or contact our team for help.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-electric-blue px-6 py-3.5 text-[0.95rem] font-semibold text-white"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl border border-[rgba(21,23,27,0.08)] px-6 py-3.5 text-[0.95rem] font-semibold text-deep-charcoal"
          >
            Contact Us
          </Link>
        </div>
        <nav aria-label="Popular services" className="mt-12">
          <h2 className="text-[1rem] font-semibold text-deep-charcoal">
            Popular Services
          </h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {SERVICES.map((service) => (
              <li key={service.slug}>
                <Link
                  href={service.href}
                  className="text-[0.9rem] font-medium text-electric-blue hover:underline"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </main>
      <Footer />
    </>
  );
}
