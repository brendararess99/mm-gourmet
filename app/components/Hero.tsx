import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative">

      <Image
        src="/imagens/capa.png"
        alt="MM Gourmet"
        width={1080}
        height={1920}
        priority
        className="w-full h-auto"
      />

      <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
        <div className="text-center text-white px-6">

          <h2 className="text-5xl font-bold mb-4">
            MM Gourmet
          </h2>

          <p className="text-xl mb-8">
            Doces feitos com carinho para momentos especiais
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <a
              href="#bolos"
              className="bg-[#5A321B] hover:bg-[#73442A] px-8 py-4 rounded-full font-semibold transition"
            >
              Ver Catálogo
            </a>

            <a
              href="https://wa.me/5531992103486"
              target="_blank"
              className="bg-white text-[#5A321B] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              Fazer Encomenda
            </a>

          </div>

        </div>
      </div>

    </section>
  );
}