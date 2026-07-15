"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { projectsForLab, type Lab } from "@/lib/labs";
import { scaleIn } from "@/lib/motion";

export default function LabCard({ lab }: { lab: Lab }) {
  const projectCount = projectsForLab(lab.slug).length;
  const ref = useRef<HTMLElement>(null);

  // pointer-follow 3D tilt + spotlight
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [8, -8]), {
    stiffness: 200,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(px, [0, 1], [-8, 8]), {
    stiffness: 200,
    damping: 18,
  });
  const spotlight = useTransform(
    () =>
      `radial-gradient(240px circle at ${px.get() * 100}% ${py.get() * 100}%, ${lab.accent}26, transparent 70%)`,
  );

  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  };
  const handleLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  const interactive = !lab.comingSoon;

  const content = (
    <motion.article
      ref={ref}
      variants={scaleIn}
      onMouseMove={interactive ? handleMove : undefined}
      onMouseLeave={handleLeave}
      whileHover={interactive ? { y: -8 } : undefined}
      style={
        interactive
          ? { rotateX, rotateY, transformPerspective: 900 }
          : undefined
      }
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="group relative h-full overflow-hidden rounded-[1.75rem] border border-frost-300/12 bg-panel/40 p-6 backdrop-blur-md [transform-style:preserve-3d]"
    >
      {/* animated accent border on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[1.75rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          boxShadow: `inset 0 0 0 1px ${lab.accent}55, 0 0 34px -12px ${lab.accent}`,
        }}
      />

      {/* pointer spotlight */}
      {interactive && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: spotlight }}
        />
      )}

      {/* top accent wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full opacity-25 blur-3xl transition-opacity duration-500 group-hover:opacity-45"
        style={{ background: lab.accent }}
      />

      <div className="relative flex h-full flex-col [transform:translateZ(28px)]">
        {/* logo */}
        <div className="flex items-start justify-between">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-2 rounded-2xl opacity-40 blur-xl transition-opacity duration-500 group-hover:opacity-80"
              style={{ background: lab.accent }}
            />
            <div
              className="relative h-20 w-20 overflow-hidden rounded-2xl border transition-transform duration-500 group-hover:scale-105"
              style={{ borderColor: `${lab.accent}55` }}
            >
              <Image
                src={lab.logo}
                alt={`${lab.name} logo`}
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>
          </div>

          {lab.comingSoon ? (
            <span className="rounded-full border border-frost-300/20 px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-ice-dim">
              Soon
            </span>
          ) : (
            <span
              className="rounded-full border px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-wider"
              style={{
                color: lab.accent,
                borderColor: `${lab.accent}33`,
                background: `${lab.accent}12`,
              }}
            >
              {projectCount} project{projectCount === 1 ? "" : "s"}
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

        {/* focus chips */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {lab.focusAreas.slice(0, 3).map((f) => (
            <span
              key={f}
              className="rounded-md border border-frost-300/12 bg-white/[0.02] px-2 py-1 font-mono text-[0.62rem] text-ice-dim"
            >
              {f}
            </span>
          ))}
        </div>

        {!lab.comingSoon && (
          <div
            className="mt-6 flex items-center gap-2 text-sm font-medium"
            style={{ color: lab.accent }}
          >
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
    return <div className="h-full opacity-85">{content}</div>;
  }

  return (
    <Link href={`/labs/${lab.slug}`} className="block h-full">
      {content}
    </Link>
  );
}
