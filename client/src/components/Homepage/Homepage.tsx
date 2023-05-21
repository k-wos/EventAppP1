import LeftSideOfHome from "../LeftSideOfHome/LeftSideOfHome";
import Registerpage from "../Registerpage/Registerpage";
import "../Homepage/Homepage.scss";

function Homepage() {
  return (
    <main>
      <section className="LeftSide">
        <LeftSideOfHome />
      </section>
      <section>
        <Registerpage />
      </section>
    </main>
  );
}

export default Homepage;
