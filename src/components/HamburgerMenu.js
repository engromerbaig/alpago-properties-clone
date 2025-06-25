'use client';

import { useEffect, useState, useRef } from 'react';
import { FiX } from 'react-icons/fi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { motion, AnimatePresence } from 'framer-motion';
import NAV_LINKS from '@/constants/navlinks';
import Link from 'next/link';
import Image from 'next/image';

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
        {isOpen && (
          <motion.div
            key="offcanvas"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 w-full h-screen bg-white z-40 flex flex-col md:flex-row"
          >
            {/* Left: Nav Links + Logo */}
            <div className="w-full md:w-8/12 p-8 flex flex-col justify-between">
              <div>
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <img src="/logo.png" alt="Logo" className="w-24 mb-8" />
                </Link>
                {NAV_LINKS.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-xl font-semibold text-black mb-4 hover:text-blue-600"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <p className="text-sm text-gray-500">© 2025 Your Company</p>
            </div>

            {/* Right: Placeholder Image */}
<div className="w-full md:w-4/12 bg-gray-100 p-0 flex items-center justify-center">
  <div className="w-full h-full">
    <Image
      src="/offcanvas.webp"
      alt="Placeholder"
      width={500}
      height={500}
      className="w-full h-full object-cover"
    />
  </div>
</div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
