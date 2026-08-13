import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full">
      <Image
        src="/imagens/capa-nova-1.png"
        alt="MM Gourmet"
        width={1200}
        height={900}
        priority
        className="w-full h-auto"
      />

      <div className="absolute inset-0 flex items-end justify-center pb-8 md:pb-10">
        <a
          href="#bolos"
          className="bg-[#5A321B] hover:bg-[#73442A] px-8 py-3 md:px-10 md:py-4 rounded-full text-base md:text-lg font-semibold text-white shadow-xl transition duration-300"
        >
          🍰 Ver Catálogo
        </a>
      </div>
    </section>
  );
}