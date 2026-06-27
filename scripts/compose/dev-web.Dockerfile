FROM node:22-slim

RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates curl && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

RUN npm install -g pnpm@8

COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./

COPY apps/web/package.json apps/web/tsconfig.json apps/web/next.config.ts ./apps/web/
COPY packages/shared/package.json ./packages/shared/
COPY packages/agent-tunnel/package.json ./packages/agent-tunnel/

RUN pnpm install --shamefully-hoist --prod=false --ignore-scripts

CMD ["pnpm", "exec", "next", "dev", "--turbopack", "--port", "3000"]
