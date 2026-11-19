# Tahap build: pasang dependensi dan bundel klien
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --ignore-scripts
COPY shared ./shared
COPY client ./client
COPY server ./server
COPY tools ./tools
RUN npm run build && npm prune --omit=dev

# Tahap jalan: image kecil, tanpa root
FROM node:22-alpine
ENV NODE_ENV=production PORT=8080
WORKDIR /app
COPY --from=build /app/package.json ./
COPY --from=build /app/node_modules/ws ./node_modules/ws
COPY --from=build /app/node_modules/nodemailer ./node_modules/nodemailer
COPY --from=build /app/shared ./shared
COPY --from=build /app/server ./server
COPY --from=build /app/tools ./tools
COPY --from=build /app/client/index.html /app/client/suara.html /app/client/admin.html /app/client/style.css ./client/
COPY --from=build /app/client/dist ./client/dist
COPY --from=build /app/client/bake ./client/bake
# folder catatan pertandingan; volume bernama mewarisi pemilik ini saat pertama dibuat
RUN mkdir -p /app/data && chown node:node /app/data
ENV DATA_DIR=/app/data
USER node
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget -qO- http://127.0.0.1:8080/health || exit 1
CMD ["node", "server/server.js"]
