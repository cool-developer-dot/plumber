import type { Metadata } from "next";
import dynamic from "next/dynamic";
import EmergencyCtaSection from "@/components/EmergencyCtaSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorksSection from "@/components/HowItWorksSection";
import LocalBusinessJsonLd from "@/components/seo/LocalBusinessJsonLd";
import MobileConversion from "@/components/MobileConversion";
import ServiceAreasSection from "@/components/ServiceAreasSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import { SITE } from "@/lib/site";

const TestimonialsSection = dynamic(
  () => import("@/components/TestimonialsSection"),
  { loading: () => <div className="min-h-[420px] bg-white" aria-hidden /> },
);

export const metadata: Metadata = {
  title:
    "Emergency Plumbing Services | Licensed Plumbers in McKinney, Denton & Rockwall TX",
  description:
    "Professional emergency plumbing, leak repair, drain cleaning, water heater installation, and same-day plumbing services across McKinney, Denton, and Rockwall, Texas.",
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    title:
      "Emergency Plumbing Services | Licensed Plumbers in McKinney, Denton & Rockwall TX",
    description:
      "Professional emergency plumbing, leak repair, drain cleaning, water heater installation, and same-day plumbing services across McKinney, Denton, and Rockwall, Texas.",
    url: SITE.url,
    type: "website",
    locale: "en_US",
    siteName: SITE.name,
    images: [
      {
        url: "/image.webp",
        width: 1300,
        height: 1210,
        alt: "Precision Plumbing Texas licensed technician",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Emergency Plumbing Services | Licensed Plumbers in McKinney, Denton & Rockwall TX",
    description:
      "Professional emergency plumbing, leak repair, drain cleaning, water heater installation, and same-day plumbing services across McKinney, Denton, and Rockwall, Texas.",
    images: ["/image.webp"],
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

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-electric-blue focus:px-4 focus:py-2 focus:text-white focus:shadow-lg"
      >
        Skip to main content
      </a>
      <LocalBusinessJsonLd />
      <main
        id="main-content"
      >
        <Hero />
        <ServicesSection />
        <WhyChooseUsSection />
        <ServiceAreasSection />
        <TestimonialsSection />
        <HowItWorksSection />
        <FaqSection />
        <EmergencyCtaSection />
      </main>
      <MobileConversion />
      <Footer />
    </>
  );
}
