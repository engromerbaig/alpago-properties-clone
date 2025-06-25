"use client";

import React, { useEffect, useRef } from "react";
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

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const cardElements = track.querySelectorAll(".project-card");
    const cardCount = PROJECTS_DATA.length;

    const cardWidth = window.innerWidth / 2; // 2 cards per viewport
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
  }, []);

  return (
  <section
    ref={sectionRef}
    className="relative h-screen w-full overflow-hidden"
    style={{ scrollSnapAlign: "start" }}
  >
    {/* Background: 70% black top, 30% white bottom */}
    <div className="absolute inset-0 z-0 pointer-events-none">
      <div className="h-[70%] w-full bg-black" />
      <div className="h-[30%] w-full bg-white" />
    </div>

    {/* Heading stays fixed */}
    <Container className={`${theme.paddingTop} relative z-10`}>
      <Heading
        text="PROJECTS"
        size="text-7xl"
        centered={false}
        className="pb-10 text-white"
      />
    </Container>

    {/* Scrolling card track */}
    <div
      ref={trackRef}
      className="absolute top-1/2 -translate-y-1/2 left-0 flex gap-20 px-10 z-10"
    >
      {PROJECTS_DATA.map((project, index) => (
        <div
          key={index}
          className="project-card shrink-0"
          style={{ width: `${window.innerWidth / 2}px` }}
        >
          <ProjectCard name={project.name} image={project.image} />
        </div>
      ))}
    </div>
  </section>
);

}
