import React from "react";

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
        className={activeButton === "login" ? "active" : ""}
        onClick={() => handleButtonClick("login")}
      >
        Zaloguj się
      </button>
      <button
        className={activeButton === "register" ? "active" : ""}
        onClick={() => handleButtonClick("register")}
      >
        Załóż konto
      </button>
    </div>
  );
};
export default FormSwitchButton;
