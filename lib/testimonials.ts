export type Testimonial = {
  name: string;
  location: string;
  initials: string;
  color: string;
  rating: number;
  text: string;
};

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    name: "Michael Anderson",
    location: "McKinney, TX",
    initials: "MA",
    color: "#2D8CFF",
    rating: 5,
    text: "They arrived within an hour for our burst pipe emergency. Professional, courteous, and fixed everything perfectly. Already saved their number for next time.",
  },
  {
    name: "Sarah Mitchell",
    location: "Denton, TX",
    initials: "SM",
    color: "#1768D1",
    rating: 5,
    text: "Upfront pricing with no surprises. The technician explained every step and left our kitchen spotless. Best plumbing service we've used in Denton.",
  },
  {
    name: "David Thompson",
    location: "Rockwall, TX",
    initials: "DT",
    color: "#0B1F3A",
    rating: 5,
    text: "Our water heater failed on a Sunday morning. They had a new unit installed by evening. Incredible response time and completely fair pricing.",
  },
  {
    name: "Jennifer Wilson",
    location: "McKinney, TX",
    initials: "JW",
    color: "#4FA0FF",
    rating: 5,
    text: "From the first phone call to the final walkthrough, everything was seamless. They treat your home with real respect — shoe covers and all.",
  },
  {
    name: "Robert Martinez",
    location: "Denton, TX",
    initials: "RM",
    color: "#2D8CFF",
    rating: 5,
    text: "Had a persistent drain clog for months. One visit from Precision Plumbing and it's been perfect ever since. True professionals.",
  },
  {
    name: "Emily Johnson",
    location: "Rockwall, TX",
    initials: "EJ",
    color: "#1768D1",
    rating: 5,
    text: "Licensed, insured, and genuinely skilled. They diagnosed a sewer issue two other companies missed. Saved us thousands.",
  },
] as const;

export function getTestimonialsByCities(
  cities: readonly string[],
): Testimonial[] {
  const normalized = cities.map((city) => city.toLowerCase());
  return TESTIMONIALS.filter((testimonial) =>
    normalized.some((city) =>
      testimonial.location.toLowerCase().includes(city),
    ),
  );
}
