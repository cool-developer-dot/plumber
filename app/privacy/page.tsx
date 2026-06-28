import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import { buildPageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: `Privacy Policy | ${SITE.name}`,
    description: `Privacy policy for ${SITE.name}. Learn how we collect, use, and protect information when you visit our website or request plumbing services in McKinney, Denton, and Rockwall, Texas.`,
    path: "/privacy",
  }),
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="mx-auto max-w-[800px] px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h1 className="text-[2rem] font-bold tracking-tight text-deep-charcoal">
          Privacy Policy
        </h1>
        <p className="mt-4 text-[0.95rem] leading-relaxed text-cool-gray">
          {SITE.name} respects your privacy. This policy explains what information we
          may collect when you use our website or contact us for plumbing services,
          and how that information is used.
        </p>
        <section className="mt-8 space-y-4 text-[0.95rem] leading-relaxed text-cool-gray">
          <h2 className="text-[1.1rem] font-semibold text-deep-charcoal">
            Information We Collect
          </h2>
          <p>
            When you call, email, or request service, we may collect your name,
            phone number, email address, service address, and details about your
            plumbing issue to schedule and complete work.
          </p>
          <h2 className="text-[1.1rem] font-semibold text-deep-charcoal">
            How We Use Information
          </h2>
          <p>
            We use contact and service information to respond to requests, schedule
            appointments, provide estimates, complete plumbing work, and improve
            customer support.
          </p>
          <h2 className="text-[1.1rem] font-semibold text-deep-charcoal">
            Contact
          </h2>
          <p>
            Questions about this policy may be directed to{" "}
            <a href={`mailto:${SITE.email}`} className="font-medium text-electric-blue hover:underline">
              {SITE.email}
            </a>{" "}
            or{" "}
            <a href={`tel:${SITE.phoneTel}`} className="font-medium text-electric-blue hover:underline">
              {SITE.phone}
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
