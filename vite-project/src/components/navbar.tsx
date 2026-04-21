import '../css/navbar.css';

function Navbar({ onContactClick }: { onContactClick: () => void }) {
  return (

    <div className="navbar">
      
      <div className="navbarTitle">
        <a href="#home">cay1or.dev</a>
      </div>

      <div className="navbarLinks">
        <a href="#photography">Photography</a>
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