'use client';

import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import PARTNERS_DATA from "@/constants/partners";
import Container from "./Container";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Heading from "./Heading";
import BodyText from "./BodyText";
import { theme } from "@/theme";

export default function Partners() {
  const [activeIndex, setActiveIndex] = useState(0);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  // This effect ensures navigation is properly initialized
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiper = swiperRef.current.swiper;
      
      // Reinitialize navigation with our refs
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      
      // Destroy old navigation and reinit
      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, []);

  return (
    <Container className={`h-screen bg-white ${theme.paddingVertical}`}>
      <div className="flex flex-col md:flex-row h-full">
        {/* Left Text Section */}
        <div className="md:w-1/2 p-6 flex flex-col justify-center">
          <Heading
            text="DESIGN PARTNERS"
            centered={false}
            color="text-Gray"
            fontWeight="font-extralight"
            className="text-lg mb-2"
          />

          <Heading
            text={PARTNERS_DATA[activeIndex].heading}
            size="text-4xl"
            centered={false}
            color="text-black"
          />

          <BodyText
            text={PARTNERS_DATA[activeIndex].description}
            centered={false}
            className="mt-2"
          />
        </div>

        {/* Right Swiper Section */}
        <div className="md:w-1/2 relative flex items-center justify-center">
          <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onInit={(swiper) => {
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="w-full h-[400px] relative"
          >
            {PARTNERS_DATA.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-[400px]">
                  <Image
                    src={member.image}
                    alt={member.heading}
                    fill
                    placeholder="blur"
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index === 0}
                  />
                </div>
              </SwiperSlide>
            ))}
            
            {/* Navigation + Counter - Inside Swiper but outside Slides */}
            <div className="absolute bottom-0 left-0 z-10 w-1/4">
              <div className="flex flex-col items-start bg-red-600 text-white px-10 py-6">
                <div className="flex items-center gap-4 mb-2">
                  <button
                    ref={prevRef}
                    className="bg-amber-400 h-10 w-10 flex items-center justify-center rounded-full hover:bg-amber-500 transition-colors cursor-pointer"
                  >
                    <FaArrowLeft className="text-white" size={16} />
                  </button>
                  <button
                    ref={nextRef}
                    className="bg-amber-400 h-10 w-10 flex items-center justify-center rounded-full hover:bg-amber-500 transition-colors cursor-pointer"
                  >
                    <FaArrowRight className="text-white" size={16} />
                  </button>
                </div>
                <div className="text-3xl">
                  {(activeIndex % PARTNERS_DATA.length) + 1} <span className="text-xs">/ {PARTNERS_DATA.length}</span>
                </div>
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </Container>
  );
}