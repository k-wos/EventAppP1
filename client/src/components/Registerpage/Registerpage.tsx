import React from "react";
import "../Registerpage/Registerpage.scss";

function Registerpage() {
  return (
    <form action="">
      <label>Nazwa użytkownika</label>
      <input type="text" placeholder="Nazwa użytkownika" />
      <label>E-mail</label>
      <input type="text" placeholder="E-mail" />
      <label>Hasło</label>
      <input type="password" placeholder="***********" />
      <label>Potwierdź hasło</label>
      <input type="password" placeholder="***********" />
      <button className="registerButton">Zarejestruj się</button>
    </form>
  );
}

export default Registerpage;
