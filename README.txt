=========================================================
  UNDANGAN PERNIKAHAN DIGITAL - DIGITAL WEDDING INVITATION
  Template Next.js + TypeScript + Tailwind CSS
=========================================================

Terima kasih telah menggunakan template ini. Dokumen ini berisi
panduan lengkap instalasi, kustomisasi, dan deploy aplikasi.


---------------------------------------------------------
1. ISI PROJECT
---------------------------------------------------------

wedding-invitation/
├── data/
│   └── guestbook.json        -> Database ucapan tamu (otomatis terisi)
├── public/
│   ├── audio/
│   │   └── wedding-song.mp3  -> GANTI dengan lagu pilihan Anda (lihat poin 5)
│   └── images/
│       ├── couple/           -> Foto mempelai pria & wanita (placeholder SVG)
│       └── gallery/          -> Foto galeri (placeholder SVG, ganti dengan foto asli)
├── src/
│   ├── app/
│   │   ├── api/rsvp/route.ts -> API backend untuk simpan RSVP/ucapan
│   │   ├── globals.css       -> Styling global + variabel warna tema
│   │   ├── layout.tsx        -> Layout utama + font Google
│   │   └── page.tsx          -> Halaman utama
│   ├── components/           -> Semua komponen UI (modular & reusable)
│   ├── config/
│   │   └── config.json       -> *** FILE UTAMA UNTUK KUSTOMISASI ***
│   ├── hooks/                -> Custom hooks (countdown, musik, scroll reveal)
│   ├── lib/                  -> Helper backend (penyimpanan data tamu)
│   └── types/                -> TypeScript interfaces
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json


---------------------------------------------------------
2. CARA MENJALANKAN DI KOMPUTER (LOCAL DEVELOPMENT)
---------------------------------------------------------

Prasyarat:
- Node.js versi 18 atau lebih baru (cek dengan: node -v)
- npm (sudah otomatis terpasang bersama Node.js)

Langkah-langkah:

1. Ekstrak file RAR ini ke folder pilihan Anda.

2. Buka folder project melalui Terminal / Command Prompt:
   cd wedding-invitation

3. Install semua dependency:
   npm install

4. Jalankan mode development:
   npm run dev

5. Buka browser dan akses:
   http://localhost:3000

6. Untuk mengetes nama tamu dinamis, tambahkan parameter "to" di URL:
   http://localhost:3000/?to=Bapak+Budi+Santoso

   (Tanda "+" akan otomatis menjadi spasi pada nama tamu yang tampil)


---------------------------------------------------------
3. CARA MENGGANTI DATA UTAMA (NAMA, TANGGAL, LOKASI, DLL)
---------------------------------------------------------

Semua data utama undangan diatur di SATU FILE saja, yaitu:

   src/config/config.json

Anda TIDAK PERLU mengedit kode program (.tsx) untuk mengubah:

- Nama mempelai pria & wanita, nama orang tua, Instagram
- Tanggal & waktu acara (akad dan resepsi)
- Lokasi acara (alamat lengkap)
- Daftar foto galeri & cerita cinta (timeline)
- Link/URL lagu latar
- Nomor rekening untuk kado digital
- Hashtag pernikahan
- Tema warna default

Cukup buka file config.json dengan text editor (Notepad, VS Code, dll),
ubah nilai yang diinginkan, simpan file, lalu refresh browser.

Contoh struktur config.json:

{
  "mempelai": {
    "pria": { "nama_lengkap": "...", "nama_panggilan": "...", ... },
    "wanita": { "nama_lengkap": "...", "nama_panggilan": "...", ... }
  },
  "acara": {
    "tanggal_iso": "2026-09-12T08:00:00+08:00",
    "tanggal_tampil": "Sabtu, 12 September 2026",
    "akad": { "label": "Akad Nikah", "waktu": "08.00 - 10.00 WITA", "lokasi": "..." },
    "resepsi": { "label": "Resepsi Pernikahan", "waktu": "11.00 - 14.00 WITA", "lokasi": "..." },
    "alamat_lengkap": "...",
    "maps_lat": -3.3194,
    "maps_lng": 114.5908
  },
  "musik": { "url": "/audio/wedding-song.mp3", ... },
  "galeri": [ { "src": "...", "caption": "..." } ],
  "cerita_cinta": [ { "tanggal": "...", "judul": "...", "deskripsi": "..." } ],
  "rekening_kado": [ { "bank": "...", "nomor": "...", "atas_nama": "..." } ]
}

