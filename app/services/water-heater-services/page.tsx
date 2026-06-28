import type { Metadata } from "next";
import WaterHeaterServicesPage from "@/components/services/WaterHeaterServicesPage";
import Footer from "@/components/Footer";
import MobileConversion from "@/components/MobileConversion";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import ServiceJsonLd from "@/components/seo/ServiceJsonLd";
import ServiceLocalBusinessJsonLd from "@/components/seo/ServiceLocalBusinessJsonLd";
import { WATER_HEATER_SERVICES_META } from "@/lib/water-heater-services-content";
import { SITE } from "@/lib/site";

const PAGE_URL = `${SITE.url}${WATER_HEATER_SERVICES_META.path}`;

export const metadata: Metadata = {
  title: {
    absolute: WATER_HEATER_SERVICES_META.title,
  },
  description: WATER_HEATER_SERVICES_META.description,
  keywords: [
    "water heater services McKinney TX",
    "water heater repair Denton TX",
    "water heater installation Rockwall TX",
    "water heater repair",
    "water heater installation",
    "water heater replacement",
    "tankless water heater",
    "hot water heater repair",
    "gas water heater repair",
    "electric water heater repair",
    "water heater maintenance",
    "water heater flush",
    "emergency water heater repair",
    "tankless water heater installation",
    "residential water heater services",
    "commercial water heater services",
    "licensed water heater specialists",
    "same-day water heater service",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: WATER_HEATER_SERVICES_META.title,
    description: WATER_HEATER_SERVICES_META.description,
    url: PAGE_URL,
    type: "website",
    locale: "en_US",
    siteName: SITE.name,
    images: [
      {
        url: WATER_HEATER_SERVICES_META.image,
        width: 1200,
        height: 800,
        alt: WATER_HEATER_SERVICES_META.imageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: WATER_HEATER_SERVICES_META.title,
    description: WATER_HEATER_SERVICES_META.description,
    images: [WATER_HEATER_SERVICES_META.image],
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
  { name: "Water Heater Services", url: PAGE_URL },
] as const;

export default function WaterHeaterServicesRoute() {
  return (
    <>
      <BreadcrumbJsonLd items={BREADCRUMB_ITEMS} />
      <ServiceJsonLd
        name="Professional Water Heater Services"
        description={WATER_HEATER_SERVICES_META.description}
        url={PAGE_URL}
        image={WATER_HEATER_SERVICES_META.image}
        serviceType="Water Heater Services"
      />
      <ServiceLocalBusinessJsonLd
        pageUrl={PAGE_URL}
        pageName={WATER_HEATER_SERVICES_META.title}
        pageDescription={WATER_HEATER_SERVICES_META.description}
      />
      <a
        href="#water-heater-services-heading"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-electric-blue focus:px-4 focus:py-2 focus:text-white focus:shadow-lg"
      >
        Skip to main content
      </a>
      <main id="main-content" className="pb-[calc(6.5rem+env(safe-area-inset-bottom))] lg:pb-0">
        <WaterHeaterServicesPage />
      </main>
      <MobileConversion />
      <Footer />
    </>
  );
}
