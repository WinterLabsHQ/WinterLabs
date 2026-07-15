"use client";

import { motion } from "framer-motion";

const items = [
  "Chip Design Harness",
  "AI Tapeout",
  "RISC-V Processor IP",
  "Agentic EDA",
  "RTL → GDSII",
  "Edge ML",
  "MISRA / CERT C",
  "Open Source",
  "Signal Processing",
  "Functional Safety",
  "OpenLANE",
  "MCP",
];

/**
 * Seamless, full-bleed ticker. Each item carries its own trailing margin, so a
 * two-copy track can loop at exactly -50% with no visible seam or gap.
 */
export default function Marquee() {
  const track = [...items, ...items];

  return (
    <div className="relative w-full overflow-hidden py-6">
      {/* edge fades matched to the page background */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ink to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink to-transparent sm:w-32" />

      <motion.div
        className="flex w-max flex-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
      >
        {track.map((item, i) => (
          <div key={i} className="mr-3 flex flex-none items-center sm:mr-4">
            <span className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-full border border-frost-300/12 bg-white/[0.03] px-5 py-2.5 font-display text-sm font-medium text-ice-muted backdrop-blur-sm">
              <span className="text-frost-400/70">❄</span>
              {item}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
