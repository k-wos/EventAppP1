import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as EventApi from "../network/events.api";
import { EventModel as EventModelI } from "../models/event";
import NavBar from "../components/NavBar";
import { User } from "../models/user";
import SidebarMenu from "../components/SidebarMenu";

interface SelectedEventPageProps {
  loggedInUser: User | null;
}

const SelectedEventPage = ({ loggedInUser }: SelectedEventPageProps) => {
  const params = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState<EventModelI>();

  useEffect(() => {
    async function getNote() {
      try {
        const events = await EventApi.getEvent(params.eventId!);
        setEvent(events);
      } catch (error) {
        console.error(error);
        alert(error);
      }
    }
    getNote();
  }, []);
  function backHome() {
    navigate("/");
  }

  return (
    <div>
      <NavBar loggedInUser={loggedInUser} onLogoutSuccessful={backHome} />
      <SidebarMenu></SidebarMenu>
      <div>
        {event?.name}
        {event?.description}
        {event?.town}
        {event?.address}
        {event?.date}
        {event?.organizer}
      </div>
    </div>
  );
};

export default SelectedEventPage;
