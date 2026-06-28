'use client';

import { useTranslations } from 'next-intl';
/**
 * "Download apps" — a full-screen surface (like the Customize overlay) that
 * advertises every way to run Agentica beyond the web app. Chrome and Mobile
 * are teased as coming soon. Each card carries a small branded mockup for a
 * Vercel-level feel.
 */

import { ChromeMark } from '@/components/brand/brand-logos';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { Smartphone } from 'lucide-react';

/* ─── Window-chrome dots used across the mockups ─────────────────────────── */
function Dots({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-1.5', className)}>
      <span className="bg-foreground/15 size-2 rounded-full" />
      <span className="bg-foreground/15 size-2 rounded-full" />
      <span className="bg-foreground/15 size-2 rounded-full" />
    </div>
  );
}

/* ─── Card shell ─────────────────────────────────────────────────────────── */
function AppCard({
  icon,
  title,
  description,
  badge,
  action,
  mockup,
  tint,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge?: string;
  action: React.ReactNode;
  mockup: React.ReactNode;
  tint?: string;
}) {
  return (
    <div
      className={cn(
        'group border-border/60 bg-card relative flex flex-col overflow-hidden rounded-3xl border',
        'transition-shadow duration-300 hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.18)]',
        tint,
      )}
    >
      <div className="flex flex-col gap-3 p-6 sm:p-7">
        <div className="flex items-center gap-3">
          <div className="bg-muted text-foreground flex size-9 shrink-0 items-center justify-center rounded-xl">
            {icon}
          </div>
          <h3 className="text-foreground text-base font-semibold tracking-tight">{title}</h3>
          {badge && (
            <Badge variant="secondary" className="ml-auto text-[10px] font-medium">
              {badge}
            </Badge>
          )}
        </div>
        <p className="text-muted-foreground max-w-[42ch] text-[13px] leading-relaxed">
          {description}
        </p>
        <div className="pt-1">{action}</div>
      </div>
      {/* Mockup bleeds to the bottom edge */}
      <div className="relative mt-auto h-[150px] overflow-hidden px-6 sm:px-7">{mockup}</div>
    </div>
  );
}

/* ─── Mockups ────────────────────────────────────────────────────────────── */
function BrowserMockup() {
  const tI18nHardcoded = useTranslations('hardcodedUi');
  return (
    <div className="border-border/60 bg-background absolute inset-x-6 top-2 bottom-0 translate-y-1 overflow-hidden rounded-t-xl border border-b-0 shadow-[0_-1px_24px_-12px_rgba(0,0,0,0.25)]">
      <div className="border-border/50 flex items-center gap-2 border-b px-3 py-2">
        <Dots />
        <div className="bg-muted text-muted-foreground ml-1 flex h-4 flex-1 items-center rounded-full px-2 text-[8px]">
          agentica.dev
        </div>
      </div>
      <div className="relative p-3">
        <div className="bg-muted h-2 w-1/2 rounded" />
        <div className="bg-muted/60 mt-2 h-2 w-2/3 rounded" />
        <div className="bg-foreground text-background mt-3 inline-flex items-center rounded-md px-2 py-1 text-[8px]">
          {tI18nHardcoded.raw('autoFeaturesLayoutDownloadAppsModalJsxTextStartAReturne3430bb5')}
        </div>
        <div className="bg-primary text-primary-foreground absolute top-6 right-5 rounded-md px-1.5 py-0.5 text-[8px] font-medium shadow">
          You
        </div>
      </div>
    </div>
  );
}

function MobileMockup() {
  const tI18nHardcoded = useTranslations('hardcodedUi');
  return (
    <div className="border-border/60 bg-background absolute top-2 bottom-0 left-1/2 w-[112px] -translate-x-1/2 translate-y-1 overflow-hidden rounded-t-[20px] border border-b-0 shadow-[0_-1px_24px_-12px_rgba(0,0,0,0.25)]">
      <div className="flex justify-center py-1.5">
        <div className="bg-muted h-1 w-10 rounded-full" />
      </div>
      <div className="space-y-2 px-3">
        <div className="bg-foreground/90 text-background ml-auto w-2/3 rounded-2xl rounded-br-sm px-2 py-1 text-[8px]">
          {tI18nHardcoded.raw('autoFeaturesLayoutDownloadAppsModalJsxTextSummarizeMyDaya3202c71')}
        </div>
        <div className="flex items-end gap-1 pt-1">
          {[5, 9, 6, 11, 7, 12, 8].map((h, i) => (
            <div key={i} className="bg-primary/70 w-2 rounded-sm" style={{ height: h * 3 }} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function DownloadAppsModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const tI18nHardcoded = useTranslations('hardcodedUi');

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-background flex h-[100dvh] w-screen max-w-none flex-col gap-0 overflow-hidden rounded-none border-0 p-0 shadow-none sm:max-w-none">
        <div className="kx-titlebar-spacer shrink-0" data-tauri-drag-region />

        <div className="flex-1 [scrollbar-width:none] overflow-y-auto [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div className="mx-auto w-full max-w-5xl px-6 py-12 sm:py-16">
            {/* Header */}
            <div className="mb-10 flex flex-col items-center text-center sm:mb-14">
              <span className="text-foreground text-3xl font-bold">火</span>
              <DialogTitle className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
                {tI18nHardcoded.raw('autoFeaturesLayoutDownloadAppsModalJsxTextDoMoreWith33a6da8d')}
              </DialogTitle>
              <DialogDescription className="text-muted-foreground mt-3 max-w-xl text-sm sm:text-base">
                {tI18nHardcoded.raw(
                  'autoFeaturesLayoutDownloadAppsModalJsxTextRunKortixNatively85de8599',
                )}
              </DialogDescription>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {/* Chrome — coming soon */}
              <AppCard
                icon={<ChromeMark className="size-[18px]" />}
                title="Chrome"
                description={tI18nHardcoded.raw(
                  'autoFeaturesLayoutDownloadAppsModalJsxAttrDescriptionKortixNavigates015d9350',
                )}
                badge={tI18nHardcoded.raw(
                  'autoFeaturesLayoutDownloadAppsModalJsxAttrBadgeComingSoon291caabf',
                )}
                action={
                  <Button variant="outline" className="rounded-xl" disabled>
                    {tI18nHardcoded.raw(
                      'autoFeaturesLayoutDownloadAppsModalJsxTextComingSoon89fd3230',
                    )}
                  </Button>
                }
                mockup={<BrowserMockup />}
              />

              {/* Mobile — coming soon */}
              <AppCard
                icon={<Smartphone className="size-4.5" />}
                title="Mobile"
                description={tI18nHardcoded.raw(
                  'autoFeaturesLayoutDownloadAppsModalJsxAttrDescriptionChatHandsd5b305fb',
                )}
                badge={tI18nHardcoded.raw(
                  'autoFeaturesLayoutDownloadAppsModalJsxAttrBadgeComingSoon291caabf',
                )}
                action={
                  <Button variant="outline" className="rounded-xl" disabled>
                    {tI18nHardcoded.raw(
                      'autoFeaturesLayoutDownloadAppsModalJsxTextComingSoon89fd3230',
                    )}
                  </Button>
                }
                mockup={<MobileMockup />}
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
