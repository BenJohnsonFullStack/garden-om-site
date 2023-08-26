import { Link } from "react-router-dom";

function Nav(props) {
  // eslint-disable-next-line react/prop-types
  const { menuActive } = props;
  if (menuActive) {
    return (
      <div className="nav-wrapper">
        <div className="nav-bar">
          <div className="nav-links">
            <Link exact to="/book" className="link">
              Book
            </Link>
            <Link exact to="/pricing" className="link">
              Pricing
            </Link>
            <Link exact to="/blog" className="link">
              Blog
            </Link>
            <Link exact to="/about" className="link">
              About Us
            </Link>
            <Link exact to="/contact" className="link">
              Contact
            </Link>
          </div>
        </div>
        <div className="nav-scrim"></div>
      </div>
    );
  }
}

export default Nav;
