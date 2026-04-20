import Navbar from "../components/navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <img className="bg-image" src="../assets/bg.jpg" alt="Background Image"/>
      <h1>Welcome to the Main Page</h1>
      <p>This is the main content of the application.</p>
    </div>
  );
}

export default Home;