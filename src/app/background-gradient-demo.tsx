"use client";
import React from "react";
import { BackgroundGradient } from "@/app/components/ui/background-gradient";

export function BackgroundGradientDemo() {
  return (
    <div className="flex flex-wrap gap-6 justify-center my-10">
  {[1, 2, 3].map((item) => (
    <BackgroundGradient
      key={item}
      className="w-[250px] h-[360px] bg-white dark:bg-zinc-900 p-4 sm:p-6 flex flex-col justify-between relative"
    >
      <div>
        <img
          src={`/tas.png`}
          alt="jordans"
          height="160"
          width="160"
          className="object-contain mx-auto"
        />
        <p className="text-sm sm:text-base text-black mt-3 mb-2 dark:text-neutral-200 text-left">
          Air Jordan 4 Retro Reimagined
        </p>

        <p className="text-xs text-neutral-600 dark:text-neutral-400 text-left">
          Rilis 17 Februari 2024. Ikuti raffle dan tunggu jadwal resminya!
        </p>
      </div>

      {/* Info Harga di kiri bawah */}
      <div className="absolute bottom-4 left-4 text-left leading-4">
        <p className="text-[10px] text-neutral-500 dark:text-neutral-400 opacity-70">Mulai dari</p>
        <p className="text-xl font-semibold text-black dark:text-white">100.000</p>
      </div>

      {/* Tombol di kanan bawah */}
      <div className="absolute bottom-4 right-4">
        <button className="rounded-full px-4 py-2 text-white bg-black text-xs font-bold dark:bg-zinc-800">
          Buy now
        </button>
      </div>
    </BackgroundGradient>
  ))}
</div>

  );
}
