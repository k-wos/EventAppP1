import { redirect, useNavigate } from "react-router-dom";
import LoginModal from "../components/LoginModal";
import SignUpModel from "../components/SignUpModel";
import homeStyles from "../styles/Home.module.css";

function HomePage() {
  const navigate = useNavigate();
  return (
    <main className={homeStyles.mainContainer}>
      <SignUpModel
        onSignUpSuccessful={() => {}}
        onSignInClicked={() => {
          navigate("/login");
        }}
      />
      ;
    </main>
  );
}

export default HomePage;
