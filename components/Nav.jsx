import { NavLink } from "react-router-dom";

function Nav(props) {
  const { active, isActive } = props;

  return (
    <div className="nav-wrapper">
      <div className="nav-bar">
        <div className="nav-links">
          <NavLink exact to="/book" activeClassName="active-link">
            Book
          </NavLink>
          <NavLink exact to="/pricing" activeClassName="active-link">
            Pricing
          </NavLink>
          <NavLink exact to="/blog" activeClassName="active-link">
            Blog
          </NavLink>
          <NavLink exact to="/about" activeClassName="active-link">
            About Us
          </NavLink>
          <NavLink exact to="/contact" activeClassName="active-link">
            Contact
          </NavLink>
        </div>
      </div>
      <div className="nav-scrim"></div>
    </div>
  );
}

export default Nav;
