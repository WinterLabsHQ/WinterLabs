"use client";

import { motion } from "framer-motion";
import type { Project } from "@/lib/labs";
import { fadeUp } from "@/lib/motion";
import { StatusBadge, Tag } from "@/components/ui";

export default function ProjectCard({
  project,
  labName,
  accent,
}: {
  project: Project;
  labName?: string;
  accent?: string;
}) {
  return (
    <motion.article
      variants={fadeUp}
      className="group relative overflow-hidden rounded-2xl border border-frost-300/12 bg-white/[0.02] p-6 transition-colors hover:border-frost-300/25"
    >
      {accent && (
        <div
          className="absolute left-0 top-0 h-full w-1 opacity-60 transition-opacity group-hover:opacity-100"
          style={{ background: accent }}
        />
      )}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <h3 className="font-display text-xl font-semibold text-ice">
            {project.name}
          </h3>
          {labName && (
            <span className="font-mono text-xs text-ice-dim">· {labName}</span>
          )}
        </div>
        <StatusBadge status={project.status} />
      </div>

      <p className="mt-3 text-sm leading-relaxed text-ice-muted">
        {project.summary}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-ice-dim">
        {project.detail}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
    </motion.article>
  );
}
