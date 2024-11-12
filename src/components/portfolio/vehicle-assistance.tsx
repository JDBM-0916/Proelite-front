import Image from 'next/image';

interface AssistanceVehicleProps {
  title: string;
  highlightedTitle: string; 
  images: { src: string; alt: string }[]; 
}

const AssistanceVehicle = ({ title, highlightedTitle, images }: AssistanceVehicleProps) => {
  return (
    <div className="w-full justify-center flex mx-auto h-[292px] my-14 gap-14">

      {/* Title */}
      <div className="flex flex-col text-center justify-center w-[612px] h-full">
        <h2 className="text-[32px] leading-[40px] font-semibold">
          {title} <strong className="text-custom-yellow">{highlightedTitle}</strong>
        </h2>
      </div>

      {/* Images Container */}
      <div className="flex flex-wrap justify-center h-[292px] items-center w-[]">
        {images.map((image, index) => ( // Cambiado de imagen
          <div key={index} className="flex flex-col justify-center items-center w-[50%]">
            <Image
              src={image.src} // Cambiado de imagen.src
              alt={image.alt} // Cambiado de imagen.alt
              width={196}
              height={136}
            />
          </div>
        ))}
      </div>

    </div>
  );
};

export default AssistanceVehicle;
