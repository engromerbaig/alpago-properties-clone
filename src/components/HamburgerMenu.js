// components/HamburgerMenu.js
'use client';

import { useEffect, useRef, useState } from 'react';
import { FiX } from 'react-icons/fi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AnimatePresence } from 'framer-motion';
import OffcanvasMenu from './OffcanvasMenu';
import { radialHide, radialReveal } from './animations/radialReveal';

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const btnRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(min-width: 993px)').matches) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (btnRef.current) {
            if (!entry.isIntersecting) {
              radialReveal(btnRef.current, { duration: 0.5, scale: 1 });
            } else {
              radialHide(btnRef.current, { duration: 0.3 });
            }
          }
        },
        { threshold: 0.6 }
      );

      if (navRef.current) observer.observe(navRef.current);
      return () => {
        if (navRef.current) observer.unobserve(navRef.current);
      };
    }
  }, []);

  const handleMouseEnter = () => {
    if (circleRef.current && isOpen) {
      radialReveal(circleRef.current, { duration: 0.3, scale: 1 });
    }
  };

  const handleMouseLeave = () => {
    if (circleRef.current && isOpen) {
      radialHide(circleRef.current, { duration: 0.3, scale: 0 });
    }
  };

  return (
    <>
      <div ref={navRef} className="w-full h-[1px]" />

      <div
        ref={btnRef}
        className={`fixed top-5 right-5 ${isOpen ? 'z-[1001]' : 'z-50'} transition-opacity duration-200 lg:opacity-0`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative w-12 h-12 rounded-full bg-hamburgerBg cursor-pointer flex items-center justify-center overflow-hidden"
        >
          {isOpen && (
            <span
              ref={circleRef}
              className="absolute inset-0 bg-white scale-0 rounded-full z-0 pointer-events-none"
            />
          )}

          <span
            className={`relative z-10 transition-colors duration-300 ${
              isOpen ? 'text-white hover:text-black' : 'text-white'
            }`}
          >
            {isOpen ? <FiX size={24} /> : <RxHamburgerMenu size={24} />}
          </span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && <OffcanvasMenu onClose={() => setIsOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
