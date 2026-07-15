export type Project = {
  name: string;
  status: "Live" | "In Development" | "Research" | "Beta" | "Open Source";
  summary: string;
  detail: string;
  tags: string[];
};

export type Lab = {
  slug: string;
  name: string;
  glyph: string; // short mono glyph shown in cards
  tagline: string;
  description: string;
  longDescription: string;
  accent: string; // hex accent used for glows/borders
  focusAreas: string[];
  stat: { value: string; label: string };
  projects: Project[];
  comingSoon?: boolean;
};

export const labs: Lab[] = [
  {
    slug: "ai-lab",
    name: "AI Lab",
    glyph: "AI",
    tagline: "Autonomous agents for the hardest engineering problems.",
    description:
      "We build agentic systems that reason about silicon, capital, and everything in between — designed to operate with real autonomy, not just autocomplete.",
    longDescription:
      "The AI Lab is where Winter Labs turns frontier models into dependable operators. We design multi-agent systems that plan, verify, and act inside high-stakes workflows — from taping out a chip to closing the books. Every agent we ship is built around a verification-first philosophy: it must show its work, respect guardrails, and hand control back cleanly.",
    accent: "#4ba6ff",
    focusAreas: [
      "Multi-agent orchestration",
      "Tool-use & verification loops",
      "Domain-grounded reasoning",
      "Human-in-the-loop autonomy",
    ],
    stat: { value: "4+", label: "agentic systems in production trials" },
    projects: [
      {
        name: "Tapeout Copilot",
        status: "In Development",
        summary:
          "An AI agent that drives chip design from RTL to tapeout — running EDA tools, closing timing, and preparing GDSII for fabrication.",
        detail:
          "Tapeout Copilot plans the full physical-design flow, invokes synthesis and place-and-route tools, reads back reports, and iterates on constraints until timing and DRC clean. It works alongside engineers, proposing fixes and explaining every trade-off.",
        tags: ["Agents", "EDA", "RTL-to-GDSII", "Verification"],
      },
      {
        name: "Frost CFO",
        status: "Beta",
        summary:
          "An AI CFO that owns forecasting, scenario planning, and financial narrative for fast-moving teams.",
        detail:
          "Frost CFO connects to your ledger and models, builds rolling forecasts, flags runway risk early, and drafts board-ready commentary. It treats every number as auditable and every assumption as explicit.",
        tags: ["FinOps", "Forecasting", "Reasoning", "Automation"],
      },
      {
        name: "Glacier Agents",
        status: "Research",
        summary:
          "A framework for long-horizon agents that stay reliable across thousands of steps.",
        detail:
          "Glacier Agents is our internal substrate for durable autonomy — memory, planning, and self-verification primitives that keep agents grounded far past the context window.",
        tags: ["Framework", "Long-horizon", "Memory", "Planning"],
      },
    ],
  },
  {
    slug: "silicon-lab",
    name: "Silicon Lab",
    glyph: "Si",
    tagline: "A modern harness for chip design and tapeout.",
    description:
      "We rebuild the chip design toolchain around automation — a unified harness that makes verification, physical design, and tapeout reproducible and fast.",
    longDescription:
      "Silicon Lab exists because the chip design flow is still stitched together by hand. We build a first-class harness that wraps synthesis, verification, place-and-route, and signoff into one reproducible pipeline — versioned, observable, and automation-ready. It is the substrate our AI agents stand on, and a serious tool in its own right.",
    accent: "#67e8f9",
    focusAreas: [
      "Design & verification harness",
      "Reproducible tapeout flows",
      "EDA tool orchestration",
      "Signoff automation",
    ],
    stat: { value: "1", label: "unified flow from RTL to signoff" },
    projects: [
      {
        name: "Aurora Harness",
        status: "In Development",
        summary:
          "A unified, reproducible harness that orchestrates the full RTL-to-signoff chip design flow.",
        detail:
          "Aurora Harness turns a tangle of scripts and vendor tools into one declarative pipeline. Define your flow once; it handles synthesis, simulation, timing, DRC/LVS, and reporting — every run reproducible and diffable.",
        tags: ["Harness", "EDA", "Reproducibility", "CI for silicon"],
      },
      {
        name: "Timing Sentinel",
        status: "Research",
        summary:
          "Continuous timing and DRC monitoring that catches regressions the moment they land.",
        detail:
          "Timing Sentinel runs signoff-grade checks on every change, surfacing slack and violation deltas like a test suite for hardware.",
        tags: ["Signoff", "Timing", "Monitoring"],
      },
    ],
  },
  {
    slug: "research-lab",
    name: "Research Lab",
    glyph: "Rx",
    tagline: "New machine learning frameworks and frontier ideas.",
    description:
      "We do open, foundational research — new ML frameworks, training methods, and the primitives that future products will be built on.",
    longDescription:
      "Research Lab is Winter Labs' long-horizon bet. We investigate new machine learning frameworks, efficient training and inference methods, and the mathematical primitives behind reliable reasoning. Findings that hold up become open source; ideas that graduate become the engine inside our products.",
    accent: "#a78bfa",
    focusAreas: [
      "Novel ML frameworks",
      "Efficient training & inference",
      "Reasoning & verification",
      "Publishing & open science",
    ],
    stat: { value: "∞", label: "questions worth chasing" },
    projects: [
      {
        name: "Glacier ML",
        status: "Research",
        summary:
          "A lean machine learning framework designed for composable, verifiable model pipelines.",
        detail:
          "Glacier ML rethinks the training loop as a set of composable, inspectable stages — making experiments reproducible and results easy to trust and extend.",
        tags: ["Framework", "Training", "Reproducibility"],
      },
      {
        name: "Frostbyte",
        status: "Research",
        summary:
          "Research into efficient inference — smaller, faster, cheaper models without giving up capability.",
        detail:
          "Frostbyte explores quantization, distillation, and sparsity techniques so frontier-grade reasoning can run at the edge.",
        tags: ["Inference", "Efficiency", "Quantization"],
      },
    ],
  },
  {
    slug: "open-source-lab",
    name: "Open Source Lab",
    glyph: "OS",
    tagline: "Software we build in the open, for everyone.",
    description:
      "We ship open source developer tools and libraries — the infrastructure we wished existed, released for the whole community to build on.",
    longDescription:
      "Open Source Lab is how Winter Labs gives back. We open-source the tooling, libraries, and infrastructure we build internally — from developer utilities to the connective tissue behind agentic and silicon workflows. Everything here is MIT-or-friendlier, documented, and built to be forked.",
    accent: "#5eead4",
    focusAreas: [
      "Developer tooling",
      "Libraries & SDKs",
      "Agent infrastructure",
      "Community & docs",
    ],
    stat: { value: "MIT", label: "released for everyone" },
    projects: [
      {
        name: "Snowdrift SDK",
        status: "Open Source",
        summary:
          "A lightweight SDK for wiring tools and agents together with strong typing and observability.",
        detail:
          "Snowdrift gives developers a clean, typed surface for building tool-using agents — with tracing, retries, and guardrails built in from the start.",
        tags: ["SDK", "Agents", "TypeScript", "Open Source"],
      },
      {
        name: "Flake",
        status: "Open Source",
        summary:
          "A tiny, fast utility library for reproducible pipelines and structured logs.",
        detail:
          "Flake is the unglamorous glue — deterministic runs, structured logging, and clean CLI ergonomics — that every one of our other projects depends on.",
        tags: ["Library", "Tooling", "CLI"],
      },
    ],
  },
  {
    slug: "coming-soon",
    name: "More Labs",
    glyph: "+",
    tagline: "New frontiers are forming.",
    description:
      "We are always spinning up new labs as fresh problems come into focus. Something new is condensing — stay close.",
    longDescription:
      "Winter Labs grows by starting new labs whenever a problem is big enough to deserve one. This space is reserved for what comes next.",
    accent: "#86c6ff",
    focusAreas: ["To be revealed"],
    stat: { value: "soon", label: "new frontiers forming" },
    projects: [],
    comingSoon: true,
  },
];

export function getLab(slug: string): Lab | undefined {
  return labs.find((l) => l.slug === slug);
}

export const activeLabs = labs.filter((l) => !l.comingSoon);

export const allProjects = activeLabs.flatMap((lab) =>
  lab.projects.map((p) => ({ ...p, lab })),
);
