import ServicesForCompanies from '@/components/services/services-for-companies';
import ServicesForPeoples from '@/components/services/services-for-peoples';
import ImageBackgroundCard from '@/components/cards/card-background-image';
import CardImageItems from '@/components/cards/card-image-items';

import { INFORMAION_SERVICES_CARDS } from '@/const/const-information-types-of-insurance';
import WeStandOut from '@/components/services/we-stand-out';
import BlueCard from '@/components/cards/card-blue-background';

export default function ServicesPage() {
  return (

    <>
      <ServicesForCompanies />

      <ServicesForPeoples />

      <ImageBackgroundCard
        titlePart2={'Atención personalizada en siniestros.'}
        content={'En Seguros Proelite, sabemos que un siniestro puede ser una situación difícil y estresante. Por eso, nos comprometemos a brindarte una atención personalizada y un acompañamiento integral durante todo el proceso de reclamación. Nuestro objetivo es facilitarte cada paso y asegurarnos de que recibas el apoyo y la orientación que necesitas para resolver tu siniestro de manera rápida y efectiva.'}
        bgImage={'img/images-services/imagen-fondo.png'}
      />

      <CardImageItems
        insuranceTypes={INFORMAION_SERVICES_CARDS}
        textVisible={false}
      />

      <WeStandOut />


      <BlueCard
        title={'¿Quieres conocer más?'}
        paragraph={'En Seguros Proelite, nos dedicamos a proporcionar servicios excepcionales tanto para empresas como para personas, asegurando que cada cliente reciba la atención y el respaldo que merece. Nuestra integridad, ética y basta experiencia nos permiten ofrecer soluciones de seguros personalizadas y efectivas que protegen lo que más valoras.'}
        highlightedText={['Seguros Proelite']}
        buttonText={'Hablar con un Asesor ahora'}
      />

    </>

  );
}