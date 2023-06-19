import React, { useEffect, useState } from "react";
import { EventModel as EventModelI } from "../models/event";
import Event from "../components/Event";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../styles/EventPage.module.css";
import * as EventsApi from "../network/events.api";
import { AddEventDialog } from "../components/AddEventDialog";

function EventPage() {
  const [events, setEvents] = useState<EventModelI[]>([]);
  const [showAddEventDialog, setShowAddEventDialog] = useState(false);

  useEffect(() => {
    async function loadEvents() {
      try {
        const events = await EventsApi.fetchEvents();
        setEvents(events);
      } catch (error) {
        console.error(error);
        alert(error);
      }
    }
    loadEvents();
  }, []);
  return (
    <Container>
      <Row xs={1} md={2} x1={3} className="g-4">
        {events.map((event) => (
          <Col key={event._id}>
            <Event event={event} className={styles.event} />
          </Col>
        ))}
      </Row>
      {showAddEventDialog && <AddEventDialog />}
    </Container>
  );
}

export default EventPage;
