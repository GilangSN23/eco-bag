import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#1F1F1F] text-white px-6 md:px-12 pt-14 pb-6">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Kiri: Logo + Deskripsi + Kontak */}
        <div className="md:w-2/3">
          {/* Logo dan Judul */}
          <div className="flex items-center gap-4 mb-3">
            <img src="/logo.svg" alt="Logo" className="w-20 h-20" />
            <h2 className="text-xl font-semibold text-white">Tas Bu Hartono</h2>
          </div>

          {/* Deskripsi Singkat */}
          <p className="text-sm font-semibold mb-1">
            Dari Solo untuk Indonesia: Tas Kustom Sejak 1991
          </p>
          <p className="text-sm mb-4 max-w-lg">
            Berdiri sejak tahun 1991, Rumah Industri Tas Kustom Hartono hadir sebagai spesialis dalam pembuatan tas kustom sesuai keinginanmu.
          </p>

          {/* Kontak */}
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <img src="/wa.svg" alt="WA" className="w-4 h-4" />
              <Link
                href="https://wa.me/6285740153169"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                +6285740153169
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <img src="/email.svg" alt="Email" className="w-4 h-4" />
              <span>rumahindustri@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="/web.svg" alt="Web" className="w-4 h-4" />
              <span>www.rumahindustri.co.id</span>
            </div>
          </div>
        </div>

        {/* Kanan: Navigasi Cepat */}
        <div className="md:w-1/3 flex flex-col sm:flex-row gap-10">
          <div>
            <h3 className="text-base font-semibold mb-2">Rumah Industri</h3>
            <ul className="text-sm space-y-1">
              <li><Link href="#beranda" className="hover:underline">Beranda</Link></li>
              <li><Link href="#produksi" className="hover:underline">Produksi</Link></li>
              <li><Link href="#sejarah" className="hover:underline">Sejarah</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-2">Tas Kustom</h3>
            <ul className="text-sm space-y-1">
              <li><Link href="#layanan" className="hover:underline">Layanan</Link></li>
              <li><Link href="#kategori" className="hover:underline">Kategori</Link></li>
              <li><Link href="#produksi" className="hover:underline">Produksi</Link></li>
              <li><Link href="#galeri" className="hover:underline">Galeri</Link></li>
              <li><Link href="#testimoni" className="hover:underline">Testimoni</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-600 mt-12">
        © 2025. Rumah Industri Bu Hartono. All rights reserved.
      </div>
    </footer>
  );
}
