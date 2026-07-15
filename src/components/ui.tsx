import type { ReactNode } from "react";
import type { Project } from "@/lib/labs";

/**
 * Cropped Winter Labs emblem (the hexagon + pine) taken from the full
 * logo lockup in /public. Emblem occupies a ~178px square at (112,40)
 * within the 403×379 source image.
 */
export function LogoMark({
  size = 34,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  const scale = size / 178;
  return (
    <span
      aria-hidden
      className={`inline-block shrink-0 bg-no-repeat ${className}`}
      style={{
        width: size,
        height: size,
        backgroundImage: "url(/winter-labs.jpeg)",
        backgroundSize: `${403 * scale}px ${379 * scale}px`,
        backgroundPosition: `${-112 * scale}px ${-40 * scale}px`,
      }}
    />
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-frost-300/20 bg-frost-500/5 px-3 py-1 font-mono text-xs uppercase tracking-[0.2em] text-frost-300">
      <span className="h-1.5 w-1.5 rounded-full bg-frost-300 shadow-[0_0_8px] shadow-frost-300" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-ice sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
        {title}
      </h2>
      {intro && (
        <p className="mt-5 text-base leading-relaxed text-ice-muted sm:text-lg">
          {intro}
        </p>
      )}
    </div>
  );
}

const statusStyles: Record<Project["status"], string> = {
  Live: "border-aurora-teal/30 bg-aurora-teal/10 text-aurora-teal",
  Beta: "border-frost-400/30 bg-frost-400/10 text-frost-300",
  "In Development": "border-frost-300/25 bg-frost-500/10 text-frost-200",
  Research: "border-aurora-violet/30 bg-aurora-violet/10 text-aurora-violet",
  "Open Source": "border-aurora-cyan/30 bg-aurora-cyan/10 text-aurora-cyan",
};

export function StatusBadge({ status }: { status: Project["status"] }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[0.68rem] uppercase tracking-wider ${statusStyles[status]}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md border border-frost-300/12 bg-white/[0.02] px-2 py-1 font-mono text-[0.68rem] text-ice-dim">
      {children}
    </span>
  );
}
