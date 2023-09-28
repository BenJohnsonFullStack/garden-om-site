import { Link } from "react-router-dom";

const Nav = (props) => {
  // eslint-disable-next-line react/prop-types
  const { menuActive, isActive } = props;

  const closeMenuWithoutButton = (e) => {
    const target = e.target.className;
    if (target === "nav-wrapper") {
      isActive();
    }
  };

  if (menuActive) {
    return (
      <nav className="nav-wrapper" onClick={closeMenuWithoutButton}>
        <div className="nav-bar">
          <div className="nav-links">
            <Link
              to="https://gardenomyoga.simplybook.me"
              target="_blank"
              className="link"
            >
              Book
            </Link>
            <Link
              // exact to="/"
              className="link"
            >
              Pricing <span className="coming-soon">coming soon</span>
            </Link>
            <Link
              // exact to="/"
              className="link"
            >
              Blog <span className="coming-soon">coming soon</span>
            </Link>
            <Link
              // exact to="/"
              className="link"
            >
              About Us <span className="coming-soon">coming soon</span>
            </Link>
            <Link
              // exact to="/"
              className="link"
            >
              Contact <span className="coming-soon">coming soon</span>
            </Link>
          </div>
        </div>
      </nav>
    );
  }
};

export default Nav;
