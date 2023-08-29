import { Link } from "react-router-dom";

function Nav(props) {
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
      <div className="nav-wrapper" onClick={closeMenuWithoutButton}>
        <div className="nav-bar">
          <div className="nav-links">
            <Link exact to="/book" className="link">
              Book
            </Link>
            <Link exact to="/" className="link">
              Pricing <span className="coming-soon">coming soon</span>
            </Link>
            <Link exact to="/" className="link">
              Blog <span className="coming-soon">coming soon</span>
            </Link>
            <Link exact to="/" className="link">
              About Us <span className="coming-soon">coming soon</span>
            </Link>
            <Link exact to="/" className="link">
              Contact <span className="coming-soon">coming soon</span>
            </Link>
          </div>
        </div>
        {/* <div className="nav-scrim" onClick={isActive}></div> */}
      </div>
    );
  }
}

export default Nav;
