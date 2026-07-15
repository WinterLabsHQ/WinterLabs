"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { ReactNode } from "react";

const ANGLES = [-90, -30, 30, 90, 150, 210];

const hexPoints = (r: number, cx = 100, cy = 100) =>
  ANGLES.map((d) => {
    const a = (d * Math.PI) / 180;
    return `${(cx + r * Math.cos(a)).toFixed(2)},${(cy + r * Math.sin(a)).toFixed(2)}`;
  }).join(" ");

const hexVertices = (r: number, cx = 100, cy = 100) =>
  ANGLES.map((d) => {
    const a = (d * Math.PI) / 180;
    return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
  });

function FloatingLabel({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className: string;
  delay?: number;
}) {
  return (
    <motion.span
      className={`absolute rounded-lg border border-frost-300/20 bg-panel/70 px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-wider text-frost-200 backdrop-blur-sm ${className}`}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: [8, -4, 8] }}
      transition={{
        opacity: { duration: 0.6, delay },
        y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay },
      }}
    >
      {children}
    </motion.span>
  );
}

export default function ChipVisual() {
  const midVerts = hexVertices(70);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[400px]">
      {/* ambient core glow */}
      <div className="absolute inset-[16%] rounded-full bg-frost-500/25 blur-3xl" />

      {/* rotating conic ring */}
      <motion.div
        aria-hidden
        className="absolute inset-[4%] rounded-full opacity-40"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0deg, #4ba6ff 60deg, transparent 130deg, #a78bfa 200deg, transparent 250deg, #5eead4 320deg, transparent 360deg)",
          WebkitMask:
            "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))",
          mask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      />

      {/* outer dashed hexagon */}
      <motion.svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 64, repeat: Infinity, ease: "linear" }}
      >
        <polygon
          points={hexPoints(92)}
          fill="none"
          stroke="#4ba6ff"
          strokeOpacity="0.22"
          strokeWidth="0.5"
          strokeDasharray="3 4"
        />
      </motion.svg>

      {/* mid hexagon with traces + pulsing node dots (counter-rotating) */}
      <motion.svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
      >
        <polygon
          points={hexPoints(70)}
          fill="none"
          stroke="#67e8f9"
          strokeOpacity="0.4"
          strokeWidth="0.8"
        />
        {midVerts.map((p, i) => {
          const a = Math.atan2(p.y - 100, p.x - 100);
          const ex = 100 + Math.cos(a) * 95;
          const ey = 100 + Math.sin(a) * 95;
          return (
            <motion.path
              key={`t${i}`}
              d={`M ${p.x} ${p.y} L ${ex} ${ey}`}
              stroke="#86c6ff"
              strokeWidth="0.5"
              strokeOpacity="0.35"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 + i * 0.12, ease: "easeInOut" }}
            />
          );
        })}
        {midVerts.map((p, i) => (
          <g key={i}>
            <motion.circle
              cx={p.x}
              cy={p.y}
              r="5"
              fill="#67e8f9"
              initial={{ opacity: 0.15 }}
              animate={{ opacity: [0.1, 0.35, 0.1] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            />
            <circle cx={p.x} cy={p.y} r="2.4" fill="#a5f3ff" />
          </g>
        ))}
      </motion.svg>

      {/* orbiting data packets */}
      <motion.svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
      >
        {[0, 120, 240].map((d, i) => {
          const a = (d * Math.PI) / 180;
          const r = 84;
          return (
            <circle
              key={i}
              cx={(100 + r * Math.cos(a)).toFixed(2)}
              cy={(100 + r * Math.sin(a)).toFixed(2)}
              r="1.8"
              fill={["#a78bfa", "#5eead4", "#4ba6ff"][i]}
            />
          );
        })}
      </motion.svg>

      {/* core die — Winter Labs emblem covering the chip surface */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative aspect-square w-[38%]"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* chip pins on each side */}
          {(["top", "bottom", "left", "right"] as const).map((side) => (
            <div
              key={side}
              className={`absolute z-10 flex gap-1.5 ${
                side === "top"
                  ? "-top-2 left-0 right-0 justify-center"
                  : side === "bottom"
                    ? "-bottom-2 left-0 right-0 justify-center"
                    : side === "left"
                      ? "-left-2 bottom-0 top-0 flex-col items-start justify-center"
                      : "-right-2 bottom-0 top-0 flex-col items-end justify-center"
              }`}
            >
              {[0, 1, 2].map((n) => (
                <span
                  key={n}
                  className={`rounded-full bg-frost-400/70 ${
                    side === "top" || side === "bottom"
                      ? "h-2 w-1"
                      : "h-1 w-2"
                  }`}
                />
              ))}
            </div>
          ))}

          {/* silicon die surface */}
          <div className="absolute inset-0 overflow-hidden rounded-[1.4rem] border border-frost-300/35 bg-gradient-to-br from-[#12233d] via-[#0b1526] to-[#070f1c] shadow-[0_0_50px] shadow-frost-500/30 ring-1 ring-inset ring-frost-200/10">
            {/* faint die circuitry */}
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage:
                  "linear-gradient(#86c6ff 1px, transparent 1px), linear-gradient(90deg, #86c6ff 1px, transparent 1px)",
                backgroundSize: "14px 14px",
              }}
            />
            {/* inner bevel */}
            <div className="absolute inset-[10%] rounded-[0.9rem] ring-1 ring-inset ring-frost-200/10" />

            {/* pin-1 notch dot */}
            <span className="absolute left-2 top-2 h-1.5 w-1.5 rounded-full bg-frost-300/60" />

            {/* embossed Winter Labs emblem (screen-blend keeps only the glow) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/winter-emblem.png"
                alt="Winter Labs"
                width={110}
                height={110}
                sizes="110px"
                className="h-[56%] w-[56%] object-contain opacity-95 mix-blend-screen"
                priority
              />
            </div>

            {/* sheen sweep */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(115deg, transparent 42%, rgba(167,232,255,0.22) 50%, transparent 58%)",
              }}
              animate={{ x: ["-120%", "120%"] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                repeatDelay: 2.5,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* floating spec/product labels */}
      <FloatingLabel className="left-[-4%] top-[24%]" delay={0.3}>
        spec.md
      </FloatingLabel>
      <FloatingLabel className="right-[-2%] top-[46%]" delay={0.9}>
        GDSII
      </FloatingLabel>
      <FloatingLabel className="left-[8%] bottom-[14%]" delay={1.4}>
        RTL→P&amp;R
      </FloatingLabel>
    </div>
  );
}
