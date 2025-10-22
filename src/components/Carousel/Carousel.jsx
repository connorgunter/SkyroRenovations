import { useEffect, useRef, useState } from "react";
import "./Carousel.css";

export default function Carousel({
  images = [],
  autoPlay = true,
  interval = 5000,
  ariaLabel = "Project photos",
  ratio = "3/4",         // ← portrait by default
  fit = "cover",         // "cover" (slight crop) or "contain" (no crop, letterbox)
}) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const goTo = (i) => setIndex((i + images.length) % images.length);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  useEffect(() => {
    if (!autoPlay || images.length < 2) return;
    timerRef.current = setInterval(next, interval);
    return () => clearInterval(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, autoPlay, interval, images.length]);

  if (!images.length) return null;

  return (
    <div
      className="carousel"
      aria-label={ariaLabel}
      style={{ "--ratio": ratio, "--fit": fit }}
    >
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <div className="carousel-slide" key={i}>
            <img src={img.src} alt={img.alt || `Slide ${i + 1}`} />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button className="carousel-nav prev" onClick={prev} aria-label="Previous slide">‹</button>
          <button className="carousel-nav next" onClick={next} aria-label="Next slide">›</button>
          <div className="carousel-dots" role="tablist">
            {images.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === index ? "active" : ""}`}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-selected={i === index}
                role="tab"
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
