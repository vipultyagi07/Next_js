import Link from 'next/link';
import '@/app/globals.css';


export default function RootFooter() {
    return (
        <footer className="bg-gray-900 text-gray-300">
        <div className="container mx-auto py-4 px-6">
          <div className="flex flex-wrap justify-between">
            {/* About Section */}
            <div className="w-full md:w-1/3 mb-4">
              <h4 className="text-base font-semibold mb-2">About</h4>
              <p className="text-xs">
                MySite is a modern platform offering cutting-edge solutions to empower your business.
              </p>
            </div>
            {/* Links Section */}
            <div className="w-full md:w-1/3 mb-4">
              <h4 className="text-base font-semibold mb-2">Quick Links</h4>
              <ul>
                <li>
                  <Link href="/" className="hover:underline text-xs">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:underline text-xs">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:underline text-xs">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline text-xs">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            {/* Social Section */}
            <div className="w-full md:w-1/3 mb-4">
              <h4 className="text-base font-semibold mb-2">Follow Us</h4>
              <div className="flex space-x-3">
                <Link href="https://twitter.com" className="hover:text-white" target="_blank" rel="noopener noreferrer">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.38 8.59 8.59 0 01-2.72 1.04 4.28 4.28 0 00-7.29 3.9A12.13 12.13 0 013 4.9a4.28 4.28 0 001.32 5.71 4.26 4.26 0 01-1.94-.54v.05a4.28 4.28 0 003.43 4.19 4.3 4.3 0 01-1.93.07 4.28 4.28 0 004 2.98A8.6 8.6 0 012 19.54a12.13 12.13 0 006.56 1.92c7.88 0 12.2-6.54 12.2-12.2 0-.19 0-.39-.01-.58A8.66 8.66 0 0024 4.56a8.53 8.53 0 01-2.54.7z" />
                  </svg>
                </Link>
                <Link href="https://facebook.com" className="hover:text-white" target="_blank" rel="noopener noreferrer">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12a10 10 0 10-11.5 9.95v-7.05H8v-2.9h2.5V9.7c0-2.45 1.47-3.8 3.72-3.8 1.08 0 2.2.2 2.2.2v2.42h-1.24c-1.22 0-1.6.76-1.6 1.55v1.87h2.72l-.43 2.9h-2.29v7.05A10 10 0 0022 12z" />
                  </svg>
                </Link>
                <Link href="https://instagram.com" className="hover:text-white" target="_blank" rel="noopener noreferrer">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5A4.25 4.25 0 0020.5 16.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.75-.75a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-4 text-center text-xs">
            &copy; {new Date().getFullYear()} MySite. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }
  