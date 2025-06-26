'use client';

import Link from 'next/link';
import Container from './Container';
import NAV_LINKS from '@/constants/navlinks';
import { useState } from 'react';
import { getTranslateTextStyles } from './animations/translateText';

export default function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <nav className="absolute py-6 z-50 shadow-sm w-full">
      {/* Background layer */}
      <div className="bg-black/30 w-full h-full absolute inset-0 -z-10" />

      <Container>
        <div className="flex justify-between items-center relative z-10">
          {/* Logo */}
          <Link href="/" className="text-xl font-semibold flex items-center">
            <img src="/logo.png" alt="JobSite Logo" className="h-12 mr-2" />
          </Link>

          {/* Navigation Links */}
          <div className="hidden xl:flex space-x-6 uppercase">
            {NAV_LINKS.map((link, idx) => {
              const isHovered = hoveredIndex === idx;
              const { topText, bottomText } = getTranslateTextStyles(isHovered, false);

              return (
                <Link
                  key={idx}
                  href={link.href}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative overflow-hidden h-5"
                >
                  {/* Top Text (Hover Reveal) */}
                  <span
                    className="absolute top-0 left-0 transition-transform duration-300 text-white font-semibold"
                    style={topText}
                  >
                    {link.name}
                  </span>

                  {/* Bottom Text (Default) */}
                  <span
                    className="block transition-transform duration-300 text-white font-semibold"
                    style={bottomText}
                  >
                    {link.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </nav>
  );
}
