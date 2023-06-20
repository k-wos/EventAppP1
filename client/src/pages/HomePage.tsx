import SignUpModel from "../components/SignUpModel";
import homeStyles from "../styles/Home.module.css";

function HomePage() {
  return (
    <main className={homeStyles.mainContainer}>
      <SignUpModel onSignUpSuccessful={() => {}} />;
    </main>
  );
}

export default HomePage;
