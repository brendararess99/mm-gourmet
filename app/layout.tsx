import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { CarrinhoProvider } from "./context/CarrinhoContext";
import Carrinho from "./components/Carrinho";
import WhatsAppButton from "./components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MM Gourmet",
  description: "Confeitaria Artesanal",
};

const linkBrenda =
  "https://wa.me/5531988305652?text=Ol%C3%A1%2C%20Brenda%21%20Vi%20seu%20trabalho%20no%20site%20da%20MM%20Gourmet%20e%20gostaria%20de%20saber%20mais%20sobre%20cria%C3%A7%C3%A3o%20de%20sites.";

function LinkBrenda() {
  return (
    <a
      href={linkBrenda}
      target="_blank"
      rel="noopener noreferrer"
      className="font-bold underline decoration-[#8B5E3C] decoration-2 underline-offset-2 text-[#8B5E3C] hover:text-[#5A321B] transition-colors cursor-pointer"
    >
      Brenda Loyola Presença Digital
    </a>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        <CarrinhoProvider>

          {/* Assinatura no início */}
          <div className="w-full bg-[#8B5E3C]/10 border-y border-[#8B5E3C]/30 py-3 text-center text-sm font-medium text-[#8B5E3C]">
            ✨ Site desenvolvido por{" "}
            <LinkBrenda />
          </div>

          {/* Conteúdo do site */}
          {children}

          {/* Rodapé */}
          <footer className="w-full bg-[#8B5E3C]/10 border-y border-[#8B5E3C]/30 py-5 text-center">
            <p className="text-sm font-medium text-[#8B5E3C]">
              Site desenvolvido por{" "}
              <LinkBrenda /> ✨
            </p>
          </footer>

          {/* Carrinho */}
          <Carrinho />

          {/* WhatsApp da MM Gourmet - pedidos */}
          <WhatsAppButton />

        </CarrinhoProvider>

      </body>
    </html>
  );
}