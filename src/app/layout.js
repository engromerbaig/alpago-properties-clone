import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HamburgerMenu from '@/components/HamburgerMenu'; // ← Import here
import './globals.css';

export const metadata = {
  title: 'Job Test Site',
  description: 'Basic Next.js site with Tailwind CSS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen relative">
        {/* Navbar always visible at top */}
        <Navbar />

        {/* Hamburger menu overlays and handles scroll-based visibility */}
        <HamburgerMenu />

        {/* Main content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
