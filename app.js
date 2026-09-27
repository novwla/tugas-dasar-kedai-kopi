/**
 * ============================================================
 * TUGAS MANDIRI — PEMROGRAMAN INTERNET (JAVASCRIPT DASAR)
 * Program Studi : Pendidikan Sistem dan Teknologi Informasi
 * Universitas   : Universitas Pendidikan Indonesia
 * Study Case    : Sistem Poin & Keanggotaan Member Kedai Kopi
 * Berkas        : app.js (STARTER CODE MAHASISWA)
 * ============================================================
 *
 * PETUNJUK PENGERJAAN:
 * 1. Buka file index.html di browser (klik dua kali atau via Live Server).
 * 2. Buka tab Developer Tools dengan menekan tombol F12 -> pilih tab "Console".
 * 3. Kerjakan tugas ini secara bertahap dari AKTIVITAS 1 sampai AKTIVITAS 6
 *    dengan melengkapi bagian bertanda "// TODO:".
 * 4. Simpan progres pekerjaanmu dengan melakukan minimal 3 kali Git Commit
 *    sesuai panduan di PANDUAN_TUGAS_MANDIRI.md.
 * ============================================================
 */


// ============================================================
// AKTIVITAS 1: Setup Berkas & Integrasi JavaScript Eksternal
// ============================================================
// Menampilkan judul sistem ke tab Console (F12)
console.log("=== SISTEM POIN MEMBER KEDAI KOPI ===");

// TODO 1: Tulis satu baris console.log() untuk memastikan file app.js sudah terhubung!
// Contoh output: "Skrip app.js berhasil terhubung!"

console.log("Skrip app.js berhasil terhubung!");

// ============================================================
// AKTIVITAS 2: Variabel & Dialog Interaktif
// ============================================================

// ---- BAGIAN 2A: VARIABEL IDENTITAS KEDAI KOPI ----
// TODO 2A:
const NAMA_KEDAI = "Kopi PSTI Kampus";
let namaKasir = "Wovel";

console.log("Kedai  : " + NAMA_KEDAI);
console.log("Kasir  : " + namaKasir);



// ---- DEMO PERBEDAAN LET vs CONST ----
// TODO 2B:
namaKasir = "Kak Wovel";
console.log("Kasir Baru (setelah diubah dengan let): " + namaKasir);




// ---- BAGIAN 2B: INPUT INTERAKTIF & PENGANDAIAN DASAR ----
// TODO 2C:
console.log("Selamat datang di " + NAMA_KEDAI + "!");
let namaPelanggan = prompt("Halo! Masukkan nama kamu untuk mulai transaksi:");

if (namaPelanggan) {
    alert("Halo, " + namaPelanggan + "! Terima kasih sudah berbelanja.");
    console.log("Pelanggan aktif: " + namaPelanggan);
} else {
    alert("Kamu tidak memasukkan nama. Kamu akan dipanggil Pelanggan Setia.");
    namaPelanggan = "Pelanggan Setia";
    console.log("Pelanggan aktif: " + namaPelanggan);
}



// ============================================================
// AKTIVITAS 3: Operasi Aritmatika — Akumulasi Poin Transaksi
// ============================================================
// Catatan: Gunakan bilangan bulat (integer murni tanpa desimal/float).

// TODO 3:
let poinKopi = 45;
let poinMakanan = 35;
let poinMerchandise = 20;

let totalPoin = poinKopi + poinMakanan + poinMerchandise;

console.log("=== RINCIAN POIN " + namaPelanggan + " ===");
console.log("Poin Kopi        : " + poinKopi);
console.log("Poin Makanan     : " + poinMakanan);
console.log("Poin Merchandise : " + poinMerchandise);
console.log("Total Poin       : " + totalPoin);



// ============================================================
// AKTIVITAS 4: Percabangan if-else — Penentuan Tier Membership
// ============================================================

// TODO 4:
// 1. Buat variabel "tierMember" dan "benefit" bertipe string kosong ("").
// 2. Gunakan percabangan "if - else if - else" berdasarkan nilai "totalPoin":
//    - totalPoin >= 100 : tierMember = "Platinum", benefit = "Diskon 20% + Gratis 1 Minuman Signature"
//    - totalPoin >= 70  : tierMember = "Gold", benefit = "Diskon 10% di setiap transaksi"
//    - totalPoin >= 40  : tierMember = "Silver", benefit = "Diskon 5% untuk menu minuman"
//    - selain itu       : tierMember = "Bronze", benefit = "Member Reguler (kumpulkan poin untuk naik tier)"
// 3. Cetak hasil tierMember dan benefit ke Console.
// 4. Tampilkan ringkasan hasil member (nama, total poin, tier, benefit) via dialog alert().

