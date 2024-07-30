import { Link, useLocation } from 'react-router-dom';
import logo from "../assets/images/move-mate-logo.jpeg";

function HomeTabs() {
  const currentPage = useLocation().pathname;

  return (
    <nav>
      <img src={logo} alt="Move Mate Logo" />
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            to="/Homepage"
            className={currentPage === '/Homepage' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/My-Workouts"
            className={currentPage === '/My-Workouts' ? 'nav-link active' : 'nav-link'}
          >
            My Workouts
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Log"
            className={currentPage === '/Log' ? 'nav-link active' : 'nav-link'}
          >
            Workout History
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/"
            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
          >
            Log Out
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default HomeTabs;
