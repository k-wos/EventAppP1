import React from "react";
import "../Loginpage/Loginpage.scss";

function Loginpage() {
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
          <a>Zarejestruj się</a>
        </div>
      </div>
    </form>
  );
}

export default Loginpage;
