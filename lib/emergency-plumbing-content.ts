export const EMERGENCY_PLUMBING_META = {
  title:
    "24/7 Emergency Plumbing Services | McKinney, Denton & Rockwall TX",
  description:
    "Licensed 24/7 emergency plumbers in McKinney, Denton, and Rockwall, TX. Burst pipe repair, water leak repair, drain cleaning, sewer backups, and water heater emergencies — same-day dispatch with upfront pricing.",
  path: "/services/emergency-plumbing",
  image: "/services/emergency/hero-plumber.jpg",
  imageAlt:
    "Licensed emergency plumber inspecting a residential plumbing system at a North Texas home",
} as const;

export const EMERGENCY_IMAGES = {
  hero: {
    src: "/services/emergency/hero-plumber.jpg",
    alt: "Licensed emergency plumber responding to a residential plumbing emergency in North Texas",
  },
  team: {
    src: "/services/emergency/team.jpg",
    alt: "Precision Plumbing Texas technicians reviewing an emergency repair plan on-site",
  },
  arrival: {
    src: "/services/emergency/arrival.jpg",
    alt: "Emergency plumber arriving at a customer's home with professional equipment",
  },
  cta: {
    src: "/services/emergency/service-van.jpg",
    alt: "Precision Plumbing Texas service vehicle ready for 24/7 emergency dispatch",
  },
} as const;

export const EMERGENCY_HERO = {
  eyebrow: "24/7 Emergency Dispatch · North Texas",
  headline: "24/7 Emergency Plumbing Services You Can Count On",
  subheadline:
    "Burst pipe at midnight. A sewer line backing up before guests arrive. A water heater that quits on a cold morning. When a plumbing emergency hits your home or business in McKinney, Denton, or Rockwall, you need a licensed emergency plumber who shows up prepared — not tomorrow, but now.",
  responseBadge: {
    title: "Average 60-Minute Response",
    subtitle: "Across McKinney, Denton & Rockwall",
  },
  trustBadges: [
    "Texas-Licensed Plumbers",
    "Fully Insured & Bonded",
    "Upfront Flat-Rate Pricing",
    "20+ Years Local Experience",
  ] as const,
} as const;

export const EMERGENCY_SECTIONS = {
  situations: {
    eyebrow: "Common Plumbing Emergencies",
    title: "Emergency Situations We Handle Day and Night",
    description:
      "Not every plumbing problem can wait until morning. Our emergency plumbing repair team is trained and equipped for the situations North Texas homeowners face most — from frozen burst pipes in McKinney winters to sewer backups near Lake Ray Hubbard in Rockwall.",
  },
  whyChoose: {
    eyebrow: "Why Homeowners Call Us First",
    title: "Why Choose Our Emergency Plumbing Team",
    description:
      "Since 2004, Precision Plumbing Texas has handled thousands of emergency calls across Collin, Denton, and Rockwall counties. We are not a call center routing you to the highest bidder — we are your local licensed plumbers, with trucks stocked and technicians ready to roll.",
  },
  solutions: {
    eyebrow: "Targeted Emergency Repairs",
    title: "Our Emergency Plumbing Solutions",
    description:
      "Every emergency is different. Whether you need emergency pipe repair behind a wall or emergency water heater repair before the weekend, our technicians diagnose the root cause and fix it right — not just patch the symptom.",
  },
  process: {
    eyebrow: "Simple, Stress-Free Process",
    title: "How Our Emergency Service Works",
    description:
      "We know you are already dealing with enough stress. Our process is designed to get a qualified emergency plumber to your door fast, with clear communication and no pricing surprises along the way.",
  },
  urgency: {
    eyebrow: "Do Not Wait",
    title: "Why Immediate Emergency Repairs Matter",
    description:
      "A slow drip today can mean thousands in restoration costs next week. Understanding what is at risk helps you make the right call — and the right call is almost always sooner rather than later.",
  },
  serviceAreas: {
    eyebrow: "Local Emergency Coverage",
    title: "Emergency Plumber Service Areas",
    description:
      "We live and work in the communities we serve. That means faster dispatch times, technicians who know local plumbing systems, and a team that treats your home the way we would treat our own.",
  },
  testimonials: {
    eyebrow: "Verified Customer Reviews",
    title: "What Emergency Plumbing Customers Say",
    description:
      "When pipes fail at the worst possible moment, homeowners across McKinney, Denton, and Rockwall trust us to show up, explain the problem clearly, and fix it without runaround.",
  },
  faq: {
    eyebrow: "Emergency Plumbing FAQ",
    title: "Questions About Our 24/7 Emergency Service",
    description:
      "Straight answers from our team — no jargon, no pressure. If your situation is urgent, skip the FAQ and call us directly. We are here around the clock.",
  },
  finalCta: {
    eyebrow: "Emergency Dispatch Available Now",
    headline: "Need an Emergency Plumber Right Now?",
    description:
      "A plumbing emergency will not fix itself. Our licensed dispatch team is standing by 24/7 to send an emergency plumber to your home in McKinney, Denton, or Rockwall — with a written estimate before any work begins.",
  },
} as const;

