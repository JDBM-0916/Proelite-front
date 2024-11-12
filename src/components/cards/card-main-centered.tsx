
import { renderParagraph } from "@/functions/renderParagraph";
import TalkToAdvisor from "../buttons/button-talk-to-advisor";
import Image from 'next/image';

interface CenterCardProps {
  insuranceTypeText: string;
  paragraph: string;
  highlightedText: string[];
  backgroundImage: string;
}

export default function CenterCard({ insuranceTypeText, paragraph, highlightedText, backgroundImage }: CenterCardProps) {
  return (
    <div className='w-full max-h-[872px] justify-center text-center flex flex-wrap space-y-5'>
      <div className="flex-col w-[100%]">
        <h2 className='text-[64px] leading-[80px] font-bold'>
          Seguro <br />
          de <span className='text-custom-yellow'>{insuranceTypeText}.</span>
        </h2>

        <p className='my-5'>{renderParagraph({ paragraph: paragraph, paragraphEnfasis: highlightedText })}</p>

        <div className="flex items-center justify-center">
          <TalkToAdvisor text='Hablar con un asesor ahora' link='/' />
        </div>
      </div>

      <div className="flex-col w-[100%] ">
        <Image src={backgroundImage} alt='img principal' width={1248} height={512} />
      </div>
    </div>
  );
}
