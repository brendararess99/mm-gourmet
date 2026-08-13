"use client";

import Image from "next/image";

export default function BoloEmFatia() {
  const whatsappMessage = encodeURIComponent(
    "Olá! 😊 Gostaria de saber quais sabores de bolo em fatia estão disponíveis hoje. 🍰"
  );

  const whatsappLink = `https://wa.me/5531992103486?text=${whatsappMessage}`;

  return (
    <section
      id="bolo-em-fatia"
      className="w-full bg-[#F7F0EA] py-16 px-4 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">

        {/* Título */}
        <div className="mb-10 text-center">
          <span className="mb-3 inline-block text-3xl">
            🍰
          </span>

          <h2 className="text-3xl font-bold text-[#5A321B] sm:text-4xl">
            Bolo em Fatia
          </h2>

          <p className="mt-3 text-lg text-[#73442A] sm:text-xl">
            Uma fatia de carinho para deixar seu dia mais doce
          </p>
        </div>

        {/* Imagem vertical */}
        <div className="mx-auto w-full max-w-[540px] overflow-hidden rounded-3xl shadow-xl">
          <Image
            src="/produtos/bolo-em-fatia.png"
            alt="Bolos em fatias da MM Gourmet"
            width={1080}
            height={1920}
            className="h-auto w-full object-contain"
            priority
          />
        </div>

        {/* Texto */}
        <div className="mx-auto mt-10 max-w-3xl text-center">
          <p className="text-base leading-relaxed text-[#5A321B] sm:text-lg">
            Os sabores disponíveis variam conforme a produção do dia.
          </p>

          <p className="mt-2 text-base font-semibold leading-relaxed text-[#5A321B] sm:text-lg">
            Entre em contato com a nossa loja e consulte quais temos
            disponíveis para hoje.
          </p>
        </div>

        {/* Botão WhatsApp */}
        <div className="mt-8 flex justify-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-full
              bg-[#5A321B]
              px-7
              py-4
              text-center
              text-base
              font-bold
              text-white
              shadow-lg
              transition
              duration-300
              hover:bg-[#73442A]
              hover:scale-105
              sm:px-9
              sm:text-lg
            "
          >
            💬 Consultar sabores disponíveis
          </a>
        </div>

        {/* Informação */}
        <p className="mt-5 text-center text-sm text-[#73442A]">
          Fale conosco pelo WhatsApp e consulte a disponibilidade de hoje.
        </p>

      </div>
    </section>
  );
}