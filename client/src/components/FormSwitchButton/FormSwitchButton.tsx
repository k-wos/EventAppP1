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
      <button>Zaloguj się</button>
      <button>Załóż konto</button>
    </div>
  );
};
export default FormSwitchButton;
