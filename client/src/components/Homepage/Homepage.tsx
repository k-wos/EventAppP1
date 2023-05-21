import LeftSideOfHome from "../LeftSideOfHome/LeftSideOfHome";
import Registerpage from "../Registerpage/Registerpage";
import "../Homepage/Homepage.scss";
import FormSwitchButton from "../FormSwitchButton/FormSwitchButton";

function Homepage() {
  return (
    <main>
      <section className="LeftSide">
        <LeftSideOfHome />
      </section>
      <section className="form">
        <FormSwitchButton
          activeButton={"login"}
          handleButtonClick={function (buttonType: "login" | "register"): void {
            throw new Error("Function not implemented.");
          }}
        />
        <Registerpage />
      </section>
    </main>
  );
}

export default Homepage;
