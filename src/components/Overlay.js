'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Overlay({ title, number, index, currentIndex, duration }) {
  const circleRef = useRef();

  useEffect(() => {
    if (index === currentIndex && duration) {
      gsap.set(circleRef.current, { strokeDashoffset: 251.2 }); // Updated
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
      <div className="relative w-20 h-20"> {/* Increased container size */}
        <svg className="absolute inset-0" width="80" height="80"> {/* Increased SVG size */}
          {/* Background Circle */}
          <circle
            r="40"
            cx="40"
            cy="40"
            fill="none"
            stroke="#fff"
            strokeWidth="1"
            opacity="0.2"
          />

          {/* Animated Progress Circle */}
          <circle
            ref={circleRef}
            r="40"
            cx="40"
            cy="40"
            fill="none"
            stroke="#fff"
            strokeWidth="1"
            strokeDasharray="251.2"
            strokeDashoffset="251.2"
            className="origin-center"
            style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}
          />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center font-bold text-xl">
          {number}
        </div>
      </div>
    </div>
  );
}
