import React from "react";
import { User } from "../models/user";
import { Container, Navbar } from "react-bootstrap";

interface NavBarProps {
  loggedInUser: User | null;
  onLogoutSuccessful: () => void;
}

const NavBar = ({ loggedInUser, onLogoutSuccessful }: NavBarProps) => {
  return (
    <Navbar bg="light" data-bs-theme="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand>Event App</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBar;
