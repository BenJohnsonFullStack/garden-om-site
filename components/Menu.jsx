import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Nav from "./Nav";
import { useState } from "react";

function Menu() {
  const [active, setActive] = useState(false);

  const isActive = () => {
    setActive(!active);
  };

  return (
    <>
      <FontAwesomeIcon
        icon={faBars}
        onClick={isActive}
        style={{ color: "#044418" }}
      />
      <Nav active={active} isActive={isActive} />
    </>
  );
}

export default Menu;
