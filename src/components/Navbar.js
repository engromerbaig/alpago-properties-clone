'use client';

import Link from 'next/link';
import Image from 'next/image';
import Container from './Container';
import NAV_LINKS from '@/constants/navlinks';

export default function Navbar() {
  return (
    <nav className="absolute py-6 z-40 shadow-sm w-full">
      <div className="bg-black/30 w-full h-full absolute inset-0 -z-10" />

      <Container>
        <div className="flex justify-between items-center relative z-10">
          {/* Logo */}
          <Link href="/" className="text-xl font-semibold flex items-center">
            <Image
              src="/logo.png"
              alt="Alpago Properties Clone"
              width={120}
              height={60}
              priority
              className="mr-2"
            />
          </Link>

          {/* Nav links - visible on desktop via CSS */}
          <div className="space-x-6 uppercase hidden lg:flex">
            {NAV_LINKS.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="relative overflow-hidden h-5 group"
              >
                {/* Top text */}
                <span className="absolute top-0 left-0 transition-transform duration-300 text-white font-semibold group-hover:-translate-y-full">
                  {link.name}
                </span>
                {/* Bottom text */}
                <span className="block transition-transform duration-300 text-white font-semibold translate-y-full group-hover:translate-y-0">
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </nav>
  );
}
