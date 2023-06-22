import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as EventApi from "../network/events.api";
import { EventModel as EventModelI } from "../models/event";
import NavBar from "../components/NavBar";
import { User } from "../models/user";
import SidebarMenu from "../components/SidebarMenu";
import stylesUtils from "../styles/utils.module.css";
import selectedStyles from "../styles/SelectedEvent.module.css";
import avatar from "../Assets/avatar.png";

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
      <div className={stylesUtils.flexContent}>
        <SidebarMenu></SidebarMenu>
        <div className={selectedStyles.content}>
          {event?.name}
          {event?.description}
          {event?.town}
          {event?.address}
          {event?.date}
          {event?.organizer}
        </div>
        <div className={selectedStyles.userPanel}>
          <div className={selectedStyles.userBox}>
            <img src={avatar} className={selectedStyles.avatarIcon} alt="" />
            <p className={selectedStyles.userName}>Nazwa użytkownika</p>
          </div>
          <div className={selectedStyles.lastActivity}>
            <p className={selectedStyles.lastActivityParagraph}>
              Ostatnia aktywnosc:
            </p>
            <div className={selectedStyles.friends}>
              <img src={avatar} className={selectedStyles.avatarIcons} alt="" />
              <img src={avatar} className={selectedStyles.avatarIcons} alt="" />
              <img src={avatar} className={selectedStyles.avatarIcons} alt="" />
              <img src={avatar} className={selectedStyles.avatarIcons} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedEventPage;
