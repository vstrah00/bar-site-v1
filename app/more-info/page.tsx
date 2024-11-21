import Link from 'next/link';

export default function MoreInfoPage() {
  return (
    <div className="max-w-3xl mx-auto text-center mt-8">
      <h1 className="text-4xl font-bold mb-6">More Info</h1>
      <p className="text-lg text-gray-700 mb-4">
        Want to know more? Here’s the scoop:
      </p>

      {/* Subcategory Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Bar Story Link */}
        <Link
          href="/more-info/bar-story"
          className="block p-6 bg-blue-50 hover:bg-blue-100 transition rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-semibold text-blue-600">Bar Story</h2>
          <p className="text-gray-600 mt-2">
            Learn the story behind our bar and how it all started.
          </p>
        </Link>

        {/* Event Calendar Link */}
        <Link
          href="/more-info/event-calendar"
          className="block p-6 bg-blue-50 hover:bg-blue-100 transition rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-semibold text-blue-600">Event Calendar</h2>
          <p className="text-gray-600 mt-2">
            Stay updated with upcoming events and activities.
          </p>
        </Link>

        {/* FAQs Link */}
        <Link
          href="/more-info/faqs"
          className="block p-6 bg-blue-50 hover:bg-blue-100 transition rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-semibold text-blue-600">FAQs</h2>
          <p className="text-gray-600 mt-2">
            Find answers to frequently asked questions.
          </p>
        </Link>
      </div>
    </div>
  );
}
