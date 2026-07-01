export interface Mempelai {
  nama_lengkap: string;
  nama_panggilan: string;
  anak_ke: string;
  orang_tua: string;
  instagram: string;
  foto: string;
}

export interface AcaraSesi {
  label: string;
  waktu: string;
  lokasi: string;
}

export interface GaleriItem {
  src: string;
  caption: string;
}

export interface CeritaItem {
  tanggal: string;
  judul: string;
  deskripsi: string;
}

export interface RekeningItem {
  bank: string;
  nomor: string;
  atas_nama: string;
}

export interface WeddingConfig {
  mempelai: {
    pria: Mempelai;
    wanita: Mempelai;
  };
  acara: {
    tanggal_iso: string;
    tanggal_tampil: string;
    akad: AcaraSesi;
    resepsi: AcaraSesi;
    alamat_lengkap: string;
    maps_lat: number;
    maps_lng: number;
    maps_embed_zoom: number;
  };
  musik: {
    url: string;
    judul_lagu: string;
    autoplay: boolean;
  };
  tema: {
    default: string;
    pilihan: string[];
  };
  galeri: GaleriItem[];
  cerita_cinta: CeritaItem[];
  rekening_kado: RekeningItem[];
  ucapan_pembuka: string;
  hashtag: string;
}

export interface GuestbookEntry {
  id: string;
  nama: string;
  kehadiran: 'Hadir' | 'Tidak Hadir' | 'Masih Ragu';
  pesan: string;
  createdAt: string;
}
