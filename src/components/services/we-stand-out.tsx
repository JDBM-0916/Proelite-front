
import Image from 'next/image';

export default function WeStandOut() {
  return (
    <div className="my-10 flex-grow flex justify-center items-center font-semibold">

      <div className="flex w-[1005px] justify-between items-center h-full">

        <div className="flex flex-col w-[30%] h-[287px] justify-center items-center">
          <Image
            src={'/img/images-services/Logo-Proelite.png'}
            alt={'logo-proelite'}
            width={289}
            height={302}
          />
        </div>

        <div className="flex flex-col w-[70%] h-full justify-center">
          <h2 className="text-[36px] leading-[45px]">Nos destacamos por nuestra ética e integridad en todos los procesos de reclamación.</h2>
          <p className="text-[24px] leading-[30px] text-custom-yellow">Respaldados por más de 27 años de experiencia en el sector.</p>
        </div>

      </div>

    </div>

  )
}