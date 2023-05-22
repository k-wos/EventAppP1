import "../LeftSideOfHome/LeftSideOfHome.scss";
import ProjectLogo from "../../Assets/Project.png";

function LeftSideOfHome() {
  return (
    <div className="a">
      <img src={ProjectLogo} className="ProjectLogo" alt="Planning people" />
    </div>
  );
}

export default LeftSideOfHome;
