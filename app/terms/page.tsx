import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import { buildPageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: `Terms of Service | ${SITE.name}`,
  description: `Terms of service for ${SITE.name}. Review the terms governing use of our website and plumbing services in McKinney, Denton, and Rockwall, Texas.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="mx-auto max-w-[800px] px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h1 className="text-[2rem] font-bold tracking-tight text-deep-charcoal">
          Terms of Service
        </h1>
        <p className="mt-4 text-[0.95rem] leading-relaxed text-cool-gray">
          By using the {SITE.name} website or requesting our plumbing services, you
          agree to the following terms.
        </p>
        <section className="mt-8 space-y-4 text-[0.95rem] leading-relaxed text-cool-gray">
          <h2 className="text-[1.1rem] font-semibold text-deep-charcoal">
            Services
          </h2>
          <p>
            We provide residential and commercial plumbing services in our stated
            service areas. Estimates, scheduling, and scope of work are confirmed
            before service begins unless emergency conditions require immediate
            stabilization.
          </p>
          <h2 className="text-[1.1rem] font-semibold text-deep-charcoal">
            Website Use
          </h2>
          <p>
            Website content is provided for general information about our services.
            We strive to keep information accurate but do not guarantee that all
            content is complete or current at all times.
          </p>
          <h2 className="text-[1.1rem] font-semibold text-deep-charcoal">
            Contact
          </h2>
          <p>
            For questions about these terms, contact{" "}
            <a href={`mailto:${SITE.email}`} className="font-medium text-electric-blue hover:underline">
              {SITE.email}
            </a>
            .
          </p>
        </section>
        <p className="mt-10">
          <Link href="/" className="text-[0.9rem] font-medium text-electric-blue hover:underline">
            ← Back to Home
          </Link>
        </p>
      </main>
      <Footer />
    </>
  );
}
