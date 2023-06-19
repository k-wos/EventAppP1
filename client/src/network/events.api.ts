import { EventModel } from "../models/event";
import fetchData from "../utils/fetchData";

export async function fetchEvents(): Promise<EventModel[]> {
  const response = await fetchData("/api/events", {
    method: "GET",
  });
  return await response.json();
}

export interface EventInput {
  name: string;
  description?: string;
}

export async function createEvent(event: EventInput): Promise<EventModel> {
  const response = await fetchData("/api/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(event),
  });
  return response.json();
}

export async function updateEvent(
  eventId: string,
  event: EventInput
): Promise<EventModel> {
  const response = await fetchData("/api/events" + eventId, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(event),
  });
  return response.json();
}

export async function deleteEvent(eventId: string) {
  await fetchData("/api/events/" + eventId, {
    method: "DELETE",
  });
}
