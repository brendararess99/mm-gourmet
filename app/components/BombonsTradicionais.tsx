import ImagemCategoria from "./ImagemCategoria";

export default function BombonsTradicionais() {
  const bombons = [
    "Maracujá",
    "Limão",
    "Coco",
    "Brigadeiro",
    "Uva",
    "Ninho",
    "Ele e Ela",
  ];

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
              <th className="p-4 text-left">Bombom</th>
              <th className="p-4 text-right">Unidade</th>
              <th className="p-4 text-right">Cento</th>
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

                <td className="p-4 text-right text-gray-700">
                  R$ 7,00
                </td>

                <td className="p-4 text-right font-bold text-[#5A321B]">
                  R$ 169,90
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