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
import Contact from "../components/contact";

import '../App.css';
import '../css/home.css';
import '../css/detail.css';

// data for background images
const bgImages = [
  bgImage1, bgImage2, bgImage3, bgImage4, bgImage5,
  bgImage6, bgImage7, bgImage8, bgImage9, bgImage10
];

// data for client reviews
const reviews = [
  { id: 1, text: "A temporay review", author: "Sarah W." },
  { id: 2, text: "A temporay review", author: "James T." },
  { id: 3, text: "A temporay review", author: "Emily R." },
  { id: 4, text: "A temporay review", author: "Michael B." },
  { id: 5, text: "A temporay review", author: "Jessica L." },
];

// data for pricing packages
const pricingPackages = [
  {
    id: 1,
    name: "Full Detail Package",
    basePrice: 145,
    features: [
                "Exterior wash", 
                "Wheel & tire cleaning", 
                "Exterior hand wax application", 
                "Interior vacuum", 
                "All interior surface cleaning/wipe down", 
                "Interior protectant application",
                "pet hair removal",
                "stain removal",
                "Window cleaning",
                "etc."
              ]
  },
  {
    id: 2,
    name: "Standard Package",
    basePrice: 130,
    features: ["Exterior wash", 
                "Wheel & tire cleaning",
                "Interior vacuum", 
                "All interior surface cleaning/wipe down", 
                "Interior protectant application",
                "pet hair removal",
                "stain removal",
                "Window cleaning",
              ]
  },
  {
    id: 3,
    name: "Exterior Package",
    basePrice: 95,
    features: ["Exterior wash", 
                "Wheel & tire cleaning",
                "Exterior hand wax application"
              ]
  },
  {
    id: 4,
    name: "Interior Package",
    basePrice: 95,
    features: [
                "Interior vacuum", 
                "All interior surface cleaning/wipe down", 
                "Interior protectant application",
                "pet hair removal",
                "stain removal"
              ]
  }
];

// Vehicle types and their price adjustments
const vehicleTypes = [
  { id: 'sedan', name: 'Sedan' },
  { id: 'crossover', name: 'Crossover' },
  { id: 'suv', name: 'SUV' },
  { id: 'truck', name: 'Truck' },
];

const vehicleTypeSurcharges: { [key: string]: number } = {
  sedan: 1,
  crossover: 1.1,
  suv: 1.2,
  truck: 1.2,
};

// Extract all unique features across all packages dynamically
const allFeatures = Array.from(new Set(pricingPackages.flatMap(pkg => pkg.features)));

function Detail() {
  const [showContactModal, setShowContactModal] = useState(false);
  const [vehicleType, setVehicleType] = useState('sedan');

  return (
    
    <div className="detail-page">
        
      <div className="bg-scroll-container">
        <div className="navbar-wrapper">
          <Navbar onContactClick={() => setShowContactModal(true)} />
        </div>

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
          <h1 className="detail-hero-title">Mobile Car Detailing</h1>
          <p className="detail-hero-subtitle">We bring the professional detail to you!</p>
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

        <div className="pricing-section">
          <h2 className="pricing-title">Pricing Packages</h2>
          <div className="vehicle-type-selector">
            <h4 className="vehicle-type-title">Select Your Vehicle Type</h4>
            <div className="vehicle-options">
              {vehicleTypes.map(type => (
                <label key={type.id} className="vehicle-option">
                  <input
                    type="radio"
                    name="vehicleType"
                    value={type.id}
                    checked={vehicleType === type.id}
                    onChange={(e) => setVehicleType(e.target.value)}
                  />
                  <span>{type.name}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="pricing-table-container">
            <table className="pricing-table">
              <thead>
                <tr>
                  <th className="feature-col">Features</th>
                  {pricingPackages.map((pkg) => (
                    <th key={pkg.id}>
                      <div className="pkg-header">
                        <h3>{pkg.name}</h3>
                        <p className="price">Starting at ${Math.round((pkg.basePrice * vehicleTypeSurcharges[vehicleType]) / 5) * 5}</p>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {allFeatures.map((feature, idx) => (
                  <tr key={idx}>
                    <td className="feature-name">{feature}</td>
                    {pricingPackages.map((pkg) => (
                      <td key={pkg.id} className="feature-check">
                        {pkg.features.includes(feature) ? '✔️' : '❌'}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td></td>
                  {pricingPackages.map((pkg) => (
                    <td key={pkg.id}>
                      <button className="quote-button" onClick={() => setShowContactModal(true)}>Get a Quote</button>
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>

      {showContactModal && (
        <Contact onClose={() => setShowContactModal(false)} />
      )}

      <div className="photographyFooter">
        <p>2026 cay1or.dev</p>
      </div>
    </div>
  );
}

export default Detail;