interface ImagemCategoriaProps {
  src: string;
  alt: string;
}

export default function ImagemCategoria({
  src,
  alt,
}: ImagemCategoriaProps) {
  return (
    <div className="mb-10 overflow-hidden rounded-3xl shadow-xl aspect-[4/3]">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
}