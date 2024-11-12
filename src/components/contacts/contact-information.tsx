import Image from 'next/image';

export default function ContactsInformation() {
  return (
    <div className="w-full h-full flex flex-wrap  py-14 mt-10">

      <div className="flex-col w-[40%]">
        <h2 className="text-[64px] leading-[80px] font-semibold">Contactanos</h2>
      </div>

      <div className="flex-col w-[30%]">
        <div className="flex h-[24px] mb-3">
          <Image
            src={'/img/images-contact/ubicacion.png'}
            alt=''
            width={24}
            height={24}
            className='mr-1'
          />
          <p className="text-[20px] leading-[30px] font-semibold">Dirección:</p>
        </div>
        <ul className="ml-7">
          <li>Bogotá, Colombia.</li>
          <li>Calle 60 # 9- 83 oficina 231 </li>
          <li>Calle 60 # 9- 83 oficina 231</li>
          <li>Centro comercial Aquiarium barrio</li>
          <li>Chapinero</li>
        </ul>
      </div>

      <div className="flex-col w-[30%] ">
        <div className="flex h-[24px] mb-3">
          <Image
            src={'/img/images-contact/telefono.png'}
            alt=''
            width={24}
            height={24}
            className='mr-1'
          />
          <p className="text-[20px] leading-[30px] font-semibold">Teléfono:</p>
        </div>

        <ul className="ml-7">
          <li>Teléfonos:</li>
          <li>Oficina (601) 6797373</li>
          <li>3106079364</li>
          <li>3106260710</li>
          <li>3058576400</li>
        </ul>
      </div>
    </div>
  )
}