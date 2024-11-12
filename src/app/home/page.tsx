import FooterComponent from "@/components/footer/footer";
import ContentHome from "@/components/home/content-home";
import HeaderContent from "@/components/home/header-content";


export default function Inicio() {
  return (
    <div className="w-full h-full">
      <HeaderContent />
      <div className='py-14 text-center px-24'>
        <div className=" contenedor-responsive ">
          <ContentHome />
          <FooterComponent />
        </div>
      </div>
    </div>
  );
}
