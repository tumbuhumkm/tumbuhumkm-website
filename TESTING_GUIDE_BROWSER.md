# 🧪 PANDUAN PENGUJIAN WEBSITE DI LUAR PREVIEW

**Status:** ✅ **SIAP DIUJI**  
**Tanggal:** 2025

---

## 📋 RINGKASAN

Masalah `ERR_BLOCKED_BY_RESPONSE` **hanya terjadi di Preview/iframe** karena security policy yang ketat. Di browser biasa, semua tombol WhatsApp berfungsi dengan sempurna.

**Konfigurasi yang Sudah Benar:**
- ✅ Nomor WhatsApp: `6287717495345`
- ✅ Format URL: `https://wa.me/6287717495345?text=...`
- ✅ Semua tombol menggunakan `target="_blank"` dan `rel="noopener noreferrer"`
- ✅ Pesan di-encode dengan `encodeURIComponent()`

---

## 🚀 CARA MEMBUKA WEBSITE DI BROWSER BIASA

### Opsi 1: Development Server (Recommended)

Jika Anda menjalankan development server lokal:

```bash
# Jalankan development server
npm run dev
```

**URL yang akan tersedia:**
```
http://localhost:5173
```

**Cara mengakses:**
1. Buka browser (Chrome, Firefox, Edge, Safari)
2. Ketik `http://localhost:5173` di address bar
3. Tekan Enter
4. Website akan terbuka di tab browser biasa (bukan iframe)

---

### Opsi 2: Build dan Serve Locally

Jika Anda ingin menguji versi production:

```bash
# Build website
npm run build

# Serve dengan preview server
npm run preview
```

**URL yang akan tersedia:**
```
http://localhost:4173
```

**Cara mengakses:**
1. Buka browser
2. Ketik `http://localhost:4173` di address bar
3. Tekan Enter

---

### Opsi 3: Buka File HTML Langsung

Jika Anda sudah build website:

```bash
# Build website
npm run build
```

**Lokasi file:**
```
dist/index.html
```

**Cara mengakses:**
1. Buka File Explorer / Finder
2. Navigasi ke folder `dist/`
3. Double-click `index.html`
4. Website akan terbuka di browser default

**Catatan:** Beberapa fitur mungkin tidak berfungsi karena CORS policy saat membuka file lokal.

---

## ✅ VERIFIKASI TOMBOL WHATSAPP

Semua tombol WhatsApp sudah dikonfigurasi dengan benar:

### 1. Floating WhatsApp Button

**File:** `src/components/WhatsAppButton.tsx` (baris 68-72)

```tsx
<a
  href={url}
  target="_blank"
  rel="noopener noreferrer"
  onClick={handleClick}
  className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500..."
>
  <MessageCircle className="w-7 h-7" />
</a>
```

**Status:** ✅ **SUDAH BENAR**
- ✅ Menggunakan `<a>` tag
- ✅ `target="_blank"` untuk buka di tab baru
- ✅ `rel="noopener noreferrer"` untuk keamanan

---

### 2. WhatsAppLink Component

**File:** `src/components/WhatsAppLink.tsx` (baris 75-79)

```tsx
<a
  href={url}
  target="_blank"
  rel="noopener noreferrer"
  onClick={handleClick}
  className={`${baseStyles} ${buttonStyles} ${className}`}
>
  {children}
</a>
```

**Status:** ✅ **SUDAH BENAR**
- ✅ Menggunakan `<a>` tag
- ✅ `target="_blank"` untuk buka di tab baru
- ✅ `rel="noopener noreferrer"` untuk keamanan

---

### 3. Consultation Page

**File:** `src/pages/Consultation.tsx` (baris 371-375)

```tsx
<a
  href={url}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 px-8 py-4 bg-green-500..."
>
  <MessageSquare className="w-5 h-5" />
  Kirim via WhatsApp
</a>
```

**Status:** ✅ **SUDAH BENAR**
- ✅ Menggunakan `<a>` tag
- ✅ `target="_blank"` untuk buka di tab baru
- ✅ `rel="noopener noreferrer"` untuk keamanan

---

## 🧪 LANGKAH PENGUJIAN LENGKAP

### Test 1: Floating WhatsApp Button

**Langkah:**
1. Buka website di browser biasa (bukan Preview)
2. Lihat tombol WhatsApp hijau di pojok kanan bawah
3. Klik tombol tersebut

