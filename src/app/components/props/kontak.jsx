import Link from "next/link";

export function KontakSection() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-20 text-center">
      {/* Judul */}
      <h2 className="text-2xl md:text-3xl font-semibold text-[#e1e1e1] mb-4">
        Hubungi kami untuk hal-hal besar yang ingin Anda buat oleh para profesional secara langsung.
      </h2>

      {/* Subteks */}
      <p className="text-base md:text-sm text-[#e1e1e1] mb-8">
        Dengan Rumah Industri Bu Hartono, dapatkan semua solusi profesional.
      </p>

      {/* CTA */}
      <Link
        href="https://wa.me/6285740153169"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#2B72E6] text-white font-medium px-6 py-3 rounded-lg hover:bg-[#2362c4] transition"
      >
        Pesan Sekarang
      </Link>
    </section>
  );
}
