import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import Nav from "./Nav";
import { useState } from "react";

function Menu() {
  const [active, setActive] = useState(true);

  const isActive = () => {
    setActive(!active);
  };

  console.log(active);

  return (
    <>
      <FontAwesomeIcon
        icon={!active ? faBars : faX}
        onClick={isActive}
        style={{ color: "#044418" }}
      />
      <Nav active={active} isActive={isActive} />
    </>
  );
}

export default Menu;
