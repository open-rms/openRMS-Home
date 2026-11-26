<script lang="ts">
  import { Button } from "#lib/components/ui/button/index.ts";
  import * as Card from "#lib/components/ui/card/index.ts";
  import StatusBadge from "#lib/StatusBadge.svelte";
  import {
    groups,
    projects,
    upstream,
    statusOrder,
    statusMeaning,
    GITHUB_URL,
    GITHUB_PLANNED,
  } from "#lib/projects.ts";
  import ArrowRight from "@lucide/svelte/icons/arrow-right";
  import Radio from "@lucide/svelte/icons/radio";
  import MapPinned from "@lucide/svelte/icons/map-pinned";
  import Network from "@lucide/svelte/icons/network";
  import Unlock from "@lucide/svelte/icons/lock-open";
  import Waves from "@lucide/svelte/icons/audio-waveform";
  import Users from "@lucide/svelte/icons/users";
  import Braces from "@lucide/svelte/icons/braces";
  import ShieldCheck from "@lucide/svelte/icons/shield-check";
  import HeartHandshake from "@lucide/svelte/icons/heart-handshake";
  import ExternalLink from "@lucide/svelte/icons/external-link";

  const modes = ["Mercury", "ARDOP", "AX.25 packet", "modem73", "ION HF", "Data2G"];

  const path = [
    {
      icon: Radio,
      step: "First",
      title: "Work alongside Winlink",
      body: "The Translator will sit in front of open modems and speak the host interfaces Pat, Winlink Express and LinBPQ already know, so open modes work with today's software, for users and for sysops, without waiting for anyone's permission.",
    },
    {
      icon: MapPinned,
      step: "Next",
      title: "An open gateway directory",
      body: "Atlas lists every gateway on every mode, with the waveform it really runs, in a public API anyone can read, mirror or ship in their own distribution.",
    },
    {
      icon: Network,
      step: "Later",
      title: "An open gateway network",
      body: "Our own gateway, then a federated message exchange, so radio email keeps working even if any single operator, including us, goes away.",
    },
  ];

  const values = [
    {
      icon: Unlock,
      title: "Open source, no strings",
      body: "Standard licenses, no CLA: MPL-2.0 libraries anyone can use, AGPL services that stay open even when hosted. Contributors sign off with a DCO.",
    },
    {
      icon: Waves,
      title: "Honest about the waveform",
      body: "Translation changes what the software sees, never what goes over the air. A Mercury gateway says it's Mercury, with an honest service code, so nobody calls a station that can't answer.",
    },
    {
      icon: Network,
      title: "No single point of control",
      body: "Specs first, APIs public, data downloadable, every service self-hostable. The network should outlive any one operator.",
    },
    {
      icon: Users,
      title: "For the people who need it most",
      body: "Hams, emcomm groups, clubs and communities that can't pay for proprietary tools, on hardware as small as a Pi Zero.",
    },
    {
      icon: ShieldCheck,
      title: "Sane defaults, safe always",
      body: "Standard, Advanced and Expert settings. Experts can override most guards, but nothing overrides the stuck-PTT cut-off or keys two transmitters on one radio.",
    },
    {
      icon: Braces,
      title: "Built to be built on",
      body: "Reusable libraries with C bindings, documented contracts, and a feed existing clients already read. Other apps adopting our work counts as winning.",
    },
  ];

  const funding = [
    { title: "Voluntary", body: "Contributing is never a condition of using the software." },
    { title: "Fully transparent", body: "Every contribution, agreement and payout goes in a public ledger, with quarterly reports." },
    {
      title: "Money flows outward",
      body: "Most of it leaves the project: to radio clubs and emcomm groups, youth and STEM radio, and the open-source projects openRMS depends on.",
    },
  ];
</script>

<svelte:head>
  <title>openRMS: open modes for radio email</title>
  <meta property="og:title" content="openRMS: open modes for radio email" />
  <meta
    property="og:description"
    content="Open-source projects bringing open digital modes into radio email: a translator, an open gateway directory, and an open gateway network."
  />
</svelte:head>

