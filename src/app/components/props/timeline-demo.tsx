import React from "react";
import { Timeline } from "@/app/components/ui/timeline"; // pastikan path ini sesuai

export function TimelineDemo() {
  const data = [
    {
      title: "Pesanan baru",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Kami menerima detail pesanan dari pelanggan, baik melalui online maupun langsung. Semua informasi desain, jumlah, dan bahan dicatat dengan teliti.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="./pesananbaru.svg"
              alt="Pesanan baru"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Sampling",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Sebelum produksi massal, kami membuat satu contoh produk (sample) untuk disetujui.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Di tahap ini, pelanggan bisa memberikan revisi atau konfirmasi akhir.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="./sampling.svg"
              alt="Sampling"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Produksi",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Setelah sample disetujui, tim pengrajin kami mulai membuat tas sesuai spesifikasi. Proses ini dilakukan dengan cermat oleh tenaga ahli secara handmade.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="./produksi.svg"
              alt="Produksi"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Pengiriman",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Tas yang telah selesai akan dikemas rapi dan dikirimkan ke alamat pelanggan, pelanggan juga bisa ke lokasi rumah industri secara langsung.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="./pengiriman.svg"
              alt="Pengiriman"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Selesai",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Pesanan tiba di tangan pelanggan. Kami juga membuka feedback untuk terus meningkatkan kualitas layanan dan produk ke depannya.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="./selesai.svg"
              alt="Selesai"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div id="produksi" className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
