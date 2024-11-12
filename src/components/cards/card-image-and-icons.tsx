import Image from "next/image";


interface CardImageAndIconsProps {
  textBlue: string;
  textYellow: string;
  imageSrc: string;
  width: number;
  height: number;
  icons: { src: string; alt: string; label: string }[];
}

export default function CardImageAndIcons({ textBlue, textYellow, imageSrc, icons, width, height }: CardImageAndIconsProps) {

  return (
    <div className='w-full h-[464px] flex flex-grow justify-center items-center my-20'>
      <div className='flex flex-col w-[752px] '>
        <Image
          src={imageSrc}
          alt={'fondo imagen'}
          width={width}
          height={height}
        />
      </div>

      <div className='flex flex-col w-[50%] pl-14'>
        <h1 className='text-[32px] leading-[40px] font-semibold '> {textBlue} <span className='text-custom-yellow'>{textYellow}</span></h1>

        <div className="space-y-4 mt-4">
          {icons.map((option, index) => (
            <div key={index} className="flex space-x-2 mb-2">
              <Image
                src={option.src}
                alt={option.alt}
                width={24}
                height={24}
              />
              <p className="text-[20px] font-semibold">{option.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}