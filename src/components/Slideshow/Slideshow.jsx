// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "./Slideshow.css"; // Create for custom styles

// import slide1 from "../../assets/IMG_5557.jpg";
// import slide2 from "../../assets/IMG_5558.jpg";
// import slide3 from "../../assets/IMG_5559.jpg";

// function Slideshow() {
//   return (
//     <div className="slideshow-container">
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         spaceBetween={30}
//         slidesPerView={1}
//         navigation
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 4000 }}
//         loop
//       >
//         <SwiperSlide>
//           <img src={slide1} alt="Slide 1" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide2} alt="Slide 2" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide3} alt="Slide 3" />
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// }

// export default Slideshow;

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slideshow.css";

import slide1 from "../../assets/IMG_5557.jpg";
import slide2 from "../../assets/IMG_5558.jpg";
import slide3 from "../../assets/IMG_5559.jpg";

function Slideshow() {
  return (
    <div id="gallery" className="slideshow-layout">
      <div className="side left">
        <p className="vertical-label">SKYRO RENOVATIONS</p>
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
          <SwiperSlide>
            <img src={slide1} alt="Project 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="Project 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt="Project 3" />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="side right">
        <p className="vertical-label">TRANSFORMING SPACES</p>
      </div>
    </div>
  );
}

export default Slideshow;
