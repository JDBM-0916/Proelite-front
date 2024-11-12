import Image from 'next/image';
export default function ServicesForCompanies() {
  return (
    <div>

      <h2 className='py-14 text-[40px] leading-[50px] font-bold'><span className='text-custom-yellow'>Servicios</span> para empresas.</h2>

      <p> <span className='font-semibold mt-10'>En Seguros Proelite</span>, nos enfocamos en proporcionar servicios especializados para cubrir las necesidades únicas de tu empresa y proteger tus activos más preciados. Nuestro compromiso es ofrecerte una atención personalizada y soluciones a medida que se ajusten a tus requerimientos específicos, garantizando la seguridad y el éxito continuo de tu negocio.</p>

      <div className='flex flex-grow gap-14 w-full h-[520px] mt-10'>
        <div className='flex-col w-[50%] h-full'>
          <ul className='list-disc'>

            <li><span className='font-semibold'>Diseño de programas de seguros personalizados:</span> Desarrollamos programas de seguros personalizados que se ajusten a las necesidades específicas de tu empresa, garantizando una protección integra y eficaz.</li>

            <li><span className='font-semibold'> Apoyo en trámites de reclamación a compañías:</span> Gestionamos y facilitamos el proceso de reclamaciones ante las compañías aseguradoras, comprometidos con una respuesta rápida y eficiente.</li>

            <li><span className='font-semibold'>Aviso de vencimiento de pólizas:</span> Mantenemos informado sobre los vencimientos de tus pólizas para evitar lapsos de no cobertura y asegurar la continuidad de tus seguros.</li>

            <li><span className="font-semibold">Asesoramiento para una buena suscripción de la póliza:</span> Te ofrecemos orientación experta para suscribir pólizas que se ajusten a las necesidades específicas de tu empresa, garantizando una cobertura adecuada y competitiva.</li>

            <li><span className="font-semibold">Asesoría en coberturas, valores asegurados y exclusiones:</span> Nuestros expertos te guiarán en la selección de las coberturas adecuadas, los valores asegurados que mejor se adapten a tu situación empresarial.  y las posibles exclusiones que puedan presentar tus pólizas.</li>

            <li><span className="font-semibold">Cotización en varias aseguradoras:</span> Compararemos las opciones disponibles en varias aseguradoras para proporcionarte las mejores tarifas y condiciones de cobertura para tus seguros empresariales.</li>
          </ul>
        </div>
        <div className='w-[50%] h-full flex-col'>

          <Image
            src={'/img/images-services/Left.png'}
            alt={'Services for companies'}
            width={596}
            height={368}
          />

        </div>
      </div>

    </div>
  )
}