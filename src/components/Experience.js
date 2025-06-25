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
  const [hoveredIndex, setHoveredIndex] = useState(0); // Default to first entry

  return (
    <Container className={`flex flex-col lg:flex-row gap-10 items-center justify-between ${theme.paddingVertical} bg-charcoal`}>
      {/* Left: Image */}
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <Image
          src={EXPERIENCE_DATA[hoveredIndex].image}
          alt={EXPERIENCE_DATA[hoveredIndex].heading}
          className="w-full h-full object-contain  transition-all duration-500"
        />
      </div>

      {/* Right: Headings */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">

      <Heading
      text="THE ALPAGO EXPERIENCE"
      centered={false}
      color="text-white"

      />

"
        <ul className="flex flex-col gap-4">
          {EXPERIENCE_DATA.map((exp, index) => (
            <li
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              className={`transition-all duration-300 cursor-pointer px-4 py-2 rounded-md ${
                hoveredIndex === index ? "bg-white/10 text-white" : "text-white/40"
              }`}
            >

              <Heading
              text={exp.heading}
              size="text-xl"
              centered={false}
              color={hoveredIndex === index ? "text-white" : "text-white/40"}
              />

              <BodyText
              text= {exp.body}
              centered={false}
              color="text-white"
              className="mt-2 "
              />
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
