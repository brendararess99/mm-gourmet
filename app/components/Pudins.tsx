import ImagemCategoria from "./ImagemCategoria";

export default function Pudins() {
  const pudins = [
    {
      nome: "Mini pudim (100–120 ml)",
      preco: "R$ 7,90",
    },
    {
      nome: "Pudim tradicional (individual)",
      preco: "R$ 12,90",
    },
    {
      nome: "Pudim pequeno (500 g)",
      preco: "R$ 25,90",
    },
    {
      nome: "Pudim médio (1 kg)",
      preco: "R$ 49,90",
    },
    {
      nome: "Pudim grande (1,5 kg)",
      preco: "R$ 69,90",
    },
    {
      nome: "Pudim gourmet (Nutella, Ninho, doce de leite, etc.)",
      preco: "A partir de R$ 59,90",
    },
  ];

  return (
    <section
      id="pudins"
      className="max-w-6xl mx-auto py-20 px-6"
    >
      <h2 className="text-4xl font-bold text-[#5A321B] text-center mb-3">
        🍮 Pudins Artesanais
      </h2>

      <p className="text-center text-gray-500 mb-10">
        Receita caseira com calda de caramelo e muito sabor.
      </p>

      <ImagemCategoria
        src="/produtos/pudim.jpg"
        alt="Pudins Artesanais MM Gourmet"
      />

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

        <table className="w-full">

          <thead className="bg-[#5A321B] text-white">
            <tr>
              <th className="p-4 text-left">
                Produto
              </th>

              <th className="p-4 text-right">
                Preço
              </th>
            </tr>
          </thead>

          <tbody>
            {pudins.map((pudim) => (
              <tr
                key={pudim.nome}
                className="border-b last:border-none"
              >
                <td className="p-4 font-semibold text-[#5A321B]">
                  {pudim.nome}
                </td>

                <td className="p-4 text-right font-bold text-[#5A321B]">
                  {pudim.preco}
                </td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>

      <a
        href="https://wa.me/5531992103486"
        target="_blank"
        className="mt-8 inline-block bg-[#5A321B] hover:bg-[#73442A] text-white px-8 py-4 rounded-full transition"
      >
        Fazer Encomenda
      </a>

    </section>
  );
}