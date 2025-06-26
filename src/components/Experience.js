'use client';

import { useState } from "react";
import Image from "next/image";
import { EXPERIENCE_DATA } from "@/constants/experience";
import Container from "./Container";
import { theme } from "@/theme";
import Heading from "./Heading";
import BodyText from "./BodyText";
import { RxCaretDown } from "react-icons/rx";
import useMediaQuery from "./hooks/useMediaQuery";

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isDesktop = useMediaQuery("(min-width: 992px)");

  const handleMobileToggle = (index) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  const handleDesktopHover = (index) => {
    setActiveIndex(index);
  };

  return (
    <Container className={`min-h-screen bg-charcoal ${theme.paddingVertical}`}>
      <div className="flex flex-col gap-10">
        {/* Mobile: Accordion Layout */}
        {!isDesktop && (
          <div className="flex flex-col gap-6">
            <div className="w-full">
              <Heading
                text="THE ALPAGO EXPERIENCE"
                centered={false}
                color="text-white"
                className="mb-8"
                size="text-90px"
              />
            </div>
            {EXPERIENCE_DATA.map((exp, index) => {
              const isOpen = activeIndex === index;
              return (
                <div key={index} className="bg-charcoal pt-4">
                  {/* Heading row with toggle */}
                  <button
                    onClick={() => handleMobileToggle(index)}
                    className="flex justify-between items-center w-full text-left"
                  >
                    <Heading
                      text={exp.heading}
                      size="text-2xl"
                      centered={false}
                      color={isOpen ? "text-white" : "text-white/40"}
                    />
                    <RxCaretDown
                      size={30}
                      className={`transform transition-transform duration-300 ${
                        isOpen ? "text-white rotate-180" : "text-white/40"
                      }`}
                    />
                  </button>

                  {/* Body + Image */}
                  <div
                    className={`transition-all duration-500 overflow-hidden ${
                      isOpen ? "max-h-[1000px] opacity-100 mt-2" : "max-h-0 opacity-0"
                    }`}
                  >
                    <BodyText
                      text={exp.body}
                      centered={false}
                      color="text-white"
                      className="max-w-xl"
                    />
                    <div className="mt-4">
                      <Image
                        src={exp.image}
                        alt={exp.heading}
                        width={800}
                        height={400}
                        className="w-full h-auto object-contain transition-all duration-500"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Desktop layout */}
        {isDesktop && (
          <div className="flex flex-col lg:flex-row-reverse gap-10 xl:gap-20 items-stretch h-full">
            {/* Left: Experience blocks */}
            <div className="w-full lg:w-1/2 flex flex-col justify-between py-6">
              <div className="w-full">
                <Heading
                  text="THE ALPAGO EXPERIENCE"
                  centered={false}
                  color="text-white"
                  className="mb-8"
                />
              </div>

           {EXPERIENCE_DATA.map((exp, index) => {
  const isActive = activeIndex === index;
  return (
    <div
      key={index}
      onMouseEnter={() => handleDesktopHover(index)}
      onClick={() => handleDesktopHover(index)}
      className="cursor-pointer transition-all duration-300"
    >
      {/* Static position heading with color change only */}
      <Heading
        text={exp.heading}
        size="text-50px"
        centered={false}
        color={isActive ? "text-white" : "text-white/40"}
        className="transition-colors duration-300"
      />

      {/* Reserve space always, fade content in/out */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isActive ? "opacity-100 max-h-[300px] mt-2" : "opacity-0 max-h-0"
        }`}
      >
        <div className="min-h-[80px]"> {/* Prevent layout jump */}
          <BodyText
            text={exp.body}
            centered={false}
            color="text-white"
            className="max-w-xl"
          />
        </div>
      </div>
    </div>
  );
})}

            </div>

            {/* Right: Image */}
            <div className="w-full lg:w-1/2 flex flex-col justify-end items-center">
              <Image
                src={EXPERIENCE_DATA[activeIndex].image}
                alt={EXPERIENCE_DATA[activeIndex].heading}
                className="w-full h-auto object-contain transition-all duration-500"
                width={1000}
                height={600}
              />
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}
