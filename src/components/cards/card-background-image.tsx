import TalkToAdvisor from '../buttons/button-talk-to-advisor';

interface ImageBackgroundCardProps {
  bgImage: string;
  titlePart1?: string;
  titlePart2: string;
  content: string;
}

export default function ImageBackgroundCard({
  bgImage,
  titlePart1,
  titlePart2,
  content,
}: ImageBackgroundCardProps) {
  return (
    <div className="w-full mx-auto ">
      <div
        className="relative h-full overflow-hidden p-14 justify-center rounded-3xl bg-cover bg-top"
        style={{
          maxHeight: 486,
          backgroundImage: `url(${bgImage})`,
        }}
      >
        {/* Blue overlay */}
        <div className="absolute inset-0 max-h-[486px] bg-[#172755CC] bg-opacity-80"></div>

        {/* Content */}
        <div className="relative z-10 p-6 text-white w-[55%] h-full">
          <h2 className="text-[40px] leading-[50px] font-semibold mb-2">
            {titlePart1 && <span className="text-custom-yellow">{titlePart1}</span>}
            <span> {titlePart2}</span>
          </h2>

          <p className="mb-6 font-light">{content}</p>

          <TalkToAdvisor text="Hablar con un Asesor ahora" link={'/'} />
        </div>
      </div>
    </div>
  );
}
