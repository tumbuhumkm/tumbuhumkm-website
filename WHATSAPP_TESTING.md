# Cara Menguji Tombol WhatsApp di Luar Preview

## Masalah di Preview
Environment Preview (iframe) memblokir tautan eksternal ke WhatsApp dengan error `ERR_BLOCKED_RESPONSE`. Ini adalah keterbatasan sandbox iframe, bukan bug di kode.

## Solusi: Uji di Browser Langsung

### Cara 1: Buka URL Website di Tab Baru
1. Salin URL website dari address bar Preview
2. Buka tab browser baru
3. Paste URL dan buka langsung
4. Semua tombol WhatsApp akan berfungsi normal

### Cara 2: Download dan Jalankan Lokal
```bash
# 1. Clone/download repository
# 2. Install dependencies
npm install

# 3. Jalankan development server
npm run dev

# 4. Buka http://localhost:5173 di browser
```

### Cara 3: Deploy ke Hosting
Deploy ke Vercel, Netlify, atau hosting lain, lalu akses URL publik.

## Fitur Fallback di Preview

Jika Anda tetap ingin menguji di Preview, setiap tombol WhatsApp sekarang menampilkan **modal instruksi manual** dengan:

1. **Nomor WhatsApp** yang sedang digunakan
2. **Link WhatsApp** yang bisa disalin
3. **Pesan otomatis** yang bisa disalin
4. **Instruksi manual** untuk mengirim via WhatsApp

### Cara Menggunakan Modal:
1. Klik tombol WhatsApp di Preview
2. Modal akan muncul dengan instruksi
3. Klik "Salin" untuk menyalin link atau pesan
4. Buka WhatsApp secara manual
5. Paste link atau pesan yang sudah disalin

## Nomor WhatsApp yang Digunakan

**Saat ini:** `628XXXXXXXXXX` (placeholder dari `src/config.ts`)

**Status:** ⚠️ BELUM DIKONFIGURASI

### Cara Mengganti Nomor:
1. Edit file `src/config.ts`
2. Ganti baris:
   ```typescript
   export const WHATSAPP_NUMBER = '628XXXXXXXXXX';
   ```
3. Dengan nomor Anda (format internasional tanpa +):
   ```typescript
   export const WHATSAPP_NUMBER = '6281234567890';
   ```

## Format URL WhatsApp yang Benar

Semua tombol menggunakan format:
```
https://wa.me/NOMOR_WHATSAPP?text=PESAN_TERENCODE
```

**Contoh:**
```
https://wa.me/6281234567890?text=Halo%20TumbuhUMKM!
```

**Karakteristik:**
- ✅ Menggunakan `https://wa.me/` (bukan `api.whatsapp.com`)
- ✅ Nomor format internasional (62xxx, bukan 08xxx)
- ✅ Tanpa tanda + di depan nomor
- ✅ Pesan di-encode dengan `encodeURIComponent()`
- ✅ `target="_blank"` untuk buka di tab baru
- ✅ `rel="noopener noreferrer"` untuk keamanan

## Pesan Otomatis per Layanan

Setiap layanan memiliki pesan otomatis yang sesuai:

| Layanan | Pesan Otomatis |
|---------|----------------|
| TumbuhContent 30 | "Halo TumbuhUMKM! Saya tertarik dengan layanan TumbuhContent 30. Bisa konsultasi lebih lanjut?" |
| TumbuhWebsite | "Halo TumbuhUMKM! Saya tertarik dengan layanan TumbuhWebsite. Bisa konsultasi lebih lanjut?" |
| TumbuhDesign | "Halo TumbuhUMKM! Saya tertarik dengan layanan TumbuhDesign. Bisa konsultasi lebih lanjut?" |
| TumbuhAI | "Halo TumbuhUMKM! Saya tertarik dengan layanan TumbuhAI. Bisa konsultasi lebih lanjut?" |
| TumbuhStrategy | "Halo TumbuhUMKM! Saya tertarik dengan layanan TumbuhStrategy. Bisa konsultasi lebih lanjut?" |
| TumbuhSocial | "Halo TumbuhUMKM! Saya tertarik dengan layanan TumbuhSocial. Bisa konsultasi lebih lanjut?" |

Pesan ini didefinisikan di `src/lib/whatsapp.ts` pada `WHATSAPP_MESSAGES`.

## Testing Checklist

- [ ] Nomor WhatsApp sudah diisi di `src/config.ts`
- [ ] Test tombol WhatsApp di browser langsung (bukan Preview)
- [ ] Test semua halaman: Home, Services, Portfolio, About, Consultation
- [ ] Test modal fallback di Preview
- [ ] Test fitur salin link dan pesan
- [ ] Verifikasi pesan otomatis sesuai layanan yang dipilih
- [ ] Test di mobile browser
- [ ] Test di desktop browser

## Troubleshooting

### WhatsApp tidak terbuka sama sekali
- Pastikan nomor di `src/config.ts` sudah benar
- Format: `6281234567890` (bukan `+6281234567890` atau `081234567890`)

### Error ERR_BLOCKED_RESPONSE
- Ini normal di Preview/iframe
- Gunakan cara di atas untuk test di browser langsung

### Popup diblokir browser
- Izinkan popup untuk domain website
- Atau gunakan fitur "Salin Link" di modal

### Pesan tidak muncul di WhatsApp
- Pastikan menggunakan `encodeURIComponent()` untuk pesan
- Sudah dihandle otomatis oleh utility function

## Struktur Kode

```
src/
├── config.ts                    # Konfigurasi nomor WhatsApp
├── lib/
│   └── whatsapp.ts              # Utility function WhatsApp
├── components/
│   ├── WhatsAppButton.tsx       # Floating button dengan fallback
│   └── WhatsAppLink.tsx         # Komponen link reusable
└── pages/
    ├── Home.tsx                 # Menggunakan WhatsAppLink
    ├── Services.tsx             # Menggunakan WhatsAppLink
    ├── Portfolio.tsx            # Menggunakan WhatsAppLink
    ├── About.tsx                # Menggunakan WhatsAppLink
    └── Consultation.tsx         # Menggunakan WhatsAppSubmit
```

## Catatan Penting

1. **Jangan hardcoded nomor** di setiap halaman — gunakan `src/config.ts`
2. **Jangan gunakan `api.whatsapp.com`** — gunakan `wa.me`
3. **Selalu gunakan `target="_blank"`** dan `rel="noopener noreferrer"`
4. **Encode pesan** dengan `encodeURIComponent()`
5. **Test di browser langsung**, bukan hanya di Preview
