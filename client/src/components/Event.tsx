import React from "react";
import styles from "../styles/Event.module.css";
import { EventModel as EventModelI } from "../models/event";
import { Card } from "react-bootstrap";
import { formateDate } from "../utils/formateDate";
import { MdDelete } from "react-icons/md";
import styleUtil from "../styles/utils.module.css";

interface EventProps {
  event: EventModelI;
  onEventClicked: (event: EventModelI) => void;
  onDeleteEventClicked: (event: EventModelI) => void;
  className?: string;
}

function Event({
  event,
  className,
  onDeleteEventClicked,
  onEventClicked,
}: EventProps) {
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
    <Card
      className={`${styles.eventCard} ${className}`}
      onClick={() => onEventClicked(event)}
    >
      <Card.Body className={styles.cardBody}>
        <Card.Title className={`${styleUtil.textCenter} `}>
          {name}
          <MdDelete
            className="text-muted ms-auto"
            onClick={(e) => {
              onDeleteEventClicked(event);
              e.stopPropagation();
            }}
          />
        </Card.Title>
        <Card.Text className={styles.cardText}>{description}</Card.Text>
      </Card.Body>
      <Card.Footer className={"text-muted"}>
        {formateDate(createdAt)}
      </Card.Footer>
    </Card>
  );
}

export default Event;
