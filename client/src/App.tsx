import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import EventPage from "./pages/EventPage";
import { User } from "./models/user";
import * as UserApi from "./network/users.api";
import LoginPage from "./pages/LoginPage";
import SelectedEventPage from "./pages/SelectedEventPage";

function App() {
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);

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
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/events"
            element={<EventPage loggedInUser={loggedInUser} />}
          />
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/events/:eventId" element={<SelectedEventPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
