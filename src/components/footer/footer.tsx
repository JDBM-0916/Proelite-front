import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import Image from 'next/image';

export default function FooterComponent() {
  return (
    <div className='pt-16 '>

      <hr className='bg-[#172755] p-[1px] mb-14' />

      <div className="flex items-center justify-between bg-transparent mx-auto px-4">
        <Link href="/" className="relative w-[201.83px] h-14">
          <Image
            src={'/icons/general-icons/logo-proelite-azul.png'}
            height={40}
            width={144.17}
            alt='logo image'
          />
        </Link>

        <button className="bg-transparent items-center">
          ProElite2024 © All Rights Reserved
        </button>

        <div className="flex items-center gap-6">
          <Link href="https://www.facebook.com/SegurosProelite/" className="">
            <FaFacebook size={32} />
          </Link>
          <Link href="https://www.linkedin.com/company/proseguros-erg/" className="">
            <SiLinkedin size={32} />
          </Link>

          <Link href="https://www.instagram.com/proseguroserg/?igsh=cjU3bmdkbHU5emg3&utm_source=qr" className="">
            <FaInstagram size={32} />
          </Link>
        </div>
      </div>
    </div>
  );
}
