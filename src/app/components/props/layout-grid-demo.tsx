"use client";
import React, { useRef } from "react";
import { LayoutGrid } from "../ui/layout-grid";
import { motion, useInView } from "framer-motion";

export function LayoutGridDemo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section
      id="galeri"
      className="min-h-screen py-20 w-full px-4 md:px-16"
      ref={ref}
    >
      <motion.div
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <LayoutGrid cards={cards} />
      </motion.div>
    </section>
  );
}

const SkeletonOne = () => (
  <div className="max-w-xl px-4">
    <p className="font-bold md:text-4xl text-xl text-white">Elegan Setiap Langkah</p>
    <p className="font-normal text-base text-white"></p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Temukan perpaduan sempurna antara desain stylish dan kualitas premium dalam
      setiap tas kami. Cocok untuk segala suasana, dari kantor hingga akhir pekan.
    </p>
  </div>
);

const SkeletonTwo = () => (
  <div className="max-w-xl px-4">
    <p className="font-bold md:text-4xl text-xl text-white">Tas Premium, Gaya Maksimal</p>
    <p className="font-normal text-base text-white"></p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Dirancang untuk kamu yang menghargai kualitas dan detail. Tas kami hadir dengan
      material pilihan dan jahitan rapi yang tahan lama.
    </p>
  </div>
);

const SkeletonThree = () => (
  <div className="max-w-xl px-4">
    <p className="font-bold md:text-4xl text-xl text-white">Bawa Percaya Diri Bersamamu</p>
    <p className="font-normal text-base text-white"></p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Dengan desain modern dan bahan berkualitas tinggi, tas kami tak hanya fungsional tapi
      juga meningkatkan kepercayaan dirimu.
    </p>
  </div>
);

const SkeletonFour = () => (
  <div className="max-w-xl px-4">
    <p className="font-bold md:text-4xl text-xl text-white">Kualitas yang Terasa, Gaya yang Terlihat</p>
    <p className="font-normal text-base text-white"></p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Setiap tas dibuat dengan ketelitian tinggi untuk memastikan daya tahan dan estetika
      yang menawan.
    </p>
  </div>
);

const SkeletonFive = () => (
  <div className="max-w-xl px-4">
    <p className="font-bold md:text-4xl text-xl text-white">Investasi dalam Gaya dan Fungsi</p>
    <p className="font-normal text-base text-white"></p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Lebih dari sekadar tas—ini adalah investasi untuk penampilan dan kenyamananmu setiap hari.
    </p>
  </div>
);

const SkeletonSix = () => (
  <div className="max-w-xl px-4">
    <p className="font-bold md:text-4xl text-xl text-white">Teman Setia dalam Setiap Petualangan</p>
    <p className="font-normal text-base text-white"></p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Baik untuk bekerja, traveling, atau bersantai, tas kami siap menemani langkahmu dengan
      gaya dan daya tahan terbaik.
    </p>
  </div>
);

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "./galeri.svg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "./galeri2.svg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "galeri3.svg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "./galeri1.svg",
  },
  {
    id: 5,
    content: <SkeletonFive />,
    className: "md:col-span-2",
    thumbnail: "./galeri5.svg",
  },
  {
    id: 6,
    content: <SkeletonSix />,
    className: "col-span-1",
    thumbnail: "./galeri6.svg",
  },
];
