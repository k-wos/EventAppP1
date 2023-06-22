import React from "react";
import { User } from "../models/user";
import * as UserApi from "../network/users.api";
import { Button, Navbar } from "react-bootstrap";

interface NavBarLoggedInProps {
  user: User;
  onLogoutSuccessful: () => void;
}

const NavBarLoggedInView = ({
  user,
  onLogoutSuccessful,
}: NavBarLoggedInProps) => {
  async function logout() {
    try {
      await UserApi.logout();
      onLogoutSuccessful();
    } catch (error) {
      alert(error);
      console.error(error);
    }
  }

  return (
    <>
      <Navbar.Text className="me-2">Zalogowany jako: {user.email}</Navbar.Text>
      <Button onClick={logout}>Wyloguj</Button>
    </>
  );
};

export default NavBarLoggedInView;
