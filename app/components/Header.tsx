export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#FFF8F3]/95 backdrop-blur-md border-b border-[#E8D7CA]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <div>
          <h1 className="text-3xl font-bold text-[#5A321B]">
            MM Gourmet
          </h1>

          <p className="text-sm text-gray-500">
            Confeitaria Artesanal
          </p>
        </div>

        <nav className="hidden md:flex gap-6 text-[#5A321B] font-medium">
          <a href="#bolos" className="hover:text-[#A45A32]">Bolos</a>
          <a href="#kit-festa" className="hover:text-[#A45A32]">Kit Festa</a>
          <a href="#doces-tradicionais" className="hover:text-[#A45A32]">Doces</a>
          <a href="#bombons-finos" className="hover:text-[#A45A32]">Bombons</a>
        </nav>

        <a
          href="https://wa.me/5531992103486"
          target="_blank"
          className="bg-[#5A321B] hover:bg-[#73442A] text-white px-5 py-3 rounded-full transition"
        >
          Encomendar
        </a>

      </div>
    </header>
  );
}