<!-- Hero -->
<section class="relative overflow-hidden border-b">
  <svg
    aria-hidden="true"
    class="text-primary pointer-events-none absolute inset-x-0 bottom-0 h-40 w-full opacity-[0.12] sm:h-56"
    viewBox="0 0 1200 200"
    preserveAspectRatio="none"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
  >
    {#each Array(7) as _, i}
      <path d={`M0 ${120 + i * 10} C 150 ${60 + i * 18}, 300 ${180 - i * 6}, 450 ${120 + i * 4} S 750 ${50 + i * 20}, 900 ${130 - i * 3} S 1100 ${90 + i * 12}, 1200 ${110 + i * 8}`} />
    {/each}
  </svg>
  <div class="relative mx-auto max-w-6xl px-4 pt-20 pb-28 sm:pt-28 sm:pb-36">
    <p class="text-primary mb-4 font-mono text-sm font-semibold tracking-wide">openrms.dev</p>
    <h1 class="max-w-3xl text-4xl leading-[1.1] font-bold tracking-tight text-balance sm:text-6xl">
      Radio email, on open modes.
    </h1>
    <p class="text-muted-foreground mt-6 max-w-2xl text-lg text-pretty sm:text-xl">
      openRMS is a family of open-source projects that make open digital modes first-class in radio email. It works with
      the software hams already use, lists gateways in an open directory, and is building toward a gateway network that no
      single operator controls.
    </p>
    <ul aria-label="Modes" class="mt-6 flex flex-wrap gap-2">
      {#each modes as m}
        <li class="bg-card rounded-full border px-3 py-1 font-mono text-xs">{m}</li>
      {/each}
    </ul>
    <div class="mt-8 flex flex-wrap gap-3">
      <Button href="#projects" size="lg" class="h-10 px-4">See the projects <ArrowRight /></Button>
      <Button href="#values" size="lg" variant="outline" class="h-10 px-4">What we stand for</Button>
    </div>
  </div>
</section>

<!-- Goal -->
<section id="goal" class="mx-auto max-w-6xl scroll-mt-20 px-4 pt-20">
  <div class="max-w-2xl">
    <p class="text-primary font-mono text-sm font-semibold">Our goal</p>
    <h2 class="mt-2 text-3xl font-bold tracking-tight">Open modes shouldn't need permission.</h2>
    <p class="text-muted-foreground text-lg">
      Radio email shouldn't depend on one organization deciding which waveforms count. Excellent open modems already exist.
      What's missing is the plumbing that connects them to the clients, gateways and directories people actually use. We're
      building it in three steps.
    </p>
  </div>
  <ol class="mt-10 grid gap-4 md:grid-cols-3">
    {#each path as p, i}
      <li class="bg-card relative rounded-xl border p-6">
        <div class="flex items-center gap-3">
          <span class="bg-primary-soft text-primary grid size-10 place-items-center rounded-lg"><p.icon class="size-5" /></span>
          <span class="text-muted-foreground font-mono text-xs">{i + 1} · {p.step}</span>
        </div>
        <h3 class="mt-4 text-lg">{p.title}</h3>
        <p class="text-muted-foreground mb-0 text-sm">{p.body}</p>
      </li>
    {/each}
  </ol>
  <p class="text-muted-foreground mt-6 max-w-3xl border-l-2 pl-4 text-sm">
    <b class="text-foreground">What translation can't do:</b> the Translator changes what <i>software</i> sees, not what
    goes over the air. If a gateway runs Mercury behind a VARA-compatible interface, only clients running Mercury can
    connect. That's why our directory records the real waveform.
  </p>
</section>

<!-- Projects -->
<section id="projects" class="mx-auto max-w-6xl scroll-mt-20 px-4 pt-24">
  <div class="flex flex-wrap items-end justify-between gap-6">
    <div class="max-w-2xl">
      <p class="text-primary font-mono text-sm font-semibold">Projects</p>
      <h2 class="mt-2 text-3xl font-bold tracking-tight">One umbrella, many small pieces.</h2>
      <p class="text-muted-foreground text-lg">
        Each project does one job and talks to the others through published contracts. Use one, use them all, or build
        your own on top.
      </p>
    </div>
    <dl class="text-muted-foreground grid grid-cols-[auto_1fr] items-center gap-x-3 gap-y-1.5 text-xs">
      {#each statusOrder.filter((s) => s !== "stable" && s !== "beta") as s}
        <dt><StatusBadge status={s} /></dt>
        <dd>{statusMeaning[s]}</dd>
      {/each}
    </dl>
  </div>

  {#each groups as g}
    <div class="mt-12">
      <div class="mb-4 flex flex-wrap items-baseline gap-x-3">
        <h3 class="mb-0 text-xl">{g.title}</h3>
        <p class="text-muted-foreground my-0 text-sm">{g.blurb}</p>
      </div>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {#each projects.filter((p) => p.group === g.id) as p}
          <Card.Root class="h-full">
            <Card.Header>
              <div class="flex items-start justify-between gap-3">
                <Card.Title class="text-base">{p.name}</Card.Title>
                <StatusBadge status={p.status} />
              </div>
              <p class="text-muted-foreground my-0 font-mono text-xs">{p.artifact ?? p.folder}</p>
            </Card.Header>
            <Card.Content class="flex-1">
              <p class="text-muted-foreground my-0 text-sm">{p.summary}</p>
            </Card.Content>
            <Card.Footer class="text-muted-foreground flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs">
              <span>{p.stack}</span>
              <span>{p.license}</span>
              {#if p.host && p.live}
                <a href={`https://${p.host}`} class="inline-flex items-center gap-1">{p.host}<ExternalLink class="size-3" /></a>
              {:else if p.host}
                <span title="Planned address, not live yet">{p.host}</span>
              {/if}
              {#if p.repo}
                <a href={p.repo} rel="noopener" class="inline-flex items-center gap-1">source<ExternalLink class="size-3" /></a>
              {/if}
            </Card.Footer>
          </Card.Root>
        {/each}
      </div>
    </div>
  {/each}

  <div class="bg-card mt-12 rounded-xl border p-6">
    <h3 class="text-lg">Standing on the shoulders of</h3>
    <p class="text-muted-foreground mt-0 text-sm">
      openRMS doesn't replace the modems. It connects them. These projects aren't ours, and a share of any money we raise
      goes back to the ones we depend on.
    </p>
    <ul class="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
      {#each upstream as u}
        <li>
          <a href={u.href} rel="noopener" class="inline-flex items-center gap-1 font-medium">{u.name}<ExternalLink class="size-3" /></a>
          <span class="text-muted-foreground block text-sm">{u.what}</span>
        </li>
      {/each}
    </ul>
  </div>
</section>

<!-- Values -->
<section id="values" class="mx-auto max-w-6xl scroll-mt-20 px-4 pt-24">
  <div class="max-w-2xl">
    <p class="text-primary font-mono text-sm font-semibold">Values</p>
    <h2 class="mt-2 text-3xl font-bold tracking-tight">How we build.</h2>
  </div>
  <div class="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
    {#each values as v}
      <div>
        <v.icon class="text-primary size-6" />
        <h3 class="mt-3 text-base">{v.title}</h3>
        <p class="text-muted-foreground my-0 text-sm">{v.body}</p>
      </div>
    {/each}
  </div>
</section>

<!-- Request + funding -->
<section id="funding" class="mx-auto max-w-6xl scroll-mt-20 px-4 pt-24">
  <div class="bg-primary-soft grid gap-10 rounded-2xl p-8 sm:p-10 lg:grid-cols-2">
    <div>
      <HeartHandshake class="text-primary size-7" />
      <h2 class="mt-3 text-2xl font-bold tracking-tight">A request, not a license term</h2>
      <p>
        The licenses let you do a lot. Beyond them, we're asking two things, person to person:
      </p>
      <ul class="list-disc space-y-2 pl-5">
        <li><b>Please keep it open.</b> If you build on openRMS, publish your changes, even where the license wouldn't require it.</li>
        <li>
          <b>If you don't, or you make money from it,</b> please consider paying it forward. It goes back to the communities
          that make radio work.
        </li>
      </ul>
      <p class="text-muted-foreground text-sm">Nothing here restricts your rights under the license.</p>
    </div>
    <div>
      <h3 class="text-lg">Where the money goes</h3>
      <p class="text-muted-foreground mt-0 text-sm">The funding model is still being finalized. These principles are settled.</p>
      <dl class="mt-4 space-y-4">
        {#each funding as f}
          <div class="bg-card rounded-lg border p-4">
            <dt class="font-semibold">{f.title}</dt>
            <dd class="text-muted-foreground text-sm">{f.body}</dd>
          </div>
        {/each}
      </dl>
    </div>
  </div>
</section>

<!-- Get involved -->
<section id="involved" class="mx-auto max-w-6xl scroll-mt-20 px-4 pt-24">
  <div class="max-w-2xl">
    <p class="text-primary font-mono text-sm font-semibold">Get involved</p>
    <h2 class="mt-2 text-3xl font-bold tracking-tight">Early days. Good time to join.</h2>
    <p class="text-muted-foreground text-lg">
      Everything is in alpha or earlier. Atlas and Accounts are live for early testing, and more repositories go public as each project gets ready. Sysops with open
      modems, SDR owners, Rust and TypeScript developers, and emcomm groups with real-world needs are all welcome.
    </p>
  </div>
  <div class="mt-8 grid gap-4 sm:grid-cols-2">
    <div class="bg-card rounded-xl border p-6">
      <h3 class="text-base">Source code</h3>
      {#if GITHUB_URL}
        <a href={GITHUB_URL} rel="noopener" class="font-mono text-sm">{GITHUB_URL.replace(/^https?:\/\//, "")}</a>
      {:else}
        <p class="text-muted-foreground my-0 font-mono text-sm">{GITHUB_PLANNED} · coming soon</p>
      {/if}
          </div>
    <div class="bg-card rounded-xl border p-6">
      <h3 class="text-base">Talk to us</h3>
      <p class="text-muted-foreground my-0 text-sm">Mailing list and chat · coming soon</p>
    </div>
  </div>
</section>
