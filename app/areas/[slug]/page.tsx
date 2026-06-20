import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AreaDetailPage from "@/components/AreaDetailPage";
import Footer from "@/components/Footer";
import MobileConversion from "@/components/MobileConversion";
import { getAllAreaSlugs, getAreaBySlug } from "@/lib/service-areas";
import { SITE } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllAreaSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = getAreaBySlug(slug);

  if (!area) {
    return { title: "Area Not Found" };
  }

  const title = `Plumber in ${area.name}, ${area.stateAbbr}`;
  const description = `Licensed plumbing in ${area.name}, ${area.state}. 24/7 emergency response, drain cleaning, leak repair, and water heater service. Flat-rate pricing. Call ${SITE.phone}.`;

  return {
    title,
    description,
    keywords: [
      `plumber ${area.name}`,
      `plumber ${area.name} ${area.stateAbbr}`,
      `emergency plumber ${area.name}`,
      `drain cleaning ${area.name}`,
      `water heater repair ${area.name}`,
    ],
    alternates: {
      canonical: `${SITE.url}/areas/${slug}`,
    },
    openGraph: {
      title: `${title} | ${SITE.name}`,
      description,
      url: `${SITE.url}/areas/${slug}`,
      type: "website",
    },
  };
}

export default async function AreaPage({ params }: PageProps) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);

  if (!area) {
    notFound();
  }

  const areaSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Plumbing Services in ${area.name}, ${area.stateAbbr}`,
    description: area.serviceBlurb,
    provider: {
      "@type": "Plumber",
      name: SITE.name,
      telephone: SITE.phone,
      url: SITE.url,
    },
    areaServed: {
      "@type": "City",
      name: area.name,
      addressRegion: area.stateAbbr,
      addressCountry: "US",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(areaSchema) }}
      />
      <main>
        <AreaDetailPage area={area} />
      </main>
      <MobileConversion />
      <Footer />
    </>
  );
}
