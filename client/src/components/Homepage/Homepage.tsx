import LeftSideOfHome from "../LeftSideOfHome/LeftSideOfHome";
import Registerpage from "../Registerpage/Registerpage";
import "../Homepage/Homepage.scss";
import FormSwitchButton from "../FormSwitchButton/FormSwitchButton";
import { useState } from "react";
import Loginpage from "../Loginpage/Loginpage";

const Homepage: React.FC = () => {
  const [activeButton, setActiveButton] = useState<"login" | "register">(
    "register"
  );

  const handleButtonClick = (buttonType: "login" | "register") => {
    setActiveButton(buttonType);
  };

  return (
    <main className="mainContainer">
      <section className="LeftSide">
        <LeftSideOfHome />
      </section>
      <section className="form">
        <FormSwitchButton
          activeButton={activeButton}
          handleButtonClick={handleButtonClick}
        />
        {activeButton === "login" ? <Loginpage /> : <Registerpage />}
      </section>
    </main>
  );
};

export default Homepage;
