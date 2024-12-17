import Link from 'next/link';
import Image from 'next/image'; // Import Image from Next.js
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-neutral-900 text-neutral-900 overflow-auto pt-16">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 bg-neutral-dark text-white shadow-md z-50">
          <div className="container mx-auto py-1 px-6">
            <nav className="flex justify-between items-center">
              {/* Logo Section */}
              <div className="flex items-center space-x-2">
                <Link href="/" className="flex items-center">
                  {/* Logo Image */}
                  <Image
                    src="/images/wallpaper.png" // Path to your uploaded logo
                    alt="Caffe Lloyd Bar Logo"
                    width={120} // Adjust the width of the logo
                    height={50} // Adjust the height of the logo
                    className="rounded-md object-contain" // Optional: adds rounded corners and background
                  />
                </Link>
              </div>

              {/* Main Navigation Links */}
              <div className="space-x-8 flex items-center">
                <Link
                  href="/"
                  className="px-3 py-2 rounded-lg font-semibold transition-all duration-300 border-2 border-neutral-dark hover:border-white "

                >
                  Home
                </Link>
                <Link
                  href="/menu"
                  className="px-3 py-2 rounded-lg font-semibold transition-all duration-300 border-2 border-neutral-dark hover:border-white "
                >
                  Menu
                </Link>
                <Link
                  href="/more-info/event-calendar"
                  className="px-3 py-2 rounded-lg font-semibold transition-all duration-300 border-2 border-neutral-dark hover:border-white "
                >
                  Events
                </Link>
                <Link
                  href="/games"
                  className="px-3 py-2 rounded-lg font-semibold transition-all duration-300 border-2 border-neutral-dark hover:border-white "
                >
                  Games
                </Link>
                <Link
                  href="/photo-gallery"
                  className="px-3 py-2 rounded-lg font-semibold transition-all duration-300 border-2 border-neutral-dark hover:border-white "
                >
                  Photo Gallery
                </Link>

                {/* Dropdown for More Info */}
                <div className="relative group">
                  <Link
                    href="/more-info"
                    className="px-3 py-2 rounded-lg font-semibold transition-all duration-300 border-2 border-neutral-dark hover:border-white "
                    >
                    More Info
                  </Link>

                  {/* Dropdown Menu */}
                  <ul className="pt-1 mt-2 absolute right-0 w-48 bg-white border-white border-2 text-white text-right shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all transform translate-y-2">
                    <li className="px-4 py-2 bg-neutral-dark hover:bg-primary-dark hover:text-white">
                      <Link href="/more-info/bar-story" className="block">
                        Bar Story
                      </Link>
                    </li>
                    <li className="px-4 py-2 bg-neutral-dark hover:bg-primary-dark hover:text-white">
                      <Link href="/more-info/event-calendar" className="block">
                        Event Calendar
                      </Link>
                    </li>
                    <li className="px-4 py-2 bg-neutral-dark hover:bg-primary-dark hover:text-white">
                      <Link href="/more-info/faqs" className="block">
                        FAQs
                      </Link>
                    </li>
                  </ul>

                </div>
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
