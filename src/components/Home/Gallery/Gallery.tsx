import "./Gallery.css";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import img1 from "../../../assets/images/img1.jpg";
import img2 from "../../../assets/images/img2.jpg";
import img3 from "../../../assets/images/img3.jpg";
import img4 from "../../../assets/images/img4.jpg";
import img5 from "../../../assets/images/img5.jpg";
import img6 from "../../../assets/images/img6.jpg";
import img7 from "../../../assets/images/img7.jpg";
import img8 from "../../../assets/images/img8.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

function ScrollGallery() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [current, isPlaying]);

  const prevIndex = current === 0 ? images.length - 1 : current - 1;

  const nextIndex = current === images.length - 1 ? 0 : current + 1;

  const nextSlide = () => {
    setDirection(1);

    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);

    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section className="scroll-gallery">
      <div className="container">
        <div className="scroll-gallery-header">
          <p className="scroll-gallery-subtitle">FITPULSE</p>

          <h2 className="scroll-gallery-title">
            Атмосфера,
            <span> в которую хочется вернуться</span>
          </h2>

          <div className="scroll-gallery-line"></div>
        </div>

        <div className="gallery-wrapper">
          <div
            className="side-image left-image"
            style={{
              backgroundImage: `url(${images[prevIndex]})`,
            }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="main-image"
              style={{
                backgroundImage: `url(${images[current]})`,
              }}
              initial={{
                x: direction > 0 ? 220 : -220,
                opacity: 0,
                scale: 0.96,
              }}
              animate={{
                x: 0,
                opacity: 1,
                scale: 1,
              }}
              exit={{
                x: direction > 0 ? -220 : 220,
                opacity: 0,
                scale: 0.96,
              }}
              transition={{
                duration: 0.45,
                ease: "easeInOut",
              }}
            >
              <div className="gallery-overlay" />

              <div className="gallery-counter">0{current + 1}</div>
            </motion.div>
          </AnimatePresence>

          <div
            className="side-image right-image"
            style={{
              backgroundImage: `url(${images[nextIndex]})`,
            }}
          />
          <button className="gallery-btn prev-btn" onClick={prevSlide}>
            ←
          </button>

          <button className="gallery-btn next-btn" onClick={nextSlide}>
            →
          </button>

          <button
            className="gallery-play-btn"
            aria-label={
              isPlaying ? "Остановить автопрокрутку" : "Запустить автопрокрутку"
            }
            title={
              isPlaying ? "Остановить автопрокрутку" : "Запустить автопрокрутку"
            }
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                className="bi bi-pause"
                viewBox="0 0 16 16"
              >
                <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5m4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                className="bi bi-play"
                viewBox="0 0 16 16"
              >
                <path d="M10.804 8 5 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

export default ScrollGallery;
