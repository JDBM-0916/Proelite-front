import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import BlueCard from "@/components/cards/card-blue-background";
import IconsContainer from "@/components/cards/card-container-icons";
import ImageItemsCard from "@/components/cards/card-image-items";
import CenterCard from "@/components/cards/card-main-centered";
import PaymentMethods from "@/components/cards/card-payment-method";

import { INSURANCE_TYPES } from "@/const/const-information-types-of-insurance";
import { ICONS_INSURANCE_CONTRACTS, ICONS_PROTECT_OBLIGATIONS, ICONS_PROTECT_AGAINST_PREJUDICES } from "@/const/const-routes-icons-cards";


export default function ComplianceInsurance() {
  return (
    <div>
      <Breadcrumb currentPageName='Seguro de Cumplimiento' />

      <CenterCard
        insuranceTypeText='cumplimiento.'
        paragraph='Garantiza el cumplimiento de obligaciones contractuales y legales, brindando seguridad y confianza en las transacciones comerciales, derivado de un contrato. En Seguros Proelite comprendemos la importancia de este seguro y ofrecemos soluciones adaptadas a las necesidades de tu empresa.'
        highlightedText={[
          'contrato',
          'Seguros Proelite'
        ]}
        backgroundImage='/img/images-insurance-compliance/seguros-cumplimiento.png'
      />

      <ImageItemsCard insuranceTypes={INSURANCE_TYPES} textVisible={true} />

      <IconsContainer
        title="Celebra tus contratos de manera mas "
        highlightedTitle="segura y tranquila."
        images={ICONS_INSURANCE_CONTRACTS}
        columns={6}
      />

      <IconsContainer
        title="Protege las obligaciones "
        highlightedTitle="pactadas de tu contrato."
        images={ICONS_PROTECT_OBLIGATIONS}
        columns={5}
      />
      <BlueCard
        title='¿Quieres más información?'
        paragraph='En Seguros Proelite, reconocemos la diversidad de necesidades dentro del entorno empresarial, por lo que nos especializamos en ofrecer soluciones adaptadas a una amplia variedad de clientes. Nuestro seguro de cumplimiento está diseñado para satisfacer las necesidades de una amplia gama de entidades comerciales y grupos empresariales, ofreciendo protección y respaldo.'
        highlightedText={[
          'Seguros Proelite,',
          ' ofreciendo protección y respaldo'
        ]}
        buttonText='Contáctanos'
      />

      <IconsContainer
        title="Protégete ante perjuicios"
        highlightedTitle=" que puedas ocasionar a terceros."
        images={ICONS_PROTECT_AGAINST_PREJUDICES}
        columns={5}
      />
      <PaymentMethods showImage={false} />
    </div>
  )
}