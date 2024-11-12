import Image from 'next/image';

export default function WhoWeAre() {
  return (
    <>
      <div className='w-full justify-center text-center  gap-6'>
        <h2 className="text-[40px] leading-[50px] font-semibold text-custom-yellow t">¿Quiénes <span className="text-custom-blue"> somos?</span></h2>

        <p className="mt-7">Nuestra agencia de seguros fue fundada en 1997 por el señor Edgar Rufo González Rodríguez, quien, con una visión clara del sector, comenzó como Agente de Seguros Independiente. Con el paso de los años y un crecimiento constante, en 2014 evolucionamos para convertirnos en una Agencia de Seguros Persona Jurídica bajo el nombre <span className="font-semibold">SEGUROS PROELITE LTDA.</span>.</p>

        <p className="mt-5">A lo largo de nuestra trayectoria, hemos mantenido el compromiso de ofrecer a nuestros clientes un servicio personalizado y asesoramiento experto que nos caracterizan desde nuestros inicios. En este momento, estamos implementando cambios significativos en nuestra agencia para mejorar aún más nuestros servicios y ofrecer a nuestros clientes tecnología de vanguardia para satisfacer todas sus necesidades.</p>

        <p className="mt-5">Nos distinguimos por nuestra atención al cliente y nuestra capacidad para adaptarnos a las necesidades únicas de cada individuo y empresa. Nuestro equipo altamente capacitado está comprometido a proporcionar asesoramiento experto y orientación en todas las etapas del proceso, desde la selección de la mejor opción de aseguramiento para cada póliza hasta la gestión de reclamaciones y procesos de siniestros.</p>

      </div>

      <Image
        src={"/img/images-company/Left.png"}
        alt={""}
        width={1248}
        height={587.09}
        className="mt-14"
      />
    </>
  );
}