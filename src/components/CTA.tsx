import Link from "next/link";
import Reveal from "@/components/Reveal";
import { scaleIn } from "@/lib/motion";

export default function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-6">
      <Reveal variants={scaleIn}>
        <div className="relative overflow-hidden rounded-[2rem] border border-frost-300/15 px-8 py-16 text-center sm:px-16 sm:py-20">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-frost-600/25 via-transparent to-aurora-violet/15" />
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-frost-500/30 blur-[100px]" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold tracking-tight text-ice sm:text-4xl md:text-5xl">
              Have a hard problem worth freezing time over?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ice-muted sm:text-lg">
              Whether it&apos;s silicon, capital, or research at the edge of
              what&apos;s possible — we&apos;d love to hear what you&apos;re
              building.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-xl bg-gradient-to-r from-frost-500 to-frost-400 px-7 py-3.5 text-sm font-semibold text-ink shadow-xl shadow-frost-500/30 transition hover:brightness-110"
              >
                Start a conversation
              </Link>
              <Link
                href="/labs"
                className="rounded-xl border border-frost-300/20 bg-white/[0.02] px-7 py-3.5 text-sm font-semibold text-ice transition hover:border-frost-300/40"
              >
                Browse the labs
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
