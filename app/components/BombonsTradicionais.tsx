"use client";

import { useCarrinho } from "../context/CarrinhoContext";
import ImagemCategoria from "./ImagemCategoria";

export default function BombonsTradicionais() {
  const { adicionarItem } = useCarrinho();

  const bombons = [
    "Maracujá",
    "Limão",
    "Coco",
    "Brigadeiro",
    "Uva",
    "Ninho",
  ];

  function adicionarBombom(
    nome: string,
    tipo: "Unidade" | "Cento",
    valor: number
  ) {
    adicionarItem({
      id: `bombom-tradicional-${nome}-${tipo}`,
      nome: `🍫 Bombom Tradicional ${nome} - ${tipo}`,
      preco: valor.toString(),
      imagem: "/produtos/bombons-tradicionais.jpg",
    });
  }

  return (
    <section
      id="bombons-tradicionais"
      className="max-w-6xl mx-auto py-20 px-4 sm:px-6"
    >
      <h2 className="text-4xl font-bold text-[#5A321B] text-center mb-3">
        🍫 Bombons Tradicionais
      </h2>

      <p className="text-center text-gray-500 mb-10">
        Sabores deliciosos para deixar sua comemoração ainda mais especial.
      </p>

      <ImagemCategoria
        src="/produtos/bombons-tradicionais.jpg"
        alt="Bombons Tradicionais MM Gourmet"
      />

      {/* TABELA - COMPUTADOR */}
      <div className="hidden md:block bg-white rounded-3xl shadow-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#5A321B] text-white">
            <tr>
              <th className="p-4 text-left">
                Bombom
              </th>

              <th className="p-4 text-right">
                Unidade
              </th>

              <th className="p-4 text-right">
                Cento
              </th>

              <th className="p-4 text-center">
                Pedido
              </th>
            </tr>
          </thead>

          <tbody>
            {bombons.map((bombom) => (
              <tr
                key={bombom}
                className="border-b last:border-none"
              >
                <td className="p-4 font-semibold text-[#5A321B]">
                  {bombom}
                </td>

                <td className="p-4 text-right text-[#5A321B] font-bold">
                  R$ 6,00
                </td>

                <td className="p-4 text-right text-[#5A321B] font-bold">
                  R$ 149,90
                </td>

                <td className="p-4">
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() =>
                        adicionarBombom(bombom, "Unidade", 6)
                      }
                      className="bg-[#5A321B] hover:bg-[#73442A] text-white px-3 py-2 rounded-xl transition"
                    >
                      + Unidade
                    </button>

                    <button
                      onClick={() =>
                        adicionarBombom(bombom, "Cento", 149.9)
                      }
                      className="bg-[#A45A32] hover:bg-[#8B4728] text-white px-3 py-2 rounded-xl transition"
                    >
                      + Cento
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* CARDS - CELULAR */}
      <div className="md:hidden space-y-4">
        {bombons.map((bombom) => (
          <div
            key={bombom}
            className="bg-white rounded-2xl shadow-md p-5"
          >
            <h3 className="text-xl font-bold text-[#5A321B] mb-4">
              🍫 {bombom}
            </h3>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-[#FFF8F3] rounded-xl p-3 text-center">
                <p className="text-sm text-gray-500">
                  Unidade
                </p>

                <p className="text-lg font-bold text-[#5A321B]">
                  R$ 6,00
                </p>
              </div>

              <div className="bg-[#FFF8F3] rounded-xl p-3 text-center">
                <p className="text-sm text-gray-500">
                  Cento
                </p>

                <p className="text-lg font-bold text-[#5A321B]">
                  R$ 149,90
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() =>
                  adicionarBombom(bombom, "Unidade", 6)
                }
                className="w-full bg-[#5A321B] hover:bg-[#73442A] text-white py-3 rounded-xl font-semibold transition"
              >
                + Unidade
              </button>

              <button
                onClick={() =>
                  adicionarBombom(bombom, "Cento", 149.9)
                }
                className="w-full bg-[#A45A32] hover:bg-[#8B4728] text-white py-3 rounded-xl font-semibold transition"
              >
                + Cento
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}