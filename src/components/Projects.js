'use client';

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "./Container";
import Heading from "./Heading";
import ProjectCard from "./ProjectCard";
import { PROJECTS_DATA } from "@/constants/projects";
import { theme } from "@/theme";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  const [cardWidth, setCardWidth] = useState(0);

  // Safe access to window
  useEffect(() => {
    const handleResize = () => {
      setCardWidth(window.innerWidth / 2);
    };

    handleResize(); // set initial
    window.addEventListener("resize", handleResize); // update on resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track || cardWidth === 0) return;

    const cardCount = PROJECTS_DATA.length + 1; // +1 for invisible spacer
    const gap = 80;
    const totalWidth = (cardWidth + gap) * cardCount - window.innerWidth;

    gsap.set(track, {
      width: (cardWidth + gap) * cardCount,
    });

    gsap.to(track, {
      x: -totalWidth,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: `+=${totalWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        // markers: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [cardWidth]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden"
      style={{ scrollSnapAlign: "start" }}
    >
      {/* Background split: 70% black top, 30% white bottom */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="h-[70%] w-full bg-black" />
        <div className="h-[30%] w-full bg-white" />
      </div>

      {/* Heading */}
      <Container className={`${theme.paddingTop} relative z-10`}>
        <Heading
          text="PROJECTS"
          size="text-[120px]"
          centered={false}
          fontWeight="font-semibold"
          className="pb-10 text-white"
        />
      </Container>

      {/* Track */}
      <div
        ref={trackRef}
        className="absolute bottom-10 left-0 flex gap-20 px-10 z-10"
      >
        {PROJECTS_DATA.map((project, index) => (
          <div
            key={index}
            className="project-card shrink-0"
            style={{ width: `${cardWidth}px` }}
          >
            <ProjectCard name={project.name} image={project.image} />
          </div>
        ))}

        {/* Invisible spacer card for end scroll space */}
        <div
          className="project-card shrink-0 opacity-0 pointer-events-none"
          style={{ width: `${cardWidth}px` }}
        />
      </div>
    </section>
  );
}
