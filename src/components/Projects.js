'use client';

import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { PROJECTS_DATA } from "@/constants/projects";
import HorizontalScroller from "./HorizontalScroller";

export default function Projects() {
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768; // Tailwind md breakpoint
      const newWidth = isMobile
        ? window.innerWidth / 1.25
        : window.innerWidth / 2;
      setCardWidth(newWidth);
    };

    handleResize(); // Set on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardCount = PROJECTS_DATA.length + 1;

  return (
    <HorizontalScroller
      title="PROJECTS"
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

          <div
            className="project-card shrink-0 opacity-0 pointer-events-none"
            style={{ width: `${cardWidth}px` }}
          />
        </>
      )}
    />
  );
}
