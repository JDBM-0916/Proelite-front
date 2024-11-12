import Image from 'next/image';

export default function ServicesForPeoples() {
  return (
    <div>

      <h2 className='py-14 text-[40px] leading-[50px] font-bold text-custom-yellow'><span className='text-custom-blue'>Servicios</span> para personas.</h2>

      <p><span className='font-semibold mt-10'>En Seguros Proelite</span>,  estamos comprometidos con brindar una atención personalizada que se ajuste a tus necesidades personales. Sabemos lo importante que es sentirte protegido y respaldado, por eso ofrecemos una variedad de servicios diseñados para proporcionarte la seguridad y la tranquilidad que mereces. Nuestro equipo está listo para asistirte en cada paso del proceso, asegurando que recibas el mejor apoyo posible en todo momento.</p>

      <div className='flex flex-grow gap-14 w-full h-[520px] mt-10'>
        <div className='w-[50%] h-full flex-col'>

          <Image
            src={'/img/images-services/Thumbnail.png'}
            alt={'Services for companies'}
            width={596}
            height={368}
          />

        </div>

        <div className='flex-col w-[50%] h-full'>
          <ul className='list-disc'>

            <li><span className='font-semibold'>Apoyo en trámite de reclamación a compañías:</span>  Te asistimos en la gestión de reclamaciones para asegurar un proceso rápido y eficiente.</li>

            <li><span className='font-semibold'>Atención y orientación en caso de siniestros:</span> Proporcionamos orientación y apoyo integral en situaciones de siniestros, garantizando que recibas la ayuda necesaria en momentos críticos.</li>

            <li><span className='font-semibold'>Atención personalizada de acuerdo a tus necesidades:</span> Ofrecemos un servicio personalizado que se adapta a tus necesidades y circunstancias específicas.</li>

            <li><span className="font-semibold"> Asesoría en coberturas y exclusiones:</span> Te guiamos en la selección de las coberturas adecuadas y te explicamos las exclusiones para que tomes decisiones informadas.</li>

            <li><span className="font-semibold">Diferentes modalidades de financiamiento:</span>  Proporcionamos diversas opciones de financiamiento para que puedas elegir la que mejor se ajuste a tu situación financiera.</li>
          </ul>
        </div>
      </div>

    </div>
  )
}