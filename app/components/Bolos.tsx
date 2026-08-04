import ImagemCategoria from "./ImagemCategoria";
export default function Bolos() {
  const tamanhos = [
    { peso: "1 kg", serve: "10 a 15 pessoas", preco: "R$ 89,90" },
    { peso: "2 kg", serve: "20 a 25 pessoas", preco: "R$ 149,90" },
    { peso: "3 kg", serve: "30 a 35 pessoas", preco: "R$ 199,90" },
    { peso: "4 kg", serve: "40 a 45 pessoas", preco: "R$ 239,90" },
    { peso: "5 kg", serve: "50 a 55 pessoas", preco: "R$ 329,90" },
    { peso: "6 kg", serve: "60 a 65 pessoas", preco: "R$ 419,90" },
    { peso: "8 kg", serve: "80 a 85 pessoas", preco: "R$ 599,90" },
    { peso: "10 kg", serve: "100 a 105 pessoas", preco: "R$ 779,90" },
  ];

  return (
    <section id="bolos" className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-4xl font-bold text-[#5A321B] text-center mb-3">
        🍰 Bolos
      </h2>

      <p className="text-center text-gray-500 mb-10">
        Escolha o tamanho ideal para sua comemoração.
      </p>
      <ImagemCategoria
       src="/produtos/bolo-brigadeiro.jpg"
       alt="Bolo brigadeiro MM Gourmet"
      />
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

        <table className="w-full">

          <thead className="bg-[#5A321B] text-white">

            <tr>
              <th className="p-4 text-left">Peso</th>
              <th className="p-4 text-left">Serve</th>
              <th className="p-4 text-right">Preço</th>
            </tr>

          </thead>

          <tbody>

            {tamanhos.map((bolo) => (

              <tr
                key={bolo.peso}
                className="border-b last:border-none"
              >

               <td className="p-4 font-semibold text-[#5A321B]">
               {bolo.peso}
              </td>

              <td className="p-4 text-gray-700">
              {bolo.serve}
              </td>

                <td className="p-4 text-right font-bold text-[#5A321B]">
                  {bolo.preco}
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