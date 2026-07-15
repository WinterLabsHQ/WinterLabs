import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { SectionHeading, Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description:
    "Winter Labs is a research and product studio building autonomous systems for silicon, capital, and research — organized as a set of focused labs.",
};

const principles = [
  {
    title: "Autonomy, earned",
    body: "We give systems real autonomy only when they can prove they deserve it — through verification, transparency, and guardrails.",
  },
  {
    title: "Depth over breadth",
    body: "Each lab goes deep on one hard problem. We would rather do a few things at the frontier than many things at the surface.",
  },
  {
    title: "Build in the open",
    body: "The infrastructure we depend on gets released as open source. Progress compounds faster when it is shared.",
  },
  {
    title: "Reproducible by default",
    body: "From silicon flows to ML experiments, if a result cannot be reproduced, we do not trust it. Every run is versioned and diffable.",
  },
];

const timeline = [
  {
    year: "The thaw",
    title: "A studio, not a product",
    body: "Winter Labs began as a bet that the hardest problems in silicon, capital, and research deserve dedicated labs — not a single roadmap.",
  },
  {
    year: "First frost",
    title: "Silicon meets agents",
    body: "We started building a reproducible chip design harness and the AI agents that could one day drive it all the way to tapeout.",
  },
  {
    year: "Deep winter",
    title: "Labs multiply",
    body: "The AI CFO, new ML frameworks, and open source tooling followed — each spun into its own lab as the problems came into focus.",
  },
  {
    year: "What's next",
    title: "New frontiers forming",
    body: "We keep starting labs whenever a problem is big enough to deserve one. The map is far from finished.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-36">
      <section className="mx-auto max-w-6xl px-6">
        <Reveal>
          <Eyebrow>About Winter Labs</Eyebrow>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ice sm:text-5xl md:text-6xl">
            A studio for the problems that{" "}
            <span className="text-gradient">reward patience.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ice-muted">
            Winter Labs is a research and product studio. We build autonomous
            systems for silicon, capital, and research — organized as a
            collection of focused labs that share tools, ideas, and a bias
            toward doing the hard thing properly.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                k: "Our mission",
                v: "Make the hardest engineering — from chip tapeout to capital allocation — dependably autonomous.",
              },
              {
                k: "How we work",
                v: "Small, deep labs. Verification-first systems. Everything reproducible, much of it open source.",
              },
              {
                k: "What we value",
                v: "Rigor over hype, transparency over magic, and long-horizon bets over quick wins.",
              },
            ].map((c) => (
              <div
                key={c.k}
                className="glass rounded-2xl p-6"
              >
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-frost-300">
                  {c.k}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ice">{c.v}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Principles */}
      <section className="mx-auto mt-32 max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Principles"
            title={
              <>
                How we{" "}
                <span className="text-gradient">stay cold-blooded.</span>
              </>
            }
            intro="A handful of principles keep every lab pointed in the same direction."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-frost-300/12 bg-white/[0.02] p-7">
                <div className="font-display text-3xl font-semibold text-frost-400/40">
                  0{i + 1}
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-ice">
                  {p.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ice-muted">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto mt-32 max-w-6xl px-6">
        <Reveal>
          <SectionHeading eyebrow="The story" title="From first frost to deep winter." />
        </Reveal>
        <div className="mt-12 space-y-3">
          {timeline.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.05}>
              <div className="grid gap-4 rounded-2xl border border-frost-300/10 bg-white/[0.015] p-6 md:grid-cols-[180px_1fr] md:items-center">
                <div className="font-mono text-sm uppercase tracking-wider text-frost-300">
                  {t.year}
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ice">
                    {t.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ice-muted">
                    {t.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="mt-32">
        <CTA />
      </div>
    </div>
  );
}