let tier = "";
let benefit = "";

if (totalPoin >= 100) {
    tier = "Platinum";
    benefit = "Diskon 20% + Gratis 1 Minuman Signature";
} else if (totalPoin >= 70) {
    tier = "Gold";
    benefit = "Diskon 10% di setiap transaksi";
} else if (totalPoin >= 40) {
    tier = "Silver";
    benefit = "Diskon 5% untuk menu minuman";
} else {
    tier = "Bronze";
    benefit = "Member Reguler";
}

console.log("Tier Membership  : " + tier + " (" + benefit + ")");

alert(
    "Status Membership " + namaPelanggan + ":\n" +
    "Total Poin : " + totalPoin + "\n" +
    "Tier       : " + tier + "\n" +
    "Benefit    : " + benefit
);


// ============================================================
// AKTIVITAS 5: Function — Membuat Fungsi yang Bisa Dipakai Ulang
// ============================================================

// TODO 5A:
// Buat fungsi "hitungTotalPoin(p1, p2, p3)" yang menerima 3 parameter nilai poin,
// menjumlahkannya, dan mengembalikan (return) nilai total penjumlahannya.
function hitungTotalPoin(p1, p2, p3) {
    return p1 + p2 + p3;
}

function tentukanTierMember(poin) {
    if (poin >= 100) return "Platinum";
    if (poin >= 70) return "Gold";
    if (poin >= 40) return "Silver";
    return "Bronze";
}



// TODO 5B:
// Buat fungsi "tentukanTierMember(poin)" yang menerima 1 parameter nilai poin,
// dan mengembalikan (return) string nama tier beserta keterangannya.
let poinPelangganB = hitungTotalPoin(50, 40, 15);
let tierPelangganB = tentukanTierMember(poinPelangganB);
console.log("=== DATA PELANGGAN B ===");
console.log("Total Poin : " + poinPelangganB);
console.log("Tier       : " + tierPelangganB);



// TODO 5C:
// Buktikan bahwa fungsi di atas bisa dipakai ulang (reusable):
// 1. Hitung total poin dan tentukan tier untuk simulasi Pelanggan B (misal poin: 35, 25, 20).
// 2. Hitung total poin dan tentukan tier untuk simulasi Pelanggan C (misal poin: 15, 10, 5).
// 3. Cetak data Pelanggan B dan C ke tab Console.
let poinPelangganC = hitungTotalPoin(10, 15, 5);
let tierPelangganC = tentukanTierMember(poinPelangganC);
console.log("=== DATA PELANGGAN C ===");
console.log("Total Poin : " + poinPelangganC);
console.log("Tier       : " + tierPelangganC);



// ============================================================
// AKTIVITAS 6: Array & For Loop — Daftar Menu Rekomendasi
// ============================================================

// TODO 6A:
// Buat variabel Array bernama "menuRekomendasi" yang berisi minimal 5 nama menu kopi/makanan.
// TODO 6B:
// Gunakan perulangan "for loop" untuk mencetak setiap menu ke Console dengan format:
// "1. Nama Menu", "2. Nama Menu", dst. Gunakan (i + 1) untuk nomor urutnya.
let menuRekomendasi = [
    "Kopi Susu Gula Aren",
    "Americano",
    "Cappuccino",
    "Matcha Latte",
    "Croissant Cokelat"
];



// TODO 6C:
// Cetak jumlah total menu di akhir daftar menggunakan properti ".length".
// Akhiri program dengan: console.log("=== TUGAS MANDIRI SELESAI DENGAN SUKSES! ===");
console.log("=== MENU REKOMENDASI " + NAMA_KEDAI + " ===");
for (let i = 0; i < menuRekomendasi.length; i++) {
    console.log((i + 1) + ". " + menuRekomendasi[i]);
}
console.log("-------------------------------");
console.log("Total Menu Rekomendasi: " + menuRekomendasi.length + " item");
console.log("=== TRANSAKI SELESAI! TERIMA KASIH " + namaPelanggan.toUpperCase() + " ===");
