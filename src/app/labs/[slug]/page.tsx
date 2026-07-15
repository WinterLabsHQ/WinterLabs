import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLab, labs, activeLabs } from "@/lib/labs";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { Eyebrow } from "@/components/ui";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return labs.map((lab) => ({ slug: lab.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const lab = getLab(slug);
  if (!lab) return { title: "Lab not found" };
  return {
    title: lab.name,
    description: lab.description,
  };
}

export default async function LabPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const lab = getLab(slug);
  if (!lab || lab.comingSoon) notFound();

  const others = activeLabs.filter((l) => l.slug !== lab.slug);

  return (
    <div className="pt-36">
      {/* Hero */}
      <section className="relative mx-auto max-w-6xl px-6">
        <div
          className="pointer-events-none absolute -top-10 right-0 h-72 w-72 rounded-full opacity-30 blur-[120px]"
          style={{ background: lab.accent }}
        />
        <Reveal>
          <Link
            href="/labs"
            className="inline-flex items-center gap-2 text-sm text-ice-dim transition hover:text-frost-300"
          >
            <span>←</span> All labs
          </Link>

          <div className="mt-8 flex items-center gap-4">
            <span
              className="flex h-16 w-16 items-center justify-center rounded-2xl border font-mono text-lg font-semibold"
              style={{
                color: lab.accent,
                borderColor: `${lab.accent}55`,
                background: `${lab.accent}14`,
              }}
            >
              {lab.glyph}
            </span>
            <Eyebrow>{lab.name}</Eyebrow>
          </div>

          <h1 className="mt-7 max-w-4xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ice sm:text-5xl md:text-6xl">
            {lab.tagline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ice-muted">
            {lab.longDescription}
          </p>
        </Reveal>

        {/* focus + stat */}
        <Reveal delay={0.1}>
          <div className="mt-12 grid gap-6 md:grid-cols-[1.6fr_1fr]">
            <div className="rounded-2xl border border-frost-300/12 bg-white/[0.02] p-7">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-ice-dim">
                Focus areas
              </h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {lab.focusAreas.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-ice">
                    <span
                      className="h-1.5 w-1.5 flex-none rounded-full"
                      style={{ background: lab.accent }}
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-center rounded-2xl border border-frost-300/12 bg-white/[0.02] p-7 text-center">
              <div
                className="font-display text-5xl font-semibold"
                style={{ color: lab.accent }}
              >
                {lab.stat.value}
              </div>
              <div className="mt-2 text-sm text-ice-muted">
                {lab.stat.label}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Projects */}
      <section className="mx-auto mt-24 max-w-6xl px-6">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold text-ice sm:text-3xl">
            Projects in this lab
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {lab.projects.map((p) => (
            <Reveal key={p.name}>
              <ProjectCard project={p} accent={lab.accent} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Other labs */}
      <section className="mx-auto mt-28 max-w-6xl px-6">
        <div className="hairline" />
        <div className="mt-10 flex flex-col gap-6">
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-ice-dim">
            Continue exploring
          </h3>
          <div className="grid gap-4 sm:grid-cols-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/labs/${o.slug}`}
                className="group rounded-2xl border border-frost-300/12 bg-white/[0.02] p-5 transition hover:border-frost-300/25"
              >
                <div className="flex items-center justify-between">
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-lg border font-mono text-xs"
                    style={{
                      color: o.accent,
                      borderColor: `${o.accent}44`,
                      background: `${o.accent}12`,
                    }}
                  >
                    {o.glyph}
                  </span>
                  <span className="text-ice-dim transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
                <div className="mt-4 font-display text-base font-semibold text-ice">
                  {o.name}
                </div>
                <div className="mt-1 text-xs text-ice-dim">{o.tagline}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-28">
        <CTA />
      </div>
    </div>
  );
}
