import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="absolute px-4 py-6 z-50 shadow-sm w-full">
      {/* Background layer */}
      <div className="bg-black/30 w-full h-full absolute inset-0 -z-10" />

      <div className="max-w-6xl mx-auto flex justify-between items-center relative z-10">
        <Link href="/" className="text-xl font-semibold flex items-center">
          <img src="/logo.png" alt="JobSite Logo" className="h-12 mr-2" />
        </Link>
        <div className="space-x-4 uppercase">
          <Link href="/" className="text-white hover:text-blue-600">Home</Link>
          <Link href="/about" className="text-white hover:text-blue-600">About</Link>
                    <Link href="/about" className="text-white hover:text-blue-600">Media</Link>

          <Link href="/contact" className="text-white hover:text-blue-600">Contact Us</Link>
                    <Link href="/contact" className="text-white hover:text-blue-600">Expertise</Link>


        </div>
      </div>
    </nav>
  );
}
