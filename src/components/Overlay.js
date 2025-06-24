'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Overlay({ title, number, index, currentIndex, duration }) {
  const circleRef = useRef();

  // 👇 Change this value to scale everything
  const radius = 150;
  const strokeWidth = 2;

  // 🧠 Auto calculations based on radius
  const circumference = 2 * Math.PI * radius;
  const size = (radius + strokeWidth) * 2; // SVG width & height
  const center = radius + strokeWidth; // cx and cy

  useEffect(() => {
    if (index === currentIndex && duration) {
      gsap.set(circleRef.current, { strokeDashoffset: circumference });
      gsap.to(circleRef.current, {
        strokeDashoffset: 0,
        duration,
        ease: 'linear',
      });
    }
  }, [currentIndex, index, duration, circumference]);

  return (
    <div className="absolute z-20 inset-0 flex items-end justify-between px-10 pb-10 text-white">
      <h1 className="text-4xl font-bold max-w-xl">{title}</h1>
      <div className="relative" style={{ width: size, height: size }}>
        <svg className="absolute inset-0" width={size} height={size}>
          {/* Background Circle */}
          <circle
            r={radius}
            cx={center}
            cy={center}
            fill="none"
            stroke="#fff"
            strokeWidth={strokeWidth}
            opacity="0.2"
          />

          {/* Animated Progress Circle */}
          <circle
            ref={circleRef}
            r={radius}
            cx={center}
            cy={center}
            fill="none"
            stroke="#fff"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            style={{
              transform: 'rotate(-90deg)',
              transformOrigin: 'center',
            }}
          />
        </svg>


   <div className="absolute inset-0 flex items-center justify-center font-light text-[100px]">
          {number}
        </div>

<div className='absolute inset-0 flex items-center justify-center font-light text-xl top-32 '>
  / 3
</div>

     
      </div>
    </div>
  );
}
