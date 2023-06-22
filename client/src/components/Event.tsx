import React from "react";
import styles from "../styles/Event.module.css";
import { EventModel as EventModelI } from "../models/event";
import { MdDelete } from "react-icons/md";

import { formateDate } from "../utils/formateDate";

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
  const { name, createdAt } = event;

  return (
    // <Card
    //   className={`${styles.eventCard} ${className}`}
    //   onClick={() => onEventClicked(event)}
    // >
    //   <Card.Body className={styles.cardBody}>

    //     <Card.Title className={`${styleUtil.textCenter}  `}>
    //       {name}
    //       <MdDelete
    //         className="text-muted ms-auto"
    //         onClick={(e) => {
    //           onDeleteEventClicked(event);
    //           e.stopPropagation();
    //         }}
    //       />
    //     </Card.Title>
    //     <Card.Text className={styles.cardText}>{description}</Card.Text>
    //   </Card.Body>
    //   <Card.Footer className={"text-muted"}>
    //     {formateDate(createdAt)}
    //   </Card.Footer>
    // </Card>
    <div
      className={`${styles.eventCard}`}
      onClick={() => onEventClicked(event)}
    >
      <div className={styles.cardHeader}>
        <MdDelete
          className={`text-muted ms-auto`}
          onClick={(e) => {
            onDeleteEventClicked(event);
            e.stopPropagation();
          }}
        />
      </div>

      <div className={styles.cardBody}>
        <h2 className={styles.name}>{name}</h2>
      </div>
      <div className={styles.cardFooter}>
        Data utworzenia: {formateDate(createdAt)}
      </div>
    </div>
  );
}

export default Event;
