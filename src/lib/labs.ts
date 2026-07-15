/* ============================================================
   Winter Labs — content model
   Projects are defined once and can belong to multiple labs
   (cross-listing) via their `labs` slug array.
   ============================================================ */

// --- Config -------------------------------------------------
export const GITHUB_USER = "Kiransekar";

/** Toggle GitHub repo links across the whole site. */
export const SHOW_REPO_LINKS = true;

/** Build a full GitHub URL from an "owner/name" repo string. */
export function repoUrl(repo?: string): string | undefined {
  return repo ? `https://github.com/${repo}` : undefined;
}

// --- Types --------------------------------------------------
export type ProjectStatus =
  | "Live"
  | "In Development"
  | "Research"
  | "Beta"
  | "Open Source";

export type Metric = { label: string; value: string };

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  detail: string;
  /** Longer narrative shown on lab pages / expanded views. */
  about: string;
  status: ProjectStatus;
  tags: string[];
  /** Headline numbers for the project. */
  metrics: Metric[];
  /** Key capabilities / differentiators. */
  highlights: string[];
  /** Tools & technologies. */
  stack: string[];
  language?: string;
  /** "owner/name" — link is shown when SHOW_REPO_LINKS is true. */
  repo?: string;
  /** Lab slugs this project belongs to (first = primary). */
  labs: string[];
};

export type Lab = {
  slug: string;
  name: string;
  glyph: string;
  /** Logo image in /public. */
  logo: string;
  tagline: string;
  description: string;
  longDescription: string;
  accent: string;
  focusAreas: string[];
  stat: { value: string; label: string };
  comingSoon?: boolean;
};

// --- Labs ---------------------------------------------------
export const labs: Lab[] = [
  {
    slug: "silicon-lab",
    name: "Silicon Lab",
    glyph: "Si",
    logo: "/silicon-labs.png",
    tagline: "Chips, from a spec to signoff.",
    description:
      "We design real silicon on the open-source EDA stack — RISC-V processor IP and an agentic compiler that carries a chip from spec to tapeout.",
    longDescription:
      "Silicon Lab is where Winter Labs builds hardware. We design certifiable RISC-V processor IP, neuro-inspired accelerators, and Xenon — an agentic silicon compiler that owns the fragmented open-source EDA toolchain and drives a design from a Markdown spec all the way to a place-and-routed, tape-out-ready layout.",
    accent: "#67e8f9",
    focusAreas: [
      "RISC-V processor IP",
      "Agentic RTL-to-GDSII flows",
      "Open-source EDA (OpenLANE / OpenROAD)",
      "Functional safety & signoff",
    ],
    stat: { value: "130nm", label: "tape-out-proven process targets" },
  },
  {
    slug: "ai-lab",
    name: "AI Lab",
    glyph: "AI",
    logo: "/AI-labs.png",
    tagline: "Autonomous agents for the hardest engineering.",
    description:
      "We build agentic systems that own real toolchains — designing chips, enforcing compliance, and accelerating AI at the edge, not just autocompleting.",
    longDescription:
      "The AI Lab turns frontier models into dependable operators. Our agents own hard, multi-tool workflows end to end — reading synthesis reports and fixing RTL, running a MISRA compliance fix-loop, or orchestrating an entire chip flow. Everything is verification-first: agents show their work, respect guardrails, and hand control back cleanly.",
    accent: "#4ba6ff",
    focusAreas: [
      "Multi-agent orchestration",
      "Tool-use & verification loops",
      "Agentic EDA & compliance",
      "Edge AI acceleration",
    ],
    stat: { value: "MCP", label: "agent-ready from any IDE" },
  },
  {
    slug: "research-lab",
    name: "Research Lab",
    glyph: "Rx",
    logo: "/research-labs.png",
    tagline: "Machine learning that survives the real world.",
    description:
      "We do applied ML research aimed at deployment — models that generalize across datasets and run on constrained edge hardware, not just benchmarks.",
    longDescription:
      "Research Lab is Winter Labs' long-horizon bet on machine learning that holds up outside the lab. We study cross-dataset generalization, efficient inference, and edge deployment — building models that stay accurate when the data distribution shifts and small enough to run on a Raspberry Pi. Findings that graduate become the engine inside our products.",
    accent: "#a78bfa",
    focusAreas: [
      "Cross-dataset generalization",
      "Efficient / edge inference",
      "Healthcare & signal ML",
      "Reproducible experiments",
    ],
    stat: { value: "<100ms", label: "inference targets on edge devices" },
  },
  {
    slug: "defense-lab",
    name: "Defense Lab",
    glyph: "Dx",
    logo: "/defense-labs.png",
    tagline: "Mission systems for the sky.",
    description:
      "We build software-defined avionics and mission systems — portable landing aids and flight-path monitoring for demanding, safety-critical operations.",
    longDescription:
      "Defense Lab builds software-defined systems for safety-critical airborne operations. Our work spans signal processing, guidance, and independent ground-side monitoring — engineered for the unforgiving realities of high-altitude, poor-visibility flight. We develop under India's iDEX innovation framework, with rigorous simulation before anything touches the air.",
    accent: "#818cf8",
    focusAreas: [
      "Software-defined avionics",
      "Guidance & glide-path systems",
      "Signal processing & DSP",
      "Independent safety monitoring",
    ],
    stat: { value: "1s", label: "deviation-alert latency target" },
  },
  {
    slug: "open-source-lab",
    name: "Open Source Lab",
    glyph: "OS",
    logo: "/oss-labs.png",
    tagline: "Software we build in the open, for everyone.",
    description:
      "We open-source the tooling we build internally — vendor-neutral alternatives to expensive proprietary workflows, free for the whole community.",
    longDescription:
      "Open Source Lab is how Winter Labs gives back. We release the tooling, harnesses, and libraries we build internally as free, vendor-neutral software — from an open MISRA/CERT/BARR-C compliance workflow to the agentic silicon compiler itself. Everything here is built to be installed, forked, and depended on.",
    accent: "#5eead4",
    focusAreas: [
      "Vendor-neutral tooling",
      "Compliance & quality workflows",
      "Agent infrastructure (MCP)",
      "Docs & community",
    ],
    stat: { value: "MIT", label: "released for everyone" },
  },
  {
    slug: "coming-soon",
    name: "More Labs",
    glyph: "+",
    logo: "/more-labs.png",
    tagline: "New frontiers are forming.",
    description:
      "We spin up new labs whenever a problem is big enough to deserve one. Something new is condensing — stay close.",
    longDescription:
      "Winter Labs grows by starting new labs whenever a problem is big enough to deserve one. This space is reserved for what comes next.",
    accent: "#86c6ff",
    focusAreas: ["To be revealed"],
    stat: { value: "soon", label: "new frontiers forming" },
    comingSoon: true,
  },
];

