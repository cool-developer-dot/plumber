import { SITE } from "@/lib/site";

export default function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Plumber",
        "@id": `${SITE.url}/#organization`,
        name: SITE.name,
        url: SITE.url,
        logo: `${SITE.url}/image.webp`,
        image: `${SITE.url}/image.webp`,
        description: SITE.description,
        telephone: SITE.phone,
        email: SITE.email,
        priceRange: SITE.priceRange,
        foundingDate: String(SITE.foundingYear),
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE.address.street,
          addressLocality: SITE.address.city,
          addressRegion: SITE.address.state,
          postalCode: SITE.address.zip,
          addressCountry: SITE.address.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: SITE.geo.latitude,
          longitude: SITE.geo.longitude,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
        areaServed: SITE.serviceCities.map((city) => ({
          "@type": "City",
          name: city,
          addressRegion: "TX",
          addressCountry: "US",
        })),
        sameAs: Object.values(SITE.social),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Plumbing Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Emergency Plumbing" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Leak Repair" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Drain Cleaning" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Water Heater Services" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pipe Repair" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sewer Line Services" } },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.name,
        description: SITE.description,
        publisher: { "@id": `${SITE.url}/#organization` },
        inLanguage: "en-US",
      },
      {
        "@type": "WebPage",
        "@id": `${SITE.url}/#webpage`,
        url: SITE.url,
        name: `${SITE.name} | ${SITE.tagline}`,
        description: SITE.description,
        isPartOf: { "@id": `${SITE.url}/#website` },
        about: { "@id": `${SITE.url}/#organization` },
        inLanguage: "en-US",
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
