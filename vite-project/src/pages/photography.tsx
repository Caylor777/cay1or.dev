import { useState } from 'react';

import Navbar from "../components/navbar";
import CameraDetailModal from '../components/cameraDetailModal';
import Contact from "../components/contact"; // This file seems to be missing from the context, but I'll assume it's correct.
import { camerasData } from './cameras';
import type { CameraData } from './cameras';
import instagramIcon from "../assets/instagram.svg";

import '../css/photography.css';

function Photography() {
  const [showContactModal, setShowContactModal] = useState(false);
  const [selectedCamera, setSelectedCamera] = useState<CameraData | null>(null);

  return (
    <div>
        <Navbar onContactClick={() => setShowContactModal(true)} />
        {showContactModal && (
        <Contact onClose={() => setShowContactModal(false)} />
        )}
        {selectedCamera && (
          <CameraDetailModal 
            camera={selectedCamera} 
            onClose={() => setSelectedCamera(null)}
            onContactClick={() => {
              setSelectedCamera(null); // Close the detail modal
              setShowContactModal(true); // Open the contact modal
            }}
          />
        )}
        <h1 className="photographyTitle">Photography</h1>
        <div className="cameras">
          {camerasData.map((camera) => (
            <div key={camera.id} className={camera.category.toLowerCase()} onClick={() => setSelectedCamera(camera)}>
              <h1 className={`${camera.category.toLowerCase()}Title`}>{camera.category}</h1>
              <div className={`${camera.category.toLowerCase()}Container`}>
                <div className={`${camera.category.toLowerCase()}Image`}>
                  <img src={camera.image} alt={camera.alt} />
                </div>
                <div className={`${camera.category.toLowerCase()}Content`}>
                  <div className={`${camera.category.toLowerCase()}Info`}>
                    <h2>{camera.name}</h2>
                    <p>{camera.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="photographyFooter">
        <a href="https://www.instagram.com/cay1or/">
          <div className="instagramLink">
            <h3>@cay1or</h3>
            <img className="instagramIcon" src={instagramIcon} alt="Instagram Icon"/>
          </div>
        </a>

        <p>2026 cay1or.dev</p>
        </div>    </div>
  );
}

export default Photography;