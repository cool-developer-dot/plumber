import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.shortName,
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#15171B",
    lang: "en-US",
    icons: [
      {
        src: "/image.webp",
        sizes: "512x512",
        type: "image/webp",
      },
    ],
  };
}
