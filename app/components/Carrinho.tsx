"use client";

import { useState } from "react";
import { useCarrinho } from "../context/CarrinhoContext";

export default function Carrinho() {
  const [aberto, setAberto] = useState(false);
  const [observacao, setObservacao] = useState("");

  const {
    itens,
    removerItem,
    aumentarQuantidade,
    diminuirQuantidade,
    limparCarrinho,
  } = useCarrinho();

  const total = itens.reduce(
    (soma, item) => soma + Number(item.preco) * item.quantidade,
    0
  );

  function finalizarPedido() {
    if (itens.length === 0) {
      return;
    }

    const listaProdutos = itens
      .map((item) => {
        const subtotal = Number(item.preco) * item.quantidade;

        return (
          `🍰 ${item.nome}\n` +
          `Quantidade: ${item.quantidade}\n` +
          `Valor: R$ ${subtotal.toFixed(2).replace(".", ",")}`
        );
      })
      .join("\n\n");

    const mensagem =
      `Olá! Gostaria de fazer um pedido na MM Gourmet. 🧁\n\n` +
      `🛒 *Meu pedido:*\n\n` +
      `${listaProdutos}\n\n` +
      `💰 *Total: R$ ${total.toFixed(2).replace(".", ",")}*\n\n` +
      `📝 *Observação:*\n` +
      `${observacao.trim() || "Nenhuma observação."}`;

    const url = `https://wa.me/5531992103486?text=${encodeURIComponent(
      mensagem
    )}`;

    window.open(url, "_blank");
  }

  return (
    <>
      {/* BOTÃO DO CARRINHO */}
      <button
        onClick={() => setAberto(true)}
        className="fixed right-6 bottom-28 z-50 bg-[#5A321B] hover:bg-[#73442A] text-white px-5 py-4 rounded-full shadow-xl transition-all duration-300"
      >
        🛒 Carrinho ({itens.length})
      </button>

      {/* CARRINHO ABERTO */}
      {aberto && (
        <div className="fixed inset-0 z-50 bg-black/40 flex justify-end">
          <div className="bg-white w-full max-w-md h-full p-6 overflow-y-auto">

            {/* CABEÇALHO */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#5A321B]">
                🛒 Meu Carrinho
              </h2>

              <button
                onClick={() => setAberto(false)}
                className="text-2xl text-[#5A321B] hover:text-[#73442A]"
              >
                ✕
              </button>
            </div>

            {/* CARRINHO VAZIO */}
            {itens.length === 0 ? (
              <p className="text-gray-500">
                Seu carrinho está vazio.
              </p>
            ) : (
              <>
                {/* PRODUTOS */}
                {itens.map((item) => {
                  const subtotal =
                    Number(item.preco) * item.quantidade;

                  return (
                    <div
                      key={item.id}
                      className="border-b border-gray-200 py-4"
                    >
                      <p className="font-semibold text-lg text-[#5A321B]">
                        {item.nome}
                      </p>

                      <p className="text-[#A45A32] font-semibold mt-1">
                        R${" "}
                        {Number(item.preco)
                          .toFixed(2)
                          .replace(".", ",")}{" "}
                        cada
                      </p>

                      <p className="text-sm text-gray-500 mt-1">
                        Subtotal: R${" "}
                        {subtotal.toFixed(2).replace(".", ",")}
                      </p>

                      {/* QUANTIDADE */}
                      <div className="flex items-center gap-3 mt-3">
                        <button
                          onClick={() =>
                            diminuirQuantidade(item.id)
                          }
                          className="w-9 h-9 rounded-full bg-[#5A321B] hover:bg-[#73442A] text-white transition"
                        >
                          −
                        </button>

                        <span className="w-6 text-center text-lg font-bold text-[#5A321B]">
                          {item.quantidade}
                        </span>

                        <button
                          onClick={() =>
                            aumentarQuantidade(item.id)
                          }
                          className="w-9 h-9 rounded-full bg-[#5A321B] hover:bg-[#73442A] text-white transition"
                        >
                          +
                        </button>

                        <button
                          onClick={() =>
                            removerItem(item.id)
                          }
                          className="ml-auto text-red-500 hover:text-red-700 transition"
                        >
                          Remover
                        </button>
                      </div>
                    </div>
                  );
                })}

                {/* TOTAL */}
                <div className="mt-6">
                  <p className="text-2xl font-bold text-[#5A321B]">
                    Total: R${" "}
                    {total.toFixed(2).replace(".", ",")}
                  </p>
                </div>

                {/* OBSERVAÇÃO */}
                <div className="mt-6">
                  <label
                    htmlFor="observacao"
                    className="block text-[#5A321B] font-semibold mb-2"
                  >
                    📝 Observação do pedido
                  </label>

                  <textarea
                    id="observacao"
                    value={observacao}
                    onChange={(e) =>
                      setObservacao(e.target.value)
                    }
                    placeholder="Ex.: tema do bolo, sabores, data da festa ou alguma informação importante..."
                    className="w-full h-28 border border-gray-300 rounded-xl p-3 text-gray-700 outline-none focus:border-[#5A321B] focus:ring-1 focus:ring-[#5A321B] resize-none"
                  />
                </div>

                {/* FINALIZAR PEDIDO */}
                <button
                  onClick={finalizarPedido}
                  className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl shadow-lg transition"
                >
                  📲 Finalizar Pedido pelo WhatsApp
                </button>

                {/* LIMPAR CARRINHO */}
                <button
                  onClick={limparCarrinho}
                  className="mt-3 w-full bg-gray-200 hover:bg-gray-300 text-[#5A321B] font-semibold py-3 rounded-xl transition"
                >
                  Limpar Carrinho
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}