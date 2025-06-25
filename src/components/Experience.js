'use client';

import { useState } from "react";
import Image from "next/image";
import { EXPERIENCE_DATA } from "@/constants/experience";
import Container from "./Container";
import { theme } from "@/theme";
import Heading from "./Heading";
import BodyText from "./BodyText";

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Container className={`min-h-screen bg-charcoal ${theme.paddingVertical}`}>
      <div className="flex flex-col lg:flex-row h-full gap-10 xl:gap-20 items-stretch">
        {/* Left: Image */}
        <div className="w-full lg:w-1/2 flex justify-start items-center">
          <Image
            src={EXPERIENCE_DATA[activeIndex].image}
            alt={EXPERIENCE_DATA[activeIndex].heading}
            className="w-full h-full object-contain transition-all duration-500"
          />
        </div>

        {/* Right: Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col">
          {/* Top heading (fixed height) */}
          <div className="shrink-0 py-10">
            <Heading text="THE ALPAGO EXPERIENCE" centered={false} color="text-white" />
          </div>

          {/* Experience blocks fill the rest */}
          <div className="flex flex-col justify-between py-6 flex-1">
            {EXPERIENCE_DATA.map((exp, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className="flex flex-col justify-center flex-1 cursor-pointer"
              >
                <div className="wrapper overflow-hidden">
                  {/* Heading with slide up animation */}
                  <div 
                    className={`transform transition-all duration-500 ease-out ${
                      activeIndex === index 
                        ? 'translate-y-0' 
                        : 'translate-y-2'
                    }`}
                  >
                    <Heading
                      text={exp.heading}
                      size="text-3xl"
                      centered={false}
                      color={activeIndex === index ? "text-white" : "text-white/40"}
                    />
                  </div>

                  {/* Body text with fade and slide animations */}
                  <div 
                    className={`transform transition-all duration-500 ease-out ${
                      activeIndex === index
                        ? 'opacity-100 translate-y-0 max-h-96'
                        : 'opacity-0 translate-y-4 max-h-0'
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
      </div>
    </Container>
  );
}