import type { Metadata } from "next";
import PipeRepairPage from "@/components/services/PipeRepairPage";
import Footer from "@/components/Footer";
import MobileConversion from "@/components/MobileConversion";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import ServiceJsonLd from "@/components/seo/ServiceJsonLd";
import ServiceLocalBusinessJsonLd from "@/components/seo/ServiceLocalBusinessJsonLd";
import { PIPE_REPAIR_META } from "@/lib/pipe-repair-content";
import { SITE } from "@/lib/site";

const PAGE_URL = `${SITE.url}${PIPE_REPAIR_META.path}`;

export const metadata: Metadata = {
  title: {
    absolute: PIPE_REPAIR_META.title,
  },
  description: PIPE_REPAIR_META.description,
  keywords: [
    "pipe repair McKinney TX",
    "pipe repair Denton TX",
    "pipe repair Rockwall TX",
    "water pipe repair",
    "burst pipe repair",
    "broken pipe repair",
    "leaking pipe repair",
    "pipe replacement",
    "frozen pipe repair",
    "underground pipe repair",
    "copper pipe repair",
    "PVC pipe repair",
    "water line repair",
    "pipe leak repair",
    "residential pipe repair",
    "commercial pipe repair",
    "emergency pipe repair",
    "licensed pipe repair specialists",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: PIPE_REPAIR_META.title,
    description: PIPE_REPAIR_META.description,
    url: PAGE_URL,
    type: "website",
    locale: "en_US",
    siteName: SITE.name,
    images: [
      {
        url: PIPE_REPAIR_META.image,
        width: 1200,
        height: 800,
        alt: PIPE_REPAIR_META.imageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PIPE_REPAIR_META.title,
    description: PIPE_REPAIR_META.description,
    images: [PIPE_REPAIR_META.image],
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
  { name: "Pipe Repair", url: PAGE_URL },
] as const;

export default function PipeRepairRoute() {
  return (
    <>
      <BreadcrumbJsonLd items={BREADCRUMB_ITEMS} />
      <ServiceJsonLd
        name="Professional Pipe Repair Services"
        description={PIPE_REPAIR_META.description}
        url={PAGE_URL}
        image={PIPE_REPAIR_META.image}
        serviceType="Pipe Repair"
      />
      <ServiceLocalBusinessJsonLd
        pageUrl={PAGE_URL}
        pageName={PIPE_REPAIR_META.title}
        pageDescription={PIPE_REPAIR_META.description}
      />
      <a
        href="#pipe-repair-heading"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-electric-blue focus:px-4 focus:py-2 focus:text-white focus:shadow-lg"
      >
        Skip to main content
      </a>
      <main id="main-content" className="pb-[calc(6.5rem+env(safe-area-inset-bottom))] lg:pb-0">
        <PipeRepairPage />
      </main>
      <MobileConversion />
      <Footer />
    </>
  );
}
