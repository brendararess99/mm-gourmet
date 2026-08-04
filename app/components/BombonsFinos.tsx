import ImagemCategoria from "./ImagemCategoria";

export default function BombonsFinos() {
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
              <th className="p-4 text-left">Bombom</th>
              <th className="p-4 text-right">Unidade</th>
              <th className="p-4 text-right">Cento</th>
            </tr>
          </thead>

          <tbody>
            {bombons.map((bombom) => (
              <tr key={bombom} className="border-b last:border-none">
                <td className="p-4 font-semibold text-[#5A321B]">
                  {bombom}
                </td>
                <td className="p-4 text-right">R$ 9,00</td>
                <td className="p-4 text-right font-bold text-[#5A321B]">
                  R$ 199,90
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