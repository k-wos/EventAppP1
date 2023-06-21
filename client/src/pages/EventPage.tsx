import { Container } from "react-bootstrap";
import NavBar from "../components/NavBar";
import { User } from "../models/user";
import EventsPageLoggedInView from "../components/EventsPageLoggedInView";
import { useNavigate } from "react-router-dom";
import eventStyles from "../styles/EventPage.module.css";

interface EventPageProps {
  loggedInUser: User | null;
}

function EventPage({ loggedInUser }: EventPageProps) {
  const navigate = useNavigate();
  function backHome() {
    navigate("/");
  }

  return (
    <div>
      <NavBar loggedInUser={loggedInUser} onLogoutSuccessful={backHome} />
      <Container className={eventStyles.content}>
        <EventsPageLoggedInView />
      </Container>
    </div>
  );
}

export default EventPage;
