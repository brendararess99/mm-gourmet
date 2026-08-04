export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5531992103486?text=Olá!%20Gostaria%20de%20fazer%20uma%20encomenda."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-28 right-6 bg-green-500 hover:bg-green-600 text-white px-5 py-4 rounded-full shadow-2xl transition-all duration-300 z-50"
      aria-label="Conversar no WhatsApp"
    >
      💬 WhatsApp
    </a>
  );
}