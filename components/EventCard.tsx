import { Calendar, Clock, MapPin } from "lucide-react";
import Card from "@/components/ui/Card";
import type { EventItem } from "@/lib/types";

interface EventCardProps {
  event: EventItem;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <Card>
      <span className="inline-block rounded-full bg-gold-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold-700">
        {event.type}
      </span>
      <h3 className="mt-4 font-serif text-xl font-semibold text-navy-900">{event.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-navy-600">
        {event.description}
      </p>
      <ul className="mt-4 space-y-2 text-sm text-navy-700" aria-label="Event details">
        <li className="flex items-center gap-2">
          <Calendar className="h-4 w-4 shrink-0 text-gold-500" aria-hidden />
          <span>{event.date}</span>
        </li>
        <li className="flex items-center gap-2">
          <Clock className="h-4 w-4 shrink-0 text-gold-500" aria-hidden />
          <span>{event.time}</span>
        </li>
        <li className="flex items-center gap-2">
          <MapPin className="h-4 w-4 shrink-0 text-gold-500" aria-hidden />
          <span>{event.location}</span>
        </li>
      </ul>
    </Card>
  );
}
