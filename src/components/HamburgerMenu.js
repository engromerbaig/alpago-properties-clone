'use client';

import { useEffect, useState, useRef } from 'react';
import { FiX } from 'react-icons/fi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AnimatePresence } from 'framer-motion';
import OffcanvasMenu from './OffcanvasMenu';
import { radialHide, radialReveal } from './animations/radialReveal';

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [showHamburger, setShowHamburger] = useState(false);
  const navRef = useRef(null);
  const btnRef = useRef(null);

  // Detect when navbar is out of view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowHamburger(!entry.isIntersecting);
      },
      { threshold: 0.6 } // Adjust threshold to delay hamburger reveal
    );

    if (navRef.current) observer.observe(navRef.current);
    return () => {
      if (navRef.current) observer.unobserve(navRef.current);
    };
  }, []);

  // Animate hamburger button on visibility toggle
  useEffect(() => {
    if (btnRef.current) {
      if (showHamburger) {
        radialReveal(btnRef.current, { duration: 0.5, scale: 1 });
      } else {
        radialHide(btnRef.current, { duration: 0.3 });
      }
    }
  }, [showHamburger]);

  return (
    <>
      {/* Invisible tracker for scroll detection */}
      <div ref={navRef} className="w-full h-[1px]" />

      {/* Hamburger Toggle Button */}
      <div
        ref={btnRef}
        className="fixed top-5 right-5 z-50 scale-0 opacity-0"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-hamburgerBg text-white p-3 rounded-full flex items-center justify-center cursor-pointer"
        >
          {isOpen ? <FiX size={24} /> : <RxHamburgerMenu size={24} />}
        </button>
      </div>

      {/* Offcanvas Menu */}
      <AnimatePresence>
        {isOpen && <OffcanvasMenu onClose={() => setIsOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
