// /app/events/page.tsx
import Link from 'next/link';

export type Event = {
  id: number;
  title: string;
  body: string;
};

export default async function EventsPage() {
  // Fetch list of events from JSONPlaceholder
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
  const events: Event[] = await res.json();

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-primary-light text-4xl font-bold mb-6">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event: Event) => (
          <div key={event.id} className="p-6 bg-neutral-dark text-neutral-light rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-primary-light">{event.title}</h2>
            <p className="text-sm text-neutral-light mt-2">{event.body.substring(0, 60)}...</p>
            {/* Link to the dynamic page for this event */}
            <Link href={`/more-info/event-calendar/${event.id}`} className="text-accent-light font-medium hover:underline mt-4 block">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
