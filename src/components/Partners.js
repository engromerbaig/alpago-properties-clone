'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { useState, useRef } from "react";
import PARTNERS_DATA from "@/constants/partners";
import Container from "./Container";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import Heading from "./Heading";
import BodyText from "./BodyText";

const DESIGN_PARTNERS = "DESIGN PARTNERS";


export default function Partners() {
  const [activeIndex, setActiveIndex] = useState(0);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <Container className={`h-screen bg-white pt-10 pb-20`}>
      <div className="flex flex-col md:flex-row h-full">
        {/* Left Text Section */}
        <div className="md:w-1/2 p-6 flex flex-col justify-center">
        <Heading text="DESIGN PARTNERS"  centered={false} color="text-Gray" fontWeight="font-extralight"  className="text-lg   mb-2" />
        
        <Heading
        text={PARTNERS_DATA[activeIndex].heading}
        size="text-4xl"
        centered={false}
        color="text-black"
        />
        
        <BodyText text={PARTNERS_DATA[activeIndex].description} centered={false} className="mt-2" />
        </div>

        {/* Right Swiper Section */}
        <div className="md:w-1/2 relative flex items-center justify-center">
          <Swiper
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onSwiper={(swiper) => {
              // Attach navigation refs after swiper is initialized
              setTimeout(() => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              });
            }}
            onSlideChange={(swiper) => {
              const realIndex = swiper.realIndex;
              setActiveIndex(realIndex);
            }}
            className="w-full h-[400px]"
          >
            {PARTNERS_DATA.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-[400px]">
                  <Image
                    src={member.image}
                    alt={member.heading}
                    fill
                    placeholder="blur"
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index === 0}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <div className="absolute bottom-4 left-4 flex items-center bg-white px-3 py-1 rounded shadow z-10">
            <button ref={prevRef}>
              <FaArrowLeft className="text-black cursor-pointer mr-2" size={20} />
            </button>
            <span className="text-sm font-medium text-black">
              {activeIndex + 1} / {PARTNERS_DATA.length}
            </span>
            <button ref={nextRef}>
              <FaArrowRight className="text-black cursor-pointer ml-2" size={20} />
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}
