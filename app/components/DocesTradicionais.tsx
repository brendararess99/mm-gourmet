import ImagemCategoria from "./ImagemCategoria";

export default function DocesTradicionais() {
  const doces = [
    "Brigadeiro",
    "Beijinho",
    "Cajuzinho",
    "Olho de Sogra",
    "Moranguinho",
    "Ele e Ela",
    "Brigadeiro de Paçoca",
    "Ninho",
    "Limaozinho",
  ];

  return (
    <section
      id="doces-tradicionais"
      className="max-w-6xl mx-auto py-20 px-6"
    >
      <h2 className="text-4xl font-bold text-[#5A321B] text-center mb-3">
        🍬 Doces Tradicionais
      </h2>

      <p className="text-center text-gray-500 mb-10">
        Sabores clássicos que fazem sucesso em qualquer festa.
      </p>

      <ImagemCategoria
        src="/produtos/doces-tradicionais.jpg"
        alt="Doces Tradicionais MM Gourmet"
      />

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#5A321B] text-white">
            <tr>
              <th className="p-4 text-left">Doce</th>
              <th className="p-4 text-right">Unidade</th>
              <th className="p-4 text-right">Cento</th>
            </tr>
          </thead>

          <tbody>
            {doces.map((doce) => (
              <tr key={doce} className="border-b last:border-none">
                <td className="p-4 font-semibold text-[#5A321B]">{doce}</td>
                <td className="p-4 text-right">R$ 4,00</td>
                <td className="p-4 text-right font-bold text-[#5A321B]">
                  R$ 99,90
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