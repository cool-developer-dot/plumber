"use client";

import { useEffect, useRef, useState } from "react";
import {
  animate,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function CountUp({
  to,
  decimals = 0,
  duration = 2,
  delay = 0,
  className = "",
}: {
  to: number;
  decimals?: number;
  duration?: number;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const motionValue = useMotionValue(0);
  const formatted = useTransform(motionValue, (latest) => {
    if (decimals > 0) return latest.toFixed(decimals);
    return Math.round(latest).toLocaleString("en-US");
  });
  const [display, setDisplay] = useState(
    decimals > 0 ? (0).toFixed(decimals) : "0",
  );

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(motionValue, to, {
      duration,
      delay,
      ease: EASE,
    });
    return () => controls.stop();
  }, [isInView, to, duration, delay, motionValue]);

  useEffect(() => {
    const unsubscribe = formatted.on("change", (value) => setDisplay(value));
    return unsubscribe;
  }, [formatted]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {display}
    </span>
  );
}
