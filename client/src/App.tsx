import React from "react";
import logo from "./logo.svg";
import Registerpage from "./components/Registerpage/Registerpage";
import Homepage from "./components/Homepage/Homepage";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
