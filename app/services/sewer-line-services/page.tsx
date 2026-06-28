import type { Metadata } from "next";
import SewerLineServicesPage from "@/components/services/SewerLineServicesPage";
import Footer from "@/components/Footer";
import MobileConversion from "@/components/MobileConversion";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import ServiceJsonLd from "@/components/seo/ServiceJsonLd";
import ServiceLocalBusinessJsonLd from "@/components/seo/ServiceLocalBusinessJsonLd";
import { SEWER_LINE_SERVICES_META } from "@/lib/sewer-line-services-content";
import { SITE } from "@/lib/site";

const PAGE_URL = `${SITE.url}${SEWER_LINE_SERVICES_META.path}`;

export const metadata: Metadata = {
  title: {
    absolute: SEWER_LINE_SERVICES_META.title,
  },
  description: SEWER_LINE_SERVICES_META.description,
  keywords: [
    "sewer line services McKinney TX",
    "sewer line repair Denton TX",
    "sewer line replacement Rockwall TX",
    "sewer line repair",
    "sewer line replacement",
    "sewer repair",
    "sewer inspection",
    "sewer cleaning",
    "sewer camera inspection",
    "sewer backup repair",
    "blocked sewer line",
    "broken sewer pipe",
    "trenchless sewer repair",
    "tree root removal",
    "residential sewer services",
    "commercial sewer services",
    "emergency sewer repair",
    "licensed sewer specialists",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: SEWER_LINE_SERVICES_META.title,
    description: SEWER_LINE_SERVICES_META.description,
    url: PAGE_URL,
    type: "website",
    locale: "en_US",
    siteName: SITE.name,
    images: [
      {
        url: SEWER_LINE_SERVICES_META.image,
        width: 1200,
        height: 800,
        alt: SEWER_LINE_SERVICES_META.imageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEWER_LINE_SERVICES_META.title,
    description: SEWER_LINE_SERVICES_META.description,
    images: [SEWER_LINE_SERVICES_META.image],
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
  { name: "Sewer Line Services", url: PAGE_URL },
] as const;

export default function SewerLineServicesRoute() {
  return (
    <>
      <BreadcrumbJsonLd items={BREADCRUMB_ITEMS} />
      <ServiceJsonLd
        name="Professional Sewer Line Services"
        description={SEWER_LINE_SERVICES_META.description}
        url={PAGE_URL}
        image={SEWER_LINE_SERVICES_META.image}
        serviceType="Sewer Line Services"
      />
      <ServiceLocalBusinessJsonLd
        pageUrl={PAGE_URL}
        pageName={SEWER_LINE_SERVICES_META.title}
        pageDescription={SEWER_LINE_SERVICES_META.description}
      />
      <a
        href="#sewer-line-services-heading"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-electric-blue focus:px-4 focus:py-2 focus:text-white focus:shadow-lg"
      >
        Skip to main content
      </a>
      <main id="main-content" className="pb-[calc(6.5rem+env(safe-area-inset-bottom))] lg:pb-0">
        <SewerLineServicesPage />
      </main>
      <MobileConversion />
      <Footer />
    </>
  );
}
