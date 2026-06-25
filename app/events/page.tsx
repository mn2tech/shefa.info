import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import EventCard from "@/components/EventCard";
import type { EventItem } from "@/lib/types";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Join Shefa Connect events — networking breakfasts, lunch and learns, AI workshops, and business leader roundtables.",
};

const events: EventItem[] = [
  {
    title: "Business Networking Breakfast",
    description:
      "Start your morning with meaningful connections. Meet fellow business owners and leaders over coffee and conversation.",
    date: "Date TBA",
    time: "8:00 AM – 10:00 AM",
    location: "TBA",
    type: "Networking",
  },
  {
    title: "Lunch and Learn",
    description:
      "A midday session featuring expert speakers on timely business topics, followed by open Q&A and networking.",
    date: "Date TBA",
    time: "12:00 PM – 1:30 PM",
    location: "TBA",
    type: "Education",
  },
  {
    title: "AI for Small Business Workshop",
    description:
      "Hands-on workshop exploring practical AI tools for marketing, operations, and customer service.",
    date: "Date TBA",
    time: "2:00 PM – 5:00 PM",
    location: "TBA",
    type: "Workshop",
  },
  {
    title: "Business Leader Roundtable",
    description:
      "An intimate discussion among business leaders sharing challenges, strategies, and lessons learned.",
    date: "Date TBA",
    time: "6:00 PM – 8:00 PM",
    location: "TBA",
    type: "Roundtable",
  },
];

export default function EventsPage() {
  return (
    <>
      <section className="bg-gray-soft py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-600">
              Events
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl">
              Connect, Learn, and Grow Together
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-navy-600">
              Shefa hosts regular events where business owners and leaders come
              together to network, learn, and share insights. Join us at our
              next gathering.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Upcoming Events"
            subtitle="Event dates and locations will be announced soon. Check back for updates."
          />
          <div className="grid gap-8 sm:grid-cols-2">
            {events.map((event) => (
              <EventCard key={event.title} event={event} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-soft py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-900">
            Stay in the Loop
          </h2>
          <p className="mt-4 text-lg text-navy-600">
            Contact us to receive updates about upcoming events, workshops, and
            networking opportunities.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">
              Get Event Updates
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
