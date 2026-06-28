import type { Metadata } from "next";
import { SITE } from "@/lib/site";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  keywords?: readonly string[];
};

export function buildPageMetadata({
  title,
  description,
  path,
  image = "/image.webp",
  imageAlt = `${SITE.name} — licensed plumbing services in North Texas`,
  keywords,
}: PageMetadataInput): Metadata {
  const url = `${SITE.url}${path}`;

  return {
    title: { absolute: title },
    description,
    ...(keywords ? { keywords: [...keywords] } : {}),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      locale: "en_US",
      siteName: SITE.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 800,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export const DEFAULT_OG_IMAGE = {
  url: "/image.webp",
  width: 1300,
  height: 1210,
  alt: "Precision Plumbing Texas licensed technician",
} as const;
