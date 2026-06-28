import type { Metadata } from "next";
import DrainCleaningPage from "@/components/services/DrainCleaningPage";
import Footer from "@/components/Footer";
import MobileConversion from "@/components/MobileConversion";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import ServiceJsonLd from "@/components/seo/ServiceJsonLd";
import ServiceLocalBusinessJsonLd from "@/components/seo/ServiceLocalBusinessJsonLd";
import { DRAIN_CLEANING_META } from "@/lib/drain-cleaning-content";
import { SITE } from "@/lib/site";

const PAGE_URL = `${SITE.url}${DRAIN_CLEANING_META.path}`;

export const metadata: Metadata = {
  title: {
    absolute: DRAIN_CLEANING_META.title,
  },
  description: DRAIN_CLEANING_META.description,
  keywords: [
    "drain cleaning McKinney TX",
    "drain cleaning Denton TX",
    "drain cleaning Rockwall TX",
    "professional drain cleaning",
    "clogged drain repair",
    "sewer drain cleaning",
    "hydro jetting",
    "kitchen drain cleaning",
    "emergency drain cleaning",
    "drain unclogging",
    "residential drain cleaning",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: DRAIN_CLEANING_META.title,
    description: DRAIN_CLEANING_META.description,
    url: PAGE_URL,
    type: "website",
    locale: "en_US",
    siteName: SITE.name,
    images: [
      {
        url: DRAIN_CLEANING_META.image,
        width: 1200,
        height: 800,
        alt: DRAIN_CLEANING_META.imageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DRAIN_CLEANING_META.title,
    description: DRAIN_CLEANING_META.description,
    images: [DRAIN_CLEANING_META.image],
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
  { name: "Drain Cleaning", url: PAGE_URL },
] as const;

export default function DrainCleaningRoute() {
  return (
    <>
      <BreadcrumbJsonLd items={BREADCRUMB_ITEMS} />
      <ServiceJsonLd
        name="Professional Drain Cleaning Services"
        description={DRAIN_CLEANING_META.description}
        url={PAGE_URL}
        image={DRAIN_CLEANING_META.image}
        serviceType="Drain Cleaning"
      />
      <ServiceLocalBusinessJsonLd
        pageUrl={PAGE_URL}
        pageName={DRAIN_CLEANING_META.title}
        pageDescription={DRAIN_CLEANING_META.description}
      />
      <a
        href="#drain-cleaning-heading"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-electric-blue focus:px-4 focus:py-2 focus:text-white focus:shadow-lg"
      >
        Skip to main content
      </a>
      <main id="main-content" className="pb-[calc(6.5rem+env(safe-area-inset-bottom))] lg:pb-0">
        <DrainCleaningPage />
      </main>
      <MobileConversion />
      <Footer />
    </>
  );
}
