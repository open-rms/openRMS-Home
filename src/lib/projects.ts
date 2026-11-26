// The openRMS projects shown on openrms.dev. Mirrors the umbrella PROJECTS.md (the source of truth):
// update both when a project is added or changes status.

export type Status = "idea" | "planned" | "spec" | "alpha" | "beta" | "stable";

export type Group = "radio" | "services" | "foundations";

export interface Project {
  /** Folder name, e.g. openRMS-Translator. */
  folder: string;
  name: string;
  /** Binary, crate or host name, when there is one. */
  artifact?: string;
  group: Group;
  summary: string;
  license: string;
  status: Status;
  /** Language or stack, short. */
  stack: string;
  /** Public address. Shown as text until `live` is true, then linked. */
  host?: string;
  /** True once `host` resolves and serves. */
  live?: boolean;
  /** Public source repository. Set only once the repo is public. */
  repo?: string;
  /** Published release to download, with a short label (e.g. "v0.1.1 pre-release, Linux"). */
  download?: { href: string; label: string };
}

export const groups: { id: Group; title: string; blurb: string }[] = [
  {
    id: "radio",
    title: "On the radio",
    blurb: "Rust daemons that run next to your rig, on anything from a desktop to a Pi Zero.",
  },
  {
    id: "services",
    title: "Online services",
    blurb: "API-first services anyone can use, mirror or run for themselves.",
  },
  {
    id: "foundations",
    title: "Foundations",
    blurb: "The contracts, libraries and test rigs everything else is built on.",
  },
];

