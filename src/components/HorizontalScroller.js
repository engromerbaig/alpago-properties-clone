'use client';

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "./Container";
import Heading from "./Heading";
import { theme } from "@/theme";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroller({
  cardWidth,
  gap = 80,
  cardCount,
  sectionClassName = "",
  titleColor = "text-white",
  sectionStyle = {},
  trackClassName = "",
  renderTrackContent,
  title = "", // e.g., "PROJECTS" or "NEWS"
}) {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track || cardWidth === 0) return;

    // Calculate total width for horizontal scroll
    const totalWidth = (cardWidth + gap) * cardCount - window.innerWidth;

    // Set initial track width
    gsap.set(track, {
      width: (cardWidth + gap) * cardCount,
    });

    // Animate track horizontally
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
      },
    });

    // Cleanup ScrollTrigger instances on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [cardWidth, gap, cardCount]);

  return (
    <section
      ref={sectionRef}
      className={`relative h-screen w-full overflow-hidden ${sectionClassName}`}
      style={{ scrollSnapAlign: "start", ...sectionStyle }}
    >
      {/* Title - Positioned at top with higher z-index */}
      {title && (
        <Container className={`${theme.paddingTop} relative z-10`}>
          <Heading
            text={title}
            size="text-150px"
            centered={false}
            fontWeight="font-bold"
            color={titleColor}
            isAnimate
          />
        </Container>
      )}

      {/* Track - Positioned at bottom, below title */}
      <div
        ref={trackRef}
        className={`absolute bottom-10 left-0 flex px-10 ${trackClassName}`}
        style={{ gap: `${gap}px`, zIndex: 1 }} // Explicit z-index to ensure cards are below title
      >
        {renderTrackContent(cardWidth)}
      </div>
    </section>
  );
}