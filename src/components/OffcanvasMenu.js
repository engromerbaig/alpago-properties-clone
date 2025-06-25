// components/OffcanvasMenu.js
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import NAV_LINKS from '@/constants/navlinks';
import Heading from './Heading';

export default function OffcanvasMenu({ onClose }) {
  return (
    <motion.div
      key="offcanvas"
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'tween', duration: 0.3 }}
      className="fixed top-0 right-0 w-full h-screen z-40 flex flex-col md:flex-row"
    >
      {/* Left: Nav Links + Logo */}
      <div className="w-full md:w-8/12 bg-black text-white p-8 flex flex-col items-center justify-center relative">
        {/* Top-left logo */}
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
  );
}
