import MainCard from "@/components/cards/card-main";
import MissionAndVision from "@/components/company/mission-and-vision";
import WhoWeAre from "@/components/company/who-we-are";
import BlueCard from '@/components/cards/card-blue-background';


export default function CompanyPage() {
  return (
    <>
      <MainCard
        title={"Nuestra"}
        highlightedText={"Empresa"}
        paragraph1={"En Seguros Proelite, no solo ofrecemos productos de seguros,sino también tranquilidad y seguridad a nuestros clientes. Trabajamosincansablemente para superar las expectativas y construir relaciones duraderas basadas en la confianza y la transparencia."}
        paragraph1Highlights={[
          'Seguros Proelite,',
          'tranquilidad y seguridad a nuestros clientes'
        ]}
        buttonText={"Hablar con un Asesor ahora"}
        imageSrc={"/img/images-company/Rectangle.png"}
      />
      <WhoWeAre />
      <MissionAndVision />

      <BlueCard
        title={"¿Quieres conocer más?"}
        paragraph={"Pueden existir riesgos no asegurables, te asesoraremos de la mejor manera."}
        highlightedText={['no asegurables']}
        buttonText={"Habla con un Asesor Ahora"}
      />

    </>
  );
}