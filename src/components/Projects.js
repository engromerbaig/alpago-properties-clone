'use client';

import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { PROJECTS_DATA } from "@/constants/projects";
import HorizontalScroller from "./HorizontalScroller";
import useMediaQuery from "./hooks/useMediaQuery";

export default function Projects() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      const newWidth = isMobile
        ? window.innerWidth / 1.25
        : window.innerWidth / 2;
      setCardWidth(newWidth);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [isMobile]);

  const cardCount = PROJECTS_DATA.length + 1;

  const sectionStyle = {
    background: isMobile
      ? "linear-gradient(to bottom, black 50%, white 50%)"
      : "linear-gradient(to bottom, black 70%, white 30%)",
  };

  return (
    <HorizontalScroller
      title="PROJECTS"
      cardWidth={cardWidth}
      gap={isMobile ? 40 : 80}
      cardCount={cardCount}
      sectionClassName=""
      sectionStyle={sectionStyle}
      trackClassName="z-10"
      renderTrackContent={(width, cardHeight) => (
        <>
          {PROJECTS_DATA.map((project, index) => (
            <div
              key={index}
              className="project-card shrink-0"
              style={{ width: `${width}px` }}
            >
              <ProjectCard
                name={project.name}
                image={project.image}
                link={project.link}
                dynamicHeight={cardHeight}
              />
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
