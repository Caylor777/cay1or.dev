import { useState } from 'react';

import Navbar from "../components/navbar";
import Contact from "../components/contact";

import DJI from "../assets/DJImini2.png"
import sony from "../assets/sonyA6100.png"
import pentax from "../assets/pentaxME.png"
import instagramIcon from "../assets/instagram.svg";

import '../css/photography.css';

function Photography() {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <div>
        <Navbar onContactClick={() => setShowContactModal(true)} />
        {showContactModal && (
        <Contact onClose={() => setShowContactModal(false)} />
        )}
        <h1 className="photographyTitle">Photography</h1>
        <div className="cameras">
            <div className="aerial">
                <h1 className="aerialTitle">Aerial</h1>
                <div className="aerialContainer">
                    <div className="aerialImage">
                        <img src={DJI} alt="DJI mini 2" />
                    </div>
                    <div className="aerialContent">
                        <div className="aerialInfo">
                            <h2>DJI mini 2</h2>
                            <p>Contact me for more information about a shoot with this drone</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="digital">
                <h1 className="digitalTitle">Digital</h1>
                <div className="digitalContainer">
                    <div className="digitalImage">
                        <img src={sony} alt="Sony A6100" />
                    </div>
                    <div className="digitalContent">
                        <div className="digitalInfo">
                            <h2>Sony A6100</h2>
                            <p>Contact me for more information about a shoot with this camera</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="film">
                <h1 className="filmTitle">Film</h1>
                <div className="filmContainer">
                    <div className="filmImage">
                        <img src={pentax} alt="Pentax ME" />
                    </div>
                    <div className="filmContent">
                        <div className="filmInfo">
                            <h2>Pentax ME</h2>
                            <p>55$ per 36 exposures developed and scanned, 45$ bring your own film</p>
                            <p>Contact me for more information about a shoot with this camera</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="photographyFooter">
        <p>2026 cay1or.dev</p>

        <a href="https://www.instagram.com/cay1or/">
        
        <div className="instagramLink">
          <h3>@cay1or</h3>
          <img className="instagramIcon" src={instagramIcon} alt="Instagram Icon"/>
        </div></a>

      </div>
    </div>
  );
}

export default Photography;