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
        <a href="#media">Media</a>
        <Link to="/detail">Detail</Link>
      </div>

      <div className="navbarContact">
        <button onClick={onContactClick}>Contact</button>
      </div>

    </div>

  );
}

export default Navbar;