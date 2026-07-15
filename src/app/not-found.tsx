import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <div className="font-display text-8xl font-semibold text-gradient">
        404
      </div>
      <h1 className="mt-6 font-display text-2xl font-semibold text-ice">
        This trail went cold.
      </h1>
      <p className="mt-3 max-w-sm text-sm text-ice-muted">
        The page you&apos;re looking for has drifted off the map. Let&apos;s get
        you back to warmer ground.
      </p>
      <div className="mt-8 flex gap-4">
        <Link
          href="/"
          className="rounded-xl bg-gradient-to-r from-frost-500 to-frost-400 px-6 py-3 text-sm font-semibold text-ink transition hover:brightness-110"
        >
          Back home
        </Link>
        <Link
          href="/labs"
          className="rounded-xl border border-frost-300/20 px-6 py-3 text-sm font-semibold text-ice transition hover:border-frost-300/40"
        >
          Explore labs
        </Link>
      </div>
    </div>
  );
}
