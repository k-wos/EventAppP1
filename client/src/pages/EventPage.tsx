import { Container } from "react-bootstrap";
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import { User } from "../models/user";
import * as UserApi from "../network/users.api";
import LoginModal from "../components/LoginModal";
import EventsPageLoggedInView from "../components/EventsPageLoggedInView";
import HomePage from "./HomePage";

function EventPage() {
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);
  const [showLogInForm, setShowLogInForm] = useState(false);

  useEffect(() => {
    async function fetchLoggedInUser() {
      try {
        const user = await UserApi.getLoggedInUser();
        setLoggedInUser(user);
      } catch (error) {
        console.error(error);
      }
    }
    fetchLoggedInUser();
  }, []);

  return (
    <div>
      <NavBar
        loggedInUser={loggedInUser}
        onLogoutSuccessful={() => {
          setShowLogInForm(true);
        }}
      />
      <Container>
        <>{loggedInUser ? <EventsPageLoggedInView /> : <HomePage />}</>
      </Container>
    </div>
  );
}

export default EventPage;
