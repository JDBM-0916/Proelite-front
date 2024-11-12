'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { Pagination } from 'swiper/modules';
import SlideItem from './sliderItem';


type Slide = {
  title: string;
  description: string;
  imageSrc: string;
  buttonText: string;
};

type SlideShowProps = {
  slides: Slide[];
};

export default function SlideShow({ slides }: SlideShowProps) {
  return (
    <div className="w-full mx-auto bg-green-800 relative right-0">
      <div className="absolute top-[7rem] w-[100%] h-[493px] carrousel">
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <SlideItem slide={slide} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
