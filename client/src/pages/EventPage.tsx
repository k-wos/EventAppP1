import React, { useEffect, useState } from "react";
import { EventModel } from "../models/event";

function EventPage() {
  const [events, setEvents] = useState<EventModel[]>([]);

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
  return <div className="Events">{JSON.stringify(events)}</div>;
}

export default EventPage;
