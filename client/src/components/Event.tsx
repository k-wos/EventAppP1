import React from "react";
import styles from "../styles/Event.module.css";
import { EventModel as EventModelI } from "../models/event";
import { Card } from "react-bootstrap";

interface EventProps {
  event: EventModelI;
}

function Event({ event }: EventProps) {
  const {
    name,
    description,
    createdAt,
    updatedAt,
    address,
    town,
    date,
    organizer,
  } = event;

  return (
    <Card className={styles.eventCard}>
      <Card.Body>
        <Card.Title>{event.name}</Card.Title>
        <Card.Text className={styles.cardText}>{event.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Event;
