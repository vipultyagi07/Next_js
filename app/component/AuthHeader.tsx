import Link from 'next/link';

export default function AuthHeader() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
    <div className="container mx-auto flex justify-between items-center py-4 px-6">
      <h1 className="text-2xl font-bold">
        <Link href="/">Forgot Password</Link>
      </h1>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6">
        <Link href="/register" className="hover:underline">
          Register
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
      </nav>
      {/* Mobile Menu Button (static icon; add interactivity if needed) */}
      <div className="md:hidden">
        <button className="focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </header>
  );
}
