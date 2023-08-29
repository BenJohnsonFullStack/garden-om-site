import Menu from "./Menu";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "./Logo";

function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const isActive = () => {
    setMenuActive(!menuActive);
  };

  return (
    <>
      <header className="header-wrapper">
        <Link exact to="/">
          <Logo />
        </Link>
        <Menu isActive={isActive} menuActive={menuActive} />
      </header>
      <Nav menuActive={menuActive} isActive={isActive} />
    </>
  );
}

export default Header;
