import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import ImageBackgroundCard from "@/components/cards/card-background-image";
import CardImageItems from "@/components/cards/card-image-items";
import CenterCard from "@/components/cards/card-main-centered";
import IconsContainer from "@/components/cards/card-container-icons";
import BlueCard from "@/components/cards/card-blue-background";
import PaymentMethods from "@/components/cards/card-payment-method";
import CardImageAndIcons from '@/components/cards/card-image-and-icons';

import { TRANSPORT_OPTIONS } from '@/const/const-routes-icons-cards';
import { TO_WHO_VA_ITS_THIS_TRANSPORT_INSURANCE } from "@/const/const-information-types-of-insurance";
import { ICONS_INSURANCE_TRANSPORTATION } from "@/const/const-routes-icons-cards";



export default function SeguroDeTransporte() {
  return (
    <div>
      <Breadcrumb currentPageName='Seguro de Transporte' />
      <CenterCard
        insuranceTypeText='transporte'
        paragraph='En Seguros Proelite, entendemos la importancia de proteger tus bienes durante su transporte. Nuestro seguro de transporte no solo te ofrece tranquilidad y seguridad en cada etapa del proceso, sino que también se adapta a las necesidades específicas de cada cliente. Brindamos cotizaciones personalizadas para garantizar que obtengas la mejor cobertura posible, hecha a medida para ti.'
        highlightedText={[
          'Seguros Proelite',
          'Brindamos cotizaciones personalizadas para garantizar que obtengas la mejor cobertura posible, hecha a medida para ti.'
        ]}
        backgroundImage={'/img/images-insurance-transport/fondoPrincipal.png'}
      />

      <h2 className='text-[32px] leading-[40px] font-semibold text-center mt-20'>
        <span className='text-custom-yellow'>¿Para quién</span> va dirigido este seguro de Transporte?
      </h2>

      <CardImageItems
        insuranceTypes={TO_WHO_VA_ITS_THIS_TRANSPORT_INSURANCE}
        textVisible={false}
      />

      <CardImageAndIcons
        textBlue={"Transporte."}
        textYellow={""}
        imageSrc={"/img/images-insurance-transport/Left.png"}
        width={752}
        height={587}
        icons={TRANSPORT_OPTIONS} />

      <ImageBackgroundCard
        bgImage={'/img/images-insurance-transport/fondo-card.png'}
        titlePart2={'Envía tu mercancía de forma segura.'}
        content={'Nos adaptamos a las necesidades y requisitos específicos de tu empresa para garantizar una cobertura completa y personalizada.'}
      />

      <IconsContainer
        title={'Protégete ante:'}
        highlightedTitle={''}
        images={ICONS_INSURANCE_TRANSPORTATION}
        columns={5}
      />

      <BlueCard
        title={'¿Quieres conocer más?'}
        paragraph={'Protegemos tu mercancía en Colombia para envíos hacia y desde cualquier lugar del mundo.'}
        highlightedText={[]}
        buttonText={'Contáctanos'}
      />

      <PaymentMethods
        showImage={false}
      />

    </div>
  );
}
