FROM node:22-slim

RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates curl docker.io git openssh-client && \
    rm -rf /var/lib/apt/lists/*

RUN npm install -g pnpm@8 bun@1

WORKDIR /app

COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./

COPY apps/api/package.json apps/api/tsconfig.json ./apps/api/
COPY packages/shared/package.json ./packages/shared/
COPY packages/db/package.json ./packages/db/
COPY packages/llm-gateway/package.json ./packages/llm-gateway/
COPY packages/manifest-schema/package.json ./packages/manifest-schema/
COPY packages/registry/package.json ./packages/registry/
COPY packages/starter/package.json ./packages/starter/
COPY packages/agent-tunnel/package.json ./packages/agent-tunnel/

RUN pnpm install --shamefully-hoist --prod=false --ignore-scripts

CMD ["bun", "run", "--hot", "src/index.ts"]
