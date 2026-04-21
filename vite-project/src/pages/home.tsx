import { useState } from 'react';
import bgImage from '../assets/bg.png';

import Navbar from "../components/navbar";
import HomeInfo from "../components/homeInfo";
import Footer from "../components/footer";
import Contact from "../components/contact";

import '../App.css';

function Home() {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <div>
      <img className="bgImage" src={bgImage} alt="Background Image"/>
      <Navbar onContactClick={() => setShowContactModal(true)} />
      <HomeInfo />
      <Footer />
      {showContactModal && (
        <Contact onClose={() => setShowContactModal(false)} />
      )}
    </div>
  );
}

export default Home;