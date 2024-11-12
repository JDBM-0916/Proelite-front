import { renderParagraph } from '@/functions/renderParagraph';
import Image from 'next/image';

interface CardProps {
  title: string;
  highlightedText: string;
  paragraph1: string;
  paragraph1Highlights: string[];
  paragraph2?: string;
  paragraph2Highlights?: string[];
  buttonText: string;
  imageSrc: string;
}

const MainCard = ({
  title,
  highlightedText,
  paragraph1,
  paragraph1Highlights,
  paragraph2,
  paragraph2Highlights,
  buttonText,
  imageSrc,
}: CardProps) => {
  
  return (
    <div className='w-full justify-center flex min-h-[512px] mt-14 gap-14'>
      <div className="flex flex-col w-[786px]">
        <h2 className='text-[60px] leading-[80px] font-semibold'>
          {title}<br />
          <span className='text-custom-yellow font-bold'>{highlightedText}</span>
        </h2>

        <p className='pt-6'>
          {renderParagraph({ paragraph: paragraph1, paragraphEnfasis: paragraph1Highlights })}
        </p>

        {paragraph2 && (
          <p className="my-4">
            {paragraph2Highlights
              ? renderParagraph({ paragraph: paragraph2, paragraphEnfasis: paragraph2Highlights })
              : paragraph2
            }
          </p>
        )}

        <button className="w-[289px] h-12 bg-custom-yellow rounded-lg flex gap-3 px-4 mt-6 py-3">
          <p>{buttonText}</p>
          <Image
            src={'/icons/general-icons/flecha-pequena-derecha.png'}
            alt="arrow icon"
            height={24}
            width={24} />
        </button>
      </div>

      <div className="flex-col w-[596px] relative">
        <Image
          src={imageSrc}
          alt="Example image"
          width={596}
          height={512}
        />
      </div>

    </div>
  );
};

export default MainCard;
