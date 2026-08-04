const produtos = [
  {
    nome: "🍰 Bolos Decorados",
    preco: "A partir de R$ 89,90",
    descricao: "Personalizamos o tema da sua festa.",
    imagem: "/produtos/bolo-brigadeiro.jpg",
  },
  {
    nome: "🎉 Kit Festa",
    preco: "A partir de R$ 139,90",
    descricao: "Praticidade e sabor para comemorar.",
    imagem: "/produtos/kit-festa.jpg",
  },
  {
    nome: "🍮 Pudins Artesanais",
    preco: "A partir de R$ 12,90",
    descricao: "Receita caseira com calda de caramelo.",
    imagem: "/produtos/pudim.jpg",
  },
  {
    nome: "🍫 Brownies",
    preco: "A partir de R$ 7,90",
    descricao: "Massa intensa e muito recheio.",
    imagem: "/produtos/brownies.jpg",
  },
];

export default function ProdutosDestaque() {
  return (
    <section className="py-20 px-6 bg-[#FFF8F3]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-[#5A321B] mb-3">
          Produtos em Destaque
        </h2>

        <p className="text-center text-gray-500 mb-12">
          Feitos artesanalmente com ingredientes selecionados.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {produtos.map((produto) => (
            <div
              key={produto.nome}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#5A321B]">
                  {produto.nome}
                </h3>

                <p className="text-lg text-[#A45A32] font-semibold mt-3">
                  {produto.preco}
                </p>

                <p className="text-gray-600 mt-3">
                  {produto.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}