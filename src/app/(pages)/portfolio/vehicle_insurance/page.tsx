import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import ImageBackgroundCard from "@/components/cards/card-background-image";
import BlueCard from "@/components/cards/card-blue-background";
import IconsContainer from "@/components/cards/card-container-icons";
import MainCard from "@/components/cards/card-main";
import PaymentMethods from "@/components/cards/card-payment-method";
import AssistanceVehicle from "@/components/portfolio/vehicle-assistance";
import VehicleTypes from "@/components/portfolio/vehicles";

import { VEHICLES } from "@/const/const-information-vehicles";
import { ICONS_GENERAL_AMPAROUS_CONCERNS, ADDITIONAL_AMPAROS_ICONS, ICONS_VEHICLE_ASSISTANCE, INSURANCE_ICONS } from "@/const/const-routes-icons-cards";


export default function SegurosDeVehiculos() {
  return (
    <div>

      <Breadcrumb currentPageName='Seguro de Vehiculos' />

      <MainCard
        title="Seguro"
        highlightedText="de vehículos."
        paragraph1="En nuestro mundo moderno y en constante movimiento, contar con un seguro de vehículos confiable es más que una necesidad; es una tranquilidad. En Seguros Proelite, entendemos la importancia de proteger tu vehículo y a ti mismo en cada viaje que emprendas. Explora nuestra gama de opciones de seguro de vehículos y descubre cómo podemos ayudarte a proteger lo que más valoras."
        paragraph1Highlights={[
          "seguro de vehículos confiable",
          "Seguros Proelite"
        ]}
        paragraph2="En Seguros Proelite tu seguridad y satisfacción son nuestra prioridad número uno."
        paragraph2Highlights={[
          "Seguros Proelite"
        ]}
        buttonText="Hablar con un Asesor ahora"
        imageSrc="/img/images-insurance-vehicle/carro.png"
      />

      <VehicleTypes
        imageSrc="/img/images-insurance-vehicle/vehiculos.png"
        vehicles={VEHICLES}
      />

      <IconsContainer
        title="Amparos"
        highlightedTitle="generales:"
        images={ICONS_GENERAL_AMPAROUS_CONCERNS}
        columns={5}
      />

      <IconsContainer
        title="Amparos"
        highlightedTitle="adicionales y opcionales:"
        images={ADDITIONAL_AMPAROS_ICONS}
        columns={6}
      />

      <ImageBackgroundCard
        bgImage="/img/images-insurance-vehicle/fondocard.png"
        titlePart1="Asistencias"
        titlePart2="y apoyo continuo: siempre aquí cuando nos necesitas."
        content="Nuestras aseguradoras asociadas ofrecen atención y apoyo las 24 horas del día, los 7 días de la semana. Ya sea que necesites asistencia en la carretera, ayuda con un reclamo o cualquier otro tipo de apoyo, puedes estar seguro de que estamos aquí para ti en todo momento."
      />

      <AssistanceVehicle
        title="Asistencia"
        highlightedTitle="al vehículo:"
        images={ICONS_VEHICLE_ASSISTANCE}
      />

      <IconsContainer
        title="Cotizamos"
        highlightedTitle="con varias aseguradoras:"
        images={INSURANCE_ICONS}
        columns={11}
      />

      <BlueCard
        title="¿Quieres conocer más?"
        paragraph="Pueden existir riesgos no asegurables, te asesoraremos de la mejor manera."
        highlightedText={[
          "no asegurables"
        ]}
        buttonText="Hablar con un Asesor ahora" />

      <PaymentMethods showImage={true} />

    </div>
  );
}
