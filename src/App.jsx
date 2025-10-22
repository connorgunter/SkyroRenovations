import "./App.css";

//Components
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Slideshow from "./components/Slideshow/Slideshow.jsx";
import Hero from "./components/Hero/Hero.jsx";
import GetStarted from "./components/GetStarted/GetStarted.jsx";
import Services from "./pages/Services/Services.jsx";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  return (
    <>
      <div>
        <Hero />
        <Slideshow />
        <Services id="services" />
        <GetStarted />
        <Footer />
      </div>
    </>
  );
}

export default App;
