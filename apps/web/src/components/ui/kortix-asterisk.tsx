import { cn } from '@/lib/utils';

export const KORTIX_BULLET_GRADIENT =
  'linear-gradient(to bottom, var(--kortix-red), var(--kortix-green), var(--kortix-blue), var(--kortix-yellow), var(--kortix-purple), var(--kortix-red))';

const ASTERISK_ARMS = [
  { className: 'z-10' },
  { className: 'z-20 rotate-90' },
  { className: 'z-30 rotate-45' },
  { className: 'z-40 -rotate-45' },
] as const;

export function KortixAsterisk({
  index,
  parentClass,
  variant = 'gradient',
}: {
  index: number;
  parentClass?: string;
  variant?: 'gradient' | 'solid';
}) {
  return (
    <div
      className={cn('relative mt-1 flex size-6 shrink-0 items-center justify-center', parentClass)}
    >
      <div
        className="size-1.5 shrink-0 rounded-full"
        style={{ backgroundColor: variant === 'solid' ? 'var(--foreground)' : 'var(--kortix-blue)' }}
      />
    </div>
  );
}
