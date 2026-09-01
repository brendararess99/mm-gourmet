import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full">
      <Image
        src="/imagens/capa-nova-1.png"
        alt="MM Gourmet"
        width={1200}
        height={900}
        priority
        className="w-full h-auto"
      />
    </section>
  );
}