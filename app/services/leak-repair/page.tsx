import type { Metadata } from "next";
import LeakRepairPage from "@/components/services/LeakRepairPage";
import Footer from "@/components/Footer";
import MobileConversion from "@/components/MobileConversion";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import ServiceJsonLd from "@/components/seo/ServiceJsonLd";
import ServiceLocalBusinessJsonLd from "@/components/seo/ServiceLocalBusinessJsonLd";
import { LEAK_REPAIR_META } from "@/lib/leak-repair-content";
import { SITE } from "@/lib/site";

const PAGE_URL = `${SITE.url}${LEAK_REPAIR_META.path}`;

export const metadata: Metadata = {
  title: {
    absolute: LEAK_REPAIR_META.title,
  },
  description: LEAK_REPAIR_META.description,
  keywords: [
    "leak repair McKinney TX",
    "leak repair Denton TX",
    "leak repair Rockwall TX",
    "water leak repair",
    "water leak detection",
    "pipe leak repair",
    "plumbing leak repair",
    "leak detection services",
    "slab leak repair",
    "hidden water leaks",
    "emergency leak repair",
    "licensed leak repair specialists",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: LEAK_REPAIR_META.title,
    description: LEAK_REPAIR_META.description,
    url: PAGE_URL,
    type: "website",
    locale: "en_US",
    siteName: SITE.name,
    images: [
      {
        url: LEAK_REPAIR_META.image,
        width: 1200,
        height: 800,
        alt: LEAK_REPAIR_META.imageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: LEAK_REPAIR_META.title,
    description: LEAK_REPAIR_META.description,
    images: [LEAK_REPAIR_META.image],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const BREADCRUMB_ITEMS = [
  { name: "Home", url: SITE.url },
  { name: "Services", url: `${SITE.url}/#services-heading` },
  { name: "Leak Repair", url: PAGE_URL },
] as const;

export default function LeakRepairRoute() {
  return (
    <>
      <BreadcrumbJsonLd items={BREADCRUMB_ITEMS} />
      <ServiceJsonLd
        name="Professional Leak Repair & Water Leak Detection Services"
        description={LEAK_REPAIR_META.description}
        url={PAGE_URL}
        image={LEAK_REPAIR_META.image}
        serviceType="Leak Repair"
      />
      <ServiceLocalBusinessJsonLd
        pageUrl={PAGE_URL}
        pageName={LEAK_REPAIR_META.title}
        pageDescription={LEAK_REPAIR_META.description}
      />
      <a
        href="#leak-repair-heading"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-electric-blue focus:px-4 focus:py-2 focus:text-white focus:shadow-lg"
      >
        Skip to main content
      </a>
      <main id="main-content" className="pb-[calc(6.5rem+env(safe-area-inset-bottom))] lg:pb-0">
        <LeakRepairPage />
      </main>
      <MobileConversion />
      <Footer />
    </>
  );
}
