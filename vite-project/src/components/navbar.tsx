import { Link } from 'react-router-dom'
import '../css/navbar.css';

function Navbar({ onContactClick }: { onContactClick: () => void }) {
  return (

    <div className="navbar">
      
      <div className="navbarTitle">
        <Link to="/">cay1or.dev</Link>
      </div>

      <div className="navbarLinks">
        <Link to="/photography">Photography</Link>
        <a href="#work">Web Design</a>
        <a href="#services">Software</a>
      </div>

      <div className="navbarContact">
        <button onClick={onContactClick}>Contact</button>
      </div>

    </div>

  );
}

export default Navbar;