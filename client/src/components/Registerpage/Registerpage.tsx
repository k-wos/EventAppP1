import React from "react";
import "../Registerpage/Registerpage.scss";

function Registerpage() {
  return (
    <form action="">
      <label>Nazwa użytkownika</label>
      <input type="text" placeholder="Nazwa użytkownika" />
      <label>Hasło</label>
      <input type="password" placeholder="Hasło" />
      <button>Zarejestruj się</button>
    </form>
  );
}

export default Registerpage;
