"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Lab } from "@/lib/labs";
import { scaleIn } from "@/lib/motion";

export default function LabCard({ lab }: { lab: Lab }) {
  const content = (
    <motion.article
      variants={scaleIn}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="group relative h-full overflow-hidden rounded-3xl border border-frost-300/12 bg-panel/40 p-7 backdrop-blur-md"
    >
      {/* accent glow */}
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-40 blur-3xl transition-opacity duration-500 group-hover:opacity-70"
        style={{ background: lab.accent }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `linear-gradient(90deg, transparent, ${lab.accent}, transparent)`,
        }}
      />

      <div className="relative flex h-full flex-col">
        <div className="flex items-center justify-between">
          <span
            className="flex h-12 w-12 items-center justify-center rounded-2xl border font-mono text-sm font-semibold"
            style={{
              color: lab.accent,
              borderColor: `${lab.accent}44`,
              background: `${lab.accent}12`,
            }}
          >
            {lab.glyph}
          </span>
          {lab.comingSoon ? (
            <span className="rounded-full border border-frost-300/20 px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-ice-dim">
              Soon
            </span>
          ) : (
            <span className="font-mono text-xs text-ice-dim">
              {lab.projects.length} project
              {lab.projects.length === 1 ? "" : "s"}
            </span>
          )}
        </div>

        <h3 className="mt-6 font-display text-2xl font-semibold text-ice">
          {lab.name}
        </h3>
        <p className="mt-1 text-sm font-medium" style={{ color: lab.accent }}>
          {lab.tagline}
        </p>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-ice-muted">
          {lab.description}
        </p>

        {!lab.comingSoon && (
          <div className="mt-6 flex items-center gap-2 text-sm font-medium text-frost-300">
            Explore lab
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </div>
        )}
      </div>
    </motion.article>
  );

  if (lab.comingSoon) {
    return <div className="h-full opacity-80">{content}</div>;
  }

  return (
    <Link href={`/labs/${lab.slug}`} className="block h-full">
      {content}
    </Link>
  );
}
