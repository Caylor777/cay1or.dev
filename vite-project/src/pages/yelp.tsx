import { useEffect} from 'react';
import yelpIcon from "../assets/yelp.svg";
import "../css/yelp.css";

export default function YelpRedirect() {
  const yelpUrl = "https://www.yelp.com/biz/c-and-m-mobile-auto-detailing-jacksonville";

  useEffect(() => {
    window.location.replace(yelpUrl);
  }, []);

  return (
    <div className="yelp-container">
      <img src={yelpIcon} alt="Yelp Logo" className="yelp-logo" />
      <div className="spinner"></div>
      <h1 className="yelp-title">Taking you to Yelp...</h1>
      <p className="yelp-subtitle">
        We're redirecting you to C&M Mobile Auto Detailing's Yelp page
        <br />
        Check out our reviews and photos!
      </p>
      <a 
        href={yelpUrl} 
        className="yelp-button"
      >
        Click here to go now
      </a>
    </div>
  );
}
