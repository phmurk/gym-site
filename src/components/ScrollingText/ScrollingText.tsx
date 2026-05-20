import "./Scrolling.css";
import { useEffect, useRef } from "react";

function ScrollingText() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let position = 0;
    let direction = 1;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        direction = 1;
      } else {
        direction = -1;
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    const animate = () => {
      position -= 1.2 * direction;

      if (trackRef.current) {
        const trackWidth = trackRef.current.scrollWidth / 2;

        if (Math.abs(position) >= trackWidth) {
          position = 0;
        }

        trackRef.current.style.transform = `translateX(${position}px)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const text = "ВЫБИРАЙТЕ ЛУЧШЕЕ • ВЫБИРАЙТЕ СЕБЯ • ВЫБИРАЙТЕ FITPULSE • ";

  return (
    <section className="running-text-section">
      <div className="running-text-wrapper">
        <div className="running-text-track" ref={trackRef}>
          {[...Array(12)].map((_, index) => (
            <span key={index}>{text}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ScrollingText;
