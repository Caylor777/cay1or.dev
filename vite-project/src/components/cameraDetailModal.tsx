import React, { useState, useEffect } from 'react';
import '../css/cameraDetailModal.css';
import type { CameraData } from '../pages/cameras';


interface CameraDetailModalProps {
  camera: CameraData;
  onClose: () => void;
  onContactClick: () => void;
}

const CameraDetailModal: React.FC<CameraDetailModalProps> = ({ camera, onClose, onContactClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { gallery } = camera.modalInfo;

  // Reset index when camera changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [camera]);

  // Stop propagation to prevent closing the modal when clicking inside it
  const handleModalContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? gallery.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const isLastSlide = currentIndex === gallery.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
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
              {gallery.length > 0 ? (
                <div className="galleryContainer">
                  <div className="gallerySlider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {gallery.map((image, index) => (
                      <img key={index} src={image} alt={`${camera.name} gallery image ${index + 1}`} className="gallerySlide" />
                    ))}
                  </div>
                  {gallery.length > 1 && (
                    <>
                      <button className="galleryArrow left" onClick={goToPrevious}>&#10094;</button>
                      <button className="galleryArrow right" onClick={goToNext}>&#10095;</button>
                    </>
                  )}
                  <div className="thumbnailContainer">
                    {gallery.map((image, index) => (
                      <img key={`thumb-${index}`} src={image} alt={`thumbnail ${index + 1}`} className={`thumbnail ${index === currentIndex ? 'active' : ''}`} onClick={() => setCurrentIndex(index)} />
                    ))}
                  </div>
                </div>
              ) : (<p>No gallery images available.</p>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CameraDetailModal;