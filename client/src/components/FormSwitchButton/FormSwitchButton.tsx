import React, { useState } from "react";
import "../FormSwitchButton/FormSwitchButton.scss";

type FormSwitchButtonProps = {
  activeButton: "login" | "register";
  handleButtonClick: (buttonType: "login" | "register") => void;
};

const FormSwitchButton: React.FC<FormSwitchButtonProps> = ({
  activeButton,
  handleButtonClick,
}) => {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked);

    handleButtonClick(isCheckboxChecked ? "register" : "login");
  };
  return (
    <div>
      <input
        className="check"
        type="checkbox"
        id="checkbox_toggle"
        checked={isCheckboxChecked}
        onChange={handleCheckboxChange}
      />
      <div className="checkbox">
        <label htmlFor="checkbox_toggle" className="slide">
          <label htmlFor="checkbox_toggle" className="toggle"></label>
          <label htmlFor="checkbox_toggle" className="text">
            Załóż konto
          </label>
          <label htmlFor="checkbox_toggle" className="text">
            Zaloguj się
          </label>
        </label>
      </div>
    </div>
  );
};
export default FormSwitchButton;
