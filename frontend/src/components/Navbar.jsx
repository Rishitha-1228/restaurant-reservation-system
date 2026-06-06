import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <h2>🍽 Royal Dine</h2>

      <ul>

        <li>
          <Link to="/">
            Home
          </Link>
        </li>

        <li>
          <Link to="/menu">
            Menu
          </Link>
        </li>

        <li>
          <Link to="/reservation">
            Reservations
          </Link>
        </li>

        <li>
          <Link to="/dashboard">
            Dashboard
          </Link>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;