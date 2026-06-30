import { Brain, GitPullRequest, MessageSquare, Shield } from 'lucide-react';

const cards = [
  {
    icon: MessageSquare,
    title: 'Works where you work',
    body: 'Drop Agentica into Slack, Teams, or your web workspace. It joins channels, reads context, and acts — no new UI to learn.',
  },
  {
    icon: Brain,
    title: 'Knows your business',
    body: 'Onboards into your codebase, docs, and playbooks. Every answer is grounded in your data, not generic hallucination.',
  },
  {
    icon: GitPullRequest,
    title: ' Ships real work',
    body: 'Writes code, files PRs, drafts specs, answers support tickets, runs reports. Not a chatbot — a coworker.',
  },
  {
    icon: Shield,
    title: 'Stays in your guardrails',
    body: 'Runs in isolated sandboxes with per-agent permissions, audit logs, and budget controls. Self-host or managed cloud.',
  },
];

export function ValueSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24 lg:px-0">
      <div className="mb-14 max-w-2xl space-y-3">
        <h2 className="text-foreground text-3xl font-medium tracking-tight sm:text-4xl">
          Your AI team, ready when you are
        </h2>
        <p className="text-muted-foreground text-base leading-relaxed">
          Agentica is more than a copilot. It&apos;s a persistent AI employee that
          integrates into your existing workflows and delivers real output.
        </p>
      </div>

      <div className="grid gap-px overflow-hidden rounded-sm border bg-border md:grid-cols-2">
        {cards.map(({ icon: Icon, title, body }) => (
          <div key={title} className="bg-card p-6 md:p-8">
            <Icon className="text-muted-foreground size-5" />
            <h3 className="text-foreground mt-5 text-lg font-medium tracking-tight">{title}</h3>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
