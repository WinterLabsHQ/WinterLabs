"use client";

import { motion } from "framer-motion";
import { SHOW_REPO_LINKS, repoUrl, type Project } from "@/lib/labs";
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
  const url = SHOW_REPO_LINKS ? repoUrl(project.repo) : undefined;

  return (
    <motion.article
      variants={fadeUp}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-frost-300/12 bg-white/[0.02] p-6 transition-colors hover:border-frost-300/25"
    >
      {accent && (
        <div
          className="absolute left-0 top-0 h-full w-1 opacity-60 transition-opacity group-hover:opacity-100"
          style={{ background: accent }}
        />
      )}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2.5">
            <h3 className="font-display text-xl font-semibold text-ice">
              {project.name}
            </h3>
            {labName && (
              <span className="font-mono text-xs text-ice-dim">· {labName}</span>
            )}
          </div>
          <p className="mt-1 text-sm font-medium" style={{ color: accent }}>
            {project.tagline}
          </p>
        </div>
        <StatusBadge status={project.status} />
      </div>

      <p className="mt-4 text-sm leading-relaxed text-ice-muted">
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

      <div className="mt-6 flex flex-1 items-end justify-between gap-3 pt-1">
        {project.language && (
          <span className="inline-flex items-center gap-1.5 font-mono text-xs text-ice-dim">
            <span
              className="h-2 w-2 rounded-full"
              style={{ background: accent ?? "#86c6ff" }}
            />
            {project.language}
          </span>
        )}
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto inline-flex items-center gap-1.5 rounded-lg border border-frost-300/15 px-3 py-1.5 text-xs font-medium text-ice-muted transition hover:border-frost-300/35 hover:text-ice"
          >
            <svg
              viewBox="0 0 16 16"
              width="14"
              height="14"
              fill="currentColor"
              aria-hidden
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
            View source
          </a>
        )}
      </div>
    </motion.article>
  );
}
