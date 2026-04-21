import { useState } from 'react';
import bgImage from '../assets/bg.png';
import instagramIcon from "../assets/instagram.svg";

import Navbar from "../components/navbar";
import HomeInfo from "../components/homeInfo";
import Contact from "../components/contact";

import '../App.css';
import '../css/home.css';

function Home() {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <div>
      <img className="bgImage" src={bgImage} alt="Background Image"/>
      <Navbar onContactClick={() => setShowContactModal(true)} />
      <HomeInfo />

      <div className="footer">
      <p>2026 cay1or.dev</p>

      <a href="https://www.instagram.com/cay1or/"><div className="instagramLink">
        <h3>@cay1or</h3>
        <img className="instagramIcon" src={instagramIcon} alt="Instagram Icon"/>
      </div></a>

    </div>

      {showContactModal && (
        <Contact onClose={() => setShowContactModal(false)} />
      )}
    </div>
  );
}

export default Home;