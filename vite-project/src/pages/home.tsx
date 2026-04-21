import bgImage from '../assets/bg.png';

import Navbar from "../components/navbar";
import HomeInfo from "../components/homeInfo";
import Footer from "../components/footer";

import '../App.css';

function Home() {
  return (
    <div>
      <img className="bgImage" src={bgImage} alt="Background Image"/>
      <Navbar />
      <HomeInfo />
      <Footer />
    </div>
  );
}

export default Home;