FROM node:22-slim
RUN npm install -g pnpm@8
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
COPY apps/web/.next/standalone ./
COPY apps/web/.next/static ./apps/web/.next/static
COPY apps/web/public ./apps/web/public
EXPOSE 3000
CMD ["node", "apps/web/server.js"]
