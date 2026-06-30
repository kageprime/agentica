'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';

import { UnicornBackground } from '@/components/ui/unicorn-background';

const ACTIONS = ['Work', 'Design', 'Prototype', 'Automate'];

function BlinkingActions() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % ACTIONS.length), 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-block w-[2.8em] text-left align-top">
      <span className="invisible">{ACTIONS.reduce((a, b) => (a.length > b.length ? a : b))}</span>
      <AnimatePresence mode="popLayout">
        <motion.span
          key={ACTIONS[index]}
          className="absolute inset-0 text-left"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
        >
          {ACTIONS[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <UnicornBackground />
      </div>

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6">
        <h1 className="text-foreground text-center text-4xl leading-tight font-light tracking-tight md:text-6xl lg:text-7xl">
          Agentica for{' '}
          <BlinkingActions />
        </h1>
        <p className="text-muted-foreground mt-5 max-w-xl text-center text-base text-balance md:text-lg">
          The first AI coworker your team will actually use.
        </p>
      </div>
    </section>
  );
};

export default Hero;
