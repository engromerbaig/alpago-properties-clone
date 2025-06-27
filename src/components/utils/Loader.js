'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';

export default function Loader() {
  useEffect(() => {
    const boxes = document.querySelectorAll('.loader-box');

    gsap.timeline({
      defaults: { ease: 'power2.out' }
    }).to(boxes, {
      y: '-100%',
      duration: 0.8,
      stagger: {
        each: 0.1,
        from: 'end'
      }
      // ❌ Don't remove manually — React will handle 
    });
  }, []);

  return (
    <div className="loader-container fixed top-0 left-0 h-screen w-screen flex z-50 ">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="loader-box flex-1 h-full bg-loader"
        />
      ))}
    </div>
  );
}
