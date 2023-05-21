import React from "react";
import "../FormSwitchButton/FormSwitchButton.scss";

type FormSwitchButtonProps = {
  activeButton: "login" | "register";
  handleButtonClick: (buttonType: "login" | "register") => void;
};

const FormSwitchButton: React.FC<FormSwitchButtonProps> = ({
  activeButton,
  handleButtonClick,
}) => {
  return (
    <div className="form-buttons">
      <button
        className={`button ${activeButton === "login" ? "active" : ""}`}
        onClick={() => handleButtonClick("login")}
      >
        Zaloguj się
      </button>
      <button
        className={`button ${activeButton === "register" ? "active" : ""}`}
        onClick={() => handleButtonClick("register")}
      >
        Załóż konto
      </button>
    </div>
  );
};
export default FormSwitchButton;
