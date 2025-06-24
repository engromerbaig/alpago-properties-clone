'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Overlay({ title, number, index, currentIndex }) {
  const circleRef = useRef();

  useEffect(() => {
    if (index === currentIndex) {
      gsap.fromTo(
        circleRef.current,
        { strokeDashoffset: 100 },
        {
          strokeDashoffset: 0,
          duration: 8, // should match your video duration
          ease: 'linear',
        }
      );
    }
  }, [currentIndex, index]);

  return (
    <div className="absolute z-20 inset-0 flex items-center justify-between px-10 py-8 text-white">
      <h1 className="text-4xl font-bold max-w-xl">{title}</h1>
      <div className="relative w-16 h-16">
        <svg className="absolute inset-0" width="64" height="64">
          <circle
            r="30"
            cx="32"
            cy="32"
            fill="none"
            stroke="#fff"
            strokeWidth="4"
            strokeDasharray="188.4"
            strokeDashoffset="0"
            opacity="0.2"
          />
          <circle
            ref={circleRef}
            r="30"
            cx="32"
            cy="32"
            fill="none"
            stroke="#fff"
            strokeWidth="4"
            strokeDasharray="188.4"
            strokeDashoffset="188.4"
            className="origin-center"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center font-bold text-xl">
          {number}
        </div>
      </div>
    </div>
  );
}
