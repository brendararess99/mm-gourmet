"use client";

import { useCarrinho } from "../context/CarrinhoContext";
import ImagemCategoria from "./ImagemCategoria";

type Bombom = {
  nome: string;
  imagem: string;
  precoUnidade: number;
  precoCento: number;
  descricao?: string;
};

export default function BombonsFinos() {
  const { adicionarItem } = useCarrinho();

  const bombons: Bombom[] = [
    // R$ 8,00 unidade | R$ 199,90 cento
    {
      nome: "Bombom de Damasco",
      imagem: "/produtos/bombons-finos/bombom-damasco.png",
      precoUnidade: 8,
      precoCento: 199.9,
    },
    {
      nome: "Bombom de Cereja",
      imagem: "/produtos/bombons-finos/bombom-cereja.png",
      precoUnidade: 8,
      precoCento: 199.9,
    },
    {
      nome: "Cestinha de Nutella",
      imagem: "/produtos/bombons-finos/cestinha-nutella.png",
      precoUnidade: 8,
      precoCento: 199.9,
    },
    {
      nome: "Copinho de Cereja",
      imagem: "/produtos/bombons-finos/copinho-cereja.png",
      precoUnidade: 8,
      precoCento: 199.9,
    },
    {
      nome: "Copinho de Limão Siciliano com Blueberry",
      imagem:
        "/produtos/bombons-finos/copinho-limao-siciliano-blueberry.png",
      precoUnidade: 8,
      precoCento: 199.9,
    },
    {
      nome: "Copinho de Morango",
      imagem: "/produtos/bombons-finos/copinho-morango.png",
      precoUnidade: 8,
      precoCento: 199.9,
    },
    {
      nome: "Copinho de Physalis",
      imagem: "/produtos/bombons-finos/copinho-physalis.png",
      precoUnidade: 8,
      precoCento: 199.9,
    },
    {
      nome: "Bombom de Nozes",
      imagem: "/produtos/bombons-finos/nozes.png",
      precoUnidade: 8,
      precoCento: 199.9,
    },
    {
      nome: "Pirâmide de Abacaxi",
      imagem: "/produtos/bombons-finos/piramide-abacaxi.png",
      precoUnidade: 8,
      precoCento: 199.9,
    },
    {
      nome: "Bombom de Pistache",
      imagem: "/produtos/bombons-finos/pistache.png",
      precoUnidade: 8,
      precoCento: 199.9,
    },

    // R$ 10,00 unidade | R$ 229,90 cento
    {
      nome: "Esfera de Physalis",
      imagem: "/produtos/bombons-finos/esfera-physalis.png",
      precoUnidade: 10,
      precoCento: 229.9,
    },
    {
      nome: "Crocante de Ovomaltine",
      imagem: "/produtos/bombons-finos/crocante-ovomaltine.png",
      precoUnidade: 10,
      precoCento: 229.9,
    },
    {
      nome: "Caramelo Salgado com Avelã",
      imagem: "/produtos/bombons-finos/caramelo-salgado-avela.png",
      precoUnidade: 10,
      precoCento: 229.9,
    },
    {
      nome: "Coquinho",
      imagem: "/produtos/bombons-finos/coquinho.png",
      precoUnidade: 10,
      precoCento: 229.9,
    },
    {
      nome: "Maracujá",
      imagem: "/produtos/bombons-finos/maracuja.png",
      precoUnidade: 10,
      precoCento: 229.9,
    },
    {
      nome: "Coração Rendado",
      imagem: "/produtos/bombons-finos/coracao-rendado.png",
      precoUnidade: 10,
      precoCento: 229.9,
    },
    {
      nome: "Marmorizados",
      imagem: "/produtos/bombons-finos/marmorizados.png",
      precoUnidade: 10,
      precoCento: 229.9,
      descricao:
        "Ganache de Tangerina • Ganache de Amarula • Creme de Amendoim",
    },
  ];

  function adicionarBombom(
    bombom: Bombom,
    tipo: "Unidade" | "Cento"
  ) {
    const valor =
      tipo === "Unidade"
        ? bombom.precoUnidade
        : bombom.precoCento;

    adicionarItem({
      id: `bombom-fino-${bombom.nome}-${tipo}`,
      nome: `✨ ${bombom.nome} - ${tipo}`,
      preco: valor.toString(),
      imagem: bombom.imagem,
    });
  }

  function formatarPreco(valor: number) {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  return (
    <section
      id="bombons-finos"
      className="max-w-6xl mx-auto py-20 px-4 sm:px-6"
    >
      {/* TÍTULO */}
      <h2 className="text-4xl font-bold text-[#5A321B] text-center mb-3">
        ✨ Bombons Finos
      </h2>

      <p className="text-center text-gray-500 mb-10">
        Bombons premium para ocasiões especiais.
      </p>

      {/* IMAGEM GERAL DA CATEGORIA */}
      <ImagemCategoria
        src="/produtos/bombons-finos.jpg"
        alt="Bombons Finos MM Gourmet"
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
                key={bombom.nome}
                className="border-b last:border-none hover:bg-[#FFF8F3] transition"
              >
                {/* FOTO + NOME */}
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={bombom.imagem}
                      alt={bombom.nome}
                      className="w-24 h-24 object-cover rounded-2xl shadow-md flex-shrink-0"
                    />

                    <div>
                      <p className="font-semibold text-[#5A321B] text-lg">
                        {bombom.nome}
                      </p>

                      {bombom.descricao && (
                        <p className="text-sm text-gray-500 mt-1 max-w-sm leading-relaxed">
                          {bombom.descricao}
                        </p>
                      )}
                    </div>
                  </div>
                </td>

                {/* PREÇO UNIDADE */}
                <td className="p-4 text-right text-[#5A321B] font-bold whitespace-nowrap">
                  {formatarPreco(bombom.precoUnidade)}
                </td>

                {/* PREÇO CENTO */}
                <td className="p-4 text-right text-[#5A321B] font-bold whitespace-nowrap">
                  {formatarPreco(bombom.precoCento)}
                </td>

                {/* BOTÕES */}
                <td className="p-4">
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() =>
                        adicionarBombom(bombom, "Unidade")
                      }
                      className="bg-[#5A321B] hover:bg-[#73442A] text-white px-3 py-2 rounded-xl transition"
                    >
                      + Unidade
                    </button>

                    <button
                      onClick={() =>
                        adicionarBombom(bombom, "Cento")
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
      <div className="md:hidden space-y-5">
        {bombons.map((bombom) => (
          <div
            key={bombom.nome}
            className="bg-white rounded-2xl shadow-md overflow-hidden"
          >
            {/* FOTO INDIVIDUAL */}
            <img
              src={bombom.imagem}
              alt={bombom.nome}
              className="w-full aspect-square object-cover"
            />

            <div className="p-5">
              {/* NOME */}
              <h3 className="text-xl font-bold text-[#5A321B] mb-2">
                ✨ {bombom.nome}
              </h3>

              {/* DESCRIÇÃO */}
              {bombom.descricao && (
                <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                  {bombom.descricao}
                </p>
              )}

              {/* PREÇOS */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-[#FFF8F3] rounded-xl p-3 text-center">
                  <p className="text-sm text-gray-500">
                    Unidade
                  </p>

                  <p className="text-lg font-bold text-[#5A321B]">
                    {formatarPreco(bombom.precoUnidade)}
                  </p>
                </div>

                <div className="bg-[#FFF8F3] rounded-xl p-3 text-center">
                  <p className="text-sm text-gray-500">
                    Cento
                  </p>

                  <p className="text-lg font-bold text-[#5A321B]">
                    {formatarPreco(bombom.precoCento)}
                  </p>
                </div>
              </div>

              {/* BOTÕES */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() =>
                    adicionarBombom(bombom, "Unidade")
                  }
                  className="w-full bg-[#5A321B] hover:bg-[#73442A] text-white py-3 rounded-xl font-semibold transition"
                >
                  + Unidade
                </button>

                <button
                  onClick={() =>
                    adicionarBombom(bombom, "Cento")
                  }
                  className="w-full bg-[#A45A32] hover:bg-[#8B4728] text-white py-3 rounded-xl font-semibold transition"
                >
                  + Cento
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}