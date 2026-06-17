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
      `${config.name} is a thriving community in ${config.state} where homeowners and businesses rely on dependable plumbing every day. FlowRight Plumbing proudly serves ${config.name} and surrounding neighborhoods with licensed, insured technicians who deliver fast response times and lasting repairs.`,
    serviceBlurb:
      config.serviceBlurb ??
      `FlowRight Plumbing is committed to keeping ${config.name} homes and businesses running smoothly. From emergency pipe bursts to routine drain cleaning and water heater service, our local team knows the area and arrives prepared. Call us today for same-day plumbing help in ${config.name}.`,
  };
}

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
  buildArea({
    slug: "forney-tx",
    name: "Forney",
    state: "Texas",
    stateAbbr: "TX",
    zipCode: "75126",
    population: "34,791",
    medianAge: "33.1",
    whiteCollar: "69.5%",
    medianIncome: "$96,420",
    schools: [
      { name: "Forney High School", detail: "800 Falcon Dr, Forney, TX 75126", mapsUrl: mapsSearch("Forney High School TX") },
      { name: "North Forney High School", detail: "15800 Fm 548, Forney, TX 75126", mapsUrl: mapsSearch("North Forney High School") },
      { name: "Smith Elementary", detail: "500 S Bois D Arc St, Forney, TX 75126", mapsUrl: mapsSearch("Smith Elementary Forney TX") },
    ],
    restaurants: [
      { name: "Bodacious Bar-B-Q", detail: "★★★★ · $ · Barbecue", mapsUrl: mapsSearch("Bodacious Bar-B-Q Forney TX") },
      { name: "Cristina's Fine Mexican", detail: "★★★★ · $ · Mexican", mapsUrl: mapsSearch("Cristina's Fine Mexican Forney TX") },
      { name: "McDonald's", detail: "★★★ · $ · Fast Food", mapsUrl: mapsSearch("McDonald's Forney TX") },
    ],
  }),
  buildArea({
    slug: "mansfield-tx",
    name: "Mansfield",
    state: "Texas",
    stateAbbr: "TX",
    zipCode: "76063",
    population: "75,463",
    medianAge: "35.7",
    whiteCollar: "71.2%",
    medianIncome: "$99,388",
    schools: [
      { name: "Mansfield High School", detail: "3001 E Broad St, Mansfield, TX 76063", mapsUrl: mapsSearch("Mansfield High School TX") },
      { name: "Lake Ridge High School", detail: "101 N Day Miar Rd, Mansfield, TX 76063", mapsUrl: mapsSearch("Lake Ridge High School Mansfield TX") },
      { name: "Tarver-Rendon Elementary", detail: "6060 Retta Mansfield Rd, Mansfield, TX 76063", mapsUrl: mapsSearch("Tarver-Rendon Elementary Mansfield TX") },
    ],
    restaurants: [
      { name: "Our Place Restaurant", detail: "★★★★ · $$ · American", mapsUrl: mapsSearch("Our Place Restaurant Mansfield TX") },
      { name: "Mama's Pizza", detail: "★★★★ · $ · Pizza", mapsUrl: mapsSearch("Mama's Pizza Mansfield TX") },
      { name: "Chili's Grill & Bar", detail: "★★★ · $$ · American", mapsUrl: mapsSearch("Chili's Mansfield TX") },
    ],
  }),
  buildArea({
    slug: "port-st-lucie-fl",
    name: "Port St. Lucie",
    state: "Florida",
    stateAbbr: "FL",
    zipCode: "34952",
    population: "204,851",
    medianAge: "42.3",
    whiteCollar: "65.8%",
    medianIncome: "$63,245",
    schools: [
      { name: "Port St. Lucie High School", detail: "1201 SE Lennard Rd, Port St. Lucie, FL 34952", mapsUrl: mapsSearch("Port St. Lucie High School") },
      { name: "Treasure Coast High School", detail: "1000 SW Darwin Blvd, Port St. Lucie, FL 34953", mapsUrl: mapsSearch("Treasure Coast High School") },
      { name: "Morningside Elementary", detail: "2300 SE Lennard Rd, Port St. Lucie, FL 34952", mapsUrl: mapsSearch("Morningside Elementary Port St. Lucie") },
    ],
    restaurants: [
      { name: "First Watch", detail: "★★★★ · $$ · Breakfast & Brunch", mapsUrl: mapsSearch("First Watch Port St. Lucie FL") },
      { name: "Bonefish Grill", detail: "★★★★ · $$ · Seafood", mapsUrl: mapsSearch("Bonefish Grill Port St. Lucie FL") },
      { name: "Olive Garden", detail: "★★★ · $$ · Italian", mapsUrl: mapsSearch("Olive Garden Port St. Lucie FL") },
    ],
  }),
  buildArea({
    slug: "ocala-fl",
    name: "Ocala",
    state: "Florida",
    stateAbbr: "FL",
    zipCode: "34470",
    population: "63,591",
    medianAge: "42.8",
    whiteCollar: "62.4%",
    medianIncome: "$48,325",
    schools: [
      { name: "Ocala High School", detail: "4200 SE 24th St, Ocala, FL 34471", mapsUrl: mapsSearch("Ocala High School FL") },
      { name: "West Port High School", detail: "3733 SW 80th Ave, Ocala, FL 34481", mapsUrl: mapsSearch("West Port High School Ocala") },
      { name: "College Park Elementary", detail: "1330 NE 8th Ave, Ocala, FL 34470", mapsUrl: mapsSearch("College Park Elementary Ocala") },
    ],
    restaurants: [
      { name: "Ivy on the Square", detail: "★★★★ · $$ · Southern", mapsUrl: mapsSearch("Ivy on the Square Ocala FL") },
      { name: "Harry's Seafood Bar & Grille", detail: "★★★★ · $$ · Seafood", mapsUrl: mapsSearch("Harry's Seafood Ocala FL") },
      { name: "Cracker Barrel", detail: "★★★ · $$ · American", mapsUrl: mapsSearch("Cracker Barrel Ocala FL") },
    ],
  }),
  buildArea({
    slug: "lakeland-fl",
    name: "Lakeland",
    state: "Florida",
    stateAbbr: "FL",
    zipCode: "33801",
    population: "112,641",
    medianAge: "41.2",
    whiteCollar: "64.7%",
    medianIncome: "$52,884",
    schools: [
      { name: "Lakeland High School", detail: "726 Hollingsworth Rd, Lakeland, FL 33801", mapsUrl: mapsSearch("Lakeland High School FL") },
      { name: "George Jenkins High School", detail: "6000 Lakeland Highlands Rd, Lakeland, FL 33813", mapsUrl: mapsSearch("George Jenkins High School Lakeland") },
      { name: "Florida Southern College", detail: "111 Lake Hollingsworth Dr, Lakeland, FL 33801", mapsUrl: mapsSearch("Florida Southern College") },
    ],
    restaurants: [
      { name: "Black & Brew", detail: "★★★★ · $ · Coffee & Cafe", mapsUrl: mapsSearch("Black and Brew Lakeland FL") },
      { name: "Red Door Lakeland", detail: "★★★★ · $$ · American", mapsUrl: mapsSearch("Red Door Lakeland FL") },
      { name: "Taco Bus", detail: "★★★★ · $ · Mexican", mapsUrl: mapsSearch("Taco Bus Lakeland FL") },
    ],
  }),
  buildArea({
    slug: "palm-coast-fl",
    name: "Palm Coast",
    state: "Florida",
    stateAbbr: "FL",
    zipCode: "32137",
    population: "97,376",
    medianAge: "49.1",
    whiteCollar: "63.9%",
    medianIncome: "$58,742",
    schools: [
      { name: "Flagler Palm Coast High School", detail: "5500 E State Road 100, Palm Coast, FL 32164", mapsUrl: mapsSearch("Flagler Palm Coast High School") },
      { name: "Matanzas High School", detail: "3535 Old Kings Rd N, Palm Coast, FL 32137", mapsUrl: mapsSearch("Matanzas High School Palm Coast") },
      { name: "Rymfire Elementary", detail: "1425 Rymfire Dr, Palm Coast, FL 32164", mapsUrl: mapsSearch("Rymfire Elementary Palm Coast") },
    ],
    restaurants: [
      { name: "European Village Restaurants", detail: "★★★★ · $$ · Various", mapsUrl: mapsSearch("European Village Palm Coast FL") },
      { name: "Focaccia Bread Italian", detail: "★★★★ · $$ · Italian", mapsUrl: mapsSearch("Focaccia Bread Palm Coast FL") },
      { name: "Stella's Pizza", detail: "★★★★ · $ · Pizza", mapsUrl: mapsSearch("Stella's Pizza Palm Coast FL") },
    ],
  }),
  buildArea({
    slug: "cape-coral-fl",
    name: "Cape Coral",
    state: "Florida",
    stateAbbr: "FL",
    zipCode: "33904",
    population: "194,016",
    medianAge: "47.6",
    whiteCollar: "61.5%",
    medianIncome: "$65,282",
    schools: [
      { name: "Cape Coral High School", detail: "2300 Santa Barbara Blvd, Cape Coral, FL 33991", mapsUrl: mapsSearch("Cape Coral High School") },
      { name: "Mariner High School", detail: "1839 Chiquita Blvd S, Cape Coral, FL 33991", mapsUrl: mapsSearch("Mariner High School Cape Coral") },
      { name: "Trafalgar Elementary", detail: "1850 SW 20th Ave, Cape Coral, FL 33991", mapsUrl: mapsSearch("Trafalgar Elementary Cape Coral") },
    ],
    restaurants: [
      { name: "Ford's Garage", detail: "★★★★ · $$ · American", mapsUrl: mapsSearch("Ford's Garage Cape Coral FL") },
      { name: "Lobster Lady Seafood", detail: "★★★★ · $$ · Seafood", mapsUrl: mapsSearch("Lobster Lady Cape Coral FL") },
      { name: "Chipotle Mexican Grill", detail: "★★★ · $ · Mexican", mapsUrl: mapsSearch("Chipotle Cape Coral FL") },
    ],
  }),
  buildArea({
    slug: "temecula-ca",
    name: "Temecula",
    state: "California",
    stateAbbr: "CA",
    zipCode: "92590",
    population: "110,003",
    medianAge: "35.4",
    whiteCollar: "70.6%",
    medianIncome: "$96,183",
    schools: [
      { name: "Temecula Valley High School", detail: "31555 Rancho Vista Rd, Temecula, CA 92592", mapsUrl: mapsSearch("Temecula Valley High School") },
      { name: "Great Oak High School", detail: "32555 Deer Hollow Way, Temecula, CA 92592", mapsUrl: mapsSearch("Great Oak High School Temecula") },
      { name: "Temecula Middle School", detail: "42075 Meadows Pkwy, Temecula, CA 92592", mapsUrl: mapsSearch("Temecula Middle School") },
    ],
    restaurants: [
      { name: "Pechanga Resort Casino Dining", detail: "★★★★ · $$$ · Various", mapsUrl: mapsSearch("Pechanga Resort Casino Temecula") },
      { name: "The Goat and Vine", detail: "★★★★ · $$ · Pizza & Wine", mapsUrl: mapsSearch("The Goat and Vine Temecula") },
      { name: "E.A.T. Marketplace", detail: "★★★★ · $$ · Farm-to-Table", mapsUrl: mapsSearch("EAT Marketplace Temecula") },
    ],
  }),
  buildArea({
    slug: "murrieta-ca",
    name: "Murrieta",
    state: "California",
    stateAbbr: "CA",
    zipCode: "92562",
    population: "111,183",
    medianAge: "34.8",
    whiteCollar: "69.3%",
    medianIncome: "$97,521",
    schools: [
      { name: "Murrieta Valley High School", detail: "24105 Washington Ave, Murrieta, CA 92562", mapsUrl: mapsSearch("Murrieta Valley High School") },
      { name: "Vista Murrieta High School", detail: "28251 Clinton Keith Rd, Murrieta, CA 92563", mapsUrl: mapsSearch("Vista Murrieta High School") },
      { name: "Alta Murrieta Elementary", detail: "39675 Alta Murrieta Dr, Murrieta, CA 92563", mapsUrl: mapsSearch("Alta Murrieta Elementary") },
    ],
    restaurants: [
      { name: "The Firehouse", detail: "★★★★ · $$ · American", mapsUrl: mapsSearch("The Firehouse Murrieta CA") },
      { name: "Babi's Beer Emporium", detail: "★★★★ · $$ · Pub & Grill", mapsUrl: mapsSearch("Babi's Beer Emporium Murrieta") },
      { name: "In-N-Out Burger", detail: "★★★★ · $ · Fast Food", mapsUrl: mapsSearch("In-N-Out Burger Murrieta CA") },
    ],
  }),
  buildArea({
    slug: "visalia-ca",
    name: "Visalia",
    state: "California",
    stateAbbr: "CA",
    zipCode: "93277",
    population: "141,384",
    medianAge: "32.6",
    whiteCollar: "63.8%",
    medianIncome: "$62,904",
    schools: [
      { name: "El Diamante High School", detail: "5100 W Whitendale Ave, Visalia, CA 93277", mapsUrl: mapsSearch("El Diamante High School Visalia") },
      { name: "Golden West High School", detail: "1717 N McAuliff St, Visalia, CA 93292", mapsUrl: mapsSearch("Golden West High School Visalia") },
      { name: "College of the Sequoias", detail: "915 S Mooney Blvd, Visalia, CA 93277", mapsUrl: mapsSearch("College of the Sequoias Visalia") },
    ],
    restaurants: [
      { name: "Pita Kabob", detail: "★★★★ · $ · Mediterranean", mapsUrl: mapsSearch("Pita Kabob Visalia CA") },
      { name: "The Vintage Press", detail: "★★★★ · $$$ · American", mapsUrl: mapsSearch("The Vintage Press Visalia") },
      { name: "Chipotle Mexican Grill", detail: "★★★ · $ · Mexican", mapsUrl: mapsSearch("Chipotle Visalia CA") },
    ],
  }),
  buildArea({
    slug: "clovis-ca",
    name: "Clovis",
    state: "California",
    stateAbbr: "CA",
    zipCode: "93612",
    population: "120,124",
    medianAge: "36.9",
    whiteCollar: "67.4%",
    medianIncome: "$78,642",
    schools: [
      { name: "Clovis High School", detail: "1055 Fowler Ave, Clovis, CA 93612", mapsUrl: mapsSearch("Clovis High School CA") },
      { name: "Clovis West High School", detail: "1070 E Teague Ave, Fresno, CA 93720", mapsUrl: mapsSearch("Clovis West High School") },
      { name: "Clovis Community College", detail: "10309 N Willow Ave, Fresno, CA 93730", mapsUrl: mapsSearch("Clovis Community College") },
    ],
    restaurants: [
      { name: "House of JuJu", detail: "★★★★ · $$ · Burgers", mapsUrl: mapsSearch("House of JuJu Clovis CA") },
      { name: "TGI Fridays", detail: "★★★ · $$ · American", mapsUrl: mapsSearch("TGI Fridays Clovis CA") },
      { name: "Panda Express", detail: "★★★ · $ · Chinese", mapsUrl: mapsSearch("Panda Express Clovis CA") },
    ],
  }),
  buildArea({
    slug: "roseville-ca",
    name: "Roseville",
    state: "California",
    stateAbbr: "CA",
    zipCode: "95661",
    population: "147,773",
    medianAge: "38.2",
    whiteCollar: "71.8%",
    medianIncome: "$93,156",
    schools: [
      { name: "Roseville High School", detail: "1 Raider Ln, Roseville, CA 95678", mapsUrl: mapsSearch("Roseville High School CA") },
      { name: "Woodcreek High School", detail: "2551 Wooodcreek Oaks Blvd, Roseville, CA 95747", mapsUrl: mapsSearch("Woodcreek High School Roseville") },
      { name: "Sierra College", detail: "5000 Rocklin Rd, Rocklin, CA 95677", mapsUrl: mapsSearch("Sierra College Rocklin") },
    ],
    restaurants: [
      { name: "The Monk's Cellar", detail: "★★★★ · $$ · Pub & Grill", mapsUrl: mapsSearch("The Monk's Cellar Roseville CA") },
      { name: "Paul Martin's American Grill", detail: "★★★★ · $$ · American", mapsUrl: mapsSearch("Paul Martin's Roseville CA") },
      { name: "Starbucks", detail: "★★★ · $ · Coffee", mapsUrl: mapsSearch("Starbucks Roseville CA") },
    ],
  }),
];

export function getAreaBySlug(slug: string): ServiceArea | undefined {
  return SERVICE_AREAS.find((area) => area.slug === slug);
}

export function getAllAreaSlugs(): string[] {
  return SERVICE_AREAS.map((area) => area.slug);
}

export type ServiceCityCard = Pick<
  ServiceArea,
  "slug" | "name" | "stateAbbr" | "mapsUrl" | "embedUrl"
>;

export const SERVICE_CITY_CARDS: ServiceCityCard[] = SERVICE_AREAS.map(
  ({ slug, name, stateAbbr, mapsUrl, embedUrl }) => ({
    slug,
    name,
    stateAbbr,
    mapsUrl,
    embedUrl,
  }),
);