export const EMERGENCY_SITUATIONS = [
  {
    title: "Burst Pipe Repair",
    description:
      "North Texas temperature swings can stress aging copper and PVC lines until they fail without warning. We locate the break, shut off water at the source, and perform emergency pipe repair on the spot — protecting your floors, walls, and belongings from further damage.",
    image: "/services/pipe-repair/hero-pipe-repair.jpg",
    imageAlt: "Emergency burst pipe repair by a licensed plumber in a residential home",
    href: "/services/pipe-repair",
  },
  {
    title: "Water Leak Repair",
    description:
      "Hidden slab leaks and pinhole leaks behind drywall can waste hundreds of gallons before you notice a stain. Our team uses electronic leak detection to pinpoint the source, then completes water leak repair with minimal disruption to your home.",
    image: "/services/leak-repair.jpg",
    imageAlt: "Professional water leak detection and repair under a kitchen sink",
    href: "/services/leak-repair",
  },
  {
    title: "Overflowing Toilets",
    description:
      "An overflowing toilet is more than an inconvenience — it is a sanitation emergency that can contaminate flooring and create health risks within hours. We clear the blockage, inspect the trap and drain line, and restore your bathroom to safe working order.",
    image: "/services/drain-cleaning.jpg",
    imageAlt: "Emergency plumber clearing an overflowing toilet and drain line",
    href: "/services/drain-cleaning",
  },
  {
    title: "Clogged Drain Repair",
    description:
      "Kitchen grease buildup, hair clogs, and tree root intrusion can stop your drains cold. Our emergency drain cleaning service clears main lines and branch drains using professional-grade equipment — not store-bought chemicals that damage pipes.",
    image: "/services/drain-cleaning.jpg",
    imageAlt: "Emergency drain cleaning service restoring water flow in a home",
    href: "/services/drain-cleaning",
  },
  {
    title: "Sewer Backup Repair",
    description:
      "Raw sewage backing up through floor drains or fixtures requires immediate attention. We perform camera inspection to identify the blockage or break, then execute sewer backup repair to restore safe, proper flow to your sewer line.",
    image: "/services/sewer-line/hero-sewer-inspection.jpg",
    imageAlt: "Emergency sewer backup repair and line inspection service",
    href: "/services/sewer-line-services",
  },
  {
    title: "Water Heater Emergencies",
    description:
      "No hot water, pooling around the tank, or a pressure relief valve that will not stop hissing — water heater failures demand fast action. We repair all major brands on-site and offer emergency water heater replacement when repair is not safe or cost-effective.",
    image: "/services/water-heater/hero-water-heater.jpg",
    imageAlt: "Emergency water heater repair by a licensed technician in Texas",
    href: "/services/water-heater-services",
  },
] as const;

