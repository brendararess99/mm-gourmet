import ImagemCategoria from "./ImagemCategoria";

export default function Kits() {
  const kits = [
    { nome: "Kit 1", itens: "Bolo simples 1,5 kg + 50 doces", preco: "R$ 139,90" },
    { nome: "Kit 2", itens: "Bolo temático 1,5 kg + 50 doces", preco: "R$ 174,90" },
    { nome: "Kit 3", itens: "Bolo simples 2,5 kg + 100 doces", preco: "R$ 244,90" },
    { nome: "Kit 4", itens: "Bolo temático 2,5 kg + 100 doces", preco: "R$ 269,90" },
];

  return (
    <section id="kit-festa" className="max-w-6xl mx-auto py-20 px-6">

      <h2 className="text-4xl font-bold text-[#5A321B] text-center mb-3">
        🎉 Kit Festa
      </h2>

      <p className="text-center text-gray-500 mb-10">
        Kits de bolo e doces preparados para sua comemoração.
      </p>

      <div className="mb-10 overflow-hidden rounded-3xl shadow-xl">
        <ImagemCategoria
         src="/produtos/kit-festa.jpg"
         alt="Kit Festa MM Gourmet"
        />
      </div>

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

        <table className="w-full">

          <thead className="bg-[#5A321B] text-white">

            <tr>
              <th className="p-4 text-left">Kit</th>
              <th className="p-4 text-left">Conteúdo</th>
              <th className="p-4 text-right">Preço</th>
            </tr>

          </thead>

          <tbody>

            {kits.map((kit) => (

              <tr
                key={kit.nome}
                className="border-b last:border-none"
              >

                <td className="p-4 font-semibold text-[#5A321B]">
                  {kit.nome}
                </td>

                <td className="p-4 text-gray-700">
                  {kit.itens}
                </td>

                <td className="p-4 text-right font-bold text-[#5A321B]">
                  {kit.preco}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      <a
        href="https://wa.me/5531992103486"
        target="_blank"
        className="mt-8 inline-block bg-[#5A321B] text-white px-8 py-4 rounded-full"
      >
        Fazer Encomenda
      </a>

    </section>
  );
}