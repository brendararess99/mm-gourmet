"use client";

import { useCarrinho } from "../context/CarrinhoContext";
import ImagemCategoria from "./ImagemCategoria";

export default function Brownies() {
  const { adicionarItem } = useCarrinho();

  const brownies = [
    {
      nome: "Brownie tradicional (individual)",
      preco: 7.9,
    },
    {
      nome: "Brownie brigadeiro",
      preco: 9.9,
    },
    {
      nome: "Brownie gourmet (Nutella, pistache, etc.)",
      preco: 14.9,
    },
    {
      nome: "Caixa com 4 brownies - Tradicional",
      preco: 24.9,
    },
    {
      nome: "Caixa com 4 brownies - Brigadeiro",
      preco: 29.9,
    },
    {
      nome: "Caixa com 4 brownies - Gourmet",
      preco: 49.9,
    },
    {
      nome: "Caixa com 6 brownies - Tradicional",
      preco: 39.9,
    },
    {
      nome: "Caixa com 6 brownies - Brigadeiro",
      preco: 49.9,
    },
    {
      nome: "Caixa com 6 brownies - Gourmet",
      preco: 79.9,
    },
  ];

  function adicionarBrownie(brownie: typeof brownies[0]) {
    adicionarItem({
      id: `brownie-${brownie.nome}`,
      nome: `🍫 ${brownie.nome}`,
      preco: brownie.preco.toString(),
      imagem: "/produtos/brownies.jpg",
    });
  }

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

              <th className="p-4 text-center">
                Pedido
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
                  R$ {brownie.preco.toFixed(2).replace(".", ",")}
                </td>

                <td className="p-4 text-center">

                  <button
                    onClick={() => adicionarBrownie(brownie)}
                    className="bg-[#5A321B] hover:bg-[#73442A] text-white px-4 py-2 rounded-xl transition"
                  >
                    Adicionar
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </section>
  );
}