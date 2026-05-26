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

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2500);

    return () => clearInterval(interval);
  }, [current]);

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

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: any,
  ) => {
    if (info.offset.x < -80) {
      nextSlide();
    }

    if (info.offset.x > 80) {
      prevSlide();
    }
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
              drag="x"
              dragConstraints={{
                left: 0,
                right: 0,
              }}
              onDragEnd={handleDragEnd}
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
        </div>
      </div>
    </section>
  );
}

export default ScrollGallery;
