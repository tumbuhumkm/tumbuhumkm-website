# TumbuhUMKM — Website Resmi

Website profesional untuk layanan digital dan AI bagi UMKM Indonesia.

## 🚀 Fitur yang Sudah Berfungsi

### Halaman & Navigasi
- ✅ **Beranda** — Hero section, keunggulan, layanan, cara kerja, portofolio preview, FAQ, CTA
- ✅ **Layanan** — 6 layanan lengkap dengan manfaat, deliverable, dan tombol konsultasi
- ✅ **Portofolio** — Galeri dengan filter kategori (semua ditandai DEMO)
- ✅ **Tentang Kami** — Visi, misi, nilai, pendekatan
- ✅ **Konsultasi** — Formulir dengan validasi dan integrasi WhatsApp
- ✅ **Blog** — Struktur artikel dengan kategori
- ✅ **Navigasi responsif** — Desktop dan mobile menu
- ✅ **Scroll to top** — Otomatis saat pindah halaman

### Komponen
- ✅ **Navbar** — Responsif dengan menu mobile
- ✅ **Footer** — Lengkap dengan navigasi, layanan, kontak, media sosial
- ✅ **WhatsApp Button** — Floating button dengan deteksi konfigurasi
- ✅ **Formulir Konsultasi** — Validasi, ringkasan data, kirim via WhatsApp

### Fitur Teknis
- ✅ **SEO metadata** — Title, description, Open Graph, Twitter Card
- ✅ **robots.txt** — Sudah dikonfigurasi
- ✅ **sitemap.xml** — Sudah dikonfigurasi
- ✅ **Responsif** — Mobile, tablet, desktop
- ✅ **Aksesibilitas** — Label, aria-label, navigasi keyboard
- ✅ **Konfigurasi terpusat** — File `src/config.ts` untuk mudah diedit

## ⚠️ Informasi yang Masih Perlu Diisi

Sebelum website digunakan secara publik, **WAJIB** mengisi konfigurasi di file `src/config.ts`:

### 1. Nomor WhatsApp (KRITIS)
```typescript
export const WHATSAPP_NUMBER = '628XXXXXXXXXX'; // GANTI dengan nomor resmi
```
**Format:** Kode negara + nomor, tanpa + atau spasi. Contoh: `6281234567890`

**Status saat ini:** BELUM DIISI — tombol WhatsApp tidak akan berfungsi sampai diisi.

### 2. Informasi Kontak
```typescript
export const CONTACT = {
  email: 'halo@tumbuhumkm.id',           // GANTI dengan email resmi
  address: 'Tanjungpinang, Kepulauan Riau', // GANTI dengan alamat lengkap
  instagram: 'https://instagram.com/...',   // GANTI dengan URL Instagram
  facebook: 'https://facebook.com/...',     // GANTI dengan URL Facebook
  tiktok: 'https://tiktok.com/...',         // GANTI dengan URL TikTok
};
```

### 3. Domain Website
```typescript
export const SITE_URL = 'https://tumbuhumkm.id'; // GANTI dengan domain yang sebenarnya
```

### 4. Logo Brand (Opsional)
Saat ini menggunakan ikon Sparkles dari Lucide. Jika logo resmi sudah tersedia:
- Simpan logo di folder `public/images/`
- Edit `src/components/Navbar.tsx` dan `src/components/Footer.tsx`
- Ganti komponen `<Sparkles>` dengan `<img src="/images/logo.png" alt="TumbuhUMKM" />`

## 🛠️ Framework & Teknologi

### Stack Utama
- **React 18** — Library UI
- **TypeScript** — Type safety
- **Vite** — Build tool dan dev server
- **Tailwind CSS 4** — Styling
- **React Router DOM 6** — Routing

### Dependencies Penting
- `lucide-react` — Ikon
- `react-router-dom` — Navigasi antar halaman

### Struktur Folder
```
tumbuhumkm/
├── public/
│   ├── robots.txt          # SEO: instruksi untuk search engine
│   └── sitemap.xml         # SEO: daftar halaman untuk indexing
├── src/
│   ├── components/         # Komponen reusable
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   ├── ScrollToTop.tsx
│   │   └── WhatsAppButton.tsx
│   ├── pages/              # Halaman website
│   │   ├── About.tsx
│   │   ├── Blog.tsx
│   │   ├── Consultation.tsx
│   │   ├── Home.tsx
│   │   ├── Portfolio.tsx
│   │   └── Services.tsx
│   ├── App.tsx             # Root component dengan routing
│   ├── config.ts           # ⚠️ KONFIGURASI — WAJIB DIISI
│   ├── index.css           # Global styles & Tailwind
│   └── main.tsx            # Entry point
├── index.html              # HTML template dengan SEO metadata
├── package.json
└── vite.config.js
```

## 📦 Cara Menjalankan Website

### Prasyarat
- Node.js versi 18 atau lebih baru
- npm (biasanya sudah termasuk dengan Node.js)

