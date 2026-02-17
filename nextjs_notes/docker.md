🐳 NEXT.JS DOCKER REHBERİ

https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile

Bu rehber iki farklı senaryoyu içerir:

1️⃣ Source kod içeren container (daha büyük boyut)  
2️⃣ Sadece build çıktısı içeren, daha küçük ve source kod içermeyen image (önerilen)  

🔹 SENARYO 1 — Source Kod İçeren Image  
1️⃣ Proje kökünde .dockerignore oluştur  

İçeriği:

node_modules
.next  
.git  
.gitignore  
Dockerfile  
.dockerignore  
npm-debug.log  
.env*  

2️⃣ Proje kökünde Dockerfile oluştur  

İçeriği:

# ---------- BUILD STAGE ----------
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build


# ---------- PRODUCTION STAGE ----------
FROM node:20-alpine

WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app ./

EXPOSE 3000

CMD ["npx", "next", "start", "-H", "0.0.0.0", "-p", "3000"]

3️⃣ Image oluştur  
docker build -t next-img .  


Bu komut next-img adında bir image oluşturur.  

4️⃣ Image’ı dosyaya çevir (Paylaşmak için)  
docker save -o next-img.tar next-img  


Bu komut next-img.tar dosyasını üretir.  

5️⃣ Karşı tarafın yapacağı işlemler  
docker load -i next-img.tar  
docker run -p 3000:3000 next-img  


Uygulama çalışır:  

http://localhost:3000  

⚠️ Bu yöntemde:  

Source kodlar image içinde bulunur  

Image boyutu daha büyüktür  

node_modules tamamen içeridedir  

🔹 SENARYO 2 — Source Kod İçermeyen, Küçük Boyutlu Image (ÖNERİLEN)  

Bu yöntem production’a daha yakındır.  

1️⃣ next.config.js içine ekle  
module.exports = {  
  output: "standalone",  
};  

2️⃣ Aynı .dockerignore dosyası kullanılabilir  
Dockerfile
.dockerignore
node_modules
npm-debug.log
README.md
.next
.git


3️⃣ Dockerfile içeriğini değiştir  
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* .npmrc* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi


# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
# ENV NEXT_TELEMETRY_DISABLED=1

RUN \
  if [ -f yarn.lock ]; then yarn run build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/config/next-config-js/output
ENV HOSTNAME="0.0.0.0"
CMD ["node", "server.js"]

4️⃣ Image oluştur  
docker build -t next-standalone-img .  

5️⃣ Paylaşmak için  
docker save -o next-standalone-img.tar next-standalone-img  

6️⃣ Karşı taraf:  
docker load -i next-standalone-img.tar  
docker run -p 3000:3000 next-standalone-img  

📦 FARK TABLOSU  
Özellik	Senaryo 1	Senaryo 2 (Standalone)  
Source kod içerir	✅ Evet	❌ Hayır  
Image boyutu	Büyük	Daha küçük  
