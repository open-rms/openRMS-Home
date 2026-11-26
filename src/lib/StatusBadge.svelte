<script lang="ts">
  import { statusMeaning, type Status } from "#lib/projects.ts";
  import { cn } from "#lib/utils.ts";

  let { status }: { status: Status } = $props();

  const styles: Record<Status, string> = {
    idea: "border-dashed border-border text-muted-foreground",
    planned: "border-border text-muted-foreground",
    spec: "border-transparent bg-listed/15 text-listed",
    alpha: "border-transparent bg-primary-soft text-primary",
    beta: "border-transparent bg-stale/15 text-stale",
    stable: "border-transparent bg-primary text-primary-foreground",
  };
</script>

<span
  title={statusMeaning[status]}
  class={cn("inline-flex h-5 items-center rounded-full border px-2 font-mono text-[0.7rem] font-semibold tracking-wide uppercase", styles[status])}
>{status}</span>
