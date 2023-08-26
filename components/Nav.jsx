import { Link } from "react-router-dom";

function Nav(props) {
  const { active, isActive } = props;

  return (
    <div className="nav-wrapper">
      <div className="nav-bar">
        <div className="nav-links">
          <Link exact to="/book">
            Book
          </Link>
          <Link exact to="/pricing">
            Pricing
          </Link>
          <Link exact to="/blog">
            Blog
          </Link>
          <Link exact to="/about">
            About Us
          </Link>
          <Link exact to="/contact">
            Contact
          </Link>
        </div>
      </div>
      <div className="nav-scrim"></div>
    </div>
  );
}

export default Nav;
