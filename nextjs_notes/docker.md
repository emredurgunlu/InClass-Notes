🐳 NEXT.JS DOCKER REHBERİ

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
node_modules  
.next  
.git  
.gitignore  
Dockerfile  
.dockerignore  
npm-debug.log  
.env*  

3️⃣ Dockerfile içeriğini değiştir  
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

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public  

EXPOSE 3000  

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
