import './globals.css';
import { Roboto } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HamburgerMenu from '@/components/HamburgerMenu';
import VhUpdater from '@/components/utils/VhUpdater';

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
  weight: ['variable'], // 🔥 
});

export const metadata = {
  title: 'The Leading Dubai Leading Real Estate Developer | Alpago Properties Clone',
  description:
    'Explore luxury real estate properties in Dubai with Alpago Properties – a modern, responsive replica showcasing high-end residential and commercial developments.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/logo.png" as="image" type="image/png" />
        <link rel="preload" href="/offcanvas.webp" as="image" type="image/webp" />
        <link rel="preload" href="/videos/1.mp4" as="video" type="video/mp4" />
      </head>
      <body className="flex flex-col min-h-screen relative font-roboto">
        <VhUpdater />
        <Navbar />
        <HamburgerMenu />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
