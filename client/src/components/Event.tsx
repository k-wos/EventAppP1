import React from "react";
import styles from "../styles/Event.module.css";
import { EventModel as EventModelI } from "../models/event";
import { Card } from "react-bootstrap";
import { formateDate } from "../utils/formateDate";

interface EventProps {
  event: EventModelI;
  className?: string;
}

function Event({ event, className }: EventProps) {
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
    <Card className={`${styles.eventCard} ${className}`}>
      <Card.Body className={styles.cardBody}>
        <Card.Title>{name}</Card.Title>
        <Card.Text className={styles.cardText}>{description}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">{formateDate(createdAt)}</Card.Footer>
    </Card>
  );
}

export default Event;
