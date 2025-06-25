// components/News.js
'use client';

import React, { useEffect, useState } from "react";
import Container from "./Container";
import Heading from "./Heading";
import ProjectCard from "./ProjectCard";
import HorizontalScroller from "./HorizontalScroller";
import { NEWS_DATA } from "@/constants/news";

export default function News() {
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setCardWidth(window.innerWidth / 2);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardCount = NEWS_DATA.length + 1;

  return (
    <HorizontalScroller
      cardWidth={cardWidth}
      gap={80}
      cardCount={cardCount}
      sectionClassName="bg-pink-500"
      sectionStyle={{}}
      trackClassName="z-10"
      renderTrackContent={(width) => (
        <>
          {NEWS_DATA.map((item, index) => (
            <div
              key={index}
              className="project-card shrink-0"
              style={{ width: `${width}px` }}
            >
              <ProjectCard
                isNews
                name={item.name}
                image={item.image}
                link={item.link}
                date={item.date}
                month={item.month}
                year={item.year}
              />
            </div>
          ))}

          {/* Spacer */}
          <div
            className="project-card shrink-0 opacity-0 pointer-events-none"
            style={{ width: `${cardWidth}px` }}
          />
        </>
      )}
    />
  );
}
