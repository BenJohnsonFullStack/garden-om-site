/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";

function Menu(props) {
  const { isActive, menuActive } = props;

  return (
    <>
      <FontAwesomeIcon
        icon={!menuActive ? faBars : faX}
        onClick={isActive}
        style={{ color: "#044418", marginRight: "1em" }}
      />
    </>
  );
}

export default Menu;
