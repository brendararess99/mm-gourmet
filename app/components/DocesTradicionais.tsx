"use client";

import { useCarrinho } from "../context/CarrinhoContext";
import ImagemCategoria from "./ImagemCategoria";

export default function DocesTradicionais() {
  const { adicionarItem } = useCarrinho();

  const doces = [
    "Brigadeiro",
    "Beijinho",
    "Cajuzinho",
    "Olho de Sogra",
    "Moranguinho",
    "Ele e Ela",
    "Brigadeiro de Paçoca",
    "Ninho",
    "Limaozinho",
  ];

  function adicionarDoce(
    nome: string,
    tipo: "Unidade" | "Cento",
    valor: number
  ) {
    adicionarItem({
      id: `doce-tradicional-${nome}-${tipo}`,
      nome: `🍬 Doce Tradicional ${nome} - ${tipo}`,
      preco: valor.toString(),
      imagem: "/produtos/doces-tradicionais.jpg",
    });
  }

  return (
    <section
      id="doces-tradicionais"
      className="max-w-6xl mx-auto py-20 px-4 sm:px-6"
    >
      <h2 className="text-4xl font-bold text-[#5A321B] text-center mb-3">
        🍬 Doces Tradicionais
      </h2>

      <p className="text-center text-gray-500 mb-10">
        Sabores clássicos que fazem sucesso em qualquer festa.
      </p>

      <ImagemCategoria
        src="/produtos/doces-tradicionais.jpg"
        alt="Doces Tradicionais MM Gourmet"
      />

      {/* TABELA - COMPUTADOR */}
      <div className="hidden md:block bg-white rounded-3xl shadow-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#5A321B] text-white">
            <tr>
              <th className="p-4 text-left">
                Doce
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
            {doces.map((doce) => (
              <tr
                key={doce}
                className="border-b last:border-none"
              >
                <td className="p-4 font-semibold text-[#5A321B]">
                  {doce}
                </td>

                <td className="p-4 text-right text-[#5A321B] font-bold">
                  R$ 4,00
                </td>

                <td className="p-4 text-right text-[#5A321B] font-bold">
                  R$ 99,90
                </td>

                <td className="p-4">
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() =>
                        adicionarDoce(doce, "Unidade", 4)
                      }
                      className="bg-[#5A321B] hover:bg-[#73442A] text-white px-3 py-2 rounded-xl transition"
                    >
                      + Unidade
                    </button>

                    <button
                      onClick={() =>
                        adicionarDoce(doce, "Cento", 99.9)
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
        {doces.map((doce) => (
          <div
            key={doce}
            className="bg-white rounded-2xl shadow-md p-5"
          >
            <h3 className="text-xl font-bold text-[#5A321B] mb-4">
              🍬 {doce}
            </h3>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-[#FFF8F3] rounded-xl p-3 text-center">
                <p className="text-sm text-gray-500">
                  Unidade
                </p>

                <p className="text-lg font-bold text-[#5A321B]">
                  R$ 4,00
                </p>
              </div>

              <div className="bg-[#FFF8F3] rounded-xl p-3 text-center">
                <p className="text-sm text-gray-500">
                  Cento
                </p>

                <p className="text-lg font-bold text-[#5A321B]">
                  R$ 99,90
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() =>
                  adicionarDoce(doce, "Unidade", 4)
                }
                className="w-full bg-[#5A321B] hover:bg-[#73442A] text-white py-3 rounded-xl font-semibold transition"
              >
                + Unidade
              </button>

              <button
                onClick={() =>
                  adicionarDoce(doce, "Cento", 99.9)
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