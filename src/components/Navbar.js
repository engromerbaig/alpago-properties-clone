'use client';

import Link from 'next/link';
import Image from 'next/image';
import Container from './Container';
import NAV_LINKS from '@/constants/navlinks';
import TranslateTextHover from './utils/TranslateTextHover';

export default function Navbar() {
  return (
    <nav className="absolute py-6 z-40 shadow-sm w-full">
      {/* Background overlay */}
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

          {/* Desktop Navigation */}
          <div className="space-x-6 uppercase hidden lg:flex">
            {NAV_LINKS.map((link, idx) => (
              <Link key={idx} href={link.href} className="group">
                <TranslateTextHover
                  text={link.name}
                  className="text-white font-normal"
                />
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </nav>
  );
}
