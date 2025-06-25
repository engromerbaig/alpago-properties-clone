'use client';

import Link from 'next/link';
import Container from './Container';
import NAV_LINKS from '@/constants/navlinks';

export default function Navbar() {
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
          <div className="space-x-4 uppercase">
            {NAV_LINKS.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="text-white hover:text-blue-600"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </nav>
  );
}
