import React from "react";
import { User } from "../models/user";
import { Container, Nav, Navbar } from "react-bootstrap";
import NavBarLoggedInView from "./NavBarLoggedInView";
import NavBarLoggedOutView from "./NavBarLoggedoutView";

interface NavBarProps {
  loggedInUser: User | null;
  onLogoutSuccessful: () => void;
}

const NavBar = ({ loggedInUser, onLogoutSuccessful }: NavBarProps) => {
  return (
    <Navbar bg="light" data-bs-theme="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand>Event App</Navbar.Brand>
        <Nav className="ms-auto">
          {loggedInUser ? (
            <NavBarLoggedInView
              user={loggedInUser}
              onLogoutSuccessful={onLogoutSuccessful}
            />
          ) : (
            <NavBarLoggedOutView />
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
