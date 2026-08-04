const categorias = [
  {
    nome: "🍰 Bolos",
    id: "bolos",
  },
  {
    nome: "🎉 Kit Festa",
    id: "kit-festa",
  },
  {
    nome: "🍬 Doces Tradicionais",
    id: "doces-tradicionais",
  },
  {
    nome: "🍓 Doces Gourmet",
    id: "doces-gourmet",
  },
  {
    nome: "🍫 Bombons Tradicionais",
    id: "bombons-tradicionais",
  },
  {
    nome: "✨ Bombons Finos",
    id: "bombons-finos",
  },
  {
    nome: "🍮 Pudins Artesanais",
    id: "pudins",
  },
  {
    nome: "🍫 Brownies",
    id: "brownies",
  },
];

export default function MenuCategorias() {
  return (
    <section className="py-10 px-6 bg-[#FFF8F3]">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-[#5A321B] text-center mb-8">
          Nosso Catálogo
        </h2>

        <div className="flex flex-wrap justify-center gap-4">

          {categorias.map((categoria) => (
            <a
              key={categoria.id}
              href={`#${categoria.id}`}
              className="bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition px-6 py-3 rounded-full text-[#5A321B] font-semibold"
            >
              {categoria.nome}
            </a>
          ))}

        </div>

      </div>
    </section>
  );
}