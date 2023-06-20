import React from "react";
import logo from "./logo.svg";
import Registerpage from "./components/Registerpage/Registerpage";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import EventPage from "./pages/EventPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<EventPage />} /> */}
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
