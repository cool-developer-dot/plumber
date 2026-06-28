import { SITE } from "@/lib/site";

type ServiceLocalBusinessJsonLdProps = {
  pageUrl: string;
  pageName: string;
  pageDescription: string;
};

export default function ServiceLocalBusinessJsonLd({
  pageUrl,
  pageName,
  pageDescription,
}: ServiceLocalBusinessJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}/#webpage`,
        url: pageUrl,
        name: pageName,
        description: pageDescription,
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
