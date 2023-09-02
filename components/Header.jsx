import Menu from "./Menu";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { useState } from "react";
import HeaderLogo from "./Logo";

function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const scrollLock = () => {
    const bodyStyle = document.body.style;
    if (!menuActive) {
      bodyStyle.overflowY = "hidden";
    } else {
      bodyStyle.overflowY = "auto";
    }
  };

  const isActive = () => {
    setMenuActive(!menuActive);
    scrollLock();
  };

  return (
    <>
      <header className="header-wrapper">
        <Link exact to="/">
          <HeaderLogo />
        </Link>
        <Menu isActive={isActive} menuActive={menuActive} />
      </header>
      <Nav menuActive={menuActive} isActive={isActive} />
    </>
  );
}

export default Header;
