import Image from "next/image";

type Props = {
  id: string;
  titulo: string;
  imagem: string;
};

export default function Categoria({ id, titulo, imagem }: Props) {
  return (
    <section
      id={id}
      className="max-w-5xl mx-auto py-12 px-4 scroll-mt-24"
    >
      <h2 className="text-3xl font-bold text-[#5A321B] mb-6 text-center">
        {titulo}
      </h2>

      <div className="overflow-hidden rounded-3xl shadow-xl bg-white">
        <Image
          src={imagem}
          alt={titulo}
          width={1080}
          height={1920}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}