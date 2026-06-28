"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

type ServiceSectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  headingId: string;
  align?: "center" | "left";
  className?: string;
};

export default function ServiceSectionHeader({
  eyebrow,
  title,
  description,
  headingId,
  align = "center",
  className = "",
}: ServiceSectionHeaderProps) {
  const alignment =
    align === "center"
      ? "mx-auto max-w-2xl text-center"
      : "max-w-xl text-left";

  return (
    <motion.div
      className={`${alignment} ${className}`.trim()}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: EASE }}
    >
      <p className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-electric-blue">
        {eyebrow}
      </p>
      <h2
        id={headingId}
        className="text-[1.85rem] font-bold leading-tight tracking-tight text-deep-charcoal sm:text-[2.25rem] lg:text-[2.5rem]"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-[1rem] leading-relaxed text-cool-gray sm:text-[1.05rem]">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
