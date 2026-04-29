import { useState } from 'react';

import bgImage1 from '../assets/detail/1.png';
import bgImage2 from '../assets/detail/2.png';
import bgImage3 from '../assets/detail/3.png';
import bgImage4 from '../assets/detail/4.png';
import bgImage5 from '../assets/detail/5.png';
import bgImage6 from '../assets/detail/6.png';
import bgImage7 from '../assets/detail/7.png';
import bgImage8 from '../assets/detail/8.png';
import bgImage9 from '../assets/detail/9.png';
import bgImage10 from '../assets/detail/10.png';

import instagramIcon from "../assets/instagram.svg";

import Navbar from "../components/navbar";
import HomeInfo from "../components/homeInfo";
import Contact from "../components/contact";

import '../App.css';
import '../css/home.css';
import '../css/detail.css';

// Add your 10 image imports here. 
// For now, we are repeating `bgImage` 10 times as a placeholder.
const bgImages = [
  bgImage1, bgImage2, bgImage3, bgImage4, bgImage5,
  bgImage6, bgImage7, bgImage8, bgImage9, bgImage10
];

// Placeholder mock data for client reviews
const reviews = [
  { id: 1, text: "An absolute professional! The photos are stunning.", author: "Sarah W." },
  { id: 2, text: "Captured our special day perfectly. Highly recommend!", author: "James T." },
  { id: 3, text: "Amazing attention to detail and so easy to work with.", author: "Emily R." },
  { id: 4, text: "The best photography experience we've ever had.", author: "Michael B." },
  { id: 5, text: "Creative, punctual, and delivered beyond expectations.", author: "Jessica L." },
  { id: 6, text: "Truly an artist. We will cherish these photos forever.", author: "David C." },
  { id: 7, text: "Made us feel so comfortable in front of the camera.", author: "Amanda K." },
  { id: 8, text: "Fantastic quality and very quick turnaround time.", author: "Robert M." },
];

function Detail() {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    
    <div className="detail-page">
        
        <Navbar onContactClick={() => setShowContactModal(true)} />
        
      <div className="bg-scroll-container">
        <div className="bg-scroll-overlay"></div>
        <div className="bg-scroll-track">
          {/* First set of images */}
          {bgImages.map((img, idx) => (
            <div key={`bg1-${idx}`} className="bg-scroll-image" style={{ backgroundImage: `url(${img})` }} />
          ))}
          {/* Exact duplicate set of images to create a seamless infinite loop */}
          {bgImages.map((img, idx) => (
            <div key={`bg2-${idx}`} className="bg-scroll-image" style={{ backgroundImage: `url(${img})` }} />
          ))}
        </div>
      </div>

      <div className="detail-content-wrapper">

        <div className="detail-hero">
          <h1 className="detail-hero-title">Your Vision, Captured.</h1>
          <p className="detail-hero-subtitle">A collection of moments, each telling a unique story through the lens.</p>
        </div>
        
        <div className="reviews-section">
          <h2 className="reviews-title">What Clients Are Saying</h2>
          <div className="reviews-scroll-container">
            <div className="reviews-scroll-track">
              {/* First set of reviews */}
              {reviews.map((review, idx) => (
                <div key={`rev1-${idx}`} className="review-card">
                  <p className="review-text">"{review.text}"</p>
                  <h4 className="review-author">- {review.author}</h4>
                </div>
              ))}
              {/* Duplicate set for endless loop */}
              {reviews.map((review, idx) => (
                <div key={`rev2-${idx}`} className="review-card">
                  <p className="review-text">"{review.text}"</p>
                  <h4 className="review-author">- {review.author}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showContactModal && (
        <Contact onClose={() => setShowContactModal(false)} />
      )}

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

export default Detail;