export const projects: Project[] = [
  {
    folder: "openRMS-Translator",
    name: "Translator",
    artifact: "openrms-translator",
    group: "radio",
    summary:
      "Owns the radio and the modems, and gives Pat, Winlink Express and LinBPQ the ARDOP, VARA-compatible, KISS and AGWPE interfaces they already speak, so open modems work with today's software.",
    license: "AGPL-3.0+",
    status: "planned",
    stack: "Rust",
  },
  {
    folder: "openRMS-Gateway",
    name: "Gateway",
    artifact: "openrms-gateway",
    group: "radio",
    summary:
      "Our own RMS-style gateway. Accepts radio sessions through the Translator and relays mail to Winlink CMS, a local mailbox, or Exchange.",
    license: "AGPL-3.0+",
    status: "planned",
    stack: "Rust",
  },
  {
    folder: "openRMS-Watch",
    repo: "https://github.com/open-rms/openRMS-Watch",
    download: {
      href: "https://github.com/open-rms/openRMS-Watch/releases/tag/v0.1.1",
      label: "v0.1.1 pre-release, Linux",
    },
    name: "Watch",
    artifact: "openrms-watch",
    group: "radio",
    summary:
      "A passive on-air monitor. Point an SDR or KiwiSDR at the band and it logs which Mercury stations are calling and answering, with a local web page and an optional community feed.",
    license: "AGPL-3.0+",
    status: "alpha",
    stack: "Rust",
    host: "watch.openrms.dev",
  },
  {
    folder: "openRMS-Atlas",
    name: "Atlas",
    artifact: "openrms-atlas",
    repo: "https://github.com/open-rms/openRMS-Atlas",
    group: "services",
    summary:
      "An open, API-first registry of radio email gateways on every mode, with the real waveform each one runs, heartbeats, full dumps and a Winlink-compatible feed that Pat can read.",
    license: "AGPL-3.0+",
    status: "alpha",
    stack: "TypeScript",
    host: "atlas.openrms.dev",
    live: true,
  },
  {
    folder: "openRMS-Site",
    name: "Atlas website",
    repo: "https://github.com/open-rms/openRMS-Site",
    group: "services",
    summary:
      "The map, filters, gateway pages and sysop dashboard for Atlas. A pure client of the public API.",
    license: "AGPL-3.0+ / CC-BY-4.0",
    status: "alpha",
    stack: "SvelteKit",
    host: "atlas.openrms.dev",
    live: true,
  },
  {
    folder: "openRMS-Accounts",
    repo: "https://github.com/open-rms/openRMS-Accounts",
    name: "Accounts",
    artifact: "openrms-accounts",
    group: "services",
    summary:
      "One sign-in for every openRMS service, with callsign verification, clubs and roles. Self-hosters can point their stack at their own issuer.",
    license: "AGPL-3.0+",
    status: "alpha",
    stack: "TypeScript",
    host: "auth.openrms.dev",
    live: true,
  },
  {
    folder: "openRMS-Rigs",
    repo: "https://github.com/open-rms/openRMS-Rigs",
    name: "Rigs",
    group: "services",
    summary:
      "Crowd-sourced radio settings profiles: how to set up a given rig for a given mode, in Hamlib terms, readable by people and by software.",
    license: "AGPL-3.0+ / CC-BY-SA-4.0",
    status: "alpha",
    stack: "TypeScript",
    host: "rigs.openrms.dev",
    live: true,
  },
  {
    folder: "openRMS-Exchange",
    name: "Exchange",
    artifact: "openrms-exchange",
    group: "services",
    summary:
      "A federated message-exchange back end: an open alternative to a single central CMS, so the network doesn't depend on any one operator.",
    license: "AGPL-3.0+",
    status: "idea",
    stack: "Rust",
  },
  {
    folder: "openRMS-Spec",
    repo: "https://github.com/open-rms/openRMS-Spec",
    name: "Spec",
    group: "foundations",
    summary:
      "The language-neutral contracts every project implements: the Atlas API, identity, the Translator control API and the config schema. Written first, so others can integrate without reading our code.",
    license: "CC-BY-4.0 / MPL-2.0",
    status: "spec",
    stack: "OpenAPI, JSON Schema",
  },
  {
    folder: "openRMS-Libs",
    name: "Libs",
    artifact: "openrms-* crates",
    group: "foundations",
    summary:
      "Reusable crates for B2F, LZHUF, KISS, AGWPE and modem host protocols, with C-ABI wrappers so C, Python and Go apps can use them too.",
    license: "MPL-2.0",
    status: "alpha",
    stack: "Rust",
  },
  {
    folder: "openRMS-Testbed",
    name: "Testbed",
    group: "foundations",
    summary:
      "Audio loopback, a fake rigctld and a fake CMS, and a compatibility matrix in CI, so regressions are caught before anyone keys up.",
    license: "MPL-2.0",
    status: "planned",
    stack: "Rust, PipeWire",
  },
];

/** Open-source projects openRMS builds on. Not ours; we talk to them over TCP or reuse MIT code. */
export const upstream: { name: string; what: string; href: string }[] = [
  { name: "Mercury", what: "HF modem by Rhizomatica (HERMES)", href: "https://github.com/Rhizomatica/mercury" },
  { name: "ardopcf", what: "ARDOP modem", href: "https://github.com/pflarue/ardop" },
  { name: "Dire Wolf", what: "AX.25 packet soundcard TNC", href: "https://github.com/wb2osz/direwolf" },
  { name: "modem73", what: "OFDM data modem", href: "https://github.com/RFnexus/modem73" },
  { name: "Pat", what: "Winlink client, and wl2k-go", href: "https://getpat.io" },
  { name: "Hamlib", what: "Rig control (rigctld)", href: "https://hamlib.github.io" },
];

export const statusOrder: Status[] = ["idea", "planned", "spec", "alpha", "beta", "stable"];

export const statusMeaning: Record<Status, string> = {
  idea: "Direction only",
  planned: "Designed, not started",
  spec: "Contract being written",
  alpha: "Working code, early testing",
  beta: "Public testing",
  stable: "Ready to rely on",
};

/** GitHub organization. Set to null to show GITHUB_PLANNED as "coming soon" instead of a link. */
export const GITHUB_URL: string | null = "https://github.com/open-rms";
export const GITHUB_PLANNED = "github.com/open-rms";
