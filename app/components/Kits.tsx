"use client";

import { useCarrinho } from "../context/CarrinhoContext";
import ImagemCategoria from "./ImagemCategoria";

export default function Kits() {
  const { adicionarItem } = useCarrinho();

  const kits = [
    {
      nome: "Kit 1",
      itens: "Bolo simples 1,5 kg + 50 doces",
      preco: 139.9,
    },
    {
      nome: "Kit 2",
      itens: "Bolo temático 1,5 kg + 50 doces",
      preco: 174.9,
    },
    {
      nome: "Kit 3",
      itens: "Bolo simples 2,5 kg + 100 doces",
      preco: 244.9,
    },
    {
      nome: "Kit 4",
      itens: "Bolo temático 2,5 kg + 100 doces",
      preco: 269.9,
    },
  ];

  function adicionarKit(kit: typeof kits[0]) {
    adicionarItem({
      id: `kit-${kit.nome}`,
      nome: `🎉 ${kit.nome} - ${kit.itens}`,
      preco: kit.preco.toString(),
      imagem: "/produtos/kit-festa.jpg",
    });
  }

  return (
    <section
      id="kit-festa"
      className="max-w-6xl mx-auto py-20 px-6"
    >

      <h2 className="text-4xl font-bold text-[#5A321B] text-center mb-3">
        🎉 Kit Festa
      </h2>

      <p className="text-center text-gray-500 mb-10">
        Kits de bolo e doces preparados para sua comemoração.
      </p>

      <ImagemCategoria
        src="/produtos/kit-festa.jpg"
        alt="Kit Festa MM Gourmet"
      />

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

        <table className="w-full">

          <thead className="bg-[#5A321B] text-white">

            <tr>
              <th className="p-4 text-left">
                Kit
              </th>

              <th className="p-4 text-left">
                Conteúdo
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

            {kits.map((kit) => (

              <tr
                key={kit.nome}
                className="border-b last:border-none"
              >

                <td className="p-4 font-semibold text-[#5A321B]">
                  {kit.nome}
                </td>

                <td className="p-4 text-gray-700">
                  {kit.itens}
                </td>

                <td className="p-4 text-right font-bold text-[#5A321B]">
                  R$ {kit.preco.toFixed(2).replace(".", ",")}
                </td>

                <td className="p-4 text-center">

                  <button
                    onClick={() => adicionarKit(kit)}
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