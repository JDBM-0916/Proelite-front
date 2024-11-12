import { SLIDER_DATA } from "@/const/const-information-sliders";
import Navbar from "../navbar/navigation-bar";
import SlideShow from "../slider/slideShow";




export default function HeaderContent() {
  return (
    <div className="bg-header-home py-14 px-24">
      <div className="contenedor-responsive">
        <Navbar
          logoImage={'/icons/general-icons/logo-proelite.png'}
          textColor="text-custom-white"
          borderColor="border-custom-color"
        />
        <SlideShow slides={SLIDER_DATA} />
      </div>
    </div>
  )
}