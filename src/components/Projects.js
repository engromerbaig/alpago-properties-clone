'use client';
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { theme } from "@/theme";
import Container from "./Container";
import Heading from "./Heading";
import { PROJECTS_DATA } from "@/constants/projects";
import ProjectCard from "./ProjectCard";

gsap.registerPlugin(ScrollTrigger);

// Custom hook for GSAP horizontal scroll animation
const useHorizontalScroll = (sliderRef, cardCount) => {
  useLayoutEffect(() => {
    if (cardCount <= 2) return; // Skip if 2 or fewer cards

    let ctx = gsap.context(() => {
      const windowWidth = window.innerWidth;
      const isMobile = windowWidth < 768;
      
      // Card width calculation - consistent width for all cards
      const cardWidth = isMobile ? windowWidth * 0.9 : windowWidth * 0.45;
      const gapSize = isMobile ? 20 : 32; // Smaller gap on mobile
      
      // Calculate dimensions
      const initialVisibleCards = 2;
      const remainingCards = cardCount - initialVisibleCards;
      
      // Total scroll distance needed to reveal all cards completely
      const totalScrollDistance = remainingCards * (cardWidth + gapSize);
      
      // Set the slider width to accommodate all cards
      const totalWidth = windowWidth + totalScrollDistance;
      sliderRef.current.style.width = `${totalWidth}px`;
      
      // Create scroll animation
      gsap.to(sliderRef.current, {
        x: () => -totalScrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: sliderRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${totalScrollDistance}`, // End only when all cards are fully visible
          toggleActions: "play none none reverse",
          invalidateOnRefresh: true,
          anticipatePin: 1,
          // markers: true, // Uncomment for debugging
        },
      });
    }, sliderRef);

    return () => ctx.revert();
  }, [cardCount, sliderRef]);
};

export default function Projects() {
  const sliderRef = useRef();
  const componentRef = useRef();

  // Apply horizontal scroll for both mobile and desktop
  useHorizontalScroll(sliderRef, PROJECTS_DATA.length);

  return (
    <div ref={componentRef} className="relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 z-0 h-[70%] bg-black" />
      <div className="absolute bottom-0 z-0 w-full h-[30%] bg-white" />
      
      {PROJECTS_DATA.length > 2 ? (
        // Horizontal scroll effect for both mobile and desktop
        <div ref={sliderRef} className="flex h-screen items-center relative z-10">
          {/* Fixed content section with heading and first 2 cards */}
          <div className="flex-shrink-0 w-screen px-6 lg:px-12">
            <div className="max-w-7xl mx-auto h-full flex flex-col justify-center">
              {/* Fixed heading */}
              <div className="mb-10">
                <Heading
                  text="PROJECTS"
                  centered={false}
                  className="text-white"
                />
              </div>
              
              {/* Cards container with consistent height */}
              <div className="flex-1 flex items-center">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
                  {PROJECTS_DATA.slice(0, 2).map((project, index) => (
                    <div key={index} className="w-full">
                      <ProjectCard 
                        name={project.name}
                        image={project.image}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Scrollable cards section - identical dimensions and alignment */}
          {PROJECTS_DATA.slice(2).map((project, index) => (
            <div
              key={index + 2}
              className="flex-shrink-0 w-[90vw] md:w-[45vw] h-screen px-6 lg:px-12"
            >
              <div className="max-w-7xl mx-auto h-full flex flex-col justify-center">
                {/* Empty space for heading alignment */}
                <div className="mb-10 opacity-0">
                  <Heading
                    text="PROJECTS"
                    centered={false}
                    className="text-white"
                  />
                </div>
                
                {/* Card container with identical structure */}
                <div className="flex-1 flex items-center">
                  <div className="w-full grid grid-cols-1 gap-5 md:gap-8">
                    <div className="w-full">
                      <ProjectCard 
                        name={project.name}
                        image={project.image}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Fallback for 2 or fewer projects
        <Container className={`${theme.paddingVertical} relative z-10 h-full min-h-screen`}>
          <Heading
            text="PROJECTS"
            centered={false}
            className="pb-10 text-white"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS_DATA.map((project, index) => (
              <ProjectCard 
                key={index}
                name={project.name}
                image={project.image}
              />
            ))}
          </div>
        </Container>
      )}
    </div>
  );
}