PENTING: 
- Format file JSON harus tetap valid (tanda kutip, koma, kurung kurawal).
- Gunakan situs seperti jsonlint.com untuk memvalidasi jika ragu.
- Jangan menghapus tanda koma atau kurung saat mengedit.


---------------------------------------------------------
4. CARA MENGGANTI LOKASI GOOGLE MAPS
---------------------------------------------------------

Lokasi peta diambil dari koordinat latitude & longitude di config.json:

   "maps_lat": -3.3194,
   "maps_lng": 114.5908

Cara mendapatkan koordinat lokasi Anda:

1. Buka Google Maps (https://maps.google.com) di browser.
2. Cari lokasi acara Anda (gedung, alamat, dll).
3. Klik kanan pada titik lokasi yang tepat di peta.
4. Akan muncul angka koordinat di bagian atas menu, contoh:
   -3.319400, 114.590800
5. Angka pertama adalah latitude, angka kedua adalah longitude.
6. Salin kedua angka tersebut ke dalam config.json pada field
   "maps_lat" dan "maps_lng".
7. Simpan file, refresh browser. Peta dan tombol "Buka di Google Maps"
   akan otomatis ter-update.

Field "maps_embed_zoom" bisa diubah (10-20) untuk mengatur level zoom
peta yang ditampilkan (semakin besar angka, semakin dekat/zoom-in).


---------------------------------------------------------
5. CARA MENGGANTI LAGU / MUSIK LATAR
---------------------------------------------------------

Ada 2 cara:

CARA A - Mengganti file langsung (disarankan):
1. Siapkan file lagu format MP3 (ukuran disarankan di bawah 5 MB
   agar loading tetap cepat).
2. Beri nama file tersebut: wedding-song.mp3
3. Salin/timpa (replace) file tersebut ke folder:
   public/audio/wedding-song.mp3
4. Tidak perlu mengubah config.json jika nama file sama.

CARA B - Menggunakan nama file / URL berbeda:
1. Letakkan file MP3 Anda di folder public/audio/, misal: lagu-cinta.mp3
2. Buka src/config/config.json, ubah baris:
   "musik": { "url": "/audio/lagu-cinta.mp3", ... }
3. Simpan, lalu refresh browser.

CATATAN PENTING:
- File wedding-song.mp3 bawaan template ini HANYA PLACEHOLDER KOSONG
  (tidak berisi suara). Anda WAJIB menggantinya dengan lagu asli
  sebelum digunakan/deploy.
- Pastikan Anda memiliki hak penggunaan/lisensi atas lagu yang dipakai,
  terutama jika undangan akan disebarluaskan secara publik.
- Musik akan otomatis diputar (autoplay) HANYA SETELAH tamu menekan
  tombol "Buka Undangan" (sesuai kebijakan browser modern yang
  memblokir autoplay tanpa interaksi pengguna).
- Tombol musik mengambang (floating button) di pojok kanan bawah
  dapat digunakan tamu untuk play/pause kapan saja.


---------------------------------------------------------
6. CARA MENGGANTI FOTO (GALERI & FOTO MEMPELAI)
---------------------------------------------------------

1. Siapkan foto dalam format JPG atau PNG.
   - Disarankan rasio 1:1 (persegi) untuk galeri agar tampil rapi.
   - Kompres foto terlebih dahulu (gunakan TinyPNG/Squoosh) agar
     ukuran file kecil dan website tetap cepat diakses dari HP.

2. Untuk FOTO GALERI:
   - Salin foto ke folder: public/images/gallery/
   - Buka config.json, pada bagian "galeri", ubah path "src" dan
     caption sesuai foto Anda, contoh:
     { "src": "/images/gallery/foto-liburan.jpg", "caption": "Liburan ke Bali" }
   - Anda bisa menambah atau mengurangi jumlah foto sesuai kebutuhan.

3. Untuk FOTO MEMPELAI:
   - Salin foto ke folder: public/images/couple/
   - Ubah field "foto" pada bagian "mempelai" > "pria" / "wanita"
     di config.json.

Catatan: Foto bawaan template ini adalah PLACEHOLDER (kotak warna
bertuliskan "Foto 1", dst). Wajib diganti dengan foto asli sebelum
digunakan untuk acara sungguhan.


---------------------------------------------------------
7. FITUR RSVP / BUKU TAMU (PENYIMPANAN DATA)
---------------------------------------------------------

Form RSVP pada halaman undangan akan menyimpan data:
- Nama tamu
- Status kehadiran (Hadir / Tidak Hadir / Masih Ragu)
- Pesan/ucapan

Data tersimpan secara otomatis di file:
   data/guestbook.json

CATATAN PENTING UNTUK HOSTING/DEPLOY:
Penyimpanan berbasis file JSON ini cocok untuk development/lokal
ATAU hosting di server yang mendukung penyimpanan file (misal VPS,
Node.js server biasa). 

Namun, jika Anda deploy ke platform SERVERLESS seperti Vercel atau
Netlify, sistem file bersifat sementara (read-only di production
dan akan ter-reset setiap deploy ulang). Untuk penggunaan PRODUKSI
yang serius di Vercel/Netlify, disarankan mengganti penyimpanan
data RSVP dengan layanan database eksternal, misalnya:
- Firebase Firestore (gratis, mudah diintegrasikan)
- Supabase (PostgreSQL gratis)
- MongoDB Atlas (gratis)

File yang perlu disesuaikan jika ingin mengganti database:
   src/lib/guestbookStore.ts   (logika simpan/ambil data)
   src/app/api/rsvp/route.ts   (endpoint API)

Untuk skala kecil (undangan keluarga/teman, ratusan tamu), sistem
file JSON bawaan ini umumnya sudah cukup jika di-deploy di VPS
atau platform yang mendukung penyimpanan persisten.


---------------------------------------------------------
8. FITUR TAMBAHAN YANG TERSEDIA
---------------------------------------------------------

- GANTI TEMA: Tombol ikon palet warna (kiri bawah) memungkinkan
  tamu memilih salah satu dari 4 tema: Classic Gold, Soft Blush,
  Sage Garden, dan Dark Elegant.

- QR CODE LOKASI: QR Code otomatis dibuat dari koordinat lokasi
  di config.json, tamu tinggal scan untuk membuka Google Maps.

- KONFETI: Tombol "Rayakan Bersama Kami" di bagian footer akan
  menampilkan animasi confetti/taburan.

- NAVIGASI BAWAH (MOBILE): Navigasi cepat antar bagian undangan
  khusus tampilan mobile (Home, Acara, Cerita, Galeri, RSVP).

- LIGHTBOX GALERI: Klik foto galeri untuk melihat fullscreen,
  mendukung swipe kiri/kanan di HP serta tombol navigasi di desktop.


---------------------------------------------------------
9. PANDUAN DEPLOY (PUBLIKASI ONLINE)
---------------------------------------------------------

>>> OPSI A: DEPLOY KE VERCEL (PALING MUDAH & DIREKOMENDASIKAN) <<<

1. Buat akun gratis di https://vercel.com (bisa login dengan GitHub).
2. Upload project ini ke repository GitHub Anda:
   - Buat repository baru di GitHub.
   - Di folder project, jalankan:
     git init
     git add .
     git commit -m "Initial commit - wedding invitation"
     git branch -M main
     git remote add origin <URL_REPO_GITHUB_ANDA>
     git push -u origin main
3. Di dashboard Vercel, klik "Add New Project".
4. Pilih repository GitHub yang baru saja dibuat.
5. Vercel akan otomatis mendeteksi project Next.js, biarkan
   pengaturan default, lalu klik "Deploy".
6. Tunggu proses build selesai (sekitar 1-3 menit).
7. Website Anda akan online dengan URL seperti:
   https://nama-project-anda.vercel.app
8. (Opsional) Hubungkan domain custom Anda sendiri di menu
   Settings > Domains pada dashboard Vercel.

>>> OPSI B: DEPLOY KE NETLIFY <<<

1. Buat akun gratis di https://netlify.com
2. Upload project ke GitHub (langkah sama seperti di atas).
3. Di dashboard Netlify, klik "Add new site" > "Import an existing project".
4. Pilih repository GitHub Anda.
5. Pada pengaturan build, isi:
   - Build command: npm run build
   - Publish directory: .next
6. Untuk dukungan penuh Next.js (App Router, API routes) di Netlify,
   pastikan plugin "@netlify/plugin-nextjs" terpasang otomatis
   (biasanya terdeteksi otomatis oleh Netlify).
7. Klik "Deploy site" dan tunggu hingga selesai.

CATATAN: Untuk fitur RSVP/buku tamu agar data tersimpan permanen
di hosting serverless (Vercel/Netlify), ikuti saran pada poin 7
di atas (gunakan database eksternal seperti Firebase/Supabase).


---------------------------------------------------------
10. TIPS OPTIMASI SEBELUM DIGUNAKAN
---------------------------------------------------------

- Kompres semua foto sebelum upload (gunakan TinyPNG.com atau
  Squoosh.app) agar website tetap ringan dan cepat dibuka di HP.
- Gunakan file MP3 dengan ukuran wajar (1-5 MB), hindari lagu
  berdurasi sangat panjang atau bitrate tinggi yang tidak perlu.
- Test tampilan undangan di berbagai perangkat (HP Android, iPhone,
  tablet, laptop) sebelum disebarkan ke tamu.
- Pastikan link undangan yang dibagikan menyertakan parameter "to",
  contoh:
  https://undangan-anda.vercel.app/?to=Bapak+Andi
  Spasi pada nama bisa digantikan tanda "+" atau "%20".


---------------------------------------------------------
11. TEKNOLOGI YANG DIGUNAKAN
---------------------------------------------------------

- Next.js 14 (App Router) - Framework React untuk web modern
- TypeScript - Type-safety di seluruh kode
- Tailwind CSS - Styling utility-first, ringan dan cepat
- Framer Motion - Animasi transisi yang halus
- Canvas Confetti - Efek animasi confetti
- qrcode.react - Pembuatan QR Code dinamis
- Next.js API Routes - Backend RSVP/buku tamu sederhana


---------------------------------------------------------
12. BANTUAN & TROUBLESHOOTING
---------------------------------------------------------

Q: Saat menjalankan "npm install" muncul error?
A: Pastikan Node.js versi 18 ke atas terpasang. Cek dengan: node -v
   Jika belum ada, unduh di https://nodejs.org (pilih versi LTS).

Q: Musik tidak otomatis berbunyi?
A: Ini perilaku normal browser modern yang memblokir autoplay tanpa
   interaksi pengguna. Musik akan diputar otomatis SETELAH tombol
   "Buka Undangan" ditekan. Tamu juga bisa menekan tombol musik
   mengambang untuk play/pause manual.

Q: Peta Google Maps tidak muncul / blank?
A: Periksa kembali nilai "maps_lat" dan "maps_lng" di config.json,
   pastikan formatnya angka desimal yang benar (gunakan titik,
   bukan koma, sebagai pemisah desimal).

Q: Bagaimana cara mengubah warna tema secara permanen (bukan hanya
   pilihan tamu)?
A: Ubah nilai "tema.default" di config.json sesuai pilihan:
   "classic-gold", "soft-blush", "sage-garden", atau "dark-elegant".

Q: File wedding-song.mp3 kosong/tidak ada suaranya?
A: Memang disengaja sebagai placeholder. Wajib diganti dengan file
   MP3 asli sebelum digunakan (lihat poin 5).


---------------------------------------------------------
SELAMAT MEMPERSIAPKAN HARI BAHAGIA ANDA!
---------------------------------------------------------

Template ini dirancang agar mudah dikustomisasi tanpa perlu
keahlian coding mendalam - cukup edit file config.json dan
ganti foto/musik sesuai kebutuhan Anda.

Semoga acara pernikahan Anda berjalan lancar dan penuh berkah.