export const EMERGENCY_WHY_CHOOSE = [
  {
    title: "Licensed & Insured Professionals",
    description:
      "Every technician on our emergency roster holds a valid Texas plumbing license and carries full liability insurance. You will never have an unqualified subcontractor in your home — only vetted, uniformed professionals.",
  },
  {
    title: "Same-Day Emergency Response",
    description:
      "Most emergency plumbing calls in McKinney, Denton, and Rockwall are resolved the same day you call. Our dispatch team prioritizes active leaks, sewer backups, and total water loss above all else.",
  },
  {
    title: "True 24/7 Availability",
    description:
      "Plumbing emergencies do not follow business hours. Neither do we. Call at 2 AM on a holiday and you will reach a real dispatcher — not voicemail — who sends a licensed plumber to your address.",
  },
  {
    title: "Transparent, Upfront Pricing",
    description:
      "Before a wrench turns, you receive a written flat-rate estimate. We explain what needs to happen and why, so you can make an informed decision without worrying about a surprise invoice later.",
  },
  {
    title: "Modern Diagnostic Equipment",
    description:
      "Our trucks carry video inspection cameras, electronic leak detectors, hydro-jetting tools, and pipe repair materials for copper, PEX, and PVC systems. We diagnose accurately the first time.",
  },
  {
    title: "Local North Texas Expertise",
    description:
      "We understand the plumbing challenges unique to this region — hard water corrosion, expansive clay soil shifting slab lines, and freeze damage in older McKinney and Denton neighborhoods. That local knowledge saves you time and money.",
  },
] as const;

export const EMERGENCY_SOLUTIONS = [
  {
    title: "Emergency Burst Pipe Repair",
    description:
      "Immediate isolation and replacement of ruptured supply lines, including post-repair pressure testing to confirm the system is secure before we leave.",
    href: "/services/pipe-repair",
    image: "/services/pipe-repair/hero-pipe-repair.jpg",
    imageAlt: "Emergency burst pipe repair on a residential water supply line",
  },
  {
    title: "Emergency Leak Detection",
    description:
      "Non-invasive acoustic and thermal leak detection finds hidden leaks under slabs, behind walls, and beneath foundations — without unnecessary demolition.",
    href: "/services/leak-repair",
    image: "/services/leak-repair.jpg",
    imageAlt: "Electronic leak detection equipment used during an emergency service call",
  },
  {
    title: "Emergency Drain Cleaning",
    description:
      "Mechanical snaking and hydro-jetting for stubborn clogs in kitchen lines, shower drains, and main sewer connections that back up without warning.",
    href: "/services/drain-cleaning",
    image: "/services/drain-cleaning.jpg",
    imageAlt: "Professional emergency drain cleaning at a residential property",
  },
  {
    title: "Emergency Sewer Repair",
    description:
      "Camera-guided diagnosis and repair for collapsed, root-invaded, or offset sewer lines causing backups in your home or yard.",
    href: "/services/sewer-line-services",
    image: "/services/sewer-line/hero-sewer-inspection.jpg",
    imageAlt: "Sewer camera inspection during an emergency sewer repair call",
  },
  {
    title: "Emergency Water Heater Repair",
    description:
      "Diagnosis and repair for leaking tanks, failed heating elements, faulty thermostats, and gas valve issues — with replacement options when needed.",
    href: "/services/water-heater-services",
    image: "/services/water-heater/hero-water-heater.jpg",
    imageAlt: "Emergency water heater repair in a residential utility closet",
  },
  {
    title: "Toilet & Fixture Emergencies",
    description:
      "Rapid repair for running toilets, failed shutoff valves, broken flappers, and supply line leaks that threaten to flood bathrooms and laundry rooms.",
    href: "/services/drain-cleaning",
    image: "/services/emergency-plumbing.jpg",
    imageAlt: "Emergency repair of a residential toilet and bathroom fixture",
  },
] as const;

export const EMERGENCY_PROCESS_STEPS = [
  {
    number: "01",
    title: "Call Our 24/7 Dispatch Line",
    description:
      "Reach a live dispatcher any time of day or night. Tell us what is happening — active leak, no water, sewer smell, no hot water — and we will classify the urgency and assign the nearest available licensed plumber.",
  },
  {
    number: "02",
    title: "Your Technician Arrives Prepared",
    description:
      "Your emergency plumber arrives in a fully stocked service vehicle, typically within 60 minutes across McKinney, Denton, and Rockwall. We assess the situation, explain what we find, and provide a written estimate before starting work.",
  },
  {
    number: "03",
    title: "We Repair, Test & Clean Up",
    description:
      "Once you approve the estimate, we complete the emergency plumbing repair, pressure-test the system, and walk you through what was done. We leave your space clean and confirm everything is working before we close out the call.",
  },
] as const;

