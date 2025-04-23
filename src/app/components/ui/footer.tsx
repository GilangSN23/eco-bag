"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Facebook, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-[#0f0f0f] text-white px-6 md:px-16 pt-20 pb-10 mt-20 relative"
    >
      {/* Separator line */}
      <div className="absolute -top-6 left-0 w-full">
        <div className="h-[2px] bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Kiri: Logo + deskripsi + kontak */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Image
            src="/tas.png" // ganti dengan path logo kamu
            alt="Tas Hartono Logo"
            width={60}
            height={60}
            className="mb-4"
          />
          <h2 className="text-2xl font-bold tracking-wide">Tas Hartono</h2>
          <p className="text-sm text-gray-400 mt-2 max-w-md">
            Tas kustom eksklusif dari rumah industri kreatif — siap jadi teman setiap langkahmu.
          </p>

          {/* Kontak */}
          <div className="text-sm text-gray-400 mt-4 leading-relaxed">
            Jl. Kreatif No. 88, Solo, Indonesia<br />
            WA: 0812-3456-7890
          </div>

          {/* Social Media */}
          <div className="flex gap-4 mt-4 text-gray-400">
            <a href="#" className="hover:text-blue-500 transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-pink-400 transition">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Kanan: Navigasi */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          {/* Navigasi */}
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-gray-400 font-medium mb-6">
            {["Beranda", "Layanan", "Produk", "Galeri", "Testimoni", "Hubungi"].map((item, idx) => (
              <li key={idx}>
                <a href="#" className="hover:text-white transition duration-200 ease-in-out">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer bawah */}
      <div className="mt-12 text-xs text-gray-500 text-center">
        © {new Date().getFullYear()} Tas Hartono. All rights reserved.
      </div>
    </motion.footer>
  )
}
