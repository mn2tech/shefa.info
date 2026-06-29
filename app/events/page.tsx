import type { Metadata } from "next";
import PageCTA from "@/components/ui/PageCTA";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import EventCard from "@/components/EventCard";
import type { EventItem } from "@/lib/types";

export const metadata: Metadata = {
  title: "Results & Events",
  description:
    "Join Shefa events — networking breakfasts, lunch and learns, AI workshops, and business leader roundtables.",
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
      <PageHero
        eyebrow="Results & Events"
        title="Connect, Learn, and Grow Together"
        description="Shefa hosts regular events where business owners and leaders come together to network, learn, and share insights."
      />

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

      <PageCTA
        title="Stay in the Loop"
        description="Contact us to receive updates about upcoming events, workshops, and networking opportunities."
        buttonText="Get Event Updates"
      />
    </>
  );
}
