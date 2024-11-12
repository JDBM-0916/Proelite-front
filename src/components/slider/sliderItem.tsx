'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Slide = {
  title: string;
  description: string;
  imageSrc: string;
};

type SlideItemProps = {
  slide: Slide;
};

export default function SlideItem({ slide }: SlideItemProps) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between h-full">
      
      {/* Texto en la primera mitad */}
      <div className="w-full md:w-1/2 p-4 text-left mr-10">
        <p className="text-5xl font-bold text-custom-white mb-4">{slide.title}</p>
        <p className="text-custom-white mb-6">{slide.description}</p>
        <Link href={'/servicios'}>
          <button className="bg-[#FEA800] text-navy-900 px-6 py-3 rounded-lg font-semibold text-[#172755]">
            Descubre más de nuestros servicios
          </button>
        </Link>

      </div>

      {/* Imagen en la segunda mitad */}
      <div className="w-full md:w-1/2 flex justify-center p-4 h-full relative mx-3">
        <Image
          src={slide.imageSrc}
          alt={slide.title}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  );
}
