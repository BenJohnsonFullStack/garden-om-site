function Nav(props) {
  const { active, isActive } = props;

  return (
    <div className="nav-screen">
      <div className="nav-bar"></div>
      <div className="nav-scrim"></div>
    </div>
  );
}

export default Nav;
