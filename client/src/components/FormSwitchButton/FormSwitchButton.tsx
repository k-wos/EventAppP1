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
    // <div className="form-buttons">
    //   <button
    //     className={`button ${activeButton === "login" ? "active" : ""}`}
    //     onClick={() => handleButtonClick("login")}
    //   >
    //     Zaloguj się
    //   </button>
    //   <button
    //     className={`button ${activeButton === "register" ? "active" : ""}`}
    //     onClick={() => handleButtonClick("register")}
    //   >
    //     Załóż konto
    //   </button>
    // </div>
    <div>
      <input className="check" type="checkbox" id="checkbox_toggle"></input>
      <div className="checkbox">
        <label htmlFor="checkbox_toggle" className="slide">
          <label htmlFor="checkbox_toggle" className="toggle"></label>
          <label htmlFor="checkbox_toggle" className="text">
            Zaloguj się
          </label>
          <label htmlFor="checkbox_toggle" className="text">
            Załóż konto
          </label>
        </label>
      </div>
    </div>
  );
};
export default FormSwitchButton;
