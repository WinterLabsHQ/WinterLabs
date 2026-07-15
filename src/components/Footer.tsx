import Link from "next/link";
import { activeLabs } from "@/lib/labs";

export default function Footer() {
  return (
    <footer className="relative z-10 mt-32 border-t border-frost-300/10">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-frost-400 to-aurora-cyan text-sm font-bold text-ink">
                ❄
              </span>
              <span className="font-display text-lg font-semibold text-ice">
                Winter<span className="text-frost-300">Labs</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ice-muted">
              A research and product studio building autonomous systems for
              silicon, capital, and the frontiers in between.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-ice">
              Labs
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {activeLabs.map((lab) => (
                <li key={lab.slug}>
                  <Link
                    href={`/labs/${lab.slug}`}
                    className="text-ice-muted transition hover:text-frost-300"
                  >
                    {lab.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-ice">
              Company
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-ice-muted transition hover:text-frost-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/labs" className="text-ice-muted transition hover:text-frost-300">
                  All Labs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-ice-muted transition hover:text-frost-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-frost-300/10 pt-8 text-sm text-ice-dim sm:flex-row">
          <p>© {new Date().getFullYear()} Winter Labs. All rights reserved.</p>
          <p className="font-mono text-xs">Built in the cold, shipped warm.</p>
        </div>
      </div>
    </footer>
  );
}
