"use client";

import "./Scrolling.css";
import { useEffect, useRef } from "react";

function ScrollingText() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let position = 0;
    let direction = 1; // 1 = вправо, -1 = влево
    let lastScrollY = window.scrollY;
    let animationFrameId: number;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Скролл вниз -> текст движется вправо (direction = 1)
      if (currentScrollY > lastScrollY) {
        direction = 1;
      }
      // Скролл вверх -> текст движется влево (direction = -1)
      else if (currentScrollY < lastScrollY) {
        direction = -1;
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    const animate = () => {
      // Используем плюс, чтобы direction = 1 двигал вправо (увеличивал X), а -1 влево
      position += 1.2 * direction;

      if (trackRef.current) {
        // Делим общую ширину пополам, так как у нас есть "оригинал" и "клон" для бесшовности
        const trackWidth = trackRef.current.scrollWidth / 2;

        // БЕСШОВНАЯ ЛОГИКА
        // Если текст уехал слишком далеко вправо (появилась пустота слева):
        if (position > 0) {
          position -= trackWidth;
        }
        // Если текст уехал слишком далеко влево (появилась пустота справа):
        else if (position <= -trackWidth) {
          position += trackWidth;
        }

        trackRef.current.style.transform = `translateX(${position}px)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId); // Очищаем анимацию при демонтировании
    };
  }, []);

  const text = "ВЫБИРАЙТЕ ЛУЧШЕЕ • ВЫБИРАЙТЕ СЕБЯ • ВЫБИРАЙТЕ FITPULSE • ";

  return (
    <section className="running-text-section">
      <div className="running-text-wrapper">
        <div className="running-text-track" ref={trackRef}>
          {/* Рендерим 12 элементов. Массив делится пополам алгоритмом выше */}
          {[...Array(12)].map((_, index) => (
            <span key={index}>{text}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ScrollingText;
