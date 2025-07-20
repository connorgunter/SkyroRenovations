import "./App.css";

//Components
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Slideshow from "./components/Slideshow/Slideshow.jsx";
import Hero from "./components/Hero/Hero.jsx";
import GetStarted from "./components/GetStarted/GetStarted.jsx";
function App() {
  return (
    <>
      <div>
        <Hero />
        <Slideshow />
        <GetStarted />
        <Footer />
      </div>
    </>
  );
}

export default App;