export const URGENCY_RISKS = [
  {
    title: "Water Damage Escalates Quickly",
    description:
      "A single burst supply line can release four to eight gallons of water per minute. Within an hour, that water saturates subflooring, ruins carpet padding, and wicks up drywall — turning a plumbing repair into a full restoration project.",
  },
  {
    title: "Mold Can Begin Within 48 Hours",
    description:
      "Moisture trapped behind walls and under cabinets creates the perfect environment for mold growth. What starts as a simple leak repair can lead to remediation costs that far exceed the original plumbing bill if water is not dried properly.",
  },
  {
    title: "Structural & Property Damage",
    description:
      "Persistent leaks weaken floor joists, compromise ceiling structures, and damage electrical systems in walls. The longer water sits, the more extensive — and expensive — the repairs become for both plumbing and construction.",
  },
  {
    title: "Delaying Costs More Than Acting",
    description:
      "Homeowners who wait often face compounding damage. A $300 emergency pipe repair today can prevent a $5,000 restoration job next month. Early intervention is almost always the most cost-effective path.",
  },
  {
    title: "Health & Safety Concerns",
    description:
      "Sewer backups expose your family to E. coli, salmonella, and other pathogens. Gas line leaks near water heaters pose fire risks. Standing water near electrical outlets creates shock hazards. These situations require immediate professional attention.",
  },
] as const;

export const EMERGENCY_SERVICE_AREAS = [
  {
    slug: "mckinney-tx",
    name: "McKinney",
    stateAbbr: "TX",
    image: "/services/emergency/mckinney-home.jpg",
    imageAlt: "Residential home in McKinney, Texas served by emergency plumbing services",
    headline: "Emergency Plumber in McKinney, TX",
    description:
      "From historic downtown homes with aging galvanized pipes to new construction in Craig Ranch, McKinney properties face unique plumbing challenges — especially during hard freezes. Our McKinney emergency plumbers know the neighborhoods, the common pipe materials, and the fastest routes to your door.",
    note: "Serving Craig Ranch, Eldorado Parkway, Adriatica & surrounding Collin County",
  },
  {
    slug: "denton-tx",
    name: "Denton",
    stateAbbr: "TX",
    image: "/services/emergency/denton-home.jpg",
    imageAlt: "Residential property in Denton, Texas with emergency plumbing coverage",
    headline: "Emergency Plumber in Denton, TX",
    description:
      "Denton's mix of established neighborhoods and rapid new development means plumbing systems vary widely — from cast iron drains in older homes near the square to PEX systems in University Drive subdivisions. We handle emergency calls across Denton with the same fast response and upfront pricing.",
    note: "Serving Robson Ranch, Corinth, Lantana & surrounding Denton County",
  },
  {
    slug: "rockwall-tx",
    name: "Rockwall",
    stateAbbr: "TX",
    image: "/services/emergency/rockwall-home.jpg",
    imageAlt: "Lakefront home in Rockwall, Texas with 24/7 emergency plumber service",
    headline: "Emergency Plumber in Rockwall, TX",
    description:
      "Lakefront properties and hillside homes in Rockwall often deal with sewer line stress from soil movement and high water tables. Our Rockwall emergency plumbing team is experienced with slab leaks, sewer backups, and water heater failures common in this growing lakeside community.",
    note: "Serving The Shores, Chandlers Landing, Heath & surrounding Rockwall County",
  },
] as const;

