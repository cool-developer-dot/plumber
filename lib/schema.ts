import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";

export function getOrganizationSchema() {
  return {
    "@type": "Plumber",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    url: SITE.url,
    logo: {
      "@type": "ImageObject",
      url: `${SITE.url}/image.webp`,
    },
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
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Plumbing Services",
      itemListElement: SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          url: `${SITE.url}${service.href}`,
        },
      })),
    },
  };
}

export function getWebSiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    publisher: { "@id": `${SITE.url}/#organization` },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE.url}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}
