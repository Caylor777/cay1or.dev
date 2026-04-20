import '../css/navbar.css';

function Navbar() {
  return (

    <div className="navbar">
      
      <div className="navbarTitle">
        <a href="#home">cay1or.dev</a>
      </div>

      <div className="navbarLinks">
        <a href="#about">About</a>
        <a href="#photography">Photography</a>
        <a href="#work">Web Design</a>
        <a href="#services">Software</a>
      </div>

      <div className="navbarContact">
        <a href="#contact">Contact</a>
      </div>

    </div>

  );
}

export default Navbar;