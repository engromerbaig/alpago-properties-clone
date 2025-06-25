// app/components/Experience.js
'use client';

import { useState } from "react";
import Image from "next/image";
import { EXPERIENCE_DATA } from "@/constants/experience";
import Container from "./Container";
import { theme } from "@/theme";

export default function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState(0); // Default to first entry

  return (
    <Container className={`flex flex-col lg:flex-row gap-10 items-center justify-between ${theme.paddingVertical} bg-charcoal`}>
      {/* Left: Image */}
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <Image
          src={EXPERIENCE_DATA[hoveredIndex].image}
          alt={EXPERIENCE_DATA[hoveredIndex].heading}
          className="w-full max-w-md h-auto object-contain rounded-xl shadow-lg transition-all duration-500"
        />
      </div>

      {/* Right: Headings */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h2 className="text-4xl font-bold text-white mb-4">Our Experience</h2>
        <ul className="flex flex-col gap-4">
          {EXPERIENCE_DATA.map((exp, index) => (
            <li
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              className={`transition-all duration-300 cursor-pointer px-4 py-2 rounded-md ${
                hoveredIndex === index ? "bg-white/10 text-white" : "text-white/40"
              }`}
            >
              <h3 className="text-2xl font-semibold">{exp.heading}</h3>
              <p className="text-base mt-1">{exp.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
