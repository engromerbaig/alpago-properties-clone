// components/HamburgerMenu.js
'use client';

import { useEffect, useState, useRef } from 'react';
import { FiX } from 'react-icons/fi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AnimatePresence } from 'framer-motion';
import OffcanvasMenu from './OffcanvasMenu';

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [showHamburger, setShowHamburger] = useState(false);
  const navRef = useRef(null);

  // Detect when navbar is out of view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowHamburger(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (navRef.current) {
      observer.observe(navRef.current);
    }

    return () => {
      if (navRef.current) observer.unobserve(navRef.current);
    };
  }, []);

  return (
    <>
      {/* Invisible tracker div for scroll detection */}
      <div ref={navRef} className="w-full h-[1px]" />

      {/* Hamburger Toggle Button */}
      <div className={`fixed top-5 right-5 z-50 ${showHamburger ? 'block' : 'md:hidden'}`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-hamburgerBg text-white p-3 rounded-full flex items-center justify-center"
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
