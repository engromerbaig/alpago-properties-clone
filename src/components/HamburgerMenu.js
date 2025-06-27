'use client';

import { useEffect, useState, useRef } from 'react';
import { FiX } from 'react-icons/fi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AnimatePresence } from 'framer-motion';
import OffcanvasMenu from './OffcanvasMenu';
import { radialHide, radialReveal } from './animations/radialReveal';
import useMediaQuery from './hooks/useMediaQuery';

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [showHamburger, setShowHamburger] = useState(false);
  const [mounted, setMounted] = useState(false);
  const navRef = useRef(null);
  const btnRef = useRef(null);
  const circleRef = useRef(null);

  const isMobile = useMediaQuery('(max-width: 992px)');

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Show hamburger logic
  useEffect(() => {
    if (!mounted) return;

    if (isMobile) {
      setShowHamburger(true); // Always visible on mobile
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowHamburger(!entry.isIntersecting);
      },
      { threshold: 0.6 }
    );

    if (navRef.current) observer.observe(navRef.current);
    return () => {
      if (navRef.current) observer.unobserve(navRef.current);
    };
  }, [isMobile, mounted]);

  // Animate radial reveal/hide
  useEffect(() => {
    if (!mounted) return;
    
    if (btnRef.current) {
      if (showHamburger) {
        radialReveal(btnRef.current, { duration: 0.5, scale: 1 });
      } else {
        radialHide(btnRef.current, { duration: 0.3 });
      }
    }
  }, [showHamburger, mounted]);

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

  // Don't render until mounted to prevent hydration issues
  if (!mounted) {
    return (
      <>
        {/* Invisible scroll tracker */}
        <div ref={navRef} className="w-full h-[1px]" />
        {/* Placeholder for mobile hamburger to prevent layout shift */}
        <div className="fixed top-5 right-5 z-50 w-12 h-12 lg:hidden" />
      </>
    );
  }

  return (
    <>
      {/* Invisible scroll tracker (used for IntersectionObserver) */}
      <div ref={navRef} className="w-full h-[1px]" />

      {/* Toggle button container */}
      <div 
        ref={btnRef} 
        className={`fixed top-5 right-5 z-50 transition-opacity duration-200 ${
          showHamburger ? 'opacity-100' : 'opacity-0 scale-0'
        }`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative w-12 h-12 rounded-full bg-hamburgerBg cursor-pointer flex items-center justify-center overflow-hidden"
        >
          {/* White radial hover layer for close icon */}
          {isOpen && (
            <span
              ref={circleRef}
              className="absolute inset-0 bg-white scale-0 rounded-full z-0 pointer-events-none"
            />
          )}

          {/* Icon */}
          <span
            className={`relative z-100 transition-colors duration-300 ${
              isOpen ? 'text-white hover:text-black' : 'text-white'
            }`}
          >
            {isOpen ? <FiX size={24} /> : <RxHamburgerMenu size={24} />}
          </span>
        </button>
      </div>

      {/* Offcanvas */}
      <AnimatePresence>
        {isOpen && <OffcanvasMenu onClose={() => setIsOpen(false)} />}
      </AnimatePresence>
    </>
  );
}