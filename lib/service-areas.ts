export type Landmark = {
  name: string;
  detail: string;
  mapsUrl: string;
};

export type ServiceArea = {
  slug: string;
  name: string;
  state: string;
  stateAbbr: string;
  zipCode: string;
  population: string;
  medianAge: string;
  whiteCollar: string;
  medianIncome: string;
  intro: string;
  serviceBlurb: string;
  mapsUrl: string;
  embedUrl: string;
  schools: Landmark[];
  restaurants: Landmark[];
};

function mapsSearch(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function mapsEmbed(query: string) {
  return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&hl=en&z=13&output=embed`;
}

function areaQuery(name: string, stateAbbr: string) {
  return `${name}, ${stateAbbr}`;
}

function buildArea(
  config: Omit<
    ServiceArea,
    "mapsUrl" | "embedUrl" | "intro" | "serviceBlurb"
  > & {
    intro?: string;
    serviceBlurb?: string;
  },
): ServiceArea {
  const query = areaQuery(config.name, config.stateAbbr);
  return {
    ...config,
    mapsUrl: mapsSearch(query),
    embedUrl: mapsEmbed(query),
    intro:
      config.intro ??
      `${config.name} is a thriving community in ${config.state} where homeowners and businesses rely on dependable plumbing every day. Precision Plumbing Texas proudly serves ${config.name} and surrounding neighborhoods with licensed, insured technicians who deliver fast response times and lasting repairs.`,
    serviceBlurb:
      config.serviceBlurb ??
      `Precision Plumbing Texas is committed to keeping ${config.name} homes and businesses running smoothly. From emergency pipe bursts to routine drain cleaning and water heater service, our local team knows the area and arrives prepared. Call us today for same-day plumbing help in ${config.name}.`,
  };
}

export const PRIMARY_SERVICE_CITIES = ["McKinney", "Denton", "Rockwall"] as const;

export const SERVICE_AREAS: ServiceArea[] = [
  buildArea({
    slug: "mckinney-tx",
    name: "McKinney",
    state: "Texas",
    stateAbbr: "TX",
    zipCode: "75069",
    population: "199,177",
    medianAge: "36.2",
    whiteCollar: "72.4%",
    medianIncome: "$100,775",
    schools: [
      { name: "McKinney Boyd High School", detail: "600 Lake Forest Dr, McKinney, TX 75070", mapsUrl: mapsSearch("McKinney Boyd High School McKinney TX") },
      { name: "Dowell Middle School", detail: "1400 Maple St, McKinney, TX 75069", mapsUrl: mapsSearch("Dowell Middle School McKinney TX") },
      { name: "Valley Creek Elementary", detail: "2700 Valley Creek Pkwy, McKinney, TX 75070", mapsUrl: mapsSearch("Valley Creek Elementary McKinney TX") },
    ],
    restaurants: [
      { name: "Hudson House", detail: "★★★★ · $$ · American", mapsUrl: mapsSearch("Hudson House McKinney TX") },
      { name: "Rick's Chophouse", detail: "★★★★ · $$$ · Steakhouse", mapsUrl: mapsSearch("Rick's Chophouse McKinney TX") },
      { name: "Torchy's Tacos", detail: "★★★★ · $ · Mexican", mapsUrl: mapsSearch("Torchy's Tacos McKinney TX") },
    ],
  }),
  buildArea({
    slug: "denton-tx",
    name: "Denton",
    state: "Texas",
    stateAbbr: "TX",
    zipCode: "76201",
    population: "148,861",
    medianAge: "29.8",
    whiteCollar: "68.1%",
    medianIncome: "$62,790",
    schools: [
      { name: "Denton High School", detail: "1007 Fulton St, Denton, TX 76201", mapsUrl: mapsSearch("Denton High School TX") },
      { name: "Ryan High School", detail: "5101 E McKinney St, Denton, TX 76208", mapsUrl: mapsSearch("Ryan High School Denton TX") },
      { name: "University of North Texas", detail: "1155 Union Cir, Denton, TX 76203", mapsUrl: mapsSearch("University of North Texas") },
    ],
    restaurants: [
      { name: "Barley & Board", detail: "★★★★ · $$ · New American", mapsUrl: mapsSearch("Barley and Board Denton TX") },
      { name: "Andy's Bar & Grill", detail: "★★★★ · $ · Bar & Grill", mapsUrl: mapsSearch("Andy's Bar and Grill Denton TX") },
      { name: "Fuzzy's Taco Shop", detail: "★★★★ · $ · Mexican", mapsUrl: mapsSearch("Fuzzy's Taco Shop Denton TX") },
    ],
  }),
  buildArea({
    slug: "rockwall-tx",
    name: "Rockwall",
    state: "Texas",
    stateAbbr: "TX",
    zipCode: "75087",
    population: "47,251",
    medianAge: "38.5",
    whiteCollar: "74.8%",
    medianIncome: "$104,632",
    schools: [
      { name: "Rockwall High School", detail: "1600 Dragon Dr, Rockwall, TX 75032", mapsUrl: mapsSearch("Rockwall High School TX") },
      { name: "Rockwall-Heath High School", detail: "801 E Ralph Hall Pkwy, Heath, TX 75032", mapsUrl: mapsSearch("Rockwall-Heath High School") },
      { name: "Celia Hays Elementary", detail: "1200 Williams St, Rockwall, TX 75087", mapsUrl: mapsSearch("Celia Hays Elementary Rockwall TX") },
    ],
    restaurants: [
      { name: "The Downing Bottle Shop", detail: "★★★★ · $$ · American", mapsUrl: mapsSearch("The Downing Bottle Shop Rockwall TX") },
      { name: "Zanata", detail: "★★★★ · $$ · Italian", mapsUrl: mapsSearch("Zanata Rockwall TX") },
      { name: "Chilangos Mexican Restaurant", detail: "★★★★ · $ · Mexican", mapsUrl: mapsSearch("Chilangos Rockwall TX") },
    ],
  }),
];

const CITY_CARD_META: Record<
  string,
  { tagline: string; growthNote: string }
> = {
  "mckinney-tx": {
    tagline: "Fast-growing Collin County community with premium homes.",
    growthNote: "One of North Texas's fastest-growing cities.",
  },
  "denton-tx": {
    tagline: "University town with diverse residential plumbing needs.",
    growthNote: "Rapid expansion across new neighborhoods.",
  },
  "rockwall-tx": {
    tagline: "Lakefront living with high-demand plumbing service.",
    growthNote: "Consistent year-over-year population growth.",
  },
};

export function getAreaBySlug(slug: string): ServiceArea | undefined {
  return SERVICE_AREAS.find((area) => area.slug === slug);
}

export function getAllAreaSlugs(): string[] {
  return SERVICE_AREAS.map((area) => area.slug);
}

export type ServiceCityCard = Pick<
  ServiceArea,
  "slug" | "name" | "stateAbbr" | "mapsUrl" | "embedUrl"
> & {
  tagline: string;
  growthNote: string;
};

export const SERVICE_CITY_CARDS: ServiceCityCard[] = SERVICE_AREAS.map(
  ({ slug, name, stateAbbr, mapsUrl, embedUrl }) => ({
    slug,
    name,
    stateAbbr,
    mapsUrl,
    embedUrl,
    tagline: CITY_CARD_META[slug]?.tagline ?? "Licensed local plumbing coverage.",
    growthNote: CITY_CARD_META[slug]?.growthNote ?? "Active service area.",
  }),
);
