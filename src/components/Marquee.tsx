"use client";

import { motion } from "framer-motion";

const items = [
  "Chip Design Harness",
  "AI Tapeout",
  "AI CFO",
  "Autonomous Agents",
  "ML Frameworks",
  "Open Source",
  "RTL → GDSII",
  "Verification",
  "Efficient Inference",
  "Developer Tooling",
];

export default function Marquee() {
  const loop = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-frost-300/10 bg-white/[0.015] py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />
      <motion.div
        className="flex w-max gap-10 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
      >
        {loop.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 font-display text-lg font-medium text-ice-muted"
          >
            {item}
            <span className="text-frost-400/60">❄</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
