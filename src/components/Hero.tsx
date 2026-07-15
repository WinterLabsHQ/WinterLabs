"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { Eyebrow } from "@/components/ui";
import ChipVisual from "@/components/ChipVisual";
import AnimatedNumber from "@/components/AnimatedNumber";

const stats = [
  { v: 5, l: "specialized labs" },
  { v: "RTL→GDS", l: "full flow focus" },
  { v: "Agentic", l: "by design" },
  { v: "Open", l: "source first" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-[76vh] items-center overflow-hidden pb-14 pt-24">
      {/* ---- hero backdrop ---- */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-[1]">
        {/* top spotlight */}
        <div className="absolute inset-x-0 top-0 h-[70%] bg-[radial-gradient(60%_55%_at_50%_-5%,rgba(31,133,255,0.22),transparent_70%)]" />

        {/* rotating aurora beams */}
        <motion.div
          className="absolute left-1/2 top-1/2 h-[130%] w-[22rem] -translate-x-1/2 -translate-y-1/2 opacity-30 blur-[90px]"
          style={{
            background:
              "linear-gradient(180deg, transparent, #1f85ff 45%, transparent)",
          }}
          animate={{ rotate: [12, 372] }}
          transition={{ duration: 44, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 h-[120%] w-[16rem] -translate-x-1/2 -translate-y-1/2 opacity-25 blur-[90px]"
          style={{
            background:
              "linear-gradient(180deg, transparent, #a78bfa 50%, transparent)",
          }}
          animate={{ rotate: [110, -250] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />

        {/* breathing core glow */}
        <motion.div
          className="absolute left-1/2 top-1/3 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-frost-600/20 blur-[120px]"
          animate={{ scale: [1, 1.12, 1], opacity: [0.45, 0.75, 0.45] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* brand hexagon motif */}
        <motion.svg
          viewBox="0 0 200 200"
          className="absolute right-[6%] top-[16%] hidden h-[30rem] w-[30rem] opacity-[0.06] lg:block"
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        >
          <polygon
            points="100,8 180,54 180,146 100,192 20,146 20,54"
            fill="none"
            stroke="#86c6ff"
            strokeWidth="0.6"
          />
          <polygon
            points="100,32 158,66 158,134 100,168 42,134 42,66"
            fill="none"
            stroke="#86c6ff"
            strokeWidth="0.4"
          />
        </motion.svg>

        {/* perspective grid floor */}
        <div
          className="absolute bottom-0 left-1/2 h-[46vh] w-[220%] -translate-x-1/2 opacity-[0.22] [transform:perspective(480px)_rotateX(62deg)]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(134,198,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(134,198,255,0.5) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage:
              "linear-gradient(to top, black 0%, transparent 85%)",
            WebkitMaskImage:
              "linear-gradient(to top, black 0%, transparent 85%)",
          }}
        />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.div variants={fadeUp}>
              <Eyebrow>Research × Product Studio</Eyebrow>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-6 font-display text-4xl font-semibold leading-[1.06] tracking-tight text-ice sm:text-5xl md:text-6xl"
            >
              Building the
              <br />
              <span className="text-gradient-anim">cold-forged future</span>
              <br />
              of intelligent systems.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-xl text-base leading-relaxed text-ice-muted sm:text-lg"
            >
              A collective of specialized labs designing an agentic silicon
              compiler, safety-certifiable RISC-V IP, edge ML, mission-grade
              avionics, and open source everyone can build on.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
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
              className="mt-10 grid max-w-xl grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4"
            >
              {stats.map((s) => (
                <div key={s.l} className="border-l border-frost-300/15 pl-4">
                  <div className="font-display text-2xl font-semibold text-ice">
                    {typeof s.v === "number" ? (
                      <AnimatedNumber value={s.v} />
                    ) : (
                      s.v
                    )}
                  </div>
                  <div className="mt-1 text-xs text-ice-dim">{s.l}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* product visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="animate-float-slow"
          >
            <ChipVisual />
          </motion.div>
        </div>
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
