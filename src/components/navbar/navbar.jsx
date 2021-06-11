import Logout from "../logout/logout";
import "./navbar.css";
export default function Navbar() {
  return (
    <nav className="nav-bar">
      <Logout />
      <a className="navbar-link" href="/profile"></a>
    </nav>
  );
}
