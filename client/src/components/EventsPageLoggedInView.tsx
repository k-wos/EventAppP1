import { useEffect, useState } from "react";
import { Button, Col, Spinner } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { AddEditEventDialog } from "../components/AddEditEventDialog";
import Event from "../components/Event";
import { EventModel as EventModelI } from "../models/event";
import * as EventsApi from "../network/events.api";
import styles from "../styles/EventPage.module.css";
import styleUtils from "../styles/utils.module.css";
import { useNavigate } from "react-router-dom";

interface EventsPageLoggedProps {
  showEvent?: EventModelI;
}

const EventsPageLoggedInView = ({ showEvent }: EventsPageLoggedProps) => {
  const [events, setEvents] = useState<EventModelI[]>([]);
  const [showAddEventDialog, setShowAddEventDialog] = useState(false);
  const [eventsLoading, setEventsLoading] = useState(true);
  const [showEventsLoadingError, setShowEventsLoadingError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    async function loadEvents() {
      try {
        setShowEventsLoadingError(false);
        setEventsLoading(true);
        const events = await EventsApi.fetchEvents();
        setEvents(events);
      } catch (error) {
        console.error(error);
        setShowEventsLoadingError(true);
      } finally {
        setEventsLoading(false);
      }
    }
    loadEvents();
  }, []);

  async function showSelectedEvent(event: EventModelI) {
    navigate(`/events/${event._id}`);
  }

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
    <div>
      <Button
        className={`mb-4 ${styleUtils.blockCenter} ${styleUtils.flexCenter} ${styles.addEvent}`}
        onClick={() => {
          setShowAddEventDialog(true);
        }}
      >
        <FaPlus />
        Dodaj wydarzenie
      </Button>
      <div className={styles.events}>
        {events.map((event) => (
          <Col key={event._id}>
            <Event
              event={event}
              className={styles.event}
              onEventClicked={showSelectedEvent}
              onDeleteEventClicked={deleteEvent}
            />
          </Col>
        ))}

        {eventsLoading && <Spinner animation="border" variant="primary" />}
        {showEventsLoadingError && <p>Coś poszlo nie tak...Odśwież!</p>}
        {!eventsLoading && !showEventsLoadingError && <></>}
      </div>
      {showAddEventDialog && (
        <AddEditEventDialog
          onDismiss={() => setShowAddEventDialog(false)}
          onEventSave={(newEvent) => {
            setEvents([...events, newEvent]);
            setShowAddEventDialog(false);
          }}
        />
      )}
    </div>
  );
};

export default EventsPageLoggedInView;
