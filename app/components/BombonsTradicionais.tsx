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
    "Ele e Ela",
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
      className="max-w-6xl mx-auto py-20 px-6"
    >

      <h2 className="text-4xl font-bold text-[#5A321B] text-center mb-3">
        🍫 Bombons Tradicionais
      </h2>

      <p className="text-center text-gray-500 mb-10">
        Bombons artesanais preparados com sabores clássicos e irresistíveis.
      </p>

      <ImagemCategoria
        src="/produtos/bombons-tradicionais.jpg"
        alt="Bombons Tradicionais MM Gourmet"
      />

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

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
                  R$ 7,00
                </td>

                <td className="p-4 text-right text-[#5A321B] font-bold">
                  R$ 169,90
                </td>

                <td className="p-4">

                  <div className="flex flex-col gap-2">

                    <button
                      onClick={() =>
                        adicionarBombom(bombom, "Unidade", 7)
                      }
                      className="bg-[#5A321B] hover:bg-[#73442A] text-white px-3 py-2 rounded-xl transition"
                    >
                      + Unidade
                    </button>

                    <button
                      onClick={() =>
                        adicionarBombom(bombom, "Cento", 169.9)
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

    </section>
  );
}