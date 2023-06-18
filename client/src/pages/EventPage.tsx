import React, { useEffect, useState } from "react";
import { EventModel as EventModelI } from "../models/event";
import Event from "../components/Event";

function EventPage() {
  const [events, setEvents] = useState<EventModelI[]>([]);

  useEffect(() => {
    async function loadEvents() {
      try {
        const response = await fetch("/api/events", {
          method: "GET",
        });
        const events = await response.json();
        setEvents(events);
      } catch (error) {
        console.error(error);
        alert(error);
      }
    }
    loadEvents();
  }, []);
  return (
    <div className="Events">
      {events.map((event) => (
        <Event event={event} key={event._id} />
      ))}
    </div>
  );
}

export default EventPage;
