import Image from 'next/image';

interface InsuranceType {
  title: string;
  image: string;
  description: string;
  items: string[];
}

interface ImageItemsCardProps {
  insuranceTypes: InsuranceType[];
  textVisible: boolean;
}

export default function ImageItemsCard({ insuranceTypes, textVisible }: ImageItemsCardProps) {
  return (
    <div className="w-full mx-auto p-8 mt-10">
      {textVisible ? (
        <h1 className="text-[32px] font-bold text-center mb-8">
          <span className="text-custom-yellow">¿Para quienes</span> va dirigido este seguro?
        </h1>
      ) : null}

      <div className="flex flex-wrap justify-center gap-6">
        {insuranceTypes.map((type, index) => (
          <div key={index} className="flex flex-col w-[calc(33.333%-1rem)] min-w-[300px] rounded-xl">
            <Image
              src={type.image}
              alt={type.title}
              width={300}
              height={200}
              className="w-full object-cover"
            />
            <div className="flex flex-col ml-7 mt-[-20px] flex-grow">
              <h2 className="font-bold">{type.title}</h2>
              <p className="text-sm mb-2">{type.description ? type.description : ""}</p>
              <ul className="list-disc text-sm pl-5 flex-grow">
                {type.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
