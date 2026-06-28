import { SITE } from "@/lib/site";

type ServiceJsonLdProps = {
  name: string;
  description: string;
  url: string;
  image: string;
  serviceType: string;
};

export default function ServiceJsonLd({
  name,
  description,
  url,
  image,
  serviceType,
}: ServiceJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    image: {
      "@type": "ImageObject",
      url: `${SITE.url}${image}`,
    },
    serviceType,
    provider: { "@id": `${SITE.url}/#organization` },
    areaServed: SITE.serviceCities.map((city) => ({
      "@type": "City",
      name: city,
      addressRegion: "TX",
      addressCountry: "US",
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
