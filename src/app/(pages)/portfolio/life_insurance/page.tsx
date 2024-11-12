import Image from 'next/image';

import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import ImageBackgroundCard from "@/components/cards/card-background-image";
import BlueCard from "@/components/cards/card-blue-background";
import IconsContainer from "@/components/cards/card-container-icons";
import CardImageItems from "@/components/cards/card-image-items";
import MainCard from "@/components/cards/card-main";
import PaymentMethods from "@/components/cards/card-payment-method";

import { FOR_WHO_IS_THE_INSURANCE, TYPES_OF_INSURANCE_ASSISTANCE } from "@/const/const-information-types-of-insurance";
import { ICONS_ADDITIONAL_COVERAGES_LIFE_INSURANCE } from "@/const/const-routes-icons-cards";


export default function SeguroDeVida() {
  return (
    <div>

      <Breadcrumb
        currentPageName='Seguro de Vida'
      />

      <MainCard
        title='Seguro de '
        highlightedText='vida.'
        paragraph1='Entendemos la importancia de proteger lo que más valoras. Nuestro seguro de vida está diseñado para brindarte tranquilidad y seguridad en los momentos más difíciles. Sabemos que tu familia es tu prioridad, Con nuestro seguro de vida tu familia no quedará desamparada ante fallecimiento o una incapacidad total y permanente. Tu bienestar y el de tu familia es nuestra máxima prioridad.'
        paragraph1Highlights={[
          'brindarte tranquilidad y seguridad en los momentos más difíciles.',
          'Tu bienestar y el de tu familia es nuestra máxima prioridad.',
        ]}
        buttonText='Hablar con un Asesor ahora'
        imageSrc='/img/images-life-insurance/main-screen.png'
      />


      <CardImageItems
        insuranceTypes={FOR_WHO_IS_THE_INSURANCE}
        textVisible={true}
      />

      <h2 className='text-center justify-center text-[32px] leading-[40px] font-semibold mt-10'> <span className='text-custom-yellow'>Amparos adicionales</span> que te cubren de lo que requieras y elijas:</h2>

      <IconsContainer
        images={ICONS_ADDITIONAL_COVERAGES_LIFE_INSURANCE}
        columns={5}
        title={''}
        highlightedTitle={''}
      />

      <div className='flex max-h-[464px] my-14 pt-14'>

        <div className="flex-col mr-6 w-[50%] relative">
          <Image
            src="/img/images-life-insurance/img-amparos-complementarios.png"
            alt="Imagen ejemplo"
            height={464}
            width={752}
          />
        </div>

        <div className="flex items-center">
          <div className="w-full flex flex-col space-y-6">
            <h2 className="text-[32px] leading-[40px] font-semibold">
              Amparos <span className="text-yellow-500">complementarios:</span>
            </h2>
            <div className="space-y-4">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Image
                    src="/icons/general-icons/hucha.png"
                    alt="Savings icon"
                    width={24}
                    height={24}
                  />
                  <p className="text-[20px] font-semibold">Ahorro.</p>
                </div>
                <p className="ml-8">
                  Crea un fondo de inversión o ahorro a disposición del asegurado o los beneficiarios.
                </p>
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Image
                    src="/icons/general-icons/vida.png"
                    alt="Life icon"
                    width={24}
                    height={24}
                  />
                  <p className="text-[20px] font-semibold">Sobrevivencia.</p>
                </div>
                <p className="ml-8">
                  Indemniza al asegurado por sobrevivir al final del periodo de cobertura pactado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ImageBackgroundCard
        bgImage={'/img/images-life-insurance/imagenfondo.png'}
        titlePart2={'Construye tu seguro de vida según tus necesidades familiares y financieras.'}
        content={''}
      />

      <h2 className='text-center justify-center text-[32px] leading-[40px] font-semibold mt-10 py-10'>Aprovecha los diferentes tipos de asistencia <br /> que podría tener tu seguro de vida: </h2>

      <CardImageItems
        insuranceTypes={TYPES_OF_INSURANCE_ASSISTANCE}
        textVisible={false}
      />


      <div className='text-center  font-semibold mt-8 py-10'>

        <h2 className='text-[32px] leading-[40px]'> <span className='text-custom-yellow'>Asegura</span> la protección financiera de tu familia.</h2>

        <div className='flex flex-grow justify-center gap-10  py-6'>
          <div className='flex h-8 gap-2 items-center'>
            <Image
              height={32}
              width={32}
              src={'/icons/general-icons/numero-5.png'}
              alt={'numero 5'} /> años
          </div>
          <div className='flex h-8 gap-2 items-center'>
            <Image
              height={32}
              width={32}
              src={'/icons/general-icons/numero-10.png'}
              alt={'numero 10'} /> años
          </div>
          <div className='flex h-8 gap-2 items-center'>
            <Image
              height={32}
              width={32}
              src={'/icons/general-icons/numero-20.png'}
              alt={'numero 20'} /> años
          </div>
        </div>

        <div className='w-full '>
          <Image
            width={1248}
            height={512}
            src={'/img/images-life-insurance/fondo-card.png'}
            alt={'imagen fondo'} />
        </div>
      </div>

      <BlueCard
        title='¿Quieres conocer más?'
        paragraph='En Seguros Proelite, estamos comprometidos con la protección de lo más valioso: la vida. Sabemos el verdadero valor que tiene para ti y tus seres queridos. Nuestros seguros de vida están diseñados para brindarte la tranquilidad y seguridad que mereces. Contáctanos hoy mismo para obtener una cobertura personalizada que se ajuste a tus necesidades y requerimientos. Tu bienestar es nuestra prioridad.'
        highlightedText={[
          ' Seguros Proelite',
          'brindarte la tranquilidad y seguridad que mereces',

        ]}
        buttonText='Habla con un Asesor Ahora' />


      <PaymentMethods
        showImage={false}
      />

    </div>
  )
}