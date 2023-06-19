import { EventModel } from "../models/event";

async function fetchData(input: RequestInfo, init?: RequestInit) {
  const response = await fetch(input, init);
  if (response.ok) {
    return response;
  } else {
    const errorBody = await response.json();
    const errorMessage = errorBody.console.error();
    throw Error(errorMessage);
  }
}

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
