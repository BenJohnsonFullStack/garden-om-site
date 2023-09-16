import Menu from "./Menu";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import HeaderLogo from "./Logo";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    if (menuActive) {
      document.body.classList.add("lock-scroll");
    } else {
      document.body.classList.remove("lock-scroll");
    }
  }, [menuActive]);

  const isActive = () => {
    setMenuActive(!menuActive);
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
};

export default Header;
