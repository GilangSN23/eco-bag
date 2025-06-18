import { AnimatedTestimonials } from "@/app/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Produksi nya selalu tepat waktu... puas dah...  terima kasih hartono tas",
      name: "Febri Biantoro",
      designation: "Papua",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: "Umkm yg kreatif n perlu disupport, patut di dukung",
      name: "Ridwan Aryanto",
      designation: "Surakarta",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Saya sudah pakai tas ini hampir 6 bulan dan kualitasnya masih seperti baru. Bahannya kokoh, jahitannya rapi, dan desainnya benar-benar elegan. Banyak yang tanya belinya di mana!",
      name: "Emily Watson",
      designation: "Jakarta",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Akhirnya nemu tas yang nggak cuma stylish tapi juga muat banyak! Sangat cocok buat kerja dan meeting. Worth every penny!",
      name: "James Kim",
      designation: "Bengkulu",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Biasanya tas cepat rusak karena sering dipakai bawa laptop dan dokumen, tapi tas ini beda. Kuat banget dan tetap nyaman dipakai seharian. Rekomen banget!",
      name: "Lisa Thompson",
      designation: "Pekalongan",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div id="testimoni" className="text-center max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-2" style={{ color: "#e1e1e1" }}>
        Testimoni Pelanggan
      </h2>
      <p className="text-lg mb-8" style={{ color: "#e1e1e1" }}>
        Dipercaya ratusan pelanggan karena kualitas dan ketulusan dalam setiap jahitan.
      </p>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
}
