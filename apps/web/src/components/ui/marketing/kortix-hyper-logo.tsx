'use client';

import { motion, type MotionProps } from 'motion/react';
import { useEffect, useId, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

import { buildCells, type Cell, CELL_FONT_SIZE, VIEW_H, VIEW_W } from './kortix-hyper-logo.cells';

const LOGO_PATH =
  'M2 23 L15 2 L28 23 L22 23 L18 14 L12 14 L8 23 Z';

interface KortixHyperLogoProps extends Omit<MotionProps, 'children'> {
  className?: string;
  size?: number;
  duration?: number;
  delay?: number;
  startOnView?: boolean;
  animateOnHover?: boolean;
}

export function KortixHyperLogo({
  className,
  size = 80,
  duration = 800,
  delay = 0,
  startOnView = true,
  animateOnHover = true,
  ...props
}: KortixHyperLogoProps) {
  const clipId = useId();
  const [cells, setCells] = useState<Cell[]>(() => buildCells(false));
  const [progress, setProgress] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const svgRef = useRef<SVGSVGElement | null>(null);

  const handleAnimationTrigger = () => {
    if (animateOnHover && !isAnimating) {
      setCells(buildCells(true));
      setIsAnimating(true);
    }
  };

  // Randomize the grid once mounted — after hydration, so it never diverges
  // from the deterministic server render.
  useEffect(() => {
    setCells(buildCells(true));
  }, []);

  useEffect(() => {
    if (!startOnView) {
      const startTimeout = setTimeout(() => setIsAnimating(true), delay);
      return () => clearTimeout(startTimeout);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsAnimating(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '-30% 0px -30% 0px' },
    );

    if (svgRef.current) {
      observer.observe(svgRef.current);
    }

    return () => observer.disconnect();
  }, [delay, startOnView]);

  useEffect(() => {
    let animationFrameId: number | null = null;

    if (isAnimating) {
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const p = Math.min((currentTime - startTime) / duration, 1);
        setProgress(p);

        if (p < 1) {
          animationFrameId = requestAnimationFrame(animate);
        } else {
          setProgress(1);
          setIsAnimating(false);
        }
      };

      setProgress(0);
      animationFrameId = requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrameId !== null) cancelAnimationFrame(animationFrameId);
    };
  }, [duration, isAnimating]);

  const fillPhase = Math.min(progress / 0.6, 1);
  const solidOpacity = progress <= 0.6 ? 0 : (progress - 0.6) / 0.4;

  return (
    <motion.svg
      ref={svgRef}
      width={size}
      height={size}
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('flex-shrink-0', className)}
      style={{ width: `${size}px`, height: `${size}px` }}
      onMouseEnter={handleAnimationTrigger}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <path d={LOGO_PATH} />
        </clipPath>
      </defs>

      <path d={LOGO_PATH} fill="currentColor" style={{ opacity: solidOpacity }} />

      <g clipPath={`url(#${clipId})`} style={{ opacity: 1 - solidOpacity }}>
        {cells.map((cell, i) => {
          const visible = cell.threshold <= fillPhase;
          return (
            <text
              key={i}
              x={cell.x}
              y={cell.y}
              fontSize={CELL_FONT_SIZE}
              textAnchor="middle"
              dominantBaseline="central"
              fill="currentColor"
              style={{
                opacity: visible ? 1 : 0,
                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
              }}
            >
              {cell.char}
            </text>
          );
        })}
      </g>
    </motion.svg>
  );
}
