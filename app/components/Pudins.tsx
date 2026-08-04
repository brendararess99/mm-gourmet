"use client";

import { useCarrinho } from "../context/CarrinhoContext";
import ImagemCategoria from "./ImagemCategoria";

export default function Pudins() {
  const { adicionarItem } = useCarrinho();

  const pudins = [
    {
      nome: "Mini pudim (100–120 ml)",
      preco: 7.9,
    },
    {
      nome: "Pudim tradicional (individual)",
      preco: 12.9,
    },
    {
      nome: "Pudim pequeno (500 g)",
      preco: 25.9,
    },
    {
      nome: "Pudim médio (1 kg)",
      preco: 49.9,
    },
    {
      nome: "Pudim grande (1,5 kg)",
      preco: 69.9,
    },
    {
      nome: "Pudim gourmet (Nutella, Ninho, doce de leite, etc.)",
      preco: 59.9,
    },
  ];

  function adicionarPudim(pudim: typeof pudins[0]) {
    adicionarItem({
      id: `pudim-${pudim.nome}`,
      nome: `🍮 ${pudim.nome}`,
      preco: pudim.preco.toString(),
      imagem: "/produtos/pudim.jpg",
    });
  }

  return (
    <section
      id="pudins"
      className="max-w-6xl mx-auto py-20 px-6"
    >

      <h2 className="text-4xl font-bold text-[#5A321B] text-center mb-3">
        🍮 Pudins Artesanais
      </h2>

      <p className="text-center text-gray-500 mb-10">
        Receita caseira com calda de caramelo e muito sabor.
      </p>

      <ImagemCategoria
        src="/produtos/pudim.jpg"
        alt="Pudins Artesanais MM Gourmet"
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

            {pudins.map((pudim) => (

              <tr
                key={pudim.nome}
                className="border-b last:border-none"
              >

                <td className="p-4 font-semibold text-[#5A321B]">
                  {pudim.nome}
                </td>

                <td className="p-4 text-right font-bold text-[#5A321B]">
                  R$ {pudim.preco.toFixed(2).replace(".", ",")}
                </td>

                <td className="p-4 text-center">

                  <button
                    onClick={() => adicionarPudim(pudim)}
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