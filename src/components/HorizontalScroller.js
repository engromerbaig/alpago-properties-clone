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
  title = "", // 👈 Accept title like "PROJECTS" or "NEWS"
}) {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track || cardWidth === 0) return;

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
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [cardWidth, gap, cardCount]);

  return (
    <section
      ref={sectionRef}
      className={`relative h-screen w-full overflow-hidden ${sectionClassName}`}
      style={{ scrollSnapAlign: "start", ...sectionStyle }}
    >
      {/* Title */}
      {title && (
        <Container className={`${theme.paddingTop} relative z-10`}>
          <Heading
            text={title}
            size="text-[120px]"
            centered={false}
            fontWeight="font-semibold"
            color={titleColor}
            className={`pb-10 `}
          />
        </Container>
      )}

      {/* Track */}
      <div
        ref={trackRef}
        className={`absolute bottom-10 left-0 flex px-10 ${trackClassName}`}
        style={{ gap: `${gap}px` }}
      >
        {renderTrackContent(cardWidth)}
      </div>
    </section>
  );
}
