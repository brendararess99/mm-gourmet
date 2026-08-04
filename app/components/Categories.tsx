import { categorias } from "../data/produtos";
import Categoria from "./Categoria";

export default function Categories() {
  return (
    <>
      {categorias.map((categoria) => (
        <Categoria
          key={categoria.id}
          id={categoria.id}
          titulo={categoria.titulo}
          imagem={categoria.imagem}
        />
      ))}
    </>
  );
}