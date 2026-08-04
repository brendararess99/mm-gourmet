"use client";

import { useCarrinho } from "../context/CarrinhoContext";
import { useState } from "react";

const produtos = [
  {
    nome: "🍰 Bolos Decorados",
    preco: "A partir de R$ 89,90",
    valor: 89.9,
    descricao: "Personalizamos o tema da sua festa.",
    imagem: "/produtos/bolo-brigadeiro.jpg",
  },
  {
    nome: "🎉 Kit Festa",
    preco: "A partir de R$ 139,90",
    valor: 139.9,
    descricao: "Praticidade e sabor para comemorar.",
    imagem: "/produtos/kit-festa.jpg",
  },
  {
    nome: "🍮 Pudins Artesanais",
    preco: "A partir de R$ 12,90",
    valor: 12.9,
    descricao: "Receita caseira com calda de caramelo.",
    imagem: "/produtos/pudim.jpg",
  },
  {
    nome: "🍫 Brownies",
    preco: "A partir de R$ 7,90",
    valor: 7.9,
    descricao: "Massa intensa e muito recheio.",
    imagem: "/produtos/brownies.jpg",
  },
];

export default function ProdutosDestaque() {
  const { adicionarItem } = useCarrinho();
  const [mensagem, setMensagem] = useState("");

  function adicionarAoCarrinho(produto: typeof produtos[0]) {
    adicionarItem({
      id: produto.nome,
      nome: produto.nome,
      preco: produto.valor.toString(),
      imagem: produto.imagem,
    });

    setMensagem("Produto adicionado!");

    setTimeout(() => {
      setMensagem("");
    }, 2000);
  }

  return (
    <section className="py-20 px-6 bg-[#FFF8F3]">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-[#5A321B] mb-3">
          Produtos em Destaque
        </h2>

        <p className="text-center text-gray-500 mb-12">
          Feitos artesanalmente com ingredientes selecionados.
        </p>

        {mensagem && (
          <div className="text-center mb-6 text-green-600 font-semibold">
            {mensagem}
          </div>
        )}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {produtos.map((produto) => (
            <div
              key={produto.nome}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >

              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold text-[#5A321B]">
                  {produto.nome}
                </h3>

                <p className="text-lg text-[#A45A32] font-semibold mt-3">
                  {produto.preco}
                </p>

                <p className="text-gray-600 mt-3">
                  {produto.descricao}
                </p>

                <button
                  onClick={() => adicionarAoCarrinho(produto)}
                  className="w-full mt-6 bg-[#5A321B] hover:bg-[#73442A] text-white py-3 rounded-xl transition"
                >
                  Adicionar ao Carrinho
                </button>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}