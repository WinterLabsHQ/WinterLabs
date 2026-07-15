"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  SHOW_REPO_LINKS,
  repoUrl,
  crossLabs,
  type Project,
} from "@/lib/labs";
import { fadeUp } from "@/lib/motion";
import { StatusBadge, Tag } from "@/components/ui";

export default function ProjectFeature({
  project,
  accent,
  labSlug,
}: {
  project: Project;
  accent: string;
  labSlug: string;
}) {
  const url = SHOW_REPO_LINKS ? repoUrl(project.repo) : undefined;
  const others = crossLabs(project, labSlug);

  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="glass relative overflow-hidden rounded-3xl p-7 sm:p-9"
    >
      {/* accent framing */}
      <div
        aria-hidden
        className="absolute left-0 top-0 h-full w-1"
        style={{ background: accent }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full opacity-20 blur-3xl"
        style={{ background: accent }}
      />

      <div className="relative">
        {/* header */}
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="font-display text-2xl font-semibold text-ice sm:text-3xl">
                {project.name}
              </h3>
              <StatusBadge status={project.status} />
            </div>
            <p
              className="mt-2 text-base font-medium"
              style={{ color: accent }}
            >
              {project.tagline}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {project.language && (
              <span className="inline-flex items-center gap-1.5 font-mono text-xs text-ice-dim">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ background: accent }}
                />
                {project.language}
              </span>
            )}
            {url && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-frost-300/15 px-3 py-1.5 text-xs font-medium text-ice-muted transition hover:border-frost-300/35 hover:text-ice"
              >
                <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" aria-hidden>
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
                </svg>
                View source
              </a>
            )}
          </div>
        </div>

        {/* narrative */}
        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-ice-muted sm:text-base">
          {project.about}
        </p>

        {/* metrics */}
        {project.metrics.length > 0 && (
          <div className="mt-8 grid grid-cols-3 gap-3 sm:max-w-lg">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl border border-frost-300/10 bg-white/[0.02] px-3 py-4 text-center"
              >
                <div
                  className="font-display text-lg font-semibold sm:text-xl"
                  style={{ color: accent }}
                >
                  {m.value}
                </div>
                <div className="mt-1 font-mono text-[0.62rem] uppercase tracking-wide text-ice-dim">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* highlights + stack */}
        <div className="mt-8 grid gap-8 md:grid-cols-[1.4fr_1fr]">
          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-ice-dim">
              What makes it different
            </h4>
            <ul className="mt-4 space-y-3">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-sm text-ice">
                  <span
                    aria-hidden
                    className="mt-1.5 h-1.5 w-1.5 flex-none rotate-45"
                    style={{ background: accent }}
                  />
                  <span className="leading-relaxed text-ice-muted">{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-ice-dim">
              Stack
            </h4>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>

            {others.length > 0 && (
              <>
                <h4 className="mt-7 font-mono text-xs uppercase tracking-[0.2em] text-ice-dim">
                  Also in
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {others.map((o) => (
                    <Link
                      key={o.slug}
                      href={`/labs/${o.slug}`}
                      className="rounded-lg border px-2.5 py-1 text-xs transition hover:brightness-125"
                      style={{
                        color: o.accent,
                        borderColor: `${o.accent}33`,
                        background: `${o.accent}10`,
                      }}
                    >
                      {o.name}
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* tags */}
        <div className="mt-8 flex flex-wrap gap-2 border-t border-frost-300/10 pt-6">
          {project.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
