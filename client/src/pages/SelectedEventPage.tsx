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
import { formateDate } from "../utils/formateDate";
import localization from "../Assets/maps.png";

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
          <div className={selectedStyles.cards}>
            <div className={selectedStyles.thumbnail}>
              <img
                className={selectedStyles.left}
                src={localization}
                alt="google maps"
              ></img>
            </div>
            <div className={selectedStyles.right}>
              <h1 className={selectedStyles.name}>{event?.name}</h1>
              <div className={selectedStyles.separator}></div>
              <p>{event?.description}</p>
            </div>
            <h5 className={selectedStyles.dateTime}>
              {formateDate(event?.date!)}
            </h5>
          </div>
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
