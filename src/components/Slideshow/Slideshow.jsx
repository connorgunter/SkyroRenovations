import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slideshow.css";

import slide1 from "../../assets/IMG_5557.jpg";
import slide2 from "../../assets/IMG_5558.jpg";
import slide3 from "../../assets/IMG_5559.jpg";
import slide4 from "../../assets/IMG_5567.jpg";
import slide5 from "../../assets/IMG_5564.jpg";
import slide6 from "../../assets/IMG_5562.jpg";

function Slideshow() {
  return (
    <section id="gallery" className="slideshow-layout">
      <div className="slideshow-text">
        <h2>Recent Renovations</h2>
        <p>
          From luxury bathrooms to functional upgrades, Skyro Renovations
          delivers excellence with every detail. Swipe through some of our
          favorite projects.
        </p>
        <a href="/contact" className="slideshow-cta">
          Get a Free Quote →
        </a>
      </div>

      <div className="slideshow-container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop
        >
          {[slide1, slide2, slide3, slide4, slide5, slide6].map((src, idx) => (
            <SwiperSlide key={idx}>
              <img src={src} alt={`Project ${idx + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Slideshow;
