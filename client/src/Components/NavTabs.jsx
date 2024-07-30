import { Link, useLocation } from 'react-router-dom';
import logo from "../assets/images/move-mate-logo.jpeg";

function NavTabs() {
  const currentPage = useLocation().pathname;
  return (
    <nav>
      <img src={logo} alt="Move Mate Logo" />
      <ul className="nav nav-tabs">
      <li className="nav-item">
          <Link
            to="/"
            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/About-Us"
            className={currentPage === '/About-Us' ? 'nav-link active' : 'nav-link'}
          >
            About Us
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Login"
            className={currentPage === '/Login' ? 'nav-link active' : 'nav-link'}
          >
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Sign-Up"
            className={currentPage === '/Sign-Up' ? 'nav-link active' : 'nav-link'}
          >
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavTabs;
