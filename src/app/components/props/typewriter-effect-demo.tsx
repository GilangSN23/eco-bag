"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { TypewriterEffectSmooth } from "../../components/ui/typewriter-effect";

export default function Hero() {
  const line1 = [{ text: "Rumah" }, { text: "Industri" }];
  const line2 = [
    { text: "Tas" },
    { text: "Kustom" },
    { text: "Hartono", className: "text-blue-500 dark:text-blue-500" },
  ];

  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  // Animasi teks
  const textContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.5 },
    },
  };

  const textItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Animasi gambar
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 1.6, duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div
      id="beranda"
      ref={ref}
      className="relative min-h-screen w-full bg-cover bg-center flex items-center justify-center px-6"
      style={{ backgroundColor: "#111111" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-0" />

      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-center md:justify-between max-w-7xl w-full gap-12 py-10"
      >
        {/* Kiri: Teks */}
        <motion.div
          variants={textContainer}
          className="text-white max-w-2xl w-full flex flex-col items-center text-center md:items-start md:text-left"
        >
          <motion.div
            variants={textItem}
            className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight"
          >
            <TypewriterEffectSmooth words={line1} delay={1} />
            <TypewriterEffectSmooth words={line2} delay={3.2} />
          </motion.div>

          <motion.p
            variants={textItem}
            className="text-base sm:text-lg mt-4"
          >
            "Pesan Suka-Suka, Tetap Berkualitas Juara"
          </motion.p>

          <motion.div
            variants={textItem}
            className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto justify-center md:justify-start"
          >
            <a
              href="https://wa.me/6285740153169"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-44 h-12 rounded-xl text-white border border-white hover:bg-[#2B72E6] transition flex items-center justify-center"
            >
              Pesan Sekarang
            </a>
            <button className="w-full sm:w-44 h-12 rounded-xl bg-[#2B72E6] text-white hover:bg-blue-600 transition">
              Lihat Produk
            </button>
          </motion.div>
        </motion.div>

        {/* Kanan: Gambar */}
        <motion.div
          variants={imageVariants}
          className="flex justify-center"
        >
          <Image
            src="/tas.png"
            alt="Tas Kustom"
            width={600}
            height={600}
            className="rounded-xl object-contain drop-shadow-2xl shadow-black/60"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
