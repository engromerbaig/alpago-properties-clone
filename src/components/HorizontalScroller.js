'use client';

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroller({
  cardWidth,
  gap = 80,
  cardCount,
  sectionClassName = "",
  sectionStyle = {},
  trackClassName = "",
  renderTrackContent,
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
