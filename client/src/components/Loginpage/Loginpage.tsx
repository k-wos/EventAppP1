import React from "react";
import "../Loginpage/Loginpage.scss";

function Loginpage() {
  return (
    <form action="">
      <label>Nazwa użytkownika</label>
      <input type="text" placeholder="Nazwa użytkownika" />
      <label>Hasło</label>
      <input type="password" placeholder="***********" />
      <p className="forgetPasswd">Zapomniałeś hasła?</p>
      <button>Zaloguj się</button>
    </form>
  );
}

export default Loginpage;
