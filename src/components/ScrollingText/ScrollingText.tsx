"use client";

import "./Scrolling.css";
import { useEffect, useRef } from "react";

function ScrollingText() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let position = 0;
    let direction = 1;
    let lastScrollY = window.scrollY;
    let animationFrameId: number;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        direction = 1;
      } else if (currentScrollY < lastScrollY) {
        direction = -1;
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    const animate = () => {
      position += 1.2 * direction;

      if (trackRef.current) {
        const trackWidth = trackRef.current.scrollWidth / 2;

        if (position > 0) {
          position -= trackWidth;
        } else if (position <= -trackWidth) {
          position += trackWidth;
        }

        trackRef.current.style.transform = `translateX(${position}px)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
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
