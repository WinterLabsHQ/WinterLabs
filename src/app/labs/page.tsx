import type { Metadata } from "next";
import LabsShowcase from "@/components/LabsShowcase";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { SectionHeading, Eyebrow } from "@/components/ui";
import { allProjects, primaryLab } from "@/lib/labs";

export const metadata: Metadata = {
  title: "Labs",
  description:
    "Explore the specialized labs of Winter Labs — AI, Silicon, Research, and Open Source — and the projects each one is building.",
};

export default function LabsPage() {
  return (
    <div className="pt-36">
      <section className="mx-auto max-w-6xl px-6">
        <Reveal>
          <Eyebrow>The Labs</Eyebrow>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ice sm:text-5xl md:text-6xl">
            Focused teams, each{" "}
            <span className="text-gradient">freezing a frontier.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ice-muted">
            Winter Labs is organized into specialized labs. Each owns a distinct
            mission — from taping out chips to open-sourcing the tools that make
            it possible — while sharing research and infrastructure.
          </p>
        </Reveal>

        <div className="mt-16">
          <LabsShowcase />
        </div>
      </section>

      {/* All projects */}
      <section className="mx-auto mt-32 max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Across the labs"
            title={
              <>
                Everything we&apos;re{" "}
                <span className="text-gradient">building.</span>
              </>
            }
            intro="A running index of the projects underway across every lab."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {allProjects.map((p) => {
            const lab = primaryLab(p);
            return (
              <Reveal key={p.slug}>
                <ProjectCard
                  project={p}
                  labName={lab?.name}
                  accent={lab?.accent}
                />
              </Reveal>
            );
          })}
        </div>
      </section>

      <div className="mt-32">
        <CTA />
      </div>
    </div>
  );
}
