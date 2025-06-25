'use client';

import { theme } from "@/theme";
import Container from "./Container";
import { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { gsap } from "gsap";
import TEAMS_DATA from "@/constants/teams";
import Image from "next/image";

const DESIGN_PARTNERS = "DESIGN PARTNERS";

export default function Team() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(slideRef.current, {
        xPercent: -currentSlide * 100,
        duration: 0.5,
        ease: "power2.out",
      });
    });
    return () => ctx.revert();
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % TEAMS_DATA.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + TEAMS_DATA.length) % TEAMS_DATA.length);
  };

  return (
    <Container className={`h-screen bg-white ${theme.paddingVertical}`}>
      <div className="flex flex-col md:flex-row h-full">
        {/* Left Text Section */}
        <div className="md:w-1/2 p-6 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">
            {DESIGN_PARTNERS}
          </h2>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {TEAMS_DATA[currentSlide].heading}
          </h1>
          <p className="text-gray-600">{TEAMS_DATA[currentSlide].description}</p>
        </div>

        {/* Right Image Slider Section */}
        <div className="md:w-1/2 relative flex items-center justify-center">
          <div className="overflow-hidden w-full h-[400px]">
            <div
              ref={slideRef}
              className="flex"
              style={{ width: `${TEAMS_DATA.length * 100}%` }}
            >
              {TEAMS_DATA.map((member, index) => (
                <div key={index} className="min-w-full flex-shrink-0">
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
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <div className="absolute bottom-4 left-4 flex items-center text-black bg-white px-3 py-1 rounded shadow">
            <FaArrowLeft
              className="cursor-pointer mr-2"
              onClick={prevSlide}
              size={20}
            />
            <span className="text-sm font-medium">
              {currentSlide + 1} / {TEAMS_DATA.length}
            </span>
            <FaArrowRight
              className="cursor-pointer ml-2"
              onClick={nextSlide}
              size={20}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
