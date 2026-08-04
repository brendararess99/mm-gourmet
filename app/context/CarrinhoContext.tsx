"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export interface ItemCarrinho {
  id: string;
  nome: string;
  preco: string;
  imagem: string;
  quantidade: number;
}

interface CarrinhoContextType {
  itens: ItemCarrinho[];
  adicionarItem: (item: Omit<ItemCarrinho, "quantidade">) => void;
  removerItem: (id: string) => void;
  aumentarQuantidade: (id: string) => void;
  diminuirQuantidade: (id: string) => void;
  limparCarrinho: () => void;
}

const CarrinhoContext = createContext({} as CarrinhoContextType);

export function CarrinhoProvider({ children }: { children: ReactNode }) {
  const [itens, setItens] = useState<ItemCarrinho[]>([]);

  function adicionarItem(item: Omit<ItemCarrinho, "quantidade">) {
    setItens((atual) => {
      const existe = atual.find((i) => i.id === item.id);

      if (existe) {
        return atual.map((i) =>
          i.id === item.id
            ? { ...i, quantidade: i.quantidade + 1 }
            : i
        );
      }

      return [...atual, { ...item, quantidade: 1 }];
    });
  }

  function removerItem(id: string) {
    setItens((atual) => atual.filter((i) => i.id !== id));
  }

  function aumentarQuantidade(id: string) {
    setItens((atual) =>
      atual.map((i) =>
        i.id === id
          ? { ...i, quantidade: i.quantidade + 1 }
          : i
      )
    );
  }

  function diminuirQuantidade(id: string) {
    setItens((atual) =>
      atual
        .map((i) =>
          i.id === id
            ? { ...i, quantidade: i.quantidade - 1 }
            : i
        )
        .filter((i) => i.quantidade > 0)
    );
  }

  function limparCarrinho() {
    setItens([]);
  }

  return (
    <CarrinhoContext.Provider
      value={{
        itens,
        adicionarItem,
        removerItem,
        aumentarQuantidade,
        diminuirQuantidade,
        limparCarrinho,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}

export function useCarrinho() {
  return useContext(CarrinhoContext);
}