import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getLab, labs, activeLabs, projectsForLab } from "@/lib/labs";
import ProjectFeature from "@/components/ProjectFeature";
import LabEmblem from "@/components/LabEmblem";
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
  return { title: lab.name, description: lab.description };
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
  const labProjects = projectsForLab(lab.slug);

  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="relative mx-auto max-w-6xl px-6">
        <div
          className="pointer-events-none absolute -top-16 right-0 h-80 w-80 rounded-full opacity-25 blur-[130px]"
          style={{ background: lab.accent }}
        />

        <Reveal>
          <Link
            href="/labs"
            className="inline-flex items-center gap-2 text-sm text-ice-dim transition hover:text-frost-300"
          >
            <span>←</span> All labs
          </Link>
        </Reveal>

        <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <Eyebrow>{lab.name}</Eyebrow>
            <h1 className="mt-6 max-w-2xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ice sm:text-5xl md:text-[3.4rem]">
              {lab.tagline}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ice-muted">
              {lab.longDescription}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {lab.focusAreas.map((f) => (
                <span
                  key={f}
                  className="rounded-lg border px-3 py-1.5 font-mono text-xs"
                  style={{
                    color: lab.accent,
                    borderColor: `${lab.accent}30`,
                    background: `${lab.accent}0f`,
                  }}
                >
                  {f}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <LabEmblem logo={lab.logo} name={lab.name} accent={lab.accent} />
          </Reveal>
        </div>

        {/* stat strip */}
        <Reveal delay={0.15}>
          <div className="glass mt-14 grid grid-cols-2 gap-6 rounded-3xl px-8 py-8 sm:grid-cols-4">
            {[
              { v: `${labProjects.length}`, l: "projects in this lab" },
              { v: lab.stat.value, l: lab.stat.label },
              {
                v: `${labProjects.reduce((n, p) => n + p.metrics.length, 0)}`,
                l: "tracked milestones",
              },
              { v: lab.glyph, l: "lab designation" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div
                  className="font-display text-2xl font-semibold sm:text-3xl"
                  style={{ color: lab.accent }}
                >
                  {s.v}
                </div>
                <div className="mt-1.5 text-xs text-ice-dim">{s.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Projects */}
      <section className="mx-auto mt-24 max-w-6xl px-6">
        <Reveal>
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-display text-2xl font-semibold text-ice sm:text-3xl">
              {labProjects.length} project{labProjects.length === 1 ? "" : "s"}{" "}
              underway
            </h2>
            <span className="hidden font-mono text-xs text-ice-dim sm:block">
              // {lab.name}
            </span>
          </div>
        </Reveal>

        <div className="mt-10 space-y-6">
          {labProjects.map((p) => (
            <ProjectFeature
              key={p.slug}
              project={p}
              accent={lab.accent}
              labSlug={lab.slug}
            />
          ))}
        </div>
      </section>

      {/* Other labs */}
      <section className="mx-auto mt-28 max-w-6xl px-6">
        <div className="hairline" />
        <div className="mt-10">
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-ice-dim">
            Continue exploring
          </h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/labs/${o.slug}`}
                className="group rounded-2xl border border-frost-300/12 bg-white/[0.02] p-5 transition hover:border-frost-300/25"
              >
                <div className="flex items-center justify-between">
                  <div
                    className="relative h-11 w-11 overflow-hidden rounded-xl border"
                    style={{ borderColor: `${o.accent}44` }}
                  >
                    <Image
                      src={o.logo}
                      alt={`${o.name} logo`}
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </div>
                  <span className="text-ice-dim transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
                <div className="mt-4 font-display text-base font-semibold text-ice">
                  {o.name}
                </div>
                <div className="mt-1 text-xs leading-relaxed text-ice-dim">
                  {o.tagline}
                </div>
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
