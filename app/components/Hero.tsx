import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative">
      <Image
        src="/imagens/capa-nova.png"
        alt="MM Gourmet"
        width={1080}
        height={1920}
        priority
        className="w-full h-auto"
      />

      <div className="absolute inset-0 bg-black/30">
        <div className="flex flex-col justify-between h-full px-6 py-12 text-white">
          <div className="mt-10 text-center">
            <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg">
              MM Gourmet
            </h1>

            <p className="text-lg md:text-2xl mt-4 drop-shadow">
              Doces feitos com carinho para momentos especiais 💖
            </p>
          </div>

          <div className="flex justify-center mb-10">
            <a
              href="#bolos"
              className="bg-[#5A321B] hover:bg-[#73442A] px-10 py-4 rounded-full text-lg font-semibold shadow-xl transition duration-300"
            >
              🍰 Ver Catálogo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}