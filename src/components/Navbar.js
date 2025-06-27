'use client';

import Link from 'next/link';
import Container from './Container';
import NAV_LINKS from '@/constants/navlinks';
import { useState, useEffect } from 'react';
import { getTranslateTextStyles } from './animations/translateText';
import useMediaQuery from './hooks/useMediaQuery';

export default function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mounted, setMounted] = useState(false);
  const isMobile = useMediaQuery('(max-width: 992px)');

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="absolute py-6 z-50 shadow-sm w-full">
      <div className="bg-black/30 w-full h-full absolute inset-0 -z-10" />

      <Container>
        <div className="flex justify-between items-center relative z-10">
          <Link href="/" className="text-xl font-semibold flex items-center">
            <img src="/logo.png" alt="JobSite Logo" className="h-12 mr-2" />
          </Link>

          {/* Hide nav links on mobile - prevent flash with CSS and conditional rendering */}
          <div 
            className={`space-x-6 uppercase transition-opacity duration-200 ${
              mounted ? 'flex' : 'hidden'
            } lg:flex hidden`}
          >
            {mounted && !isMobile && NAV_LINKS.map((link, idx) => {
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
                  <span
                    className="absolute top-0 left-0 transition-transform duration-300 text-white font-semibold"
                    style={topText}
                  >
                    {link.name}
                  </span>
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