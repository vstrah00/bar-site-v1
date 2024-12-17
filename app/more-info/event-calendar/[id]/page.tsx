import { Event } from "../page"; // Import Event type from parent page

type EventParams = {
  params: Promise<{
    id: string; // This will be the dynamic part of the URL
  }>;
};

export default async function EventPage({ params }: EventParams) {
  const { id } = await params;

  // Fetch individual event data based on the id
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const event: Event = await res.json();

  if (!event) {
    return <h1 className="text-center text-2xl text-red-500">Event not found</h1>;
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-primary-light mb-4">{event.title}</h1>
      <p className="text-lg text-neutral-light">{event.body}</p>
    </div>
  );
}
