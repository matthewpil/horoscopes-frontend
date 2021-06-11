import Logout from "../logout/logout";
import "./navbar.css";
export default function Navbar() {
  return (
    <nav className="nav-bar">
      <Logout className="navbar-link" />
      <a className="navbar-link" href="/profile">
        Profile
      </a>
    </nav>
  );
}
