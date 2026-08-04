import ImagemCategoria from "./ImagemCategoria";

export default function Brownies() {
  const brownies = [
    {
      nome: "Brownie tradicional (individual)",
      preco: "R$ 7,90",
    },
    {
      nome: "Brownie brigadeiro",
      preco: "R$ 9,90",
    },
    {
      nome: "Brownie gourmet (Nutella, pistache, etc.)",
      preco: "R$ 14,90",
    },
    {
      nome: "Caixa com 4 brownies - Tradicional",
      preco: "R$ 24,90",
    },
    {
      nome: "Caixa com 4 brownies - Brigadeiro",
      preco: "R$ 29,90",
    },
    {
      nome: "Caixa com 4 brownies - Gourmet",
      preco: "R$ 49,90",
    },
    {
      nome: "Caixa com 6 brownies - Tradicional",
      preco: "R$ 39,90",
    },
    {
      nome: "Caixa com 6 brownies - Brigadeiro",
      preco: "R$ 49,90",
    },
    {
      nome: "Caixa com 6 brownies - Gourmet",
      preco: "R$ 79,90",
    },
  ];

  return (
    <section
      id="brownies"
      className="max-w-6xl mx-auto py-20 px-6"
    >
      <h2 className="text-4xl font-bold text-[#5A321B] text-center mb-3">
        🍫 Brownies
      </h2>

      <p className="text-center text-gray-500 mb-10">
        Massa intensa, muito recheio e sabores irresistíveis.
      </p>

      <ImagemCategoria
        src="/produtos/brownies.jpg"
        alt="Brownies MM Gourmet"
      />

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

        <table className="w-full">

          <thead className="bg-[#5A321B] text-white">
            <tr>
              <th className="p-4 text-left">
                Produto
              </th>

              <th className="p-4 text-right">
                Preço
              </th>
            </tr>
          </thead>

          <tbody>
            {brownies.map((brownie) => (
              <tr
                key={brownie.nome}
                className="border-b last:border-none"
              >
                <td className="p-4 font-semibold text-[#5A321B]">
                  {brownie.nome}
                </td>

                <td className="p-4 text-right font-bold text-[#5A321B]">
                  {brownie.preco}
                </td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>

      <a
        href="https://wa.me/5531992103486"
        target="_blank"
        className="mt-8 inline-block bg-[#5A321B] hover:bg-[#73442A] text-white px-8 py-4 rounded-full transition"
      >
        Fazer Encomenda
      </a>

    </section>
  );
}