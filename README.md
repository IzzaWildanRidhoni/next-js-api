# Aplikasi Next.js dengan Prisma

Ini adalah proyek [Next.js](https://nextjs.org/) yang dibuat dengan [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) dan menggunakan Prisma sebagai ORM.

## API LINK
[API LINK](https://.postman.co/workspace/My-Workspace~d7920d57-a8a8-4064-801a-1d805ceeeb4e/collection/9887809-048b9acc-dc2d-40ea-97e0-081e6f8e8d5e?action=share&creator=9887809)

## Memulai Pengembangan

### Instalasi Dependensi

```bash
# Install dependencies
npm install
# atau
yarn install
# atau
pnpm install
```

### Menjalankan Aplikasi

```bash
# Mode development
npm run dev
# atau
yarn dev
# atau
pnpm dev

# Buka http://localhost:3000 di browser Anda
```

### Perintah Git yang Berguna

```bash
# Inisialisasi repository Git
git init

# Menambahkan file ke staging area
git add .

# Melakukan commit
git commit -m "pesan commit Anda"

# Menambahkan remote repository
git remote add origin [URL_REPOSITORY_ANDA]

# Push ke branch main
git push -u origin main

# Mengambil perubahan terbaru dari remote
git pull origin main
```

### Perintah Prisma

```bash
# Menjalankan migrasi
npx prisma migrate dev --name init

# Membuat client Prisma
npx prisma generate

# Membuka Prisma Studio (GUI untuk database)
npx prisma studio
```

## Struktur Proyek

- `/app` - Halaman dan routing Next.js
- `/prisma` - Skema database dan migrasi Prisma
- `/src` - Kode sumber aplikasi

## Kontribusi

1. Fork repository ini
2. Buat branch fitur (`git checkout -b fitur/namafitur`)
3. Commit perubahan Anda (`git commit -m 'Menambahkan fitur baru'`)
4. Push ke branch (`git push origin fitur/namafitur`)
5. Buat Pull Request

## Lisensi

MIT
