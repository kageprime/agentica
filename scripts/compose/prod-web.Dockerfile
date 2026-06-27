FROM node:22-slim AS deps
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates curl && rm -rf /var/lib/apt/lists/*
RUN npm install -g pnpm@8
WORKDIR /app
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY apps/web/package.json apps/web/tsconfig.json apps/web/next.config.ts apps/web/source.config.ts ./apps/web/
COPY packages/shared/package.json ./packages/shared/
COPY packages/agent-tunnel/package.json ./packages/agent-tunnel/
RUN pnpm install --shamefully-hoist --prod=false --ignore-scripts

FROM node:22-slim AS builder
ARG NEXT_PUBLIC_APP_URL
ARG NEXT_PUBLIC_URL
ARG NEXT_PUBLIC_BACKEND_URL
ARG NEXT_PUBLIC_SUPABASE_URL
ARG NEXT_PUBLIC_SUPABASE_ANON_KEY
ARG NEXT_PUBLIC_BILLING_ENABLED
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates curl && rm -rf /var/lib/apt/lists/*
RUN npm install -g pnpm@8
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/apps/web/node_modules ./apps/web/node_modules
COPY --from=deps /app/packages ./packages
COPY apps/web/ ./apps/web/
COPY packages/shared/src ./packages/shared/src
COPY tsconfig.base.json ./
ENV NODE_OPTIONS="--max-old-space-size=6144"
ENV NEXT_TELEMETRY_DISABLED=1
RUN cd apps/web && npx next build

FROM node:22-slim AS runner
RUN npm install -g pnpm@8
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=builder /app/apps/web/.next/standalone ./
COPY --from=builder /app/apps/web/.next/static ./apps/web/.next/static
COPY --from=builder /app/apps/web/public ./apps/web/public
EXPOSE 3000
CMD ["node", "apps/web/server.js"]
