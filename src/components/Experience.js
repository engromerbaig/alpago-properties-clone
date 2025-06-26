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

  const toggleAccordion = (index) => {
    setActiveIndex(prev => prev === index ? -1 : index);
  };

  return (
    <Container className={`min-h-screen bg-charcoal ${theme.paddingVertical}`}>
      <div className="flex flex-col gap-10">
        {/* Main Heading */}
        <div className="py-10">
          <Heading text="THE ALPAGO EXPERIENCE" centered={false} color="text-white" />
        </div>

        {/* Desktop layout */}
        {isDesktop ? (
          <div className="flex flex-col lg:flex-row h-full gap-10 xl:gap-20 items-stretch">
            {/* Left: Image */}
            <div className="w-full lg:w-1/2 flex justify-start items-center">
              <Image
                src={EXPERIENCE_DATA[activeIndex].image}
                alt={EXPERIENCE_DATA[activeIndex].heading}
                className="w-full h-full object-contain transition-all duration-500"
              />
            </div>

            {/* Right: Experience blocks */}
            <div className="w-full lg:w-1/2 flex flex-col justify-between py-6">
              {EXPERIENCE_DATA.map((exp, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className="flex flex-col justify-center flex-1 cursor-pointer"
                >
                  <div className="wrapper overflow-hidden">
                    <div 
                      className={`transform transition-all duration-500 ease-out ${
                        activeIndex === index ? '-translate-y-2' : 'translate-y-0'
                      }`}
                    >
                      <Heading
                        text={exp.heading}
                        size="text-50px"
                        centered={false}
                        color={activeIndex === index ? "text-white" : "text-white/40"}
                      />
                    </div>
                    <div 
                      className={`transition-all duration-500 ease-out ${
                        activeIndex === index ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0'
                      }`}
                    >
                      <BodyText
                        text={exp.body}
                        centered={false}
                        color="text-white"
                        className="mt-2 max-w-xl"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          // Accordion layout for mobile/tablet
          <div className="flex flex-col gap-6">
            {EXPERIENCE_DATA.map((exp, index) => {
              const isOpen = activeIndex === index;
              return (
                <div key={index} className="bg-charcoal pt-4">
                  {/* Heading row with toggle */}
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="flex justify-between items-center w-full text-left"
                  >
                    <Heading
                      text={exp.heading}
                      size="text-2xl"
                      centered={false}
                      color="text-white"
                    />
                    <RxCaretDown
                      size={30}
                      className={`text-white transform transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Body text */}
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

                    {/* Image below */}
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
      </div>
    </Container>
  );
}
