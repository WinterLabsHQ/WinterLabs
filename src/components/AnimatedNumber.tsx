"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

/**
 * Counts up to `value` when scrolled into view. Non-numeric values
 * (e.g. "MIT", "RTL→GDS") are rendered as-is, so it can be used uniformly
 * across all stat tiles.
 */
export default function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  duration = 1.6,
}: {
  value: number | string;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const isNumeric = typeof value === "number";
  const [display, setDisplay] = useState(isNumeric ? "0" : String(value));

  useEffect(() => {
    if (!isNumeric) {
      setDisplay(String(value));
      return;
    }
    if (!inView) return;
    const controls = animate(0, value as number, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v).toLocaleString()),
    });
    return () => controls.stop();
  }, [inView, isNumeric, value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
