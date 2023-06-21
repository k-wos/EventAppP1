import LoginModal from "../components/LoginModal";
import SignUpModel from "../components/SignUpModel";
import homeStyles from "../styles/Home.module.css";

function HomePage() {
  return (
    <main className={homeStyles.mainContainer}>
      <SignUpModel onSignUpSuccessful={() => {}} onSignInClicked={() => {}} />;
    </main>
    // <main className={homeStyles.mainContainer}>
    //   <LoginModal onLoginSuccessful={() => {}} />;
    // </main>
  );
}

export default HomePage;
