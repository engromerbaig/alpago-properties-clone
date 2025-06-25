'use client';

import React, { useEffect, useState } from "react";
import Container from "./Container";
import Heading from "./Heading";
import ProjectCard from "./ProjectCard";
import { PROJECTS_DATA } from "@/constants/projects";
import { theme } from "@/theme";
import HorizontalScroller from "./HorizontalScroller";

export default function Projects() {
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setCardWidth(window.innerWidth / 2);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardCount = PROJECTS_DATA.length + 1;

  return (
    <HorizontalScroller
      cardWidth={cardWidth}
      gap={80}
      cardCount={cardCount}
      sectionClassName=""
      sectionStyle={{
        background: "linear-gradient(to bottom, black 70%, white 30%)",
      }}
      trackClassName="z-10"
      renderTrackContent={(width) => (
        <>
          {PROJECTS_DATA.map((project, index) => (
            <div
              key={index}
              className="project-card shrink-0"
              style={{ width: `${width}px` }}
            >
              <ProjectCard name={project.name} image={project.image} />
            </div>
          ))}

          {/* Invisible spacer */}
          <div
            className="project-card shrink-0 opacity-0 pointer-events-none"
            style={{ width: `${width}px` }}
          />
        </>
      )}
    />
  );
}
