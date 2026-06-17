import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AreaDetailPage from "@/components/AreaDetailPage";
import Footer from "@/components/Footer";
import { getAllAreaSlugs, getAreaBySlug } from "@/lib/service-areas";

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
    return { title: "Area Not Found | FlowRight Plumbing" };
  }

  return {
    title: `${area.name}, ${area.stateAbbr} Plumbing Services | FlowRight Plumbing`,
    description: `Licensed plumbing services in ${area.name}, ${area.state}. 24/7 emergency response, drain cleaning, leak repair, and water heater service. Call (888) 724-0474.`,
  };
}

export default async function AreaPage({ params }: PageProps) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);

  if (!area) {
    notFound();
  }

  return (
    <>
      <main>
        <AreaDetailPage area={area} />
      </main>
      <Footer />
    </>
  );
}
