"use client";

import { useState } from "react";
import { useCarrinho } from "../context/CarrinhoContext";

export default function Carrinho() {
  const [aberto, setAberto] = useState(false);

  const {
    itens,
    removerItem,
    aumentarQuantidade,
    diminuirQuantidade,
    limparCarrinho,
  } = useCarrinho();

  const total = itens.reduce(
    (soma, item) =>
      soma + Number(item.preco) * item.quantidade,
    0
  );

  return (
    <>
      <button
        onClick={() => setAberto(true)}
        className="fixed right-6 bottom-6 z-50 bg-[#5A321B] text-white px-5 py-4 rounded-full shadow-xl"
      >
        🛒 Carrinho ({itens.length})
      </button>

      {aberto && (
        <div className="fixed inset-0 z-50 bg-black/40 flex justify-end">

          <div className="bg-white w-full max-w-md h-full p-6 overflow-y-auto">

            <div className="flex justify-between items-center mb-6">

              <h2 className="text-2xl font-bold text-[#5A321B]">
                🛒 Meu Carrinho
              </h2>

              <button
                onClick={() => setAberto(false)}
                className="text-xl"
              >
                ✕
              </button>

            </div>


            {itens.length === 0 ? (

              <p className="text-gray-500">
                Seu carrinho está vazio.
              </p>

            ) : (

              itens.map((item) => (

                <div
                  key={item.id}
                  className="border-b py-4"
                >

                  <p className="font-semibold text-[#5A321B]">
                    {item.nome}
                  </p>

                  <p>
                    R$ {Number(item.preco).toFixed(2).replace(".", ",")}
                  </p>


                  <div className="flex items-center gap-3 mt-2">

                    <button
                      onClick={() => diminuirQuantidade(item.id)}
                      className="px-3 py-1 bg-gray-200 rounded"
                    >
                      -
                    </button>


                    <span>
                      {item.quantidade}
                    </span>


                    <button
                      onClick={() => aumentarQuantidade(item.id)}
                      className="px-3 py-1 bg-gray-200 rounded"
                    >
                      +
                    </button>


                    <button
                      onClick={() => removerItem(item.id)}
                      className="ml-auto text-red-500"
                    >
                      Remover
                    </button>

                  </div>

                </div>

              ))

            )}


            {itens.length > 0 && (

              <div className="mt-6">

                <p className="text-xl font-bold text-[#5A321B]">
                  Total: R$ {total.toFixed(2).replace(".", ",")}
                </p>


                <button
                  onClick={limparCarrinho}
                  className="mt-4 w-full bg-gray-200 py-3 rounded-xl"
                >
                  Limpar Carrinho
                </button>

              </div>

            )}

          </div>

        </div>
      )}

    </>
  );
}