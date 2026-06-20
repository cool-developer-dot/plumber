"use client";

import { memo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Droplets,
  Flame,
  ShieldCheck,
  Waves,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const SERVICES = [
  {
    title: "Emergency Plumbing",
    description: "24/7 rapid response for urgent plumbing crises. Licensed technicians dispatched immediately.",
    href: "/services/emergency-plumbing",
    icon: Zap,
    image: "/services/emergency-plumbing.jpg",
    imageAlt: "Emergency plumber responding to an urgent plumbing call",
  },
  {
    title: "Leak Repair",
    description: "Precision detection and lasting leak solutions. We find the source and fix it right.",
    href: "/services/leak-repair",
    icon: Droplets,
    image: "/services/leak-repair.jpg",
    imageAlt: "Professional plumber repairing a water leak",
  },
  {
    title: "Drain Cleaning",
    description: "Clear blockages and restore full water flow with advanced drain technology.",
    href: "/services/drain-cleaning",
    icon: Waves,
    image: "/services/drain-cleaning.jpg",
    imageAlt: "Plumber performing professional drain cleaning",
  },
  {
    title: "Water Heater Services",
    description: "Expert installation, repair, and maintenance for tank and tankless systems.",
    href: "/services/water-heater",
    icon: Flame,
    image: "/services/water-heater.jpg",
    imageAlt: "Technician servicing a residential water heater",
  },
  {
    title: "Pipe Repair",
    description: "Durable repairs for every pipe system — copper, PVC, PEX, and more.",
    href: "/services/pipe-repair",
    icon: Wrench,
    image: "/services/pipe-repair.jpg",
    imageAlt: "Copper and PVC pipe repair work",
  },
  {
    title: "Sewer Line Services",
    description: "Advanced diagnostics and complete sewer solutions with camera inspection.",
    href: "/services/sewer-line",
    icon: ShieldCheck,
    image: "/services/sewer-line.jpg",
    imageAlt: "Professional sewer line inspection and repair",
  },
] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

function SectionHeader() {
  return (
    <div
      className="mx-auto max-w-2xl text-center"
    >
      <p className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-electric-blue">
        Services
      </p>
      <h2
        id="services-heading"
        className="text-[1.85rem] font-bold leading-tight tracking-tight text-deep-charcoal sm:text-[2.25rem] lg:text-[2.5rem]"
      >
        Professional Plumbing Services Across Texas
      </h2>
      <p className="mt-4 text-[1rem] leading-relaxed text-cool-gray sm:text-[1.05rem]">
        From emergency repairs to premium installations — licensed technicians
        serving McKinney, Denton, and Rockwall with upfront pricing.
      </p>
    </div>
  );
}

const ServiceCard = memo(function ServiceCard({
  title,
  description,
  href,
  icon: Icon,
  image,
  imageAlt,
}: {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
}) {
  return (
    <motion.a
      href={href}
      variants={itemVariants}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-[rgba(21,23,27,0.08)] bg-white shadow-[0_2px_8px_rgba(21,23,27,0.04)] transition-shadow duration-300 hover:border-electric-blue/20 hover:shadow-[0_12px_40px_rgba(21,23,27,0.1)]"
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
    >
      <div className="relative h-44 w-full shrink-0 overflow-hidden sm:h-48">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
          quality={75}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/50 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-electric-blue/0 transition-colors duration-500 group-hover:bg-electric-blue/10" />

        <div className="absolute bottom-3 left-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/30 bg-white/95 text-electric-blue shadow-lg backdrop-blur-sm">
          <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-[1rem] font-semibold text-deep-charcoal transition-colors group-hover:text-electric-blue">
          {title}
        </h3>
        <p className="mt-1.5 text-[0.875rem] leading-relaxed text-cool-gray">
          {description}
        </p>

        <div className="mt-4 flex items-center gap-1.5 text-[0.8rem] font-semibold text-electric-blue">
          <span>Learn more</span>
          <ArrowRight
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
            strokeWidth={2.25}
            aria-hidden
          />
        </div>
      </div>
    </motion.a>
  );
});

export default function ServicesSection() {
  return (
    <section
      className="bg-soft-white py-20 sm:py-24 lg:py-28"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          <SectionHeader />
        </motion.div>

        <motion.div
          className="mt-14 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 lg:mt-20 lg:grid-cols-3 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
