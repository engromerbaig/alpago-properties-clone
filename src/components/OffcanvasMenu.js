// components/OffcanvasMenu.js
'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import NAV_LINKS from '@/constants/navlinks';
import Heading from './Heading';

export default function OffcanvasMenu({ onClose }) {
  useEffect(() => {
    const scrollY = window.scrollY;
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, scrollY);
    };
  }, []);

  return (
    <motion.div
      key="offcanvas"
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'tween', duration: 0.3 }}
      className="fixed top-0 right-0 w-full h-screen z-[999] flex flex-col md:flex-row"
    >
      {/* Left: Nav + Logo */}
      <div className="w-full md:w-8/12 bg-black text-white p-8 flex flex-col justify-center items-center relative h-1/2 md:h-full">
        <Link
          href="/"
          onClick={onClose}
          className="absolute top-4 left-4"
        >
          <Image src="/logo.png" alt="Logo" width={100} height={40} />
        </Link>

        <div className="flex flex-col items-center justify-center space-y-6">
          {NAV_LINKS.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              onClick={onClose}
              className="text-xl font-semibold hover:text-blue-400 transition-all"
            >
              <Heading text={link.name} color="text-white" />
            </Link>
          ))}
        </div>
      </div>

      {/* Right: Image */}
      <div className="w-full md:w-4/12 bg-gray-100 flex items-center justify-center h-1/2 md:h-full">
        <Image
          src="/offcanvas.webp"
          alt="Off Canvas Image"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>
  );
}