// --- Projects (real work from GitHub) -----------------------
export const projects: Project[] = [
  {
    slug: "xenon",
    name: "Xenon",
    tagline: "The agentic silicon compiler.",
    summary:
      "Turn a Markdown chip spec into verified, place-and-routed silicon on the open-source EDA stack — orchestrated by Claude Code.",
    detail:
      "Xenon owns a wide, fragmented toolchain inside a reproducible Docker sandbox and collapses a 15+ invocation, 8-tool flow into a conversation.",
    about:
      "Open-source EDA is now good enough to ship real silicon, but the toolchain is wide, fragmented and unforgiving — a single RISC-V core can need 15+ invocations across 8 tools, each with its own flags and log format. Xenon puts a team of Claude Code agents in charge of that toolchain: they read synthesis reports, parse timing violations, and edit RTL to fix them. A checkpointed step pipeline keeps every artifact reproducible, and an MCP server exposes the whole flow to agentic IDEs.",
    status: "In Development",
    tags: ["Agentic EDA", "RTL→GDSII", "OpenLANE", "MCP", "Claude Code"],
    metrics: [
      { label: "tests passing", value: "161" },
      { label: "EDA tools orchestrated", value: "10+" },
      { label: "flow", value: "RTL→GDS" },
    ],
    highlights: [
      "Agents read synthesis & timing reports, then edit RTL to close violations",
      "Reproducible Docker sandbox — every run is checkpointed and diffable",
      "MCP server exposes the flow to any agentic IDE",
      "Targets tape-out-proven SkyWater 130 & GF 180 PDKs",
    ],
    stack: [
      "Verilator",
      "Yosys",
      "OpenROAD",
      "OpenLANE",
      "cocotb",
      "nextpnr",
      "GTKWave",
    ],
    language: "Python",
    repo: "Kiransekar/xenon",
    labs: ["silicon-lab", "ai-lab", "open-source-lab"],
  },
  {
    slug: "aegis",
    name: "AEGIS",
    tagline: "Safety-certifiable RISC-V processor IP.",
    summary:
      "A certifiable RV32IMACF core for hard real-time control — DO-254 DAL-A flight and ISO 26262 ASIL-D automotive, at 240 MHz on 130nm.",
    detail:
      "A three-domain SoC on a unified safety interconnect with lockstep voting, ECC memory, and certification traceability.",
    about:
      "AEGIS (Adaptive Engine for Guarded Integrated Systems) is a three-domain SoC built for hard real-time control in safety-critical domains — airborne (DO-254 DAL-A) and automotive (ISO 26262 ASIL-D). A real-time control domain (RV32IMACF + Xdrone) runs at 240 MHz with TCLS 2oo3 lockstep voting; an application domain (RV64GCV, out-of-order) and a security domain (RV32E with PMP + root of trust) sit on the same safety interconnect. The design prioritises deterministic timing, fault detection, and certification traceability.",
    status: "In Development",
    tags: ["RISC-V", "RV32IMACF", "Functional Safety", "TCLS 2oo3", "Verilog"],
    metrics: [
      { label: "clock @ 130nm", value: "240 MHz" },
      { label: "IRQ latency", value: "12 cyc" },
      { label: "tests passing", value: "24/24" },
    ],
    highlights: [
      "TCLS 2oo3 lockstep voting with a dedicated safety monitor unit",
      "512 KB dual-bank scratchpad with SECDED ECC, 1-cycle read",
      "12-cycle guaranteed interrupt latency (49.9 ns @ 240 MHz)",
      "Certification-traceable: DO-254 DAL-A / ISO 26262 ASIL-D",
    ],
    stack: ["Verilog", "RISC-V", "SECDED ECC", "SkyWater 130"],
    language: "Verilog",
    repo: "Kiransekar/AEGIS",
    labs: ["silicon-lab"],
  },
  {
    slug: "azmuth",
    name: "Azmuth",
    tagline: "A neuro-inspired RISC-V accelerator for edge AI.",
    summary:
      "The Xcew processor — RV32IMC extended with custom instructions for neural inference, expression ML, and non-volatile memory.",
    detail:
      "Custom Xcew extensions pack expression-ML, spiking neural networks, and a ReRAM controller onto a deterministic RISC-V core.",
    about:
      "Azmuth extends the standard RV32IMC instruction set with custom Xcew instructions for edge AI. An Expression-ML pipeline evaluates exp/ln/sub with a memoization cache and DAG-based common-subexpression elimination; a spiking-neural-network array uses time-to-first-spike encoding with STDP learning; and a ReRAM non-volatile-memory controller adds wear-leveling and ECC. Deterministic, constant-time policy execution guards against timing side-channels, while per-tile power orchestration handles sleep/wake and body-bias control.",
    status: "Research",
    tags: ["RISC-V", "AI Accelerator", "SNN", "Edge AI", "Verilog"],
    metrics: [
      { label: "base ISA", value: "RV32IMC" },
      { label: "custom ISA", value: "Xcew" },
      { label: "AI blocks", value: "EML·SNN·NVM" },
    ],
    highlights: [
      "Expression-ML pipeline with memoization + CSE via a DAG",
      "Spiking neural network: LIF neurons, TTFS encoding, STDP learning",
      "ReRAM NVM controller with wear-leveling and ECC",
      "Constant-time policy execution + per-tile power orchestration",
    ],
    stack: ["Verilog", "RISC-V", "ReRAM", "SNN"],
    language: "Verilog",
    repo: "Kiransekar/Azmuth",
    labs: ["silicon-lab", "ai-lab"],
  },
  {
    slug: "maisha",
    name: "Maisha",
    tagline: "Open-source MISRA / CERT / BARR-C compliance for embedded C.",
    summary:
      "The free, vendor-neutral alternative to Polyspace, Helix QAC and Coverity's paid compliance workflow — driven from any agentic IDE via MCP.",
    detail:
      "The compliance-workflow layer for MISRA C:2012, BARR-C:2018 and CERT C, running on free engines or layered on a qualified one via SARIF.",
    about:
      "Maisha is the free, vendor-neutral alternative to the paid compliance workflow that tools like Polyspace, Helix QAC and Coverity sell: the agentic fix loop, verification gate, deviation and audit-evidence workflow, and author-time guidance. It runs on free engines (cppcheck + clang-tidy) or layers on top of a qualified engine you already own via SARIF. It is a workflow orchestrator and audit-trail layer — not a qualified detection engine, and honest about it. Named for the Swahili word for 'life' — because this is the code that flies planes and runs medical devices.",
    status: "Open Source",
    tags: ["MISRA C", "CERT C", "Static Analysis", "MCP", "MIT"],
    metrics: [
      { label: "standards", value: "3" },
      { label: "release", value: "v0.3.1" },
      { label: "license", value: "MIT" },
    ],
    highlights: [
      "MISRA C:2012, BARR-C:2018 and CERT C compliance workflows",
      "Agentic fix loop + verification gate + deviation & audit evidence",
      "Runs on free engines (cppcheck + clang-tidy) or a qualified one via SARIF",
      "Install with `pipx install maishac` — usable from any agentic IDE via MCP",
    ],
    stack: ["Python", "cppcheck", "clang-tidy", "SARIF", "MCP"],
    language: "Python",
    repo: "Kiransekar/maisha",
    labs: ["open-source-lab", "ai-lab"],
  },
  {
    slug: "hridai",
    name: "HridAI",
    tagline: "Cross-dataset ECG arrhythmia classification for the edge.",
    summary:
      "A lightweight deep-learning model for single-lead ECG risk triage that generalizes across datasets and runs on ARM Cortex-A72.",
    detail:
      "Research into cross-dataset generalization for ECG classification, optimized for real edge deployment rather than benchmark accuracy.",
    about:
      "HridAI studies whether an ECG classifier can stay accurate when the data distribution shifts — training on the MIT-BIH Arrhythmia Database and transferring to PTB-XL — while remaining small enough to deploy on real edge hardware. The target is a single-lead model that runs on a Raspberry Pi 4 / ARM Cortex-A72 with sub-100ms inference and under 150MB of memory, producing a binary risk triage: Low, Monitor, or Refer.",
    status: "Research",
    tags: ["Deep Learning", "ECG", "Edge ML", "TFLite", "Healthcare"],
    metrics: [
      { label: "inference", value: "<100ms" },
      { label: "memory", value: "<150MB" },
      { label: "quantization", value: "INT8" },
    ],
    highlights: [
      "Cross-dataset generalization: MIT-BIH → PTB-XL",
      "Single-lead ECG input (1000–2500 time steps)",
      "INT8 TFLite, deployable on Raspberry Pi 4 / ARM Cortex-A72",
      "Binary risk triage: Low / Monitor / Refer",
    ],
    stack: ["PyTorch", "TFLite", "ARM Cortex-A72", "MIT-BIH", "PTB-XL"],
    language: "Python",
    repo: "Kiransekar/HRV-Research-Project-HridAI",
    labs: ["research-lab"],
  },
  {
    slug: "nirikshak",
    name: "NIRIKSHAK",
    tagline: "Transportable electronic glide-path for hill helipads.",
    summary:
      "A software-defined portable landing aid giving IAF helicopter crews a stable glide path into steep, high-altitude helipads in poor visibility — with independent ground-side monitoring.",
    detail:
      "Guidance plus independent ground-side verification for steep, high-altitude helicopter approaches — developed under iDEX DISC 12.",
    about:
      "NIRIKSHAK is a software-defined, portable landing aid for Indian Air Force helicopters operating at hill helipads. It gives crews a stable glide path into steep, high-altitude helipads (3.0°–8.0° approaches) in poor visibility, and independently verifies from the ground that the aircraft is actually flying that path — alerting a Ground Approach Controller within one second of any dangerous deviation. This repository holds the pre-grant software, signal-processing and simulation work: everything buildable without live RF transmission, antenna fabrication, or environmental test slots.",
    status: "In Development",
    tags: ["Signal Processing", "Avionics", "Defense", "iDEX", "Simulation"],
    metrics: [
      { label: "approach range", value: "3–8°" },
      { label: "deviation alert", value: "<1s" },
      { label: "programme", value: "iDEX DISC 12" },
    ],
    highlights: [
      "Software-defined glide-path guidance for steep 3.0°–8.0° approaches",
      "Independent ground-side flight-path monitoring for a Ground Approach Controller",
      "Sub-second alerting on dangerous deviation",
      "Pre-grant scope: signal processing + simulation, no live RF required",
    ],
    stack: ["Python", "DSP", "Simulation", "1030 MHz"],
    language: "Python",
    repo: "Kiransekar/NIRIKSHAK",
    labs: ["defense-lab"],
  },
];

// --- Derived helpers ----------------------------------------
export const activeLabs = labs.filter((l) => !l.comingSoon);

export function getLab(slug: string): Lab | undefined {
  return labs.find((l) => l.slug === slug);
}

export function projectsForLab(slug: string): Project[] {
  return projects.filter((p) => p.labs.includes(slug));
}

/** Primary lab (first in a project's labs list), used for accent colour. */
export function primaryLab(project: Project): Lab | undefined {
  return getLab(project.labs[0]);
}

/** Other labs a project is cross-listed in (excludes the given lab slug). */
export function crossLabs(project: Project, exclude?: string): Lab[] {
  return project.labs
    .filter((s) => s !== exclude)
    .map((s) => getLab(s))
    .filter((l): l is Lab => Boolean(l));
}

export const allProjects = projects;