**Expected Result:**
```
✅ WhatsApp Web/App terbuka di tab baru
✅ URL: https://wa.me/6287717495345?text=Halo%20Admin%20TumbuhUMKM...
✅ Nomor tujuan: 6287717495345
✅ Pesan otomatis terisi: "Halo Admin TumbuhUMKM, saya tertarik untuk berkonsultasi..."
```

---

### Test 2: Tombol Konsultasi di Beranda

**Langkah:**
1. Buka halaman beranda (`/#/`)
2. Scroll ke bagian CTA
3. Klik tombol "Konsultasi Gratis"

**Expected Result:**
```
✅ WhatsApp terbuka di tab baru
✅ URL: https://wa.me/6287717495345?text=...
✅ Pesan: "Halo Admin TumbuhUMKM, saya ingin konsultasi gratis..."
```

---

### Test 3: Tombol Layanan

**Langkah:**
1. Buka halaman layanan (`/#/layanan`)
2. Scroll ke salah satu layanan (misalnya TumbuhContent 30)
3. Klik tombol "Konsultasi Layanan Ini"

**Expected Result:**
```
✅ WhatsApp terbuka di tab baru
✅ URL: https://wa.me/6287717495345?text=...
✅ Pesan: "Halo Admin TumbuhUMKM, saya tertarik dengan layanan TumbuhContent 30..."
```

---

### Test 4: Formulir Konsultasi

**Langkah:**
1. Buka halaman konsultasi (`/#/konsultasi`)
2. Isi formulir:
   - Nama: Test User
   - Usaha: Kopi Senja
   - Jenis: Kuliner / Kafe / Restoran
   - Kota: Tanjungpinang
   - Layanan: TumbuhContent 30
   - Masalah: Butuh bantuan konten
   - Anggaran: 500000
3. Klik "Kirim & Lanjutkan ke WhatsApp"

**Expected Result:**
```
✅ Halaman sukses tampil
✅ Tombol "Kirim via WhatsApp" tampil (hijau)
✅ Info box biru TIDAK tampil (karena bukan Preview)
✅ Klik tombol "Kirim via WhatsApp"
✅ WhatsApp terbuka di tab baru
✅ URL: https://wa.me/6287717495345?text=...
✅ Pesan berisi data formulir yang sudah diisi
```

**Contoh Pesan:**
```
Halo Admin TumbuhUMKM, saya ingin berkonsultasi mengenai kebutuhan pemasaran usaha saya.

📋 *Data Konsultasi:*
• Nama: Test User
• Usaha: Kopi Senja
• Jenis Usaha: Kuliner / Kafe / Restoran
• Kota: Tanjungpinang
• Layanan Diminati: TumbuhContent 30
• Masalah Utama: Butuh bantuan konten
• Anggaran: 500000

Mohon informasi lebih lanjut. Terima kasih!
```

---

### Test 5: Portofolio

**Langkah:**
1. Buka halaman portofolio (`/#/portofolio`)
2. Klik salah satu kartu portofolio
3. Modal detail terbuka
4. Klik tombol "Konsultasi Gratis" di modal

**Expected Result:**
```
✅ WhatsApp terbuka di tab baru
✅ URL: https://wa.me/6287717495345?text=...
✅ Pesan: "Halo Admin TumbuhUMKM, saya tertarik dengan layanan Anda setelah melihat contoh portofolio..."
```

---

### Test 6: Artikel Blog

**Langkah:**
1. Buka halaman blog (`/#/blog`)
2. Klik salah satu artikel
3. Scroll ke bagian CTA di akhir artikel
4. Klik tombol "Konsultasi Gratis"

**Expected Result:**
```
✅ WhatsApp terbuka di tab baru
✅ URL: https://wa.me/6287717495345?text=...
✅ Pesan sesuai dengan kategori artikel
```

---

## 🔍 VERIFIKASI URL WHATSAPP

### Cara Memeriksa URL yang Benar

**Langkah:**
1. Klik kanan pada tombol WhatsApp
2. Pilih "Copy link address" / "Salin alamat link"
3. Paste di text editor

**Expected URL Format:**
```
https://wa.me/6287717495345?text=Halo%20Admin%20TumbuhUMKM%2C%20saya%20tertarik...
```

**Komponen URL:**
- ✅ Protocol: `https://`
- ✅ Domain: `wa.me`
- ✅ Nomor: `6287717495345`
- ✅ Parameter: `?text=...`
- ✅ Pesan di-encode: `%20` untuk spasi, dll

---

## 🎯 PERBEDAAN PREVIEW VS BROWSER BIASA

### Di Preview/iframe:

