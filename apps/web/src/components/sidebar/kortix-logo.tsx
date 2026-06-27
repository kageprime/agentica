'use client';

import { cn } from '@/lib/utils';

interface KortixLogoProps {
  size?: number;
  variant?: 'symbol' | 'logomark';
  className?: string;
}

export function KortixLogo({
  size = 24,
  variant = 'symbol',
  className,
}: KortixLogoProps) {
  if (variant === 'logomark') {
    return (
      <svg
        width="708"
        height="142"
        viewBox="0 0 708 142"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn('flex-shrink-0', className)}
        style={{ height: `${size}px`, width: 'auto' }}
      >
        <text
          x="354"
          y="96"
          textAnchor="middle"
          fill="currentColor"
          fontSize="96"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
          letterSpacing="8"
        >
          Agentica
        </text>
      </svg>
    );
  }

  return (
    <svg
      width="30"
      height="25"
      viewBox="0 0 30 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('flex-shrink-0 ', className)}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <text
        x="15"
        y="19"
        textAnchor="middle"
        fill="currentColor"
        fontSize="22"
        fontWeight="700"
        fontFamily="system-ui, sans-serif"
      >
        A
      </text>
    </svg>
  );
}
