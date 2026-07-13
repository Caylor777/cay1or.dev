import React from 'react';
import '../css/cameraDetailModal.css';
import type { CameraData } from '../pages/cameras';


interface CameraDetailModalProps {
  camera: CameraData;
  onClose: () => void;
  onContactClick: () => void;
}

const CameraDetailModal: React.FC<CameraDetailModalProps> = ({ camera, onClose, onContactClick }) => {
  // Stop propagation to prevent closing the modal when clicking inside it
  const handleModalContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className="cameraModalOverlay" onClick={onClose}>
      <div className="cameraModal" onClick={handleModalContentClick}>
        <button className="closeButton" onClick={onClose}>&times;</button>
        
        <div className="modalHeader">
          <img src={camera.image} alt={camera.name} className="modalCameraImage" />
          <div className="modalHeaderText">
            <h1>{camera.name}</h1>
            <p className="modalCategory">{camera.category} Photography</p>
          </div>
        </div>

        <div className="modalContent">
          <div className="modalDetails">
            <h3>Details</h3>
            <p>{camera.modalInfo.details}</p>
            <h3>Pricing</h3>
            <p>{camera.modalInfo.price}</p>
            <button className="contactButton" onClick={onContactClick}>Contact for a Shoot</button>
          </div>
          <div className="modalGallery">
            <h3>Gallery</h3>
            <div className="galleryImages">
              {/* You can map through your gallery images here */}
              <p>Gallery images will be displayed here.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CameraDetailModal;