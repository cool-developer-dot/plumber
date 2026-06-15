"use client";

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
    description: "24/7 rapid response for urgent plumbing crises.",
    href: "/services/emergency-plumbing",
    icon: Zap,
    image: "/services/emergency-plumbing.jpg",
    imageAlt: "Emergency plumber responding to an urgent plumbing call",
  },
  {
    title: "Leak Repair",
    description: "Precision detection and lasting leak solutions.",
    href: "/services/leak-repair",
    icon: Droplets,
    image: "/services/leak-repair.jpg",
    imageAlt: "Professional plumber repairing a water leak",
  },
  {
    title: "Drain Cleaning",
    description: "Clear blockages and restore full water flow.",
    href: "/services/drain-cleaning",
    icon: Waves,
    image: "/services/drain-cleaning.jpg",
    imageAlt: "Plumber performing professional drain cleaning",
  },
  {
    title: "Water Heater Services",
    description: "Expert install, repair, and maintenance.",
    href: "/services/water-heater",
    icon: Flame,
    image: "/services/water-heater.jpg",
    imageAlt: "Technician servicing a residential water heater",
  },
  {
    title: "Pipe Repair",
    description: "Durable repairs for every pipe system.",
    href: "/services/pipe-repair",
    icon: Wrench,
    image: "/services/pipe-repair.jpg",
    imageAlt: "Copper and PVC pipe repair work",
  },
  {
    title: "Sewer Line Services",
    description: "Advanced diagnostics and sewer solutions.",
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
    <motion.div
      className="mx-auto max-w-2xl text-center"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: EASE }}
    >
      <p className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#0066FF]">
        Services &amp; Service Areas
      </p>
      <h2
        id="services-heading"
        className="text-[1.85rem] font-bold leading-tight tracking-tight text-[#001B44] sm:text-[2.25rem] lg:text-[2.5rem]"
      >
        Professional Plumbing Services Across Your Area
      </h2>
      <p className="mt-4 text-[1rem] leading-relaxed text-[#4B5563] sm:text-[1.05rem]">
        From emergency repairs to full system upgrades — licensed technicians
        delivering fast, reliable service throughout Texas.
      </p>
    </motion.div>
  );
}

function ServiceCard({
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
      className="group relative flex flex-col overflow-hidden rounded-xl border border-[#EAECEF] bg-white shadow-[0_2px_8px_rgba(0,27,68,0.06)] transition-shadow duration-300 hover:border-[#D6E8FF] hover:shadow-[0_12px_40px_rgba(0,27,68,0.14)]"
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
    >
      {/* Image header — always fully visible */}
      <div className="relative h-44 w-full shrink-0 overflow-hidden sm:h-48">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001B44]/50 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[#0066FF]/0 transition-colors duration-500 group-hover:bg-[#0066FF]/10" />

        {/* Floating icon on image */}
        <motion.div
          className="absolute bottom-3 left-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/30 bg-white/95 text-[#0066FF] shadow-lg backdrop-blur-sm"
          whileHover={{ scale: 1.08 }}
          transition={{ type: "spring", stiffness: 400, damping: 22 }}
        >
          <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
        </motion.div>
      </div>

      {/* Text content — solid white, always readable */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-[1rem] font-semibold text-[#001B44] transition-colors group-hover:text-[#0066FF]">
          {title}
        </h3>
        <p className="mt-1.5 text-[0.875rem] leading-relaxed text-[#4B5563]">
          {description}
        </p>

        <div className="mt-4 flex items-center gap-1.5 text-[0.8rem] font-semibold text-[#0066FF]">
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
}

export default function ServicesSection() {
  return (
    <section
      className="bg-white py-20 sm:py-24 lg:py-28"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-6 lg:px-8">
        <SectionHeader />

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
