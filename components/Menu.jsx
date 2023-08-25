import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Nav from "./Nav";

function Menu() {
  return (
    <>
      <FontAwesomeIcon icon={faBars} style={{ color: "#044418" }} />
      <Nav />
    </>
  );
}

export default Menu;
