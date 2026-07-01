import { Separator } from '@/components/ui/separator';
import { HowItWorks } from '@/features/marketing/how-it-work/how-it-works';
import { SurfacesSection } from '@/features/marketing/story-sections';
import { WhyAgentica } from '@/features/marketing/why-kortix';
import Hero from '@/features/marketing/hero';
import { CtaSection } from '@/features/marketing/cta-section';
import Security from '@/features/marketing/security/security';

export default function Home() {
  return (
    <div className="bg-background relative">
      <Hero />

      <div className="mx-auto max-w-6xl">
        <Separator />
      </div>

      <HowItWorks />

      <div className="mx-auto max-w-6xl">
        <Separator />
      </div>

      <SurfacesSection />

      <div className="mx-auto max-w-6xl">
        <Separator />
      </div>

      <WhyAgentica />

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
