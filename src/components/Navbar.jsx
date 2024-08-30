import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span>CRYPTO</span>
      </div>
      <div className="navbar-menu">
        <span>Home</span>
        <span>Features</span>
        <span>Roadmap</span>
      </div>
      <div className="navbar-right">
        <input type="button" value="SIGN IN" className="navbar-btn" />
      </div>
    </nav>
  );
}

export default Navbar;
