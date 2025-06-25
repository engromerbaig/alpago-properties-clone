// app/components/Experience.js
'use client';

import { useState } from "react";
import Image from "next/image";
import { EXPERIENCE_DATA } from "@/constants/experience";
import Container from "./Container";
import { theme } from "@/theme";
import Heading from "./Heading";
import BodyText from "./BodyText";

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0); // Initially first block is active

  return (
    <Container className={`flex flex-col lg:flex-row gap-10 justify-between ${theme.paddingVertical} bg-charcoal`}>
      {/* Left: Image */}
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <Image
          src={EXPERIENCE_DATA[activeIndex].image}
          alt={EXPERIENCE_DATA[activeIndex].heading}
          className="w-full h-full object-contain transition-all duration-500"
        />
      </div>

      {/* Right: Static heading + evenly spaced blocks */}
      <div className="w-full lg:w-1/2 flex flex-col h-full">
        {/* Static Top Heading */}
        <div className="mb-6">
          <Heading
            text="THE ALPAGO EXPERIENCE"
            centered={false}
            color="text-white"
          />
        </div>

        {/* Dynamic Content: Spread full height evenly */}
        <div className="flex flex-col flex-grow divide-y divide-white/10 border-t border-b border-white/10">
          {EXPERIENCE_DATA.map((exp, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
              className="flex flex-col justify-center flex-1 px-4 py-2 cursor-pointer"
            >
              <Heading
                text={exp.heading}
                size="text-2xl"
                centered={false}
                color={activeIndex === index ? "text-white" : "text-white/40"}
              />
              {activeIndex === index && (
                <BodyText
                  text={exp.body}
                  centered={false}
                  color="text-white"
                  className="mt-2"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
