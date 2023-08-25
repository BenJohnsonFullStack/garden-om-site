import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

function Nav(props) {
  const { active, isActive } = props;

  return (
    <div className="nav-screen">
      <div className="nav-bar">
        <FontAwesomeIcon icon={faX} style={{ color: "#044418" }} />
      </div>
      <div className="nav-scrim"></div>
    </div>
  );
}

export default Nav;
