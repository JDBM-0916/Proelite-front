import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import MainCard from '@/components/cards/card-main';
import { ADDITIONAL_BUSINESS_PROTECTIONS, ICONS_PROTECT_HERITAGE_PARTNERS, ICONS_TO_WHO_ITS_ADDRESSED_ICONS, WHAT_WE_PROTECT } from '@/const/const-routes-icons-cards';
import IconsContainer from '@/components/cards/card-container-icons';
import ImageBackgroundCard from '@/components/cards/card-background-image';
import CardImageAndIcons from '@/components/cards/card-image-and-icons';
import BlueCard from '@/components/cards/card-blue-background';
import PaymentMethods from '@/components/cards/card-payment-method';

export default function Bussiness_insurance() {
  return (
    <>
      <Breadcrumb currentPageName='Seguro Empresarial o para Negocios' />

      <MainCard
        title={'Seguros empresariales o'}
        highlightedText={'para tu negocio.'}
        paragraph1={'En Seguros Proelite sabemos que la protección es esencial para garantizar la estabilidad y el crecimiento de tu empresa. Con nuestro Seguro Empresarial, ofrecemos una sólida defensa para tu negocio. Desde la protección de tus bienes y enseres, hasta la protección de tus edificios y mercancías, nuestra cobertura integral está diseñada para abordar todas las áreas críticas de tu empresa.'}
        paragraph1Highlights={[
          'Seguros Proelite',
          'ofrecemos una sólida defensa para tu negocio'
        ]}
        buttonText={'Hablar con un asesor ahora'}
        imageSrc={'/img/images-business-insurance/fondo-card-principal.png'} />

      <CardImageAndIcons

        textBlue={'¿Para quiénes'}
        textYellow={'está dirigido este seguro?'}
        imageSrc={'/img/images-business-insurance/Left.png'}
        width={752}
        height={464}
        icons={ICONS_TO_WHO_ITS_ADDRESSED_ICONS}
      />

      <h2 className='text-center justify-center text-[32px] leading-[40px] font-semibold mt-10'>
        <span className='text-custom-yellow'>Protege tu patrimonio y el de tus socios </span> ante eventos no previstos.
      </h2>

      <IconsContainer
        title={''}
        highlightedTitle={''}
        images={ICONS_PROTECT_HERITAGE_PARTNERS}
        columns={5}
      />

      <ImageBackgroundCard
        bgImage={'/img/images-business-insurance/fondo-card.png'}
        titlePart1={''}
        titlePart2={'Realizamos la inspección de tu negocio y damos recomendaciones de alto valor.'}
        content={''} />


      <CardImageAndIcons
        textBlue={'Protegemos:'}
        textYellow={''}
        imageSrc={'/img/images-business-insurance/Thumbnail.png'}
        width={596}
        height={512}
        icons={WHAT_WE_PROTECT}
      />

      <IconsContainer
        title={'Contamos con'}
        highlightedTitle={'amparos adicionales'}
        images={ADDITIONAL_BUSINESS_PROTECTIONS}
        columns={4}
      />

      <BlueCard
        title={'¿Quieres conocer más?'}
        paragraph={'No dejes la seguridad de tu negocio al azar. Protege tu empresa con Seguros Proelite hoy mismo. Contáctanos para una consulta personalizada y descubre cómo podemos adaptar nuestra cobertura a las necesidades específicas de tu negocio.¡Asegura el futuro de tu empresa hoy mismo con Seguros Proelite!'}
        highlightedText={[
          'No dejes la seguridad de tu negocio al azar.',
          'Seguros Proelite',
          '¡Asegura el futuro de tu empresa hoy mismo con Seguros Proelite!'
        ]}
        buttonText={'Habla con un Asesor Ahora'}
      />
      
      <PaymentMethods showImage={false}/>

    </>
  )
}

