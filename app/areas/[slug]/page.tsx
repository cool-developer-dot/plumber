import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AreaDetailPage from "@/components/AreaDetailPage";
import Footer from "@/components/Footer";
import MobileConversion from "@/components/MobileConversion";
import AreaPageJsonLd from "@/components/seo/AreaPageJsonLd";
import { buildPageMetadata } from "@/lib/seo";
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

  const title = `Plumber in ${area.name}, ${area.stateAbbr} | Licensed Plumbing Services`;
  const description = `Licensed plumber in ${area.name}, ${area.state}. 24/7 emergency plumbing, leak repair, drain cleaning, water heater service, pipe repair, and sewer line services. Flat-rate pricing. Call ${SITE.phone}.`;

  return buildPageMetadata({
    title,
    description,
    path: `/areas/${slug}`,
    image: "/image.webp",
    imageAlt: `Precision Plumbing Texas serving ${area.name}, ${area.stateAbbr}`,
    keywords: [
      `plumber ${area.name}`,
      `plumber ${area.name} ${area.stateAbbr}`,
      `emergency plumber ${area.name}`,
      `drain cleaning ${area.name}`,
      `water heater repair ${area.name}`,
      `sewer line repair ${area.name}`,
    ],
  });
}

export default async function AreaPage({ params }: PageProps) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);

  if (!area) {
    notFound();
  }

  return (
    <>
      <AreaPageJsonLd area={area} />
      <main id="main-content">
        <AreaDetailPage area={area} />
      </main>
      <MobileConversion />
      <Footer />
    </>
  );
}
