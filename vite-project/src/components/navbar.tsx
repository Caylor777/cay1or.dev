import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';

function Navbar({ onContactClick }: { onContactClick: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleContactClick = () => {
    onContactClick();
    closeMenu();
  };

  return (
    <div className="navbar">
      
      <div className="navbarTitle">
        <Link to="/" onClick={closeMenu}>cay1or.dev</Link>
      </div>

      <button 
        className={`hamburger ${isOpen ? 'open' : ''}`} 
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <div className={`navbarMenu ${isOpen ? 'active' : ''}`}>
        <div className="navbarLinks">
          <Link to="/photography" onClick={closeMenu}>Photography</Link>
        </div>

        <div className="navbarContact">
          <button onClick={handleContactClick}>Contact</button>
        </div>
      </div>

    </div>
  );
}

export default Navbar;
