"use client";

import { motion } from "framer-motion";
import { labs as allLabs, type Lab } from "@/lib/labs";
import { stagger } from "@/lib/motion";
import LabCard from "@/components/LabCard";

export default function LabsShowcase({ labs = allLabs }: { labs?: Lab[] }) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {labs.map((lab) => (
        <LabCard key={lab.slug} lab={lab} />
      ))}
    </motion.div>
  );
}
