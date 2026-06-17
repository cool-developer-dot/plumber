import EmergencyCtaSection from "@/components/EmergencyCtaSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorksSection from "@/components/HowItWorksSection";
import ServiceAreasSection from "@/components/ServiceAreasSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <ServicesSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <ServiceAreasSection />
        <HowItWorksSection />
        <FaqSection />
        <EmergencyCtaSection />
      </main>
      <Footer />
    </>
  );
}
