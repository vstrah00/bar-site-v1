import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="min-h-screen bg-neutral-black text-neutral-light">
      
      {/* Hero Section */}
      <section className="relative" style={{ height: "calc(100vh - 110px)" }}>
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/more1.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* Content */}
        <div className="container relative mx-auto h-full flex items-center justify-center text-center px-6">
          <div>
            <h2 className="text-6xl font-extrabold text-primary-light mb-4">Good Drinks, Good Vibes</h2>
            <p className="text-lg text-neutral-light mb-8">Relax with the best cocktails by the beach, only at Beach Bar.</p>
            <Link href="/menu">
              <button className="bg-primary-dark text-neutral-black px-6 py-3 rounded-lg text-xl font-semibold border-2 border-transparent hover:border-accent hover:text-primary-light transition">Explore the Menu</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="container mx-auto py-16 px-6 text-center">
        <h3 className="text-3xl font-semibold text-primary-light mb-8">Featured Drinks</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {/* Drink 1 */}
          <div className="bg-neutral-dark rounded-lg shadow-lg overflow-hidden transition hover:scale-105">
            <Image src="/images/drink1.jpg" alt="Cocktail 1" width={500} height={400} className="w-full h-64 object-contain" />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-primary-light">Tropical Breeze</h4>
              <p className="text-sm text-neutral-light mt-2">A refreshing mix of pineapple and coconut, served over ice.</p>
            </div>
          </div>

          {/* Drink 2 */}
          <div className="bg-neutral-dark rounded-lg shadow-lg overflow-hidden transition hover:scale-105">
            <Image src="/images/drink2.png" alt="Cocktail 2" width={500} height={400} className="w-full h-64 object-contain" />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-primary-light">Sunset Margarita</h4>
              <p className="text-sm text-neutral-light mt-2">A zesty blend of tequila, lime, and orange, perfect for sunsets.</p>
            </div>
          </div>

          {/* Drink 3 */}
          <div className="bg-neutral-dark rounded-lg shadow-lg overflow-hidden transition hover:scale-105">
            <Image src="/images/drink3.png" alt="Cocktail 3" width={500} height={400} className="w-full h-64 object-contain" />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-primary-light">Sea Breeze</h4>
              <p className="text-sm text-neutral-light mt-2">A smooth cocktail with vodka, cranberry, and lime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary-light py-16 text-center">
        <h3 className="text-4xl font-semibold text-neutral-black mb-4">Book Your Event</h3>
        <p className="text-lg text-neutral-dark mb-8">Hosting a party or gathering? Book our space today!</p>
        <Link href="/events">
          <button className="bg-primary-dark text-neutral-black px-6 py-3 rounded-lg text-xl font-semibold border-2 border-transparent hover:border-accent hover:text-primary-light transition">Book Now</button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-black text-neutral-light py-8">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Beach Bar | All Rights Reserved</p>
          <div className="flex justify-center space-x-6 mt-4">
            <Link href="https://facebook.com" className="hover:text-primary-light">Facebook</Link>
            <Link href="https://instagram.com" className="hover:text-primary-light">Instagram</Link>
            <Link href="https://twitter.com" className="hover:text-primary-light">Twitter</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
