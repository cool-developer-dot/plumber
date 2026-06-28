export type ServiceSlug =
  | "emergency-plumbing"
  | "leak-repair"
  | "drain-cleaning"
  | "water-heater"
  | "pipe-repair"
  | "sewer-line";

export type ServiceDefinition = {
  slug: ServiceSlug;
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
};

export const SERVICES: readonly ServiceDefinition[] = [
  {
    slug: "emergency-plumbing",
    title: "Emergency Plumbing",
    description:
      "24/7 rapid response for urgent plumbing crises. Licensed technicians dispatched immediately.",
    href: "/services/emergency-plumbing",
    image: "/services/emergency-plumbing.jpg",
    imageAlt: "Emergency plumber responding to an urgent plumbing call",
  },
  {
    slug: "leak-repair",
    title: "Leak Repair",
    description:
      "Precision detection and lasting leak solutions. We find the source and fix it right.",
    href: "/services/leak-repair",
    image: "/services/leak-repair.jpg",
    imageAlt: "Professional plumber repairing a water leak",
  },
  {
    slug: "drain-cleaning",
    title: "Drain Cleaning",
    description:
      "Clear blockages and restore full water flow with advanced drain technology.",
    href: "/services/drain-cleaning",
    image: "/services/drain-cleaning.jpg",
    imageAlt: "Plumber performing professional drain cleaning",
  },
  {
    slug: "water-heater",
    title: "Water Heater Services",
    description:
      "Expert installation, repair, and maintenance for tank and tankless systems.",
    href: "/services/water-heater-services",
    image: "/services/water-heater/hero-water-heater.jpg",
    imageAlt: "Technician servicing a residential water heater",
  },
  {
    slug: "pipe-repair",
    title: "Pipe Repair",
    description:
      "Durable repairs for every pipe system — copper, PVC, PEX, and more.",
    href: "/services/pipe-repair",
    image: "/services/pipe-repair/hero-pipe-repair.jpg",
    imageAlt: "Copper and PVC pipe repair work",
  },
  {
    slug: "sewer-line",
    title: "Sewer Line Services",
    description:
      "Advanced diagnostics and complete sewer solutions with camera inspection.",
    href: "/services/sewer-line-services",
    image: "/services/sewer-line/hero-sewer-inspection.jpg",
    imageAlt: "Professional sewer line inspection and repair",
  },
] as const;

export function getServiceBySlug(slug: string): ServiceDefinition | undefined {
  return SERVICES.find((service) => service.slug === slug);
}

export function getRelatedServices(
  excludeSlug: ServiceSlug,
): readonly ServiceDefinition[] {
  return SERVICES.filter((service) => service.slug !== excludeSlug);
}
