import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Winter Labs — for silicon, AI agents, research collaboration, or open source.",
};

const channels = [
  { label: "General", value: "hello@winterlabs.example" },
  { label: "Research", value: "research@winterlabs.example" },
  { label: "Partnerships", value: "partners@winterlabs.example" },
];

export default function ContactPage() {
  return (
    <div className="pt-36">
      <section className="mx-auto max-w-6xl px-6">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <Reveal>
              <Eyebrow>Contact</Eyebrow>
              <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ice sm:text-5xl md:text-6xl">
                Let&apos;s build something{" "}
                <span className="text-gradient">worth the cold.</span>
              </h1>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ice-muted">
                Whether you&apos;re taping out silicon, rethinking finance, or
                pushing research forward — tell us what you&apos;re working on.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-12 space-y-4">
                {channels.map((c) => (
                  <div
                    key={c.label}
                    className="flex items-center justify-between rounded-xl border border-frost-300/12 bg-white/[0.02] px-5 py-4"
                  >
                    <span className="font-mono text-xs uppercase tracking-wider text-ice-dim">
                      {c.label}
                    </span>
                    <span className="text-sm text-frost-300">{c.value}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-8 text-sm text-ice-dim">
                Winter Labs · a research &amp; product studio · remote-first,
                everywhere it&apos;s cold.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