export const EMERGENCY_TESTIMONIALS = [
  {
    name: "Greg & Linda Harlan",
    location: "McKinney, TX",
    initials: "GH",
    color: "#2D8CFF",
    rating: 5,
    text: "A pipe burst in our garage at 11 PM on a Friday. Precision Plumbing had someone here in 45 minutes, shut off the water, and replaced the damaged section before midnight. They saved us from what could have been a much worse situation.",
  },
  {
    name: "Angela Reyes",
    location: "Denton, TX",
    initials: "AR",
    color: "#1768D1",
    rating: 5,
    text: "Our sewer line backed up into the laundry room on Christmas Eve. I expected to wait days. They came within the hour, cleared the line, and showed us camera footage of the root intrusion so we understood exactly what happened.",
  },
  {
    name: "Tom & Karen Whitfield",
    location: "Rockwall, TX",
    initials: "TW",
    color: "#0B1F3A",
    rating: 5,
    text: "Woke up to no hot water and a puddle around the water heater. The technician diagnosed a failed tank, gave us three replacement options with clear pricing, and had us back in hot water by dinner. No upselling — just honest advice.",
  },
  {
    name: "Marcus Chen",
    location: "McKinney, TX",
    initials: "MC",
    color: "#4FA0FF",
    rating: 5,
    text: "Had a slab leak that two other companies could not find. Precision Plumbing used electronic detection, pinpointed it under the kitchen, and repaired it through a small access point. Saved us from tearing up the entire floor.",
  },
  {
    name: "Patricia Boone",
    location: "Denton, TX",
    initials: "PB",
    color: "#2D8CFF",
    rating: 5,
    text: "Called at 6 AM when our main line clogged and every drain in the house stopped working. Flat-rate quote upfront, problem fixed in under two hours, and they even checked the other drains before leaving. Exactly the kind of service you want in an emergency.",
  },
  {
    name: "James & Sandra Holt",
    location: "Rockwall, TX",
    initials: "JH",
    color: "#1768D1",
    rating: 5,
    text: "Toilet overflowed while we were out of town and the house sitter panicked. Precision Plumbing responded fast, handled the cleanup line repair, and sent photos of the completed work. Professional from the first phone call to the last.",
  },
] as const;

export const EMERGENCY_FAQ_ITEMS = [
  {
    question: "What qualifies as a plumbing emergency?",
    answer:
      "A plumbing emergency is any situation that threatens property damage, creates a health hazard, or leaves you without essential water or sanitation service. Common examples include burst pipes, active water leaks you cannot stop, sewer backups, gas odors near water heaters, overflowing toilets that will not clear, and complete loss of hot water. If you are unsure, call us — our dispatch team will help you determine whether immediate service is needed or if a same-day appointment is appropriate.",
  },
  {
    question: "Are you available 24/7 for emergency plumbing?",
    answer:
      "Yes. Precision Plumbing Texas provides true 24/7 emergency plumbing service, 365 days a year — including weekends and holidays. When you call after hours, you speak with a live dispatcher who can send a licensed emergency plumber to your home in McKinney, Denton, or Rockwall. We do not use answering services that callback the next business day.",
  },
  {
    question: "How fast can an emergency plumber arrive?",
    answer:
      "For active emergencies in our primary service areas, our average response time is under 60 minutes. Response times vary based on current call volume, your exact location, and road conditions, but we always provide an estimated arrival window when you call and update you if anything changes. Active flooding and sewer backups are prioritized in our dispatch queue.",
  },
  {
    question: "Do you offer upfront pricing for emergency repairs?",
    answer:
      "Yes — upfront pricing is a core part of how we operate, even during emergency calls. After assessing the situation, your technician provides a written flat-rate estimate before any repair work begins. You approve the price first. There are no hidden fees, no hourly billing surprises, and no pressure to proceed if you choose not to.",
  },
  {
    question: "Which cities do you serve for emergency plumbing?",
    answer:
      "We provide 24/7 emergency plumbing across McKinney, Denton, and Rockwall, Texas, including surrounding communities in Collin, Denton, and Rockwall counties. If you are unsure whether your address falls within our service area, call our dispatch line and we will confirm coverage immediately.",
  },
  {
    question: "Can you repair burst pipes immediately on-site?",
    answer:
      "In most cases, yes. Our emergency service vehicles carry pipe repair materials for copper, PVC, and PEX systems, along with shutoff tools and temporary patching supplies. We isolate the damaged section, perform the repair, and pressure-test the line before leaving. If the damage is extensive — such as a fully compromised manifold or multiple breaks — we stabilize the system immediately and schedule follow-up work with a clear timeline.",
  },
] as const;
