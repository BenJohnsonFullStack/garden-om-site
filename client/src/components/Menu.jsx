/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

const Menu = (props) => {
  const { isActive, menuActive } = props;

  return (
    <>
      <FontAwesomeIcon
        icon={!menuActive ? faBars : faX}
        onClick={isActive}
        className="menu-icon"
      />
    </>
  );
};

export default Menu;