```
❌ Tombol WhatsApp membuka modal
❌ Modal menampilkan: "Environment Preview membatasi tautan"
❌ User harus salin link/pesan secara manual
❌ Error: ERR_BLOCKED_BY_RESPONSE
```

**Alasan:** Security policy iframe memblokir tautan eksternal

---

### Di Browser Biasa:

```
✅ Tombol WhatsApp langsung membuka WhatsApp Web/App
✅ WhatsApp terbuka di tab baru
✅ Pesan otomatis terisi
✅ Tidak ada error
```

**Alasan:** Browser biasa tidak memiliki restriksi security seperti iframe

---

## 📱 TESTING DI MOBILE

### Cara Test di Mobile:

**Opsi 1: Local Network**
```bash
# Jalankan dev server dengan host
npm run dev -- --host
```

**URL akan menjadi:**
```
http://192.168.x.x:5173
```

**Langkah:**
1. Pastikan HP dan komputer di WiFi yang sama
2. Buka browser di HP
3. Ketik URL di atas
4. Website akan terbuka di HP

**Opsi 2: Ngrok (Tunneling)**
```bash
# Install ngrok
npm install -g ngrok

# Jalankan dev server
npm run dev

# Di terminal lain, jalankan ngrok
ngrok http 5173
```

**URL akan menjadi:**
```
https://xxxxx.ngrok.io
```

**Langkah:**
1. Buka URL ngrok di HP
2. Website akan terbuka di HP

---

## ✅ CHECKLIST PENGUJIAN

### Pengujian Dasar:

- [ ] Website terbuka di browser biasa
- [ ] Floating WhatsApp button tampil
- [ ] Klik floating button → WhatsApp terbuka
- [ ] URL WhatsApp benar: `https://wa.me/6287717495345?text=...`
- [ ] Pesan otomatis terisi

### Pengujian Halaman:

- [ ] Beranda: Tombol "Konsultasi Gratis" berfungsi
- [ ] Layanan: Tombol "Konsultasi Layanan Ini" berfungsi
- [ ] Portofolio: Tombol "Konsultasi Gratis" di modal berfungsi
- [ ] Tentang: Tombol "Hubungi Kami" berfungsi
- [ ] Blog: Tombol "Konsultasi Gratis" di artikel berfungsi
- [ ] Konsultasi: Formulir submit → WhatsApp terbuka

### Pengujian Formulir:

- [ ] Isi formulir dengan data lengkap
- [ ] Klik "Kirim & Lanjutkan ke WhatsApp"
- [ ] Halaman sukses tampil
- [ ] Klik "Kirim via WhatsApp"
- [ ] WhatsApp terbuka dengan data formulir

### Pengujian Mobile:

- [ ] Website responsive di mobile
- [ ] Tombol WhatsApp mudah diklik
- [ ] WhatsApp terbuka di mobile
- [ ] Pesan otomatis terisi

---

## 🐛 TROUBLESHOOTING

### Masalah: WhatsApp tidak terbuka

**Solusi:**
1. Pastikan browser tidak memblokir popup
2. Cek settings browser → Allow popups untuk localhost
3. Coba browser lain (Chrome, Firefox, Edge)

---

### Masalah: URL salah

**Solusi:**
1. Inspect element tombol WhatsApp
2. Cek atribut `href`
3. Pastikan format: `https://wa.me/6287717495345?text=...`

---

### Masalah: Pesan tidak ter-encode

**Solusi:**
1. Cek fungsi `generateWhatsAppURL()` di `src/lib/whatsapp.ts`
2. Pastikan menggunakan `encodeURIComponent(message)`

---

## 📊 STATUS AKHIR

**Status:** ✅ **SIAP DIUJI DI BROWSER BIASA**

**Konfigurasi:**
- ✅ Nomor WhatsApp: `6287717495345`
- ✅ Format URL: `https://wa.me/6287717495345?text=...`
- ✅ Semua tombol menggunakan `target="_blank"` dan `rel="noopener noreferrer"`
- ✅ Pesan di-encode dengan `encodeURIComponent()`

**Perbedaan Preview vs Browser:**
- Preview: Modal dengan link yang bisa disalin
- Browser: WhatsApp langsung terbuka

**Rekomendasi:**
- ✅ Uji di browser biasa untuk pengalaman terbaik
- ✅ Gunakan Preview hanya untuk preview visual
- ✅ Deploy ke hosting untuk testing final

---

**Dibuat oleh:** Senior Full-Stack Developer  
**Tanggal:** 2025  
**Versi:** 1.0
