
import { INSURANCE_ICONS } from '@/const/const-routes-icons-cards';
import Image from 'next/image';
import IconsContainer from '../cards/card-container-icons';

export default function ContentHome() {
  return (
    <div>
      <div className='mb-10 h-[122px]'>
        <p className='text-[40px] leading-[50px] font-bold '>
          Asesoría y venta de <span className='text-custom-yellow'>seguros</span>
        </p>
        <p>
          En <span className='font-bold'>Seguros Proelite</span>, nos especializamos en ofrecer un servicio integral de asesoría y venta de seguros, adaptado a las necesidades específicas de cada cliente. Nuestra misión es brindarte la protección que necesitas, con la tranquilidad de saber que estás en manos de profesionales.
        </p>
      </div>

      <div className='flex h-[464px] mt-14'>
        <div className="flex flex-col justify-center w-[50%] h-full">

          <h2 className='text-start text-[40px] leading-[50px] font-semibold'>¿Qué ofrecemos?</h2>

          <ul className="list-disc p-6 text-justify">
            <li>
              <span className='font-bold'>Asesoramiento Personalizado</span>: Nuestros expertos están comprometidos en entender tus necesidades y proporcionarte soluciones a la medida.
            </li>
            <li>
              <span className='font-bold'>Variedad de Opciones:</span>  Gracias a nuestras alianzas con 8 de las mejores compañías aseguradoras, te ofrecemos una amplia gama de productos y coberturas.
            </li>
            <li>
              <span className='font-bold'>Proceso Simplificado:</span> Te guiamos en cada paso del proceso, desde la selección del seguro adecuado hasta la suscripción y reclamación.
            </li>
            <li>
              <span className='font-bold'>Atención Continua:</span> Nuestro apoyo no termina con la venta. Estamos aquí para asistirte siempre que lo necesites, asegurando que tu experiencia con nosotros sea satisfactoria y sin complicaciones.
            </li>
          </ul>
        </div>

        <div className="flex-col ml-6 w-[50%] relative">
          <Image
            src="/img/images-home/Left.png"
            alt="Imagen ejemplo"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>

      <div className='flex h-[464px] mt-14'>

        <div className="flex-col mr-6 w-[50%] relative">
          <Image
            src="/img/images-home/Rectangle.png"
            alt="Imagen ejemplo"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="flex flex-col items-center justify-center ml-6 w-[50%] h-full text-justify ">
          <h2 className='text-[40px] leading-[50px] font-semibold'>Nuestro <b className='text-custom-yellow'>compromiso.</b></h2>

          <p className='pt-6'>
            En <span className='font-bold'>Seguros Proelite</span>, valoramos la confianza que depositas en nosotros. Nos esforzamos por ofrecer un servicio de calidad, donde cada cliente es importante y merece la mejor atención. Ya sea que busques un seguro de vida, empresarial, vehículo, o cualquier otro tipo de seguro, estamos aquí para ayudarte a tomar la mejor decisión.
          </p>
        </div>
      </div>

      <div className='flex h-[316px] mt-14'>
        <div className="flex flex-col items-start justify-center ml-6 w-[50%] h-full text-justify ">
          <h2 className='text-[40px] leading-[50px] font-semibold'>Nuestros clientes.</h2>

          <p className='pr-14'>
            Nos enorgullece trabajar con una variedad de clientes destacados que confían en nuestros servicios. Aquí algunos de ellos:
          </p>
        </div>
        <div className="flex-col mr-6 w-[50%] relative">
          <Image
            src="/img/images-home/bancos.png"
            alt="Imagen ejemplo"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>

      <div className='mt-14 h-[167px]'>
        <p className='text-[40px] leading-[50px] font-bold mb-10'>
          <span className='font-bold'>Nuestros aliados:</span>
        </p>
        {/* Aseguradoras */}
        <IconsContainer
          title=""
          highlightedTitle={''}
          images={INSURANCE_ICONS}
          columns={11}
        />
      </div>
    </div>
  );
}
