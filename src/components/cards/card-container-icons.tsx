import Image from 'next/image';

interface IconsContainerProps {
  title: string;
  highlightedTitle: string;
  images: { src: string; alt: string }[];
  columns: number;
}

const IconsContainer = ({ title, highlightedTitle, images, columns }: IconsContainerProps) => {
  const widthPerItem = 100 / columns;

  return (
    <div className="w-full h-auto my-14 px-14">
      <h2 className="mb-6 text-center text-[32px] leading-[40px] font-semibold">
        {title} <strong className="text-custom-yellow">{highlightedTitle}</strong>
      </h2>

      {/* Contenedor de las imágenes */}
      <div className="flex flex-wrap justify-center items-center gap-10">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center relative"
            style={{ width: `${widthPerItem}%` }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={224}
              height={132}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconsContainer;
