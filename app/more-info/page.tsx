import Link from 'next/link';

export default function MoreInfoPage() {
  return (
    <div className="max-w-3xl mx-auto text-center mt-8">
      <h1 className="text-4xl font-bold text-primary-light mb-6">More Info</h1>
      <p className="text-lg text-neutral-light mb-4">
        Want to know more? Here’s the scoop:
      </p>

      {/* Subcategory Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Bar Story Link */}
        <Link
          href="/more-info/bar-story"
          className="block p-6 bg-neutral-dark hover:bg-neutral-darker transition-all duration-300 ease-in-out transform hover:scale-105 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-semibold text-primary-light hover:text-accent-dark transition-colors duration-300 ease-in-out">
            Bar Story
          </h2>
          <p className="text-neutral-light mt-2 hover:text-neutral-light transition-colors duration-300 ease-in-out">
            Learn the story behind our bar and how it all started.
          </p>
        </Link>

        {/* Event Calendar Link */}
        <Link
          href="/more-info/event-calendar"
          className="block p-6 bg-neutral-dark hover:bg-neutral-darker transition-all duration-300 ease-in-out transform hover:scale-105 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-semibold text-primary-light hover:text-accent-dark transition-colors duration-300 ease-in-out">
            Event Calendar
          </h2>
          <p className="text-neutral-light mt-2 hover:text-neutral-light transition-colors duration-300 ease-in-out">
            Stay updated with upcoming events and activities.
          </p>
        </Link>

        {/* FAQs Link */}
        <Link
          href="/more-info/faqs"
          className="block p-6 bg-neutral-dark hover:bg-neutral-darker transition-all duration-300 ease-in-out transform hover:scale-105 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-semibold text-primary-light hover:text-accent-dark transition-colors duration-300 ease-in-out">
            FAQs
          </h2>
          <p className="text-neutral-light mt-2 hover:text-neutral-light transition-colors duration-300 ease-in-out">
            Find answers to frequently asked questions.
          </p>
        </Link>
      </div>
    </div>
  );
}
