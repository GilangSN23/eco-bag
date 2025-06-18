"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function LayananKami() {
  const layanan = [
    {
      id: 1,
      title: "Bordir Eksklusif",
      description:
        "Detail bordir rapi dan tahan lama, cocok untuk custom logo, nama, atau motif khas lokal.",
      icon: "/bordir.svg",
    },
    {
      id: 2,
      title: "Sablon Tahan Lama",
      description:
        "Sablon kuat dan tidak mudah luntur, bisa disesuaikan dengan desain favorit Anda.",
      icon: "/sablon.svg",
    },
    {
      id: 3,
      title: "Printing Presisi",
      description:
        "Teknik printing berkualitas tinggi untuk hasil tajam dan warna yang cerah, pas untuk tas promosi.",
      icon: "/printing.svg",
    },
  ];

  // Variants untuk container layanan (stagger anak-anak)
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Variants untuk tiap item layanan
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="layanan" className="py-16 font-poppins">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-3 text-white">
          Apa yang kami sediakan?
        </h2>
        <p className="text-sm md:text-md text-gray-300 mb-12">
          Solusi terdepan untuk pelanggan Bu Hartono
        </p>

        <motion.div
          className="flex flex-col md:flex-row justify-center gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {layanan.map(({ id, title, description, icon }) => (
            <motion.div
              key={id}
              className="max-w-xs"
              variants={itemVariants}
            >
              <Image
                src={icon}
                alt={`${title} icon`}
                width={48}
                height={48}
                className="mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
              <p className="text-gray-400 text-sm">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
