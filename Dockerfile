# ============================================
# Dockerfile para Blakor - Astro Static Site
# Optimizado para Dokploy
# ============================================

# Stage 1: Build
FROM node:20-alpine AS builder

# Instalar dependencias del sistema necesarias para sharp
RUN apk add --no-cache libc6-compat python3 make g++

# Habilitar corepack para pnpm
RUN corepack enable && corepack prepare pnpm@9 --activate

WORKDIR /app

# Copiar archivos de configuración primero (mejor cache)
COPY package.json pnpm-lock.yaml .npmrc* ./

# Instalar dependencias
# Nota: Usamos --no-frozen-lockfile porque el lockfile puede
# tener dependencias platform-specific que no aplican en Alpine
RUN pnpm install --no-frozen-lockfile

# Copiar el resto del código
COPY . .

# Build de producción
ENV NODE_ENV=production
RUN pnpm build

# ============================================
# Stage 2: Serve with Nginx
# ============================================
FROM nginx:alpine AS production

# Copiar configuración de Nginx optimizada
COPY nginx.conf /etc/nginx/nginx.conf

# Copiar archivos estáticos del build
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponer puerto 80
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

# Iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
