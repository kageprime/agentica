import { MessageSquare, Monitor, Terminal } from 'lucide-react';

const surfaces = [
  {
    icon: MessageSquare,
    name: 'Slack & Teams',
    body: 'Tag Agentica in any channel or DM. It reads the thread, researches, and replies — or kicks off a workflow.',
  },
  {
    icon: Monitor,
    name: 'Web workspace',
    body: 'A full dashboard to manage agents, review their output, assign tasks, and monitor activity across your team.',
  },
  {
    icon: Terminal,
    name: 'CLI & API',
    body: 'Headless access for power users. Pipe Agentica into your existing scripts, CI/CD, and dev toolchain.',
  },
];

export function SurfacesSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24 lg:px-0">
      <div className="mb-14 max-w-2xl space-y-3">
        <h2 className="text-foreground text-3xl font-medium tracking-tight sm:text-4xl">
          Built for the way you work
        </h2>
        <p className="text-muted-foreground text-base leading-relaxed">
          However your team communicates, Agentica fits in. No forced migrations or yet another inbox.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {surfaces.map(({ icon: Icon, name, body }) => (
          <div key={name} className="border-border bg-card rounded-sm border p-6 md:p-8">
            <Icon className="text-muted-foreground size-5" />
            <h3 className="text-foreground mt-5 text-lg font-medium tracking-tight">{name}</h3>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
