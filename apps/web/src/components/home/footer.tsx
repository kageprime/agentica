'use client';

import { CtaSection } from '@/features/marketing/landing/cta-section';
import { FOOTER_TRANSLATION_KEYS } from '@/i18n/footer-translation-keys.generated';
import { localizeUiCatalog } from '@/i18n/localize-ui-catalog';
import { cn } from '@/lib/utils';
import { useTranslations } from '@/i18n/use-translations';
import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';

type FooterLinkItem = {
  label: string;
  href: string;
  external?: boolean;
};

type FooterSection = {
  title: string;
  links: FooterLinkItem[];
};

const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: '火 Dosco',
    links: [
      { label: 'Dosco', href: '/' },
      { label: 'Privacy', href: '/legal?tab=privacy' },
      { label: 'Terms', href: '/legal/terms' },
    ],
  },
];

function FooterLink({ label, href, external }: FooterLinkItem) {
  const className = cn(
    'group flex min-w-0 items-baseline py-1 text-sm hover:text-foreground text-muted-foreground/90 whitespace-nowrap',
  );

  if (external) {
    return (
      <Link href={href} target="_blank" rel="noopener noreferrer" className={className}>
        <span className="min-w-0">{label}</span>
      </Link>
    );
  }

  return (
    <Link href={href} className={className}>
      <span className="min-w-0">{label}</span>
    </Link>
  );
}

const Footer = () => {
  const tI18nHardcoded = useTranslations('hardcodedUi');
  const tI18nComplete = useTranslations('hardcodedUi.i18nComplete');
  const footerSections = localizeUiCatalog(FOOTER_SECTIONS, tI18nComplete, FOOTER_TRANSLATION_KEYS);
  const currentYear = new Date().getFullYear();

  return (
    <section className="from-card to-background relative overflow-hidden border-t bg-linear-to-b from-30% to-90% pt-12 pb-12 md:pb-16">
      <CtaSection />

      <footer id="site-footer" className="relative z-10">
        <div className="mx-auto mb-12 max-w-7xl px-6">
          <nav>
            {/* One row across the full footer width: the section title and
                its links sit inline and spread edge to edge instead of
                stacking in a left column. */}
            <div className="flex flex-wrap items-baseline gap-x-8 gap-y-3 md:justify-between">
              {footerSections.map((section) => (
                <div
                  key={section.title}
                  className="flex min-w-0 flex-wrap items-baseline gap-x-8 gap-y-3"
                >
                  <h3 className="text-foreground text-sm">{section.title}</h3>
                  <ul className="flex min-w-0 flex-wrap items-baseline gap-x-8 gap-y-3">
                    {section.links.map((link) =>
                      process.env.NEXT_PUBLIC_USE_CASES_ENABLED === 'false' &&
                      link.href === '/use-cases' ? null : (
                        <li key={link.label} className="min-w-0">
                          <FooterLink {...link} />
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </nav>
        </div>

        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 border-t p-6 md:flex-row md:items-center">
          <div className="text-muted-foreground flex items-center gap-3 text-base">
            <small>
              {tI18nHardcoded.raw('autoComponentsHomeFooterJsxTextCopye99743e8')}
              {currentYear} {tI18nHardcoded.raw('i18nComplete.textab54cf5e1d9d')}
            </small>
          </div>

          <ThemeToggle variant="compact" systemTheme={false} />
        </div>
      </footer>
    </section>
  );
};

export default Footer;
