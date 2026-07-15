"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { Eyebrow } from "@/components/ui";

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden pt-28">
      {/* orbiting glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 -z-[1] h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-frost-600/20 blur-[120px]"
        animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-4xl">
          <motion.div variants={fadeUp}>
            <Eyebrow>Research × Product Studio</Eyebrow>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-7 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ice sm:text-6xl md:text-7xl"
          >
            Building the
            <br />
            <span className="text-gradient">cold-forged future</span>
            <br />
            of intelligent systems.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-2xl text-lg leading-relaxed text-ice-muted sm:text-xl"
          >
            Winter Labs is a collective of specialized labs designing autonomous
            agents for chip design and tapeout, an AI CFO, new machine-learning
            frameworks, and open source software that everyone can build on.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/labs"
              className="group relative rounded-xl bg-gradient-to-r from-frost-500 to-frost-400 px-6 py-3.5 text-sm font-semibold text-ink shadow-xl shadow-frost-500/30 transition hover:shadow-frost-400/50 hover:brightness-110"
            >
              Explore the Labs
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-frost-300/20 bg-white/[0.02] px-6 py-3.5 text-sm font-semibold text-ice backdrop-blur transition hover:border-frost-300/40 hover:bg-white/[0.04]"
            >
              Work with us
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-16 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4"
          >
            {[
              { v: "4", l: "specialized labs" },
              { v: "RTL→GDS", l: "full flow focus" },
              { v: "Agentic", l: "by design" },
              { v: "Open", l: "source first" },
            ].map((s) => (
              <div key={s.l} className="border-l border-frost-300/15 pl-4">
                <div className="font-display text-2xl font-semibold text-ice">
                  {s.v}
                </div>
                <div className="mt-1 text-xs text-ice-dim">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ice-dim"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-frost-300/30 p-1">
          <div className="h-2 w-1 rounded-full bg-frost-300" />
        </div>
      </motion.div>
    </section>
  );
}
