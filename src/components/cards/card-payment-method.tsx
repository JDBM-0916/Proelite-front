import Image from 'next/image';

interface PaymentMethodsProps {
  showImage: boolean;
}

export default function PaymentMethods({ showImage }: PaymentMethodsProps) {
  return (
    <div className="w-full mx-auto p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">
        <span>Medios de pago </span>
        <span className="text-custom-yellow">y financiación:</span>
      </h2>
      <p className="text-center mb-6 ">
        Se hace directamente con la compañía.
      </p>
      <div className="flex justify-center items-center space-x-12">
        <div className="flex flex-col items-center">
          <Image
            src="/icons/means-of-payment-icons/transferencia-bancaria.png"
            alt="Bank Transfer"
            width={124.24}
            height={56}
            className="mb-2"
          />
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/icons/means-of-payment-icons/logo-pse.png"
            alt="PSE"
            width={56}
            height={56}
            className="mb-2"
          />
        </div>
        {showImage && (
          <div className="flex flex-col items-center">
            <Image
              src="/icons/means-of-payment-icons/logo-finesa-vehiculos.png"
              alt="Finesa Vehicles"
              width={137.14}
              height={56}
              className="mb-2"
            />
          </div>
        )}
      </div>
    </div>
  );
}
