/**
 * Site metadata configuration - SIMPLE AND WORKING
 */

const DEFAULT_APP_URL = 'https://www.dosco.live';
// Only accept a real absolute http(s) URL. A missing var — or a non-decrypted
// dotenvx `encrypted:…` value reaching the Vercel `next build` (which loads the
// committed apps/web/.env raw) — would otherwise flow into
// `metadataBase: new URL(...)`, which then crashes SSR on EVERY route when Next
// resolves relative OG/icon URLs against it (TypeError: Invalid URL).
const rawAppUrl =
  process.env.KORTIX_PUBLIC_APP_URL || process.env.NEXT_PUBLIC_APP_URL || process.env.NEXT_PUBLIC_URL || '';
const baseUrl = /^https?:\/\//.test(rawAppUrl) ? rawAppUrl : DEFAULT_APP_URL;

export const siteMetadata = {
  name: 'Agentica',
  title: 'Agentica – The Agentic AI Platform for Your Company',
  description:
    'Agentica is the agentic AI platform for your company — one place to build, run, and govern AI agents that connect 3,000+ tools and deliver real work, not just chat.',
  url: baseUrl,
  keywords:
    'Agentica, AI agents, AI workforce, AI automation, agent orchestration, AI-native company, build AI agents, connect 3000 tools, AI operations',
};
