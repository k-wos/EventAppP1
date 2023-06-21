import React from "react";
import LoginModal from "../components/LoginModal";
import { useNavigate } from "react-router-dom";
import homeStyles from "../styles/Home.module.css";

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <main className={homeStyles.mainContainer}>
      <LoginModal
        onLoginSuccessful={() => {
          navigate("/events");
        }}
      />
      ;
    </main>
  );
};

export default LoginPage;
