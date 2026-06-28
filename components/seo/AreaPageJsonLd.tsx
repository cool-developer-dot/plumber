import type { ServiceArea } from "@/lib/service-areas";
import { SITE } from "@/lib/site";

type AreaPageJsonLdProps = {
  area: ServiceArea;
};

export default function AreaPageJsonLd({ area }: AreaPageJsonLdProps) {
  const pageUrl = `${SITE.url}/areas/${area.slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Service Areas",
            item: `${SITE.url}/#service-areas-heading`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: `${area.name}, ${area.stateAbbr}`,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}/#webpage`,
        url: pageUrl,
        name: `Plumber in ${area.name}, ${area.stateAbbr} | ${SITE.name}`,
        description: area.serviceBlurb,
        isPartOf: { "@id": `${SITE.url}/#website` },
        about: { "@id": `${SITE.url}/#organization` },
        inLanguage: "en-US",
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}/#service`,
        name: `Plumbing Services in ${area.name}, ${area.stateAbbr}`,
        description: area.serviceBlurb,
        provider: { "@id": `${SITE.url}/#organization` },
        areaServed: {
          "@type": "City",
          name: area.name,
          addressRegion: area.stateAbbr,
          addressCountry: "US",
        },
        serviceType: "Plumbing",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
