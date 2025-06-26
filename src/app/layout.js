import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HamburgerMenu from '@/components/HamburgerMenu';
import './globals.css';
import VhUpdater from '@/components/utils/VhUpdater';

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
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="flex flex-col min-h-screen relative">
        <VhUpdater /> {/* 👈 Add it here */}
        <Navbar />
        <HamburgerMenu />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