### Instalasi
```bash
# 1. Install dependencies
npm install

# 2. Jalankan development server
npm run dev
```

Website akan berjalan di `http://localhost:5173`

### Build untuk Produksi
```bash
# Build website
npm run build

# File hasil build ada di folder dist/
# Upload isi folder dist/ ke hosting
```

### Type Checking
```bash
npm run typecheck
```

## 🌐 Cara Memublikasikan Website

### Opsi 1: Vercel (Paling Mudah)
1. Push kode ke GitHub
2. Kunjungi [vercel.com](https://vercel.com)
3. Import repository
4. Vercel akan otomatis build dan deploy
5. Dapatkan domain `.vercel.app` atau hubungkan domain custom

### Opsi 2: Netlify
1. Push kode ke GitHub
2. Kunjungi [netlify.com](https://netlify.com)
3. Drag & drop folder `dist/` atau connect ke GitHub
4. Dapatkan domain `.netlify.app` atau hubungkan domain custom

### Opsi 3: Hosting Tradisional (cPanel, dll)
1. Jalankan `npm run build`
2. Upload isi folder `dist/` ke `public_html` atau `www`
3. Pastikan file `.htaccess` mendukung SPA routing (jika perlu)

### Opsi 4: GitHub Pages
1. Install package `gh-pages`: `npm install -D gh-pages`
2. Tambahkan script di `package.json`:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```
3. Jalankan `npm run deploy`
4. Website akan tersedia di `https://username.github.io/repository-name`

## 🔧 Konfigurasi Tambahan

### Mengganti Warna Brand
Edit file `src/index.css` pada bagian `@theme`:
```css
@theme {
  --color-emerald-500: #10b981; /* Ganti dengan warna utama Anda */
  --color-navy-900: #102a43;    /* Ganti dengan warna teks utama */
}
```

### Menambahkan Google Analytics
1. Dapatkan tracking ID dari Google Analytics
2. Edit `index.html` dan tambahkan script sebelum `</head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Menambahkan Form Backend (Opsional)
Saat ini formulir konsultasi hanya mengirim data via WhatsApp. Jika ingin menyimpan data ke database:
1. Gunakan layanan seperti Formspree, Netlify Forms, atau buat backend sendiri
2. Edit `src/pages/Consultation.tsx` untuk menambahkan API call
3. **PENTING:** Jangan simpan data sensitif di frontend tanpa enkripsi

## 📋 Checklist Sebelum Publikasi

- [ ] Nomor WhatsApp sudah diisi di `src/config.ts`
- [ ] Email kontak sudah benar
- [ ] Alamat bisnis sudah lengkap
- [ ] URL media sosial sudah benar
- [ ] Domain website sudah dikonfigurasi
- [ ] Logo brand sudah diganti (jika ada)
- [ ] Semua halaman sudah dicek
- [ ] Formulir konsultasi sudah ditest
- [ ] Tombol WhatsApp berfungsi
- [ ] Website responsif di HP dan laptop
- [ ] SEO metadata sudah sesuai
- [ ] robots.txt dan sitemap.xml sudah benar
- [ ] Google Analytics sudah ditambahkan (opsional)

## 🐛 Fitur yang Belum Diuji

- ❌ Integrasi dengan backend/database (belum ada)
- ❌ Google Analytics tracking (belum dikonfigurasi)
- ❌ Form submission ke server (belum ada, hanya WhatsApp)
- ❌ Blog article detail page (belum dibuat, hanya list)
- ❌ Dashboard pelanggan (belum ada, ini tahap 2)
- ❌ Integrasi AI Agent (belum ada, ini tahap 3)

## 📝 Catatan Penting

1. **Tidak ada data palsu** — Semua portofolio ditandai DEMO, tidak ada testimoni atau angka keberhasilan yang mengarang
2. **Transparansi** — Nomor WhatsApp yang belum dikonfigurasi akan menampilkan peringatan
3. **Privasi** — Data formulir tidak disimpan di server, hanya dikirim via WhatsApp
4. **Keamanan** — Tidak ada API key atau data sensitif di kode frontend
5. **Performa** — Website ringan (~71 KB gzip), loading cepat

## 🆘 Troubleshooting

### WhatsApp Button Tidak Berfungsi
- Pastikan `WHATSAPP_NUMBER` di `src/config.ts` sudah diisi dengan format yang benar
- Format: `6281234567890` (kode negara + nomor, tanpa + atau spasi)

### Build Error
```bash
# Hapus node_modules dan install ulang
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Halaman 404 Setelah Deploy
- Pastikan hosting mendukung SPA routing
- Untuk Apache, tambahkan `.htaccess`:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## 📞 Dukungan

Untuk pertanyaan teknis atau bantuan pengembangan lebih lanjut, silakan hubungi tim developer.

---

**Versi:** 1.0  
**Terakhir diperbarui:** 2025  
**Status:** Siap digunakan setelah konfigurasi
