import { getOrganizationSchema, getWebSiteSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export default function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      getOrganizationSchema(),
      getWebSiteSchema(),
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
