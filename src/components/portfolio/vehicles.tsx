import Image from 'next/image';

interface VehicleProps {
  iconSrc: string; 
  title: string;
  items: string[];
}

const Vehicle = ({ iconSrc, title, items }: VehicleProps) => {
  return (
    <div className="mb-4">
      <div className="flex">
        <Image
          src={iconSrc}
          alt={`Imagen de ${title}`}
          width={24}
          height={24}
          className="mr-2"
        />
        <strong>{title}:</strong>
      </div>
      <ul className="list-disc pl-12 text-justify">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

interface VehicleTypesProps {
  imageSrc: string; 
  vehicles: { iconSrc: string; title: string; items: string[] }[]; 
}

const VehicleTypes = ({ imageSrc, vehicles }: VehicleTypesProps) => {
  return (
    <div className="w-full justify-center flex h-[587px] mt-12 gap-14">
      {/* Imagen de los vehículos */}
      <div className="flex-col w-[752px] relative">
        <Image
          src={imageSrc}
          alt="Imagen de vehículos"
          width={752}
          height={587}
        />
      </div>

      {/* Descripción de vehículos */}
      <div className="flex flex-col justify-center w-[440px] h-full">
        <h2 className="text-[32px] leading-[40px] my-8">Aseguramos:</h2>
        {vehicles.map((vehicle, index) => ( 
          <Vehicle
            key={index}
            iconSrc={vehicle.iconSrc} 
            title={vehicle.title}
            items={vehicle.items}
          />
        ))}
      </div>
    </div>
  );
};

export default VehicleTypes; 
