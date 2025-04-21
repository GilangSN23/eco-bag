"use client"
import Image from "next/image"
import { TypewriterEffectSmooth } from "@/app/components/ui/typewriter-effect"

export default function TypewriterEffectSmoothDemo() {
  const line1 = [
    { text: "Rumah" },
    { text: "Industri" },
  ];
  
  const line2 = [
    { text: "Tas" },
    { text: "Kustom" },
    { text: "Hartono.", className: "text-blue-500 dark:text-blue-500" },
  ];
  

  return (
    <div
      className="relative h-screen w-full bg-cover bg-center flex items-center justify-center px-6"
      style={{
        backgroundImage: "url('/background.png')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100vh'
      }}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-0" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl">
        
        {/* Konten Kiri */}
        <div className="text-white max-w-xl text-center md:text-left mb-10 md:mb-0">
          <p className="text-lg sm:text-xl mb-4">
            "Pesan Suka-Suka, Tetap Berkualitas Juara"
          </p>
          <div className="mt-2 text-6xl sm:text-8xl md:text-9xl font-bold leading-tight">
              <TypewriterEffectSmooth words={line1} delay={1} />
              <TypewriterEffectSmooth words={line2} delay={3.2} />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center md:justify-start">
            <button className="w-44 h-12 rounded-xl bg-white text-black text-sm hover:bg-gray-200 transition">
              Info lebih lanjut
            </button>
            <button className="w-44 h-12 rounded-xl bg-transparent border border-white text-white text-sm hover:bg-white hover:text-black transition">
              Pesan Sekarang
            </button>
          </div>
        </div>

        {/* Gambar Tas */}
        <div className="flex justify-center">
          <Image
            src="/tas.png"
            alt="Tas Kustom"
            width={600}
            height={600}
            className="rounded-xl object-contain drop-shadow-2xl shadow-black/60"
          />
        </div>
      </div>
    </div>
  )
}
