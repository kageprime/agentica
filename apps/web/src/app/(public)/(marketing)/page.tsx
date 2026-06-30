import { Separator } from '@/components/ui/separator';
import Hero from '@/features/marketing/hero';
import { CtaSection } from '@/features/marketing/cta-section';
import Security from '@/features/marketing/security/security';
import { SurfacesSection } from '@/features/marketing/surfaces-section';
import { ValueSection } from '@/features/marketing/value-section';

export default function Home() {
  return (
    <div className="bg-background relative">
      <Hero />

      <div className="mx-auto max-w-6xl">
        <Separator />
      </div>

      <ValueSection />

      <div className="mx-auto max-w-6xl">
        <Separator />
      </div>

      <SurfacesSection />

      <div className="mx-auto max-w-6xl">
        <Separator />
      </div>

      <Security />

      <div className="mx-auto max-w-6xl">
        <Separator />
      </div>

      <CtaSection />

      <div className="h-24 sm:h-28" />
    </div>
  );
}
