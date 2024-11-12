import { renderParagraph } from "@/functions/renderParagraph";
import TalkToAdvisor from "@/components/buttons/button-talk-to-advisor";


interface BlueCardProps {
  title: string;
  paragraph: string;
  highlightedText: string[];
  buttonText: string;
}

export default function BlueCard({ title, paragraph, highlightedText, buttonText }: BlueCardProps) {
  return (
    <div className="w-full max-h-[324px] my-14 bg-custom-blue text-custom-white rounded-3xl p-14 text-center justify-center">
      <h2 className="text-[48px] leading-[60px]">{title}</h2>
      <p className="my-4">{renderParagraph({ paragraph: paragraph, paragraphEnfasis: highlightedText })}</p>
      <div className="flex items-center justify-center">
        <TalkToAdvisor text={buttonText} link={'/'} />
      </div>
    </div>
  );
}
