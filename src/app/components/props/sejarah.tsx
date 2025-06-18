"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function SejarahSection() {
  // Animasi varian untuk teks
  const textVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="sejarah" className="max-w-6xl mx-auto px-4 py-16">
      {/* Judul Utama Centered */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-[#e1e1e1] text-center mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariants}
      >
        Sejarah Rumah Industri Kami
      </motion.h2>

      {/* Konten Grid */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Kiri: Teks */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
          transition={{ delay: 0.2 }}
        >
          <motion.h3 className="text-2xl md:text-3xl font-semibold text-[#e1e1e1] mb-4">
            Dari Solo untuk Indonesia: Tas Kustom Sejak 1991
          </motion.h3>
          <motion.p className="text-base md:text-lg text-[#e1e1e1] mb-4">
            Berdiri sejak tahun 1991, Rumah Industri Tas Kustom Hartono hadir sebagai spesialis dalam pembuatan tas kustom sesuai keinginanmu.
          </motion.p>
          <motion.p className="text-base md:text-lg text-[#e1e1e1] mb-6">
            Dengan pengalaman lebih dari 30 tahun, kami percaya bahwa kualitas itu penting. Jahitan rapi dengan detail yang dikerjakan penuh ketelitian.
          </motion.p>
          <motion.div>
            <Link
              href="https://maps.app.goo.gl/2XEk6apSwrGUiifMA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#2B72E6] text-white font-medium px-6 py-3 rounded-lg hover:bg-[#2362c4] transition"
            >
              Lokasi Rumah Industri
            </Link>
          </motion.div>
        </motion.div>

        {/* Kanan: Gambar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <Image
            src="/tas.png"
            alt="Tas Kustom Hartono"
            width={500}
            height={400}
            className="rounded-xl object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
