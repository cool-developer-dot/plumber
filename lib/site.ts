export const SITE = {
  name: "Precision Plumbing Texas",
  shortName: "Precision Plumbing",
  tagline: "Premium Plumbing, On Your Schedule.",
  description:
    "Professional emergency plumbing, leak repair, drain cleaning, water heater services, pipe repair, and sewer line services across McKinney, Denton, and Rockwall, Texas. Licensed plumbers, upfront pricing, 24/7 emergency response.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://precisionplumbingtexas.com",
  phone: "(773) 249-0630",
  phoneTel: "7732490630",
  email: "info@precisionplumbingtexas.com",
  address: {
    street: "1200 Commerce Street",
    city: "McKinney",
    state: "TX",
    zip: "75069",
    country: "US",
  },
  geo: {
    latitude: 33.1972,
    longitude: -96.6398,
  },
  priceRange: "$$",
  openingHours: "Mo-Su 00:00-23:59",
  foundingYear: 2004,
  serviceCities: ["McKinney", "Denton", "Rockwall"] as const,
  social: {} satisfies Partial<Record<"facebook" | "instagram" | "linkedin" | "twitter", string>>,
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services-heading" },
  { label: "Locations", href: "/#service-areas-heading" },
  { label: "About", href: "/#why-choose-heading" },
  { label: "Reviews", href: "/#testimonials-heading" },
  { label: "Contact", href: "/contact" },
] as const;

export const KEYWORDS = [
  "plumber McKinney TX",
  "plumber Denton TX",
  "plumber Rockwall TX",
  "emergency plumber North Texas",
  "plumber near me",
  "24/7 plumber",
  "flat-rate plumbing",
  "licensed plumber Texas",
  "drain cleaning McKinney",
  "water heater repair Denton",
  "emergency plumbing Rockwall",
] as const;
