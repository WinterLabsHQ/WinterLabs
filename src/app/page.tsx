import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import LabsShowcase from "@/components/LabsShowcase";
import Pipeline from "@/components/Pipeline";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import AnimatedNumber from "@/components/AnimatedNumber";
import { SectionHeading } from "@/components/ui";
import { activeLabs, allProjects } from "@/lib/labs";

const capabilities = [
  {
    title: "Silicon, automated",
    body: "A modern harness that makes chip design and tapeout reproducible — and AI agents that drive it from RTL to GDSII.",
    icon: "◈",
  },
  {
    title: "Autonomy you can trust",
    body: "Verification-first agents that show their work, respect guardrails, and keep humans in the loop where it matters.",
    icon: "◇",
  },
  {
    title: "Research that deploys",
    body: "Applied ML that survives the real world — models that generalize across datasets and run on constrained edge hardware.",
    icon: "❖",
  },
  {
    title: "Open by default",
    body: "The tooling and libraries we build internally, released as open source for the whole community to build on.",
    icon: "✦",
  },
];

const numbers: { v: number | string; suffix?: string; l: string }[] = [
  { v: activeLabs.length, l: "specialized labs" },
  { v: allProjects.length, l: "active projects" },
  { v: 130, suffix: "nm", l: "process node target" },
  { v: "OSS", l: "first, always" },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Ticker */}
      <div className="relative mt-4">
        <div className="hairline mx-auto max-w-6xl" />
        <Marquee />
        <div className="hairline mx-auto max-w-6xl" />
      </div>

      {/* Capabilities */}
      <section className="mx-auto mt-28 max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="What we do"
            title={
              <>
                One studio.{" "}
                <span className="text-gradient">Many frontiers.</span>
              </>
            }
            intro="Winter Labs runs as a set of focused labs, each attacking a different hard problem — sharing tools, research, and a bias toward autonomy."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-frost-300/12 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-frost-300/25 hover:bg-white/[0.035]">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-frost-300/20 bg-frost-500/10 text-lg text-frost-300 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  {c.icon}
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-ice">
                  {c.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ice-muted">
                  {c.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Product flow — Xenon */}
      <section className="mx-auto mt-32 max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="The Xenon flow"
            title={
              <>
                From a Markdown spec to{" "}
                <span className="text-gradient">taped-out silicon.</span>
              </>
            }
            intro="Our agentic silicon compiler owns the whole open-source EDA toolchain — turning intent into a place-and-routed, fabrication-ready design."
          />
        </Reveal>
        <div className="mt-12">
          <Pipeline />
        </div>
      </section>

      {/* Labs */}
      <section className="mx-auto mt-32 max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="The Labs"
            title={
              <>
                Explore each{" "}
                <span className="text-gradient">frozen frontier.</span>
              </>
            }
            intro="Every lab is a self-contained team with its own mandate and projects. Step inside to see what each one is building."
          />
        </Reveal>
        <div className="mt-14">
          <LabsShowcase />
        </div>
      </section>

      {/* Numbers */}
      <section className="mx-auto mt-32 max-w-6xl px-6">
        <Reveal>
          <div className="glass grid grid-cols-2 gap-8 rounded-3xl px-8 py-12 md:grid-cols-4">
            {numbers.map((s) => (
              <div key={s.l} className="text-center">
                <div className="font-display text-3xl font-semibold text-gradient sm:text-4xl">
                  <AnimatedNumber value={s.v} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-xs text-ice-dim sm:text-sm">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <div className="mt-32">
        <CTA />
      </div>
    </>
  );
}
