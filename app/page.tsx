import Header from "./components/Header";
import Hero from "./components/Hero";
import MenuCategorias from "./components/MenuCategorias";
import ProdutosDestaque from "./components/ProdutosDestaque";
import BoloEmFatia from "./components/BoloEmFatia";
import WhatsAppButton from "./components/WhatsAppButton";
import Bolos from "./components/Bolos";
import Kits from "./components/Kits";
import DocesTradicionais from "./components/DocesTradicionais";
import DocesGourmet from "./components/DocesGourmet";
import BombonsTradicionais from "./components/BombonsTradicionais";
import BombonsFinos from "./components/BombonsFinos";
import Pudins from "./components/Pudins";
import Brownies from "./components/Brownies";

export default function Home() {
  return (
    <main className="bg-[#F7F0EA]">
      <Header />
      <Hero />
      <MenuCategorias />
      <ProdutosDestaque />

      {/* Bolo em Fatia */}
      <BoloEmFatia />

      <Bolos />
      <Kits />
      <DocesTradicionais />
      <DocesGourmet />
      <BombonsTradicionais />
      <BombonsFinos />
      <Pudins />
      <Brownies />

      <WhatsAppButton />
    </main>
  );
}