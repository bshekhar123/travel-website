import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react"

import "swiper/css"
import "swiper/css/effect-fade"

import { EffectFade, Autoplay } from 'swiper';
import img1 from "../assets/img/heroSlider/1.jpg"
import img2 from "../assets/img/heroSlider/2.jpg"
import img3 from "../assets/img/heroSlider/3.jpg"


const slides =[
{
  title: 'Luxury Hotel for vacation',
  bg: img1,
btnText: "Room & Suites"
}  ,
{
  title: 'Luxury Hotel for vacation',
  bg: img2,
btnText: "Room & Suites"
}  ,
{
  title: 'Luxury Hotel for vacation',
  bg: img3,
btnText: "Room & Suites"
}  ,
]

const HeroSlider = () => {
  return (
    <Swiper modules={[EffectFade, Autoplay]} 
    effect={'fade'} 
    loop={true}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
    }}
     className="heroSlider h-[600px] lg:h-[860px]">
      {slides.map((slide, index) => {
        const { title, bg, btnText } = slide;

        return (
          <SwiperSlide className="h-full relative flex justify-center items-center" key={index}>
            <div className="z-20 text-white  text-center">
              <div className="uppercase font-tertiary tracking-[6px] mb=5">Just Enjoy and Relax</div>
              <h1 className='text-[32px]  font-primary uppercase tracking-[2px] max-w-[920] lg:text-[68px] leading-tight mb-6 '>{title}</h1>
              <button className="btn btn-lg btn-primary mx-auto rounded-lg">{btnText}</button>
            </div>
            <div className="absolute top-0 w-full h-full">
              <img className="object-cover h-full w-full" src={bg} alt="" />
            </div>
            <div className="absolute bg-black bg-opacity-80 w-full h-full"></div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HeroSlider;
