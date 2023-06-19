import React, { useEffect, useState } from "react";
import { EventModel as EventModelI } from "../models/event";
import Event from "../components/Event";
import { Button, Col, Container, Row } from "react-bootstrap";
import styles from "../styles/EventPage.module.css";
import styleUtils from "../styles/utils.module.css";
import * as EventsApi from "../network/events.api";
import { AddEventDialog } from "../components/AddEventDialog";
import { FaPlus } from "react-icons/fa";

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

  async function deleteEvent(event: EventModelI) {
    try {
      await EventsApi.deleteEvent(event._id);
      setEvents(
        events.filter((existingEvent) => existingEvent._id !== event._id)
      );
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }
  return (
    <Container>
      <Button
        className={`mb-4 ${styleUtils.blockCenter} ${styleUtils.flexCenter}`}
        onClick={() => {
          setShowAddEventDialog(true);
        }}
      >
        <FaPlus />
        Dodaj wydarzenie
      </Button>
      <Row xs={1} md={2} x1={3} className="g-4">
        {events.map((event) => (
          <Col key={event._id}>
            <Event
              event={event}
              className={styles.event}
              onDeleteEventClicked={deleteEvent}
            />
          </Col>
        ))}
      </Row>
      {showAddEventDialog && (
        <AddEventDialog
          onDismiss={() => setShowAddEventDialog(false)}
          onEventSave={(newEvent) => {
            setEvents([...events, newEvent]);
            setShowAddEventDialog(false);
          }}
        />
      )}
    </Container>
  );
}

export default EventPage;
