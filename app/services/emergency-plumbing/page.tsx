import type { Metadata } from "next";
import EmergencyPlumbingPage from "@/components/services/EmergencyPlumbingPage";
import Footer from "@/components/Footer";
import MobileConversion from "@/components/MobileConversion";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import ServiceJsonLd from "@/components/seo/ServiceJsonLd";
import ServiceLocalBusinessJsonLd from "@/components/seo/ServiceLocalBusinessJsonLd";
import { EMERGENCY_PLUMBING_META } from "@/lib/emergency-plumbing-content";
import { SITE } from "@/lib/site";

const PAGE_URL = `${SITE.url}${EMERGENCY_PLUMBING_META.path}`;

export const metadata: Metadata = {
  title: {
    absolute: EMERGENCY_PLUMBING_META.title,
  },
  description: EMERGENCY_PLUMBING_META.description,
  keywords: [
    "emergency plumber McKinney TX",
    "emergency plumber Denton TX",
    "emergency plumber Rockwall TX",
    "24/7 emergency plumbing",
    "burst pipe repair",
    "water leak repair",
    "sewer backup repair",
    "emergency drain cleaning",
    "water heater emergency",
    "emergency pipe repair",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: EMERGENCY_PLUMBING_META.title,
    description: EMERGENCY_PLUMBING_META.description,
    url: PAGE_URL,
    type: "website",
    locale: "en_US",
    siteName: SITE.name,
    images: [
      {
        url: EMERGENCY_PLUMBING_META.image,
        width: 1200,
        height: 800,
        alt: EMERGENCY_PLUMBING_META.imageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: EMERGENCY_PLUMBING_META.title,
    description: EMERGENCY_PLUMBING_META.description,
    images: [EMERGENCY_PLUMBING_META.image],
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
  { name: "Emergency Plumbing", url: PAGE_URL },
] as const;

export default function EmergencyPlumbingRoute() {
  return (
    <>
      <BreadcrumbJsonLd items={BREADCRUMB_ITEMS} />
      <ServiceJsonLd
        name="24/7 Emergency Plumbing Services"
        description={EMERGENCY_PLUMBING_META.description}
        url={PAGE_URL}
        image={EMERGENCY_PLUMBING_META.image}
        serviceType="Emergency Plumbing"
      />
      <ServiceLocalBusinessJsonLd
        pageUrl={PAGE_URL}
        pageName={EMERGENCY_PLUMBING_META.title}
        pageDescription={EMERGENCY_PLUMBING_META.description}
      />
      <a
        href="#emergency-plumbing-heading"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-electric-blue focus:px-4 focus:py-2 focus:text-white focus:shadow-lg"
      >
        Skip to main content
      </a>
      <main id="main-content" className="pb-[calc(6.5rem+env(safe-area-inset-bottom))] lg:pb-0">
        <EmergencyPlumbingPage />
      </main>
      <MobileConversion />
      <Footer />
    </>
  );
}
