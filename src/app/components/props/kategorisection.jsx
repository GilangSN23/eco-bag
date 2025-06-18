"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const categories = [
  {
    name: "Handbag",
    price: "Mulai dari 40.000",
    image: "/handbag.svg",
    background: null,
  },
  {
    name: "Totebag",
    price: "Mulai dari 80.000",
    image: "/totebag.svg",
    background: "/bg2.svg",
  },
  {
    name: "Travelbag",
    price: "Mulai dari 40.000",
    image: "/travelbag.svg",
    background: "/bg2.svg",
  },
  {
    name: "Pouchbag",
    price: "Mulai dari 40.000",
    image: "/pouchbag.svg",
    background: null,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function KategoriSection() {
  return (
    <section
      id="kategori"
      className="bg-[#0a0a0a] text-white w-screen h-screen overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row w-full h-full">
        {/* Kiri: Tas Punggung */}
        <div className="relative flex-1 flex items-center justify-center h-full">
          <Image
            src="/tasbg.svg"
            alt="Background Tas"
            fill
            style={{ objectFit: "cover" }}
            className="absolute inset-0 w-full h-full z-0"
          />

          {/* Teks atas kiri */}
          <div className="absolute top-6 left-10 z-10">
            <h2 className="text-2xl font-bold mb-2">Kategori Produk</h2>
          </div>

          {/* Gambar dan teks tas punggung */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center">
            <Image
              src="/tas.svg"
              alt="Tas Punggung"
              width={300}
              height={400}
              className="object-contain"
            />
            <h3 className="text-5xl font-extrabold leading-tight mt-6">
              Tas Punggung
            </h3>
          </div>
        </div>

        {/* Kanan: Grid Kategori dengan animasi */}
        <motion.div
          className="grid grid-cols-2 grid-rows-2 flex-1 w-full h-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {categories.map((item, index) => {
            const isWithBackground = item.background !== null;
            return (
              <motion.div
                key={index}
                className={`relative flex flex-col items-center justify-center w-full h-full
                ${isWithBackground ? "p-0" : "p-4"}`}
                variants={itemVariants}
              >
                {isWithBackground && (
                  <Image
                    src={item.background}
                    alt="Background"
                    fill
                    style={{ objectFit: "cover" }}
                    className="absolute inset-0 w-full h-full z-0"
                  />
                )}
                <div className="relative z-10 text-center flex flex-col items-center gap-2 px-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={150}
                    height={150}
                    className="object-contain mb-30"
                  />
                  <h4 className="text-base font-bold text-white">{item.name}</h4>
                  <p className="text-sm text-gray-400">{item.price}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
