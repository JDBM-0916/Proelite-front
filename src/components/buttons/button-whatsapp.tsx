import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";

export default function WhatsAppButton({ phoneNumber = "000000000" }) {
  const whatsappUrl = `https://wa.me/${phoneNumber}`

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed top-[600px] right-[120px] bg-white text-green-500 rounded-full  z-50 flex items-center justify-center"
      aria-label="Contactar por WhatsApp"
    >
      <IoLogoWhatsapp size={63.5} className="" />
    </Link>
  )
}