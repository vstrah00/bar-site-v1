import Link from 'next/link';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <header className="bg-white shadow-md">
          <div className="container mx-auto p-4">
            <nav className="flex justify-center space-x-8 relative">
              {/* Main Links */}
              <Link
                href="/"
                className="text-gray-800 hover:text-blue-600 font-semibold transition-colors"
              >
                Home
              </Link>
              <Link
                href="/menu"
                className="text-gray-800 hover:text-blue-600 font-semibold transition-colors"
              >
                Menu
              </Link>
              <Link
                href="/games"
                className="text-gray-800 hover:text-blue-600 font-semibold transition-colors"
              >
                Games
              </Link>
              <Link
                href="/photo-gallery"
                className="text-gray-800 hover:text-blue-600 font-semibold transition-colors"
              >
                Photo Gallery
              </Link>

              {/* Dropdown for More Info */}
              <div className="relative group">
                {/* "More Info" Link */}
                <Link
                  href="/more-info"
                  className="text-gray-800 hover:text-blue-600 font-semibold transition-colors m-0"
                >
                  More Info
                </Link>

                {/* Dropdown Menu */}
                <ul className="absolute left-0 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all transform translate-y-2">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link href="/more-info/bar-story" className="block text-gray-800">
                      Bar Story
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link href="/more-info/event-calendar" className="block text-gray-800">
                      Event Calendar
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link href="/more-info/faqs" className="block text-gray-800">
                      FAQs
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto p-6 text-center">{children}</main>

        
      </body>
    </html>
  );
}
