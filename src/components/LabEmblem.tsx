"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ANGLES = [-90, -30, 30, 90, 150, 210];
const hexPoints = (r: number, c = 100) =>
  ANGLES.map((d) => {
    const a = (d * Math.PI) / 180;
    return `${(c + r * Math.cos(a)).toFixed(2)},${(c + r * Math.sin(a)).toFixed(2)}`;
  }).join(" ");

export default function LabEmblem({
  logo,
  name,
  accent,
}: {
  logo: string;
  name: string;
  accent: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto aspect-square w-full max-w-[340px]"
    >
      {/* glow */}
      <div
        aria-hidden
        className="absolute inset-[18%] rounded-full opacity-45 blur-3xl"
        style={{ background: accent }}
      />

      {/* rotating dashed hex ring */}
      <motion.svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <polygon
          points={hexPoints(94)}
          fill="none"
          stroke={accent}
          strokeOpacity="0.3"
          strokeWidth="0.5"
          strokeDasharray="2 5"
        />
      </motion.svg>

      {/* counter-rotating hex */}
      <motion.svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
      >
        <polygon
          points={hexPoints(80)}
          fill="none"
          stroke={accent}
          strokeOpacity="0.18"
          strokeWidth="0.5"
        />
      </motion.svg>

      {/* logo */}
      <motion.div
        className="absolute inset-[18%] overflow-hidden rounded-3xl border"
        style={{ borderColor: `${accent}55` }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src={logo}
          alt={`${name} logo`}
          fill
          sizes="240px"
          className="object-cover"
          priority
        />
      </motion.div>
    </motion.div>
  );
}
