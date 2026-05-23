import { useEffect } from 'react';

import yelpIcon from "../assets/yelp.svg";

export default function YelpRedirect() {
  useEffect(() => {
    //window.location.replace("https://www.yelp.com/biz/c-and-m-mobile-auto-detailing-jacksonville");
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', fontFamily: 'sans-serif' }}>
      <img src={yelpIcon} alt="Yelp Logo" style={{ width: '150px', marginBottom: '20px' }} />
      <p>Redirecting to Yelp...</p>
      <a 
        href="https://www.yelp.com/biz/c-and-m-mobile-auto-detailing-jacksonville" 
        style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#303030', color: 'white', textDecoration: 'none', borderRadius: '5px', fontWeight: 'bold' }}
      >
        Click here if not redirected
      </a>
    </div>
  );
}
