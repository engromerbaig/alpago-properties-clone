import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white border-b px-4 py-3 shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-semibold text-blue-600">JobSite</Link>
        <div className="space-x-4">
          <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
