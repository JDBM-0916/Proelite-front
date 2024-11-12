import Image from 'next/image';
import Link from 'next/link';

interface TalkToAdvisorProps {
  text: string;
  link: string;
}

export default function TalkToAdvisor({ text, link }: TalkToAdvisorProps) {
  return (
    <Link href={link}>
      <button className="bg-custom-yellow justify-center text-custom-blue font-semibold py-2 px-4 rounded-lg flex items-centerh-[48px]">
        {text}
        <Image
          src="/icons/general-icons/flecha-pequena-derecha.png"
          alt="arrow icon"
          height={24}
          width={24}
          className="mx-2"
        />
      </button>
    </Link>
  );
}
