import React from "react";
import { EventModel as EventModelI } from "../models/event";
import { Card } from "react-bootstrap";

interface EventProps {
  event: EventModelI;
}

function Event({ event }: EventProps) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{event.name}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default Event;
