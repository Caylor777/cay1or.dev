import instagramIcon from "../assets/instagram.svg";

import "../css/footer.css";

function Footer() {
  return (
    <div className="footer">
      <p>2026 cay1or.dev</p>

      <a href="https://www.instagram.com/cay1or/"><div className="instagramLink">
        <h3>@cay1or</h3>
        <img className="instagramIcon" src={instagramIcon} alt="Instagram Icon"/>
      </div></a>

    </div>
  );
}

export default Footer;