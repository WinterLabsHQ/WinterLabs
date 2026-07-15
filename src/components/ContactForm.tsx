"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const interests = [
  "Silicon / Chip design",
  "AI agents",
  "AI CFO",
  "Research collaboration",
  "Open source",
  "Something else",
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [interest, setInterest] = useState(interests[0]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Demo only — no backend wired up yet. Swap this for a real
    // endpoint (e.g. a route handler or form service) before launch.
    setSent(true);
  }

  const fieldClass =
    "w-full rounded-xl border border-frost-300/15 bg-white/[0.03] px-4 py-3 text-sm text-ice placeholder:text-ice-dim outline-none transition focus:border-frost-400/50 focus:bg-white/[0.05]";

  return (
    <div className="glass rounded-3xl p-7 sm:p-9">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center py-12 text-center"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-aurora-teal/15 text-3xl text-aurora-teal">
              ❄
            </div>
            <h3 className="mt-6 font-display text-2xl font-semibold text-ice">
              Message received.
            </h3>
            <p className="mt-2 max-w-sm text-sm text-ice-muted">
              Thanks for reaching out. We&apos;ll be in touch soon — Winter Labs
              reads every note that lands.
            </p>
            <button
              onClick={() => setSent(false)}
              className="mt-8 rounded-lg border border-frost-300/20 px-5 py-2.5 text-sm text-ice transition hover:border-frost-300/40"
            >
              Send another
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm text-ice-muted">Name</span>
                <input required name="name" placeholder="Ada Frost" className={fieldClass} />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm text-ice-muted">Email</span>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  className={fieldClass}
                />
              </label>
            </div>

            <div>
              <span className="mb-2 block text-sm text-ice-muted">
                What&apos;s this about?
              </span>
              <div className="flex flex-wrap gap-2">
                {interests.map((opt) => (
                  <button
                    type="button"
                    key={opt}
                    onClick={() => setInterest(opt)}
                    className={`rounded-lg border px-3 py-2 text-xs transition ${
                      interest === opt
                        ? "border-frost-400/50 bg-frost-500/15 text-ice"
                        : "border-frost-300/15 text-ice-muted hover:border-frost-300/30"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <label className="block">
              <span className="mb-2 block text-sm text-ice-muted">Message</span>
              <textarea
                required
                name="message"
                rows={5}
                placeholder="Tell us what you're building…"
                className={`${fieldClass} resize-none`}
              />
            </label>

            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-frost-500 to-frost-400 px-6 py-3.5 text-sm font-semibold text-ink shadow-xl shadow-frost-500/25 transition hover:brightness-110"
            >
              Send message
            </button>
            <p className="text-center text-xs text-ice-dim">
              This demo form doesn&apos;t submit anywhere yet — wire it to your
              endpoint before launch.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
