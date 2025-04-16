"use client"

import { cn } from "@/app/components/utils/lib"
import { motion, stagger, useAnimate, useInView } from "motion/react"
import { useEffect } from "react"
import Image from "next/image"

/** Komponen TypewriterEffect (dengan efek animasi per karakter) */
export const TypewriterEffect = ({
  words,
  className,
}: {
  words: {
    text: string
    className?: string
  }[]
  className?: string
}) => {
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }))

  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          display: "inline-block",
          opacity: 1,
          width: "fit-content",
        },
        {
          duration: 0.3,
          delay: stagger(0.1),
          ease: "easeInOut",
        }
      )
    }
  }, [isInView, animate])

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => (
          <div key={`word-${idx}`} className="inline-block">
            {word.text.map((char, index) => (
              <motion.span
                key={`char-${index}`}
                className={cn("text-white opacity-0 hidden", word.className)}
              >
                {char}
              </motion.span>
            ))}
            &nbsp;
          </div>
        ))}
      </motion.div>
    )
  }

  return (
    <div
      className={cn(
        "relative w-full h-screen bg-cover bg-center flex items-center",  
        className
      )}
      style={{
        backgroundImage: "url('/background.png')",
      }}
    >
      {/* Overlay hitam sisi kiri */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent z-10" />

      {/* Konten utama */}
      <div className="relative z-20 px-6 md:px-20 max-w-3xl">
        <motion.div
          className="overflow-hidden pb-2"
          initial={{ width: "0%" }}
          whileInView={{ width: "fit-content" }}
          transition={{
            duration: 2,
            ease: "linear",
            delay: 1,
          }}
        >
          <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white whitespace-nowrap">
            {renderWords()}
          </div>

          {/* Subteks */}
          <p className="text-white mt-4 text-md md:text-lg font-medium">
            "Pesan Suka-Suka, Tetap Berkualitas Juara."
          </p>

          {/* Tombol Aksi */}
          <div className="mt-6 flex gap-4">
            <button className="bg-white text-black px-5 py-2 rounded-full hover:bg-gray-200 transition">
              Info Lebih Lanjut
            </button>
            <button className="bg-transparent border border-white text-white px-5 py-2 rounded-full hover:bg-white hover:text-black transition">
              Pesan Sekarang
            </button>
          </div>
        </motion.div>
      </div>

      {/* Gambar tas di sisi kanan */}
      <div className="absolute right-10 bottom-10 z-20 hidden md:block">
        <Image
          src="/tas.png"
          alt="Tas Kustom"
          width={300}
          height={400}
          className="object-contain drop-shadow-2xl"
        />
      </div>
    </div>
  )
}

/** Komponen TypewriterEffectSmooth (tanpa animasi per karakter) */
export const TypewriterEffectSmooth = ({
  words,
  className,
}: {
  words: {
    text: string
    className?: string
  }[]
  className?: string
}) => {
  // Pisahkan tiap teks menjadi array karakter
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }))

  const renderWords = () => {
    return (
      <div>
        {wordsArray.map((word, idx) => (
          <div key={`word-${idx}`} className="inline-block">
            {word.text.map((char, index) => (
              <span
                key={`char-${index}`}
                className={cn("dark:text-white text-black", word.className)}
              >
                {char}
              </span>
            ))}
            &nbsp;
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className={cn("flex space-x-1 my-6", className)}>
      <motion.div
        className="overflow-hidden pb-2"
        initial={{ width: "0%" }}
        whileInView={{ width: "fit-content" }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 1,
        }}
      >
        <div
          className="text-xs sm:text-base md:text-xl lg:text-3xl xl:text-5xl font-bold"
          style={{ whiteSpace: "nowrap" }}
        >
          {renderWords()}
        </div>
      </motion.div>
    </div>
  )
}
