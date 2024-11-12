import Footer from "@/components/footer/footer";
import NavbarComponent from "@/components/navbar/navigation-bar";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-full w-full relative">

      <div className="bg-layout absolute z-0"></div>
      <div className="relative z-10 w-full px-24 py-14">

        <NavbarComponent
          logoImage={'/icons/general-icons/logo-proelite-azul.png'}
          textColor={'text-custom-blue'}
          borderColor={'border-custom-blue'} />

        <div className='mx-auto'>
          {children}
        </div>

        <Footer />
      </div>
    </div>
  );
}
