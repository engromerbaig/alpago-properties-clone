import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HamburgerMenu from '@/components/HamburgerMenu';
import './globals.css';
import VhUpdater from '@/components/utils/VhUpdater';
import { Suspense } from 'react';
import Loader from '@/components/utils/Loader';

export const metadata = {
  title: 'The Leading Dubai Leading Real Estate Developer | Alpago Properties Clone',
  description:
    'Explore luxury real estate properties in Dubai with Alpago Properties – a modern, responsive replica showcasing high-end residential and commercial developments.',
  icons: {
    icon: '/favicon.ico',
  },
};

function LayoutStructure({ children }) {
  return (
    <body className="flex flex-col min-h-screen relative">
      <VhUpdater />
      <Navbar />
      <HamburgerMenu />
      <main className="flex-grow">{children}</main>
      <Footer />
    </body>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* pre load the logo */}
        <link rel="preload" href="/logo.png" as="image" type="image/png" />
        {/* Preload video fallback image */}
        <link rel="preload" href="/video-fallback.webp" as="image" type="image/webp" />

        {/* pre load off canvas image */}
        <link rel="preload" href="/offcanvas.webp" as="image" type="image/webp" />
        {/* Optionally preload the first video for faster loading */}
        <link rel="preload" href="/videos/1.mp4" as="video" type="video/mp4" />
      </head>
      <Suspense fallback={<Loader />}>
        <LayoutStructure>{children}</LayoutStructure>
      </Suspense>
    </html>
  );
}