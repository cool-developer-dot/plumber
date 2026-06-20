export const SITE = {
  name: "Precision Plumbing Texas",
  shortName: "Precision Plumbing",
  tagline: "Premium Plumbing, On Your Schedule.",
  description:
    "Premium plumbing in McKinney, Denton, and Rockwall, TX. Flat-rate upfront pricing, licensed background-checked technicians, and live arrival tracking. 24/7 emergency service.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://precisionplumbingtexas.com",
  phone: "(888) 724-0474",
  phoneTel: "8887240474",
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
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/",
  },
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
