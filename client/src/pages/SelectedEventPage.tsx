import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as EventApi from "../network/events.api";
import { EventModel as EventModelI } from "../models/event";

const SelectedEventPage = () => {
  const params = useParams();
  const [event, setEvent] = useState<EventModelI>();

  useEffect(() => {
    async function getNote() {
      try {
        const events = await EventApi.getEvent(params.eventId!);
        setEvent(events);
      } catch (error) {
        console.error(error);
        alert(error);
      }
    }
    getNote();
  }, []);

  return (
    <div>
      {event?.name}
      {event?.description}
      {event?.town}
      {event?.address}
      {event?.date}
      {event?.organizer}
    </div>
  );
};

export default SelectedEventPage;
