'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Overlay({ title, number, index, currentIndex, duration }) {
  const circleRef = useRef();

  useEffect(() => {
    if (index === currentIndex && duration) {
      gsap.set(circleRef.current, { strokeDashoffset: 188.4 }); // Reset before animating
      gsap.to(circleRef.current, {
        strokeDashoffset: 0,
        duration,
        ease: 'linear',
      });
    }
  }, [currentIndex, index, duration]);

  return (
    <div className="absolute z-20 inset-0 flex items-end justify-between px-10 pb-10 text-white">
      <h1 className="text-4xl font-bold max-w-xl">{title}</h1>
      <div className="relative w-16 h-16">
        <svg className="absolute inset-0" width="64" height="64">
          {/* Background Circle */}
          <circle
            r="30"
            cx="32"
            cy="32"
            fill="none"
            stroke="#fff"
            strokeWidth="4"
            opacity="0.2"
          />

          {/* Animated Progress Circle */}
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
            style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }} // Start from top
          />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center font-bold text-xl">
          {number}
        </div>
      </div>
    </div>
  );
}
