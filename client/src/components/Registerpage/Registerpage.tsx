import React from "react";
import "../Registerpage/Registerpage.scss";

function Registerpage() {
  return (
    <form action="">
      <div className="register">
        <h2>Zaloguj się</h2>
        <div className="inputBox">
          <input type="text" placeholder="Nazwa użytkownika"></input>
        </div>
        <div className="inputBox">
          <input type="text" placeholder="E-mail"></input>
        </div>
        <div className="inputBox">
          <input type="text" placeholder="Hasło"></input>
        </div>
        <div className="inputBox">
          <input type="password" placeholder="Potwierdź hasło"></input>
        </div>
        <div className="inputBox">
          <input type="submit" value={"Zarejestruj się"} id="btn"></input>
        </div>
        <div className="group">
          <a>Zapomniałeś hasła?</a>
          <a>Zarejestruj się</a>
        </div>
      </div>
    </form>
  );
}

export default Registerpage;
