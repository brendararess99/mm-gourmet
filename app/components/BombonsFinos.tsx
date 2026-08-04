"use client";

import { useCarrinho } from "../context/CarrinhoContext";
import ImagemCategoria from "./ImagemCategoria";

export default function BombonsFinos() {
  const { adicionarItem } = useCarrinho();

  const bombons = [
    "Nozes",
    "Pistache",
    "Morango",
    "Damasco",
    "Copinho de Cereja",
    "Coração Vazado",
    "Bolinho",
    "Gota de Morango",
    "Bombom de Cereja",
    "Copinho de Physalis",
  ];

  function adicionarBombom(
    nome: string,
    tipo: "Unidade" | "Cento",
    valor: number
  ) {
    adicionarItem({
      id: `bombom-fino-${nome}-${tipo}`,
      nome: `✨ Bombom Fino ${nome} - ${tipo}`,
      preco: valor.toString(),
      imagem: "/produtos/bombons-finos.jpg",
    });
  }

  return (
    <section
      id="bombons-finos"
      className="max-w-6xl mx-auto py-20 px-6"
    >

      <h2 className="text-4xl font-bold text-[#5A321B] text-center mb-3">
        ✨ Bombons Finos
      </h2>

      <p className="text-center text-gray-500 mb-10">
        Bombons premium para ocasiões especiais.
      </p>

      <ImagemCategoria
        src="/produtos/bombons-finos.jpg"
        alt="Bombons Finos MM Gourmet"
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
                  R$ 9,00
                </td>


                <td className="p-4 text-right text-[#5A321B] font-bold">
                  R$ 199,90
                </td>


                <td className="p-4">

                  <div className="flex flex-col gap-2">

                    <button
                      onClick={() =>
                        adicionarBombom(bombom, "Unidade", 9)
                      }
                      className="bg-[#5A321B] hover:bg-[#73442A] text-white px-3 py-2 rounded-xl transition"
                    >
                      + Unidade
                    </button>


                    <button
                      onClick={() =>
                        adicionarBombom(bombom, "Cento", 199.9)
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