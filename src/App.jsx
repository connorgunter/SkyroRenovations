import "./App.css";

//Components
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Slideshow from "./components/Slideshow/Slideshow.jsx";
import Hero from "./components/Hero/Hero.jsx";
function App() {
  return (
    <>
      <div>
        <Hero />
        <Slideshow />
        <Footer />
      </div>
    </>
  );
}

export default App;
