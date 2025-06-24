import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="absolute bg-black bg-opacity-50 border-b px-4 py-3 z-50 shadow-sm w-full">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-semibold flex items-center">
          <img src="/logo.png" alt="JobSite Logo" className="h-8 mr-2" />
          JobSite
        </Link>
        <div className="space-x-4">
          <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
        </div>
      </div>
    </nav>
  );
}