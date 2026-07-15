"use client";

import { Fragment } from "react";
import { motion, type Variants } from "framer-motion";
import { scaleIn } from "@/lib/motion";

const steps = [
  { k: "spec", glyph: "❝ ❞", title: "Spec", sub: "Markdown intent" },
  { k: "rtl", glyph: "</>", title: "RTL", sub: "Verilog / HDL" },
  { k: "verify", glyph: "✓", title: "Verify", sub: "Sim + formal" },
  { k: "pnr", glyph: "⚙", title: "Place & Route", sub: "OpenROAD" },
  { k: "gds", glyph: "▣", title: "Silicon", sub: "GDSII · tapeout" },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.16 } },
};

const node = scaleIn;

export default function Pipeline() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      className="glass relative overflow-hidden rounded-3xl p-6 sm:p-10"
    >
      {/* backdrop sheen */}
      <div className="pointer-events-none absolute -left-10 top-0 h-full w-40 bg-gradient-to-r from-frost-500/10 to-transparent blur-2xl" />

      <div className="relative flex flex-col items-stretch gap-3 md:flex-row md:items-center">
        {steps.map((s, i) => (
          <Fragment key={s.k}>
            <motion.div
              variants={node}
              className="group relative flex flex-1 items-center gap-4 rounded-2xl border border-frost-300/12 bg-white/[0.02] p-4 md:flex-col md:items-center md:gap-3 md:p-5 md:text-center"
            >
              <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl border border-frost-300/20 bg-frost-500/10 font-mono text-base text-frost-300 shadow-[0_0_20px] shadow-frost-500/10 transition group-hover:shadow-frost-500/30">
                {s.glyph}
              </div>
              <div>
                <div className="font-display text-sm font-semibold text-ice">
                  {s.title}
                </div>
                <div className="mt-0.5 font-mono text-[0.7rem] text-ice-dim">
                  {s.sub}
                </div>
              </div>
              <span className="absolute right-3 top-3 font-mono text-[0.6rem] text-frost-400/50 md:left-3 md:right-auto">
                0{i + 1}
              </span>
            </motion.div>

            {i < steps.length - 1 && (
              <div className="relative mx-auto h-6 w-px flex-none overflow-hidden bg-frost-300/15 md:h-px md:w-10">
                <motion.span
                  className="absolute inset-0 hidden bg-gradient-to-r from-transparent via-aurora-cyan to-transparent md:block"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2,
                  }}
                />
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </motion.div>
  );
}
