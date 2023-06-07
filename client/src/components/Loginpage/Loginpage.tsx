import React, { useState } from "react";
import "../Loginpage/Loginpage.scss";
import Registerpage from "../Registerpage/Registerpage";

function Loginpage() {
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const handleClick = () => {
    alert("work");
  };
  return (
    <form action="">
      <div className="login">
        <h2>Zaloguj się</h2>
        <div className="inputBox">
          <input type="text" placeholder="Nazwa użytkownika"></input>
        </div>
        <div className="inputBox">
          <input type="password" placeholder="********"></input>
        </div>
        <div className="inputBox">
          <input type="submit" value={"Login"} id="btn"></input>
        </div>
        <div className="group">
          <a>Zapomniałeś hasła?</a>
          <a href="#" onClick={handleClick}>
            Zarejestruj się
          </a>
        </div>
      </div>
    </form>
  );
}

export default Loginpage;
